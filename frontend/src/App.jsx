import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import CreatePost from "./containers/CreatePost/CreatePost";
import Post from "./containers/Post/Post";
import EditPost from "./containers/EditPost/EditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/:id/edit' element={<EditPost />} />
      </Routes>
      <p style={{ textDecoration: "none", textAlign: "center" }}>
        Emily Dang © 2024
      </p>
    </Router>
  );
}

export default App;
