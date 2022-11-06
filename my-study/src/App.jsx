import Header from "./components/Header";
import Bio from "./components/Bio";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <Header>Meu pratos favoritos!<Header> */}
      <Header title="Minha comunidade favorita!" />
      <Bio />
      <Cards />
      <Footer description="Feito com ♡ por Paula Eliege, e todos os direitos são reservados." />

    </div>
  );
}

export default App;
