import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import DisplayStudentList from './Components/DisplayStudentList/DisplayStudentList';


const App = () => {
  const [formData, setFormData] = useState({});
  
  const handleFormSubmit = (alldata) => {
    setFormData(alldata);
  }










  return (
    <div className='App'>
      <Header/>
      <div className='content'>

        <div className='form-container'>
        <RegisterForm onSubmit={handleFormSubmit} />
        </div>

        <div className='form-display'>
          <DisplayStudentList/>
        </div>

      </div>

    </div>
  )
}

export default App