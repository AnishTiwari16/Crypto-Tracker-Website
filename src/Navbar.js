import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../src/Navbar.css";
import React from "react";


const Navbar = ()=>{
    return(
        <AppBar position = 'static'>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography className = "nav-spacing">Get Started</Typography>
                <a href="https://wallet.bitcoin.com/" target="_blank" className = "nav-spacing">Wallet</a>
                <a href="https://news.bitcoin.com/" target="_blank" className = "nav-spacing">News</a>
                <a href="https://exchange.bitcoin.com/" target="_blank" className = "nav-spacing">Exchange</a>
                <Typography className = "nav-spacing"></Typography>
                <Button href="https://buy.bitcoin.com/" target="_blank" color="secondary" variant ="contained">Buy/Sell Bitcoin</Button>
            </Toolbar>



        </AppBar>
    );
};

export default Navbar;