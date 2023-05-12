import Navbar from "./Containers/Navbar/Navigation";
import Home from "./Home/Home";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Home />
    </RecoilRoot>
  );
}

export default App;
