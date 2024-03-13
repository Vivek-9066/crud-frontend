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
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
  } from './actionType';
  
  const initialState = {
    loading: false,
    error: null,
    user: null,
    updatedUser: null,
    users:[],
  };
  
  const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_REQUEST:
    case GET_ALL_USERS_REQUEST:
        case GET_USER_REQUEST:
            case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case ADD_USER_SUCCESS:
            case GET_USER_SUCCESS:      
        return {
          ...state,
          loading: false,
          error: null,
          user:action.payload
        };
        case GET_ALL_USERS_SUCCESS:
            return{ ...state,
                loading: false,
                users:action.payload,
                error: null,
               }
        case UPDATE_USER_SUCCESS: 
        return{...state,loading:false,error:null,updatedUser:action.payload}
        
           
      case ADD_USER_FAILURE:
        case GET_ALL_USERS_FAILURE:
            case GET_USER_FAILURE:
                case UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

      default:
        return state;
    }
  };
  
  export default addUserReducer;
  