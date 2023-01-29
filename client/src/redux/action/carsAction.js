import axios from 'axios';
import { dispatch } from 'react';
import { carsReducer } from '../reducers/carsReducer';
import thunk from 'redux-thunk';


export async function getAllCars(dispatch, getState) {
    // const response = await client.get('/fakeApi/todos')
    dispatch({ type: 'todos/todosLoaded', payload: 'response.todos' })
  }
// export const getAllCars=()=>async (dispatch)=>{

//     return {
//         type: 'GET_ALL_CARS',
//         value: 'nothing'
//     };

//     //dispatch({type:'LOADING',payload:true})
//     //const resposnse = await axios.getAllCars
//     //dispatch({type:'LOADING',payload:false})

//     // try {
//     //     const response = await axios.get('/api/cars/getAllCars')
//     //     dispatch({type:'GET_ALL_CARS',payload:response.data})
//     //     dispatch({type:'LOADING',payload:false})
//     // } catch (error) {
//     //     console.log(error)
//     //     dispatch({type:'LOADING',payload:false})
//     // }

// }
// const fetchUsers = () => async (dispatch) => {
//     dispatch(usersLoading())
//     const response = await usersAPI.fetchAll()
//     dispatch(usersReceived(response.data))
//   }

// export const getAllCars =()=>{

//     return async(dispatch) =>{

//     try {
//         dispatch({type:'LOADING',payload:false})
//         const response = await axios.get('/api/cars/getAllCars')
//         dispatch({type:'GET_ALL_CARS',payload:response.data})
//     } catch (error) {
//         console.log(error)
//         dispatch({type:'LOADING',payload:false})
//     }
// }
// }

