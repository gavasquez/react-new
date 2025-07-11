import { useState, useEffect } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export type TraffictLigthColor = keyof typeof colors;

interface Props {
  color: TraffictLigthColor;
  valueDown?: number;
}

export const useTrafficLigth = ({ color, valueDown = 5 }: Props) => {
  const [light, setLight] = useState<TraffictLigthColor>(color);
  const [countDown, setCountDown] = useState(valueDown);

  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDown]);

  useEffect(() => {
    if (countDown > 0) return;

    setCountDown(5);

    if (light === "red") {
      setLight("yellow");
    }

    if (light === "yellow") {
      setLight("green");
    }

    if (light === "green") {
      setLight("red");
    }
  }, [countDown, light]);
  return {
    light,
    countDown,
    colors,
    percetnage: (countDown / 5) * 100,
    greenLight: light === "green" ? colors.green : 'bg-gray-500',
    yellowLight: light === "yellow" ? colors.yellow : 'bg-gray-500',
    redLight: light === "red" ? colors.red : 'bg-gray-500',
  };
};
