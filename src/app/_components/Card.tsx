import ui from '../../styles/ui.module.css'
interface props{    
    title:string;
    subtitle:string;
    image:string;
    content:string;
}

const Card:React.FC<props> = ({subtitle, title, image, content}) =>{
    return (
        <div className={`w-[320px] relative rounded-sm h-[460px]  flex flex-col gap-2 py-4 shadow-sm bg-[#13171D]/60`}>
            <p className='text-white font-bold px-4'>{title}</p>
            <small className={`font-bold ${ui.gradientText} px-4`}>{subtitle}</small>
            <img src={`${image}`} alt={title} className='w-[100%]  object-cover '/>
            <small className='text-white px-4'>{content}</small>
            <small className='bg-white text-black rounded-full absolute -top-2 right-4 text-[8px] px-[2px] py-[1px]'>COMING SOON</small>
        </div>
    )
}

interface hprops {
    image:string;
    title:string;
    content:string

}
export const HCard:React.FC<hprops> = ({image, title, content})=>{
    return (
        <div className='w-[80%] flex justify-between items-start rounded-sm shadow-sm bg-[#13171D]/60 h-[180px]'>
            <div className=' h-full flex flex-col justify-center items-start gap-2 px-4'>
                <p className='text-white font-bold'>{title}</p>
                <small className='text-white'>{content}</small>
                </div>
            <div className='relative w-[350px]'>
                <img src={image} alt="" className=' w-[100%]  object-cover '/>
                <div className={`${ui.cardOverlay} z-50`}></div>
            </div>
        </div>
    )
}


export default Card