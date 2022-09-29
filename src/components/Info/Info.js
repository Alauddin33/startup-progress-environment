import React from 'react';
import './Info.css'
import logo from '../../self.png'
import icon from '../../location.png'
const Info = () => {
    return (
        <div>
            <div className='profile-pic'>
                <img src={logo} alt="" />
                <div>
                    <p className='name'>Md. Ala Uddin</p>
                    <div className='location'>
                        <img src={icon} alt="" />
                        <p className='address'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='specified'>
                <div>
                    <h4>75 Kgs</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.5 Feet</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>35 Years</h4>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Info;