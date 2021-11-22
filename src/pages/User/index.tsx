import { posix } from "path";
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

  const [isOpen, setIsOpen] = useState(false);
  const [userToBeEdited, setUserToBeEdited] = useState("");

  const { user, registerUser, deleteUser, updateUser } = useUser();

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
        <button type="button" onClick={() => registerUser(newUser)}>
          register
        </button>
      </section>

      {isOpen && (
        <>
          <h2>Edit user</h2>
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
            <button type="button" onClick={() => updateUser(userToBeEdited, newUser)}>
              edit user
            </button>
            <button onClick={() => setIsOpen(false)}>close</button>
          </section>
        </>
      )}

      <section>
        <ul style={{ listStyle: "none" }}>
          {user &&
            user.map((person, index) => (
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px",
                  border: "2px solid black",
                }}
                key={index}
              >
                <h3>Name: {person.name}</h3>
                <h4>Company or Indivudual: {person.business}</h4>
                <h4>Adress: {person.adress}</h4>
                <button onClick={() => deleteUser(person.name)}>
                  delete user
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setUserToBeEdited(person.name);
                  }}
                >
                  edit user
                </button>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
