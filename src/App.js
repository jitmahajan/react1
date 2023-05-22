import Header from "./pages/Header";
import MainBody from "./pages/MainBody";
import Footer from "./pages/Footer";
import Bootstrap from "./pages/Bootstrap";
import Image from "./pages/Image";

function App(){
  return (
  <div class="ccontainer-fluid bg-secondary">
    <Bootstrap />

    <Header />

    <Image />

    <MainBody />

    <br></br>

    <br></br>

    <Footer />

  </div>
  );
}

export default App;