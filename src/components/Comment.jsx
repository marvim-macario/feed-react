import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/marvim1990.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Vinicius</strong>
              <time title="07 de maio de 2023" dateTime="2023-05-07 21:42:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}