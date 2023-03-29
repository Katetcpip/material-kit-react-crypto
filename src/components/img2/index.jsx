import "./styles.css";

function Img2({ theme }) {
  return (
    <div className="circle4 w-fit lg:ml-52 lg:-left-0 -left-10 ml-14 small-rotate absolute lg:z-50 z-10 lg:top-24 top-10 lg:left-12">
      {" "}
      <img
        src="https://cryptologos.cc/logos/tron-trx-logo.png"
        alt=""
        className={
          theme === "light"
            ? "lg:w-24 w-2/12 h-2/12 lg:h-1/12 small-rotate opacity-75 "
            : "lg:w-24 w-2/12 h-2/12 lg:h-1/12 small-rotate opacity-50 "
        }
      />
    </div>
  );
}

export default Img2;
