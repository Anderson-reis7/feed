import styles from "./Header.module.css";
import logoFeed from "../assets/feed-logo.svg";

export function Header(){
  return (
    <header className={styles.header}>
      <img src={logoFeed} alt="logo da pagina" />
    </header>
  )
}