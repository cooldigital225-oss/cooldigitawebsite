import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true
}) => {
  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#CBD5E1]"
    : "";

  return (
    <div
      className={`bg-white rounded-xl border border-[#E2E8F0] shadow-xs p-6 md:p-8 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
