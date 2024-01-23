import { useState } from "react";
import {  Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, ListItemIcon, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { ProSidebar } from 'react-pro-sidebar';
import { ListAltOutlined } from "@mui/icons-material";
import { GradeOutlined } from "@mui/icons-material";





const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const MentSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 15px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  MENTOR
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile"
                  width="100px"
                  height="100px"
                  src={'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-unknown-male-silhouette-anonymous-dramatic-user-vector-png-image_18114870.jpg'}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ashin Amanulla
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  ICT Academy of Kerala
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashment"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >/</Item>
           <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           >Project</Typography>
            <Item
              title="Project Topics"
              to="/menttopics"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Submissions"
              to="/mentsub"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{m: "15px 0 5px 20px"}}
            >Evaluation</Typography>
        
            <Item
              title="Evaluations"
              to="/evals"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Evaluate"
              to="/evaluate"
              icon={<GradeOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />  
            <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           >References</Typography>

            <Item
              title="Ref Materials"
              to="/refmaterials"
              icon={<ListItemIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Add Reference"
              to="/addrefers"
              icon={<ListItemIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

            <Item
              title="Logout"
              to="/login"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default MentSidebar;
