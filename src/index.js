import ReactDOM from "react-dom";
import App from "App";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "components/Payment";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Payment />} /> <Route path="/payment" element={<App />} />{" "}
    </Routes>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
