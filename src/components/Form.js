import  { useState } from 'react'
// import Form from'./Form';
// import reportWebVitals from './../reportWebVitals';
import './form.css'
function Form({get}) {
  const [Weight, setWeight]=useState("");
  const [Height, setHeight]=useState("");
  const [alert, setAlert]=useState(false)
  const onsubmit =(e) =>{
    e.preventDefault();
    if(isNaN(Weight) || isNaN(Height)){
      setAlert(true);
    }else{
      get(Weight,Height)
      setAlert(false);
    }
  }
  // let alertMessage
  // if (alert){
  //   alertMessage=          <div className='alert alert-danger' role="alert">Please enter a valid input</div>
  // }else{
  //   alertMessage=''
  // }

  return (
    <div className='div'>
      <div className='main shadow rounded px-5 m-auto'>
        <h1 className='text-center pt-3 h2 text-secondary'>BMI CALCULATOR</h1>
        <form onSubmit={onsubmit}>
          <div className='row'>
            <div className='col-l-6'>
              <div className='my-3'>
                <label className='form-label'>Weight(kg) :</label>
                <input type="number" required value={Weight} onChange={(e) => setWeight(e.target.value)} className='form-control' ></input>
              </div>
            </div>
            <div className='hg col-l-6'>
              <div className='my-3'>
                <label className='form-label'>Height(m) :</label>
                <input type="text" required value={Height} onChange={(e) => setHeight(e.target.value)} className='form-control' ></input>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='bt col-l-12 m-auto'>
            <input type="submit" value='GET BMI' className='btn btn-primary ' />
          </div>
          {alert ? <div className='alert alert-danger' role="alert">Please enter a valid input</div> : null}

          </div>
        </form>

      </div>
    </div>
  )
}

export default Form
