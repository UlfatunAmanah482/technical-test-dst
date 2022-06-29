import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const ModalDelete = ({ cancelDelete }) => {
  const pokemon = useSelector(state => state.reducer.pokemon)
  const handleDelete = () => {
    axios.delete(`https://test.dengansenangteknologi.com/api/v1/pokemons/${pokemon.uuid}`).then((res) => {
      console.log("delete:", res.data.message);
    })
  }
  return (
    <div className='w-full h-screen fixed flex justify-center items-center bg-body bg-opacity-20 z-10 left-0 top-0'>
      <div className='bg-white text-center px-10 py-14 rounded-[32px] z-40'>
        <h1 className='text-body text-[32px] font-bold'>Hapus</h1>
        <p className='text-[#453E3E] text-2xl mt-5'>Apakah kamu yakin mau menghapus Bulbasaur?</p>
        <div className="flex gap-5 justify-center mt-12 items-center">
            <button className='border border-body rounded-xl text-body w-[150px] h-12' onClick={cancelDelete}>Batal</button>
            <button className='bg-body rounded-xl text-white w-[150px] h-12' onClick={handleDelete}>Hapus</button>
          </div>
      </div>
    </div>
  )
}

export default ModalDelete