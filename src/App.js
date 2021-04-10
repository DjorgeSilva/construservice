
import { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Nav } from './components/Nav'
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home/index";

function App() {

  const theme = {
    primary_color: "#000",
    secundary_color: "#fff",
    ternary_color: "#F5C32E",
    font_color: "#333",
    font_padrao: "Roboto, sans-serif"
  };

  const [isOpenAtendOnline, setisOpenAtendOnline] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router >
    )
  }


  return (

    <Router>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

          <Footer />
        </ThemeProvider>
      </ScrollToTop>
    </Router>

  );
}

export default App;
