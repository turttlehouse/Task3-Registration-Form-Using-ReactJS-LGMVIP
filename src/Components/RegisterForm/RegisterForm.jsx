import React from 'react'
import './RegisterForm.css'


const RegisterForm = () => {

    
  return (

    <div className='form-container'>
        <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id ="name" name ="name" required/>
            <br /><br />

            <label htmlFor='email' >Email:</label>
            <input type="email" id="email" name="email" required/>
            <br /><br />

            <label htmlFor='website'>Website:</label>
            <input type="url" id="imageLink" name="imageLink" required/>
            <br /><br />

            <label>Gender:</label>

            <input type="radio" id="male" name="gender" />
            <label htmlFor='male'>Male</label>
            
            <input type="radio" id="female" name="gender"/>
            <label htmlFor='female'>Female</label>

            <input type="radio" id="other" name="gender"/>
            <label htmlFor='other'>Other</label>
            <br /><br />

            <label>Skills:</label>

            <input type="checkbox" id="java" name="java" />
            <label htmlFor='java'>Java</label>
            <br />

            <input type="checkbox" id="html" name="html"/>
            <label htmlFor='html'>HTML</label>
            <br />

            <input type="checkbox" id="css" name="css"/>
            <label htmlFor='css'>CSS</label>
            <br /><br />

            <button type='submit' id="enroll-btn">Enroll Student</button>
            
            <button type="reset" id="clear-btn">Clear</button>

        </form>

     
    </div>
  )
}

export default RegisterForm