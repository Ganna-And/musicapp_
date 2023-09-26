import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";




export interface AuthBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AuthBtn = forwardRef<HTMLButtonElement, AuthBtnProps>(({className,children,disabled, type='button', ...props},ref)=>{
    return( <button
        type={type}
        className={twMerge(
          `
          flex
          items-center
          w-full  
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-black
          font-bold
          text-xl
          hover: link
          transition
        `,
          disabled && 'opacity-75 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>) 
})

AuthBtn.displayName = 'AuthenticationButton';
export default AuthBtn;