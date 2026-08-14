import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'navy' | 'orange' | 'blue';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'navy',
  className = '',
  icon
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase";

  const variants = {
    green: "bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]",
    navy: "bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]",
    orange: "bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA]",
    blue: "bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
