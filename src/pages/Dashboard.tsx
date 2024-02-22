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
  Menu as MenuIcon,
  Notifications as NotificationsIcon
} from "@mui/icons-material";
import logo from "../img/core-img/logo2.png";
// import userIcon from "../assets/userLogo.png";
// Import your page components
import { useAuth } from "@/hooks/useAuth";
import ResetPassword from "@/pages/ResetPassword";
import HomePage from "@/pages/dasboard/Dashboard";
import UpdateCompony from "@/pages/dasboard/compony/UpdateCompony";
import Setting from "@/pages/dasboard/profile/Setting";
import UserEdit from "@/pages/dasboard/profile/UserEdit";
import CreateTeam from "@/pages/dasboard/teams/CreateTeam";
import TeamsList from "@/pages/dasboard/teams/TeamsLiat";
import TemplateList from "@/pages/dasboard/templates/TemplateList";
import LoginHistory from "@/pages/dasboard/users/LoginHistory";
import UserDetail from "@/pages/dasboard/users/UserDetail";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import InputIcon from "@mui/icons-material/Input";
import TaskIcon from "@mui/icons-material/Task";
import DepositList from "./dasboard/depositHistory/DepositList";
import Notification from "./dasboard/notification/Notification";
import WithdrawList from "./dasboard/withdrawHistory/WithdrawList";
import WithdrawRequest from "./dasboard/withdrawRequest/WithdrawRequest";
// Usage: <ArticleIcon />

// Usage: <AssignmentIcon />

const drawerWidth = 240;
export default function Dashboard() {
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
        <Link to='/'>
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: isMobile ? "60px" : "120px",
              marginTop: "16px",
            }}
          />
        </Link>
      </Toolbar>
      <Divider />
      <List onClick={handleDrawerToggle}>

        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        <ListItemButton component={Link} to="/dashboard/teamlist">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Teams"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>


        {/* Deposit history  */}
        <ListItemButton component={Link} to="/dashboard/deposit-list">
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText
            primary="Deposit History"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        {/* Withdraw history  */}
        <ListItemButton component={Link} to="/dashboard/withdraw-list">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText
            primary="Withdraw History"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>


        <ListItemButton component={Link} to="/dashboard/deposit-request">
          <ListItemIcon>
            {/* <BusinessIcon /> */}
            <TaskIcon />
          </ListItemIcon>
          <ListItemText
            primary="Deposit Request"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        <ListItemButton component={Link} to="/dashboard/withdraw-request">
          <ListItemIcon>
            {/* <BusinessIcon /> */}
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText
            primary="Withdraw Request"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>

        <ListItemButton component={Link} to="/dashboard/notification">
          <ListItemIcon>
            {/* <BusinessIcon /> */}
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Notifications"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>
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
            Dashboard
          </Typography>
          <Link to='/dashboard/notification' >

            <IconButton>
              {/* <Badge badgeContent={4} color="secondary">
            </Badge> */}
              <NotificationsIcon />
            </IconButton>
          </Link>

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
                    navigate(`/dashboard/profile-setting`); // Use menuState.row._id
                  }}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    // navigate(`/`);
                    logout();
                    window.location.href = '/';

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
          <Route path="/teamlist" element={<TeamsList />} />


          {/* <Route path="/user-update-user/:id" element={<UserEdit />} /> */}
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="/profile-setting" element={<Setting />} />

          <Route path="/login-history" element={<LoginHistory />} />


          <Route path="/deposit-request" element={<UpdateCompony />} />

          {/* Depoist list page  */}
          <Route path="/deposit-list" element={<DepositList />} />
          {/* Depoist list page  */}
          <Route path="/withdraw-list" element={<WithdrawList />} />

          {/* template list page old */}
          <Route path="/template-list" element={<TemplateList />} />



        </Routes>
      </Box>
    </Box>
  );
}
