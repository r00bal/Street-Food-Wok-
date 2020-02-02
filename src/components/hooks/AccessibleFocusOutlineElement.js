import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'

const FocusOutlineElement = styled.span`
${({ outline }) => outline ? null : NoOutlineOnFocus}
`


const NoOutlineOnFocus = css`
button {
 outline: none;
}
a {
 outline: none;
}
`


// Hook
export function AccessibleFocusOutlineElement({ children }) {

 const [enableOutline, setEnableOutline] = useState(false);
 const ref = useRef();
 useEffect(() => {
  window.addEventListener('keyup', handleKeydown);
 }, []); // Empty array ensures that effect is only run on mount and unmount

 const handleKeydown = (e) => {
  console.log(children)

  if (ref.current) {
   const isTabEvent = e.keyCode === 9;
   setEnableOutline(ref.current.children[0] === document.activeElement)
  }

 }

 return (
  <FocusOutlineElement ref={ref} outline={enableOutline}>
   {children}
  </FocusOutlineElement>
 );
}