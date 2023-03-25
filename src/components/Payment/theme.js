import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  background: "radial-gradient(circle, #6627f8, rgba(0,0,0,0.7148984593837535))",
  textColor: "#fff",
  headingColor: "lightblue",
};

export const lightTheme = {
  background: "radial-gradient(circle, #6627f8, #ffffff)",
  textColor: "#000",
  headingColor: "#d23669",
};

export const GlobalStyles = createGlobalStyle`
 .grad {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${(props) => props.theme.headingColor};
 }
`;
