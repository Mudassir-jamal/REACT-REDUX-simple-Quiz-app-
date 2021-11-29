import {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export const SignUp = () => {

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const [Email,setEmail] = useState("")



    const Signupfn = (e) => {
        e.preventDefault();

        let obj = {
            Email,
            pass,
            user
        }

        console.log(obj)



        

    }

    return (
        <>
            <h1>Sign up</h1>
            <div>
                <form onSubmit={(e) => Signupfn(e)}> 

                <div>
                        <Input 
                             placeholder="Enter UserName"
                             type="text"
                             onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
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
                </form>


                <div>
                    <Button 
                         value="SignUp"
                    />
                </div>
            </div>
        </>
    )
}
