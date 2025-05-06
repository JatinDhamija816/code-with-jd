var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((s) => s.split(" ").length));
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
