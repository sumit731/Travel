import { Box, Container, Typography } from "@mui/material";
import Title from "./Title";
import {  GiTakeMyMoney, GiWorld, GiPathDistance } from "react-icons/gi";
import { BiTime } from 'react-icons/bi';

const Advantage = () => {
    const data = [
        {
            icon: <BiTime size={45} color="#009acc" />,
            title: "Save Time",
            description: "No more switching for packages or plans.",
        },
        {
            icon: <GiTakeMyMoney size={45} color="#009acc" />,
            title: "Save Money",
            description: "Compare, negotiate, and choose the best.",
        },
        {
            icon: <GiWorld size={45} color="#009acc" />,
            title: "Trusted Network",
            description: "A Trusted Network of 7000+ Travel Agents",
        },
        {
            icon: <GiPathDistance size={45} color="#009acc" />,
            title: "Multiple Options",
            description: "Itineraries & Travel Tips from Trusted Agents",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#009acc", paddingTop: 1, paddingBottom: 10 }}>
            <Title
                title="Our Advantages"
                description="You can rely on our experience and the quality of services we provide. Here are other reasons to book tours at Treat Holidays"
                titleColor="white"
                descriptionColor="white"
                descriptionHeight="450px"
            />

            <Container
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginTop: 7,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            width: { xs: "100%", sm: "45%", md: "22%" },
                        }}
                    >
                        <Box mb={2} sx={{ backgroundColor: "white", borderRadius: "50%", width: 50, padding:3 }}>{item.icon}</Box>
                        <Typography variant="h6" color="white" fontWeight="bold">
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="white"
                            sx={{ maxWidth: "200px", mx: "auto", mt: 1 }}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Advantage;
