import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import FormSimple from "components/FormSimple";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormSimple />
    </ThemeProvider>
  );
}
