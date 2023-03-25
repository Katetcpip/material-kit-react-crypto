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
 .grad {
  background: ${(props) => props.theme.background};
  transition: .3s ease;
 }
 .textColor {
  color: ${(props) => props.theme.textColor};
 } 
 .mainFrom{
  background-color: ${(props) => props.theme.backgroundColor};
 }
`;
