import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHexagonNodesBolt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        // <div className="h-[4rem] bg-black w-screen text-white flex items-center " >
        <header class='border-solid border-[0.1em] border-gray-600 flex shadow-md py-4 px-4 sm:px-10 bg-gray-950 font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div class='flex flex-wrap items-center justify-between gap-5 w-full'>
                <a href="javascript:void(0)"><img src="./src/assets/Images/sim-matrix.png" alt="logo" class='w-36' />
                </a>
                <div id="collapseMenu"
                    class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>
                </div>
                <div class='flex max-lg:ml-auto space-x-4'>
                    <button
                        onClick={() => window.open('https://sim-matrix.streamlit.app/')}
                        class='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
                        Get started
                    </button>
                    <button id="toggleOpen" class='lg:hidden'>
                        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        // {/* </div> */}

    );
}

export default Header
// <div className=' '>
//     {/* <nav class="fixed bg-black w-full z-20 top-0 border-b border-black" >
//         <div class="indent-0 ml-auto mr-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4 order-first"> */}
//     <nav class="bg-black fixed w-full z-20 top-0 start-0 border-b border-black">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <a href="" class="flex items-center space-x-3 ">
//                 <FontAwesomeIcon icon={faHexagonNodesBolt} size="2xl" style={{ color: "#B197FC", }} />
//                 <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SimMatrix</span>
//             </a>

//             <div class="flex flex-wrap items-center order-last">
//                 <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Get started
//                 </button>
//             </div>
//             <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//             </div>
//         </div>
//     </nav>
// </div>



