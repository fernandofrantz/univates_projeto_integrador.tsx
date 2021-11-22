import { useState } from "react";
import { useTools } from "../../providers/Objects";

export const Maintence = () => {
  const [tool, setTool] = useState("");
  const [discription, setDiscription] = useState("");

  const { maintences, registerMaintence } = useTools();

  const newMaintence = {
    tool: tool,
    discription: discription,
  };

  return (
    <>
      <h1>Maintences</h1>
      <section>
        <input
          placeholder="Object name"
          type="text"
          value={tool}
          onChange={(evt) => setTool(evt.target.value)}
        />
        <input
          placeholder="Discription"
          type="text"
          value={discription}
          onChange={(evt) => setDiscription(evt.target.value)}
        />
        <button type="button" onClick={() => registerMaintence(newMaintence)}>
          register object
        </button>
      </section>
      <section>
        <ul style={{ listStyle: 'none' }}>
          {maintences.length === 1 ? (
            maintences.map((item) => (
              <li>
                <h3>{item.tool}: </h3>
                <p>{item.discription}</p>
              </li>
            ))
          ) : (
            <h4>you don't have any maintences registered yet</h4>
          )}
        </ul>
      </section>
    </>
  );
};
