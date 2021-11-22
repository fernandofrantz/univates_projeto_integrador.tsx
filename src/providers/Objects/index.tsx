import { createContext, ReactNode, useContext, useState } from "react";

interface ToolsData {
  tool: string;
  discription: string;
}

interface ToolsDataProps {
  children: ReactNode;
}

interface ToolsDataProvider {
  tools: ToolsData[];
  registerTools: (tool: ToolsData) => void;
  maintences: ToolsData[]
  registerMaintence: (tool: ToolsData) => void;
}

const ToolsContext = createContext<ToolsDataProvider>(
  {} as ToolsDataProvider
);

export const ToolsProvider = ({ children }: ToolsDataProps) => {
  const [tools, setTools] = useState<ToolsData[]>([]);
  const [maintences, setMaintences] = useState<ToolsData[]>([]);
  

  const registerTools = (newObject: ToolsData) => {
    setTools([...tools, newObject])
  }
  const registerMaintence = (newObject: ToolsData) => {
    setMaintences([...maintences, newObject])
  }

  return (
    <ToolsContext.Provider value={{ tools, registerTools, maintences, registerMaintence }}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => useContext(ToolsContext);
