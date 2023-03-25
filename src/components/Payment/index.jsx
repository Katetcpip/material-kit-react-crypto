import "./styles.scss";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

const schema = yup.object({
  email: yup.string().email("Not a proper email").required("This field is required"),
});

const Payment = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
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
      name: "APT",
      img: "https://aptosfoundation.org/assets/logomark/PNG/Aptos_mark_BLK-909b80e008685d22df54870ca38313008c2c15f0.png",
      id: 1,
      isActive: true,
    },
    {
      name: "AVAX",
      img: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      id: 2,
      isActive: true,
    },
    {
      name: "BNB",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
      id: 3,
      isActive: true,
    },
    {
      name: "ETH",
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      id: 4,
      isActive: false,
    },
    {
      name: "MATIC",
      img: "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png",
      id: 5,
      isActive: true,
    },
    {
      name: "TRON",
      img: "https://cryptologos.cc/logos/tron-trx-logo.png",
      id: 6,
      isActive: true,
    },
  ];

  const handleClick2 = (name) => {
    const item = {
      name,
    };
    console.log(item);
  };

  return (
    <ThemeProvider theme={localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="min-h-screen grad">
        <div className="flex lg:justify-center justify-end items-center h-fit w-full pt-1 z-60">
          <button className="p-2 pt-4 h-8 w-8" onClick={switchTheme}>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/116/116254.png" />
          </button>
        </div>

        <h1
          data-glitch="Select currency"
          className={
            localStorage.getItem("theme") === "dark"
              ? "font-bold text-3xl text-center pt-10 font glitchDark"
              : "font-bold text-3xl text-center pt-10 font glitchLight"
          }
        ></h1>
        <div className="lg:w-1/2 w-11/12 m-auto justify-start flex flex-row flex-wrap lg:pt-10 pt-28">
          {money.length > 0 &&
            money.map((item) => {
              return (
                <div
                  className="flex md:w-1/5 w-1/3 h-fit justify-center items-center"
                  key={item.id}
                >
                  <div className="flex flex-row justify-center w-full p-4 pl-2 pr-2 mb-2">
                    <div className="flex flex-col items-center">
                      <div
                        onClick={() => {
                          handleClick2(item.name);
                        }}
                        className={classNames(
                          item.isActive === false
                            ? "bg-violet-300 hover:none border-2 border-solid border-violet-600 scale-90 opacity-50"
                            : item.isActive === true && localStorage.getItem("theme") === "dark"
                            ? "bg-violet-900 bg-opacity-30 hover:scale-90 hover:duration-150 hover:shadow-md "
                            : "bg-white hover:scale-95 hover:duration-150 hover:shadow-md ",
                          "rounded-2xl px-2 text-sm text-slate-800 h flex flex-col"
                        )}
                      >
                        <img src={item.img} className="p-2 object-contain cursor-pointer h-3/4" />
                        <p className="text-center">{item.name}</p>
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
          {errors.email && (
            <span
              className={
                theme === "light" ? " text-black lg:w-1/2 lg:pl-2" : "text-white lg:w-1/2 lg:pl-2"
              }
            >
              this field is required 💔
            </span>
          )}

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
