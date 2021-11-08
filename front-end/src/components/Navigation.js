import { useState, useEffect } from "react";

const Navigation = () => {
  const [color, setColor] = useState("white");

  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight - 100) {
      setColor("rgb(55, 65, 81)");
    } else {
      setColor("white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div style={{ color: color }} className="transition container fixed z-40 flex justify-end w-full pt-20  nav-text font-light text-lg">
      <style jsx>{`
        :root {
          --nav-color: ${color};
        }
      `}</style>
      <a className="hover-underline-animation relative inline-block ml-14 p-2 pb-0 nav-text" href="#">
        home
      </a>
      <a className="hover-underline-animation relative inline-block ml-14 p-2 pb-0" href="#">
        about
      </a>
    </div>
  );
};

export default Navigation;
