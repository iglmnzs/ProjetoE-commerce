import styles from './Perguntas.module.css';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Perguntas({ perguntas }) {
  return (
    <>
      <h3>Perguntas</h3>
      {perguntas.map(perg => (
        <div className={styles.boxPerguntas}>
          <div className={styles.boxNomeIcon}>
            <AccountCircleIcon />
            <p>{perg.nome}</p>
          </div>
          <p>{perg.pergunta}</p>
          <div className={styles.boxPergResp}>
            <p className={styles.titRespVendedor}>Resposta do vendedor:</p>
            <p>{perg.resposta ?? "Sem resposta"}</p>
          </div>
          <div className={styles.boxFooter}>
            <p>{perg.dataPublicacao}</p>
          </div>
        </div>
      ))}
    </>
  )
}