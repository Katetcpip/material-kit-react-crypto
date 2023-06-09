import "./styles.scss";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { toast } from 'wc-toast';

const schema = yup.object({
  // email: yup.string().email("Not a proper email").required("This field is required"),
  email: yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
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

    let currency = money.filter( m => m.isHovered === 1);
    if (currency.length === 0){ 
      // alert ("Choose currency!")
      toast('Select currency!');
      console.log("sddsd")
    }
    else {
      navigate("/payment");
      let item = [
        data.email,
        currency[0].name
      ]
      console.log(item)}
  
  };

  const [money, setMoney] = useState([
    {
      name: "APT",
      img: "https://aptosfoundation.org/assets/logomark/PNG/Aptos_mark_BLK-909b80e008685d22df54870ca38313008c2c15f0.png",
      id: 1,
      isActive: true,
      isHovered: 0
    },
    {
      name: "AVAX",
      img: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      id: 2,
      isActive: true,
      isHovered: 0
    },
    {
      name: "BNB",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
      id: 3,
      isActive: true,
      isHovered: 0
    },
    {
      name: "ETH",
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      id: 4,
      isActive: false,
      isHovered: 0
    },
    {
      name: "MATIC",
      img: "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png",
      id: 5,
      isActive: true,
      isHovered: 0
    },
    {
      name: "TRON",
      img: "https://cryptologos.cc/logos/tron-trx-logo.png",
      id: 6,
      isActive: true,
      isHovered: 0
    },
  ]);

  const handleClick2 = (name) => {

    let arrHover = JSON.parse(JSON.stringify(money))
    const itemName = {
      name,
    };
    console.log(itemName);

    const itemHover = arrHover.find(item => item.name === name);
    if (itemHover.isActive === true && itemHover.isHovered === 0){
      arrHover.map(el => el.isHovered = 0)
      itemHover.isHovered = 1;
    } else (itemHover.isHovered = 0);

    setMoney(arrHover);
  };

  return (
    <ThemeProvider theme={localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <wc-toast></wc-toast>
      <div className="min-h-screen grad">
        <div className="flex lg:justify-center justify-end items-center h-fit w-full pt-1 z-60">
          <button className="p-2 pt-4 h-8 w-8" onClick={switchTheme}>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/116/116254.png" />
          </button>
        </div>

        <div className="w-full h-fit flex justify-start pl-4 lg:pt-0 pt-1">
          <h1
          data-glitch="Select currency"
          className={
            localStorage.getItem("theme") === "dark"
              ? "font-bold text-3xl text-center pt-10 font glitchDark"
              : "font-bold text-3xl text-center pt-10 font glitchLight"
          }
        ></h1>
        </div>


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
                      <button
                        onClick={() => {
                          handleClick2(item.name);
                        }}
                        className={classNames(
                          item.isActive === false
                            ? "bg-violet-300 hover:none border-2 border-solid border-violet-600 scale-90 opacity-50"
                            : item.isActive === true && localStorage.getItem("theme") === "dark"
                            ? "bg-gray-900 bg-opacity-40 hover:scale-90 hover:duration-150 hover:shadow-md "
                            : "bg-white hover:scale-95 hover:duration-150 hover:shadow-md hover:border-2 hover:border-solid hover:border-violet-600",
                          "rounded-2xl px-2 text-sm text-slate-800 h flex flex-col"
                        )}
                      >
                        <input type="image" src={item.img} className="p-2 object-contain cursor-pointer h-3/4 w-full" />
                        <p className="text-center w-full">{item.name}</p>
                        {money[item.id - 1].isHovered === 1 && (<div className="-mt-6 -ml-4 text-xl h-12 w-12">                          
                           <img src="https://freepngimg.com/thumb/facebook/107719-verified-badge-facebook-download-free-image.png" alt=""/>
                        </div>)}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <input
          
            placeholder="example@mail.ru"
            type="text"
            className=" w-1/2 rounded-lg p-2 text-sm font-semibold mt-4"
            {...register("email")}
            style={{border: errors.email && '2px solid red'}}
          />
          {errors.email && ( 
            <p
              className={
                theme === "light" ? "lg:w-1/2 lg:pl-2" : "text-white lg:w-1/2 lg:pl-2"
              }
            >
              this field is required 💔
            </p>
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
