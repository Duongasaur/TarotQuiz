import styled from "styled-components";
import { Constellation } from "./Stars";
import { Moon } from "./Moon";
import { Mountain } from "./Mountain";
import { useEffect, useRef } from "react";

// const BG_COLOUR = "#5749aa";
const BG_COLOUR = "#3f3a8a";

const Wrapper = styled.section`
  position: fixed;
  background-color: ${BG_COLOUR};
  margin-top: 0;
  height: 100%;
  width: 100%;
`;

const useParallax = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const applyParallax = () => {
    if (parallaxRef.current) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      parallaxRef.current.style.transform = `translate3d(0, ${
        scrollTop * -0.15
      }px, 0)`;
    }
  };

  useEffect(() => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transition = "transform 0.2s linear";
      parallaxRef.current.style.willChange = "transform";
    }
    const onScroll = () => requestAnimationFrame(applyParallax);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return parallaxRef;
};

const Background = () => {
  const ref = useParallax();
  return (
    <Wrapper id="background">
      <div style={{ position: "relative", height: "100%" }} ref={ref}>
        <Moon />
        <Constellation />
      </div>
      <Mountain />
      <div className="MountainBK" />
    </Wrapper>
  );
};

export default Background;
