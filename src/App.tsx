import './assets/css/index.css';
import Container from './components/Container';
import Playlist from './components/Playlist';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Playlist />
    </Container>
  );
};

export default App;
