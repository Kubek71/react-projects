import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./Components/Styles/Global";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Diary from "./Components/Diary";
import Recipes from "./Components/Recipes"
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";
import { Container } from "./Components/Styles/Container";
import { useState } from "react";
import { auth } from './Helpers/FirebaseConfig'


function App() {
    // array of choosed products and servings 
  const [productList, setProductList] = useState([]);
  const [isMealSubmited, setIsMealSubmited] = useState(false);
  const [headerHeight, setHeaderHeight] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <GlobalStyles/>
      {
        isUserLoggedIn === false && 
        <LandingPage setIsUserLoggedIn={setIsUserLoggedIn} isUserLoggedIn={isUserLoggedIn}/>
      }
      {
        isUserLoggedIn === true &&
        <BrowserRouter>
        <Header setHeaderHeight={setHeaderHeight} headerHeight={headerHeight}/>
          <Routes>
            <Route path="/Diary" element={<Diary productList={productList} isMealSubmited={isMealSubmited}/>}/>
            <Route path="/Recipes" element={<Recipes/>}/>
            <Route path="/" element={<HomePage productList={productList} setProductList={setProductList} setIsMealSubmited={setIsMealSubmited} isMealSubmited={isMealSubmited}/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
