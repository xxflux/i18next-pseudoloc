export const pseudoChars = {
  a: 'ā',
  b: 'ḅ',
  c: 'ĉ',
  d: 'ď',
  e: 'ė',
  f: 'ϝ',
  g: 'ḡ',
  h: 'ĥ',
  i: 'ĩ',
  j: 'ĵ',
  k: 'ķ',
  l: 'ḽ',
  m: 'ṃ',
  n: 'ň',
  o: 'ṓ',
  p: 'ṗ',
  q: 'ʠ',
  r: 'ŗ',
  s: 'ş',
  t: 'ŧ',
  u: 'ṵ',
  v: 'ṽ',
  w: 'ẁ',
  x: 'ẋ',
  y: 'ẏ',
  z: 'ź',
  A: 'Ą',
  B: 'β',
  C: 'Ḉ',
  D: 'Đ',
  E: 'Ḛ',
  F: 'Ḟ',
  G: 'Ģ',
  H: 'Ħ',
  I: 'Ḭ',
  J: 'Ĵ',
  K: 'Ķ',
  L: 'Ŀ',
  M: 'Ṁ',
  N: 'Ň',
  O: 'Ő',
  P: 'Ṕ',
  Q: 'Ǫ',
  R: 'Ṛ',
  S: 'Ŝ',
  T: 'Ŧ',
  U: 'Ů',
  V: 'Ṿ',
  W: 'Ŵ',
  X: 'Ẋ',
  Y: 'Ŷ',
  Z: 'Ž',
};

export const vowelChars = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

const cjkCharacters = [
  '꿇', '꿈', '꿘', '끓', '떫', '맬', '숄', '쌜', '왱', '좰', '헬', '긇', '쭌',
  'あ', 'お', 'き', 'ぬ', 'ば', 'ぽ', 'ゑ', 'ザ', 'ネ', 'ヲ', 'ヴ', 'ミ', 'プ',
  'ฬ', 'ษ', 'ล', 'ฟ', 'ป', 'ต', 'ฒ', 'ณ', 'ญ', 'ฆ', 'ข'
];
const getRandomInt = (max) => Math.floor(Math.random() * max);
export const stringMarker = ({string, enableCJK}) => {
  let cjkLength = cjkCharacters.length;
  let start = cjkCharacters[getRandomInt(cjkLength)];
  let end = cjkCharacters[getRandomInt(cjkLength)];
  if(enableCJK){
    return `<${start}<[${string}]>${end}>`;
  } else {
    return `<[${string}]>`;
  }
};

