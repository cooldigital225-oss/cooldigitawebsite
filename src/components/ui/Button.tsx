import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'whatsapp' | 'primary' | 'secondary' | 'outline' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const variants = {
    whatsapp: "bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-sm hover:shadow-md focus:ring-[#22C55E]",
    primary: "bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-sm hover:shadow-md focus:ring-[#0F172A]",
    secondary: "bg-[#475569] hover:bg-[#334155] text-white focus:ring-[#475569]",
    outline: "border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#0F172A] focus:ring-[#0F172A]",
    emergency: "bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-sm hover:shadow-md focus:ring-[#EA580C]"
  };

  const sizes = {
    sm: "text-xs px-3 py-2 min-h-[36px]",
    md: "text-sm px-5 py-3 min-h-[44px]",
    lg: "text-base px-6 py-3.5 min-h-[48px]"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2.5 inline-flex items-center shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2.5 inline-flex items-center shrink-0">{icon}</span>}
    </button>
  );
};
