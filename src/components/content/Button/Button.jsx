import styles from './Button.module.css';

export default function Button({ value }) {
  return (
    <button className={styles.botao}>{value}</button>
  );
}