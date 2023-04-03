import React from 'react'
import './bmiscore.css'

function BmiScore({bmiNo,bmiName ,changeWeight}) {
  return (
    <div>
        <div className='bmiscor shadow rounded mt-5'>
          <h6 className='text-center pt-3'>YOUR BMI SCORE</h6>
          <div className='box m-auto rounded shadow'>
            <h4 className='pt-4 text-center'>{bmiNo}</h4>
          </div>
          <div className='bmitype pt-2'>
              <h5 className=' text-center text-primary'>'{bmiName}'</h5>
              {changeWeight.type === "positive" && (
        <div className="fs-4 text-center">"You need lose <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4 text-center">"You need gain <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
       {changeWeight.type === "normal" && (
        <div className="fs-4 text-center ">"You weight is Normal,Good for you" </div>
      )}
          </div>
        </div> 
    </div>
  )
}

export default BmiScore
