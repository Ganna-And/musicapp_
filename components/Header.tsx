"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CiSearch, CiHome, CiLogin, CiLogout, CiUser } from "react-icons/ci";
import {PiSkipBackThin, PiSkipForwardLight} from "react-icons/pi"
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUse } from "@/hooks/useUser";
import toast from "react-hot-toast";

import AuthBtn from "./AuthBtn";
import useAuthModal from "@/hooks/useAuthModal";




interface HeaderProps {
    children:React.ReactNode;
    className?: string;
};

const Header:React.FC<HeaderProps> = ({children, className}) => {
  
  const authModal = useAuthModal()
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const {user} = useUse();

    const handleLogOut = async ()=> {
        const { error} = await supabaseClient.auth.signOut();
//reset any playing songs in the future
        router.refresh();

        if(error){
          toast.error(error.message)
        }else{
          toast.success('Logged out!')
        }
    }


    return (
    <div
        className={twMerge(`
          h-fit 
          w-full
          bg-gradient-to-b 
          from-red-50 
          p-4
          `,
          className
        )}>
            <div className="flex justify-between items-center ">
         <div className="w-full mb-4  items-center justify-between hidden md:flex md:visible">
         <div className="hidden md:flex gap-x-2 items-center">
         <button 
            onClick={() => router.back()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:bg-red-900 
              transition
            "
          ><PiSkipBackThin className="text-white" size={35} /></button> 
          <button 
            onClick={() => router.forward()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:bg-red-900 
              transition
            "
          >
            <PiSkipForwardLight className="text-white" size={35} />
          </button> 
          </div>
         </div>
         <div className="flex md:hidden gap-x-2 items-center justify-between">
         <button 
            onClick={() => router.push('/')} 
            className="
              rounded-full 
              p-2 
              bg-black
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:bg-red-900
              transition
            "
          ><CiHome className="text-white" size={20} />
          </button>
          <button 
            onClick={() => router.push('/search')} 
            className="
              rounded-full 
              p-2 
              bg-black
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:bg-red-900
              transition
            "
          > <CiSearch className="text-white" size={20} />
          </button>
        
 </div>
      
        {user ? (
          <div
          className="flex gap-x-4 items-center"
          ><AuthBtn
          onClick={handleLogOut}
          className="text-black"
          >
            Logout
          <CiLogout className='ml-1'  size={20}/>
          </AuthBtn>
          <button onClick={()=> router.push('/account')}
          className=" 
          rounded-full 
          p-2 
          bg-red-900
          flex 
          items-center 
          justify-center 
          cursor-pointer 
          hover:bg-black
          transition">
            <CiUser size={20}/>
          </button>

          </div>
        ): (
          <div><AuthBtn onClick={authModal.onOpen} >
            LogIn<CiLogin />
          </AuthBtn></div>
         
        
        )}
         </div> 
         {children}
    </div>)
}
export default Header;




