import navStyle from '../../CSS/navbar.module.css';


const Navbar = () => {
  	return (
    	<div className={navStyle.navbar}>
      		<div className={navStyle.title}>
    			<div className={navStyle.profile_title}>Christopher Flores Profile</div>
  			</div>
    		<div className={navStyle.links}>
    			<div className={navStyle.about_link}>About</div>
        		<div className={navStyle.about_link}>Projects</div>
        		<div className={navStyle.about_link}>Contact</div>
      		</div>
    	</div>
    );
};

export default Navbar ;
