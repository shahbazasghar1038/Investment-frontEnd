/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  Divider,
  Avatar,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  Tooltip,
} from "@mui/material";
import logo from "@/assets/contract-logo.png"; // Ensure this path is correct
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { CreateCompony } from "@/service/api/apiMethods";
import { depositRequest, getcompaniesById, updatecompanies } from "@/service/api/compony";
import moment from "moment-timezone";
import { useAuth } from "@/hooks/useAuth";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";

type FormInputs = {
  id: string;
  name: string;
  amount: string;
  // country: string;
  status: string;
  email: string;
  phoneNumber: string;
  wallatAddress: string;
  // websiteUrl: string;
  image: string;
  // billing_email: string;
};

const UpdateCompony = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [timeZoneList, setTimeZoneList] = useState<Array<any>>([]);
  const [image, setImage] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<any>("");

  const getTimeZoneList = () => {
    const timeZones = moment.tz.names();
    setTimeZoneList(timeZones);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setValue("id", user?._id);
    // setValue("status", 'approved');
  }, [])

  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getcompaniesById(user?._id);

      setValue("id", user?._id);
      setValue("name", data?.name);
      setValue("amount", data?.amount);
      setValue("email", data?.email);
      setValue("phoneNumber", data?.phoneNumber);
      setValue("wallatAddress", data?.wallatAddress);
      // setValue("status", 'approved');
      setImage(data?.image);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getTimeZoneList();
    if (user?._id) listData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?._id]);
  const onSubmit = async (data: FormInputs) => {
    try {
      if (Number(data?.amount) > 49) {

        if (imageBase64) {
          data.image = imageBase64;
        } else {
          toast.error('Please Upload Screenshot');
          return;
        }
        const response = await depositRequest(data);

        if (response.ok === true) {
          toast.success(response.message);
          // navigate("/dashboard/compony-list");
        } else {
          const errorMessage = response.data || response.message;
          toast.error(errorMessage);
        }
      } else {
        toast.error('Minimum amount should be $50.');
      }

    } catch (error: any) {

      let errorMessage = "failed";
      if (error.response) {
        errorMessage = error.response.data || error.response.data.message;
      } else {
        errorMessage = error.message;
      }


      if (error?.response?.status == 413) {
        toast.error('Screenshot must be less then 100 kb');
      } else {
        toast.error(errorMessage);
      }
      // Handle error
      console.error('ok', errorMessage);
    }
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String); // Keep the MIME type prefix
        setImage(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container maxWidth="xl" sx={{ padding: 1 }} className="bg-blue-100" >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2} sx={{ mb: { xs: 2, md: 4 }, mt: -1 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography variant="subtitle1">Upload Deposit Details </Typography>
                <Divider sx={{ flexGrow: 1, ml: 2 }} />
              </Box>

              <Box sx={{ alignItems: "center", display: "flex" }}>
                <Box sx={{ alignItems: "center" }}>
                  <Tooltip title="Upload Image" arrow>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mb: 0,
                        mr: 1,
                        bgcolor: "#9A9A9A", // Set background color to gray
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      src={image}
                    >
                      <PersonIcon
                        sx={{ width: "100%", height: "100%", color: "#FFFFFF" }}
                      />
                    </Avatar>
                  </Tooltip>

                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="contained-button-file"
                    style={{ marginLeft: "4rem" }}
                  >
                    <Tooltip title="Upload Image" arrow>
                      <PhotoCameraIcon sx={{ color: "#9A9A9A" }} />
                    </Tooltip>
                  </label>
                </Box>

                <Box sx={{ ml: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary", fontWeight: "600" }}
                  >{`Upload Screenshot`}</Typography>
                  <h5 className="text-[8px] text-red-600  ">image must be less then 100 kb</h5>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              {/* Company Name Field */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  User Name
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={user?.name}
                  rules={{ required: " User Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter your name"
                      error={Boolean(errors.name)}
                      helperText={
                        errors.name ? errors.name.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* Company Size Field */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Amout
                </Typography>
                <Controller
                  name="amount"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Amount Size is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter amount"
                      error={Boolean(errors.amount)}
                      helperText={
                        errors.amount ? errors.amount.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* Country Field */}
              {/* <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Country
                </Typography>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Country is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter your country"
                      error={Boolean(errors.country)}
                      helperText={errors.country ? errors.country.message : ""}
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid> */}

              {/* Time Zone Field */}
              {/* <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -1,
                  }}
                >
                  Time Zone
                </Typography>
                <Controller
                  name="timeZone"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Time Zone is required" }}
                  render={({ field }) => (
                    <FormControl
                      variant="outlined"
                      size="small"
                      error={Boolean(errors.timeZone)}
                      fullWidth
                    >
                      <Select
                        {...field}
                        labelId="timeZone-select"
                        displayEmpty
                        renderValue={(value) => {
                          if (value === "") {
                            return (
                              <em style={{ color: "#9A9A9A" }}>
                                Select Time Zone
                              </em>
                            );
                          }
                          return value;
                        }}
                      >
                        {timeZoneList?.map((timeZone: any) => (
                          <MenuItem key={timeZone} value={timeZone}>
                            {timeZone}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        {errors.timeZone ? errors.timeZone.message : ""}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </Grid> */}

              {/* Email Field */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Email
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={user?.email}
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
              </Grid>

              {/* Phone Number Field */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Phone Number
                </Typography>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={user?.mobile}
                  rules={{
                    required: "Phone Number is required",
                    pattern: {
                      value: /^[+]*(?:\(\d{1,4}\))?[-\s./0-9]*$/,
                      message: "Invalid phone number",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                    maxLength: {
                      value: 15,
                      message:
                        "Phone number must not be greater than 15 digits",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      type="tel"
                      placeholder="Enter phone number"
                      error={Boolean(errors.phoneNumber)}
                      helperText={
                        errors.phoneNumber ? errors.phoneNumber.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* Industry Field */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  wallet Address
                </Typography>
                <Controller
                  name="wallatAddress"
                  control={control}
                  defaultValue={user?.bankDetail}
                  rules={{ required: "Industry is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter your wallet Address"
                      error={Boolean(errors.wallatAddress)}
                      helperText={
                        errors.wallatAddress ? errors.wallatAddress.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* Website URL Field */}
              {/* <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Website URL
                </Typography>
                <Controller
                  name="websiteUrl"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Website URL is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter your website URL"
                      error={Boolean(errors.websiteUrl)}
                      helperText={
                        errors.websiteUrl ? errors.websiteUrl.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Email
                </Typography>
                <Controller
                  name="billing_email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Billing email is required",
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
                      placeholder="Enter billing email"
                      error={Boolean(errors.email)}
                      helperText={errors.email ? errors.email.message : ""}
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid> */}
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex", // Enable Flexbox for this container
                    justifyContent: "end", // Center content horizontally
                    mt: 2.8, // Top margin
                  }}
                >
                  <div>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "none" }}
                      component={Link}
                      to="/dashboard"
                    >
                      Cancel
                    </Button>

                    <Button
                      sx={{ ml: 2, textTransform: "none" }}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Send
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpdateCompony;
