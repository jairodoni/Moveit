import Head from 'next/head';
import React from 'react';
import { FormLogin } from '../../components/FormLogin';
import styles from '../../styles/pages/Login.module.css'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Head>
          <title>Move.it  |  Login</title>
        </Head>
      <img src="background.png" alt="background"/>
      <FormLogin/>
    </div>
  )
}
