import React from 'react';
const Articles = () => {
    return (
        <div>
            <div className='mt-10 '>
                <div className='ml-[29em] pt-[8em] max-w-[17rem]'>
                    <div className='border-[0.01em] rounded-[1em] border-gray-600 p-3'>
                        <h4 class="text-4xl mb-4 ml-0">Why SimMatrix?</h4>
                        <h4 class="h4 mb-4">Unlock the journey of your phone’s identity,
                            tracing back to its very first handshake with the mobile carrier.
                        </h4>
                        <p class="body-2 mb-[2rem] text-n-3">SimMatrix unlocks the <span className='text-blue-500 font-semibold'>base</span> potential of <span className='text-green-700 font-semibold'>Mobile Forensics</span> applications</p>
                        <ul class="body-2">
                            <li class="flex items-start py-4 border-t border-n-1">
                                <img width="24" height="24" src="./src/assets/check.svg" />
                                <p class="ml-4 text-left">Understanding the first mobile carrier</p>
                            </li>
                            <li class="flex items-start py-4 border-t border-n-6">
                                <img width="24" height="24" src="./src/assets/check.svg" />
                                <p class="ml-4">Reliability</p>
                            </li>
                            <li class="flex items-start py-4 border-t border-n-6">
                                <img width="24" height="24" src="./src/assets/check.svg" />
                                <p class="ml-4">Supports Global Carriers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articles