'use client';

interface SideBySideButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function SideBySideButton({
    label,
    onClick,
}: SideBySideButtonProps) {
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