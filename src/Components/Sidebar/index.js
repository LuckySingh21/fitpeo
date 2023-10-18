import React from 'react'
import "./styles.css"
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TokenRoundedIcon from '@mui/icons-material/TokenRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-heading'>
        
                    <div>
                    <TokenRoundedIcon/>
                    </div>
                    <p>Dashboard</p>
                
        </div>
        <div className='sidebar-contents'>
            <div className='contents'>
                <div className='contents-left'>
                    <div>
                    <LeaderboardSharpIcon/>
                    </div>
                    <p>Dashboard</p>
                </div>
                <div>
                    {/* <KeyboardArrowRightRoundedIcon/> */}
                </div>
            </div>
            <div className='contents'>
                <div className='contents-left'>
                <div>
                    <ViewInArRoundedIcon/>
                    </div>
                    <p>Products</p>
                </div>
                <div>
                <KeyboardArrowRightRoundedIcon/>
                </div>
            </div>
            <div className='contents'>
                <div className='contents-left'>
                <div>
                    <PersonOutlineRoundedIcon/>
                    </div>
                    <p>Customers</p>
                </div>
                <div>
                <KeyboardArrowRightRoundedIcon/>
                </div>
            </div>
            <div className='contents'>
                <div className='contents-left'>
                <div>
                    <AccountBalanceWalletRoundedIcon/>
                    </div>
                    <p>Income</p>
                </div>
                <div>
                <KeyboardArrowRightRoundedIcon/>
                </div>
            </div>
            <div className='contents'>
                <div className='contents-left'>
                <div>
                    <PercentRoundedIcon/>
                    </div>
                    <p>Promote</p>
                </div>
                <div>
                <KeyboardArrowRightRoundedIcon/>
                </div>
            </div>
            <div className='contents'>
                <div className='contents-left'>
                <div>
                    <HelpOutlineRoundedIcon/>
                    </div>
                    <p>Help</p>
                </div>
                <div>
                <KeyboardArrowRightRoundedIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar