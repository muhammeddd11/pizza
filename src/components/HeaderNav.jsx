import { Link } from "react-router-dom";
import Button from "./Button"
import styles from './HeaderNav.module.css'
import {useState} from "react"
function HeaderNav() {
     const [isOpen, setIsOpen] = useState(false)   
        function handleOpen(){
            setIsOpen(st=>!st)
        }
  return (
    <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.nav__logo}>
        <img src="logo-pizza.svg" alt="Logo"/>
        Pizzat
        </Link>
        <div className={styles.nav__menu} id={styles.nav__menu}>     
            {isOpen&&<ul className={styles.nav__list}>
                <li><Link to="/" className={styles.nav__link} onClick={()=>handleOpen()}>Home</Link></li>
                <li><Link to="about" className={styles.nav__link} onClick={()=>handleOpen()}>About US</Link></li>
                <li><Link to="popular" className={styles.nav__link} onClick={()=>handleOpen()}>Popular</Link></li>
                <li><Link to="recipe" className={styles.nav__link} onClick={()=>handleOpen()}>Recipe</Link></li>
                <li><Link to="product" className={styles.nav__link} onClick={()=>handleOpen()}>Product</Link></li>
                <li><Link to="contactus" className={styles.nav__link} onClick={()=>handleOpen()}>Contact</Link></li>
            </ul>}
            {isOpen?<div className={styles.nav__close}>
             <Button onClick={handleOpen}><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg></Button>
             
            </div>:
        <div className={styles.nav__toggle} id={styles.nav__toggle}>
        <Button onClick={handleOpen}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon"><path d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13Z"></path></svg>
        </Button>
        </div>}
        </div> 
      </nav>
  );
}

export default HeaderNav;