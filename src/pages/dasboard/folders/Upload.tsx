/* eslint-disable @typescript-eslint/no-explicit-any */
// TeamForm.tsx
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  Card,
  CardHeader,
} from "@mui/material";

import { TextareaAutosize } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ProgressCircularCustomization from "@/pages/dasboard/users/ProgressCircularCustomization";
import { useAuth } from "@/hooks/useAuth";
import { create } from "@/service/api/clauses";
import { UploadFiles } from "@/service/api/folder";
import logo from "@/assets/upload_logo.png";

type FormValues = {
  dec: string;
};
type Accept = string | string[] | undefined;
const Upload = () => {
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { id } = useParams();
  const location = useLocation();
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (event: any) => {
    setCharCount(event.target.value.length);
  };
  const folderName = new URLSearchParams(location.search).get("name");

  // Decode folderName if it's encoded
  const decodedFolderName = folderName ? decodeURIComponent(folderName) : "";
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    // accept: ["image/*", ".pdf", ".doc", ".docx", ".txt"] as Accept,
  }) as any;
  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const formData: any = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      formData.append("folderId", id);
      formData.append("desc", data.dec);

      // Send formData to your API endpoint
      const response = await UploadFiles(formData);
      if (response.ok === true) {
        toast.success(response.message);
        navigate("/dashboard/folder-list");
      } else {
        const errorMessage =
          response.data || response.message || "some thing went wrong";
        toast.error(errorMessage);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      let errorMessage = "failed";
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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            height: "50vh",
          }}
        >
          {" "}
          {/* <ProgressCircularCustomization /> */}
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <CardHeader title="Upload Document" />
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ pl: 2.2, mt: -2, mb: 2, fontSize: "14px" }}
          >
            <Link
              style={{ marginRight: "-7px" }}
              to="/dashboard/folder-list"
              className="link-no-underline"
            >
              Home
            </Link>
            <Typography
              sx={{ fontSize: "14px", ml: "-7px" }}
              color="text.primary"
            >
              Upload Document
            </Typography>
          </Breadcrumbs>
          <Card>
            <Box
              sx={{
                pl: 3,
                p: 2,
                pr: 3,
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{decodedFolderName}</Typography>
                </Box>
              </div>

              <div>
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  sx={{ textTransform: "none" }}
                >
                  Cancel
                </Button>

                <Button
                  sx={{ ml: 2, textTransform: "none" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                >
                  Save
                </Button>
              </div>
            </Box>
          </Card>
        </Grid>

        <Paper sx={{ padding: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Typography variant="subtitle2">File Description</Typography>
              <Controller
                name="dec"
                control={control}
                // rules={{ required: "Tag Name is required", maxLength: 50 }}
                render={({ field }) => (
                  <>
                    <TextareaAutosize
                      {...field}
                      placeholder="50 characters"
                      minRows={4}
                      maxLength={50}
                      onChange={(event) => {
                        field.onChange(event); // react-hook-form Controller handle onChange
                        handleCharCount(event); // Handle character count
                      }}
                      style={{
                        width: "100%",
                        fontSize: "16px",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "10px",
                      }}
                    />
                    <p style={{ fontSize: "14px", marginTop: "5px" }}>
                      {charCount}/50 characters
                    </p>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <div
                {...getRootProps()}
                style={{
                  border: "2px dashed #eeeeee",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <input {...getInputProps()} />
                {selectedFile ? (
                  <div>
                    <p>{selectedFile.name}</p>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "110px", // Adjust the height as needed
                    }}
                  >
                    <img
                      src={logo}
                      alt="Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "130px",
                        marginBottom: "10px", // Adds some space between the image and text
                      }}
                    />
                    <p>Drag and drop, or click to select</p>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  );
};

export default Upload;
