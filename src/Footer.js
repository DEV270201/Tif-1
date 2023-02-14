import React from 'react';
import Logo from './Components/SVG/Logo';
import Instagram from './Components/SVG/Instagram';
import Twitter from './Components/SVG/Twitter';
import Facebook from './Components/SVG/Facebook';
import "./Css/Footer.css";

function Footer() {
    return (
        <div className='footer_outer'>
            <div className='div_1'>
                {/* logo */}
                <div className='footer_logo'>
                    <Logo height={'100%'} width={'100%'} />
                </div>
                {/* contact us */}
                <div className='contact'>
                    <div className='f_head'>Contact Us</div>
                    <div className='c_p tc'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</div>
                    <div className='c_p tc'>example2020@gmail.com</div>
                    <div className='c_p tc'>(904) 443-0343</div>
                </div>
            </div>
            <div className='div_2'>
                {/* more */}
                <div className='more'>
                    <div className='f_head'>More</div>
                    <div className='tc'>About Us</div>
                    <div className='tc'>Product</div>
                    <div className='tc'>Careers</div>
                    <div className='tc'>Contact Us</div>
                </div>

                {/* social links */}
                <div className='social'>
                    <div className='f_head'>
                        <p className='sl'>
                            Social Links
                        </p>
                        <div className='icons'>
                            <Instagram />
                            <Twitter />
                            <Facebook />
                        </div>
                    </div>
                    <div className='tc copyright'>© 2022 Food Truck Example</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;