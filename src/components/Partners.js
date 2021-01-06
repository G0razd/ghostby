import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: 50,
        },
        img: {
            display:'block',
            width:'50%',
            margin: '0 auto'

        }
        
    }));
function Partners() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography align="center" paragraph variant="h6" >
                Tento projekt je spolufinancován Evropským sociálním fondem a státním rozpočtem České republiky.
            </Typography>
            <Typography align="center" variant="h6"  paragraph>
                Více zde: https://www.csutv.cz/
            </Typography>
            <img className={classes.img} src="./assets/images/partners/msmt.jpg" alt=""/>
        </Container>
    )
}

export default Partners
