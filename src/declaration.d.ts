declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

// interface Ellipsis {
//   unsafeHTML: string;
//   className: string;
//   maxLine: string;
//   ellipsis: string;
//   basedOn: string;
// }
interface Ellipsis extends HTMLElement {
  unsafeHTML: string;
}

declare module 'react-lines-ellipsis/lib/html' {
  const content: string;
  export default content;
}
