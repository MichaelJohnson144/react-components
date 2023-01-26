import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'primary',
      disabled = false,
      name,
      onClick,
      size = 'medium',
      type,
      value,
      ...rest
    },
    ref,
  ) => {
    const classNames = cn(
      'flex justify-start items-center py-3 px-4 text-sm font-bold tracking-wider rounded transition-all ease-in-out duration-[250ms]',
      {
        'text-inherit bg-inherit': color === 'inherit',
        'hover:bg-[#1565C0] bg-[#1976D2]': color === 'primary',
        'hover:bg-[#7B1FA2] bg-[#9C27B0]': color === 'secondary',
        'hover:bg-[#1B5E20] bg-[#2E7D32]': color === 'success',
        'hover:bg-[#B71C1C] bg-[#D32F2F]': color === 'error',
        'hover:bg-[#00B8D4] bg-[#0DCAF0]': color === 'info',
        'hover:bg-[#FFB300] bg-[#FFC107]': color === 'warning',
        'hover:bg-[#EEEEEE] text-[#BDBDBD] bg-[#EEEEEE] cursor-auto pointer-events-auto':
          disabled,
        'py-1 px-2.5 text-[0.813rem]': size === 'small',
        'py-1.5 px-4 text-sm': size === 'medium',
        'py-[8px] px-[22px] text-[0.938rem] py-[8px] px-[22px] text-[0.938rem]':
          size === 'large',
      },
    );

    return (
      <button
        className={classNames}
        disabled={disabled}
        name={name}
        onClick={onClick}
        ref={ref}
        type={type}
        value={value}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default Button;
