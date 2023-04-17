import { PostProcessorModule } from "i18next";

interface Options {
  enabled?: boolean;
  lengther?: number;
  enableCJK?: boolean;
  sourceLocale?: string;
  repeatedLetters?: Array<string>;
  characters?: Record<string, string>;
  pseudoCharObject?: Record<string, string>;
}

class PseudoLoc extends PostProcessorModule {
  constructor(options: Options);
  setOptions(options: Options): void;
  name: string;
}

export = PseudoLoc;
