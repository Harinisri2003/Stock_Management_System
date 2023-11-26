import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home-body'>
        <div className='home'>
    <div className='home_container'>
     <img className='home_image' src='https://www.deskera.com/blog/content/images/2021/06/InventoryManagement_Hero@3x.png' alt='google'></img>
     </div>
     </div>
     <div className='home-in'>
     <div className='home-intro'>
     <h1 className='home-intro-1'>Inventory management software designed for Indian businesses</h1>
     <p className='home-intro-2'>Manage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations.</p>
     <button className='btn-signup'>Sign up, It's free</button>
     </div>
     <div className='home-download'>
       <div className='home-dwn'> <h3>Download our mobile app for free</h3></div>
       <div className='home-img'><span><img src='https://www.zoho.com/inventory/images/in-images/appstore.png'></img></span><span><img src='https://www.zoho.com/inventory/images/in-images/playstore.png'></img></span></div>
     </div>
     </div>
    </div>
  )
}

export default Home