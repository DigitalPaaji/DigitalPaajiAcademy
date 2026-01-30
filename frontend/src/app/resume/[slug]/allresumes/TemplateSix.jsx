"use client"
import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail } from 'react-icons/md';

const TemplateSix = ({resumeData}) => {
  return (
    <div className='bg-white max-w-4xl mx-auto border-gray-700/60 px-10 py-8 border my-7'>

<div className='flex items-center flex-col border-b border-gray-700/60 gap-2 pb-3'>
<b className='uppercase text-3xl'>{resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}</b>
<p className='text- capitalize'>{resumeData.personalInfo.title}</p>
<div className='w-full flex justify-between text-gray-800/80'>
    {resumeData.personalInfo?.phone && 
<Link href={`tel:${resumeData.personalInfo.phone}`} className='flex gap-2 items-center'>
<FaPhoneAlt />
<p>{resumeData.personalInfo.phone}</p>
</Link>
}

    {resumeData.personalInfo?.email && 
<Link href={`mailto:${resumeData.personalInfo.email}`} className='flex gap-2 items-center'>
<MdOutlineAttachEmail  />
<p>{resumeData.personalInfo.email}</p>
</Link>
}


 <div className='flex gap-2 items-center '>
<MdLocationOn />
<p>{resumeData.personalInfo?.city ? `${resumeData.personalInfo?.city},` :""}</p> 
<p>{resumeData.personalInfo?.country}</p> 

 </div>

</div>

</div>



{resumeData?.summary && <div className='border-b border-gray-700/60 my-10'>
<b className='uppercase'>About Me</b>
<div className='my-2 text-black/80 ' dangerouslySetInnerHTML={{__html:resumeData?.summary}}>
</div>
</div>
}


<div className='border-b border-gray-700/60 my-10'>
<b className='uppercase'>Work Experience</b>

{resumeData.experience.map((item,index)=>{
    return(
        <div key={index} className='my-5 flex flex-col gap-1'>
<div className='flex gap-1 items-center text-black/80'>
    <p>{item.company}</p> | <p>{item.starting_month}   {item.ending_month}</p>
   

</div>
 <b className='capitalize'>{item.title}</b>
 <p className=' text-black/80'>{item.description}</p>
            </div>
    )
})

}


</div>

<div className='border-b border-gray-700/60 my-10'>
<b className='uppercase'>Education</b>

{resumeData.education.map((item,index)=>{
    return(
        <div key={index} className='my-5 flex flex-col gap-1'>
             <b className='capitalize'>{item.degree}</b>
<div className='flex gap-1 items-center text-black/80'>

    <p>{item.school}</p> | <p>{item.year}</p>
   

</div>

 <p className=' text-black/80'>{item.honors} - {item.location}</p>
            </div>
    )
})

}


</div>


<div className=' my-10'>
<b className='uppercase font-bold'>Skills</b>
<div>
    <p className='font-black my-1 '>Technical </p>
<ul className='grid grid-cols-4 ms-10 list-disc gap-1 text-black/80' >

{resumeData.skills.technical.map((item,index)=>
    <li key={index} >

{item}
        </li>)}
</ul>

</div>
<div>
        <p className='font-black my-1 '>Professional </p>
<ul className='grid grid-cols-4 ms-10 gap-1 list-[square] text-black/80' >
{resumeData.skills.professional.map((item,index)=>
    <li key={index} >

{item}
        </li>)}
</ul>
</div>
</div>

<div className='border-b border-gray-700/60 my-10'>

{resumeData.other?.map((item,index)=>{
    return(
        <div key={index} className='my-5 flex flex-col gap-1'>
             <b className='capitalize'>{item?.heading}</b>
<div className='flex gap-1 items-center text-black/80'>

    <p>{item?.des}</p> 
   

</div>


   <ul className="flex flex-wrap gap-2 list-disc text-black/80 ">
        {item?.list.map((itm, ind) => (
          <li
            key={ind}
            className="inline-flex items-center rounded-full
                       px-3 py-1
                       text-xs font-medium
                      
                       transition-colors"
          >
            {itm}
          </li>
        ))}
      </ul>
 

            </div>
    )
})

}


</div>


    </div>
  )
}

export default TemplateSix