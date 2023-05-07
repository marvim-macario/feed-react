import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/SideBar'

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author= "Marcos" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis quod placeat dolore laboriosam alias possimus expedita ea quae mollitia, dicta voluptas ullam qui architecto vitae dolor voluptatum delectus ipsa?"
          />
          <Post 
            author= "Zé" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis quod placeat dolore laboriosam alias possimus expedita ea quae mollitia, dicta voluptas ullam qui architecto vitae dolor voluptatum delectus ipsa?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
