import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  // store user data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // api
  const URL = "https://fsa-jwt-practice.herokuapp.com";

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${URL}/signup`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();

      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <form className="card py-3" onSubmit={handleSubmit}>
        <h2 className="mb-3 text-center">
          Sign Up
          {error && <p>{error}</p>}
        </h2>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email Address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="mt-3 text-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
