import React from "react";
import Button from "./Button";
import "../Css/Card.css";

const Card = ({ item }) => {
    return (
        <>
            <div className="card_outer">
                <div className="card_img_cont">
                    <img src={item.img} height={'100%'} width={'100%'} alt={item.alt} />
                </div>
                <div className="card_body">
                    <p className="card_head">{item.title}</p>
                    <div className="card_para">
                        <p>
                            {item.desc}
                        </p>
                    </div>
                    <div className="btn3">
                        <Button text="Read More" bgColor="#fff" borderColor="#444957" textColor="#444957" paddingRightLeft="10px" paddingTopBottom="4px" fontFamily="Source Sans Pro" fontWeight="600" fontSize="16px" borderRadius="21px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;