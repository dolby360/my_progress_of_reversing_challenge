import "./styles.css";
import PieChart from "./progressbar";

export default function App() {
  return (
    <div className="App">
      <PieChart percentage={50} />
    </div>
  );
}
