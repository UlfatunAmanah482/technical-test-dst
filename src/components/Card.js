import React from 'react'

export const Card = ({ name, srcImg, handleDetail, id }) => {
  return (
    <div className='flex flex-col items-center justify-center shadow-card rounded-[19px] md:w-[257px] w-full md:h-[352px] h-full p-5 md:max-h-[352px] max-h-[250px] cursor-pointer' onClick={handleDetail} id={id}>
      <p className='text-[23px]'>#001</p>
      <div>
        <img src={srcImg} alt="contoh" />
      </div>
      <p className='text-body text-[23px] font-semibold text-center'>{name}</p>
      <div className='flex items-center justify-center gap-5'>
        <div className='bg-[#8BC34A] px-3 py-2 rounded-md text-white'>Grass</div>
        <div className='bg-[#AA22B0] px-3 py-2 rounded-md text-white'>Poison</div>
      </div>
    </div>
  )
}
