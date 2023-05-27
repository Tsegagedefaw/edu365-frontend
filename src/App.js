import logo from './logo.svg';
import './App.css';

import TopHeader from './components/top header/topHeader'
import MainHeader from './components/main header/mainHeader'
import HeaderNav from "./components/header nav/headerNav"
import "./style/css/bootstrap.min.css"
import "./style/css/animate.css"
import "./style/css/fonts.css"
// import "./style/css/font-awesome.css"
import "./style/css/nice-select.css"
// import "./style/css/settings.css"
import "./style/css/book.css"
import "./style/css/swiper.css"
import "./style/css/venobox.css"
import "./style/css/flaticon.css"
import "./style/css/owl.carousel.css"
import "./style/css/owl.theme.default.css"
import "./style/css/style.css"
import "./style/css/responsive.css"

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MainHeader/>
      <HeaderNav/>
    </div>
  );
}

export default App;
