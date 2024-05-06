import { featuresScreenText } from "../../../../constants"
import Card from "../Card"

const FeaturesScreen:React.FC = ()=>{
    return (
        <div className='flex justify-center items-center py-10 gap-8 w-full bg-black'>
            {
                featuresScreenText.map((item,index)=><Card key={index} subtitle={item.p} title={item.title} content={item.sm} image={item.img}/>)
            }
        </div>
    )
}

export default FeaturesScreen