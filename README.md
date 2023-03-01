# RPI Controller for Live Stream and Robot Control
## Dependecies
### RPI Camera

### Apache Installation
1. Update Package List for RPI
```
sudo apt-get update
sudo apt-get upgrade
```
2. Install Apache
```
sudo apt install apache2 -y
```
3. To check if Apache was installed correctly. 

    Input your RPI's IP Address on your laptop web browser and the "Apache2 Debian Default Page" should load. 
    NOTE: Both laptop and RPI should be in the same network. 
    #### To find your RPI's address Input the following
    ```
    hostname -I
    ```
    
### React Installation
  1. Download nodejs
      ```
      sudo curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
      ```
  2. Install nodejs
      ```
      sudo apt install nodejs
      ```
  3. Verify nodejs
      ```
      node --version
      ```
      
      This should printout the current version of the nodejs that was installed.
      
### DJango Installation

  1. Install additional packages to connect Apache and Python (Django) 
  
      ```
      sudo apt install libapache2-mod-wsgi-py3
      ```
    
  2. Configure Python 3 for Django

      ```
      sudo apt install python3 python3-venv python3-pip
      ```
    
  3. Configuring Apache for Django

     Open Apache's default configuration file.

      ```
      sudo nano /etc/apache2/sites-enabled/000-default.conf
      ```
      Look for `</Virtual Host>` and add the following before the line. 
      ```
      Alias /static /home/pi/rpi-camera-django/client/static
          <Directory /home/pi/rpi-camera-django/client/static>
              Require all granted
          </Directory>

          <Directory /home/pi/rpi-camera-django/myapp>
              <Files wsgi.py>
                  Require all granted
              </Files>
          </Directory>

          WSGIDaemonProcess django python-path=/home/pi/rpi-camera-django python-home=/home/pi/djenv/
          WSGIProcessGroup django
          WSGIScriptAlias / /home/pi/rpi-camera-django/myapp/wsgi.py
      ```
  4. Download the source code from github
      ```
      sudo git clone https://github.com/boomacoh/rpi-camera-django
      ```
  5. Go into the source code files and build the react js app. 
  
      ```
      cd /home/pi/rpi-camera-django/client/static
      sudo npm install
      sudo npm run build
      ```
      
  6. Crate a new Python Virtual Environment
      ```
      cd ~
      python3 -m venv djenv
      ```
  7. Enter the virtual environment
    
      ```
      source /home/pi/djenv/bin/activate
      ```
    
      To know that we have entered the virtual environment, you will see a (djenv) in the terminal
      To exit virtual environment, just type `deactivate` into the terminal
      
  8. Install django
      ```
      sudo python3 -m pip install django
      ```
    
  9. Allowing access to RPI Djano Server
      ```
      sudo nano /home/pi/rpi-camera-django/myapp/settings.py
      ```
    
  10. Look for the following line
      ```
      ALLOWED_HOSTS = []
      ```
    
      And add your RPI's IP address inside the `[]`

      e.g.
      ```
      ALLOWED_HOSTS = ['192,168.0.1']
      ```
  11. Restart Apache
      ```
      sudo systemctl restart apache2
      ```
      


### uv4l Installation

  1. Install packages
        
      ```
      sudo apt-get install uv4l-decoder uv4l-encoder uv4l-renderer uv4l-server uv4l-webrtc
      ```
        
## Steps to update repository files.

  1. Delete source code.

      ```
      sudo rm -rf /home/pi/rpi-camera-django
      ```

  2. Re-Download github repository.

      ```
      sudo git clone https://github.com/boomacoh/rpi-camera-django
      ```

  3. Rebuild web app

      ```
      cd /home/pi/rpi-camera-django/client/static
      sudo npm install
      sudo npm run build
      ```

  4. Redo settings for ALLOWED HOSTS
      Look for `ALLOWED_HOSTS = []`

      And add your RPI's IP address inside the `[]`

      e.g.
      ```
      ALLOWED_HOSTS = ['192,168.0.1']
      ```

  5. Restart apache
      
     ```
     sudo systemctl restart apache2
     ```
        
