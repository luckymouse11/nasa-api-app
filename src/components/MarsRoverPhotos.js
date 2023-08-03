// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'


// const MarsRoverPhotos = () => {

//   // State
//     const [ mrp, setMRP ] = useState()
//     const [ hasError, setHasError ] = useState(false)

//   // Params
//   // const { id } = useParams()

//   // API key
//   const api = 'api_key=3eCYd03zAJvlrgxwpJbPLQWpeO4jptg3ZFT1nd4y'

//   useEffect(() => {
//     const getMrp = async () => {
//       try {
//         const { data } = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${api}`)
//         setMRP(data)
//       } catch (err) {
//         setHasError(true)
//       }
//     }
//     getMrp()
//   }, [])


//   return (
//     <>
//       { mrp ?
//       <div className="d-flex flex-column justify-content-center">
//         <h1>hello</h1>
//         <h5 className="mt-2 border">{`${mrp.photos[*].id}`}</h5>
//         {/* <img className="image border" src={`${mrp.img_src}`} alt="Mars Rover Photos"/> */}
//       </div>
//       :
//       <>
//         { hasError ?
//           <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
//           : 
//           <h2 className="display-5 text-center">Show info</h2> 
//         }
//       </>
//       }
//     </>
//   )

// }

// export default MarsRoverPhotos