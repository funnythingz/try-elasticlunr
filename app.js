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

const r = index.search('curry');
console.log(r);
