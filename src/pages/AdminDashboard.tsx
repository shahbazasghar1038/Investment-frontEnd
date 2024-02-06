/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Badge,
  ListItemIcon,
  useMediaQuery,
  Collapse,
  useTheme,
  MenuItem,
  Menu,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import logo from "../img/core-img/logo2.png";
// import userIcon from "../assets/userLogo.png";
import PersonIcon from "@mui/icons-material/Person";
// Import your page components
import HomePage from "@/pages/dasboard/adminPages/AdminHom/AdminHomeDash";
import TeamsList from "@/pages/dasboard/teams/TeamsLiat";
import SubPage1 from "@/pages/LoginPage";
import CreateBranch from "@/pages/dasboard/branch/CreateBranch";
import BranchList from "@/pages/dasboard/branch/BranchList";
import CreateTeam from "@/pages/dasboard/teams/CreateTeam";
import UpdateBranch from "@/pages/dasboard/branch/UpdateBranch";
import UpdateTeam from "@/pages/dasboard/teams/UpdateTeam";
import UserList from "@/pages/dasboard/users/UserList";
import CreateUser from "@/pages/dasboard/users/CreateUser";
import ResetPassword from "@/pages/ResetPassword";
import LoginHistory from "@/pages/dasboard/users/LoginHistory";
import UpdateUser from "@/pages/dasboard/users/UpdateUser";
import UserDetail from "@/pages/dasboard/users/UserDetail";
import UserEdit from "@/pages/dasboard/profile/UserEdit";
import { useAuth } from "@/hooks/useAuth";
import Setting from "@/pages/dasboard/profile/Setting";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryList from "@/pages/dasboard/category/CategoryList";
import CreateCategory from "@/pages/dasboard/category/CreateCategory";
import UpdateCategory from "@/pages/dasboard/category/UpdateCategoey";
import CreateTags from "@/pages/dasboard/tags/CreateTags";
import TagList from "@/pages/dasboard/tags/TagList";
import UpdateTags from "@/pages/dasboard/tags/UpdateTags";
import ClausesList from "@/pages/dasboard/clauses/ClausesList";
import UpdateClauses from "@/pages/dasboard/clauses/UpdateClauses";
import CreateClauses from "@/pages/dasboard/clauses/CreateClauses";
import FolderLIst from "@/pages/dasboard/folders/FolderList";
import Upload from "@/pages/dasboard/folders/Upload";
import ComponyList from "@/pages/dasboard/compony/ComponyList";
import UpdateCompony from "@/pages/dasboard/compony/UpdateCompony";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TaskIcon from "@mui/icons-material/Task";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BusinessIcon from "@mui/icons-material/Business";
import TemplateList from "@/pages/dasboard/templates/TemplateList";
import CreateTemplate from "@/pages/dasboard/templates/CreateTemplate";
import UpdateTemplate from "@/pages/dasboard/templates/UpdateTemplate";
import DescriptionIcon from "@mui/icons-material/Description";
import FieldList from "@/pages/dasboard/customField/FieldList";
import InputIcon from "@mui/icons-material/Input";
import ApprovalList from "@/pages/dasboard/approval/ApprovalList";
import CreateApproval from "@/pages/dasboard/approval/CreateApproval";
import UpdateApproval from "@/pages/dasboard/approval/UpdateApproval";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ContractList from "@/pages/dasboard/contract/ContractList";
import ArticleIcon from "@mui/icons-material/Article";
import CreateContract from "@/pages/dasboard/contract/CreateContract";
import TinyDahsbord from "@/pages/dasboard/contract/sdk/TinyDahsbord";
import CustomTextEditor from "@/pages/dasboard/contract/sdk/CustomTextEditor";
import DepositList from "./dasboard/depositHistory/DepositList";
import WithdrawList from "./dasboard/withdrawHistory/WithdrawList";
import Notification from "./dasboard/notification/Notification";
import WithdrawRequest from "./dasboard/withdrawRequest/WithdrawRequest";
import AllUsers from "./dasboard/adminPages/allusers/AllUsers";
import PendingDepositReq from "./dasboard/adminPages/pendingDepositReq/PendingDepositReq";
import WithdrawReq from "./dasboard/adminPages/withdrawReq/WithdrawReq";
import AdminActivites from "./dasboard/adminActivity/AdminActivites";
import WalletAddressList from "./dasboard/adminPages/WalletAddresses/WalletAddressList";
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
        {/* <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton> */}
        {/* Collapsible sub-items */}
        {/* <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/dashboard/sub-page-1"
            >
              <ListItemText
                primary="Sub Page 1"
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItemButton>
            You can add more sub-items here
          </List>
        </Collapse> */}

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
        {/* <ListItemButton component={Link} to="/dashboard/contract-list">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Contracts"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
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

        {/* <ListItemButton component={Link} to="/dashboard/branchlist">
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Branches"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}

        {/* <ListItemButton component={Link} to="/dashboard/user-list">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText
            primary="Users"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/dashboard/approval-list">
          <ListItemIcon>
            <HowToRegIcon />
          </ListItemIcon>
          <ListItemText
            primary="Approvals"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/dashboard/category-list">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText
            primary="Categories"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/dashboard/tags-list">
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText
            primary="Tags"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/dashboard/clauses-list">
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText
            primary="Clauses"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}



        {/* <ListItemButton component={Link} to="/dashboard/template-list">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText
            primary="Templates"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}

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

        {/* <ListItemButton component={Link} to="/dashboard/feild-list">
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText
            primary="Custom Fields"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/dashboard/update-compony">
          <ListItemIcon> 
            <TaskIcon />
          </ListItemIcon>
          <ListItemText
            primary="Deposit Request"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}

        {/* <ListItemButton component={Link} to="/dashboard/withdraw-request">
          <ListItemIcon> 
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText
            primary="Withdraw Request"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}

        {/* <ListItemButton component={Link} to="/dashboard/notification">
          <ListItemIcon> 
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Notifications"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton> */}
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

          {/* notification bell icon  */}

          {/* <IconButton>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}

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
                {/* <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    navigate(`/dashboard/profile-setting`); // Use menuState.row._id
                  }}
                >
                  Settings
                </MenuItem> */}
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

          <Route path="/team-edit/:id" element={<UpdateTeam />} />
          <Route path="/withdraw-requests" element={<WithdrawReq />} />
          <Route path="/branchlist" element={<BranchList />} />
          <Route path="/branch-edit/:id" element={<UpdateBranch />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/create-password/:token" element={<ResetPassword />} />
          <Route path="/user-edit/:id" element={<UpdateUser />} />
          <Route path="/user-update-user/:id" element={<UserEdit />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="/profile-setting" element={<Setting />} />

          <Route path="/login-history" element={<LoginHistory />} />

          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/create-cetegory" element={<CreateCategory />} />
          <Route path="/update-cetegory/:id" element={<UpdateCategory />} />

          <Route path="/create-tags" element={<CreateTags />} />
          <Route path="/tags-list" element={<TagList />} />
          <Route path="/update-tags/:id" element={<UpdateTags />} />

          <Route path="/create-clauses" element={<CreateClauses />} />
          <Route path="/clauses-list" element={<ClausesList />} />
          <Route path="/update-clauses/:id" element={<UpdateClauses />} />

          <Route path="/compony-list" element={<ComponyList />} />
          <Route path="/update-compony" element={<UpdateCompony />} />

          <Route path="/Upload-folder/:id" element={<Upload />} />
          <Route path="/folder-list" element={<FolderLIst />} />
          {/* Depoist list page  */}
          <Route path="/deposit-list" element={<DepositList />} />
          {/* Depoist list page  */}
          <Route path="/withdraw-list" element={<WithdrawList />} />

          {/* template list page old */}
          <Route path="/template-list" element={<TemplateList />} />
          <Route path="/create-template" element={<CreateTemplate />} />
          <Route path="/update-template/:id" element={<UpdateTemplate />} />

          <Route path="/feild-list" element={<FieldList />} />

          <Route path="/approval-list" element={<ApprovalList />} />
          <Route path="/create-approval" element={<CreateApproval />} />
          <Route path="/update-approval/:id" element={<UpdateApproval />} />

          <Route path="/contract-list" element={<ContractList />} />
          <Route path="/create-contract" element={<CreateContract />} />
          <Route path="/tiny-dahsbord" element={<TinyDahsbord />} />
          <Route path="/sub-page-1" element={<SubPage1 />} />
          <Route path="/editor" element={<CustomTextEditor />} />
        </Routes>
      </Box>
    </Box>
  );
}
