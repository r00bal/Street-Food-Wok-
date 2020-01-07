
import { css } from 'styled-components';

// CSS Helper
export const fixedTop = css`
position: fixed;
top: ${({ top }) => top + "px"};
left:0;
`

export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => (css`
position: fixed;
${yProp}: ${y}px;
${xProp}:${x}px;
`
)


export const absolute = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => (css`
position: absolute;
${yProp}: ${y}px;
${xProp}:${x}px;
`
)
