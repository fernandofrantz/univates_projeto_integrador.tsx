import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  name: string;
  adress: string;
  business: string;
}

interface UserDataProps {
  children: ReactNode;
}

interface UserDataProvider {
  user: UserData[];
  registerUser: (newUserData: UserData) => void;
  deleteUser: (givenName: string) => void;
  updateUser: (userToUpdate: string, infosToUpdate: UserData) => void
}

const UserContext = createContext<UserDataProvider>({} as UserDataProvider);

export const UserProvider = ({ children }: UserDataProps) => {
  const [user, setUser] = useState<UserData[]>([]);

  const registerUser = (newUserData: UserData) => {
    setUser([...user, newUserData]);
  };

  const deleteUser = (givenUser: string) =>
    setUser(user.filter((item) => item.name !== givenUser));

  const updateUser = (userToUpdate: string, infosToUpdate: UserData) => {
    const userEdit = user.find((item) => item.name === userToUpdate);
    deleteUser(userToUpdate);
    console.log(userEdit)
  };

  return (
    <UserContext.Provider value={{ user, registerUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
