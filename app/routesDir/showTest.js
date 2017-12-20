'use strict';
var router = require('express').Router();

// with security module from /security
// custom security here
if (!(swagapi.security && swagapi.security.apikey) ) 
	throw new Error("Verifique o nome da politica de segurança em arquivos do routesDir " );

router.get('/', swagapi.security.apikey, function(req, res, next) {
  		res.render(
		"testView",
		{message: "Olá! Custom routes working"}
		);
});

module.exports = router;
