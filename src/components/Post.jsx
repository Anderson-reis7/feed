import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img
            className={style.avatar}
            src="https://github.com/Anderson-reis7.png"
          />
          <div className={style.authorInfo}>
            <strong>Anderson Reis</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title="01 de dezembro as 09:58h" dateTime="2024-12-01 09:57:36">
          Publicado há 1h
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          👉{' '}<a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
