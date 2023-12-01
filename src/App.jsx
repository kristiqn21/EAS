import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import SignIn from "./components/Auth/Signin/SignIn"
import Register from "./components/Auth/Register/Register"
import AuthDetails from "./components/Auth/AuthDetails"
import NotFound from "./components/NotFound"


function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<NotFound/>} />

    </Routes>
  )
}

export default App
