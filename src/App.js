import "./App.css";
import Header from "./components/Header";
import DrawerAppBar from "./components/Header2";
import { Routes, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Checkout from "./components/Checkout";
import Posts from "./components/Posts";
import Album from "./components/Album";

function App() {
  return (
    <>
      {/* <DrawerAppBar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="posts" element={<Posts />} />
        <Route path="albums" element={<Album />} />
      </Routes>
    </>
  );
}

export default App;
