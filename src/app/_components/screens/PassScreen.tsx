import { passScreenText } from "../../../../constants"

const PassScreen:React.FC = ()=>{
    return (<div className='w-[100vw] min-h-[100vh] flex justify-center items-center bg-black '>
        <div className='flex justify-center items-center w-full py-[130px]'>
        <div className="flex flex-col justify-start items-start w-[44%]">
            <h1 className="text-2xl font-semibold text-white">{passScreenText.h1}</h1>
            <div></div>
            <p>{passScreenText.p}</p>
            {
                passScreenText.list.map((item,index)=><div key={index} className='border-[1px] border-gray-50 rounded-md text-gray-50'>
                    <p>{item}</p>
                </div>)
            }
            <button>
                {passScreenText.button}
            </button>
        </div>
        <video autoPlay muted loop className="w-[44%]">
        <source src={passScreenText.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
    </div>)
}

export default PassScreen