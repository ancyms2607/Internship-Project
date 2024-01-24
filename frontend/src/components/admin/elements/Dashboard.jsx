import{ React }from "react";
import { tokens } from "../../../theme";
import EmailIcon from "@mui/icons-material/Email";
import {Box,Grid} from "@mui/material"
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import { useTheme } from "@emotion/react";
import Header from "./Header";
import StatBox from "./Statbox";
import Sidebar from "./Sidebar";  

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" display="flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <Box flex="1" p="20px">
        {/* HEADER */}
        <Header  title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* GRID & CHARTS */}
        <Grid container spacing={3}>
          {/* ROW 1 */}
          <StatBox
            item
            xs={12}
            sm={4}
            backgroundColor={colors.primary[400]}
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
          <StatBox
            item
            xs={12}
            sm={4}
            backgroundColor={colors.primary[400]}
            title="7"
            subtitle="Current Projects"
            progress="0.50"
            increase="+21%"
            icon={<ReceiptLongOutlined sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
          <StatBox
            item
            xs={12}
            sm={4}
            backgroundColor={colors.primary[400]}
            title="729"
            subtitle="New Students"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;