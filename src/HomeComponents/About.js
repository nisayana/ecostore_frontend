import React from 'react';

const About = () => {
    return(
        <div id="about-container">
            <h1 className="header">About</h1>
            <img src="https://www.dcpweb.co.uk/userfiles/gallery/file/portfolio_logo_eco_planet_3x2.jpg" alt="name" className="category-image" />
            {/* <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&w=1000&q=80" alt="name" className="category-image" /> */}
            <br></br>
            <h4>We don’t need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly. – Anne Marie Bonneau aka The Zero Waste Chef</h4>
            <h4>There is no such thing as ‘away’. When we throw anything away, it must go somewhere. – Annie Leonard</h4>
            <h4>The world is changed by your example, not by your opinion. – Paulo Coelho</h4>
            <h4> If we want to move towards a low-polluting, sustainable society, we need to get consumers to think about their purchases. – David Suzuki</h4>
        </div>
    )
}

export default About;