const elasticlunr = require('elasticlunr');
require('./lib/lunr.stemmer.support.js')(elasticlunr);
require('./lib/lunr.jp.js')(elasticlunr);

const index = elasticlunr(function() {
  this.use(elasticlunr.jp);
  this.addField('body');
  this.setRef('id');
});

index.addDoc({
  id: 1,
  body: 'unko gohan curry.'
});

index.addDoc({
  id: 2,
  body: 'hello! how? low.'
});

index.addDoc({
  id: 3,
  body: 'うんこ ごはん カレー。'
});

index.addDoc({
  id: 4,
  body: 'こんにちは！元気？どんな感じ？'
});

//単語一致
console.log(index.search('curry'));

//部分検索一致しない
console.log(index.search('curr'));

//部分検索一致
console.log(index.search('h', {
  expand: true
}));

//単語一致
console.log(index.search('カレー'));

//部分検索一致しない
console.log(index.search('こ'));

//部分検索一致
console.log(index.search('元気', {
  expand: true
}));
