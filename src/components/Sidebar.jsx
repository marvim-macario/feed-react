import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>

      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=500"  />

      <div className={styles.profile}>
        
        <img className={styles.avatar} src="https://github.com/marvim1990.png" />

        <strong>Marcos Vinicius</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}