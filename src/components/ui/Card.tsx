'use client';

interface CardProps {
    children?: React.ReactNode
    title: string
    subtitle?: string
}

export function Card({
    children,
    title,
    subtitle,
}: CardProps) {
    return (
        <div className="
            min-h-[80vh]
            max-w-[2520px]
            mx-auto 
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            text-center
            flex
            justify-center
            items-center 
        ">
            <div className="

            ">
            <h1 className="text-6xl font-bold pb-4">{title}</h1>
            {subtitle && <p className="text-xl font-normal opacity-50">{subtitle}</p>}
            {children}
            </div>
        </div>
    )
}