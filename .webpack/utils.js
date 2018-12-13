const config = require('../.config/config.json');

function generateDefineConfig(useEnv) {
	const keys = Object.keys(config);
	const result = {};
	keys.forEach(k => {
		if (useEnv) {
			result[k] = JSON.stringify(process.env[k]);
		} else {
			result[k] = JSON.stringify(config[k]);
		}
	});
	return result;
}

module.exports = {
	generateDefineConfig
}
