import { HCard } from "../Card"
import { marketScreenText } from "../../../../constants"


const MarketScreen:React.FC = () =>{
    return (
        <div className='flex w-full py-16 white flex-col justify-center bg-black items-center gap-6'>
            {
                marketScreenText.map((item,index)=><HCard key={index} title={item.title} content={item.sm} image={item.img}/>)
            }
        </div>
    )
}

export default MarketScreen;