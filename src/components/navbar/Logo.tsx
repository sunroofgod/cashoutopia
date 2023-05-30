'use client';

import { useRouter } from "next/navigation";
import { GiTwoCoins } from "react-icons/gi";

const Logo = () => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')} className="flex flex-auto gap-1 pr-2 cursor-pointer">
        <div className="
            flex
            flex-row
            items-center
            font-bold
            text-lg
            gap-2
        ">
            <GiTwoCoins size={18} />
            Cashoutopia
        </div>
        </div>
    )
}

export default Logo;