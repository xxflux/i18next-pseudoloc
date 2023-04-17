# i18next-pseudoloc
Pseudo Localization Test package that can test Latin Extended-A, limited Korean/Japanese/Thai character display

## npm package
[https://www.npmjs.com/package/i18next-pseudoloc](https://www.npmjs.com/package/i18next-pseudoloc)

## Install
```shellscript
$ npm i i18next-pseudoloc
```

## Setting
```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PseudoLoc from 'i18next-pseudoloc';
...
i18n
  .use(new PseudoLoc({
    lengther:1,
    enabled: true,
    enableCJK: true,
    sourceLocale: 'pt-BR', // pt-BR is only for PL Test
  }))
  .init({
    postProcess: ["pseudoloc"],
...
```
