// import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import {  Container } from "react-bootstrap";
import Slider from "react-slick";
const policecarousal = new URL('../Allimages/policecarousal.jpeg', import.meta.url)
const policecarousal2 = new URL('../Allimages/policecarousal2.jpeg', import.meta.url)
const policecarousal3 = new URL('../Allimages/policecarousal3.jpeg', import.meta.url)
const policecarousal4 = new URL('../Allimages/policecarousal4.jpeg', import.meta.url)
const policecarousal5 = new URL('../Allimages/policecarousal5.jpeg', import.meta.url)
const policecarousal6 = new URL('../Allimages/policecarousal6.jpeg', import.meta.url)
// const bgimg = new URL('../Allimages/dotpattern.png',import.meta.url)
export function SuccessStory() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    };
    // const StyledPaper = styled(Paper)(({ theme }) => ({
    //     position: 'relative',
    //     backgroundColor: 'transparent', // Set a transparent background
    //     backgroundImage: `url(${bgimg})`, // Set the background image
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
       
    //   }));
    
    return (
        <>
            <div className="p-3" style={{backgroundColor:"white"}}>
                    <Container>
                        <h1 style={{ paddingInlineStart: "4px", paddingBottom: "8px" }} className="m-1">Success Story</h1>
                        <Paper elevation={6} className="p-5" style={{ backgroundColor: "#ffc1071c" }} >

                            <Slider {...settings}>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </div>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal2}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </div>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal3}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </div>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal4}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal5}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div>
                                    <Card sx={{ maxWidth: 245 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={policecarousal6}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                              </div>
                            </Slider>
                        </Paper>
                    </Container> 
            </div>

        </>
    )
}