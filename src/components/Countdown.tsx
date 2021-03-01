import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export function Countdown() {
  const { 
    minutes,
    seconds,
    percentTime,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown 
  } = useContext(CountdownContext)
  console.log(percentTime);

  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
          <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>


    { hasFinished ? (
      <div className={styles.barButton}>
        <button 
         disabled
         className={styles.countdownButton} 
        >
         Ciclo encerrado
         <CheckCircleIcon style={{ color: "var(--green)", marginLeft: "0.5rem" }}/>
        </button>
         <div className={styles.barButton}>
            <div style={{ width: `${percentTime}%` }}/>
          </div>
       </div>
    ) : (
      <>
        { isActive ? (
          <div className={styles.barButton}>
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <CloseIcon style={{ fontSize: "1.9rem", marginLeft: "0.5rem" }}/>
            </button>
            <div className={styles.barButton}>
              <div style={{ width: `${percentTime}%` }}/>
            </div>
          </div>
        ):(
          <div className={styles.barButton}>
            <button 
              type="button" 
              className={styles.countdownButton} 
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <PlayCircleFilledIcon style={{ fontSize: "1.9rem", marginLeft: "0.5rem" }}/>
            </button>
            <div className={styles.barButton}>
              <div style={{ width: `${percentTime}%` }}/>
            </div>
          </div>
        )}
      </>
    )}




    </div>
  );
}