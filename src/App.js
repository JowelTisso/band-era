import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./src/components/footer/Footer";
import Header from "./src/components/header/Header";
import AllRoutes from "./src/routes/AllRoutes";
import { toastOption } from "./src/utils/toastHelper";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" toastOptions={toastOption} />
      <Header />
      <main className="mg-top-5x pd-top-3x">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
