import { Link } from "react-router-dom";

function Second() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/object">nosi</Link> |{" "}
        <Link to="/second">nosi2</Link>
      </nav>
    </div>
  );
}

export default Second;
