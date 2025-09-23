import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ResponsiveCard = ({
  data,
  direction,
  width,
  height,
  margin,
  cardTextAlignment,
  padding,
  cardContentDirection,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: direction ?? "column" },
      }}
    >
      {data?.map((item, index) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: cardContentDirection ?? "column",
            },
            width: width ?? 300,
            heignt: height ?? 400,
            maxHeight: 450,
            margin: "auto",
            m: margin,
            textAlign: cardTextAlignment ?? "centre",
            padding: padding ?? "5px ",
          }}
          key={index}
        >
          <cardTitle>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "warning.main" }}
            >
              {item.title}
            </Typography>
          </cardTitle>
          {item.image && (
            <CardMedia
              component="img"
              sx={{
                width: { xs: 100, md: "auto" },
                height: { xs: 200, sm: 200 },
              }}
              image={item.image}
            />
          )}
          <CardContent>
            {item?.info?.map((infoItem, infoIndex) => (
              <Typography
                variant="body2"
                sx={{ color: "text.primary" }}
                key={infoIndex}
              >
                • {infoItem}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ResponsiveCard;
