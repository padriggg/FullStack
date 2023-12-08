import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import "./style.css";
import UserList from "./pages/Home/getUser.jsx";
import CreateUserForm from "./pages/Home/createUser.jsx";

export function App() {
  return (
    <LocationProvider>
      <div>
        user List
        <UserList />
      </div>
      <br></br>
      <div>
        create User
        <CreateUserForm />
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
