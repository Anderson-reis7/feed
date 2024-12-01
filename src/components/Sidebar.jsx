import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/Anderson-reis7.png"
        />
        <strong>Anderson Reis</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
