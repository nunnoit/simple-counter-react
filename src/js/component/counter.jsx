import React from 'react';


const Counter = (props) => {
  return (
    <div className='container-fluid text-white'>
      <div className='row d-flex justify-content-center counterbg align-items-center'>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'><i className="far fa-clock fa-1px"></i></h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center align-self-center'>{props.time6}</h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'>{props.time5}</h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'>{props.time4}</h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'>{props.time3}</h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'>{props.time2}</h1>
        </div>
        <div className='col-1 digit d-flex align-items-center justify-content-center border border-2 rounded'>
          <h1 className='text-center'>{props.time1}</h1>
        </div>
        <button className="start-button bg-warning text-white display-1 my-2 border-secondary" onClick={()=>{clearTimeout(props.pause), console.log('Pausing now...');}}>Pause</button>
      </div>
    </div>
  )
}

// Last line exp
export default Counter;



