# Bare Typescript Project

Starter files for a bare-minimum typescript project without any module resolution and what not. Just the defaults that work.

## Structure

```sh
.
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── folder
│   │   └── file.ts
│   ├── index.ts
│   └── somethingelse.ts
└── tsconfig.json
```

## Parts of the tsconfig.json compiler options

1. "outDir": "dist" -> built files directory
1. "rootDir": "src" -> source directory
1. "esModuleInterop": true -> allow importing from modules like express.js
1. "strict": true -> don't be a slob
1. "types": ["node"] -> distinguishes it from bun/deno

## Dev Dependencies

1. "@types/express": "^5.0.3" -> types of express
1. "nodemon": "^3.1.10" -> recompile on change
1. "ts-node": "^10.9.2" -> run typescript file directly
1. "ts-node-dev": "^2.0.0" -> run typescript directly, faster (for use with nodemon)
1. "typescript": "^5.9.2" -> the thing that compiles .ts files to javascript

## Nodemon.json

1. "watch": ["src"] -> watch the src directory
1. "ignore": ["dist"] -> ignore the dist directory
1. "ext": "ts" -> focus on typescript files
1. "exec": "ts-node-dev src/index.ts" -> the execution command
