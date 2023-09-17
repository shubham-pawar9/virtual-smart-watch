import { useEffect, useState } from "react";

const useTime = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentSecond = now.getSeconds();

      // Calculate angles for the hands
      const secondAngle = (currentSecond / 60) * 360;
      const minuteAngle = ((currentMinute + currentSecond / 60) / 60) * 360;
      const hourAngle = (((currentHour % 12) + minuteAngle / 360) / 12) * 360;

      // Update state to rotate hands
      setHour(currentHour.toLocaleString("en-US", { minimumIntegerDigits: 2 }));
      setMinute(
        currentMinute.toLocaleString("en-US", { minimumIntegerDigits: 2 })
      );
      setSecond(
        currentSecond.toLocaleString("en-US", { minimumIntegerDigits: 2 })
      );
      setHourRotation(hourAngle);
      setMinuteRotation(minuteAngle);
      setSecondRotation(secondAngle);
    };

    const intervalId = setInterval(updateTime, 1000); // Update every second

    updateTime(); // Initial update

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return { hour, minute, second, hourRotation, minuteRotation, secondRotation };
};

export default useTime;
