import Link from "next/link"

const Footer:React.FC = () =>{
    return (
        <footer className='w-[80%] py-6 flex justify-between items-center bg-black'>
            <div className='flex gap-8 justify-start items-center'>
            <small className='text-white'>© Creon 2023. All rights reserved.</small>

             <div className='flex gap-4'>
             <Link className='border-2 border-white rounded-full w-[30px] h-[30px] flex justify-center items-center' href={''}>
                 <img src="/email.svg" alt=""/>
                </Link>
                <Link className='border-2 border-white rounded-full w-[30px] h-[30px] flex justify-center items-center' href={''}>
                 <img src="/twitter.svg" alt=""/>
                </Link>
                <Link className='border-2 border-white rounded-full w-[30px] h-[30px] flex justify-center items-center' href={''}>
                 <img src="/discord.svg" alt=""/>
                </Link>
             </div>
            </div>

            <p className='text-white'>Powered by <span className="font-bold">GIGACHAD</span></p>
        </footer>
    )
}

export default Footer