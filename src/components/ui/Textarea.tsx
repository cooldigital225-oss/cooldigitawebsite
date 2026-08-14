import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  rows = 4,
  ...props
}) => {
  const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-xs font-semibold text-[#0F172A] tracking-wider uppercase">
        {label} {required && <span className="text-[#DC2626]">*</span>}
      </label>
      <textarea
        id={inputId}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 bg-white border ${
          error ? 'border-[#DC2626] focus:ring-[#DC2626]' : 'border-[#CBD5E1] focus:ring-[#0F172A]'
        } rounded-lg text-[#0F172A] text-sm placeholder-[#94A3B8] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 resize-y ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-[#DC2626] mt-0.5">{error}</p>}
      {helperText && !error && <p className="text-xs text-[#64748B] mt-0.5">{helperText}</p>}
    </div>
  );
};
