import React from 'react'

function Dot({ color }) {
    const style = {
        width: 25,
        height: 25,
        margin: "0px 10px",
        backgroundColor: `${color}`,
        borderRadius: "50%",
        display: "inline-block"
    }
    return <span style={style}></span>
}
export default Dot
