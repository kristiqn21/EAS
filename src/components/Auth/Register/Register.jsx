import { useState } from "react"
import { auth } from '../../../config/firebase'
import { Link } from "react-router-dom";
import './Register.css'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccessMessage] = useState('')

    const handleRegister= (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((credentials => {
            console.log(credentials)
        }))
        .catch(
            (error => {
                setErrorMessage(error.message)
            })
        )
    }


    return(
        <div className="sign-in-container">
            <form onSubmit={handleRegister}>
                <h1>Create an a Account</h1>
                <input type="form-group" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Create</button>

                <p className="py-2">Already have an Account? <Link to='/signin' className="link">Sign In</Link>
                </p>
            </form>
        </div>
    )
}