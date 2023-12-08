// components/UserList.js
import { useState, useEffect } from "preact/hooks";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users"); // Pfad zu deinem Express-Server
        const respData = await response.json();
        console.log("Received data :", respData);
        if (Array.isArray(respData.data)) {
          setUsers(respData.data);
        } else {
          console.error("Received data is not an array:", respData);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Leere Abhängigkeitsliste bedeutet, dass dies nur einmal beim Laden der Komponente aufgerufen wird

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.name}
            <br></br>
            {user.email}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
