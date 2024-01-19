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
  CardHeader,
} from "@mui/material";
import logo from "@/assets/contract-logo.png"; // Ensure this path is correct
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { CreateCompony } from "@/service/api/apiMethods";
import { getcompaniesById, updatecompanies, withdrawRequest } from "@/service/api/compony";
import moment from "moment-timezone";
import { useAuth } from "@/hooks/useAuth";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";

type FormInputs = {
  id: string;
  userName: string;
  amount: string;
  wallatAddress: string;
  email: string;
  phoneNumber: string;
  phone: string;
  // websiteUrl: string;
  image: string;
  // billing_email: string;
};

const WithdrawRequest = () => {
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
useEffect(() => {

  setValue("id", user?._id);
  setValue("userName", user?.name);  
  setValue("email", user?.email);
  setValue("phone", user?.phone);
}, [ ])
  const handleBack = () => {
    navigate(-1);
  };
console.log('user in  : ' , user)
  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getcompaniesById(user?._id);
      console.log(data);
      setValue("id", user?._id);
      setValue("userName", user?.name);
      setValue("amount", data?.amount);
      // setValue("country", data?.country);
      // setValue("timeZone", data?.timeZone);
      setValue("email", user?.email);
      setValue("wallatAddress", user?.wallatAddress);
      // setValue("phoneNumber", data?.phoneNumber);
      // setValue("industry", data?.industry);
      // setValue("websiteUrl", data?.websiteUrl);
      // setValue("billing_email", data?.billing_email);
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
      if (imageBase64) {
        data.image = imageBase64;
      }
      const response = await withdrawRequest(user?._id, data);
      console.log(response.message);
      if (response.ok === true) {
        toast.success(response.message);
        setValue("amount", '');
        // navigate("/dashboard/compony-list");
      } else {
        const errorMessage = response.data || response.message;
        toast.error(errorMessage);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);

      let errorMessage = "failed";
      if (error.response) {
        errorMessage = error.response.data?.message || error.response.data.message;
      } else {
        errorMessage = error.message;
      }
      toast.error(errorMessage);

      // Handle error
      console.error(errorMessage);
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

      
        <Grid item xs={12}>
          <CardHeader title="Withdraw Request" className="font-bold " />
         </Grid>
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

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2} className="p-6 ">
              {/* Company Name Field */}
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
                  rules={{ required: "Amount is required" }}
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



              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: -2,
                    mb: -1,
                  }}
                >
                  Wallet Address
                </Typography>
                <Controller
                  name="wallatAddress"
                  control={control}
                  defaultValue={user?.bankDetail}
                  rules={{ required: "wallat address is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter wallet address"
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

              {/* Company Size Field */}
              <Grid item xs={12} md={6}>
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

export default WithdrawRequest;
