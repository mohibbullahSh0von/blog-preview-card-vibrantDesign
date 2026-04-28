import React from 'react'



function PreviewCard({heroImg, status, date, title, description, avatar, author}) {
  return (

    <article className='border border-black bg-white flex flex-col justify-start items-start gap-3 p-4 max-w-[90%] rounded-2xl mobile:max-w-[375px] shadow-[8px_8px_0_rgba(1,1,1,1)] hover:scale-105 hover:shadow-[24px_24px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out active:scale-95 active:shadow-[4px_4px_0_rgba(1,1,1,1)] cursor-pointer'>
        <div className='rounded-xl overflow-hidden'>
            <img src={heroImg} alt="" />
        </div>
        <div className='px-2 py-1 mt-4 text-small font-bold bg-light-yellow rounded '>{status}</div>
        <p className='text-small'>
            Published {date}
        </p>
        <h2 className='text-h2 font-bold'>{title}</h2>
        <p className='text-medium text-light-gray'>{description}</p>
        <div className='profile mt-4 flex flex-row justify-start items-center gap-4' >
            <div className='w-8'>
                <img className='w-full' src={avatar} alt="" />
            </div>
            <p className='font-bold '>
                {author}
            </p>
        </div>
    </article>
  )
}

export default PreviewCard