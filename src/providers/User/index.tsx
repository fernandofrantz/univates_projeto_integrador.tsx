import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  tool: string;
  discription: string;
}

interface UserDataProps {
  children: ReactNode;
}

interface UserDataProvider {
  user: object;
  setUser: (tool: UserData) => void;
}

const UserContext = createContext<UserDataProvider>({} as UserDataProvider);

export const UserProvider = ({ children }: UserDataProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  useContext(UserContext);
};
