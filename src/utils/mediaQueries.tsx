import styled from 'styled-components'

const breakpoints = {
  widescreen: 1285,
  laptop: 1005,
  tablet: 500,
};

function generateStylesOnAllResolution(mobile:string,{
  tablet,laptop, widescreen
}:{ tablet:string, laptop:string, widescreen: string}, element: any = styled.div){

  return element`
  ${mobile}

  @media (min-width: ${breakpoints.tablet}px) {
      ${tablet}
  }

  @media (min-width: ${breakpoints.laptop}px) {
      ${laptop}
  }

  @media (min-width: ${breakpoints.widescreen}px) {
      ${widescreen}
  }
`
}

export {breakpoints, generateStylesOnAllResolution}