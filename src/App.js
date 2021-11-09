
import './App.css';
import ProfilePicture from "./components/Profile/ProfilePhoto.js";
import Fullname from "./components/Profile/FullName.js";
import Address from "./components/Profile/Address.js";

function App() {
  return (
    <div className="App">
      <div className="card">
        <ProfilePicture />
        <Fullname />
        <Address />
      </div>
    </div>
  );
}

export default App;
