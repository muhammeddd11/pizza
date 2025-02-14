import styles from './Recipe.module.css'

const ingredients=[{ingredName:"flour",ingredDescrip:"The best wheat from the field for the best flour."},{ingredName:"meat",ingredDescrip:"The best fresh meats for your health."},{ingredName:"vegetables",ingredDescrip:"Vegetables full of the essence of nature and organic."},{ingredName:"sauces",ingredDescrip:"Add a touch of salsa to your life and it will taste better."},{ingredName:"cheese",ingredDescrip:"Indulge in cheese for a healthy future."}]

function Recipe() {
  return (
    <section className={`${styles.recipe} section`}>
        <h2 className="section__title">Fresh And <br/> Natural Ingredients</h2>
        <div className={`${styles.recipe__container} container grid`}>
            {ingredients.map(ingredient=>
            <div className={styles.recipe__ingredients} key={ingredient.ingredName}>
                <img src={`recipe-${ingredient.ingredName==="vegetables"?"tomato":ingredient.ingredName}.png`} alt={`${ingredient.ingredName}`} className={styles.recipe__img} />
                <div>
                    <h3 className={styles.recipe__name}>{ingredient.ingredName}</h3>
                    <p className={styles.recipe__description}>{ingredient.ingredDescrip}</p>
                </div>
            </div>)}
            <img src="recipe-img.png" alt="pizza" className={styles.recipe__img__pizza}/>
        </div>
    </section>
  );
}

export default Recipe;