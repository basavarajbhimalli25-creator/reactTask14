import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Redux User Management</h1>
        <p>
          Manage user details with Redux Toolkit
        </p>
      </header>

      <main className="main-content">
        <ComponentA />
        <ComponentB />
      </main>
    </div>
  );
}

export default App;