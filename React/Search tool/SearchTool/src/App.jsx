import { useState } from 'react'

import './App.css'

function App() {
  
  const [search, setSearch] = useState ("")
  const [result, setResult] = useState ([
    {name: "Malik", rating: 10},
    {name: "Sohaib", rating: 10},
    {name: "Yaman", rating: 10},
    {name: "Zaid", rating: 10},
  ])

  const displayResults = () => {
    if (search.length < 1) {
      return <div className="dropdown-content"></div>
    } else {
      return <div className="dropdown-content">
        {result.filter((val)=> {
          if(search == "") {
            return val
          }else if (val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }

        }).map(val =>(
          <div className="dropdown-value">
            <span>{val.name}</span> 
          </div>
      ))}
    </div> 

    }

  }


  return (
    <div>
        <input
            className="TBA"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="search.."/>
          {displayResults()}
      </div>
  )
}

export default App
