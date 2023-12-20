import styles from './ProdutosRelacionados.module.css'

export default function ProdutosRelacionados(props) {
  const produtosRel = props.produtos;

  return (
    <>
      <h3>Produtos Relacionados</h3>
      <div className={styles.cardProdutos}>
        {produtosRel.map(prodRel => (
        <div className={styles.card}>
          <img className={styles.imgProdRel} src={prodRel.img}/>
          <div className={styles.nomePreco}>
            <p>{prodRel.nome}</p>
            <p className={styles.precoProdRel}>R${prodRel.preco}</p>
          </div>
        </div>  
        ))}
      </div>
    </>
  )
}