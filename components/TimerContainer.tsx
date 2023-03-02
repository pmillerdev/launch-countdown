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

  if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
    flipDays = false;
    flipHours = false;
    flipMinutes = false;
    secondsFlip = false;
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

  if (days < 10) {
    days = "0" + days;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className=" mt-2 md:mt-20  rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
        <NumberBox amount={days} unit="Days" flip={flipDays} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox amount={hours} unit="Hours" flip={flipHours} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox amount={minutes} unit="Minutes" flip={flipMinutes} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox amount={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};

export default memo(TimerContainer);
