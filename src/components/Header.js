import React from 'react'
import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    link: {
        color: "#fff",
        textDecoration: "none"
    }
}))

const Header = () => {
    const styleClasses = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={styleClasses.link}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            POKEMONS
                        </Typography>
                    </Link>
                    <Link to="/saved" className={styleClasses.link}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ marginLeft: "20px" }}>
                            SAVED
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
