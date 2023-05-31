'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export function Button ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
}: ButtonProps) {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-36 
        h-12 
        font-normal
        align-top
        ${outline ? '' : 'bg-slate-900'}
        ${outline ? 'border-black' : 'border-slate-900'}
        ${outline ? 'border-2': 'border-2'}
        ${outline ? 'text-slate-900' : 'text-white'}
        ${small ? 'text-sm' : 'text-base'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-normal'}
        ${small ? 'border-[1px]' : ''}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
   );
}