/// <reference types="vite/client" />

interface ImportMetaEnv {
  [x: string]: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
