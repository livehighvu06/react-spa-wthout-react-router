import Link from "./conponents/Link";
import Route from "./routes/Route";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const App = () => {
  let pathTo = "";
  if (process.env.NODE_ENV !== "production") {
    pathTo = process.env.REACT_APP_TEST_PATH;
  } else {
    pathTo = process.env.REACT_APP_PATH;
  }
  return (
    <div>
      <Link to={pathTo}>Home</Link>
      <Link to={`${pathTo}about`}>About</Link>
      <Link to={`${pathTo}contact`}>Contact</Link>

      <div>
        <Route path={pathTo}>
          <Home />
        </Route>
        <Route path={`${pathTo}about`}>
          <About />
        </Route>
        <Route path={`${pathTo}contact`}>
          <Contact />
        </Route>
      </div>
    </div>
  );
};

export default App;
