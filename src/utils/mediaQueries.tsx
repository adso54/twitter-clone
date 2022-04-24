export const breakpoints = {
  widescreen: 1285,
  laptop: 1005,
  tablet: 500,
};



export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};