import "./App.css";
import { ComponentRef } from "./component/componentRef";
import { ConditionalRendering } from "./component/conditional";
import { Debounce } from "./component/debounce";

function App() {
  return (
    <div className="flex min-w-full h-full justify-center items-center">
      <ConditionalRendering />
      {/* <Debounce /> */}
      {/* <ComponentRef /> */}
    </div>
  );
}

export default App;
