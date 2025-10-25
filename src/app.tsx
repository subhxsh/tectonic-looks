import { Lookbook } from "./components/lookbook";
import { looks } from "./mock-data/data";

export default function App() {
  return <Lookbook looks={looks} />;
}
