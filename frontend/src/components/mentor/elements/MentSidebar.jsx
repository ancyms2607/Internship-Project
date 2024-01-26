import { useState } from "react";
import {  Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, ListItemIcon, Typography, useTheme , Button} from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { ProSidebar } from 'react-pro-sidebar';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MenuBookIcon from '@mui/icons-material/MenuBook';



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
  const navigate=useNavigate();


  const logout=()=>{
    sessionStorage.clear()
   navigate('/login')
  }

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
           sx={{m: "0px 0 5px 20px"}}
           fontSize={"15px"}
           ><ReceiptOutlinedIcon/> PROJECT</Typography>
            <Item
              title="Project Topics"
              to="/menttopics"
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Submissions"
              to="/mentsub"
              selected={selected}
              setSelected={setSelected}
            /><br/>
           <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           fontSize={"15px"}
           ><ChecklistIcon/> EVALUATION</Typography>
            <Item
              title="Evaluations"
              to="/evals"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Evaluate"
              to="/valuation"
              selected={selected}
              setSelected={setSelected}
            /><br/>  
            <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           fontSize={"15px"}
           ><MenuBookIcon/> REFERENCES</Typography>

            <Item
              title="Reference Materials"
              to="/refmaterials"
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Add Reference"
              to="/addrefers"
              selected={selected}
              setSelected={setSelected}
            /><br/>     
            <Button style={{textDecoration :"none", color  : "grey" , paddingLeft: "10%"}} onClick={logout}  startIcon={<LogoutIcon/>}>Log out</Button>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default MentSidebar;
