import React from "react";
import { Button } from "@mui/material";
import Order from "./Order";


class Basket extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Корзина</h1>
                <div
                    style={
                        {
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center"


                        }}
                >
                    {this.props.cart.map(product => {
                        return <Order
                            image={product.image}
                            title={product.name}
                            name={product.name}
                            price={product.price}
                            key={product.id}
                            description={product.description}
                        />
                    })}
                    {this.props.cart.length === 0 && <div>Корзина пуста</div>}
                </div>
                <div>
                    Итого: {this.props.cart.reduce((acc, product) => acc + product.price, 0)}
                </div>
                <div>
                    <Button
                        onClick={() => this.props.makeOrder()}
                        variant="contained"
                        color="success"
                    >Оформить заказ</Button>
                    <Button
                        onClick={() => this.props.clearCart()}
                        variant="contained"
                        color="error"
                    >Очистить корзину</Button>
                </div>
            </div>
        )
    }
}


export default Basket;