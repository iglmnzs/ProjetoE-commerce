import styles from "./MenuGlobal.module.css";
import { useState } from 'react';

function MenuGlobal () {

  const [menuAberto, setMenuAberto] = useState(true);
  const [icon, setIcon] = useState('X');
  
  const toggleMenuGlobal = () => {
    setMenuAberto(!menuAberto);
    setIcon(menuAberto ? '=' : 'X');
  }
  
  return (
    <nav className={`${styles.menuNav} ${menuAberto ? "" : styles.expandeColapsa}`}>
      <a className={`${styles.itemNav} ${styles.itemNavHome}`}>Minha loja</a>
      <a className={styles.itemNav}>Produtos</a>
      <a className={styles.itemNav}>Serviços</a>
      <a className={styles.itemNav}>Sobre nós</a>
      <a className={styles.itemNav}>Contatos</a>
      <a className={`${styles.itemNav} ${styles.itemNavToggle}`} onClick={toggleMenuGlobal}>
        {icon}
      </a>
    </nav>
  )
}

export default MenuGlobal;

