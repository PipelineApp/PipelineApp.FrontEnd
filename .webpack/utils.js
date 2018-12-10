function generateDefineConfig(config) {
	const keys = Object.keys(config);
	const result = {};
	keys.forEach(k => {
		result[k] = JSON.stringify(config[k]);
	});
	return result;
}

module.exports = {
	generateDefineConfig
}
