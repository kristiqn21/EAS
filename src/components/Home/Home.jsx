import About from "../About/About"
import AuthDetails from "../Auth/AuthDetails"
import ChooseSection from "../ChooseSection/ChooseSection"
import ContactUs from "../ContactUs/ContactUs"
import Copyright from "../Copyright/Copyright"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Testimonials from "../Testimonials/Testimonials"
import VegetableSection from "../VegetableSection/VegetableSection"


export default function Home() {
    return(
        <>
            <Header/>
            <About/>
            <VegetableSection/>
            <ChooseSection/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
            <Copyright/>
            <AuthDetails/>
        </>
    )
}