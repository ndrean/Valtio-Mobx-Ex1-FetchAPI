import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { myStore, loader } from "./MbxStore";

import VComponent from "./vUsers";
import MComponent from "./MbxUsers";
import RComponent from "./RUsers";
import SeparatorLine from "./SeparatorLine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App>
      <SeparatorLine text={"with Valtio"} />
      <VComponent />
      <SeparatorLine text={"with Mobx"} />
      <MComponent store={myStore} loadState={loader} />
      <SeparatorLine text={"Pur React"} />
      <RComponent />
    </App>
  </StrictMode>
);
//);
