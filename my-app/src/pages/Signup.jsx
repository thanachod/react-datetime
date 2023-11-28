import { useState } from "react"



export default function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <div className="signup-div">
                sign up page
                <form className="signup-form">
                    
                    <label>username</label>
                    <input type="text"/>
                    <label>email</label>
                    <input type="text"/>
                    <label>password</label>
                    <input type="password"/>
                    <button type="submit">sign up</button>
                </form>
            </div>
        </>
    )
}