import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  background: "radial-gradient(circle, #a09af1, #230e40);",
  textColor: "ffffff !important",
  backgroundColor: "black",
};

export const lightTheme = {
  background: "radial-gradient(circle, #6627f8, #ffffff)",
  textColor: "rgba(50, 42, 51, 0.814) !important",
  backgroundColor: "white",
};

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.background}; 
  color: ${({ theme }) => theme.textColor};
  transition: all 0.50s linear;
  }
`;
