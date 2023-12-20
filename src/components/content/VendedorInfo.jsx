import styles from './VendedorInfo.module.css';

export default function VendedorInfo ({vendedor}) {

  const nome = vendedor.nome;
  const nota = vendedor.nota;
  const email = vendedor.email;
  const telefone = vendedor.telefone;


  return (
    <>
      <h3>Informações do vendedor</h3>
      <div className={styles.cardVendedor}>
        <div className={styles.nomeNota}>
          <h4>{nome}</h4>
          <span className={styles.nota}>{nota}/5.0</span>
        </div>
        <p className={styles.titContato}>Contato</p>
        <p>{email}</p>
        <p>{telefone}</p>
      </div>
    </>
  );
}