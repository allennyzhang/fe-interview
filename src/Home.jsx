import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <ul>
        <li>
          <Link to="/fe">{">> Frontend Questions"}</Link>
        </li>
        <li>
          <Link to="/js21">{">> JavaScript Question 21"}</Link>
        </li>
        <li>
          <Link to="/js22">{">> JavaScript Question 22"}</Link>
        </li>
        <li>
          <Link to="/react21">{">> React Question 21"}</Link>
        </li>
        <li>
          <Link to="/react31">{">> React Question 31"}</Link>
        </li>
      </ul>
    </div>
  );
}
