import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useRoutes } from 'react-router'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { getDetailPokemon } from '../redux/actions'

export const Home = () => {
  const [data, setData] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [pokemon, setPokemon] = useState("")

  const dispatch = useDispatch()
  // const pokemon = useSelector(state => state.reducer.pokemon)

  useEffect(() => {
    axios.get("https://test.dengansenangteknologi.com/api/v1/pokemons?limit=10&page=1").then((res) => {
      setData(res.data.data)
    })
  }, [])

  const handleDetail = (e) => {
    axios.get(`https://test.dengansenangteknologi.com/api/v1/pokemons/${e.target.id}`).then((res) => {
      setPokemon(res.data.data)
    })
      localStorage.setItem("pokemon", JSON.stringify(pokemon))
      console.log("pokemon:", pokemon);
    // dispatch(getDetailPokemon(e.target.id))
    // setRedirect(true)
    // localStorage.setItem("pokemon", JSON.stringify(pokemon))
  }
  return (
    <div className='min-h-screen h-full w-full'>
      {/* {redirect && <Navigate to="/detail" />} */}
      <Navbar />
      {
        data && (
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[40px] items-center md:mx-[10%] mx-[5%] md:my-10 my-[5%]' >
            {
              data.map((item) => (
                <div key={item.uuid}>
                  {/* <Card name={item.name} srcImg={item.avatar} handleDetail={() => handleDetail(item.uuid)} /> */}
                  <Card name={item.name} srcImg={item.avatar} handleDetail={handleDetail} id={item.uuid} />
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
