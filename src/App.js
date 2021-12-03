import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/posts">Posts</Link> |{" "}
        <Link to="/second">Second</Link>
      </nav>
    </div>
  );
}

export default App;
