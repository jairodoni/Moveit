
import axios from "axios";
import { createContext, ReactNode, useState } from "react";


interface FormLoginContextData {
  name: string;
  handleLogin: () => void;
  handleCreateAccount: () => void;
}

interface FormLoginProviderProps{
  children: ReactNode;
}


export const FormLoginContext = createContext({} as FormLoginContextData)

export function FormLoginProvider({ children }: FormLoginProviderProps) {
  const [name, setName] = useState('');

  function handleLogin(){
    axios.post('/api/account', { name: 'Irineu da Silva'})
  }

  function handleCreateAccount(){
    axios.post('/api/account', { name: 'Irineu da Silva'})
  }

    return (
        <FormLoginContext.Provider value={{ 
          name,
          handleLogin,
          handleCreateAccount
        }}>
        {children}
        </FormLoginContext.Provider>
    )
}