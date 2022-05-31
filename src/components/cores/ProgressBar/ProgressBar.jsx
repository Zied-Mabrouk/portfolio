import React from 'react'
import "./ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className='progressbar'>
        <div className='level' style={{width : props.level+"%"}}>

        </div>
    </div>
  )
}

export default ProgressBar