import React from 'react';
import Logo from "./Components/SVG/Logo";
import Button from './Components/Button';
import Vector from './Components/SVG/Vector';
import Main from "./Images/Main.png";
import "./Css/Home.css";

function Home() {
    return (
        <>
            <div className='outer'>
                {/* left */}
                <div className='outer_left'>
                    <div className='paddedContainer'>
                        <div className='logo_div'>
                            <Logo width={'100%'} height={'100%'} />
                        </div>
                        <div className='heading_cont'>
                            <p className='heading'>Discover the <mark>Best</mark> Food And Drinks</p>
                        </div>
                        <div className='para_cont'>
                            <p className='para'>Naturally made Healthcare Products for the better care & support of your body.</p>
                        </div>
                        <div className='btn1'>
                            <Button text='Explore Now!' paddingTopBottom='14px' paddingRightLeft='34px' borderRadius='34px' borderColor='#E23744' fontSize='18px' fontWeight='700' />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='outer_right'>
                    <div className='home_btn'>
                        <Button text='Get In Touch' borderColor='#fff' borderRadius="20px" fontSize='16px' bgColor='transparent' height="36px" width="99px" paddingRightLeft='10px' paddingTopBottom='10px' />
                    </div>
                    <div className='bg' style={{ backgroundImage: `url(${Main})` }}>
                    </div>
                    <div className='vtr'>
                        <Vector />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;

