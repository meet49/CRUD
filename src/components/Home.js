import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/Student')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios.delete(`http://localhost:4000/Student/${id}`)
        .then(() => {
          setData(data.filter(item => item.id !== id));
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of students</h1> 
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phoneno}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
