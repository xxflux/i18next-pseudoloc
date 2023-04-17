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


## How to ready Pseudo Loc string
```
<긇<[Ŷṓṵ āŗė ėňḡĩňėėŗ, ŧĥėň ĉĥėĉķṓṵŧ ŧĥė ŗėṗṓ ṓϝ ŧĥĩş āṗṗḽĩĉāŧĩṓň。]>ヲ>
```
* There are Latin character sentence opening and closing markers - `<[` and `]>`

* There are Korean/Japanese/Thai opening and closing markers with random characters - `<긇` and `ヲ>`

* If the sentence has the `.`(period - fullstop), then it will be replaced with Japanese period - `。`

* If the sentence has the `?`, then it will be replaced with Spanish inverted mark of interrogation - `¿`

* If the sentence has the `“`,(opening quotation), then it will be replaced with the German opening quotation - `„` 
