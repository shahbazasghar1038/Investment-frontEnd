/* eslint-disable @typescript-eslint/no-explicit-any */
import baseURL from "./axiosInstance";

export const getList = async (id: any) => {
  return await baseURL.get(`/api/v1/companies/list/${id}`);
};

export const depositRequest = async (data: any) => {
  const response = await baseURL.post("/api/v1/deposit/depositRequest", data);
  return response.data;
};

export const updateDepositStatus = async (id: any, data: any) => {
  const response = await baseURL.patch(`/api/v1/deposit/updte-status/${id}`, data);
  return response.data;
};


export const deletecompanies = async (id: string) => {
  const response = await baseURL.delete(`/api/v1/companies/${id}`);
  return response.data;
};

export const updateStatus = async (id: any, data: any) => {
  const response = await baseURL.patch(
    `/api/v1/companies/updte-status/${id}`,
    data
  );
  return response.data;
};



export const updatecompanies = async (id: any, data: any) => {
  const response = await baseURL.post(`/api/v1/companies/${id}`, data);
  return response.data;
};



export const getDepositListToAdmin = async () => {
  
  const response = await baseURL.get(`/api/v1/deposit/admin-list`); 
  return response?.data;
};


export const withdrawRequest = async (id: any, data: any) => {
  const response = await baseURL.post(`/api/v1/withdraw/withdrawRequest`, data);
  return response.data;
};



export const getcompaniesById = async (id: any) => {
  const response = await baseURL.get(`/api/v1/companies/single/${id}`);
  return response.data;
};
