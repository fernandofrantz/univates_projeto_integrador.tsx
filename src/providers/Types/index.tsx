import { createContext, ReactNode, useContext, useState } from "react";

interface ToolsTypesData {
  tool: string;
  discription: string;
  value: string;
}

interface ToolsTypesDataProps {
  children: ReactNode;
}

interface ToolsTypesDataProvider {
  toolsTypes: ToolsTypesData[];
  registerToolsTypes: (tool: ToolsTypesData) => void;
}

const ToolsTypesContext = createContext<ToolsTypesDataProvider>(
  {} as ToolsTypesDataProvider
);

export const ToolsTypesProvider = ({ children }: ToolsTypesDataProps) => {
  const [toolsTypes, setToolsTypes] = useState<ToolsTypesData[]>([]);

  const registerToolsTypes = (newToolsType: ToolsTypesData) => {
    setToolsTypes([...toolsTypes, newToolsType])
  }

  return (
    <ToolsTypesContext.Provider value={{ toolsTypes, registerToolsTypes }}>
      {children}
    </ToolsTypesContext.Provider>
  );
};

export const useToolsTypes = () => useContext(ToolsTypesContext);
