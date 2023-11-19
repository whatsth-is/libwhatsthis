<p align="center"><img src="https://user-images.githubusercontent.com/11209477/167717787-7f33f564-e975-4055-bf7b-c2b3c29e4f81.png" /></p>
<h1 align="center"><a href="https://github.com/whatsth-is/libwhatsthis">libwhatsthis</a></h1>
<p align="center">
  <a href="https://www.codefactor.io/repository/github/whatsth-is/libwhatsthis"><img src="https://www.codefactor.io/repository/github/whatsth-is/libwhatsthis/badge" alt="CodeFactor" /></a>
  <a href="https://gitpod.io/#https://github.com/whatsth-is/whatsth.is"><img src="https://img.shields.io/badge/open%20in-Gitpod-orange?logo=gitpod&logoColor=white" /></a>
</p>

Shared component library for the [whatsth.is](https://github.com/whatsth-is/whatsth.is) project. This is a **TypeScript NodeJS** codebase packaged up using **Rollup**.

The purpose of this library is to provide convinience functions, with developers in mind. This is used by the [Whats This? web application](https://whatsth.is) to visually provide these functions.

**This is not intended for general use** - You may want to check out [CRontrue](https://www.npmjs.com/package/cronstrue), [crypto-es](https://www.npmjs.com/package/crypto-es), and [ua-parser-js](https://www.npmjs.com/package/ua-parser-js) instead.

## Installation

This can be installed from npm by doing:

```bash
npm -i libwhatsthis
```

## Building

The library uses **Rollup** to compile into a JavaScript file. You can trigger a build by doing:

```bash
npm run build
```

Unit testing is supported through **Jest**:

```bash
npm test
```
