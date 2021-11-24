import { buildLevels } from "~utils/levels";

import levels from "../../levels.json";

export function getLevels() {
  return buildLevels(levels);
}