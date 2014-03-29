var Node = require('n2n').Node;
var node = new Node(6787);
node.connect([{
  host: 'localhost',
  port: 6785
}]);

node.on('online', function () {
  console.log('Online ids:', node.sortedIds);
  console.log('I am online:', this.id);
});

node.send('c0c6c510-b639-11e3-a0bd-d5a253e36990', 'lightUp', 'this is a test');
