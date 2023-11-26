import React from 'react'
import './Pricing.css'
import Product from '../Products/Product'
function Pricing() {
  return (
    <div className='pricing'>
        <h1 className='pri-h1'>Flexible and affordable.</h1>
        <p className='pri-p'>Scales with your business.</p>
         <div className='home_row'>
        <Product id={1} title='STANDARD' price={12999} image='https://f.hubspotusercontent40.net/hubfs/120299/Product-pricing%20FEATURE%20(1)-1.jpg?width={width}&name=Product-pricing%20FEATURE%20(1)-1.jpg' ratings={3}/>
        <Product id={2} title='PROFESSIONAL' price={26000} image='https://f.hubspotusercontent40.net/hubfs/120299/Product-pricing%20FEATURE%20(1)-1.jpg?width={width}&name=Product-pricing%20FEATURE%20(1)-1.jpg' ratings={4}/>
     </div>
     <div className='home_row'>
     <Product id={3} title='PREMIUM' price={45000} image='https://f.hubspotusercontent40.net/hubfs/120299/Product-pricing%20FEATURE%20(1)-1.jpg?width={width}&name=Product-pricing%20FEATURE%20(1)-1.jpg' ratings={5}/>
     <Product id={4} title='ENTERPRISE' price={89999} image='https://f.hubspotusercontent40.net/hubfs/120299/Product-pricing%20FEATURE%20(1)-1.jpg?width={width}&name=Product-pricing%20FEATURE%20(1)-1.jpg' ratings={5}/>
     <Product id={5} title='FREE' price={0} image='https://f.hubspotusercontent40.net/hubfs/120299/Product-pricing%20FEATURE%20(1)-1.jpg?width={width}&name=Product-pricing%20FEATURE%20(1)-1.jpg' ratings={5}/>
     </div>
    
    </div>
  )
}

export default Pricing