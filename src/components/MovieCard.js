import React from 'react';
import swal from 'sweetalert';

const MovieCard=(props)=>{
    const {genere}=props

    //SweetAlert
    const handleAlert=(data)=>{
        swal(`Here's the Overview! of ${data.title}`, data.overview)
    }

    return(
<div className='row'>
            {
                genere.map((ele)=>{
                return ele.map((mov)=>{
                   return (
                       
                       <div key={mov.id} className='col-md-4 mb-2'>
                       <div className='card' onClick={()=>{
                           handleAlert(mov)
                       }} key={mov.id}>
                            <div className='card-header'>
                               Title: {mov.title}
                                </div>
                                <div className='card-body'>
                                    <p><b>Director:</b>{mov.director}</p>
                                    <p><b> IMDB Rating: </b> {mov.imdb_rating}</p>
                                    <img src={mov.poster} width='200px' height='200px' className='p-2' alt={mov.title} />
                                    <p><b>Movie Length:{mov.length} </b> </p>
                                    <b>Movie-Cast </b>
                                    <ul>
                                    {
                                       mov.cast.map((ele,i)=>{
                                         return  <li key={i}>{ele} </li>
                                       })
                                    }
                                    </ul>
                                    <p><b> Released:</b> {mov.released_on} </p>
                                    <p><b> Classification:</b>{mov.classification} </p>
                                    </div>
                       </div>
                           </div>
                   )
                })
                })
            }
            </div>
    )
}

export default MovieCard