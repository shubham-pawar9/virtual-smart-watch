import { useEffect, useState } from "react";

const useTime = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek = days[now.getDay()];
      const currentDate = now.getDate();
      const currentMonth = now.toLocaleString("default", { month: "short" });
      const currentYear = now.getFullYear();

      // Calculate angles for the hands
      const currentSecond = now.getSeconds();
      const secondAngle = (currentSecond / 60) * 360;
      const currentMinute = now.getMinutes();
      const minuteAngle = ((currentMinute + currentSecond / 60) / 60) * 360;
      const currentHour = now.getHours();
      const hourAngle = (((currentHour % 12) + minuteAngle / 360) / 12) * 360;

      // Update state to rotate hands
      setHour(currentHour.toLocaleString("en-US", { minimumIntegerDigits: 2 }));
      setMinute(
        currentMinute.toLocaleString("en-US", { minimumIntegerDigits: 2 })
      );
      setSecond(
        currentSecond.toLocaleString("en-US", { minimumIntegerDigits: 2 })
      );
      setDay(`${dayOfWeek}`);
      setDate(`${currentDate} ${currentMonth} ${currentYear}`);
      setHourRotation(hourAngle);
      setMinuteRotation(minuteAngle);
      setSecondRotation(secondAngle);
    };

    const intervalId = setInterval(updateTime, 1000); // Update every second

    updateTime(); // Initial update

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return {
    hour,
    minute,
    second,
    day,
    date,
    hourRotation,
    minuteRotation,
    secondRotation,
  };
};

export default useTime;
