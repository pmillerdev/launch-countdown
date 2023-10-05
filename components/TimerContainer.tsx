import React, { memo } from "react";
import NumberBox from "./NumberBox";

type TimeContainerProps = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: TimeContainerProps): JSX.Element => {
  let flipDays: boolean = false;
  let flipHours: boolean = false;
  let flipMinutes: boolean = false;
  let secondsFlip: boolean = true;

  if (
    Number(seconds) <= 0 &&
    Number(minutes) <= 0 &&
    Number(hours) <= 0 &&
    Number(days) <= 0
  ) {
    secondsFlip = false;
    flipMinutes = false;
    flipHours = false;
    flipDays = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    flipMinutes = true;
  }
  
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    flipMinutes = false;
    flipHours = true;
  }

  if (hours == 0) {
    flipHours = false;
    if (days != 0) {
      flipDays = true;
    }
  }

  // Add leading zeros to days, hours, minutes, and seconds if they are less than 10.
  days = Number(days) < 10 ? "0" + days : days;
  hours = Number(hours) < 10 ? "0" + hours : hours;
  minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
  seconds = Number(seconds) < 10 ? "0" + seconds : seconds;

  return (
    <div className=" mt-2 md:mt-20  rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
        <NumberBox amount={days} unit="Days" flip={flipDays} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-rose-500">
          :
        </span>
        <NumberBox amount={hours} unit="Hours" flip={flipHours} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-rose-500">
          :
        </span>
        <NumberBox amount={minutes} unit="Minutes" flip={flipMinutes} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-rose-500">
          :
        </span>
        <NumberBox amount={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};

export default memo(TimerContainer);
