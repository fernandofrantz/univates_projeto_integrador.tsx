import { useState } from "react";
import { useToolsTypes } from "../../providers/Types";

export const ObjectType = () => {
  const [objectType, setObjectType] = useState("");
  const [objectTypeDiscription, setObjectTypeDiscription] = useState("");
  const [objectTypeValue, setObjectTypeValue] = useState("");

  const newToolType = {
    tool: objectType,
    discription: objectTypeDiscription,
    value: objectTypeValue,
  };

  const { toolsTypes, registerToolsTypes } = useToolsTypes();

  return (
    <>
      <h1>Types of objects</h1>
      <section>
        <input
          placeholder="Object name"
          type="text"
          value={objectType}
          onChange={(evt) => setObjectType(evt.target.value)}
        />
        <input
          placeholder="Discription"
          type="text"
          value={objectTypeDiscription}
          onChange={(evt) => setObjectTypeDiscription(evt.target.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={objectTypeValue}
          onChange={(evt) => setObjectTypeValue(evt.target.value)}
        />
        <button type="button" onClick={() => registerToolsTypes(newToolType)}>
          register object
        </button>
      </section>
      <section>
        <ul style={{ listStyle: "none" }}>
          {toolsTypes &&
            toolsTypes.map((item) => (
              <li>
                <p>{`${item.tool}: ${item.discription}, valor: ${item.value}`}</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
