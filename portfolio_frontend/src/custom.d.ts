// Allow importing CSS files in TypeScript (side-effect imports)
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg' {
  const content: string;
  export default content;
}
