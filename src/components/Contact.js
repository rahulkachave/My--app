import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
   
    <div >
  
    <header className='header'>
        <h2>this is a Contact page</h2>
      </header>
   
    
    <div className='teamjava'>
<Link to={'/springBoot'}> <h4>spring Boot</h4></Link>
<Link to={'/SpringHistory'}><h4>SpringHistroy</h4></Link>
<Link to={'/SpringAnotation'}><h4>SpringAnnotation</h4></Link>
</div>
<div>
<article className='artical'>
      <h2 className='h2headingtag'>Is Spring Boot a backend?</h2>
<p>Spring Boot is a backend framework that has become a major player in the enterprise Java ecosystem. 
It lets Java developers start building web applications quickly, without fuss.</p></article>
</div></div>
  )

}

export default Contact