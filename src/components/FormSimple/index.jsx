import { useState } from "react";
import "./styles.scss";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

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

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  const [checked, setChecked] = useState(true);
  const handleChecked = () => setChecked(!checked);

  return (
    <ThemeProvider theme={localStorage.getItem("theme") === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="grad min-h-screen h-fit pb-32">
        <div className="flex justify-center items-center h-fit w-full pt-1 z-60">
          <button className="p-2 pt-4 h-10 w-10" onClick={switchTheme}>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/116/116254.png" />
          </button>
        </div>

        <Img1 />
        <div className="top" py={12}>
          <Container className="lg:mt-0 mt-2">
            <Img2 theme={localStorage.getItem("theme")} />
            <Grid
              className="flex flex-col justify-center items-center mx-auto text-center z-20 "
              xs={10}
              lg={7}
            >
              <p
                mb={1}
                className={
                  localStorage.getItem("theme") === "light"
                    ? "base z-20 lg:pt-4 lg:pt-10 pt-10 font-extrabold lg:text-5xl text-3xl textColorLight lg:pb-1"
                    : "base z-20 lg:pt-4 lg:pt-10 pt-10 font-extrabold lg:text-5xl text-3xl textColorDark lg:pb-1"
                }
              >
                JUST DONATE.
              </p>
            </Grid>

            <Grid
              item
              xs={12}
              lg={7}
              sx={{ mx: "auto" }}
              className="flex flex-col lg:mt-10 mt-10 md:w-3/4"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center w-full">
                  <div
                    className={
                      localStorage.getItem("theme") === "light" ? "mainForm1" : "mainForm2"
                    }
                  >
                    <Grid
                      container
                      spacing={3}
                      className="relative z-50 lg:pr-4 lg:pl-4 pl-4 pr-4 p-12"
                    >
                      <Grid item xs={12} md={12}>
                        <input
                          className="z-10 rounded-md w-full p-2 bgStyle"
                          placeholder="Nickname"
                          type="text"
                          {...register("name")}
                        />
                        {errors.name && <span className={ localStorage.getItem("theme") === "light" ? "spn" : "spn text-white"}>💔this field is required</span>}
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          className="z-10 rounded-md w-full p-2 z-30 pb-20 bgStyle"
                          placeholder="Your Message"
                          type="text"
                          rows={6}
                          {...register("msg")}
                        />
                        {errors.msg && <span className={ localStorage.getItem("theme") === "light" ? "spn" : "spn text-white"}>💔this field is required</span>}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <input
                          className="rounded-md w-full p-2 relative z-50 color-indigo-800 bgStyle"
                          placeholder="Value"
                          type="text"
                          {...register("value")}
                        />
                        {errors.value && (
                          <span className={ localStorage.getItem("theme") === "light" ? "spn" : "spn text-white"}>
                            <ol className="p-2 pl-0 w-fit mt-2">
                              <li>🥺value is positive</li>
                              <li>🥺value is number</li>
                            </ol>
                          </span>
                        )}
                      </Grid>
                      <Grid item xs={12} alignItems="center" ml={-1} className="flex flex-row z-20">
                        <Switch checked={checked} onChange={handleChecked} color="secondary" />
                        <div
                          variant="button"
                          ml={-1}
                          sx={{ cursor: "pointer", userSelect: "none" }}
                          onClick={handleChecked}
                          className="flex flex-row lg:text-base text-xs"
                        >
                          I agree the Terms and Conditions
                        </div>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={12}
                      my={2}
                      className="m-0 flex w-full md:justify-start justify-center"
                    >
                      <button
                        className="lg:w-1/4 w-1/2 bg-stone-800 hover:bg-stone-900 rounded-lg p-2 text-white text-sm font-semibold absolute mt-4 z-20 opacity-90"
                        type="submit"
                      >
                        NEXT
                      </button>
                      <Img4 />
                    </Grid>
                  </div>
                </div>
              </form>
            </Grid>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FormSimple;
