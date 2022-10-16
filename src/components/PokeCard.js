import React, {useState} from 'react'
import { Card, CardContent, CardMedia, Grid, Modal, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles"
import PokemonInfo from "../screens/PokemonInfo"

const useStyles = makeStyles(() => ({
    pokemonCard: {
        cursor: "pointer",
    },
    pokemonName:{
        textAlign: "center",
        fontWeight: "450",
        fontSize: "14px",
        color: "#6F38C5"
    },
    pokemonModal: {

    }
}))

const style = {
    display: "flex",
    height: "700px",
    width: "610px",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#FCE700",
    border: '4px solid #fff',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    padding: "20px",
    alignItems: "center",
    textAlign: "center"
};

const PokeCard = (props) => {

    const { pokemon, pokemonImage } = props
    const { id, name } = pokemon

    // Control the Pokemon Modal
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    // style
    const classes = useStyles()


    return (
        <Grid item xs={12} sm={6} md={4} lg={2}>

           {/* Pokemon Card*/}
            <Card className={classes.pokemonCard}
                  key={id}
                  onClick={handleOpen}
                  style={{ backgroundColor: "#FDFDBD" }}
            >
                <CardMedia
                    component="img"
                    image={pokemonImage}
                    alt="Pokemon Image"
                />
                <CardContent>
                    <Typography className={classes.pokemonName}
                        variant="body2"
                    >
                        {name.toUpperCase()}
                    </Typography>
                </CardContent>
            </Card>

            {/* Pokemon Modal*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="pokemon-modal-title"
                aria-describedby="pokemon-modal-description"
            >
                <Grid container sx={style} key={id}>
                    <PokemonInfo
                        pokemon={pokemon}
                        key={pokemon.id}
                    />
                </Grid>
            </Modal>
        </Grid>
    );
};

export default PokeCard
