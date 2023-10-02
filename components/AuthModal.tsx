"use client"

import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

import { Modal } from "./Modal"
import { useEffect } from "react";


export default function AuthModal() {

const supabaseClient = useSupabaseClient();
const router = useRouter();
const {session} = useSessionContext();
const {isOpen, onClose} = useAuthModal();

useEffect(()=>{

  if(session){
    router.refresh();
    onClose()
  }

},[session, router, onClose])

const onChange =(open: boolean)=>{
if(!open){
  onClose()
}
}


  return (
    <div>
      <Modal
      title="Welcome Back!"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
      >
        <Auth
        theme="dark"
        providers={["github"]}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme:ThemeSupa,
          variables:{
            default:{
              colors:{
                 brand:'#404040',
                 brandAccent:'#770000'
              }
            }
          }
        }} />
      </Modal>
    </div>
  )
}
