'use strict';

const path = require('path');
const markdownpdf = require('markdown-pdf');
const dir = require('node-dir');
const inputPath = './input';
const outputPath = './output';

dir.promiseFiles(inputPath)
	.then(files => {
		for (const file of files) {
			const basename = path.basename(file, '.md');
			const output = path.join(outputPath, basename + '.pdf');

			markdownpdf().from(file).to(output, function () {
				console.log('Output to', output);
			})
		}
	})
	.catch(error => console.error(error))
