import React from 'react'
import * as Icon from 'react-bootstrap-icons'
// Import Styling
import '../pages/HomePage.css'  

// Icon Styling
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

const HomePage = () => {
return (
    <>
    <div className='landing'>
        <div className='logo'>
            <img className='image-logo'
            src='https://res.cloudinary.com/dastgstj8/image/upload/v1670174961/JU_LI_US_3_iinecb.png'
            alt='Julius Logo'/>
        </div>

        <div className='background-image'>
            <img className='image-background'
            src='https://res.cloudinary.com/dastgstj8/image/upload/v1670198272/background_ceiuj7.png'
            alt='background-logo'
            />
        </div>

        <div className='details'>
            <h1 className='head-one'>
                JULIUS PASILIAO
            </h1>

            <h2 className='head-two'>
                Junior Full Stack Developer, Designer, <br/> & Photojournalist
            </h2>
        </div>

        <div className='icon-details'>
            <a className='text-decoration-none icons' href='https://github.com/juliuspasiliao09' target='_blank'><Icon.Github size={50} className='me-3'/></a>
            <a className='text-decoration-none icons' href='https://www.linkedin.com/in/juliusestradapasiliao09/'target='_blank'><Icon.Linkedin size={50} className='me-3'/></a>
            <a className='text-decoration-none icons' href='https://www.facebook.com/juliusestradapasiliao.09' target='_blank'><Icon.Facebook size={50} className='me-3'/></a>
            <a className='text-decoration-none icons' href=''><Icon.Twitter size={50} className='me-3'/></a>
            <a className='text-decoration-none icons' href=''><Icon.Instagram size={50} className='me-3'/></a>
        </div>
    </div>

    <div className='about-me'>
        <h2 className='head-two'> Projects </h2>

        <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    </div>
    
    </>
    
    
)
}

export default HomePage;