import React from 'react'
import { Link } from 'react-router-dom'

const SpringAnotation = () => {
  return (
    <div> <header className='header'>
    <h2>this page is a Spring boot annotation</h2>
  </header>
    <div className='teamjava'>
<Link to={'/springBoot'}> <h4>spring Boot</h4></Link>
<Link to={'/SpringHistory'}><h4>SpringHistroy</h4></Link>
<Link to={'/SpringAnotation'}><h4>SpringAnnotation</h4></Link>
</div>
<article className='artical'>
    <h2 className='h2headingtag'>Spring Annotation</h2>
    <h3><p>Spring Annotations are a set of metadata tags that can be added to Java classes and methods to provide additional 
        information to the Spring framework.</p>
        <p> These annotations help to configure various aspects of a Spring application, such as dependency injection, transaction management, MVC controllers, and security.</p></h3>
<p><b>@Component: </b>This annotation is used to mark a class as a Spring-managed bean.</p><p> It tells Spring that this class
     should be instantiated and managed by the Spring container, and that other classes can use it by injecting it as a dependency.</p>
<p><b>@Autowired:</b> This annotation is used to inject a dependency into a Spring-managed bean. When Spring encounters this annotation, it will automatically look for a bean of the 
    same type and inject it into the class. </p>
    <p><b>@Controller:</b> This annotation is used to mark a class as a Spring MVC controller. It tells Spring that this class will handle incoming
         HTTP requests and produce an HTTP response.</p>
         <p><b>@RequestMapping:</b> This annotation is used to map incoming HTTP requests to methods in a Spring MVC controller. It allows you to define the URL path and HTTP 
            method that the method will handle.</p>
            <p><b>@Repository:</b> This annotation is used to mark a class as a data access layer component. It tells Spring that this class contains database access
                 logic and should be managed as a bean.</p>
</article>
<button className='btnback'><Link to={'/SpringHistory'}><b>Back</b></Link></button>
</div>
  )
}

export default SpringAnotation