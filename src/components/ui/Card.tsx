'use client';

interface CardProps {
    title: string
    subtitle?: string
    children?: React.ReactNode
}

export function Card ({
    title,
    subtitle,
    children,
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
            <div>
            <h1 className="text-7xl font-bold pb-4">{title}</h1>
            {subtitle && <p className="text-xl font-normal opacity-50">{subtitle}</p>}
            <br></br>
            {children}
            </div>
        </div>
    )
}