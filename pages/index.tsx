import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import TimerContainer from "../components/TimerContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TimerInput from "../components/TimerInput";

const Home: NextPage = () => {
  const [time, setTime] = useState<number>(1);
  const [newTime, setNewTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("Time Until Launch");

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now: number = new Date().getTime();
      const difference: number = countDownDate - now;

      const newDays: number = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours: number = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes: number = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds: number = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      const displayMessage: string =
        newMinutes <= 10 ? "We're Launching Soon!" : "Time Until Launch";
      setMessage(displayMessage);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  const timeToDays: number = time * 60 * 60 * 24 * 1000;

  const countDownDate: number = new Date().getTime() + timeToDays;

  const handleClick = (): void => {
    setTime(newTime);
    setNewTime(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputTime: number = Number(e.target.value);
    setNewTime(inputTime);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header message={message} />
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <TimerInput
        value={newTime}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
