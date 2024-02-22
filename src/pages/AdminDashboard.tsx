/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import {
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Menu as MenuIcon
} from "@mui/icons-material";
import logo from "../img/core-img/logo2.png";
// import userIcon from "../assets/userLogo.png";
// Import your page components
import HomePage from "@/pages/dasboard/adminPages/AdminHom/AdminHomeDash";

import { useAuth } from "@/hooks/useAuth";
import LoginHistory from "@/pages/dasboard/users/LoginHistory";
import UserDetail from "@/pages/dasboard/users/UserDetail";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupsIcon from "@mui/icons-material/Groups";

import DescriptionIcon from "@mui/icons-material/Description";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InputIcon from "@mui/icons-material/Input";
import AdminActivites from "./dasboard/adminActivity/AdminActivites";
import AllUsers from "./dasboard/adminPages/allusers/AllUsers";
import PendingDepositReq from "./dasboard/adminPages/pendingDepositReq/PendingDepositReq";
import WalletAddressList from "./dasboard/adminPages/WalletAddresses/WalletAddressList";
import WithdrawReq from "./dasboard/adminPages/withdrawReq/WithdrawReq";
import Notification from "./dasboard/notification/Notification";
import WithdrawRequest from "./dasboard/withdrawRequest/WithdrawRequest";
import CreateMember from "./dasboard/adminPages/CreateMember/CreateMember";
// Usage: <ArticleIcon />

// Usage: <AssignmentIcon />

const drawerWidth = 240;
export default function AdminDashboard() {
  const { user, logout } = useAuth();





  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])



  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-account-menu";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: "center", height: "64px" }}>

        <Link to='/'>  <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: isMobile ? "100px" : "120px",
            marginTop: "16px",
          }}
        />
        </Link>
      </Toolbar>
      <Divider />
      <List onClick={handleDrawerToggle}>


        {user?.role == 2 &&

          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        }
        {user?.role == 2 &&
          <ListItemButton component={Link} to="/dashboard/all-users">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText
              primary="All Users"
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        }
        {user?.role == 2 &&
          <ListItemButton component={Link} to="/dashboard/wallet-address">
            <ListItemIcon>
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wallet Address"
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        }
        {user?.role == 2 &&
          <ListItemButton component={Link} to="/dashboard/admin-activities">
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Admin Activites"
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        }



        {/* Deposit history  */}
        <ListItemButton component={Link} to="/dashboard/deposit-requests">
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText
            primary="Deposit Requests"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        {/* Withdraw history  */}
        <ListItemButton component={Link} to="/dashboard/withdraw-requests">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText
            primary="Withdraw Requests"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        {user?.role == 2 &&
          <ListItemButton component={Link} to="/dashboard/create-member">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Create Member"
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        }

      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#FFFFFF",
          zIndex: (theme: any) => theme.zIndex.drawer + 1, // Ensure AppBar is above the Drawer
          width: { sm: `calc(100% - ${drawerWidth}px)` }, // Adjust the width on larger screens
          ml: { sm: `${drawerWidth}px` }, // Push the AppBar to the right on larger screens
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"#4B4B4B"}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>


          {/* user profile icon */}

          <IconButton>
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    navigate(`/dashboard/user-detail/${user?._id}`); // Use menuState.row._id
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = '/';
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {/* routes  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/withdraw-request" element={<WithdrawRequest />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/wallet-address" element={<WalletAddressList />} />
          <Route path="/admin-activities" element={<AdminActivites />} />
          <Route path="/deposit-requests" element={<PendingDepositReq />} />
          <Route path="/withdraw-requests" element={<WithdrawReq />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />

          <Route path="/create-member" element={<CreateMember />} />

        </Routes>
      </Box>
    </Box>
  );
}
