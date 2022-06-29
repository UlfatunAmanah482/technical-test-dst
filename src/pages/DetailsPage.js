import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'

export const DetailsPage = () => {
  // const pokemon = useSelector(state => state.reducer.pokemon)
  // useEffect(() => {
  //   localStorage.setItem("pokemon", JSON.stringify(pokemon))
  //   console.log("pokemon:", pokemon);
  // }, [])
  return (
    <div className='min-h-screen h-full w-full'>
      <Navbar detail={true} />
      <div className='flex justify-center md:mx-[10%] mx-[5%] md:my-10 my-[5%]'>
        <div className='max-w-[25%] w-full'>
          <img src="/images/contoh-image.png" alt="contoh" />
          <button className='text-body text-2xl font-semibold m-5 hover:underline'>Ubah Image</button>
        </div>
        <div className='shadow-card w-full rounded-[20px] px-10 py-8'>
          <h1 className='text-body text-[32px] font-semibold'>Informasi Umum</h1>
          <p className='text-[#8D7777] text-xl'>Nomor</p>
          <h2 className='text-[#453E3E] font-semibold text-2xl'>#001</h2>
          <p className='text-[#8D7777] text-xl'>Name</p>
          <h2 className='text-[#453E3E] font-semibold text-2xl'>Bulbasaur</h2>
          <p className='text-[#8D7777] text-xl'>Types</p>
          <div className='flex items-center gap-5'>
            <div className='bg-[#8BC34A] px-3 py-2 rounded-md text-white'>Grass</div>
            <div className='bg-[#AA22B0] px-3 py-2 rounded-md text-white'>Poison</div>
          </div>
          <p className='text-[#8D7777] text-xl'>Clasification</p>
          <h2 className='text-[#453E3E] font-semibold text-2xl'>Seed pokemon</h2>
          <p className='text-[#8D7777] text-xl'>Resistence</p>
          <div className='flex items-center gap-5'>
            <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white'>Water</div>
            <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white'>Electric</div>
            <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white'>Grass</div>
            <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white'>Fighting</div>
            <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white'>Fairy</div>
          </div>
        </div>
      </div>
    </div>
  )
}
