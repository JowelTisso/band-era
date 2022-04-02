import "./App.css";
import Footer from "./src/components/footer/Footer";
import Header from "./src/components/header/Header";
import AllRoutes from "./src/routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
