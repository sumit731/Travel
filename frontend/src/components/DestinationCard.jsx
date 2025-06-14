import React, { useState } from 'react';
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Skeleton,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import Title from './Title';
import { fetchDestination } from '../context/contextApi';

const DestinationCard = () => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 6;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["topDestinations"],
        queryFn: fetchDestination,
    });

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + cardsPerPage, data.length - cardsPerPage));
    };

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
    };

    const visibleDestinations = data ? data.slice(startIndex, startIndex + cardsPerPage) : [];

    return (
        <>
            <Title
                title="Explore Most Popular Destinations"
                description="Plan your perfect trip with our most loved and best selling tour packages."
                titleColor="#009acc"
                descriptionColor="black"
                descriptionHeight="450px"
            />

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
                <Grid container spacing={3} justifyContent="center">
                    {isLoading ? (
                        Array.from({ length: cardsPerPage }).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                    <Skeleton variant="rectangular" height={300} />
                                    <CardContent>
                                        <Skeleton width="60%" />
                                        <Skeleton width="40%" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : isError ? (
                        <Typography color="error">❌ Error fetching destinations.</Typography>
                    ) : (
                        visibleDestinations.map((destination, index) => (
                            <Grid item key={`${destination.id}-${index}`} xs={12} sm={6} md={4} lg={3}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': { transform: 'scale(1.03)' },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height={300}
                                        image={destination.image}
                                        alt={destination.name}
                                        sx={{
                                            objectFit: 'cover',
                                            borderRadius: '12px 12px 0 0',
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: 2,
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            gap: { xs: 1, sm: 0 },
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold" color="#009acc">
                                            {destination.name}
                                        </Typography>
                                        <Typography variant="h6">
                                            <Box component="span" sx={{ fontWeight: "light", fontSize: "18px" }}>
                                                Starting from{" "}
                                            </Box>
                                            <Box component="span" sx={{ fontWeight: "bold", color: "#009acc" }}>
                                                ₹{destination.price}
                                            </Box>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>

                {!isLoading && !isError && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            mt: 3,
                        }}
                    >
                        <IconButton
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            sx={{
                                bgcolor: '#009acc',
                                color: 'white',
                                '&:hover': { bgcolor: '#007b9c' },
                                '&:disabled': { bgcolor: '#b0bec5' },
                            }}
                        >
                            <ArrowBackIos />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            disabled={startIndex + cardsPerPage >= data.length}
                            sx={{
                                bgcolor: '#009acc',
                                color: 'white',
                                '&:hover': { bgcolor: '#007b9c' },
                                '&:disabled': { bgcolor: '#b0bec5' },
                            }}
                        >
                            <ArrowForwardIos />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default DestinationCard;
