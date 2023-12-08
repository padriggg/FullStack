import { useState } from "preact/hooks";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      console.log(data);
      // Hier kannst du die Antwort verarbeiten
    } catch (error) {
      console.error("Fehler beim Senden der Daten:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onInput={(e) =>
          setName(
            // @ts-ignore
            e.target.value
          )
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onInput={(e) =>
          setEmail(
            // @ts-ignore
            e.target.value
          )
        }
      />
      <button onClick={handleSubmit}>Benutzer erstellen</button>
    </div>
  );
};

export default CreateUserForm;
