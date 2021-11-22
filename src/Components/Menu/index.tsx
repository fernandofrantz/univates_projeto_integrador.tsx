import { useNavigate } from "react-router-dom";
import { BoxMenu } from "./styles";

export const Menu = () => {
  const navigate = useNavigate();

  const sendTo = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <BoxMenu>
        <button type="button" onClick={() => sendTo("/")}>
          Home
        </button>
        <button onClick={() => sendTo("user")}>Cadastro de clientes</button>
        <button onClick={() => sendTo("object_type")}>
          Cadastro de tipos de objetos
        </button>
        <button onClick={() => sendTo("objects")}>Cadastro de objetos</button>
        <button onClick={() => sendTo("maintence")}>
          Cadastro de manutenções
        </button>
      </BoxMenu>
    </>
  );
};