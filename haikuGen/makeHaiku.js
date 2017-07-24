
exports.createHaiku = (structure, syllObj) => {
  return structure.map((lines) => {
    return lines.map((num) => {
      const words = syllObj[num];
      return words[Math.floor(Math.random() * (words.length - 1))];
    }).join(' ');
  }).join('\n');
}
