import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ location }) => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setColor("rgb(55, 65, 81)");
      } else {
        setColor("white");
      }
    };

    window.addEventListener("scroll", listenScrollEvent);

    listenScrollEvent();
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      style={{ color: color }}
      className={`transition-all duration-700 ease-out fixed z-40 flex justify-end w-full nav-text font-light bg-opacity-0 text-lg pt-8 md:pt-20 pr-8 md:pr-24 ${
        color === "white" ? "" : "bg-white bg-opacity-100 shadow-sm pb-2 nav-body"
      }`}
    >
      <style>{`
        :root {
          --nav-color: ${color};
        }
      `}</style>
      <Link to="/" className="hover-underline-animation relative inline-block ml-14 p-2 pb-0 nav-text">
        home
      </Link>
      <Link to="/about" className="hover-underline-animation relative inline-block ml-14 p-2 pb-0">
        about
      </Link>
    </nav>
  );
};

export default Navigation;
