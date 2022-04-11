
import { css } from "styled-components"

const sizes = {
  widescreen: 1285,
  laptop: 1005,
  tablet: 500,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})