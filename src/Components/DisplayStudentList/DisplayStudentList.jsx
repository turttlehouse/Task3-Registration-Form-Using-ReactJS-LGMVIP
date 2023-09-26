import React from 'react'
import '../../Style/DisplayStudentList.css'

// props is an object that contains all the props passed to the component. Here, we are accessing the enrolledStudents prop, which is an array of student data.

const DisplayStudentList = (props) => {
//x contains the data of students
// x represents the current element being processed, and index represents its index in the array.
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
          {props.enrolledStudents.map((x,index)=>(

                <tr key={index}>
                <td>
                  <strong>Name:</strong>  { x.name }  <br/>
                  <strong>Email:</strong>  { x.email }<br/>
                  <strong>Website:</strong> { x.website }  <br/>
                  <strong>Gender:</strong> { x.gender }  <br/>
                  <strong>Skills:</strong> { x.skills.join(',') } <br/>
                </td>

                <td>
                  <img src={x.imageLink} alt={x.name} style={{width:'200px',height:'100px'}}/>
                </td>

                </tr>
          )


          )}
     
        
        </tbody>

      </table>

      </div>
    
    
    
    </>
   
  )
}

export default DisplayStudentList