import React, { useState, useEffect } from "react";
import PlayIconSVG from "../icons/playIcon";
import StopIconSVG from "../icons/StopIcon";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isActive) {
      intervalId = window.setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          if (minutes === 59) {
            setMinutes(0);
            setHours(hours + 1);
          } else {
            setMinutes(minutes + 1);
          }
        } else {
          setSeconds(seconds + 1);
        }
      }, 1000);
    }

    return () => window.clearInterval(intervalId);
  }, [isActive, seconds, minutes, hours]);

  const handleStartStopClick = () => setIsActive(!isActive);

  return (
    <div className="flex flex-col bg-white p-2 relative">
      <p className="text-xs text-gray pb-2">زمان</p>
      <div className="flex flex-row">
        <button
          className="absolute bottom-3 right-1"
          onClick={handleStartStopClick}
        >
          {isActive ? (
            <PlayIconSVG className="text-white bg-greenSvg rounded-full" />
          ) : (
            <StopIconSVG className="text-white bg-greenSvg rounded-full p-1" />
          )}
        </button>
        <h2 className="mr-6">{`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
      </div>
    </div>
  );
};

export default Timer;
