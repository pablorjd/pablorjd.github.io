import { useEffect } from "react";

export default function MouseLight() {
  useEffect(() => {
    const handleMouseMove = (e) => {
        console.log(e);
      const x = e.clientX;
      const y = e.clientY;

      document.body.style.setProperty("--x", `${x}px`);
      document.body.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    //   window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  return null;
}