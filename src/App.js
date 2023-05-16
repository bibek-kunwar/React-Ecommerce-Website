import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import './App.css';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "Liner-gradient(0deg,rgb(132 144 255) 100%)",
      shadow:
        "rgba(0,0,0,0.02)0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px opx 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media: {
      mobile: "768px",
      tab:"998px"
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyle />
          <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />

          </Routes>
          <Footer/>
        </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
