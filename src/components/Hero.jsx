import React from 'react';
import Navbar from './Navbar'; 
import Background from '../assets/background.png'; 
import Darlings from '../assets/Darlings.png'
import Ameica from '../assets/images/ameica.png'
import Reasons from '../assets/images/reasons.png'
import Mine from '../assets/images/mine.png'
import IoLast from '../assets/images/iolast.png'
import Enola from '../assets/images/enola.png'
import Fear from '../assets/images/fear.png'
import Lovebirds from '../assets/images/lovebirds.png'
import Riverdale from '../assets/images/riverdale.png'


const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-white text-4xl font-bold mb-4 "><img src={Darlings } alt="/"  /></div>
        <div>   
        <button className='bg-white text-black my-2 px-4 rounded-sm font-bold p-1'>▶ Play</button>
        <button className='bg-gray-400 text-white mx-5 rounded-sm px-4 font-bold p-1'>More Info</button>
        </div>

        <div className='flex my-10 absolute  bottom-0 mx-2'>
       
       <img src={Reasons} alt="/"className='mr-4  bottom-0' />
       <img src={IoLast} alt="/" className='mr-4  bottom-0'/>
       <img src={Fear} alt="/" className='mr-4  bottom-0'/>
       <img src={Enola} alt="/"className='mr-4  bottom-0' />
       <img src={Ameica} alt="/" className='mr-4  bottom-0'/>
       <img src={Mine} alt="/" className='mr-4  bottom-0'/>
       <img src={Riverdale} alt="/" className='mr-4  bottom-0'/>
       <img src={Lovebirds} alt="/" className='mr-4  bottom-0'/>
      
        
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
