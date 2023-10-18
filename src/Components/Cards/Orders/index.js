import React from 'react'
import "./styles.css"
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';

function Orders({title,value,percentage,change}) {
  return (
    <div className='card-container'>
        <div className='card-left-orders'>
            <LibraryBooksRoundedIcon/>
        </div>
        <div className='card-right'>
            <p className='orders-title'>{title}</p>
            <p className='orders-value'>${value}k</p>
            <p className='orders-comment'><span className='orders-span'>{change}{percentage}%</span> this month</p>
        </div>
    </div>

  )
}

export default Orders