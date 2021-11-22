import { createContext, ReactNode, useContext, useState } from "react";

interface ObjectData {
  tool: string;
  discription: string;
}

interface ObjectDataProps {
  children: ReactNode;
}

interface ObjectDataProvider {
  objects: object;
  setObjects: (tool: ObjectData) => void;
}

const ObjectContext = createContext<ObjectDataProvider>(
  {} as ObjectDataProvider
);

export const ObjectProvider = ({ children }: ObjectDataProps) => {
  const [objects, setObjects] = useState<ObjectData>({} as ObjectData);

  return (
    <ObjectContext.Provider value={{ objects, setObjects }}>
      {children}
    </ObjectContext.Provider>
  );
};

export const useObject = () => {
  useContext(ObjectContext);
};
