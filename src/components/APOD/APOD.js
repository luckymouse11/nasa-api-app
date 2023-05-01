import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const APOD = () => {

  // State
    const [ apod, setApod ] = useState()
    const [ hasError, setHasError ] = useState(false)

  // Params
  // const { id } = useParams()

  // API key
  const api = 'api_key=3eCYd03zAJvlrgxwpJbPLQWpeO4jptg3ZFT1nd4y'

  useEffect(() => {
    const getApod = async () => {
      try {
        const { data } = await axios(`https://api.nasa.gov/planetary/apod?api_key${api}`)
        setApod(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getApod()
  }, [])


  return (
    <>
      { apod ?
      <div className="apod col-12 col-md-6 col-lg-4 grow">
        <div className="card-header">
          <h5 className="mt-2">{apod.title}<br />{apod.copyright}<br />{apod.date}</h5>
        </div>
      </div>
      :
      <>
        { hasError ?
          <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
          : 
          <h2 className="display-5 text-center">Show info</h2> 
        }
      </>
      }
    </>
  )

}

export default APOD