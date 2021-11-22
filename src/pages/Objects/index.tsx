import { useState } from "react";
import { useTools } from "../../providers/Objects";

export const Objects = () => {
  const [objectName, setObjectName] = useState("");
  const [objectDiscription, setObjectDiscription] = useState("");

  const newObject = {
    tool: objectName,
    discription: objectDiscription,
  };

  const { tools, registerTools } = useTools();

  return (
    <>
      <h1>Objects</h1>
      <section>
        <input
          placeholder="Object name"
          type="text"
          value={objectName}
          onChange={(evt) => setObjectName(evt.target.value)}
        />
        <input
          placeholder="Discription"
          type="text"
          value={objectDiscription}
          onChange={(evt) => setObjectDiscription(evt.target.value)}
        />
        <button type="button" onClick={() => registerTools(newObject)}>
          register object
        </button>
      </section>
      <section>
        <ul style={{ listStyle: 'none' }}>
          {tools &&
            tools.map((item) => (
              <li>
                <h3>{item.tool}: </h3>
                <p>{item.discription}</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
