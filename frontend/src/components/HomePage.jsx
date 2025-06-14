import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import header from "../assets/header.jpg"

const HomePage = () => {
    return (
        <>
        <Box
            sx={{
                height: "90vh",
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
                alignItems: { xs: "center", md: "flex-start" },
                flexDirection: "column",
                    backgroundImage: `url(${header})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                px: { xs: 2, md: 4 },
            }}
        >
            <Box
                sx={{
                    width: "auto",
                    ml: { xs: 0, md: 12 },
                        backgroundColor: { xs: "#ffaa00", md: "transparent" },
                    color: { xs: "white" },
                    borderRadius: { xs: 2, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                    p: { xs: 2, md: 0 },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "30px", md: "50px" },
                        fontWeight: "bold",
                        mb: 2,
                    }}
                >
                    Discover Your Next <br/>Adventure
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "20px", md: "20px" },
                        fontWeight: "bold",
                        mb: 3,
                    }}
                >
                    Choose from our curated experiences, customized for every<br /> kind of traveler.
                </Typography>

                    <Button
                        sx={{
                            backgroundColor: { xs: "white", md: "#ffaa00" },
                            color: { xs: "#ffaa00", md: "white" },
                            borderRadius: "30px",
                            fontSize: "18px",
                            width: "180px",
                            height: "50px",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: { xs: "#f0f0f0", md: "white" },
                                transition: "0.3s ease-in",
                                color: { xs: "#ffaa00", md: "#ffaa00" },
                            },
                        }}
                    >
                        BOOK NOW
                    </Button>

                
            </Box>
        </Box>
         {/* Bottom Content */ }
    {/* <Box
        sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            textAlign: "center",
            p: 2,
            borderRadius: 2,

        }}
    >
        <Typography variant="body2" sx={{ fontSize: "16px" }}>
            Embark on a journey like never before. From exotic beaches to bustling cities,
            we have handpicked experiences waiting just for you.
        </Typography>
    </Box> */}
    </>
    );
};

export default HomePage;
