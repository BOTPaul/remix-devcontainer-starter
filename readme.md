# Remix Setup

This project provides a convenient setup for building [Remix](https://remix.run/) applications. It includes the necessary configurations to get started with a new Remix project and uses [pnpm](https://pnpm.io/) for efficient package management, all within a vscode devcontainer.

## Getting Started

To get started with this project, simply follow these steps:

1. Clone this repository: `git clone https://github.com/botpaul/remix-devcontainer-starter.git`
2. Open devcontainer in vscode
3. Prepare the sqlite db: `pnpm run setup`
4. Start the development server: `pnpm run dev`

You can now start building your Remix app! For more information on Remix, check out their [official documentation](https://docs.remix.run/).

## Available Scripts

In addition to the basic setup steps outlined above, this project provides the following scripts:

- `pnpm run test`: Run tests for your Remix app
- `pnpm run test:e2e` Run end to end tests for your Remix app
- `pnpm run validate`: Run validation checks for your Remix app
