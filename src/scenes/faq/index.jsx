import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I reset my password or update my account information?          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, click on the "Forgot your password?" link on the login page and follow the instructions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I access resources and materials for mentoring?          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To access resources and materials for mentoring, click on the "Reference materials" tab on your dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I report an issue or provide feedback on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To report an issue or provide feedback on the dashboard, click on the "Help" tab and select "Contact Us." From there, you can submit a support ticket and provide details about the issue or feedback.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What if I have further questions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you have any additional questions, please don't hesitate to reach out to help@mentorcollective.org. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I ensure data privacy and security on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you have any additional questions, please don't hesitate to reach out to help@mentorcollective.org. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
