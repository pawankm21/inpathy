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
    if (progress === 100) {
      setStop(true);
    }
    if (progress < 100 && !stop) {
      interval = setInterval(() => {
        setProgress(progress + 10);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stop, progress]);
  return (
    <div className="bg-blue-500">
      <div className="flex flex-col h-screen my-auto items-center">
        <div class=" lg:w-1/5 lg:h-1/5 mt-4 relative z-10 top-14 lg:top-5 ">
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
        </div>
        <div className="relative bottom-0 h-screen w-screen py-48 bg-white rounded-t-3xl shadow-2xl text-center">
          <p className="italicrelative bottom-10 p-4 ">
            {
              "Take it easy,Go slow,Don't rush,Breath in deeply, Breath out slowly,"
            }
          </p>

          <div className="flex flex-col my-auto items-center relative ">
            <Tab></Tab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meditate;
