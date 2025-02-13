import { Link } from 'react-router-dom';
import styles from './Home.module.css'
function Home() {
  return (
    <section className={`${styles.home} section`} id={styles.home}>
      <div className={`${styles.home__container} grid container`}>
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>
              Crispy And <br/> Delicious Pizzas
            </h1>
            <p className={styles.home__description}>
              Order the best pizzas to end your hunger 
              and make your family moments more 
              memorable, place your order now.  
            </p>
            <Link to="products" className={`${styles.button} button`}>Order Pizza Now</Link>
            <img src="sticker-pizza.svg" className={styles.home__sticker_1} alt="home sticker"/>
            <img src="sticker-leaf.svg" className={styles.home__sticker_2} alt="home sticker"/>
          </div>
      </div>
      <div className={styles.home__img}>
          <img src="home-pizza.png" alt="home" className={`${styles.home__pizza}`}/>
          <img src="home-board.png" alt="home" className={`${styles.home__board}`}/>

          <img src="home-leaf-1.png" alt="home" className={`${styles.home__leaf_1} ${styles.home__ingredient}`}/>
          <img src="home-leaf-2.png" alt="home" className={`${styles.home__leaf_2} ${styles.home__ingredient}`}/>
          <img src="home-mushroom.png" alt="home" className={`${styles.home__mushroom} ${styles.home__ingredient}`}/>
          <img src="home-olive.png" alt="home" className={`${styles.home__olive} ${styles.home__ingredient}`}/>
          <img src="home-pepperoni.png" alt="home" className={`${styles.home__pepperoni} ${styles.home__ingredient}`}/>
          <img src="home-tomato.png" alt="home" className={`${styles.home__tomato} ${styles.home__ingredient}`}/>

      </div>
    </section>
  );
}

export default Home;