'use strict';

module.exports = {
	put: function (req, res) {
        swapi.lib.blueprints.update({ req: req, res: res, modelName: "User", fieldKey: "username" });
    },
	
	get: function (req, res) {
        swapi.lib.blueprints.update({ req: req, res: res, modelName: "User", fieldKey: "username" });
    },
	
	delete: function (req, res) {
        swapi.lib.blueprints.delete({ req: req, res: res, modelName: "User", fieldKey: "username" });
    }
	
};
