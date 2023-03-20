import "./styles.scss";
import { useState } from "react";

const Payment = () => {
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

  const handleClick = (e) => {
    e.preventDefault();
    const item = {
      email,
    };
    setEmail("");
    console.log(item);
  };

  const handleClick2 = (name) => {
    const item = {
      name,
    };
    console.log(item);
  };

  return (
    <div className="min-h-screen grad">
      <h1
        data-glitch=" Select currency"
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
                <div className="flex flex-row justify-center w-full p-4 mb-2">
                  <div className="flex flex-col items-center">
                    <div
                      onClick={() => handleClick2(item.name)}
                      className="bg-white rounded-2xl px-2 text-sm text-slate-800 hover:shadow-md h flex hover:scale-105 hover:duration-150"
                    >
                      <img src={item.img} className="p-4 object-contain cursor-pointer" />
                    </div>
                    <div className="text-slate-700 text-lg text-center font font-semibold">
                      {item.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <form className="flex flex-col items-center">
        <input
          placeholder="example@mail.ru"
          type="text"
          title="Username should only contain lowercase letters. e.g. john"
          pattern="[a-z]{1,15}"
          className=" w-1/2 rounded-lg p-2 text-sm font-semibold mt-4"
          value={email}
          onChange={(event) => {
            let email = event.target.value;
            setEmail(email);
          }}
        />
        <button
          className="flex justify-center w-1/2 bg-stone-800 rounded-lg p-2 text-white text-sm font-semibold mt-4 hover:bg-slate-800 mb-10"
          type="submit"
          onClick={(event) => handleClick(event)}
        >
          CONFIRM
        </button>
      </form>
    </div>
  );
};
export default Payment;
