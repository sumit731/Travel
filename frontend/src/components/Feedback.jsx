import React from "react";
import { Box, Card, CardContent, Typography, Avatar, Container, Grid } from "@mui/material";
import RR from "../assets/RR.jpg";

// Sample feedback data
const feedbackData = [
    {
        id: 1,
        image: RR,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nisi, id odio fuga, eos natus accusantium laudantium ipsam atque molestias, sed delectus? Aperiam, quos. Voluptate, officiis.",
        name: "Arti Kumari",
        company: "TechCorp",
        destination: "Ludhiana"
    },
    {
        id: 2,
        image: RR,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nisi, id odio fuga, eos natus accusantium laudantium ipsam atque molestias, sed delectus? Aperiam, quos. Voluptate, officiis.",
        name: "Sam Sareen",
        company: "GlobalT",
        destination: "pune"
    }, {
        id: 3,
        image: RR,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nisi, id odio fuga, eos natus accusantium laudantium ipsam atque molestias, sed delectus? Aperiam, quos. Voluptate, officiis.",
        name: "Arti Kumari",
        company: "TechCorp",
        destination: "Ludhiana"
    },
];

const Feedback = () => {
    return (
        <>
            <Box
                sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    py: 4,
                    margin: '0 auto',
                    maxWidth: '1440px',
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant="h3" fontWeight="bold" display={"flex"} mb={5} justifyContent={"center"}>Testimonials</Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        padding: 4
                    }}
                >
                    {feedbackData.map((item) => (
                        <Card
                            key={item.id}
                            sx={{
                                width: 300,
                                height: 250,
                                position: "relative",
                                paddingTop: 4,
                                borderRadius: 3,
                                boxShadow: 3,
                                overflow: "visible"
                            }}
                        >
                            {/* Avatar half outside the card */}
                            <Avatar
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    position: "absolute",
                                    top: -40,
                                    left: 20,
                                    border: "4px solid white",
                                    boxShadow: 3
                                }}
                            />

                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <Typography variant="body1" fontStyle="italic">
                                    {item.description}
                                </Typography>

                                <Box mt={2}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.company} — {item.destination}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Feedback;
