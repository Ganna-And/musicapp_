'use client'
import Lottie from 'lottie-react';
import animationData from '../assets/ReyzR4lNK0.json'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import {PiPlay} from 'react-icons/pi';



interface PlaylistProps {
   image: string 
   name:string
   href:string
};

const Playlist:React.FC<PlaylistProps> = ({image, name, href}) => {

    const onClick = ()=>{
        //on click function open data
    }
    
    return(  
        <button
        onClick={onClick}
        className="
          relative 
          group 
          flex 
          items-center 
          rounded-md 
          overflow-hidden 
          gap-x-4 
          cursor-pointer 
          hover:bg-neutral-100/20 
          transition 
          pr-4
        ">
             <div className="relative min-h-[64px] min-w-[64px]">
      <Image
      src={image}
      fill
      alt='favorite' />
      </div>
      <p className='bold uppercase'>{name}</p>
      <div
      className='absolute right-7 bg-red-900 p-2 rounded-full opacity-0 group-hover:opacity-100'>
      <PiPlay />
      </div>
        </button>
      )
}
export default Playlist;

//div with faplay
//after header another 2 div an h1
//another div of list of songs 
