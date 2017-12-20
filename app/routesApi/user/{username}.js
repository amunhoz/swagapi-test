'use strict';

module.exports = {
	put: function (req, res) {
        swagapi.lib.blueprints.update({ req: req, res: res, modelName: "User", fieldKey: "username" });
    },
	
	get: function (req, res) {
        swagapi.lib.blueprints.update({ req: req, res: res, modelName: "User", fieldKey: "username" });
    },
	
	delete: function (req, res) {
        swagapi.lib.blueprints.delete({ req: req, res: res, modelName: "User", fieldKey: "username" });
    }
	
};
