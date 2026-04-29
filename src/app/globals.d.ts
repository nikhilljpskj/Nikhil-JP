// Allow importing SVGs if desired later
declare module '*.svg' {
  const content: string;
  export default content;
}
