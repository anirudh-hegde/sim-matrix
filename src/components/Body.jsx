import React from 'react';


const Body = () => {
    return (
        <div className='flex flex-col items-center w-full justify-between text-white'>
            <div className='text-center'>
                <h2 className='my-8 text-[3vw] font-bold'>Explore the Possibilities of&nbsp;Mobile Carrier&nbsp;using  <span class="inline-block relative">
                    SimMatrix <img src="/src/assets/Images/curve.png" class="absolute top-full left-0 w-full xl:-mt-2" width="624" height="28" alt="Curve" />
                </span>
                </h2>
            </div>
            <img
                src='/src/assets/Images/sim.png'
                className='mt-4 justify-center items-center h-60'
                alt='Sim'
            />
            <h4 className='mt-[4em] text-[2vw]'>Easily identify your first mobile carrier using <span className='pt-18'>SimMatrix</span></h4>
            <img
                src='/src/assets/Images/sphere.png'
                className='mt-8 object-cover'
                width={300}
                height={300}
            />
        </div>
    );
}

export default Body;