import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const ITyped = () => {
  const textRef = useRef();

  useEffect(() => {
    const myElement = textRef.current;
    const strings = ["نویسنده", "تاریخ شناس", "شاعر"];

    const instance = init(myElement, {
      strings: strings,
      typeSpeed: 120,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Clean up function to clear iTyped instance when the component unmounts
    return () => {
      instance?.destroy(); // Use optional chaining to avoid accessing destroy method if instance is undefined
    };
  }, []);

  return <span ref={textRef}></span>;
};

export default ITyped;
