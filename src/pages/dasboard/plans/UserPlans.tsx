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

import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { CreateCompony } from "@/service/api/apiMethods";
import { getcompaniesById, updatecompanies, withdrawRequest } from "@/service/api/compony";
import moment from "moment-timezone";
import { useAuth } from "@/hooks/useAuth";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";
import { getDepositList } from "@/service/api/template";
import Subscribe from "@/pages/Modal/Subscribe";

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

const UserPlans = () => {
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
  }, [])
  const handleBack = () => {
    navigate(-1);
  };

  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getcompaniesById(user?._id);

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


  const [totalProfit, setTotalProfit] = useState<number>(0);



  const TotalDepositData = async () => {
    try {
      const { data } = await getDepositList(user?._id);
      const approvedTransactions = data.filter((transaction: any) => transaction.status === 'Approved');
      const sumOfProfits = approvedTransactions.reduce((sum: any, transaction: any) => sum + transaction.profit, 0);
      setTotalProfit(sumOfProfits)
    } catch (error) {
      console.log(error);
    } finally {
      console.error('error');
    }
  };

  useEffect(() => {
    TotalDepositData()
  }, [])










  const onSubmit = async (data: FormInputs) => {
    const minProfitForWithdrawal: number = 20;

    if (totalProfit > minProfitForWithdrawal) {
      const withdrawalAmount: number = totalProfit - minProfitForWithdrawal;
      // console.log(`You can request a withdrawal of $${withdrawalAmount}`);

      if (Number(data?.amount) <= withdrawalAmount) {


        try {
          const response = await withdrawRequest(user?._id, data);

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
          // console.log(error);

          let errorMessage = "failed";
          if (error.response) {
            errorMessage = error.response.data?.message || error.response.data.message;
          } else {
            errorMessage = error.message;
          }
          toast.error(errorMessage);

          // // Handle error
          // console.error(errorMessage);
        }

      } else {
        toast.error(`You can request a withdrawal of $${withdrawalAmount}`);
      }

    } else {
      // User's profit is not enough for withdrawal
      toast.error("Sorry, your profit is not sufficient for withdrawal.");
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
    <Container maxWidth="xl" sx={{ padding: 1 }} className="bg-[#030239]" >

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



          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-50 dark:text-white">Elevate Your Finances with Exclusive Plans</h2>
              <p className="mb-5 font-light text-gray-100 sm:text-xl  "> Tailored Plans for Every Investor: Find the Perfect Package to Fuel Your Crypto Journey and Maximize Your Returns Today.</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">

              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#5546d1] rounded-lg     shadow ">
                <h3 className="mb-4 text-2xl text-white font-semibold">Starter</h3>
                <p className="font-light text-gray-100 sm:text-lg ">Entry-level plan for beginners with basic features.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-gray-100 text-5xl font-extrabold">$50</span>
                  <span className="text-gray-100">/Lifetime</span>
                </div>

                <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>3% profit of $50</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Refer Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Lifetime subscitption  </span>
                  </li>
                </ul>

                <Subscribe />
              </div>

              <div className="flex flex-col text-gray-100 p-6 mx-auto max-w-lg text-center   bg-[#5546d1] rounded-lg   shadow  ">
                <h3 className="mb-4 text-2xl font-semibold text-white">Company</h3>
                <p className="mb-5 font-light text-gray-100 sm:text-xl">Balanced plan designed for growing portfolios.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-gray-100 font-extrabold">$100</span>
                  <span className="text-gray-100 ">/Lifetime</span>
                </div>

                <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>3% profit of $100</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Refer Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Lifetime subscitption  </span>
                  </li>
                </ul>
                <Subscribe />
              </div>

              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-[#5546d1] rounded-lg   shadow  ">
                <h3 className="mb-4 text-2xl text-gray-100 font-semibold">Enterprise</h3>
                <p className="font-light  text-gray-100 sm:text-lg  ">Substantial investment with advanced features for maximum returns.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-gray-100 font-extrabold">$500</span>
                  <span className="text-gray-100">/Lifetime</span>
                </div>

                <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>3% profit of $500</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Refer  Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Lifetime subscitption  </span>
                  </li>
                </ul>
                <Subscribe />
              </div>


              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-[#5546d1] rounded-lg   shadow  ">
                <h3 className="mb-4 text-2xl text-gray-100 font-semibold">Premium</h3>
                <p className="font-light  text-gray-100 sm:text-lg  ">All-in-one tranding program to learn exactly how options trading works.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-gray-100 font-extrabold">$1500</span>
                  <span className="text-gray-100">/Lifetime</span>
                </div>

                <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>3% profit of $1500</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Refer  Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Lifetime subscitption  </span>
                  </li>
                </ul>
                <Subscribe />
              </div>


              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-[#9302ff] rounded-lg   shadow  ">
                <h3 className="mb-4 text-2xl text-gray-100 font-semibold">Custom</h3>
                <p className="font-light  text-gray-100 sm:text-lg  ">Tailored to your needs, offering flexibility and customization.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-3xl text-gray-100 font-extrabold">Unlimited</span>
                  <span className="text-gray-100">/Lifetime</span>
                </div>

                <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>3% profit of Amount</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Refer Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Ultimate flexibility  benefits </span>
                  </li>
                  <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Lifetime subscitption  </span>
                  </li>
                </ul>
                <Subscribe />
              </div>





            </div>
          </div>













        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPlans;
