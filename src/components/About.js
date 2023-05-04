import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div >
      <div className='about'>
      <header className='header'>
        <h2>this is a bout page</h2>
      </header>
      <div className='teamjava'>
<Link to={'/Team'}> <h2>Go TO Team</h2></Link>
<Link to={'/Java'}><h2>Java</h2></Link>
</div>
<article className='artical'>
  <h2 className='h2headingtag' >what is Java</h2>
  <p>One design goal of Java is portability, which means that programs written for the Java platform must run similarly on any 
    combination of hardware and operating system with adequate run time support. This is achieved by compiling the Java language 
    code to an intermediate representation called Java bytecode, instead of directly to architecture-specific machine code. </p>
  <p>  Java bytecode instructions are analogous to machine code, but they are intended to be executed by a virtual machine (VM) written 
    specifically for the host hardware. </p>
  End-users commonly use a Java Runtime Environment (JRE) installed on their device for standalone Java applications or a web browser for Java applets.<p/>

<p>Standard libraries provide a generic way to access host-specific features such as graphics, threading, and networking.</p><p>

<p>The use of universal bytecode makes porting simple. However, the overhead of interpreting bytecode into machine instructions made interpreted programs
   almost always run more slowly than native executables. Just-in-time (JIT) compilers that compile byte-codes to machine code 
   during runtime were introduced from an early stage. Java's Hotspot compiler is actually two compilers in one;
    and with GraalVM (included in e.g. Java 11, but removed as of Java 16) allowing tiered compilation.[47] Java itself 
    is platform-independent and is adapted to the particular platform it is to run on by a Java virtual machine (JVM),
     which translates the Java bytecode into the platform's machine language.[48]</p></p>
</article>
    </div></div>
  )
}

export default About