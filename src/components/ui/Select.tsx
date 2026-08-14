import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  helperText,
  id,
  className = '',
  required,
  ...props
}) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-xs font-semibold text-[#0F172A] tracking-wider uppercase">
        {label} {required && <span className="text-[#DC2626]">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        className={`w-full px-4 py-3 bg-white border ${
          error ? 'border-[#DC2626] focus:ring-[#DC2626]' : 'border-[#CBD5E1] focus:ring-[#0F172A]'
        } rounded-lg text-[#0F172A] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[#DC2626] mt-0.5">{error}</p>}
      {helperText && !error && <p className="text-xs text-[#64748B] mt-0.5">{helperText}</p>}
    </div>
  );
};
