import React from 'react';

const Navbar=(props)=>{
    const {handleSearch,search}=props

    return(
        <div className='row bg-dark p-2'>
            <div className='col-md-8'>
            <h1 className='display-4 text-light'> WOOKIE MOVIES</h1>
            </div>
           <div className='col-md-3'>
            <input type='text' className='form-control mt-2' value={search} placeholder='Search by Title' onChange={handleSearch} />
           </div>
        </div>
        
    )
}

export default Navbar