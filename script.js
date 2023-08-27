function highlightKeywords(codeElement, language = 'pseudocode') {
	const languageData = languages[language];
	if (!languageData) {
		console.error(`Language "${language}" not supported.`);
		return;
	}

	const { keywords } = languageData;
	const code = codeElement.innerHTML;

	let highlightedCode = code;

	keywords.forEach(keywordData => {
		const { pattern, color } = keywordData;
		const keywordRegex = new RegExp(pattern, 'gm');
		highlightedCode = highlightedCode.replace(keywordRegex, `<span style="color: ${color};">$&</span>`);
	});

	codeElement.innerHTML = highlightedCode;
}

function autoDetectLanguage(codeElement) {
	const filenameElement = codeElement.parentElement.querySelector('.filename');
	if (!filenameElement || !filenameElement.classList.contains('filename')) {
		console.error(`No filename class found for code block: ${codeElement}.\n\t* Make sure there's a box parent element.\n\tMake sure there's a filename element within the box element.`);
		return 'pseudocode'; // Default to pseudocode
	}

	const filename = filenameElement.textContent.trim();
	const extension = filename.split('.').pop();
	var is_defined=false;
	var lang='';

	for(const language in languages){
		if(!is_defined){is_defined=extension==languages[language].abbr;lang=language;}
		else{break;}
	}

	return is_defined?lang:'pseudocode'; // Default to pseudocode
}

function fetchFileContent(filename) {
	return fetch(filename)
	.then(response => response.text())
	.catch(error => console.error(error));
}

function replaceCodeWithFileContent() {
	const codeElementsWithFilename = document.querySelectorAll('.box .filename');

	codeElementsWithFilename.forEach(async codeElement => {
		if(!codeElement.parentElement.querySelector('.code')){
			const filename = codeElement.textContent.trim();

			// Fetch the content of the file based on the filename
			// Here you would use your method of loading the file content
			// For example, using XMLHttpRequest or fetch API
			const fileContent = await fetchFileContent(filename);

			// Set the fetched file content as the code content
			const pre=document.createElement('pre');
			pre.classList.add('code');
			codeElement.parentElement.appendChild(pre);
			const code=document.createElement('code');
			code.append(fileContent);
			codeElement.parentElement.querySelector('pre').appendChild(code);
		}
	});
}

replaceCodeWithFileContent();

const codeBlocks = document.querySelectorAll('.box .code');
console.log(codeBlocks);

codeBlocks.forEach(codeBlock => {
	const detectedLanguage = autoDetectLanguage(codeBlock);
	highlightKeywords(codeBlock, detectedLanguage);
});