import { Box, Typography } from "@mui/material";
import ResponsiveCard from "./ResponsiveCard";

const ResponsiveSection = ({
  backgroundColor,
  border,
  borderRadius,
  height,
  width,
  title,
  content,
  data,
}) => {
  return (
    <Box
      marginTop={5}
      mx={5}
      justifySelf="center"
      sx={{
        backgroundColor: backgroundColor || "white",
        border: border || "3px solid black",
        display: "flex",
        flexDirection: "column",
        borderRadius: borderRadius || "5%",
        height: height || "90vh",
        width: width || "90vw",
        padding: "16px",
        maxWidth: "100%",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "700",
          letterSpacing: "-1px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        {" "}
        {title}
      </Typography>
      <>{content}</>
    </Box>
  );
};
export default ResponsiveSection;
