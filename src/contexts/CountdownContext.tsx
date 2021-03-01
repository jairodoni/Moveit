import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number,
  seconds: number,
  percentTime: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountdown: () => void,
  resetCountdown: () => void,
}

interface CountdownProviderProps{
  children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)
  
  const [ time, setTime ] = useState(25 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished  ] = useState(false);
  const [ percentTime, setPercentTime ] = useState(0);
  const [ totalTime, setTotalTime ] = useState(1500);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const percent = (totalTime * 100) / 1500;
    
  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time -1);
        setTotalTime(totalTime -1);
        setPercentTime(100 - percent);
      }, 1000)
    }else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  
  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
    setTotalTime(1500);
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      percentTime,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}