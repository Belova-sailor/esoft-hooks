import { useState, useEffect } from "react";
import './window-size.css';

const WindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeWindow = () => {
    setSize(
      (size) =>
        (size = { width: window.innerWidth, height: window.innerHeight })
    );
  };

  useEffect(() => {
    console.log("effect");

    window.addEventListener("resize", resizeWindow);
    console.log(size);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [size]);

  return (
    <div className="size-wrap">
      <span>{`Ширина экрана - ${size.width} , высота - ${size.height}`}</span>
    </div>
  );
};

export default WindowSize;
