import React from 'react';
import curve from '/assets/curve.png';
import sim from '/assets/sim.png';
import sphere from '/assets/sphere.png';

const Body = () => {
    return (
        <div className='flex flex-col justify-between items-center w-full text-white'>
            <div className='text-center'>
                <h2 className='my-8 font-bold text-[3vw]'>Explore the Possibilities of&nbsp;Mobile Carrier&nbsp;using  <span class="inline-block relative">
                    SimMatrix <img src={curve} class="top-full left-0 absolute xl:-mt-2 w-full" width="624" height="28" alt="Curve" />
                </span>
                </h2>
            </div>
            <img
                src={sim}
                className='justify-center items-center mt-4 h-60'
                alt='Sim'
            />
            <h4 className='mt-[4em] text-[2vw]'>Easily identify your first mobile carrier using <span className='pt-18'>SimMatrix</span></h4>
            <img id='sphere'
                src={sphere}
                className='mt-8 object-cover'
                width={300}
                height={300}
            />
        </div>
    );
}

export default Body;