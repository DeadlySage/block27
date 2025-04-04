import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// import components here
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        <SignUpForm token={token} setToken={setToken} />
      </div>
      <div className="pt-3">
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
