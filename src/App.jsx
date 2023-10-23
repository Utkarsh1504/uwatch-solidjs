import { createEffect, createSignal, onCleanup } from "solid-js";
import "./App.css";

function App() {
  const [hours, setHours] = createSignal(0);
  const [minutes, setMinutes] = createSignal(0);
  const [secs, setSecs] = createSignal(0);

  createEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSecs(new Date().getSeconds());
    }, 1000);

    onCleanup(() => {
      clearInterval(timer);
    });
  }, []);

  return (
    <div className="uwatch">
      <div className="hours">{hours()}h: </div>
      <div className="minutes">{minutes()}m: </div>
      <div className="secs">{secs()}s</div>
    </div>
  );
}

export default App;
