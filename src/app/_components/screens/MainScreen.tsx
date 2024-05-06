import Header from "../Header"
import ui from '../../../styles/ui.module.css'
import { mainScreenText } from "../../../../constants" 

const MainScreen:React.FC = ()=>{
    return <section className='w-[100vw] flex justify-start items-center flex-col h-[100vh]  -z-0 overflow-hidden bg-black'>
        <Header/>
        <video autoPlay muted loop className="w-[100vw] h-[100vh] object-cover  absolute top-0 left-0 z-10">
        <source src="/videos/main-background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`w-[100vw] z-20 h-[100vh] absolute top-0 left-0 ${ui.gradientBg} flex justify-start items-end`}>
      </div>
        <div className="absolute z-20 left-[15%] top-[50%] -translate-y-[50%] lg:-translate-y-[0%] lg:top-[60%] flex flex-col justify-start items-start gap-6   ">
            <h1 className='text-[58px]  font-bold text-white leading-[60px] pr-16'>{mainScreenText.h1.toUpperCase ()}</h1>
            <p className={`text-[16px] font-bold ${ui.gradientText} ${ui.gradientBorder}`}>{mainScreenText.p}</p>
        </div>
    </section>
}

export default MainScreen