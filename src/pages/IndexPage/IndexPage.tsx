import React, { FC, ReactElement, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon, IconButton, Radio } from "ui";
import { LanguageSwitch } from "components";
import { Code } from "./styled";

import { saveTheme } from "styles/theme/utils";
import { selectThemeKey } from "slices/app/selectors";
import { postsSelector } from "slices/posts/selectors";
import { actions } from "slices/app";
import { fetchPosts } from "slices/posts/actions";

import { ThemeKeyType } from "slices/app/types";

const formatJSON = (data: Array<{}>, ellipsis = true) => {
  const string = JSON.stringify(data, null, 4);

  if (!ellipsis) {
    return string;
  }

  return `${string.slice(0, string.length - 2)},\n ...${string.slice(string.length - 2)}`;
};

export const IndexPage: FC = (): ReactElement => {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch<Dispatch>();
  const { loading, posts } = useSelector(postsSelector);

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;

    saveTheme(value);
    dispatch(actions.setTheme(value));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
      <Code>{loading ? "loading..." : formatJSON(posts)}</Code>
    </>
  );
};
