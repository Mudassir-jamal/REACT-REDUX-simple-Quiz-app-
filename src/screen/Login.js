
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")


    const loginFn = (e) => {
        e.preventDefault();

        let obj = {
            email,
            pass
        }

        console.log(obj)



        

    }

    return (
        <div>
            <h1>login</h1>
            <div>
                <form onSubmit={(e) => loginFn(e)}> 
                    <div>
                        <Input 
                             placeholder="Enter email"
                             type="email"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
               
                    <div>
                        <Input 
                             placeholder="Enter Password"
                             type="password"
                             onChange={(e) => setPass(e.target.value)}
                        />
                    </div>

                    <Button 
                         value="Login"
                         style={{color:"red",backgroundColor:"red"}}
                    />
                </form>

                <Link to="/signUp">Register</Link>


                <div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login
