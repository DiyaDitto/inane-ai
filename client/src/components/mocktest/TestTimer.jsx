import {
  useEffect,
  useState,
} from "react";

function TestTimer() {

  const [seconds,
    setSeconds] =
    useState(1800);

  useEffect(() => {

    const timer =
      setInterval(() => {

      setSeconds(
        prev => prev - 1
      );

    }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    seconds % 60;

  return (
    <div className="bg-slate-900 p-4 rounded-xl text-white">

      Time Left:
      {" "}
      {minutes}:
      {remaining
        .toString()
        .padStart(2, "0")}

    </div>
  );
}

export default TestTimer;