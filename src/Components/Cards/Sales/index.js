import React from 'react'
import "./styles.css"
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

function Sales({title,value,percentage,change}) {
  return (
    <div className='card-container'>
        <div className='card-left-sales'>
            <ShoppingBagRoundedIcon/>
        </div>
        <div className='card-right'>
            <p className='sales-title'>{title}</p>
            <p className='sales-value'>${value}k</p>
            <p className='sales-comment'><span className='sales-span'>{change}{percentage}%</span> this month</p>
        </div>
    </div>

  )
}

export default Sales