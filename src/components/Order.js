import React from "react";
import { Card, CardActions, CardMedia, CardContent, Button, Typography, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";


function Order(props) {
    return (
        <Card
            style={{
                maxWidth: '240px',
                margin: '20px',
            }}
        >
            <CardMedia
                component={'img'}
                image={props.image}
                title={props.title}
                style={{
                    height: '200px',
                    width: '200px',
                    margin: '20px',
                }}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.price}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <IconButton aria-label="add"
                    onClick={() => props.addToCart(props.id)}
                >
                    <AddCircle />
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.count}
                </Typography>
                <IconButton aria-label="remove">
                    <RemoveCircle />
                </IconButton>
            </CardActions> */}

        </Card>
    )
}


export default Order;