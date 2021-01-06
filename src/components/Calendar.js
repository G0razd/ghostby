import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        root:{
           padding: 20,
           marginBottom:30 
        }
    }));

function Calendar(props) {
    const classes = useStyles();
    const {name} = props;
    return (
        
            
        <Paper className={classes.root} elevation={2}>
            <Typography variant="h6">{name}</Typography>
        </Paper>
            
            
       
    )
}

export default Calendar
