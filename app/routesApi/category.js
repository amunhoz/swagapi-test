'use strict';

module.exports = {
	post: async function (req, res) {
        swapi.lib.blueprints.create({ req: req, res: res, modelName: "category" });
		// alternative
		//{ req: req, res: res, modelName: "Pet", defaults: {"field1": 0} }
    }
};
