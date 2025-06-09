import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/header/Header';
import banner from '../assets/images/vckbanner.jpg';
 
import './Home.css';



const HomePage = () => {
    return (
         <div id="root">
            <div id="back"><br/>
                <div className="banner-container">
                    <img src={banner} alt="college image" className="college-image"  /> 
                        
                            <h2 id="banner-text">Welcome To Vivekanand College</h2>
                            <p><strong>Your journey to excellence starts here.</strong></p>
                            <Link to="/admission" id='apply-btn'><button id="btn">Apply Now!</button></Link>


                </div>
                <br/>
                <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped</p>
                <h2>Why Choose Vivekanand College?</h2>
                <hr/>
                <ul>
                    <li> **Legacy of Excellence:** Decades of commitment to quality education.</li>
                    <li> **Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                    <li> **Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li> **Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                    <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
               </ul>
               <h2>Campus Life & Facilities</h2>
               <hr/>

                <img></img>

               <div>

                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p><br/>
                    <p>Ready to explore our courses?</p>
                    <Link to="/courses" id="aply-btn"><strong><button id="btnn">Explore Courses</button></strong></Link>

               </div>

            </div> 
         </div>
    ); 
};

export default HomePage;




