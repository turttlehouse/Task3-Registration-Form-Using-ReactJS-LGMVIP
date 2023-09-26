import React, { useState } from 'react'
import './RegisterForm.css'


const RegisterForm = (props) => {
  // using useState hook to store the student data in Object form inside formData
  const [ formData, setFormData] = useState({
    name:'',
    email:'',
    website:'',
    imageLink:'',
    gender:'',
    skills:[]

  });

  //when somechanges occur in input fields means student data has been filled

  const handleInputChange =(e)=>{
     //Destructuring 
    // const {name,value} = e.target;

    //or by directly accessing
    const name = e.target.name;    //assigns the name property of e.target to the name variable -captures the name of the input field
    const value = e.target.value;  //assigns the value property of e.target to the value variable - captures the user's input value
    
    //using the spread operator ({...formData}) to create a new object that is a copy of the existing formData state and then it updates a specific property of that new object.
    setFormData({...formData, [name] :value});

  };

  const handleCheckboxChange =(e)=>{
    const name =e.target.name;
    const checked = e.target.checked;
    const updatedSkills =[...formData.skills];

    if(checked)
    {
      updatedSkills.push(name);
    }
    else
    {
      const index = updatedSkills.indexOf(name); //index of finds the index of first occurrence of element specified
      if(index !==-1)
      {
        updatedSkills.splice(index,1);
      }
    }
    setFormData({...formData,skills:updatedSkills});
  };
    
    const handleSubmit = (e)=>{
      e.preventDefault();
       // Send the form data to the parent component or wherever you want
        props.onSubmit(formData);

    };

    const clearFormdata =()=>{
      setFormData({
        name:'',
        email:'',
        website:'',
        imageLink:'',
        gender:'',
        skills:[]

      });
    }

      

    
   
  

    
  return (

    //  name attribute assigns a name to the input element, which can be used when submitting a form to identify the data associated with this input.
    // value={formData.name}: This sets the value of the input element to the name property of the formData object. This is commonly used for controlled input components in React, where the input value is managed by state.
    // onChange attribute specifies a function (handleInputChange) that will be called when the input value changes. This is used to handle user input and update the formData object.
    <div className='form-container'>
        <form onSubmit={handleSubmit} >
            <label htmlFor='name'>Name:</label>
            <input type='text' id ="name" name ="name" value={formData.name} onChange={handleInputChange} required/>
            <br /><br />

            <label htmlFor='email' >Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
            <br /><br />

            <label htmlFor='website'>Website:</label>
            <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} required/>
            <br /><br />

            <label htmlFor='imageLink'>Image Link</label>
            <input type="url" id="imageLink" name="imageLink" value={formData.imageLink} onChange={handleInputChange}/>
            <br /><br />

            {/* Different conditional function required here */}

            <label>Gender:</label>

            <input type="radio" id="male" name="gender" value="Male" onChange={handleInputChange} checked ={formData.gender ==='Male'} />
            <label htmlFor='male'>Male</label>
            
            <input type="radio" id="female" name="gender" value="Female" onChange={handleInputChange} checked={formData.gender ==='Female'} />
            <label htmlFor='female'>Female</label>

            <input type="radio" id="other" name="gender" value="other" onChange={handleInputChange} checked={formData.gender === 'other'}/>
            <label htmlFor='other'>Other</label>
            <br /><br />

            {/* Different function handleCheckboxchange here again */}

            <label>Skills:</label>

            <input type="checkbox" id="java" name="Java" value="Java" onChange={handleCheckboxChange} checked={formData.skills.includes('Java')} />
            <label htmlFor='java'>Java</label>
            <br />

            <input type="checkbox" id="html" name="HTML" value="HTML" onChange={handleCheckboxChange} checked={formData.skills.includes('HTML')}/>
            <label htmlFor='html'>HTML</label>
            <br />

            <input type="checkbox" id="css" name="CSS" value="CSS" onChange={handleCheckboxChange} checked={formData.skills.includes('CSS')} />
            <label htmlFor='css'>CSS</label>
            <br /><br />

            <button type='submit' id="enroll-btn">Enroll Student</button>
            
            <button type="reset" id="clear-btn" onClick={clearFormdata} >Clear</button>

        </form>

     
    </div>
  )
}

export default RegisterForm




