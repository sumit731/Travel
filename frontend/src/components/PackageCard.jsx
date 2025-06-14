
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from '@mui/material';
import Title from './Title';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Fetch function
const fetchTopSellingPackages = async () => {
    const response = await axios.get("https://travel-d9kw.onrender.com/api/packages/top-selling");
    console.log(response.data.data);
    return response.data.data;
};

const PackageCard = () => {
     const { data, isLoading, isError } = useQuery({
            queryKey: ["topSellingPackages"],
            queryFn: fetchTopSellingPackages,
        });
    
        if (isLoading) return <Typography>Loading...</Typography>;
        if (isError) return <Typography>Error fetching packages</Typography>;
    return (
        <>
            <Title title="Top Selling Tour Packages of India" description='Stay updated with our latest news and happenings through Informe.' titleColor="#009acc" descriptionColor="black" descriptionHeight="450px"/>
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
                columns={12}
                columnSpacing={3}
                rowSpacing={3}
                justifyContent="center"
            >
                {data.map((destination, index) => (
                    <Grid
                        key={`${destination.id}-${index}`}
                        columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 4 }}
                    >
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
                                <Typography variant="h6" fontWeight="bold" align="center">
                                    {destination.name}
                                </Typography>
                            </CardContent>
                            <Button variant="contained" sx={{mb: 2, mx: 'auto', display: 'block', px: 10, borderRadius: 10, bgcolor: '#009acc', fontWeight: 'bold' }}>View Details</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </>
    );
};

export default PackageCard;
