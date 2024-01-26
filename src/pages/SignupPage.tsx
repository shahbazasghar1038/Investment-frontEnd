/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  InputAdornment,
} from "@mui/material";
import logo from "../assets/logo.jpg"; // Adjust the path to your logo image
import loginBanner from "@/assets/login_banner.png"; // Adjust the path to your background image
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signU } from "@/service/api/apiMethods";
import { useAuth } from "@/hooks/useAuth";
import ProgressCircularCustomization from "@/pages/dasboard/users/ProgressCircularCustomization";
type FormInputs = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  confirmPassword: string;
  referralCode: string;
  bankDetail: string;
};

const SignupPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    try {
      setIsLoading(true);

      const payload = {
        name: data.name,
        email: data.email,
        password: data.confirmPassword,
        referralCode: data.referralCode,
        mobile: data.mobile,
        bankDetail: data.bankDetail,
        role: 2,
        emailVerified: true,
      };

      const response = await signU(payload);


      if (response.ok === true) {
        toast.success(response.message);
        navigate("/emailverification");
        navigate("/emailvarfication", {
          state: { email: data.email, id: response?.admin?._id },
        });
      } else {
        const errorMessage = response.data || response.message;
        toast.error(errorMessage);
      }
    } catch (error: any) {
      console.log(error);

      let errorMessage = "Login failed";
      if (error.response) {
        errorMessage = error.response.data || error.response.data.message;
      } else {
        errorMessage = error.message;
      }
      toast.error(errorMessage);

      // Handle error
      console.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmPassword");
    }
  }, [password, confirmPassword, setError, clearErrors]);

  return (
    <>
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
          opacity: isLoading ? "60%" : "100%",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
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
            <div></div>
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
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mb: 4, fontSize: "16px" }}
                >
                  {" "}
                  <Link
                    // href="/signup"
                    underline="none"
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#155BE5",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                  >
                    Sign up for free
                  </Link>
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >

                  {/* Name label and input */}

                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Name
                  </Typography>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Name is required",
                      // pattern: {
                      //   value: /^\S+@\S+\.\S+$/,
                      //   message: "Invalid name",
                      // },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        type="text"
                        autoComplete="name"
                        placeholder="Enter name"
                        error={Boolean(errors.email)}
                        helperText={errors.name ? errors.name.message : ""}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />


                  {/* Email Label and Input */}
                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1, }}>
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
                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Password
                  </Typography>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                      // pattern: {
                      //   // This is a simple regex for at least one uppercase, one lowercase, one number, and one special character
                      //   value:
                      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      //   message:
                      //     "Password must include uppercase, lowercase, number, and special char",
                      // },
                    }}
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

                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Confirm Password
                  </Typography>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        margin="normal"
                        fullWidth
                        placeholder="Confirm password"
                        error={Boolean(errors.confirmPassword)}
                        helperText={
                          errors.confirmPassword
                            ? errors.confirmPassword.message
                            : ""
                        }
                        variant="outlined"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={toggleConfirmPasswordVisibility}
                                edge="end"
                              >
                                {showConfirmPassword ? (
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



                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Phone
                  </Typography>
                  <Controller
                    name="mobile"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "mobile is required",
                      minLength: {
                        value: 8,
                        message: "mobile must have at least 8 characters",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        autoComplete="current-mobile"
                        placeholder="Enter mobile"

                        variant="outlined"
                        size="small"

                      />
                    )}
                  />



                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Referel Code (optional)
                  </Typography>
                  <Controller
                    name="referralCode"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Referal Code is required",
                      // pattern: {
                      //   // value: /^\S+@\S+\.\S+$/,
                      //   message: "Invalid referal code",
                      // },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        type="text"
                        autoComplete="code"
                        placeholder="Enter referel code"
                        error={Boolean(errors.referralCode)}
                        helperText={errors.referralCode ? errors.referralCode.message : ""}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />

                  <Typography variant="subtitle2" color={'gray'} sx={{ mt: 0, mb: -1 }}>
                    Wallet Address
                  </Typography>
                  <Controller
                    name="bankDetail"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Wallet Address is required",
                      // pattern: {
                      //   // value: /^\S+@\S+\.\S+$/,
                      //   message: "Invalid wallet address",
                      // },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        type="text"
                        autoComplete="bankDetail"
                        placeholder="Enter wallet address"
                        error={Boolean(errors.bankDetail)}
                        helperText={errors.bankDetail ? errors.bankDetail.message : ""}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    disabled={isLoading}
                    variant="contained"
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
                    Sign up
                  </Button>

                  <Typography
                    variant="body2"
                    color="gray"
                    align="center"
                    sx={{}}
                  >
                    Already have an account?
                    <Link
                      underline="none"
                      href="/login"
                      sx={{
                        color: "#155BE5",
                        "&:hover": { textDecoration: "none" },
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                </Box>
              </Paper>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 4, mt: 3, width: "50" }}
              >
                By signing up, you agree to GW Mining’s
                <br />
                <Link
                  underline="none"
                  sx={{
                    m: 1,
                    color: "#155BE5",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Terms of Service
                </Link>
                and
                <Link
                  underline="none"
                  // href="/signup"
                  sx={{
                    m: 2,
                    color: "#155BE5",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Privacy Policy.
                </Link>
              </Typography>
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

export default SignupPage;
