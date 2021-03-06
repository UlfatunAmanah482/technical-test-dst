import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'

export const DetailsPage = () => {
  const pokemon = useSelector(state => state.reducer.pokemon)
  return (
    <div className='min-h-screen h-full w-full'>
      <Navbar detail={true} />
      <div className='flex-col flex md:flex-row justify-between mx-[5%] md:my-10 my-[5%]'>
        <div className='flex flex-col justify-center max-w-[30%] w-full'>
          <img src={pokemon.avatar} alt="contoh" />
          <button className='text-body text-2xl font-semibold m-5 hover:underline'>Ubah Image</button>
        </div>
        <div className='w-full'>
          <div className='shadow-card w-full rounded-[20px] px-10 py-8 mb-8'>
            <h1 className='text-body text-[32px] font-semibold'>Informasi Umum</h1>
            <p className='text-[#8D7777] text-xl'>Nomor</p>
            <h2 className='text-[#453E3E] font-semibold text-2xl'>#001</h2>
            <p className='text-[#8D7777] text-xl'>Name</p>
            <h2 className='text-[#453E3E] font-semibold text-2xl'>{pokemon.name}</h2>
            <p className='text-[#8D7777] text-xl'>Types</p>
            <div className='flex items-center gap-5'>
              <div className='bg-[#8BC34A] px-3 py-2 rounded-md text-white'>Grass</div>
              <div className='bg-[#AA22B0] px-3 py-2 rounded-md text-white'>Poison</div>
            </div>
            {/* <div className='flex items-center gap-5'>
              {
                pokemon.types && pokemon.types.map((item) => (
                  <div className={item.}>Grass</div>
                ))
              }
            </div> */}
            <p className='text-[#8D7777] text-xl'>Clasification</p>
            <h2 className='text-[#453E3E] font-semibold text-2xl'>Seed pokemon</h2>
            <p className='text-[#8D7777] text-xl'>Resistant</p>
            <div className='flex items-center gap-5'>
              {
                pokemon.resistances ? (
                  pokemon.resistances.map((item) => (
                    <div className='bg-[#453E3E] px-3 py-2 rounded-md text-white' key={item.uuid}>{item.name}</div>
                  ))
                ) : null
              }
            </div>
          </div>
          <div className='shadow-card w-full rounded-[20px] px-10 py-8'>
            <h1 className='text-body text-[32px] font-semibold'>Evolution</h1>
            {
              pokemon.evolutions ? (
                pokemon.evolutions.map((item) => (
                  <div className="flex items-center" key={item.uuid}>
                    <img src={item.avatar} alt="avatar" />
                    <div>
                      <h6 className='text-[#8D7777] text-base'>#001</h6>
                      <p className='text-body text-xl'>{item.name}</p>
                      <div className='flex items-center gap-5'>
                        <div className='bg-[#8BC34A] px-3 py-2 rounded-md text-white'>Grass</div>
                        <div className='bg-[#AA22B0] px-3 py-2 rounded-md text-white'>Poison</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
