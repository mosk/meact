// src/index.js
// React должен находиться в области видимости JSX-файла
import Meact from "./meact";
import MeactDom from "./meact-dom";

const Greeting = ({ name }) => <p>Привет, {name}!</p>;

const App = (
  <div>
    <h1 className="primary">Да здравствует Meact!</h1>
    <p>Самостоятельная реализация Meact в 90 строк кода</p>
    <Greeting name={"Самодельный React"} />
  </div>
);

MeactDom.render(App, document.getElementById("root"));
