import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tab from "./Tab";
function Meditate() {
  const [progress, setProgress] = useState(0);
  const [stop, setStop] = useState(false);
  // progress is a number between 0 and 100
  useEffect(() => {
    let interval = null;
    if (progress === 110) {
      setStop(true);
    }
    if (progress < 110 && !stop) {
      interval = setInterval(() => {
        setProgress(progress + 10);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stop, progress]);
  return (
    <div className="bg-white">
      <div className="flex flex-col h-screen my-auto items-center animate-fade">
        <div class=" lg:w-1/5 lg:h-1/5 mt-4 relative z-10 top-14 lg:top-5  text-center">
          {stop ? (
            <></>
          ) : (
            <CircularProgressbar
              value={progress}
              text={"Breath.."}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                textColor: "#fff",
                trailColor: "#284178",
                pathColor: "#F59E0B",
              })}
            />
          )}
        </div>

        <div className="bg-gradient-to-r relative bottom-0 h-screen w-screen py-48 border-t-2 border-blue-900 from-blue-400 to-blue-600 rounded-t-3xl shadow-2xl text-center flex f flex-col  my-auto items-center ">
          {!stop ? (
            <p className="italic relative lg:bottom-12 p-4 bottom-16 mt-1 text-white">
              {
                "Take it easy,Go slow,Don't rush,Breath in deeply, Breath out slowly,"
              }
            </p>
          ) : (
            <div className="rounded-lg bg-blue-700  border-2 border-blue-900  shadow-2xl  relative lg:bottom-28 lg:w-1/2 p-4 bottom-24 text-white">
              <h1>How are you feeling now?</h1>
              <div className="grid grid-col-5 mt-2 mb-2"></div>
              <button className="w-8 ">😄</button>
              <button className="w-8">😐</button>
              <button className="w-8">😞</button>
              <button className="w-8">😖</button>
              <button className="w-8">😭</button>
            </div>
          )}

          {stop ? (
            <div className="flex flex-col my-auto items-center relative bottom-24 ">
              <Tab></Tab>
              <button className="bg-green-500 p-2 rounded-lg focus:ring-4 shadow-lg ring-green-900 mt-3 text-green-900">
                Go to chat{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-900 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Meditate;
