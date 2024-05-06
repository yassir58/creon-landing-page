import { dropScreenText } from "../../../../constants"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ui from  '../../../styles/ui.module.css'

  
  interface faqProps {
    title:string;
    content:string;
  } 

  const FaqItem:React.FC<faqProps> = ({title, content})=>{
    return (
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1" className='min-w-[400px] max-w-[400px] border-none'>
    <AccordionTrigger className='text-white'>{title}</AccordionTrigger>
    <AccordionContent className="text-[#46505F]">
      {content}
    </AccordionContent>
  </AccordionItem>
</Accordion>

    );
  }
const FaqScreen:React.FC = () =>{
    return (
        <div className='min-h-[100vh] flex justify-center items-center w-full bg-black'>
            <div className='w-[80%] flex justify-center items-start'>   
            <h1 className='text-4xl text-white font-bold'>{dropScreenText.h1}
            <span className={`${ui.gradientText}`}>{dropScreenText.h2}</span>
            </h1>
            <div className='flex flex-col gap-2 justify-start items-start'>
                {
                    dropScreenText.features.map((item,index)=><FaqItem key={index} title={item.title} content={item.content}/>)
                }
            </div>
            </div>
        </div>
    )
}

export default FaqScreen