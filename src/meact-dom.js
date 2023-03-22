// src/react-dom.js
import * as snabbdom from "snabbdom";
import { propsModule } from "snabbdom/build/modules/props";

// propsModule отвечает за модификацию текстовых атрибутов
const reconcile = snabbdom.init([propsModule]);

// Переменная, содержащая корневой элемент, который функция render вернула последним
let rootVNode;

const render = (el, rootDomElement) => {
  // Этот блок кода будет вызван при первом вызове функции render
  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }

  // Запоминаем VNode, которую возвращает reconcile
  rootVNode = reconcile(rootVNode, el);
};

const MeactDom = {
  render,
};

export default MeactDom;
