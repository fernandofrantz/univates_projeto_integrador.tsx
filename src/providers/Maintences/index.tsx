import { createContext, ReactNode, useContext, useState } from "react";

interface MaintenceData {
  tool: string;
  discription: string;
}

interface MaintenceDataProps {
  children: ReactNode;
}

interface MaintenceDataProvider {
  maintence: object;
  setMaintence: (tool: MaintenceData) => void;
}

const MaintenceContext = createContext<MaintenceDataProvider>(
  {} as MaintenceDataProvider
);

export const MaintenceProvider = ({ children }: MaintenceDataProps) => {
  const [maintence, setMaintence] = useState<MaintenceData>(
    {} as MaintenceData
  );

  return (
    <MaintenceContext.Provider value={{ maintence, setMaintence }}>
      {children}
    </MaintenceContext.Provider>
  );
};

export const useMaintence = () => {
  useContext(MaintenceContext);
};
