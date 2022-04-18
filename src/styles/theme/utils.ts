import { ThemeKeyType } from "store/app";

export const isSystemDark = window?.matchMedia
  ? window.matchMedia("(prefers-color-scheme: dark)")?.matches
  : undefined;

export function saveTheme(theme: ThemeKeyType) {
  window.localStorage && localStorage.setItem("selectedTheme", theme);
}

export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage
    ? (localStorage.getItem("selectedTheme") as ThemeKeyType) || null
    : null;
}
