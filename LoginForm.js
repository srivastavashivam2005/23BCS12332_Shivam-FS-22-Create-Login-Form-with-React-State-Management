import React, { useState } from "react";

function LoginForm() {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!username || !password) {
      setError("⚠️ Both fields are required!");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    setError(""); // Clear error if all fields filled
    alert(`Login submitted for ${username}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
