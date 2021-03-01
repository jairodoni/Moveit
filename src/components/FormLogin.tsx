import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from '../styles/components/FormLogin.module.css'

export function FormLogin() {
  return (
    <div className={styles.formLogin}>
    <img src="logo-white.png" alt="logo"/>
    <strong>Bem-vindo</strong>
    <a>
      <img src="icons/github-icon.svg" alt="github-icon"/>
        Faça login com seu github para começar
    </a>
    
    <div >
      <input type="text" placeholder="Digite seu nome aqui"/>
      <button type="button">
        <ArrowForwardIcon className="iconLogin" />
      </button>
    </div>
  </div>
  )
}