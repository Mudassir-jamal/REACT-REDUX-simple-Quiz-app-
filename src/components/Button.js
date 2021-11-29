import React from 'react'

const Button = (props) => {

    const {value,onClick} = props
    return <button style={{width:"300px",padding:"10px" , fontSize:"1em"}} onClick={onClick}>{value}</button>
}

export default Button
