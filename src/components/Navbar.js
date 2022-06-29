import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ModalDelete from './ModalDelete'

export const Navbar = ({ detail }) => {
  const [modal, setModal] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate("/add")
  }

  const onShowModal= () => {
    setModalDelete(!modalDelete)
    setModal(!modal)
  }
  return (
    <section>
      { modalDelete && <ModalDelete cancelDelete={() => setModalDelete(!modalDelete)} />}
      <div className='bg-body w-full md:h-[124px] h-[60px] flex items-center justify-between'>
        {
          modal && (
            <div className='fixed right-[10%] flex flex-col justify-center w-[160px] h-[100px] bg-white rounded-xl'>
              <div className='px-5 pb-2'>
                <button className='text-body font-bold hover:underline'>Edit</button>
              </div>
              <div className='px-5'>
                <button className='text-body font-bold hover:underline' onClick={onShowModal}>Hapus</button>
              </div>
            </div>
          )
        }
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
              <div onClick={() => setModal(!modal)} className='cursor-pointer'>
                <img src="https://img.icons8.com/external-neu-royyan-wijaya/32/000000/external-more-neu-development-neu-royyan-wijaya.png" alt="more-icon"/>
              </div>
            ) : (
              <div onClick={handleOnClick} className='cursor-pointer'>
                <img src="https://img.icons8.com/android/24/000000/plus.png" alt="icons-plus"/>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
