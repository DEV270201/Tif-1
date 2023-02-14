import React, { useState } from 'react';
import Card from './Components/Card';
import Data from './Data';
import Next from './Components/SVG/Next';
import Previous from './Components/SVG/Previous';
import NextD from './Components/SVG/NextD';
import PreviousD from './Components/SVG/PreviousD';
import "./Css/Articles.css";

function Articles() {
    const [i, setI] = useState(0);

    const Increment = () => {
        if (i === Data.length) {
            return;
        }
        setI(i + 1);
    }

    const Decrement = () => {
        if (i === 0) {
            return;
        }
        setI(i - 1);
    }

    return (
        <div className='articles_outer'>
            <p className='articles_heading'>Latest Articles</p>
            <div className='articles_container'>
                <div className='articles'>
                    {
                        Data[i].map((item, index) => {
                            return <div key={index}>
                                <Card item={item} />
                            </div>
                        })
                    }
                </div>
                <div className='nav_buttons'>
                    <button className='navbtn' onClick={Decrement} disabled={i === 0}>
                        {
                            i === 0 ? <PreviousD /> : <Previous />
                        }
                    </button>
                    <p>{i + 1} / {Data.length}</p>
                    <button className='navbtn' onClick={Increment} disabled={i === Data.length - 1}>
                        {
                            i === Data.length - 1 ? <NextD /> : <Next />
                        }
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Articles;