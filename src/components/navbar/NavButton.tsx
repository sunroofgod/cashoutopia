'use client';

interface NavButtonProps {
    label: string;
}

export function NavButton({
    label,
}: NavButtonProps) {
    return (
        <button className="
            flex
            flex-row
            items-center
            opacity-50
            hover:opacity-80
            transition
        ">
        {label}
        </button>
    )
}