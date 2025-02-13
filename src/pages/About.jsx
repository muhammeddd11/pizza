import { Link } from 'react-router-dom';
import styles from './About.module.css'
function About() {
  return (
    <section className={`${styles.about} section`} id={styles.id}>
      <div className={`${styles.about__container} container grid`}>
        <div className={styles.about__data}>
            <h2 className="section__title">Learn More About <br/> Our History</h2>
            <p className={styles.about__description}>
            The secret to success is the best ingredients 
            to make a better pizza. Today we strive for 
            perfection, just as we have been doing for 15 years 
            when we first opened the pizzeria in Lima - Peru.
            </p>
            <Link to="/popular" className={`${styles.button} button`}>
              The Best Pizzas
            </Link>
            <img src="sticker-cheese.svg" alt="cheese logo"
            className={styles.about__sticker}/>
        </div>
        <img src="about-img.png" alt='' className={styles.about__img}/>
      </div>
    </section>
  );
}

export default About;