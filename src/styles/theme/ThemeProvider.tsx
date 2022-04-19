import React, { ReactChild, Children } from "react";
import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { selectTheme } from "slices/app/selectors";

export const ThemeProvider = (props: { children: ReactChild }) => {
  const theme = useSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>{Children.only(props.children)}</OriginalThemeProvider>
  );
};
