import pngs from "@/_assets/pngs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

// Define the type for the props
interface OurServicesCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  alignment: string;
}

export default function OurServices() {
  const servicesData = [
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "flex-start",
    },
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "center",
    },
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "flex-end",
    },
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "flex-start",
    },
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "center",
    },
    {
      imageSrc: pngs.HeatPump,
      title: "FREE Air Source Heat Pump",
      description:
        "Access the latest renewable technology with a Free Air Source Heat Pump.",
      alignment: "flex-end",
    },
  ];

  return (
    <>
      <Box
        className="section-padding"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: { sm: "100vh", xl: "auto" },
          backgroundColor: color.lightGreen,
          flexDirection: "column",
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "flex-end",
              gap: "30px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Divider
                sx={{
                  borderBottom: "1px solid #FF7800",
                  width: "60px",
                  margin: "auto",
                }}
              />
              <Typography
                sx={{
                  color: color.orange,
                  fontSize: font.quaternaryTypography,
                  lineHeight: font.quaternaryTypography,
                  textTransform: "uppercase",
                }}
              >
                about us
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  textAlign: "end",
                  lineHeight: font.headingTertiary,
                }}
              >
                Energy Efficiency
              </Typography>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  textAlign: "end",
                }}
              >
                Upgrades Made Easy
              </Typography>
            </Box>
          </Box>
          <Grid
            sx={{
              justifyContent: "space-between",
              rowGap: "50px",
              paddingTop: {
                xs: "40px",
                sm: "40px",
                md: "60px",
                lg: "80px",
                xl: "100px",
              },
            }}
            container
          >
            {servicesData.map((service, index) => (
              <OurServicesCard
                key={index}
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
                alignment={service.alignment}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

function OurServicesCard({
  imageSrc,
  title,
  description,
  alignment,
}: OurServicesCardProps) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: alignment },
      }}
      item
      xs={12}
      md={5.5}
      lg={3.5}
    >
      <Box
        sx={{
          maxWidth: "370px",
          width: "100%",
          maxHeight: "440px",
          borderRadius: "12px",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", height: "auto", marginBottom: "-2.5px" }}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src={imageSrc}
            alt={title}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: color.white,
            padding: "16px 32px 32px 32px",
            textAlign: "justify",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              color: color.darkGreen,
              fontSize: font.headingQuaternary,
              lineHeight: font.headingQuaternary,
              fontWeight: "700",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: color.grey, fontSize: font.captionTypography }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export { OurServicesCard };