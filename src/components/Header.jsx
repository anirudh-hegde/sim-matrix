import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import simmatrix from '/assets/sim-matrix.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHexagonNodesBolt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    // <div className="flex items-center bg-black w-screen h-[4rem] text-white" >
    // <header className='top-0 left-0 z-50 fixed bg-gray-950 shadow-md px-4 sm:px-10 py-4 w-full min-h-[70px] font-[sans-serif] tracking-wide'>
    <header class='relative z-50 flex border-[0.01em] border-gray-600 bg-gray-950 shadow-md px-4 sm:px-10 py-4 border-solid min-h-[70px] font-[sans-serif] tracking-wide'>
      <div class='flex flex-wrap justify-between items-center gap-5 w-full'>
        <a href='javascript:void(0)'>
          <img src={simmatrix} alt='logo' class='w-36' />
        </a>
        <div
          id='collapseMenu'
          class='lg:!block max-lg:before:z-50 max-lg:before:fixed max-lg:before:inset-0 max-lg:hidden max-lg:before:bg-black max-lg:before:opacity-50'
        >
          <button
            id='toggleClose'
            class='top-2 right-4 z-[100] fixed flex justify-center items-center lg:hidden bg-white border rounded-full w-9 h-9'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-3.5 h-3.5 fill-black'
              viewBox='0 0 320.591 320.591'
            >
              <path
                d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                data-original='#000000'
              ></path>
              <path
                d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                data-original='#000000'
              ></path>
            </svg>
          </button>
        </div>
        <div class='flex space-x-4 max-lg:ml-auto'>
          <button
            onClick={() => window.open('https://sim-matrix.streamlit.app/')}
            class='border-[#007bff] border-2 bg-[#007bff] hover:bg-transparent px-4 py-2 rounded-tr-lg rounded-bl-lg font-bold text-sm text-white hover:text-[#007bff] transition-all duration-300 ease-in-out'
          >
            Get started
          </button>
          <button id='toggleOpen' class='lg:hidden'>
            <svg
              class='w-7 h-7'
              fill='#000'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    // {/* </div> */}
  );
}

export default Header;;