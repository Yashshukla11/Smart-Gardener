import { Routes, Route } from "react-router";
import { UserContextProvider } from "./Context/UserContext";
import { Landing } from "./Pages/Landing/Landing";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
