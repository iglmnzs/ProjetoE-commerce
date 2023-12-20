import styles from "./App.module.css";
import Header from "./components/header/Header";
import InfoProdutoPage from "./pages/InfoProdutoPage";
import Alert from "./components/assets/Alert";

import { BaseButton } from './components/assets/Componentes';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <InfoProdutoPage />
      </main>
    </>
  );
}
