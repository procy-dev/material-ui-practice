import React from 'react';
import { Grid, Container } from '@material-ui/core';
import PhotoCard from './PhotoCard/PhotoCard';

import useStyles from './styles';

const cards = { //This could be populated from an API or some external data structure but doing this for simplicity
    one: {
        key: 1,
        heading: "Heading number one",
        description: "This is the first test card description"
    },
    two: {
        key: 2,
        heading: "Heading number two",
        description: "This is the second test card description"
    },
    three: {
        key: 3,
        heading: "Heading number three",
        description: "This is the third test card description"
    },
    four: {
        key: 4,
        heading: "Heading number four",
        description: "This is the fourth test card description"
    },
    five: {
        key: 5,
        heading: "Heading number five",
        description: "This is the fifth test card description"
    },
    six: {
        key: 6,
        heading: "Heading number six",
        description: "This is the sixth test card description"
    },
    seven: {
        key: 7,
        heading: "Heading number seven",
        description: "This is the seventh test card description"
    },
    eight: {
        key: 8,
        heading: "Heading number eight",
        description: "This is the eigth test card description"
    },
    nine: {
        key: 9,
        heading: "Heading number nine",
        description: "This is the nineth test card description"
    },
}

const PhotoCardContainer = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                {Object.keys(cards).map((card) => {
                    const {key, heading, description} = cards[card];

                    return (
                        <PhotoCard 
                            key={key}
                            heading={heading}
                            description={description}
                        />
                    );                    
                })}
                </Grid>
            </Container>
        </>
    );
}

export default PhotoCardContainer;
