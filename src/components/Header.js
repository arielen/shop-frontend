import React from "react";
import { Grid, Container, Button } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import Basket from "./Basket";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Container
                maxWidth="lg"
                style={{
                    backgroundColor: "#f5f5f5",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px"
                }}
                className="header"
                component="header"
                role="banner"
                fixed
            >
                <Grid
                    container
                    spacing={3}
                    justify="space-between"
                    alignItems="center"
                    className="header__container"
                    component="div"
                    role="main"
                    fixed
                    wrap="nowrap"
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <h2>StoneShop</h2>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Button
                            variant="contained"
                            startIcon={<ShoppingBasket />}
                            // onClick={this.openForm}
                            style={{
                                marginRight: "10px",
                                marginLeft: "auto",
                                float: "right", display: "flex",
                                alignItems: "center",
                                backgroundColor: "#311b92"
                            }}
                        >Корзина</Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Header;