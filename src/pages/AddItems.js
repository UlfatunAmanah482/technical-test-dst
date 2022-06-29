import React, { useState } from 'react'

const AddItems = () => {
  const [name, setName] = useState("")
  const [types, setTypes] = useState("")
  const [classification, setClassification] = useState("")
  const [resistances, setResistances] = useState("")
  // const [avatar, setAvatar] = useState("")

  const handleOnClick = () => {
    const data = {
      name,
      types,
      classification,
      resistances
    }
    console.log(data);
  }
  return (
    <div className='min-h-screen h-full w-full'>
      <div className='bg-body w-full md:h-[124px] h-[60px] flex items-center justify-between'>
        <div className='flex items-center justify-center mx-[4%]'>
          <img src="/images/vector.svg" alt="vector" />
          <span className='text-white mx-3'>Tambah Baru</span>
        </div>
      </div>
      <div className='flex-col flex md:flex-row gap-6 justify-between mx-[8%] md:my-10 my-[5%]'>
        <div className='flex flex-col max-w-[30%] w-full'>
          <img src='/images/logo-image.svg' alt="logoImage" width={240} height={240} />
          <button className='text-body text-2xl font-semibold m-5 hover:underline'>Ubah Image</button>
        </div>
        <div className="w-full">
          <div className='shadow-card w-full rounded-[20px] px-10 py-8 mb-8'>
            <h1 className='text-body text-[32px] font-semibold'>Informasi Umum</h1>
            <p className='text-[#8D7777] text-xl'>Nomor</p>
            <h2 className='text-[#453E3E] font-semibold text-2xl mt-3 mb-5'>#001</h2>
            <div className="flex flex-col">
              <label htmlFor="name">Nama</label>
              <input type="text" className='bg-[#FFF8F8] rounded-md border-none h-12 mt-3 mb-5' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="types">Types</label>
              <input type="text" className='bg-[#FFF8F8] rounded-md border-none h-12 mt-3 mb-5' value={types} onChange={(e) => setTypes(e.target.value)} />
              {/* <select name='types'>
                <option value=""></option>
              </select> */}
            </div>
            <div className="flex flex-col">
              <label htmlFor="classification">Classification</label>
              <input type="text" className='bg-[#FFF8F8] rounded-md border-none h-12 mt-3 mb-5' value={classification} onChange={(e) => setClassification(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="resistant">Resistant</label>
              <input type="text" className='bg-[#FFF8F8] rounded-md border-none h-12 mt-3 mb-5' value={resistances} onChange={(e) => setResistances(e.target.value)} />
            </div>
          </div>
          <div className='shadow-card w-full rounded-[20px] px-10 py-8 mb-8'>
            <h1 className='text-body text-[32px] font-semibold'>Evolution</h1>
            <button className='bg-body text-white h-12 w-full rounded-xl mt-4'>Tambah</button>
          </div>
          <div className="flex gap-5 justify-end items-center">
            <button className='border border-body rounded-xl text-body w-[150px] h-12'>Batal</button>
            <button className='bg-body rounded-xl text-white w-[150px] h-12' onClick={handleOnClick}>Tambah</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItems