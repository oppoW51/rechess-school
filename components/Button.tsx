import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Adjusted for Dark Mode
  const variants = {
    // Primary: White background, Black text (High Contrast)
    primary: "bg-white text-gray-950 hover:bg-gray-200 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:ring-white",
    // Secondary: Dark Gray background, White text
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600",
    // Outline: Transparent with border
    outline: "bg-transparent border border-gray-600 text-gray-200 hover:border-white hover:text-white focus:ring-white"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;