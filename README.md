# Init Next

> Starter repo for a Next.JS application with usefull packages

[![Github Issues](https://img.shields.io/github/issues/archwebio/init-next)]()
[![Last commit](https://img.shields.io/github/last-commit/archwebio/init-next)]()
[![License](https://img.shields.io/github/license/archwebio/init-next)]()

## Project

Every time I am starting a new project with Next.JS I need to wire up the same few packages.

This repo contains a manual installation for a Next.JS project with a few packages (:memo: [list of packages](#list-of-packages)) installled and configured.

The configurations used here are based on the respective official repository (links provided).

Think of this repo as one of the examples in the [Next.JS's examples on Github](https://github.com/vercel/next.js/tree/canary/examples) but with `--example with-typescript-eslit-jest-cypress-husky-tailwind`

## :memo: List of packages:

- Next.JS: _Main Framework_ ([config](https://nextjs.org/docs/api-reference/next.config.js/introduction))
- Tailwind: _Styling_ ([config](https://tailwindcss.com/docs/guides/nextjs))
- Typescrit: _Language of choice_ ([config](https://nextjs.org/docs/basic-features/typescript))
- ESLint: _Linter_ ([config](https://nextjs.org/docs/basic-features/eslint#prettier))
- Prettier: _Coding style_ ([config](https://nextjs.org/docs/basic-features/eslint#prettier))
- Jest: _Unit testing_ ([config](https://nextjs.org/docs/testing#jest-and-react-testing-library))
- React Testing Library: _Unit testing_ ([config](https://nextjs.org/docs/testing#jest-and-react-testing-library))
- Cypress: _E2E testing_ ([config](https://nextjs.org/docs/testing#cypress))
- Husky: _Pre-commit hooks_ ([config](https://typicode.github.io/husky/#/?id=install))

## Installation and Beyond

Scripts available

```sh
# Installation
npm install
# or
yarn install

# Development
npm run dev
# or
yarn dev
```

For a full list checkout `package.json`

```json
"scripts": {
  "dev": "next dev",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watchAll",
  "cypress": "cypress open",
  "prepare": "husky install",
  "format": "prettier --write .",
  "check-format": "prettier --check .",
  "qc": "yarn run format && yarn run check-format && yarn run lint && yarn run build",
  "build": "next build",
  "start": "next start"
},
```

## Contributing

Whant to contribute? Ways to do it:

- Found a typo
- Documentation is unclear
- Having an issue with your OS (windows and linux)
- Have a proposition of package to add

Steps to contribute:

0. Open an issue to discuss
1. Fork it (<https://github.com/archwebio/init-next/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

📄 Distributed under the MIT license.
See [LICENSE](https://github.com/archwebio/init-next/blob/master/LICENSE) for more information.

## Release History

- 1.0.0: [🚀 Initial commit]
