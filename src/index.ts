import fs from 'fs/promises';

async function main() {
   const response = await fetch('https://github.com/dwyl/english-words/raw/master/words_alpha.txt');
   const text = await response.text();
   const wordsByBase: { [base: string]: string[] } = {};

   text.split(/\W+/).forEach((word) => {
      const characterBase = word.split('').sort().join('');
      if (!wordsByBase[characterBase]) {
         wordsByBase[characterBase] = [word];
         return;
      }
      wordsByBase[characterBase].push(word);
   });

   const anagrams = Object.values(wordsByBase)
      .filter((list) => list.length > 1)
      .sort((a, b) => a[0].length - b[0].length);

   await fs.writeFile('anagrams.json', JSON.stringify(anagrams, null, 2));
}

main()
   .then(() => {
      console.log('Done');
   })
   .catch((err) => {
      console.error(err);
      process.exit(1);
   });
