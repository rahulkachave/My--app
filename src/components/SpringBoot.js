import React from 'react'
import { Link } from 'react-router-dom'

const SpringBoot = () => {
  return (
    <div>
        <header className='header'>
        <h2>this page is a Spring boot</h2>
      </header>
        <div className='teamjava'>
    <Link to={'/springBoot'}> <h4>spring Boot</h4></Link>
    <Link to={'/SpringHistory'}><h4>SpringHistroy</h4></Link>
    <Link to={'/SpringAnotation'}><h4>SpringAnnotation</h4></Link>
    </div>

  <article className='artical'>
<h2 className='h2headingtag'>Is Spring Boot and Java same?</h2>
<p>Spring is a lightweight framework that offers an elaborate environment for robust programming and
 configuration model for Java-based applications.</p>
 <p>Spring Boot is a java-based framework that is best for
  creating stand-alone, Spring-based applications in a short period.</p>
  </article>
  <button className='btnnext'><Link to={'/SpringHistory'}><b>Next</b></Link></button>

    </div>
    
  )
}

export default SpringBoot