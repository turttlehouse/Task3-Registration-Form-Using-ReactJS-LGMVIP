import React, { useState } from 'react'
import Header from './Components/Header/Header';
import RegisterForm from './Components/RegisterForm/RegisterForm';


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

      </div>

    </div>
  )
}

export default App