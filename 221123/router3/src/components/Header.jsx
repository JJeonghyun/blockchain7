import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="login">LogIn</Link> |
      <Link to="log/in">Log in 2</Link>| <Link to={"log/out"}>Log Out 2</Link>
      {/* a 태그 대신 사용하는 Link
      a 태그는 내부가 아닌 외부 페이지로 이동할 때 사용 한다. localhost -> naver.com
      */}
    </div>
  );
}
export default Header;
