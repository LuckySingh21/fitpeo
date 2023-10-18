import React from 'react'
import "./styles.css"
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

function Earnings({title,value,percentage,change}) {
  return (
    <div className='card-container'>
        <div className='card-left-earnings'>
            <AttachMoneyRoundedIcon/>
        </div>
        <div className='card-right'>
            <p className='earnings-title'>{title}</p>
            <p className='earnings-value'>${value}k</p>
            <p className='earnings-comment'><span className='earnings-span'>{change}{percentage}%</span> this month</p>
        </div>
    </div>

  )
}

export default Earnings