import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { deleteUser, getAllUsers } from "../Redux/action";


const HomePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  },[dispatch]);

const handleDelete =async (userId) => {
await dispatch(deleteUser(userId));
dispatch(getAllUsers());
};


  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center"  style={{ backgroundImage: "url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=600')", 
    backgroundSize: 'cover', height: '100vh' }}>
      <div className="w-70 h-70 bg-white overflow-y-scroll rounded p-3">
        <h2>Employee Records</h2>
        <div className="d-flex justify-content-end ">
            <Link to='/create' className="btn btn-success">Create +</Link>
        </div>

        { (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(auth.users) && auth.users.map((item,index)=> {
          return (
                     
              <tr key={index}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.email}</td>
              <td>{item.designation}</td>
                <td>
                    <Link to={`/read/${item.id}`} className="me-2 btn btn-sm btn-info rounded">Read</Link>
                    <Link to={`/edit/${item.id}`} className="btn btn-sm btn-primary rounded">Edit</Link>
                    <button onClick={() => handleDelete(item.id)} className="ms-2 btn btn-sm btn-danger rounded">Delete</button>
                </td>
            </tr>
        
)}
            )}
          </tbody>
        </table>)}
      </div>
    </div>
  );
};

export default HomePage;
