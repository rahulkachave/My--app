import React from 'react'
import { Link } from 'react-router-dom'

const SpringHistory = () => {
  return (
    
    <div>
        <header className='header'>
        <h2>this page is a spring boot History</h2>
      </header>
        <div className='teamjava'>
    <Link to={'/springBoot'}> <h4>spring Boot</h4></Link>
    <Link to={'/SpringHistory'}><h4>SpringHistroy</h4></Link>
    <Link to={'/SpringAnotation'}><h4>SpringAnnotation</h4></Link>
    </div>
    <article className='artical'>
<h2 className='h2headingtag'>Is Spring Boot History?</h2>

<p>Spring Framework 4.0 was released in December 2013.</p>
<p>Notable improvements in Spring 4.0 included support for Java SE (Standard Edition) 8, Groovy 2, some aspects of Java EE 7, 
 and WebSocket. Spring Boot 1.0 was released in April 2014.</p>
 
  </article>
  <button className='btnnext'><Link to={'/SpringAnotation'}><b>Next</b></Link></button>
  <button className='btnback'><Link to={'/springBoot'}> <b>Back</b></Link></button>

    
    </div>
  )
}

export default SpringHistory