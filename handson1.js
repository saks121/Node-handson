// create a node using http module and explain what is node by sending response in html and json format.

const http =require('http');
http.createServer(function(req,resp){
    resp.write('Node is an efficient,flexible and extensive build-in runtime environment that facilitates the JS engine to execute the Js scripts.');
    resp.write('NOde is widely used for creating back-end services using multiple langugaes to chose from.whether it s python, java or Javascript,Node has everything covered.  ');
    resp.write('Node has extensive library called as NPM(Node Package Manager) thta contains varieties of modules to choose and use.just import them and use.');
    resp.end();

}).listen(8080);