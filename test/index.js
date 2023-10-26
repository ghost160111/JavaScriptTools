// Regular Expressions

/**
 * @param {string} flag
 * @param {string} description
 * @param {string} correspondingProperty
 */
const regex = [];

const addRegexDescription = (flag, description, correspondingProperty) => {
  regex.push({
    flag,
    description,
    correspondingProperty
  });
}

const regexFlags = {
  d: {
    flag: "d",
    description: "Generate indices for substring matches",
    correspondingProperty: "hasIndices"
  },
  g: {
    flag: "g",
    description: "Global search",
    correspondingProperty: "global"
  },
  i: {
    flag: "i",
    description: "Case-insentive search.",
    correspondingProperty: "ignoreCase"
  },
  m: {
    flag: "m",
    description: "Allows ^ and $ to match newline characters",
    correspondingProperty: "multiline"
  },
  s: {
    flag: "s",
    description: "Allows . to match newline characters",
    correspondingProperty: "dotAll"
  },
  u: {
    flag: "u",
    description: "\"Unicode\";treat a pattern as a sequence of Unicode code points",
    correspondingProperty: "unicode"
  },
  v: {
    flag: "v",
    description: "An upgrade to the u mode with more Unicode features",
    correspondingProperty: "unicodeSets"
  },
  y: {
    flag: "y",
    description: "Perform a \"sticky\" search that matches starting at the current position in the target string",
    correspondingProperty: "sticky"
  }
};

console.log(regexFlags);