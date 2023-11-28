import { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth';


export default function AuthDetails() {
    const [authUser, setAuthUser] = useState('');

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null)
            }
        }) 
    }, [])
    return(
        <div>{authUser ? <p>SIgned in</p> : <p>Signed out</p>}</div>
    )
}