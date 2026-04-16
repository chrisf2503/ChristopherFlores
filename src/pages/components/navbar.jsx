import navStyle from '../../CSS/navbar.module.css';
import { Link } from 'react-router-dom'


const Navbar = () => {
  	return (
    	<nav className={navStyle.navbar}>
      		<div className={navStyle.title}>
    			<Link to="/" className={navStyle.profile_title}>Christopher Flores Profile</Link>
  			</div>
    		<div className={navStyle.links}>
    			<Link to ='/about' className={navStyle.about_link}>About</Link>
        		<div className={navStyle.about_link}>Projects</div>
        		<Link to ='/contact' className={navStyle.about_link}>Contact</Link>
      		</div>
    	</nav>
    );
};

export default Navbar ;
