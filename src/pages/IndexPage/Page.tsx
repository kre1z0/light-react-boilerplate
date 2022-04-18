import React, { FC, ReactElement, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon, IconButton, Radio } from "ui";
import { LanguageSwitch } from "components";

import { AppActions, selectThemeKey } from "store/app";
import { ThemeKeyType } from "store/app/types";
import { saveTheme } from "styles/theme/utils";

export const IndexPage: FC = (): ReactElement => {
  const theme = useSelector(selectThemeKey);

  const dispatch = useDispatch();
  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;

    saveTheme(value);
    dispatch({
      type: AppActions.SetTheme,
      payload: value,
    });
  };

  return (
    <>
      <Radio
        id="system"
        label="System theme"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="system"
        isSelected={theme === "system"}
      />
      <Radio
        id="light"
        label="Light"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="light"
        isSelected={theme === "light"}
      />
      <Radio
        id="dark"
        label="Dark"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="dark"
        isSelected={theme === "dark"}
      />
      <div style={{ display: "flex" }}>
        <Icon size="1rem" type="home" />
        <Icon size="1.5rem" type="home" />
        <Icon size="2rem" type="home" />
        <IconButton size="2.5rem" type="home" />
      </div>
      <LanguageSwitch />
    </>
  );
};
