import React from 'react';
import MovieCard from './MovieCard';

const Home=(props)=>{
const{movies}=props

        //Grouping By Generes
      const genere1= Object.keys(movies).map((ele)=>{
        return movies[ele].filter((mov)=>{
            return mov.genres.length ===1
        })
    })
    const genere2= Object.keys(movies).map((ele)=>{
        return movies[ele].filter((mov)=>{
            return mov.genres.length ===2
        })
    })

    const genere3= Object.keys(movies).map((ele)=>{
        return movies[ele].filter((mov)=>{
            return mov.genres.length ===3
        })
    })

    return(
        <div className='container'>
            <h1 className='display-5'>Genre 1 </h1>
            <hr/>
            {
            genere1.length ===1?<> <h1 className='display-6'>No Movie Found In Genere1</h1></>:<MovieCard genere={genere1}/>
            }
            
            <h1 className='display-5'>Genere 2</h1>
            <hr/>
            {
                 genere1.length===0?<p>No Movie Found In Genere2 </p>:<MovieCard genere={genere2}/>
            }
            <h1 className='display-5'>Genere 3 </h1>
            <hr/>
            {
                 genere1.length===0?<p>No Movie Found In Genere3 </p>:<MovieCard genere={genere3}/>
            }
        </div>
    )
}

export default Home