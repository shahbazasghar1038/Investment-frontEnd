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
import { CreateCompony, createAdminWallet, getAdminWallet } from "@/service/api/apiMethods";
import { getcompaniesById, updatecompanies, withdrawRequest } from "@/service/api/compony";
import moment from "moment-timezone";
import { useAuth } from "@/hooks/useAuth";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";
import { getDepositList } from "@/service/api/template";

type FormInputs = {
  id: string;
  userName: string;
  amount: string;
  wallatAddress: string;
  email: string;
  phoneNumber: string;
  phone: string;
  adminWallet: string;
  image: string;
  // billing_email: string;
};
interface ApiResponse {
  ok: boolean;
  message: string;
  // Add any other properties if necessary
}
const WalletAddressList = () => {
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

  const getTimeZoneList = () => {
    const timeZones = moment.tz.names();
  };


  const [referralCode, setReferralCode] = useState<string>('');

  const handlegetAdminWallet = async () => {
    try {
      const { data } = await getAdminWallet();
      setReferralCode(data?.address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlegetAdminWallet();
  }, []);

  useEffect(() => {
    setValue("id", user?._id);
    setValue("adminWallet", referralCode);
  }, [referralCode]);
  const handleBack = () => {
    navigate(-1);
  };

  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getcompaniesById(user?._id);

      setValue("id", user?._id);
      setValue("userName", user?.name);
      setValue("adminWallet", data?.adminWallet);
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


  const [totalProfit, setTotalProfit] = useState<number>(0);



  const TotalDepositData = async () => {
    try {
      const { data } = await getDepositList(user?._id);
      const approvedTransactions = data.filter((transaction: any) => transaction.status === 'Approved');
      const sumOfProfits = approvedTransactions.reduce((sum: any, transaction: any) => sum + transaction.profit, 0);
      setTotalProfit(sumOfProfits)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    TotalDepositData()
  }, [])


  const onSubmit = async (data: FormInputs) => {

    try {
      const response = await createAdminWallet(data);
      const responseData: ApiResponse = response.data; // Assert response data to ApiResponse interface
      if (responseData.ok === true) {
        toast.success(responseData.message);
      } else {
        const errorMessage = responseData.message;
        toast.error(errorMessage);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {

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



  useEffect(() => {
    if (user?.role == 2) {
      return;
    } else {
      navigate('/dashboard/deposit-requests')
    }
  }, [])



  return (
    <Container maxWidth="xl" sx={{ padding: 1 }} className="bg-blue-100" >


      <Grid item xs={12}>
        <CardHeader title="Update Wallet Address" className="font-bold " />
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

              <Grid item xs={12} md={12}>
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
                  name="adminWallet"
                  control={control}
                  rules={{ required: "wallat address is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      placeholder="Enter wallet address"
                      error={Boolean(errors.wallatAddress)}
                      helperText={
                        errors.adminWallet ? errors.adminWallet.message : ""
                      }
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* Company Size Field */}
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
                      Update
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

export default WalletAddressList;
