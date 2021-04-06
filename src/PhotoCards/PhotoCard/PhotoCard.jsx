import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core';

import useStyles from './styles';

const PhotoCard = ({ key, description, heading }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item key={key} sx={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={`https://source.unsplash.com/random/${Math.floor(Math.random()* 1000)}`}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {heading}
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="secondary">Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default PhotoCard
