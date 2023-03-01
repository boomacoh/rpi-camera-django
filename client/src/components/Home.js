import React from "react";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight,
  ImArrowUp,
} from "react-icons/im";

const Home = () => {
  const upClick = async () => {
    try {
      console.log("up");
      // const result = await fetch('http://localhost:8080/upclick');
    } catch (error) {
      console.log(error);
    }
  };

  const downClick = async () => {
    try {
      console.log("down");
      // const result = await fetch('http://localhost:8080/downclick');
    } catch (error) {
      console.log(error);
    }
  };

  const leftClick = async () => {
    try {
      console.log("left");
      // const result = await fetch('http://localhost:8080/lefclick');
    } catch (error) {
      console.log(error);
    }
  };

  const rightClick = async () => {
    try {
      console.log("right");
      // const result = await fetch('http://localhost:8080/rightclick');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 h-screen">
      <div
        id="camera-view-placeholder"
        className="flex justify-center items-center bg-gray-600 w-4/6 h-full relative mx-auto text-white"
      >
        <div className="absolute w-full top-0 left-0 h-full">
          <video
            id="stream-viewer"
            className="absolute w-full top-0 left-0 h-full"
            controls
            autoPlay
          >
            <source
              src="http://localhost:8080/hls/stream.m3u8"
              type="application/x-mpegURL"
            />
          </video>
        </div>
        <div id="camera-pan" className="flex flex-col absolute top-10 right-10">
          <AiOutlinePlusCircle className="text-6xl my-2" />
          <AiOutlineMinusCircle className="text-6xl my-2" />
        </div>
        <div
          id="controller"
          className="flex flex-col absolute bottom-10 right-10 w-44"
        >
          <div className="flex justify-center items-center">
            <ImArrowUp className="text-6xl" onClick={upClick} />
          </div>
          <div className="flex justify-between items-center">
            <ImArrowLeft className="text-6xl" onClick={leftClick} />
            <ImArrowRight className="text-6xl" onClick={rightClick} />
          </div>
          <div className="flex justify-center items-center">
            <ImArrowDown className="text-6xl" onClick={downClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
