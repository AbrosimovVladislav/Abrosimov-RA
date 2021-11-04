import React from "react";

export default function Listing({items}) {
    console.log(items)
    let quantityLvl = "level-low";

    return (
        items.map((item) =>
            <div className="item-list" >
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt="1" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title.length > 50 ? item.title.substr(0,50) + "...": item.title }</p>
                        <p className="item-price">
                            {item.currency_code === "USD" ? item.currency_code = "$" : item.currency_code ==="EUR" ? item.currency_code = "€" : item.currency_code = "GBP" }
                            {item.price}
                        </p>
                        <p className={item.quantity <=10 ? 'item-quantity level-low ' : item.quantity <=20 && item.quantity >10 ? 'item-quantity level-medium': 'item-quantity level-high' }>
                            {item.quantity + " "}left</p>
                    </div>
                </div>
            </div>
        )
    )
}
