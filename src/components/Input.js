import React from 'react'

const Input = (props) => {

    const {placeholder,onChange,type} = props
    return <input style={{padding:"10px",fontSize:"1em"}} placeholder={placeholder} onChange={onChange} type={type}/>
}

export default Input
