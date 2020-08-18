import React from 'react';
import pic from './utilities/CarolineCherisePic.jpg';
import pic2 from './utilities/CarolineCherisePic2.jpg';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="contents-aboutus">
            <div className="row-pic-bio">
            <img src={pic} alt="Cherise and Caroline" className="pic" />
            <p className="paragraph">
                Cherise and Caroline are two friends that met at their university.
                They were both transfer students and got placed in the same apartment, and the rest
                is history. Long night chats over life and theology bonded the two. 
            </p>
            </div>
            <div className="row-pic-bio">
            <p className="paragraph">
                Cherise and Caroline both have a knack for the creative. Cherise is currently
                involved with acting as well as recording her own music. Caroline enjoys playing
                her musical instruments in her spare time as well as painting. Caroline and 
                Cherise have a lot of differences when it comes to interests, but they both share
                a love for crafting things. And that's how they got started with CC Jewelry!
            </p>
            
            <img src={pic2} alt="Cherise and Caroline" className="pic2" />
            </div>
        </div>
    );
}

export default AboutUs