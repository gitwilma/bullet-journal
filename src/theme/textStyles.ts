import { fontFamily, fontSize, lineHeight } from "./typography";

export const textStyles = {
  h1: {
    fontFamily: fontFamily.heading.bold,
    fontSize: fontSize.h1,
    lineHeight: lineHeight.h1,
  },
  h2: {
    fontFamily: fontFamily.heading.semibold,
    fontSize: fontSize.h2,
    lineHeight: lineHeight.h2,
  },
  h3: {
    fontFamily: fontFamily.heading.medium,
    fontSize: fontSize.h3,
    lineHeight: lineHeight.h3,
  },
  body: {
    fontFamily: fontFamily.body.regular,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },
  bodyBold: {
    fontFamily: fontFamily.body.bold,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },
};
