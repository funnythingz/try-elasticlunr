const elasticlunr = require('elasticlunr');

const index = elasticlunr(function() {
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

//単語一致
console.log(index.search('curry'));

//部分検索一致しない
console.log(index.search('curr'));

//部分検索一致
console.log(index.search('h', {
  expand: true
}));
