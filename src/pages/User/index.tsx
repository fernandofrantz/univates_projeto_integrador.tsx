import { useState } from "react";
import { useUser } from "../../providers/User";

export const User = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [business, setBusiness] = useState("");

  const newUser = {
    name: name,
    adress: adress,
    business: business,
  };

  console.log(newUser)

  return (
    <>
      <h1>User</h1>
      <section>
        <input
          placeholder="Complete name"
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <input
          placeholder="Adress"
          type="text"
          value={adress}
          onChange={(evt) => setAdress(evt.target.value)}
        />
        <select
          placeholder="Individual or corporate"
          value={business}
          onChange={(evt) => setBusiness(evt.target.value)}
        >
          <option></option>
          <option value="individual">Individual</option>
          <option value="corporation">Corporation</option>
        </select>
        <button>register</button>
      </section>
    </>
  );
};
