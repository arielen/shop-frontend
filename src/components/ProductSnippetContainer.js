import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

import CardProduct from "./CardProduct";


class ProductSnippetContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fixed>
                <Grid container
                    spacing={3}
                    alignItems="stretch"
                    justify="center"
                >
                    {this.props.products.map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardProduct
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                image={product.image}
                                onClick={this.props.addToCart}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}


export default ProductSnippetContainer;