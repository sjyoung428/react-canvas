# React-canvas

## Alias

[참고 링크](https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa)

- ## Step 1

- vite.config.ts

```bash
npm i -D @types/node
```

```ts
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
```

- ## Step 2
- tsconfig.json

```json
{
  "compilerOptions": {
    // ...rest of the template
    "types": ["node"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
