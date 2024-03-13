// actions.js
import axios from 'axios'; // You might need axios for making API requests

import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from './actionType';
import { api } from './config';

// Action creator for adding a user
export const addUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_USER_REQUEST });
    try {
      // Make API request to add user
      const response = await axios.post('http://localhost:8080/api/users/add', userData);
      console.log("add user success",response)
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: response.data // Assuming the response contains the added user data
      });
    } catch (error) {
      dispatch({
        type: ADD_USER_FAILURE,
        payload: error.message // You can handle error payloads as per your requirements
      });
    }
  };
};


export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_REQUEST });
    try {
      const response = await axios.get('http://localhost:8080/api/users/all'); 
      console.log("all users-",response)
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: response.data 
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload: error.message
      });
    }
  };
};

// export const getUserById = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST });
//     try {
//       const response = await axios.get(`http://localhost:8080/api/user/`+id); 
//       dispatch({
//         type: GET_USER_SUCCESS,
//         payload: response.data // Assuming the response contains the user data
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_USER_FAILURE,
//         payload: error.message
//       });
//     }
//   };
// };


// export const updateUser = (userId, userData) => {
//   return async (dispatch) => {
//     dispatch({ type: UPDATE_USER_REQUEST });
//     try {
//       const response = await api.put(`/api/users/update/${userId}`, userData);
//       dispatch({
//         type: UPDATE_USER_SUCCESS,
//         payload: response.data // Assuming the response contains the updated user data
//       });
//     } catch (error) {
//       console.log("update user error ",error)
//       dispatch({
//         type: UPDATE_USER_FAILURE,
//         payload: error.message // You can handle error payloads as per your requirements
//       });
//     }
//   };
// };

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      const response = await axios.delete(`http://localhost:8080/api/users/delete/${userId}`);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error // You can handle error payloads as per your requirements
      });
    }
  };
};

