'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { GiUsable } from "react-icons/gi";

const Logo = () => {
    const router = useRouter();

    return (
        <div className="flex flex-auto gap-1 pr-2">
        {/* <Image
            onClick={() => router.push('/')}
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="30"
            width="30"
            src="/images/logo2.png"
        /> */}
        <div className="
            flex
            flex-row
            items-center
            font-bold
            text-lg
            gap-1
        ">
            <GiUsable size={18} />
            Cashoutopia
        </div>
        </div>
    )
}

export default Logo;