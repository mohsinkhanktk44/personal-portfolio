"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "dark"; // Only "dark" theme is used

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark"); // Always set to "dark"

  useEffect(() => {
    document.documentElement.classList.add("dark"); // Always add dark mode class
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
