import { ReactNode } from "react";
import { UserProvider } from "./User";
import { ToolsProvider } from "./Objects";
import { ToolsTypesProvider } from "./Types";
interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <ToolsTypesProvider>
        <ToolsProvider>
          <>{children}</>
        </ToolsProvider>
      </ToolsTypesProvider>
    </UserProvider>
  );
};
