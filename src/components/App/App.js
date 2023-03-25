import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "components/Payment";
import Main from "components/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} /> <Route path="/payment" element={<Main />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
