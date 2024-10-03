function extractHashtags(input) {
  const regex = /(?:^|\s)(?:#+)([a-zA-Z]+)/g; // busca el #
  const hashtags = []; 
  let match;

  while ((match = regex.exec(input)) !== null) {
      hashtags.push(match[1]);
  }

  return hashtags;
}

const inputString = "##alot";
const result = extractHashtags(inputString);
console.log(result);
