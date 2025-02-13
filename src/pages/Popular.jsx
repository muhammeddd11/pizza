import { useState } from 'react';
import styles from './Popular.module.css'
function Popular() {
  const [active,setActive] = useState(1);
  const titles=["Margherita Pizza","Mushroom Pizza","Pepperoni Pizza"];
  // const next = active>=titles.length?undefined:active+1;
  // const prev = active<=1?undefined:active-1;

  function handleNext(){
    if(active>=titles.length) return;
    setActive(active=>active+1);
  }
  function handlePrev(){
    if(active<=1) return;
    setActive(active=>active-1);
  }
  return (
    <section className={`${styles.popular} section`} id={styles.popular}>
      <div className={`${styles.popular__container} container grid`}>
        <div className={styles.popular__data}>
            <h2 className='section__title'>Discover <br/> Popular Orders</h2>
            <p className={styles.popular__description}>
              Select the best prepared and delicious flavors. 
              We have collected some popular recipes from around 
              the world for you to choose your favorite.
            </p>
        </div>
        <div className={styles.popular__cursole}>
          <img className={styles.popular__dish} src='popular-dish.png' alt="dish"/>
          <div>
            <article className={styles.popular__card}>
              {/* {prev&&
              <div className={styles.derived__prev}>
                <img src={`popular-${prev}.png`} alt={`popular-${active}}`} className={styles.derived__img}/>
              </div>} */}
              <button className={`${styles.btn__back} ${styles.btn}`} onClick={()=>handlePrev()}>
                  <svg className={`icon ${styles.icon__left}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z"></path></svg>
              </button>
              <img src={`popular-${active}.png`} alt={`popular-${active}}`} className={styles.popular__img}/>
              <h3 className={styles.popular__title}>{titles[active-1]}</h3>
              <button className={`${styles.btn__next} ${styles.btn}`} onClick={()=>handleNext()}>
                  <svg className={`icon ${styles.icon__right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path></svg>
              </button>
              {/* <div className={styles.derived__next}>
                {next&&<img src={`popular-${next}.png`} alt={`popular-${active}}`} className={styles.derived__img}/>}
              </div> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;