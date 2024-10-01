import {Routes, Route, Link} from 'react-router-dom'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
function HomePage(){
    return(
        <> 
            <Hero />
            <Main />
            <Footer />
        </>
    )
}

export default HomePage