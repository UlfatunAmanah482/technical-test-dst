import React from 'react'

export const Navbar = ({ detail }) => {
  return (
    <div className='bg-body w-full md:h-[124px] h-[60px] flex items-center justify-between'>
      {
        detail ? (
          <div className='flex items-center justify-center mx-[4%]'>
            <img src="/images/vector.svg" alt="vector" />
            <span className='text-white mx-3'>Detail Pokemon</span>
          </div>
        ) : (
          <div className='mx-[4%] md:w-[163px] w-[86px] md:h-[60px] h-[32px]'>
            <img src="/images/logo.svg" alt="logo" />
          </div>
        )
      }
      <div className='mx-[4%]'>
        {
          detail ? (
            <img src="https://img.icons8.com/external-neu-royyan-wijaya/32/000000/external-more-neu-development-neu-royyan-wijaya.png" alt="more-icon"/>
          ) : (
            <img src="https://img.icons8.com/android/24/000000/plus.png" alt="icons-plus"/>
          )
        }
      </div>
    </div>
  )
}
