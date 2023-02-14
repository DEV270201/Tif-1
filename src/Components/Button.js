import React from "react";

const Button = ({ text = "Click", borderRadius, bgColor = "#E23744", textColor = "#fff", paddingTopBottom = "2px", paddingRightLeft = "2px", borderColor = "#E23744", fontFamily = "Open Sans", fontWeight = "600", fontSize = "15px" }) => {
    return (
        <>
            <button className="btn"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    borderRadius,
                    border: `1px solid ${borderColor}`,
                    padding: `${paddingTopBottom} ${paddingRightLeft}`,
                    fontSize,
                    fontFamily,
                    fontWeight
                }}>
                {text}
            </button>
        </>
    )
}

export default Button;