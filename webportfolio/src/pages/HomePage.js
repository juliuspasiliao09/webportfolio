import React from 'react'

// Import Components
import Header from '../components/Header'

// Import Styling
import '../pages/HomePage.css'  

const HomePage = () => {
return (
    <>
    <div className='landing'>

        <img className='image-logo'
        src='https://res.cloudinary.com/dastgstj8/image/upload/v1670174961/JU_LI_US_3_iinecb.png'
        alt='Julius Logo'/>

        <h1>
            Julius Pasiliao
        </h1>

        <h2>
            Junior Full Stack Developer, Designer, <br/> & Photojournalist
        </h2>
    </div>

    <div className='about-me'>

    </div>
    
    </>
    
    
)
}

export default HomePage;