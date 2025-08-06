import React from 'react'
interface Card{
   img:string,
   Header:string,
   Description:string,
}


function Benefits() {
   const Cards: Card[] = [
  {
    img: '/handmade.png',
    Header: "Handcrafted Surfboards",
    Description: "Each Waves board is shaped by skilled artisans, delivering a perfect blend of tradition and performance."
  },
  {
    img: '/friendly.png',
    Header: "Eco-Friendly Materials",
    Description: "We use sustainable foam and bio-resins to ensure your ride is both smooth and responsible."
  },
  {
    img: '/custom.png',
    Header: "Custom Designs",
    Description: "Get your board personalized with colors, shapes, and artwork that reflect your unique surfing style."
  },
  {
    img: '/test.png',
    Header: "Tested by Pros",
    Description: "Our surfboards are tested by seasoned professionals across varied wave conditions to ensure reliability."
  },
  {
    img: '/shipping.jpg',
    Header: "Shipped Worldwide",
    Description: "Whether you're in Hawaii or Hossegor, we ship our premium boards straight to your doorstep."
  }
];

  return (
    <div className='w-full mx-auto'>
        <div className='text-sm text-neutral-200'>
            Benefits
        </div>
        <div className='text-black text-lg'>
            We've Cracked the code.
        </div>
        <div className='text-[20px] text-neutral-500'>
            Waves makes worldclass boards 
        </div>
        <div>
            <div  className='border border-white/20'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
            {Cards.map((card,idx)=>{
                return(
                    <div key={idx}>
                       <img src={card.img} alt="img" />
                       <h1>{card.Header}</h1>
                       <p>{card.Description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Benefits