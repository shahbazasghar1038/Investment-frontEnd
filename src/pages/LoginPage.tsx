/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import logo from "../assets/logo.jpg";
import loginBanner from "@/assets/login_banner.png"; // Adjust the path to your background image
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login, loginUser } from "@/service/api/apiMethods";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ProgressCircularCustomization from "@/pages/dasboard/users/ProgressCircularCustomization";
import { log } from "console";
type FormInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const { loginContext } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        email: data.email,
        password: data.password,
      };
      const response = await login(payload);

      if (response.ok === true) {
        if (response?.user?.twoFactorAuth === true) {
          toast.success(response?.message);
          navigate("/emailverification");
          navigate("/emailvarfication", {
            state: { email: data.email, condition: "twoFactorAuth" },
          });
        } else {
          toast.success("Logged in successfully!");
          navigate("/dashboard");
          loginContext(response?.user);
        }
      } else {
        toast.error(response?.message || "Something went wrong!");
      }
    } catch (error: any) {
      if (error.response?.data.shouldNavigate === true) {
        alert("elsee");
        navigate("/forgotpassword");
      }
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        "Something went wrong!";
      toast.error(errorMessage);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>


{/* <section className="e ca ci di">
        <div className="a">
          <div className="ja qb _d">
            <div className="jc ng">
              <div className="wow fadeInUp la cd pe re gf kf mg yk gl vm" data-wow-delay="0s">
                <h3 className="va fi mi pi yi vl gn">
                  Sign in to your account
                </h3>
                <p className="lb fi ii qi _i">
                  Login to your account for a faster checkout.
                </p>
                <button className="br cr ta qb jc be de oe re af if kf lg ii qi xi kk el ql ul em">
                  <span className="wa">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_95:967)">
                        <path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4" />
                        <path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853" />
                        <path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05" />
                        <path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
                <div className="xa qb be de">
                  <span className="sb ic jc od pf bg nm"></span>
                  <p className="jc _g fi ii qi xi ul">
                    Or, sign in with your email
                  </p>
                  <span className="sb ic jc od pf bg nm"></span>
                </div>
                <form>
                  <div className="xa">
                    <label for="email" className="va ob hi qi aj vl">
                      Your Email
                    </label>
                    <input type="email" name="email" placeholder="Enter your Email" className="br cr jc oe re af if zg sg ii _i ej lj pk rk el ql" />
                  </div>
                  <div className="xa">
                    <label for="password" className="va ob hi qi aj vl">
                      Your Password
                    </label>
                    <input type="password" name="password" placeholder="Enter your Password" className="br cr jc oe re af if zg sg ii _i ej lj pk rk el ql" />
                  </div>
                  <div className="xa qb be ee">
                    <div>
                      <label for="checkboxLabel" className="qb vd xd be hi qi xi ul">
                        <div className="e">
                          <input type="checkbox" id="checkboxLabel" className="b" />
                          <div className="box oa qb gc vc be de ne re af jf zk cl">
                            <span className="fj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" stroke-width="0.4" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        Keep me signed in
                      </label>
                    </div>
                    <div>
                      <a href="javascript:void(0)" className="hi qi bj mk">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="ta">
                    <button className="zq qb jc be de oe of rg jh ii qi zi rj sj tj jk">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="fi ii qi xi ul">
                  Don't you have an account?
                  <a href="signup.html" className="bj mk">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d f l ea yb jc gj gradiantlogin"></div>
        <img src={shape1} alt className="d l f ea" />
        <img src={shape2} alt className="d m f ea" />
      </section> */}



      {isLoading && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            position: "absolute",
            margin: "auto",
            width: "100%",
          }}
        >
          <ProgressCircularCustomization />
        </Box>
      )}
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          padding: 1,
          opacity: isLoading ? "30%" : "100%",
        }}
      >
        <Grid
          container
          sx={{ height: "100%", opacity: isLoading ? "60%" : "100%" }}
        >
          {/* Left side - Form */}
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              ...(isMobile && { paddingBottom: 2 }),
            }}
          >
            {/* <img
              src={logo}
              alt="Logo"
              style={{
                maxWidth: isMobile ? "150px" : "320px",
                marginTop: "16px",
              }}
            /> */}

            <Box sx={{ width: "100%", maxWidth: 400, m: 3 }}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography
                  variant="h5"
                  component="h1"
                  color={"#155BE5"}
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Welcome Back !
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h1"
                  color={'gray'}
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  Sign in to Continue
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Email Label and Input */}
                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Email
                  </Typography>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        type="email"
                        autoComplete="email"
                        placeholder="Enter email"
                        error={Boolean(errors.email)}
                        helperText={errors.email ? errors.email.message : ""}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />

                  {/* Password Label and Input */}
                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Password
                  </Typography>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={
                      {
                        /* your validation rules for password */
                      }
                    }
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type={showPassword ? "text" : "password"}
                        margin="normal"
                        fullWidth
                        autoComplete="current-password"
                        placeholder="Enter password"
                        error={Boolean(errors.password)}
                        helperText={
                          errors.password ? errors.password.message : ""
                        }
                        variant="outlined"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                  <Grid sx={{ display: "flex" }}>
                    <Grid>
                      <FormControlLabel
                        control={
                          <Controller
                            name="rememberMe"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                              <Checkbox {...field} color="primary" />
                            )}
                          />
                        }
                        label={
                          <Typography
                            sx={{ fontSize: "15px", color:'gray', whiteSpace: "nowrap" }}
                          >
                            Remember me
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
                      <Grid item>
                        <Link
                          underline="none"
                          href="/forgotpassword"
                          variant="subtitle2"
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isLoading}
                    sx={{
                      mt: 3,
                      mb: 2,
                      textTransform: "none",
                      fontSize: "16px",
                      backgroundColor: "#155BE5",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#134DAB", // Slightly darker shade for hover effect, change as needed
                      },
                    }}
                    size="small"
                  >
                    Sign in
                  </Button>

                  {/* Sign Up Link */}
                  <Typography
                    variant="body2"
                    color="gray"
                    align="center"
                    sx={{ mb: 4, mt: 3 }}
                  >
                    Don't have an account yet?{" "}
                    <Link
                      href="/signup"
                      underline="none"
                      sx={{
                        color: "#155BE5",
                        "&:hover": { textDecoration: "none" },
                      }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Right side - Image */}
          {/* <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundImage: `url(${loginBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: isMobile ? "none" : "block",
            }}
          >
            Any content you want on the image side
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default LoginPage;
