import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Skeleton,
} from '@mui/material';
import Title from './Title';
import { useQuery } from '@tanstack/react-query';
import { fetchTopSellingPackages } from '../context/contextApi';

const PackageCard = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["topSellingPackages"],
        queryFn: fetchTopSellingPackages,
    });

    return (
        <>
            <Title
                title="Top Selling Tour Packages of India"
                description="Stay updated with our latest news and happenings through Informe."
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
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                    }}
                                >
                                    <Skeleton variant="rectangular" height={300} />
                                    <CardContent>
                                        <Skeleton width="80%" height={30} sx={{ mx: 'auto' }} />
                                    </CardContent>
                                    <Skeleton
                                        variant="rectangular"
                                        height={40}
                                        width="60%"
                                        sx={{ mx: 'auto', mb: 2, borderRadius: 5 }}
                                    />
                                </Card>
                            </Grid>
                        ))
                    ) : isError ? (
                        <Typography color="error" sx={{ textAlign: 'center' }}>
                            ❌ Error fetching packages.
                        </Typography>
                    ) : (
                        data.map((destination, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={`${destination.id}-${index}`}>
                                <Card
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 3,
                                        justifyContent: "center",
                                        alignItem: "center",
                                        boxShadow: 3,
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.03)',
                                        },
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
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            align="center"
                                        >
                                            {destination.name}
                                        </Typography>
                                    </CardContent>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            mb: 2,
                                            mx: 'auto',
                                            display: 'block',
                                            px: 10,
                                            borderRadius: 10,
                                            bgcolor: '#009acc',
                                            fontWeight: 'bold',
                                            '&:hover': { bgcolor: '#007b9c' },
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default PackageCard;
