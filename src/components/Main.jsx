import photo1 from '../assets/main-img1.jpg'
import photo2 from '../assets/main-img2.jpg'
import photo3 from '../assets/main-img3.jpg'

function Main(){
    return(
        <main>
            <div className="main-left">
                <img className='main-photos' src={photo1} alt="photo1" />
                <div className="main-descriptions">
                    <p className='head'>Aesthetic Ambiance</p>
                    <p className='des'>Immerse yourself in a beautifully designed space that blends modern elegance with cozy comfort. Our carefully curated décor creates the perfect backdrop for an unforgettable dining experience, whether you're here for a special occasion or a casual meal.</p>
                </div>
                <img className='main-photos' src={photo3} alt="photo3" />

            </div>

            <div className="main-right">
                <div className="main-descriptions">
                    <p className='head'>Exquisite Culinary Creations</p>
                    <p className='des'>Indulge in a menu that offers a diverse selection of dishes crafted with the freshest ingredients and inspired by global flavors. Our chefs take pride in presenting visually stunning plates that taste as exceptional as they look.</p>
                </div>
                <img className='main-photos' src={photo2} alt="photo2" />
                <div className="main-descriptions">
                    <p className='head'>Exceptional Customer Service</p>
                    <p className='des'>Enjoy personalized and attentive service from our dedicated team, ensuring every guest feels valued and catered to. From the moment you walk in, we strive to create a warm and welcoming environment where your dining experience is seamless and enjoyable.</p>
                </div>

            </div>
        </main>
    )
}

export default Main