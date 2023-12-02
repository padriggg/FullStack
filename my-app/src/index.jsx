import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index.jsx";

import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Route path="/" component={Home} />
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
