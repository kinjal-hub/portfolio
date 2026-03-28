import { Box, Typography } from "@mui/material";
// import ResponsiveCard from "./ResponsiveCard";

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
     sx={{
        marginTop:{ xs: 2, md: 5 },
        mx: { xs: 2, sm: "auto" },
        backgroundColor: backgroundColor || "white",
        border: border || "3px solid black",
        display: "flex",
        flexDirection: "column",
        borderRadius: borderRadius || { xs: "12px", md: "24px" },
        height: height || { xs: "auto", md: "80vh" },
        width: width || { xs: "95vw", sm: "90vw", lg: "80vw" },
        padding: { xs: "16px", md: "32px" },
        maxWidth: "1200px",
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
