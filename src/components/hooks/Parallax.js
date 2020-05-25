import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.

const calc = o => `translateY(${o * 0.2}px)`;

const Parallax = ({ children, style }) => {
 const ref = useRef();

 const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

 const handleScroll = () => {
  const posY = ref.current.getBoundingClientRect().top;
  const offset = window.pageYOffset - posY;
  set({ offset });
  // console.log(offset);
 };

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 });

 return (<animated.div style={{
  ...style,
  transform: offset.interpolate(calc)
 }} ref={ref}>{children}</animated.div>)
}

export default Parallax;