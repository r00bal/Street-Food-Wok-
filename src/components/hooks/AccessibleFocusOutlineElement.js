
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'








// import React, { useState, useEffect, useRef } from 'react';
// import styled, { css } from 'styled-components'

// const RemoveFocuseOutline = styled.span`
// ${({ outline }) => outline ? null : NoOutlineOnFocus}
// `


// const NoOutlineOnFocus = css`
// button {
//  outline: none;
// }
// a, input {
//  outline: none;
// }
// `


// // Hook
// export function AccessibleFocusOutlineElement({ children }) {

//  const [enableOutline, setEnableOutline] = useState(false);
//  const ref = useRef(null);
//  useEffect(() => {
//   window.addEventListener('keyup', handleKeydown);
//  }, []); // Empty array ensures that effect is only run on mount and unmount

//  const handleKeydown = (e) => {

//   if (ref.current) {
//    // const isTabEvent = e.keyCode === 9;
//    setEnableOutline(ref.current.children[0] === document.activeElement)
//   }

//  }

//  return (
//   <RemoveFocuseOutline ref={ref} outline={enableOutline}>
//    {children}
//   </RemoveFocuseOutline>
//  );
// }