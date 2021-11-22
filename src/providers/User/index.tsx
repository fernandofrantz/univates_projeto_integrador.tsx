import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  name: string;
  adress: string
  business: string;
}

interface UserDataProps {
  children: ReactNode;
}

interface UserDataProvider {
  user: UserData[];
  registerUser: (newUserData: UserData) => void;
}

const UserContext = createContext<UserDataProvider>({} as UserDataProvider);

export const UserProvider = ({ children }: UserDataProps) => {
  
  const [user, setUser] = useState<UserData[]>([]);

  const registerUser = (newUserData: UserData) => {
    setUser([...user, newUserData])
  }

  return (
    <UserContext.Provider value={{ user, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  useContext(UserContext);
};
