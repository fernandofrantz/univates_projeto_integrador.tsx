import { ReactNode } from "react";
import { UserProvider } from "./User";
import { ObjectProvider } from "./Objects";
import { MaintenceProvider } from "./Maintences";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <ObjectProvider>
        <MaintenceProvider>{children}</MaintenceProvider>
      </ObjectProvider>
    </UserProvider>
  );
};
