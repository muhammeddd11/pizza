import styles from './Button.module.css'
//eslint-disable-next-line
function Button({type,children,onClick}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;