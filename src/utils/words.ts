// const commonWords = [
//   'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
//   'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
//   'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
//   'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
//   'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
//   'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
//   'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
//   'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also'
// ];
const commonWords = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
  'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
  'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
  'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
  'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
  'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
  'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
  'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
  'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way',
  'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us',
  'find', 'here', 'thing', 'long', 'life', 'call', 'world', 'little', 'next', 'need',
  'feel', 'high', 'big', 'small', 'right', 'left', 'last', 'ask', 'try', 'great',
  'same', 'place', 'where', 'help', 'much', 'old', 'mean', 'before', 'again', 'house',
  'mother', 'father', 'children', 'school', 'study', 'book', 'story', 'word', 'friend', 'happy',
  'family', 'love', 'quick', 'slow', 'dark', 'light', 'hard', 'easy', 'open', 'closed',
  'play', 'run', 'walk', 'jump', 'drive', 'sleep', 'dream', 'write', 'read', 'laugh',
  'water', 'food', 'animal', 'music', 'song', 'picture', 'letter', 'number', 'party', 'game',
  'summer', 'winter', 'morning', 'night', 'minute', 'second', 'child', 'young', 'early', 'late',
  'problem', 'answer', 'question', 'change', 'stop', 'start', 'move', 'turn', 'keep', 'watch',
  'name', 'city', 'country', 'state', 'company', 'group', 'team', 'market', 'business', 'health',
  'money', 'price', 'value', 'service', 'policy', 'plan', 'office', 'product', 'system', 'information',
  'computer', 'phone', 'internet', 'email', 'website', 'program', 'design', 'build', 'workshop', 'project',
  'blue', 'green', 'yellow', 'black', 'white', 'red', 'orange', 'purple', 'brown', 'pink'
];


export function generateWords(count: number): string[] {
  const words: string[] = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    words.push(commonWords[randomIndex]);
  }
  return words;
}