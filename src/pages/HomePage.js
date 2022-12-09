import React from 'react'
import * as Icon from 'react-bootstrap-icons'
// Import Styling
import '../pages/HomePage.css'  

// Icon Styling
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

const HomePage = () => {
return (
    <>

    {/* Hero Section */}
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
                JULIUS ESTRADA PASILIAO
            </h1>

            <h2 className='head-two'>
                Junior Full Stack Developer, Designer, <br/> & Photojournalist
            </h2>
        </div>

        {/* Social Media Links */}

        <div className='icon-details'>
            <a className='text-decoration-none icons' href='https://github.com/juliuspasiliao09' target='_blank'><Icon.Github size={50} classNameName='me-3'/></a>
            <a className='text-decoration-none icons' href='https://www.linkedin.com/in/juliusestradapasiliao09/'target='_blank'><Icon.Linkedin size={50} classNameName='me-3'/></a>
            <a className='text-decoration-none icons' href='https://www.facebook.com/juliusestradapasiliao.09' target='_blank'><Icon.Facebook size={50} classNameName='me-3'/></a>
            <a className='text-decoration-none icons' href='https://twitter.com/julius_pasiliao' target='_blank'><Icon.Twitter size={50} classNameName='me-3'/></a>
            <a className='text-decoration-none icons' href='https://www.instagram.com/zeke_dojin' target='_blank'><Icon.Instagram size={50} classNameName='me-3'/></a>
        </div>
    </div>

     {/* Project Section */}

    <div className='project-me' >
        <h2 className='head-tag'> Projects </h2>
        <div className='card-container'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://res.cloudinary.com/dastgstj8/image/upload/v1670505357/tagisam_ng_talino_cs1qlz.png" className="card-img-top h-100" alt="Tagisan ng Talino Quiz Game"/>
                        <div className="card-body">
                            <h5 className="card-title">TAGISAN NG TALINO</h5>
                            <p className="card-text">Tagisan ng Talino is a History Quiz game for Filipino of all ages. The objective of the game is to appreciate and remember the rich history of our culture. </p>
                            <a href="#" className="btn btn-outline-secondary"> View Demo </a>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src="https://res.cloudinary.com/dpbauifc3/image/upload/v1670482100/web-portfolio/DO-NICHE-SION_alcdzg.png" className="card-img-top h-100" alt="Do-niche-sion Application"/>
                    <div className="card-body">
                        <h5 className="card-title">DO-NICHE-SION</h5>
                        <p className="card-text">Do-niche-sion is a Donation Website where people could donate to people who needed help and assistance. A platform where you could share your story and help you reach them. </p>
                        <a href="#" className="btn btn-outline-secondary"> View Demo </a>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src="https://res.cloudinary.com/dastgstj8/image/upload/v1670509549/PoMo_jwuzwu.png" className="card-img-top h-100" alt="POMO application"/>
                    <div className="card-body">
                        <h5 className="card-title">PO:MO</h5>
                        <p className="card-text">PO:MO is a time management application that helps you focus in a single task. It makes you more productive and be more efficient in building habits.</p>
                        <a href="#" className="btn btn-outline-secondary"> View Demo </a>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src="https://res.cloudinary.com/dastgstj8/image/upload/v1670511764/Halika_fg9iut.png" className="card-img-top h-100" alt="HaLiKa Donation Application"/>
                    <div className="card-body">
                        <h5 className="card-title">HALIKA</h5>
                        <p className="card-text">Handog Lingkod Kaagapay or HaLiKa in short is a Donation Inventory Management where all your donations will be tracked and will be delivered to its proper destination.</p>
                        <a href="#" className="btn btn-outline-secondary"> View Demo </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Contacts  */}

    <section id='contact' class='container-lg'>
            <div class='section-header'>
                <h2 class= 'about-me-header'> Contacts </h2>
                <hr class='contact-hr'/>
            </div>

            <p class='contact-title'> Need a Developer? </p>

            <div class='contact-container container-fluid'>

                {/* <!-- Embeded Google Map--> */}
                <div class='embed-googleMap' >
                    <div id="my-map-canvas">
                        <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=16.41413626633633,+120.61782624497278&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                        </iframe>
                    </div>
                    <a class="googl-ehtml" href="https://www.embed-map.com" target='https://www.embed-map.com' id="grab-maps-authorization">https://www.embed-map.com</a>
                </div>
    
    
                {/* <!-- Contact Form --> */}
                <div class='contact-form'>
                    <form action=''>
                        <input type='text' id='name' class='name' placeholder='Name' name='name'/>
                        <input type='email' id='email' class='email' placeholder='Email' name='email'/>
                        <input type='text' id='subject' class='subject' placeholder='Subject' name='subject'/>
                        <textarea id='message' name='message' rows='5' cols='50' maxlength='200' placeholder='Message...'></textarea>

                        {/* <!-- button--> */}
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
        </section>
    </>
    
    
)
}

export default HomePage;