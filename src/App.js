import React,{useEffect,useState} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {useDispatch} from 'react-redux'
import {startGetMovies} from './actionGenerators/moviesAction'
import {useSelector} from 'react-redux'

const App=(props)=>{
  const [search,setSearch]=useState('')

  const movies=useSelector((state)=>{
    return state.movies
  })

    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }

    const filteredValues=Object.keys(movies).map((ele,i)=>{
      return movies[ele].filter((mov)=>{
          return mov.title.toLowerCase().includes(search)
      })
  })

  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(startGetMovies())
  },[dispatch])

  return(
    <div className='bg-secondary'>
      <Navbar search={search} handleSearch={handleSearch}/>
      <Home movies={filteredValues}/>
    </div>
  )
}

export default App