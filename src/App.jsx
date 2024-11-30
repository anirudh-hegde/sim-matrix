import React from 'react';
import './App.css';
// import Home from './components/Home';
import Header from './components/Header';
import Body from './components/Body';
import Articles from './components/Articles';
import Footer from './components/Footer';
import heroBackground from './assets/Images/hero-background.jpg';
function App() {

  const styles = {
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (

    <main className='h-full w-screen text-white' style={styles}>
      <Header />
      <div className='w-full xl:max-w-[1250px] mx-auto px-6'>
        <Body />
        <Articles />
        {/* <footer className='my-8'> */}
        <Footer />
        {/* </footer> */}

      </div>
    </main>
  );
}
export default App;
