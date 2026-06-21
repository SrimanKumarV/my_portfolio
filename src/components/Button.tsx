import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-accent text-background hover:bg-[#00F2FE]/90 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-white/20 text-white hover:border-accent hover:text-accent bg-transparent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
