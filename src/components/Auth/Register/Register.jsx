import {createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { auth } from '../../../firebase'
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    };

    return(
        <div className="sign-in-container">
            <form onSubmit={register}>
                <h1>Create an a Account</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Create</button>

                <p className="py-2">Already have an Account <Link to='/signin'>Sign In</Link></p>
            </form>
        </div>
    )
}