import "./styles.scss";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Not a proper email").required("This field is required"),
});

const Payment = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/payment");
  };

  const [email, setEmail] = useState("");
  const money = [
    {
      name: "aptos",
      img: "https://aptosfoundation.org/assets/logomark/PNG/Aptos_mark_BLK-909b80e008685d22df54870ca38313008c2c15f0.png",
      id: 1,
    },
    {
      name: "avax",
      img: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      id: 2,
    },
    {
      name: "bnb",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
      id: 3,
    },
    {
      name: "eth",
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      id: 4,
    },
    {
      name: "matic",
      img: "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png",
      id: 5,
    },
    {
      name: "tron",
      img: "https://cryptologos.cc/logos/tron-trx-logo.png",
      id: 6,
    },
  ];

  const handleClick2 = (name) => {
    const item = {
      name,
    };
    console.log(item);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="min-h-screen grad">
        <div className="flex lg:justify-center justify-end items-center h-fit w-full pt-1 z-60">
          <button className="p-2 pt-4 h-8 w-8" onClick={switchTheme}>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/116/116254.png" />
          </button>
        </div>

        <h1
          data-glitch="Select currency"
          className="font-bold text-3xl text-center pt-10 font glitch"
        ></h1>
        <div className="lg:w-1/2 w-11/12 m-auto justify-start flex flex-row flex-wrap lg:pt-10 pt-28">
          {money.length > 0 &&
            money.map((item) => {
              return (
                <div
                  className="flex md:w-1/4 sm:w-1/3 md:w-1/3 w-1/2 h-fit justify-center items-center"
                  key={item.id}
                >
                  <div className="flex flex-row justify-center w-full p-4 pl-2 pr-2 mb-2">
                    <div className="flex flex-col items-center">
                      <div
                        onClick={() => {
                          handleClick2(item.name);
                        }}
                        className="bg-white rounded-2xl px-2 text-sm text-slate-800 hover:shadow-md focus:outline-none h flex hover:scale-105 hover:duration-150"
                      >
                        <img src={item.img} className="p-4 object-contain cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <input
            placeholder="example@mail.ru"
            type="email"
            className=" w-1/2 rounded-lg p-2 text-sm font-semibold mt-4"
            {...register("email")}
          />
          {errors.email && <span className="spn lg:w-1/2 lg:pl-2">this field is required 💔</span>}

          <button
            className="flex justify-center w-1/2 bg-stone-800 rounded-lg p-2 text-white text-sm font-semibold mt-4 hover:bg-slate-800 mb-10"
            type="submit"
          >
            CONFIRM
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
};
export default Payment;
