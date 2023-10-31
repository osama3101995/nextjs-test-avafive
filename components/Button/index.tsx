import React, { ReactNode } from "react";

const Button = ({ className = "", type, children }: { className? : string, type? : string, children: ReactNode }) => {

  let buttonClasses = 'bg-[--md-blue]'

  if(type === "outline") {
    buttonClasses = 'border-2 border-solid border-[--md-blue]'
  }

  buttonClasses += " "+className
  

  return (
    <button className={`${buttonClasses} py-3 px-4  min-w-[11.25rem] rounded-lg mt-3 font-medium flex items-center justify-center`}>
      {children}
    </button>
  );
};

export default Button;
