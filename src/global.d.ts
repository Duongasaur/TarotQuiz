// global.d.ts

declare interface Window {
  adsbygoogle: Array<Record<string, string>>;
}

// Custom type for HTMLInsElement (Google Ad element)
// declare class HTMLInsElement extends HTMLElement {
//   className: string;
//   style: CSSStyleDeclaration;
//   dataset: DOMStringMap;
// }
