import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ 
    children,
    className
   }) => {
    return ( 
      <div 
        className={twMerge(
          `backdrop-blur
          border-white
          border-[2px] 
          shadow-white
          shadow-md
          rounded-md 
          h-fit 
          w-full
          `, 
          className
        )}>
        {children}
      </div>
    );
  }
   
  export default Box;
