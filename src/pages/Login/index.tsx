import React from 'react';
import { FormLogin } from '../../components/FormLogin';
import styles from '../../styles/pages/Login.module.css'



export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <img src="background.png" alt="background"/>
      <FormLogin/>
    </div>
  )
}
