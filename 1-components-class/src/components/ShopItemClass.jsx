import React from "react";
import Item from "../model/Item";
import PropTypes from "prop-types";

class ShopItemClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const priceEnding = '.00';
        const {item} = this.props;
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{item.currency}{item.price}{priceEnding}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }


}

Item.propTypes = {
    item: PropTypes.instanceOf(Item).isRequired
}

export default ShopItemClass;