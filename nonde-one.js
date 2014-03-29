var Node = require('n2n').Node;
var node = new Node(6786);
node.connect([{
  host: 'localhost',
  port: 6785
}]);

node.on('online', function () {
  console.log('Online ids:', node.sortedIds);
  console.log('I am online:', this.id);
});

node.on('node::online', function (newNode) {
  console.log('Someone is online:', newNode.id);
});

node.on('node::lightUp', function (senderId, data) {
  console.log('Hello from [' + senderId + '] with data: ' + data);
});