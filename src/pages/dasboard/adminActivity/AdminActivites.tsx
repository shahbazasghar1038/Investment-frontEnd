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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { format, utcToZonedTime } from "date-fns-tz";
// ** Third Party Imports
import logo from "@/assets/team_icon.svg";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  archiveTeam,
  deleteTeam,
  getAdminActivites,
  getRefferalList,
  getTeamsList,
  resetPaasword,
} from "@/service/api/apiMethods";
import AddIcon from "@mui/icons-material/Add";
import ProgressCircularCustomization from "@/pages/dasboard/users/ProgressCircularCustomization";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import CategoryList from "../category/CategoryList";
interface CellType {
  row: any;
  _id: any;
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

const defaultColumns: any[] = [
  // {
  //   flex: 0.2,
  //   field: "name",
  //   minWidth: 230,
  //   headerName: "Name",
  //   renderCell: ({ row }: any) => {
  //     const { name } = row;

  //     return (
  //       <Box sx={{ display: "flex", alignItems: "center" }}>
  //         <Box sx={{ display: "flex", flexDirection: "column" }}>
  //           <Typography sx={{ color: "text.secondary" }}>{name}</Typography>
  //         </Box>
  //       </Box>
  //     );
  //   },
  // },
  {
    flex: 0.2,
    minWidth: 230,
    field: "amount",
    headerName: "Amount",
    sortable: true,
    renderCell: ({ row }: any) => {
      const { amount } = row;

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "text.secondary" }}>{amount}</Typography>
          </Box>
        </Box>
      );
    },
  },



  {
    flex: 0.2,
    minWidth: 230,
    field: "email",
    headerName: "Email",
    sortable: true,
    renderCell: ({ row }: any) => {
      const { email } = row;

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "text.secondary" }}>{email}</Typography>
          </Box>
        </Box>
      );
    },
  },

  // {
  //   flex: 0.2,
  //   minWidth: 230,
  //   field: "walletAddress",
  //   headerName: "Wallet Address",
  //   sortable: true,
  //   renderCell: ({ row }: any) => {
  //     const { email } = row;

  //     return (
  //       <Box sx={{ display: "flex", alignItems: "center" }}>
  //         <Box sx={{ display: "flex", flexDirection: "column" }}>
  //           <Typography sx={{ color: "text.secondary" }}>{email}</Typography>
  //         </Box>
  //       </Box>
  //     );
  //   },
  // },



  {
    flex: 0.2,
    minWidth: 125,
    field: "type",
    headerName: "Request Type",
    renderCell: ({ row }: { row: any }) => (
      <>
        <Chip
          size="small"
          variant="outlined"
          label={row.type ? row.type : ' N / A'}
          sx={{ textTransform: 'capitalize' }}
        />
      </>
    ),
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
            row.status === "Approved"
              ? "Approved"
              : "Rejected"
          }
          sx={{
            fontSize: "14px",
            // fontWeight: "bold",
            backgroundColor:
              row.status === "Approved"
                ? "#D3FDE4"
                : "#000",
            color:
              row.status === "Approved"
                ? "#3F9748"
                : "red",
            borderColor:
              row.status === "Approved"
                ? "#D3FDE4"
                : "#D3FDE4", // Optional: to match border color with background
            "& .MuiChip-label": {
              // This targets the label inside the chip for more specific styling
              color:
                row.status === "Approved"
                  ? "#3F9748"
                  : "#D32F2F",
            },
          }}
        />
      </>
    ),
  },









  {
    flex: 0.2,
    field: "createdAt",
    minWidth: 140,
    headerName: "Date",
    renderCell: ({ row }: any) => {
      const { createdAt } = row;

      // Specify the desired time zone, e.g., 'America/New_York'
      const timeZone = "America/New_York";

      // Convert UTC date to the specified time zone
      const zonedDate = utcToZonedTime(new Date(createdAt), timeZone);

      // Format the date and time with hours, minutes, and AM/PM
      const formattedDateTime = format(zonedDate, "dd-MM-yyyy hh:mm a", {
        timeZone,
      });

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "text.secondary" }}>
              {formattedDateTime}
            </Typography>
          </Box>
        </Box>
      );
    },
  },



  {
    flex: 0.3,
    minWidth: 125,
    field: "UserId",
    headerName: "Respond By ",
    renderCell: ({ row }: { row: any }) => {
      const { UserId } = row;
      return (
        <Typography sx={{ color: "text.secondary" }}>{UserId[0]?.name}</Typography>
      );
    },
  },
  // {
  //   flex: 0.3,
  //   minWidth: 125,
  //   field: "date",
  //   headerName: "Data ",
  //   renderCell: ({ row }: { row: any }) => {
  //     const { date } = row;
  //     return (
  //       <Typography sx={{ color: "text.secondary" }}>{date}</Typography>
  //     );
  //   },
  // },
];

const AdminActivites = () => {
  const navigate = useNavigate();
  // ** State
  const { user } = useAuth();
  const [search, setSearch] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [catategorylist, setCategorylist] = useState<Array<any>>([]);

  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [menuState, setMenuState] = useState<{
    anchorEl: null | HTMLElement;
    row: CellType | null;
  }>({
    anchorEl: null,
    row: null,
  });

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: CellType
  ) => {
    setMenuState({ anchorEl: event.currentTarget, row: row });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, row: null });
  };

  // ** Hooks

  const listData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAdminActivites();
      // const transformedData = data?.referredUsers.map((row: any) => ({
      //   ...row,
      //   managerFirstName: row.manager ? row.manager.firstName : "",
      //   members: row.members ? row.members.length : "",
      // }));
      setCategorylist(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ITEM_HEIGHT = 48;

  useEffect(() => {
    if (user?.role == 2) {
      return;
    } else {
      navigate('/dashboard/deposit-requests')
    }
  }, [])

  const handleArchive = async (id: any) => {
    try {
      if (window.confirm("Are you sure you want to archive this team?")) {
        setIsLoading(true);
        const res = await archiveTeam(id, { status: "Archived" });


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
  const handleDelete = async (id: any) => {
    try {
      if (
        window.confirm(
          "Deleting Team will delete all the data associated with it."
        )
      ) {
        setIsLoading(true);
        const res = await deleteTeam(id);
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
    listData();
  }, []);


  const filteredList = useMemo(() => {
    let result = catategorylist;
    if (search?.trim().length) {
      result = result.filter((item) =>
        item.name?.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return result;
  }, [search, catategorylist]);

  const columns: GridColDef[] = [
    ...defaultColumns,

  ];


  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardHeader title="Admin Activities" className="text-white" />
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
              >
                {" "}
                <ProgressCircularCustomization />
              </Box>
            ) : (
              <Box sx={{ maxHeight: 510, display: "table", tableLayout: "fixed", width: "100%" }}>
                <DataGrid
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
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
                  getRowId={(row: any) => row._id}
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

export default AdminActivites;
