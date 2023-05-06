module.exports = {
	config: () => {
		try {

			if (process.env.REACT_APP_TWILITE_ENV && process.env.REACT_APP_TWILITE_ENV === 'dev') {
				return {
					host: "https://devapi.twilite.co/"
				}
			}
	
			return {
				host: "https://api.twilite.co/"
			}
		} catch (error) {
			return {
				host: "https://api.twilite.co/"
			}
		}
	}
}