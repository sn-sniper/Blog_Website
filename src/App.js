import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
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
          <Link to="/"> Home </Link>

        {!isAuth ? (
            <Link to="/login"> Login </Link>
        ) : (
          <>
                <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut} className="Logout"> Log Out</button>
          </>
        )}
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<Create isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/contact-us" element={<Contact isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;