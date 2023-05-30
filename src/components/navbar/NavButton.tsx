'use client';

interface NavButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NavButton({
    label,
    onClick,
}: NavButtonProps) {
    return (
        <button 
        onClick={onClick}
        className="
            flex
            flex-row
            items-center
            opacity-50
            hover:opacity-80
            transition
            text-base
        ">
        {label}
        </button>
    )
}