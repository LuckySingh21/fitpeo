import React from 'react'
import "./styles.css"
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

function Balance({title,value,percentage,change}) {
  return (
    <div className='card-container'>
        <div className='card-left-balance'>
            <AccountBalanceWalletRoundedIcon/>
        </div>
        <div className='card-right'>
            <p className='balance-title'>{title}</p>
            <p className='balance-value'>${value}k</p>
            <p className='balance-comment'><span className='balance-span'>{change}{percentage}%</span> this month</p>
        </div>
    </div>

  )
}

export default Balance