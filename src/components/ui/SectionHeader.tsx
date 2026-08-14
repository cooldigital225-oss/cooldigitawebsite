import React from 'react';

export interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: 'green' | 'navy' | 'orange' | 'blue';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'navy',
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignment} ${className}`}>
      {badgeText && (
        <div className="mb-4 inline-block">
          <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${
            badgeVariant === 'green' ? 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]' :
            badgeVariant === 'orange' ? 'bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]' :
            badgeVariant === 'blue' ? 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]' :
            'bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0]'
          }`}>
            {badgeText}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
