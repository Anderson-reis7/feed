import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            autho="Anderson"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam esse atque harum id. Vitae eum labore voluptatibus placeat iure, fugit quam et neque aperiam perspiciatis cupiditate totam natus incidunt."
          />

          <Post
            autho="Camis"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam esse atque harum id. Vitae eum labore voluptatibus placeat iure, fugit quam et neque aperiam perspiciatis cupiditate totam natus incidunt."
          />
        </main>
      </div>
    </div>
  );
}
