import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'

const Dashboard = () => {

    const [userLogin ,setuserLogin] = useState(false    )

    const navigation = useNavigate()
    




    useEffect(() => {
        if(!userLogin){
            navigation("/Login")
             
        }
        
    }, [userLogin])

    return (
        <>
            <h1>Dashboard </h1>
            {/* <button onClick={() => setuserLogin(false)}>User</button> */}
            {/* <h1>user name</h1> */}
        </>
    )
}

export default Dashboard
