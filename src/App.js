import './App.css';
import Form from './components/Form'
import BmiScore from './components/BmiScore'
import BmiList from './components/BmiList';
import { useState } from 'react';
function App() {
  const [changeWeight, setChangeWeight]=useState({weight:"" ,type:""})
  const [bmi,setBmi]=useState("00")
  const [bmiType,setBmiType]=useState("Not calculated")
  const [bmiRange,setBmiRange]=useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const onformsub=(w,h) =>{
    let b = callbmi(w,h)
    setBmi(b)
    let btype =weighttype(b)
    setBmiType(btype)
    console.log(w,h);
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    }
    setBmiRange(range)
    setChangeWeight(weightChange(b, w, range))
  }
  const callbmi = (w,h) =>(w/(h*h)).toFixed(2)

  const calWeight =(b,h) =>(b*h*h).toFixed(2)

  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };

  const weighttype=(bmi)=>{
    if(bmi<18.5){
      return 'underweight'
    } else if (18.5 < bmi && bmi <24.9){
      return 'normal'
    } else if (24.9 < bmi && bmi <29.9){
      return 'over weight'
    } else if (29.9 < bmi && bmi <34.9){
      return 'obesity class I'
    } else if (34.9 < bmi && bmi <39.9){
      return 'obesity class II'
    } else if ( bmi > 39.9){
      return 'obesity class III'
    }
  }
  return (
    <>
    <div>
    <Form get = {onformsub} />
    </div>
    <div className='row'>
    <div className='score col-l-6'>
    <BmiScore  bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight} />
    </div>
    <div className='list col-l-6'>
    <BmiList range={bmiRange} bmi={bmi}/>
    </div>
    </div>
    </>

  );
} 

export default App;
