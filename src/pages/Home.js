import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    axios.get("https://test.dengansenangteknologi.com/api/v1/pokemons?limit=10&page=1").then((res) => {
      setData(res.data.data)
    })
  }, [])

  return (
    <div className='min-h-screen h-full w-full'>
      <Navbar />
      {
        data && (
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[40px] items-center md:mx-[10%] mx-[5%] md:my-10 my-[5%]' >
            {
              data.map((item) => (
                <div key={item.uuid}>
                  <Card name={item.name} srcImg={item.avatar} id={item.uuid} />
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
