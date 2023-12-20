import styles from "./Comentarios.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from '../Button/Button';

export default function Comentarios({ comentarios }) {
  return (
    <>
      <h3>Comentários</h3>
      { comentarios.map(coment => (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <AccountCircleIcon />
            <p className={styles.cardInfo}>{coment.nome}</p>
            <p className={styles.cardInfo}>{coment.nota}/5.0</p>
          </div>
          <p className={styles.cardInfo}>{coment.mensagem}</p>
          <div className={styles.cardFooter}>
            <p className={styles.cardInfo}>{coment.dataPublicacao}</p>
          </div>
        </div>
     )) }
      <div>
        <div className={styles.inputRadio}>
          <input type="radio" name="nota" /> 1
          <input type="radio" name="nota" /> 2
          <input type="radio" name="nota" /> 3 
          <input type="radio" name="nota" /> 4
          <input type="radio" name="nota" /> 5
        </div>
        <div>
          <input></input>
          <Button value="Enviar"/>
        </div>
      </div>
    </>
  )
}