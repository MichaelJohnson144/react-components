import React, { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  label?: string;
  state?: 'default' | 'error';
  theme?: 'dark' | 'light';
  type?:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      color = 'primary',
      disabled = false,
      label,
      name,
      onChange,
      placeholder,
      required = false,
      size = 20,
      state = 'default',
      theme = 'dark',
      type = 'text',
      value,
      ...rest
    },
    ref,
  ) => {
    const baseClass = cn(
      'flex justify-start items-center py-3 px-4 font-bebas-neue text-xl font-bold tracking-widest rounded',
      {
        'text-slate-700 cursor-auto pointer-events-auto': disabled,
        'text-[#D32F2F]': state === 'error' && !disabled,
      },
      {
        'text-zinc-700': theme === 'dark',
        'text-white': theme === 'light',
      },
    );
    const inputClass = cn('dark:text-white ml-4 text-base text-black border-2 rounded', {
      'focus:outline-none focus:border-inherit focus:ring-1 focus:ring-inherit border-2 border-inherit text-inherit':
        color === 'inherit',
      'focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] border-2 border-[#1976D2]':
        color === 'primary',
      'focus:outline-none focus:border-[#7B1FA2] focus:ring-1 focus:ring-[#7B1FA2] border-2 border-[#9C27B0]':
        color === 'secondary',
      'focus:outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] border-2 border-[#2E7D32]':
        color === 'success',
      'focus:outline-none focus:border-[#B71C1C] focus:ring-1 focus:ring-[#B71C1C] border-2 border-[#D32F2F]':
        color === 'error',
      'focus:outline-none focus:border-[#00B8D4] focus:ring-1 focus:ring-[#00B8D4] border-2 border-[#0DCAF0]':
        color === 'info',
      'focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300] border-2 border-[#FFC107]':
        color === 'warning',
      'focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] border-2 border-[#D32F2F]':
        state === 'error' && !disabled,
      'p-1': size === 10,
      'p-3': size === 20,
      'p-5': size === 40,
    });

    return (
      <label className={baseClass}>
        {label}
        <input
          className={inputClass}
          aria-label={typeof label === 'string' ? label : ''}
          disabled={disabled}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          required={required}
          type={type}
          value={value}
          {...rest}
        />
      </label>
    );
  },
);

export default Input;
