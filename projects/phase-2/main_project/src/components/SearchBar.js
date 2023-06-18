import React, { useState} from 'react'
import axios from "axios";
import './Search.css'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);

  const Submit = (event) => {
    setSearchTerm(event.target.value);
  }
  

    const searchPhotos = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=Rcdi778cfyMDRbauBzUoWNxAu4YsbEkpAQ4OAbH0Lzo&query=${searchTerm}`)
      setPhotos(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }
   

 
  
  return (
    <div className='container'>
        <div className='form'>
          <form onSubmit={Submit}>
            <label>
              <input type = "text" name="searchTerm" value= {searchTerm} placeholder='Search for images' onChange={Submit}/>
            </label>
            <button onClick={searchPhotos}>Search</button> 
          </form>
        </div>
      <h3>Search Result for {searchTerm ? <span>{(searchTerm.toUpperCase())}</span> : <span>None</span>}</h3>
      
      <div className='image-grid'>
        {photos.map(photo =>(
        <img  height= '200px' weight ='220px ' key={(photo.id)} src={photo.urls.regular} alt={photo.description}/>
      ))}
      </div>
    </div>
    
  )
}


export default SearchBar

