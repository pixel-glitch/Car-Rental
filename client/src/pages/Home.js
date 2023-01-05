import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

function Home() {
  const {cars} = useSelector(state=>state.carsReducer)
  return (
    <DefaultLayout>
        <h2>Home page</h2>
        <h1>The length of cars array is {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home