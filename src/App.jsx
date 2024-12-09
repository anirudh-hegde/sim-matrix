import React from 'react'
import './App.css'
// import Home from './components/Home';
import Header from './components/Header'
import Body from './components/Body'
import Articles from './components/Articles'
import Footer from './components/Footer'
import heroBackground from '/assets/hero-background.jpg'
import heroVideo from '/assets/heroBg.mp4'
function App () {
  const styles = {
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <main className='w-screen h-full text-white main-anima' style={styles}>
    {/* <main className='relative w-screen h-full text-white main-anima'> */}
      {/* <video
        autoPlay
        loop
        muted
        className='top-0 left-0 -z-10 absolute w-full h-full object-cover'
      >
        <source src={heroVideo} type='video/mp4' />
      </video> */}
      <Header />
      <div className='mx-auto px-6 w-full xl:max-w-[1250px]'>
        <Body />
        <Articles />
        {/* <footer className='my-8'> */}
        <Footer />
        {/* </footer> */}
      </div>
    </main>
  )
}
export default App
