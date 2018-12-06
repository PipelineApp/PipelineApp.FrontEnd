function generateDefineConfig(config) {
	return {
		API_BASE_URL: JSON.stringify(config.API_BASE_URL)
	}
}

module.exports = {
	generateDefineConfig
}
