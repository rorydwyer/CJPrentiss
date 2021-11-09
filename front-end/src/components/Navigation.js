import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ location }) => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    // if (location === "/about") {
    //   setColor("rgb(55, 65, 81)");
    // } else {
    //   setColor("white");
    // }

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
    <nav style={{ color: color }} className="transition container fixed z-40 flex justify-end w-full pt-20  nav-text font-light text-lg">
      <style jsx>{`
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
