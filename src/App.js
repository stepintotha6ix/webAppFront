import "./App.css";
import ProductList from "./components/screens/ProductList/ProductList";
import Button from "./components/ui/Button";
import { UseTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";

function App() {
  const { tg, onClose, user, onToggleButton } = UseTelegram();
  useEffect(() => {
    tg.ready();
  });
  return (
    <div className="App">
      <span> {user?.username}</span>
      
      <Button onClick={onClose}>Закрыть</Button>
      <ProductList />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
