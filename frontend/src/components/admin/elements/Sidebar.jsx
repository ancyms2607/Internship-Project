import { useState } from "react";
import {  Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link , useNavigate} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { ProSidebar } from 'react-pro-sidebar';
 import DeleteIcon from '@mui/icons-material/Delete';
 import Topbar from "./Topbar";
// import Sidebar from 'react-pro-sidebar'



const Item = ({ title, to, icon, selected, setSelected , onClick}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate=useNavigate()

  const handleLogout = ()=>{
    sessionStorage.removeItem('Token')
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
                  ADMIN
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
                  src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQGBQEC/8QAOhAAAgIBAQUDCAcJAQAAAAAAAAECAwQRBRIhMVETQbEGInFygZGh0RQVMjRhYnMkM0JEUmOCwcIj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANwAAAAAAAACbExrcu3s6Y69W+SO5jbCx4pO+crJd6T0QGd1XUcOpsa8LFqXmUVr/FEkqKZLSVUGvVQGKBpsrYuLctak6pfl5e44OZh3Yc922PB8pLkwK4AAAAAAAAAAAAAAABLjUTybo1VLWT9y/EiNH5P4yrxnfJedbyfRAXcHDrw6FXXxfOUnzbLIAAAACLIohkUyqtjrGRKAMbm4s8S+Vc+K5xl1RAaXb+N2uJ2sV59XHh07zNAAAAAAAAAAAAAAA2mNWqqK61yjFL4GOpW9dWus0vibYAAAAAAAAD5sgpwlGS1UlozFWQddk4S5xk4v2G3MltaHZ7RvXWWvvApgAAAAAAAAAAAAJMb7zT+pHxNqYmp6W1vpJP4m1A9AAAAAAAAMvt9abRb6wTNQZryi+/x/TXiwOWAAAAAAAAAAAAA9XNG3jyMRFayS6s28eCSA9AAAAAAAAM15Rff4/prxZpTN+Ua/boP+2vFgcoAAAAAAAAAAADpbN2dXnUSk7ZQnGWj0WuqA+Ni4v0nLUpLWuvzn6e5GpRDiYteJSq6lw5tvm2TgAAAAAAAADg+UtXGm70xfj8zvFfNxoZePKmfDXk+j6gY4FrI2flUTalRJpcpQWqZBZTZWk7K5QT5by01A+AAAAAAAACbFybcW1WUy0fJruaIQBp9n7RuymlLEnFd80/NOkY2nMyaOFV84rprqvczo4+Tti/RV66f1SgkgNCCli42QmrMvIlZPujHhFfMugAAAPiE1NtJrVc10Psq5eJ2zVlVjquj9mcfBrvQFiU4w03pJa9SjlZzwsqKuTdFi4TS+y/kVcjIzqq5V5uJG+trRyr10ZxrMmxp1qyx1PlCx72gGms2lhwr3+3g+HJPVv2Gbz8qeZkO2XCPKEeiK4AAAAAABNjYt+VLSity6vuXtLGysD6bc9/hVD7TXf+BqKq4VQUK4qMVwSQHDo2BJrXIvS/LBa/Fl6rYuHD7UJWetI6IAhqxMen91TXH0RRLoegAAAAAAAAARWY9Nn7yqufrRTJQBTlszCl/LQXq8PAhnsXCkuEZx9EjpADgZWwXGLljW735Z/M40ouEnGSalF6NPuZuDheUWKlu5UFze7P8A0wOGAANZsilU4FS00lJb0vaXT4qjuVwjpyikfYAAAANQAAAAAAADzVAeg81XUaoD0AACHLoWRj2VS5SRMAMPKLhJxnHzo8H6QdPa2z8l51k6KpShPztV17wBpQAAAAFD6TZ9aSo1XZqlz00797Qhefd9arF0h2bs3eXHTck/FAAXLL5xplJJaqLfwPnGyJ24ddstN6VcZPTq0eADzZl9l+y8XItetk6YSk9ObaTZYjY2+4ACttjKsw9kZuXUouymidkd5cNVFtamcn5RZyyZ1rstFKOnm9W0/AAD6ydv52O3FOuX/vZDelDjoqO0XL8fgWPrrLljxlrWpOEOKj3u1wb9yAAu7D2lkZuVm1Xbm7S9Ibq0/ikv+UdoAAAAPNEAAP/Z'}
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
                  Aswathy Geetha
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
              to="/dashadmin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >/</Item>
           <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           fontSize={"15px"}
           ><ReceiptOutlinedIcon/> PROJECT</Typography>
            <Item
              
              title="Project Topics"
              to="/topics"
              selected={selected}
              setSelected={setSelected}
              
            />
           <Item
           title="Add Topic"
           to="/addnewtopic"
           selected={selected}
           setSelected={setSelected}
           /><br/>
           <Typography
           vaiant='h6'
           color={colors.grey[300]}
           sx={{m: "15px 0 5px 20px"}}
           fontSize={"15px"}
           ><PeopleOutlinedIcon/> MENTOR</Typography>
            
            <Item
              title="Mentors"
              to="/mentors"
              selected={selected}
              setSelected={setSelected}
            />  

            <Item
              title="Mentor Form"
              to="/addnewmentor"
              selected={selected}
              setSelected={setSelected}
            />
           <br/>
           

            <Button style={{textDecoration :"none", color  : "grey" , paddingLeft: "10%"}} onClick={handleLogout} startIcon={<LogoutIcon/>}>Log out</Button>
            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
    
  );
};

export default Sidebar;
