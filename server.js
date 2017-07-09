'use strict';

const Hapi = require('hapi'),
			Good = require('good'),
			Path = require('path');

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'dist')
			}
		}
	}
});
server.connection({ port: 12000, host: 'localhost' });

server.register(require('inert'), (err) => {
	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('index.html');
		}
	});
	server.route({
		method: 'POST',
		path: '/auth',
		handler: function (request, reply) {
			console.log(request.payload)
		}
	});


	server.route({
		method: 'POST',
		path: '/star/list',
		handler: function (request, reply) {
			console.log('in');
			console.log(request.payload);
			console.log(typeof request.payload.id);
			console.log(request.payload.id);
			var result = null;
			if(request.payload.id === '1'){
				result = [
					{
						no: 1,
						name: 'Naver',
						url: 'http://dic.naver.com',
						date: '2017,02',
						func: function() {
							return alert('callback fr server1')
						}
					},
					{
						no: 2,
						name: 'Daum',
						url: 'http://daum.net',
						date: '2017,03',
						func: function() {
							return alert('callback fr server2')
						}
					},
				];	
			}else{
				result = [
					{
						no: 1,
						name: 'yahoo',
						url: 'http://www.yahoo.com',
						date: '2018,02'
					},
					{
						no: 2,
						name: 'Google',
						url: 'http://www.google.com',
						date: '2018,03'
					},
				];				
			}
			console.log(result);
			reply(result)
		}
	});


	/* STATIC */
	server.route({
			method: 'GET',
			path: '/js/{file*}',
			handler: {
				directory: { 
					path: 'static/js',
					listing: true
				}
			}		
	});
	server.route({
			method: 'GET',
			path: '/css/{file*}',
			handler: {
				directory: { 
					path: 'static/css',
					listing: true
				}
			}		
	});



});

server.register({
	register: Good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
						response: '*',
						log: '*'
				}]
			}, {
				module: 'good-console'
			}, 'stdout']
		}
	}
}, (err) => {

	if (err) {
		throw err; // something bad happened loading the plugin
	}

	server.start((err) => {
		if (err) {
				throw err;
		}
		server.log('info', 'Server running at: ' + server.info.uri);
	});

});