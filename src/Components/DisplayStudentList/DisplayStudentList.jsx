import React from 'react'
import './DisplayStudentList.css'

const DisplayStudentList = () => {






  return (
    <>
      <h1>Enrolled Students</h1>
     <div className='enrolled-students'>
      <table>
        <thead>

        <tr>
          <th>Description</th>
          <th>Photo</th>
        </tr>

        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Name:</strong>  <br/>
              <strong>Email:</strong>  <br/>
              <strong>Website:</strong>  <br/>
              <strong>Gender:</strong>  <br/>
              <strong>Skills:</strong>  <br/>
            </td>

            <td>
              <img src="" alt='studentname'/>
            </td>

          </tr>
        
        </tbody>

      </table>

      </div>
    
    
    
    </>
   
  )
}

export default DisplayStudentList