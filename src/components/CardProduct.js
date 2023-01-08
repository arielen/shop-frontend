import React from "react";
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";


class CardProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            price: props.price,
            name: props.name,
            image: props.image,
            description: props.description,
        };
    }


    render() {
        return (
            <Card
                cx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    margin: 'auto',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
                raised
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                >
                    {this.props.name}
                </Typography>

                <CardMedia
                    component={'img'}
                    image={this.props.image}
                    title={this.props.name}
                    style={{
                        height: '200px',
                        width: '200px',
                        margin: 'auto',
                    }}
                    alt={this.props.name}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#000',
                    }}
                >
                    {this.props.price} ₽
                </Typography>

                <CardActions style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    margin: 'auto',
                }}
                    disableSpacing
                    align="center"
                >
                    <Button
                        variant="contained"
                        color="error"
                        style={{
                            margin: 'auto',
                            width: '100px',
                        }}
                        startIcon={<AddShoppingCart />}
                        size="small"
                        onClick={() => this.props.onClick(this.props)}
                    >
                        Купить
                    </Button>
                </CardActions>

            </Card >
        )
    }
}


export default CardProduct;