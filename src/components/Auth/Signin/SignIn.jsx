import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { auth } from '../../../config/firebase'
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccessMessage] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return(
        <div className="sign-in-container">
            <form onSubmit={handleLogin}>
                <h1>LOG IN</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Log in</button>

                <p className="py-2">Don't have an Account yet? <Link to='/register' className="link">Register</Link></p>

            </form>
        </div>
    )
}