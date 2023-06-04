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
        disabled:opacity-40
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-36 
        h-12 
        ${outline ? '' : 'bg-slate-600'}
        ${outline ? 'border-black' : ''}
        ${outline ? 'border-2': ''}
        ${outline ? 'text-slate-900' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-medium'}
        ${small ? 'border-[1px]' : 'shadow-md'}
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