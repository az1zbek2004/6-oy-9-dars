import React, { useEffect, useState } from 'react'

function Home(props) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=all')
      .then(res => res.json())
      .then(d => {
        setdata(d); // Store the fetched data in state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty

  function handleClick(e) {
    e.preventDefault()
    localStorage.removeItem('data');
    localStorage.removeItem('token');
    props.setData(null)
  }


  return ( 
    <div>
      {data ? (
       <div className="container  d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center mt-3'>Hello ReqRes users!</h1>
        <div className="d-flex w-100 justify-content-end">
        <button onClick={handleClick} className="btn btn-danger w-25 fs-4">Logout</button>  
        </div> 
        <div className="card-wrapper d-flex flex-wrap justify-content-between">
          {
            data.data.map(el => {
              return(
                <div role="button" className="card w-25 p-3 m-3 d-flex lh-1 flex-wrap cursor-pointer">
                  <img src={el.avatar} alt="avatar" />
                  <p className='lh-1 mt-3'><b>First Name:</b> {el.first_name}</p>
                  <p className='lh-1'><b>Last Name:</b> {el.last_name}</p>
                  <p className='lh-1'><b>Email:</b> {el.email}</p>
                </div>
              )
            })
          }
        </div>
       </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home