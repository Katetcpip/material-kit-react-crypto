import { useState } from "react";
import "./styles.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

import { useNavigate } from "react-router-dom";

function FormSimple() {
  const [checked, setChecked] = useState(true);
  const handleChecked = () => setChecked(!checked);

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();

    const item = {
      name,
      msg,
      value,
    };

    setMsg("");
    setName("");
    setValue("");

    console.log(item);
    navigate("/payment");
  };

  return (
    <div className="grad min-h-screen overflow-hidden">
      <div className="flex justify-end w-fit z-10 lg:-mt-10 lg:-mb-20 -mb-0 -mt-0 lg:mr-36 mr-10 z-0">
        {" "}
        <img
          src="https://cryptologos.cc/logos/polygon-matic-logo.png"
          className="lg:w-2/12 lg:h-3/12 w-3/12 h-4/12 rotate-12"
        />
      </div>
      <MKBox component="section" className="top " py={12}>
        <Container>
          <div className="w-fit lg:ml-44 ml-4 -mt-8">
            {" "}
            <img
              src="https://cryptologos.cc/logos/tron-trx-logo.png"
              className="lg:w-1/12 w-2/12 h-2/12 lg:h-1/12 absolute md:-top-10 top-10"
            />
          </div>

          <Grid
            container
            item
            justifyContent="center"
            xs={10}
            lg={7}
            mx="auto"
            textAlign="center"
            className="z-20"
          >
            <MKTypography variant="h3" mb={1} className="base z-20">
              You can send a donate here
            </MKTypography>
          </Grid>

          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autoComplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      variant="standard"
                      className="z-30"
                      label="Nickname"
                      fullWidth
                      value={name}
                      onChange={(event) => {
                        let name = event.target.value;
                        setName(name);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      className="z-30"
                      label="Your Message"
                      multiline
                      fullWidth
                      rows={6}
                      value={msg}
                      onChange={(event) => {
                        let msg = event.target.value;
                        setMsg(msg);
                      }}
                    />
                  </Grid>

                  <div className="w-fit lg:ml-44 ml-4 -mt-8">
                    {" "}
                    <img
                      src="https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png"
                      className="absolute lg:top-36 top-60 lg:left-20 -left-24 z-0 -rotate-12"
                    />
                  </div>

                  <Grid item xs={12} md={12}>
                    <MKInput
                      variant="standard"
                      label="Value"
                      fullWidth
                      value={value}
                      className="z-20"
                      onChange={(event) => {
                        let value = event.target.value;
                        let val = value.replace(/[^0-9]/g, "");
                        setValue(val);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} alignItems="center" ml={-1} className="z-20">
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;I agree the&nbsp;
                    </MKTypography>
                    <MKTypography
                      className="base z-20"
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      Terms and Conditions
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <button
                    className="flex justify-center w-1/2 bg-stone-800 rounded-lg p-2 text-white text-sm font-semibold absolute mt-10 z-20 opacity-90"
                    type="submit"
                    onClick={(event) => handleClick(event)}
                  >
                    NEXT
                  </button>
                  <div className="flex justify-end w-fit -mt-14 lg:-mr-0 -mr-10">
                    {" "}
                    <img
                      src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                      className="absolute md:top-44 top-80 md:left-96 left-60 rotate-12 md:h-4/6 md:w-1/6 h-1/4 w-1/4 z-0"
                    />
                  </div>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default FormSimple;
