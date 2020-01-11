const path = require('path'); 

module.exports = {
	entry: './src/app.ts', 
	output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'bundle.js'
	}
}; 