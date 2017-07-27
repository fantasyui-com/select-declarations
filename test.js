console.log(JSON.stringify(require('./index.js')(`.btn {color: red;} a {color: green;} .btn:hover {color: blue;}`, ['.btn'])) === JSON.stringify([ { prop: 'color', value: 'red' } ]))
