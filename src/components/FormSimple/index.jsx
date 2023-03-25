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

import { useForm } from "react-hook-form";
import Img1 from "components/img1";
import Img2 from "components/img2";
import Img4 from "components/img4";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    msg: yup.string().required("This field is required"),
    value: yup
      .number("sfddfdf")
      .positive("Value must be positive")
      .required("This field is required"),
  })
  .required();

function FormSimple() {
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

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  const [checked, setChecked] = useState(true);
  const handleChecked = () => setChecked(!checked);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="grad min-h-screen overflow-hidden">
        <div className="flex justify-center items-center h-fit w-full pt-1 z-60">
          <button className="p-2 pt-4 h-8 w-8" onClick={switchTheme}>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/116/116254.png" />
          </button>
        </div>

        <Img1 />
        <MKBox component="section" className="top " py={12}>
          <Container className="lg:mt-0 mt-2">
            <Img2 />
            <Grid
              container
              item
              justifyContent="center"
              xs={10}
              lg={7}
              mx="auto"
              textAlign="center"
              className="z-20 flex flex-col"
            >
              <MKTypography
                variant="h3"
                mb={1}
                className="base z-20 lg:pt-4 pt-20 font-extrabold lg:text-4xl textColor lg:pb-4"
              >
                JUST DONATE.
              </MKTypography>
              {/* <MKTypography variant="h6" mb={1} className="base z-20 -mt-2 font-semibold textColor">
                and make it simple...
              </MKTypography> */}
            </Grid>

            <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <MKBox width="100%" autoComplete="off">
                  <MKBox p={3} className="rounded-md shadow-md bg-white bg-opacity-75">
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={12}>
                        <MKInput
                          variant="standard"
                          className="z-10"
                          label="Nickname"
                          fullWidth
                          {...register("name")}
                        />
                        {errors.name && <span className="spn">💔this field is required</span>}
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          variant="standard"
                          className="z-30"
                          label="Your Message"
                          multiline
                          fullWidth
                          rows={6}
                          {...register("msg")}
                        />
                        {errors.msg && <span className=" spn">💔this field is required</span>}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <MKInput
                          variant="standard"
                          label="Value"
                          fullWidth
                          type="text"
                          defaultValue="0"
                          {...register("value")}
                          className="z-20"
                        />
                        {errors.value && (
                          <span className="spn">
                            <ol className="p-2 pl-0 w-fit mt-2">
                              <li>🥺value is positive</li>
                              <li>🥺value is number</li>
                            </ol>
                          </span>
                        )}
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
                    <Grid container item justifyContent="center" xs={12} my={2} className="m-0">
                      <button
                        className="flex justify-center w-1/2 bg-stone-800 rounded-lg p-2 text-white text-sm font-semibold absolute mt-10 z-20 opacity-90"
                        type="submit"
                      >
                        NEXT
                      </button>
                      <Img4 />
                    </Grid>
                  </MKBox>
                </MKBox>
              </form>
            </Grid>
          </Container>
        </MKBox>
      </div>
    </ThemeProvider>
  );
}

export default FormSimple;
