# Gusbell | Nuxt 3 template

My own Nuxt 3 template for my future projects.

- CSS: Windicss 💨
- Icon libary: Iconify
- State Management: Pinia 🍍
- Linting: ESLint w/ antfu config
- Animation: animejs
- API: Express 🌐

Note: SSR is disabled by default, if you want ssr just remove "ssr: false", in the nuxt config file

## Development

```bash
# Install the dependencies
pnpm i --shamefully-hoist

# Start the development server on localhost:3000
pnpm dev

# Lint using eslint (make sure you install extension aswell)
pnpm lint
```

## Production

```bash
# Build the application for production
pnpm build

# Start the production server
pnpm start
```
