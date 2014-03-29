var gpio = require('pi-gpio');
var Node = require('n2n').Node;
var node = new Node(6786);
node.connect([{
  host: '192.168.1.201',
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

  gpio.open(7, 'output', function (err) {

    // if (err) console.log(err);
    gpio.read(7, function (err, value) {
      if (err) console.log(err);
      console.log('value is: ' + value);

      var newval = 0;
      if (value === 0) {
        newval = 1;
      }

      gpio.write(7, newval, function (err) {
        if (err) console.log(err);
        //gpio.close(7, function (err) {
        //  if (err) console.log(err);
        //  console.log('pin closed');
        //});
      });
    });

  });

});