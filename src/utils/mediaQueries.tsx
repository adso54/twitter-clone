import styled from 'styled-components'

const breakpoints = {
  widescreen: 1285,
  laptop: 1005,
  tablet: 500,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};


function generateStylesOnAllResolution(mobile:string,{
  tablet,laptop, widescreen
}:{ tablet:string, laptop:string, widescreen: string}, element: any = styled.div){

  return element`
  ${mobile}

  @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.laptop - 1}px)
      ${tablet}
  }

  @media (min-width: ${breakpoints.laptop}px) and (max-width: ${breakpoints.widescreen - 1}px)
      ${laptop}
  }

  @media (min-width: ${breakpoints.widescreen}px) 
      ${widescreen}
  }
`
}

export {breakpoints, generateStylesOnAllResolution}