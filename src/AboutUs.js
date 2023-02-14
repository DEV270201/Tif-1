import React from 'react';
import Img1 from "./Images/img1.png";
import "./Css/About.css";
import Button from './Components/Button';

function AboutUs() {
    return (
        <div className='about_us'>
            <div className='image'>
                <img src={Img1} height={'100%'} width={'100%'} alt='imgprop' />
            </div>
            <div className='abtus_content'>
                <div className='abt_head_para'>
                    <p className='abt_heading'>About Us</p>
                    <p className='abt_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                </div>
                <div className='btn2'>
                    <Button text='Read Now' borderRadius={'21px'} paddingTopBottom={'5px'} paddingRightLeft={'26px'} fontSize={'16px'} fontWeight={'600'} fontFamily={'Source Sans Pro'} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;