import { SettingsSystemDaydreamOutlined } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'axios';
import { FormEvent, useContext, useState } from 'react';
import { FormLoginContext, FormLoginProvider } from '../contexts/FormLoginContext';
import styles from '../styles/components/FormLogin.module.css'

export function FormLogin() {
  
  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    axios.post('/api/account', { name })
  }
  
  return (
    <FormLoginProvider>
      <div className={styles.formLogin}>
      <img src="logo-white.png" alt="logo"/>
      <strong>Bem-vindo</strong>
      <a>
        <img src="icons/github-icon.svg" alt="github-icon"/>
          Faça login com seu github para começar
      </a>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite seu nome aqui"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">
          <ArrowForwardIcon className="iconLogin" />
        </button>
      </form>
    </div>
  </FormLoginProvider>
  )
}