import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import  {getAllCars}  from '../redux/action/carsAction'
import { useEffect } from 'react'

import store from '../redux/store'


function Home() {
  const {cars,loading} = useSelector(state=>state.cars)
  //const dispatch = useDispatch()

  useEffect(() => {
   store.dispatch(getAllCars())
  }, []);

  return (
    <DefaultLayout>
        <h2>Home page</h2>
        <h1>The length of cars array is {cars}</h1>
    </DefaultLayout>
  )
}

export default Home