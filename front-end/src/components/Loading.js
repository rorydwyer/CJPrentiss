import { useEffect } from "react";

const Loading = ({ loaded }) => {
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        document.body.style.overflowY = "scroll";
      }, 500);
    }
  }, [loaded]);

  document.body.style.overflow = "hidden";

  return (
    <div
      id="loading"
      style={{ borderWidth: "18px" }}
      className={`w-screen h-screen transform bg-gray-200 duration-1000 ease-out fixed overflow-hidden z-50 border-white transition
       ${loaded ? "-translate-y-full border-none bg-white" : ""} `}
    ></div>
  );
};

export default Loading;
