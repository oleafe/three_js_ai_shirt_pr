import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  

  return (
    <div>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </div>
  )
}

export default App
