import Button from '../components/Button';
import styles from './Product.module.css'

const products = [{name:'Vegetarian \n  Pizza',price:'$15'},{name:'Italian \n  Pizza',price:'$10'},{name:'Mushroom \n Pizza',price:'$17'},{name:'Margherita \n  Pizza',price:'$12'},{name:'Pepperoni \n  Pizza',price:'$10'}]

function Products() {
  return (
    <section className={`section`}>
      <h2 className='section__title'>The Most <br/> Devoured Pizzas</h2>
      <div className={`${styles.product__container} container grid`}>
        
        {products.map((product,i)=><article className={styles.product__card} key={i}>      
          <img src={`product-${i+1}.png`} alt={product.name} className={styles.product__img}/>

          <h3 className={styles.product__name}>{product.name}</h3>
          <span className={styles.product__price}>{product.price}</span>
          <Button className={styles.product__btn}>Order</Button>
        </article>)}

      </div>
    </section>
  );
}

export default Products;