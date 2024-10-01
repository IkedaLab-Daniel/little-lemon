import {Link} from 'react-router-dom'
function Hero(){
    return(
        <div id="hero">
            <div id="main-hero">
                <p className='big'>Welcome to</p>
                <p className="big yellow">Little Lemon Restaurant</p>
                <p className='hero-description'>Indulge in a culinary journey with our freshly prepared dishes, crafted with the finest ingredients. Whether you're here for a casual meal or a special occasion, we promise a delightful dining experience. Reserve your table today!</p>
                <Link to='/BookingPage'>
                    <span id="book-btn">Book Now</span>
                </Link>
            </div>
        </div>
        
    )
}

export default Hero