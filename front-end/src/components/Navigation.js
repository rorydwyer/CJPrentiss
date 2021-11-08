import { useState, useEffect } from "react";

const Navigation = () => {
  const [color, setColor] = useState("white");

  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight - 28) {
      setColor("black");
    } else {
      setColor("white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div style={{ color: color }} className="transition container fixed z-40 flex justify-end w-full p-4 nav-text">
      <a className="hover:underline mx-2 p-2 nav-text" href="#">
        Home
      </a>
      <a className="hover:underline mx-2 p-2" href="#">
        About
      </a>
    </div>
  );
};

export default Navigation;
