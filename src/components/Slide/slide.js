import { Button } from '@material-ui/core';
import React from 'react';
import Nav from '../Nav/Nav';
import './slide.css';
import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },

    buttonsBar: {
        width: 633,
        margin: '60vh auto'
    }
}));
const ColorButton = withStyles((theme) => ({
    root: {
        color: '#FFF',
        opacity: 0.8,
        borderRadius: 30,
        backgroundColor: blueGrey[800],
        minWidth: 300,
        '&:hover': {
            backgroundColor: blueGrey[900],
        },
    },
}))(Button);

const Slide = ({ modelName, color }) => {
    const classes = useStyles();
    return (
        <div className={'slide'} style={{ backgroundColor: color }}>
            <Nav tabs={['Model F', 'Model U', 'Model C', 'Model K']} />
            <h1 className='header'>{modelName}</h1>
            <div className={classes.buttonsBar}>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Order NOW
                </ColorButton>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Custom order
                </ColorButton>
            </div>
        </div>
    );
}
export default Slide;