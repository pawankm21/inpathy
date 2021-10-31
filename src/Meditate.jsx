import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tab from "./Tab";
import {useHistory} from 'react-router-dom'
function Meditate() {
  const TIPS = [
    {
      id: 0,
      messages: [
        "Breathing exercises: Great for acute stress because they work quickly.",
        "Cognitive reframing: Learn to change the way you look at the situation to manage your stress levels.",
        "Mini-meditation: A quick, 5-minute meditation technique can help you to calm down in the moment.",
        "Progressive muscle relaxation (PMR): Like breathing exercises, PMR will give you a moment to regroup and relax.",
      ],
    },
    {
      id: 1,
      messages: [
        "Cultivate supportive relationships: Having a solid support system is a crucial coping mechanism.",
        "Exercise regularly: Exercise and stress management are closely linked for several reasons.",
        "Listen to music: Music can act as a wonderful, stress-reducing backdrop to everyday tasks.",
        "Maintain a healthy diet: Fueling your body well can help with overall stress levels because your entire system will function better.",
        "Meditate regularly: While quick meditations are great for dealing with acute stress, a regular meditation practice will help build your overall resilience to stress.",
      ],
    },
    {
      id: 2,
      messages: [
        "Let music aid you: Music can help relax your mind and body.",
        "Practice mindfulness: Mindfulness can help keep you rooted in the present moment.",
        "Talk to a friend: Learn about the several different types of social support friends can offer you.",
        "Talk to a therapist: A therapist can help you identify the source of your emotional stress as well as which strategies and techniques may help you best combat your stress.",
        "Write in a journal: There are several different journaling strategies to try, all with benefits.",
      ],
    },
    {
      id: 3,
      messages: [
        "Get more enjoyment out of your current job: If you landed in a job you don't love, all is not lost. Learn how to make your job more fulfilling.",
        "Indulge in hobbies: Don't wait until your life calms down to engage in your hobbies.",
        "Make your weekends count: Learn how to bring some of your weekend into your work week for less stress.",
        "Maintain a sense of humor: Use laughter to bring joy into you day and increase your overall health.",
        "Take some time off: A little time away from the stresses of daily life can leave you feeling refreshed and better equipped to handle stress.",
      ],
    },
  ];
  const [progress, setProgress] = useState(0);
  const [stop, setStop] = useState(false);
  const history = useHistory()

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
            <>
            <p className="italic relative lg:bottom-12 p-4 bottom-16 mt-1 text-white">
              {
                "Take it easy..."
              }
            </p>
            <p>
              {TIPS[Math.floor(Math.random() * TIPS.length)].messages.map(
                (message, id) => (
                  <li key={id} className="text-white">{message}</li>
                )
              )}
            </p>
            </>
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
              <button className="bg-green-500 p-2 rounded-lg focus:ring-4 shadow-lg ring-green-900 mt-3 text-green-900"
                onClick={(e) => {
                  history.push('/tips')
                }}
              >
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
