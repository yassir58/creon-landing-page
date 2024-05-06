import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"


const Header:React.FC = ()=>{
    return (<header className="w-[95%] absolute top-0 left-[50%] -translate-x-[50%] flex justify-between items-center py-4 bg-transparent z-30">
        <Image src='/Logo.png' alt='logo' width={100} height={100}/>

        <nav className=' justify-center items-center gap-6 md:flex hidden'>
            <Link className='text-[12px] text-white font-semibold hover:text-[#3D8BFF] cursor-pointer' href=''>Creon Pass</Link>
            <Link className='text-[12px] text-white font-bold cursor-default' href=''>Token
            <Badge className='text-[7px] px-[3px] text-[#AB23FF] bg-black rounded-full py-[2px] -translate-y-1 translate-x-1'>
                SOON
            </Badge>
            </Link>
            <Link className='text-[12px] text-white font-bold cursor-default' href=''>AI Revenue
            <Badge className='text-[7px] px-[3px] text-[#AB23FF] bg-black rounded-full py-[2px] -translate-y-1 translate-x-1'>
                SOON
            </Badge>
            </Link>
            <Link className='text-[12px] text-white font-bold cursor-default' href=''>AI Launchpad
            <Badge className='text-[7px] px-[3px] text-[#AB23FF] bg-black rounded-full py-[2px] -translate-y-1 translate-x-1'>
                SOON
            </Badge>
            </Link>
            <button className='text-white text-[14px] border-[1px] border-white rounded-md bg-transparent px-4  ease-in duration-200 hover:bg-[#3D8BFF] font-semibold py-[4px] cursor-pointer hover:border-[#3D8BFF]' >
        Connect
            </button>
        </nav>
    </header>)
}


export default Header