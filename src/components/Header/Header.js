import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
           <Link to="/"> <img className='logo' src='https://www.stockmanagementlabs.com/wp-content/uploads/edd/2018/08/multi-inventory-logo.png'></img> </Link>
            <div className='searchInput'><input placeholder='search FAQs' type='text' className='search_bar'></input>
            <SearchOutlinedIcon className='header_search_icon'/>
        </div>
        <div className='header_nav'>
           <Link to="/stock"><div className='headerOption'><span className='option_line_1'>Stock</span><span className='option_line_2'>Tracking</span></div></Link> 
           <Link to='/pricing'> <div className='headerOption'><span className='option_line_1'>Select</span><span className='option_line_2'>pricing</span></div> </Link>
           <Link to="/parties"> <div className='headerOption'><span className='option_line_1'>Add</span><span className='option_line_2'>Parties</span></div></Link>
            <Link to="/invoice">  <div className='headerOption'><span className='option_line_1'>Invoice &</span><span className='option_line_2'>Billing</span></div> </Link>
            <Link to='/login'> <div className='headerOption'><span className='option_line_1'>Dear customers</span><span className='option_line_2'>sign in</span></div></Link>
        </div>
    </div>
  )
}

export default Header