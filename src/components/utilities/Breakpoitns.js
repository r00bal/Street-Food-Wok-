import { css } from 'styled-components';

export const size = {
  small: 548,
  med: 960,
  large: 1140
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
  
    ${css(...args)}
  }
    `
  return acc;
}, {});
