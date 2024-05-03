import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import logo from "./img/logo.png"

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="nav-links">
          <Link to="/Blog_Website/"> Home </Link>

        {!isAuth ? (
            <Link to="/Blog_Website/login"> Login </Link>
        ) : (
          <>
                <Link to="/Blog_Website/createpost"> Create Post </Link>
            <button onClick={signUserOut} className="Logout"> Log Out</button>
          </>
        )}</div>
      </nav>
      <Routes>
        <Route path="/Blog_Website/" element={<Home isAuth={isAuth} />} />
        <Route path="/Blog_Website/createpost" element={<Create isAuth={isAuth} />} />
        <Route path="/Blog_Website/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;