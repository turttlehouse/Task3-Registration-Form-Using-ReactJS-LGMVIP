import React from 'react'
import Header from './Components/Header/Header';
import RegisterForm from './Components/RegisterForm/RegisterForm';


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <div className='content'>

        <div className='form-container'>
        <RegisterForm/>
        </div>

      </div>

    </div>
  )
}

export default App