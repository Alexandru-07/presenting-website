import './App.css';
import NavbarComp from "./components/navbar/navbar-comp";
import BodyComp from "./components/body/body-comp";
import FooterComp from "./components/footer/footer-comp";

function App() {
  return (
      <>
        <nav className="navbar-element">
          <NavbarComp />
        </nav>

        <section className="body-element">
          <BodyComp />
        </section>

        <footer className="footer-element">
          <FooterComp />
        </footer>
      </>
  )
}

export default App;
