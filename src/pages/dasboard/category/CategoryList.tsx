/* eslint-disable @typescript-eslint/no-explicit-any */
// ** React Imports
import { useContext, useEffect, useMemo, useState } from "react";

// ** Next Import
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
// ** Third Party Imports
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import toast from "react-hot-toast";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import {
  deleteCategoey,
  deleteSubCategory,
  getCategoryList,
  updateStatus,
} from "@/service/api/category";
// import MenuButton from "@/components/MenuButton";

interface CellType {
  row: any;
  _id: any;
}
interface CheckedState {
  name: boolean;
  manager: boolean;
  status: boolean;
  activeContract: boolean;
  annualValue: boolean;
}
const Img = styled("img")(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  marginRight: theme.spacing(3),
}));
interface RowType {
  category: string;
  status: boolean;
  type: string;
  display_name: string;
  description: string;
}

// ** Styled components

const defaultColumns: GridColDef[] = [];

const CategoryList = () => {
  const navigate = useNavigate();
  // ** State
  const { user } = useAuth();
  const [search, setSearch] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 7,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [catategorylist, setCategorylist] = useState<Array<any>>([]);
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);

  const [categoryMenuState, setCategoryMenuState] = useState<any>({});

  const [menuState, setMenuState] = useState<{
    anchorEl: null | HTMLElement;
    row: CellType | null;
  }>({
    anchorEl: null,
    row: null,
  });

  const handleCategoryMenuOpen = (rowId: any) => (event: any) => {
    setCategoryMenuState({
      ...categoryMenuState,
      [rowId]: event.currentTarget,
    });
  };

  // Function to close a specific category menu for a row
  const handleCategoryMenuClose = (rowId: any) => () => {
    setCategoryMenuState({ ...categoryMenuState, [rowId]: null });
  };

  const handleDeleteSubcategory = async (id: any, subcategoryId: any) => {
    try {
      if (window.confirm("Are you sure you want to delete subcategory?")) {
        setIsLoading(true);
        setCategoryMenuState({ ...categoryMenuState, [id]: null });
        const res = await deleteSubCategory(id, subcategoryId);
        if (res.ok === true) {
          toast.success(res.message);
          listData();
        } else {
          toast.error(res?.message || "");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: CellType
  ) => {
    setMenuState({ anchorEl: event.currentTarget, row: row });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, row: null });
  };

  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getCategoryList(user?._id);
      setCategorylist(data);
      console.log("branc", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ITEM_HEIGHT = 48;

  const handleDelete = async (id: any) => {
    try {
      if (window.confirm("Are you sure you want to delete this category?")) {
        setIsLoading(true);
        const res = await deleteCategoey(id);
        if (res.ok === true) {
          toast.success(res.message);
          listData();
        } else {
          toast.error(res?.message || "");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActive = async (id: any) => {
    try {
      if (
        window.confirm(
          "Are you sure you want to change the status this category?"
        )
      ) {
        setIsLoading(true);
        const res = await updateStatus(id, { status: "Active" });
        console.log({ res });

        if (res.ok === true) {
          toast.success(res.message);
          listData();
        } else {
          toast.error(res?.message || "");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInactive = async (id: any) => {
    try {
      if (
        window.confirm(
          "Are you sure you want to change the status of this category?"
        )
      ) {
        setIsLoading(true);
        const res = await updateStatus(id, { status: "Inactive" });
        console.log({ res });

        if (res.ok === true) {
          toast.success(res.message);
          listData();
        } else {
          toast.error(res?.message || "");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) listData();
  }, [user?._id]);

  const filteredList = useMemo(() => {
    let result = catategorylist;
    if (search?.trim().length) {
      result = result.filter((item) =>
        item.name?.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return result;
  }, [search, catategorylist]);

  const columns: any[] = [
    {
      flex: 0.3,
      field: "name",
      minWidth: 180,
      maxWidth: 130,
      headerName: "Category",
      renderCell: ({ row }: { row: any }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "text.secondary" }}>
                {row?.name}{" "}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      flex: 0.2,
      // minWidth: 125,
      // field: "button",
      // headerName: "Created By",

      renderCell: ({ row }: { row: any }) => {
        return (
          <Typography sx={{ color: "text.secondary" }}>
            <Button
              endIcon={
                <ArrowDropDownCircleOutlinedIcon
                  sx={{
                    transform: categoryMenuState[row._id]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              }
              onClick={handleCategoryMenuOpen(row._id)}
            ></Button>
            <Menu
              anchorEl={categoryMenuState[row._id]}
              open={Boolean(categoryMenuState[row._id])}
              onClose={handleCategoryMenuClose(row._id)}
              PaperProps={{
                style: {
                  maxHeight: row?.subCategories.length > 5 ? 200 : "auto", // adjust 200px to your preference
                  overflow: "auto",
                },
              }}
            >
              {Array.isArray(row?.subCategories) && row.subCategories.length ? (
                row?.subCategories.map((subcategory: any) => (
                  <MenuItem
                    key={subcategory._id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {subcategory.name}
                    <Button
                      sx={{ alignItems: "right", color: "red" }}
                      onClick={() =>
                        handleDeleteSubcategory(row._id, subcategory._id)
                      }
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </MenuItem>
                ))
              ) : (
                <Typography sx={{ padding: 2 }}>Nothing to display</Typography>
              )}
            </Menu>
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      // minWidth: 125,
      field: "createdByName",
      headerName: "Created By",

      renderCell: ({ row }: { row: any }) => {
        const { createdByName } = row;
        return (
          <Typography sx={{ color: "text.secondary" }}>{"shah"}</Typography>
        );
      },
    },

    {
      flex: 0.2,
      minWidth: 125,
      field: "status",
      headerName: "Status",
      renderCell: ({ row }: { row: any }) => (
        <>
          <Chip
            size="small"
            variant="outlined"
            label={
              row.status === "Active"
                ? "Active"
                : row.status === "Archived"
                ? "Archived"
                : "Inactive"
            }
            sx={{
              fontSize: "14px",
              // fontWeight: "bold",
              backgroundColor:
                row.status === "Active"
                  ? "#D3FDE4"
                  : row.status === "Archived"
                  ? "#FFF7CB"
                  : "#FFCBCB",
              color:
                row.status === "Active"
                  ? "#3F9748"
                  : row.status === "Archived"
                  ? "#D32F2F"
                  : "#red",
              borderColor:
                row.status === "Active"
                  ? "#D3FDE4"
                  : row.status === "Archived"
                  ? "#FFF7CB"
                  : "#FFCBCB", // Optional: to match border color with background
              "& .MuiChip-label": {
                // This targets the label inside the chip for more specific styling
                color:
                  row.status === "Active"
                    ? "#3F9748"
                    : row.status === "Archived"
                    ? "#D36A2F"
                    : "#D32F2F",
              },
            }}
          />
        </>
      ),
    },

    {
      flex: 0.02,
      minWidth: 100,
      sortable: false,
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={(e: any) => handleClick(e, row)} // Pass the current row here
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={menuState.anchorEl}
            open={Boolean(menuState.anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                navigate(`/dashboard/update-cetegory/${menuState.row?._id}`); // Use menuState.row._id
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleActive(menuState.row?._id); // Use menuState.row._id
              }}
            >
              Active
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleInactive(menuState.row?._id); // Use menuState.row._id
              }}
            >
              Inactive
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDelete(menuState.row?._id); // Use menuState.row._id
                handleClose();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </div>
      ),
    },
  ];

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardHeader title="Categories" />
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ pl: 2.2, mt: -2, mb: 2, fontSize: "13px" }}
          >
            <Link to="category-list" className="link-no-underline">
              Home
            </Link>
            {/* <Typography color="text.primary">Categories</Typography> */}
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
                  <TextField
                    size="small"
                    value={search}
                    placeholder="Search"
                    onChange={(e: any) => setSearch(e.target.value)}
                  />
                </Box>
              </div>

              <div style={{ display: "flex" }}>
                <Button
                  sx={{ mr: 2, textTransform: "none" }}
                  variant="contained"
                  component={Link}
                  to="/dashboard/create-cetegory"
                >
                  <AddIcon /> Create Category
                </Button>
                {/* <MenuButton /> */}
              </div>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            ></Box>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50vh",
                }}
              ></Box>
            ) : (
              <Box sx={{ maxHeight: 500, width: "100%", overflow: "auto" }}>
                <DataGrid
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  autoHeight
                  pagination
                  rows={filteredList || []}
                  columns={columns}
                  // checkboxSelection
                  disableRowSelectionOnClick
                  pageSizeOptions={[7, 25, 50]}
                  paginationModel={paginationModel}
                  onPaginationModelChange={setPaginationModel}
                  onRowSelectionModelChange={(rows: any) =>
                    setSelectedRows(rows)
                  }
                  getRowId={(row) => row._id}
                  // disableColumnMenu
                />
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryList;
