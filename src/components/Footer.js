import { NavLink } from "react-router-dom";




function Footer(){ //this one is function
    return(
        <div className="Footer">
            
        <NavLink to={'/app'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/details'}>Details</NavLink>
        <NavLink to={'/students'}>Students</NavLink>
        
        </div>
    )
}
export default Footer; 