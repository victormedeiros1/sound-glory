import { useState } from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Playlist from "./components/Playlist";
import Sidebar from "./components/Sidebar";
import "./assets/css/index.css";

const App = () => {
  const [open, setOpen] = useState(false);

  // FIX IN VIEWPORT TO MOBILE SCREENS
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--resize-for-mobile", `${vh}px`);

  return (
    <Container>
      <Sidebar open={open} setOpen={setOpen} />
      <Playlist />

      <Modal open={open} setOpen={setOpen} />
    </Container>
  );
};

export default App;
