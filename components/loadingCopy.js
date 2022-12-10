export const LOADING_VERBS = [
  "generating",
  "populating",
  "materializing",
  "painting",
  "creating",
  "developing",
  "crafting",
  "producing",
  "fabricating",
  "constructing",
  "building",
];
export const LOADING_NOUNS = [
  "graphics",
  "art",
  "pictogram",
  "content",
  "media",
  "elements",
  "pixels",
  "thumbnail",
  "visuals",
  "image",
];

export const combineCopy = () => {
  const verb = LOADING_VERBS[Math.floor(Math.random() * LOADING_VERBS.length)];
  const noun = LOADING_NOUNS[Math.floor(Math.random() * LOADING_NOUNS.length)];
  const finalWord = verb.concat(" ", noun);
  return finalWord;
};
