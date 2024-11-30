import { Post } from "./Post"
import './style.css';

export function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Post
        autho="Anderson"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam esse atque harum id. Vitae eum labore voluptatibus placeat iure, fugit quam et neque aperiam perspiciatis cupiditate totam natus incidunt."
      />

      <Post
        autho="Camis"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam esse atque harum id. Vitae eum labore voluptatibus placeat iure, fugit quam et neque aperiam perspiciatis cupiditate totam natus incidunt."
      />
    </div>
  );
}


