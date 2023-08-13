const languages = {
	pseudocode: {
		abbr: '',
		keywords: [
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\bfor|foreach|for each\\b', color: '#17a2b8' },
			{ pattern: '\\bfunction\\b', color: '#007bff' },
			{ pattern: '\\breturn\\b', color: '#ffc107' },
			{ pattern: '\\binput|output\\b', color: '#6f42c1' },
			{ pattern: '\\bvar|variable\\b', color: '#6c757d' },
			{ pattern: '\\btrue|false\\b', color: '#6f42c1' },
			{ pattern: '\\b#.*$\\b', color: '#6c757d' },
			{ pattern: '\\b←|:=\\b', color: '#007bff' },
			{ pattern: '\\b=|≠|<|>|≤|≥\\b', color: '#6f42c1' },
			{ pattern: '\\+|\\−|×|\\/|mod', color: '#17a2b8' },
			{ pattern: '⌊|⌋|⌈|⌉', color: '#28a745' },
			{ pattern: '\\band|or\\b', color: '#dc3545' },
			{ pattern: 'Σ|Π', color: '#ffc107' },
			{ pattern: '\\balgorithm\\b', color: '#007bff' },
			{ pattern: '\\bdo\\b', color: '#17a2b8' },
			{ pattern: '\\blet\\b', color: '#28a745' },
			{ pattern: '\\bmin|max|mean\\b', color: '#28a745' }
		]
	},
	javascript: {
		abbr: 'js',
		keywords: [
			{ pattern: '\\bfunction\\b', color: '#007bff' },
			{ pattern: '\\bconsole\\b', color: '#28a745' },
			{ pattern: '\\breturn\\b', color: '#ffc107' },
			{ pattern: '(//.*$)\\b', color: '#008000' },
			{ pattern: '/\\*(?:.|[\\n\\r])*?\\*/', color: '#6c757d' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\bvar\\b', color: '#6610f2' },
			{ pattern: '\\bconst\\b', color: '#6610f2' },
			{ pattern: '\\blet\\b', color: '#6610f2' },
			{ pattern: '\\bnew\\b', color: '#6c757d' },
			{ pattern: '\\bthis\\b', color: '#6c757d' },
			{ pattern: '\\bclass\\b', color: '#6f42c1' },
			{ pattern: '\\bconstructor\\b', color: '#6f42c1' },
			{ pattern: '\\bextends\\b', color: '#6f42c1' },
			{ pattern: '\\bimport\\b', color: '#17a2b8' },
			{ pattern: '\\bswitch\\b', color: '#28a745' },
			{ pattern: '\\bcase\\b', color: '#ffc107' },
			{ pattern: '\\bdefault\\b', color: '#007bff' },
			{ pattern: '\\bjQuery\\b', color: '#28a745' },
			{ pattern: '\\bReact\\b', color: '#ffc107' },
			{ pattern: '\\bAngular\\b', color: '#008000' },
			{ pattern: '\\bVue\\.js\\b', color: '#007bff' }
		]
	},
	python: {
		abbr: 'py',
		keywords: [
			{ pattern: '\\bdef\\b', color: '#007bff' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\bimport\\b', color: '#6610f2' },
			{ pattern: '\\bfrom\\b', color: '#6610f2' },
			{ pattern: '\\bclass\\b', color: '#6f42c1' },
			{ pattern: '\\bprint\\b', color: '#28a745' },
			{ pattern: '#.*$\\b', color: '#008000' },
			{ pattern: '"""(?:.|[\\n\\r])*?\\"""', color: '#008000' }
		]
	},
	java: {
		abbr: 'java',
		keywords: [
			{ pattern: '\\bbyte\\b', color: '#007bff' },
			{ pattern: '\\bshort\\b', color: '#007bff' },
			{ pattern: '\\bint\\b', color: '#007bff' },
			{ pattern: '\\blong\\b', color: '#007bff' },
			{ pattern: '\\bfloat\\b', color: '#007bff' },
			{ pattern: '\\bdouble\\b', color: '#007bff' },
			{ pattern: '\\bboolean\\b', color: '#007bff' },
			{ pattern: '\\bchar\\b', color: '#007bff' },
			{ pattern: '\\bString\\b', color: '#007bff' },
			{ pattern: '\\bpublic\\b', color: '#007bff' },
			{ pattern: '\\bprivate\\b', color: '#007bff' },
			{ pattern: '\\bprotected\\b', color: '#007bff' },
			{ pattern: '\\bclass\\b', color: '#6f42c1' },
			{ pattern: '\\bstatic\\b', color: '#6c757d' },
			{ pattern: '\\bvoid\\b', color: '#6c757d' },
			{ pattern: '\\bnew\\b', color: '#6c757d' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\bSystem\.out\.println\\b', color: '#28a745' },
			{ pattern: '\\bSystem\\b', color: '#0000cc' }
		]
	},
	c: {
		abbr: 'c',
		keywords: [
			{ pattern: '\\bint|short int|long int|unsigned int\\b', color: '#007bff' },
			{ pattern: '\\bchar\\b', color: '#007bff' },
			{ pattern: '\\bfloat\\b', color: '#007bff' },
			{ pattern: '\\bdouble\\b', color: '#007bff' },
			{ pattern: '\\bvoid\\b', color: '#007bff' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\breturn\\b', color: '#ffc107' },
			{ pattern: '//.*$', color: '#6c757d' },
			{ pattern: '/\\*.*?\\*/', color: '#6c757d' }
		]
	},
	cpp: {
		abbr: 'cpp',
		keywords: [
			{ pattern: '\\bint|short int|long int|unsigned int\\b', color: '#007bff' },
			{ pattern: '\\bchar\\b', color: '#007bff' },
			{ pattern: '\\bfloat\\b', color: '#007bff' },
			{ pattern: '\\bdouble\\b', color: '#007bff' },
			{ pattern: '\\bvoid\\b', color: '#007bff' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\breturn\\b', color: '#ffc107' },
			{ pattern: '//.*$', color: '#008000' },
			{ pattern: '/\\*.*?\\*/', color: '#008000' },
			{ pattern: '\#include\\b', color: '#ff8800' },
			{ pattern: '\#define\\b', color: '#ff8800' },
			{ pattern: '\\biostream|concepts|coroutine|algorithm|any|bitset|cassert|ccomplex|cctype|cerrno|cfenv|cfloat|charconv|chrono|cinttypes|ciso646|climits|clocale|cmath|codecvt|compare|complex|condition_variable|concepts|coroutine|csetjmp|csignal|cstdarg|cstdbool|cstddef|cstdint|cstdio|cstdlib|cstring|ctgmath|ctime|cuchar|cstddef|cwchar|cwctype|deque\\b', color: '#888888' },
			{ pattern: '\\bstd\\b', color: '#888888' }
		]
	},
	html: {
		abbr: 'html',
		keywords: [
			{ pattern: '<html>', color: '#007bff' },
			{ pattern: '<head>', color: '#007bff' },
			{ pattern: '<body>', color: '#007bff' },
			{ pattern: '<div>', color: '#6f42c1' },
			{ pattern: '<p>', color: '#6f42c1' },
			{ pattern: '<a>', color: '#6f42c1' },
			{ pattern: '<img>', color: '#6f42c1' },
			{ pattern: '<h\\d>', color: '#6f42c1' },
			{ pattern: '<\\!--.*?-->', color: '#6c757d' },
		]
	},
	css: {
		abbr: 'css',
		keywords: [
			{ pattern: 'body', color: '#007bff' },
			{ pattern: 'div', color: '#6f42c1' },
			{ pattern: 'p', color: '#6f42c1' },
			{ pattern: 'a', color: '#6f42c1' },
			{ pattern: 'h\\d', color: '#6f42c1' },
			{ pattern: '\\.class', color: '#17a2b8' },
			{ pattern: '#id', color: '#17a2b8' },
			{ pattern: '/\\*.*?\\*/', color: '#6c757d' },
			{ pattern: '(background-color|color)\\s*:\\s*([#\\w\\(\\), ]+);', color: '$2' }
		]
	},
	csharp: {
		abbr: 'cs',
		keywords: [
			{ pattern: '\\bpublic\\b', color: '#007bff' },
			{ pattern: '\\bprivate\\b', color: '#007bff' },
			{ pattern: '\\bprotected\\b', color: '#007bff' },
			{ pattern: '\\bclass\\b', color: '#6f42c1' },
			{ pattern: '\\bstatic\\b', color: '#6c757d' },
			{ pattern: '\\bvoid\\b', color: '#6c757d' },
			{ pattern: '\\bnew\\b', color: '#6c757d' },
			{ pattern: '\\bif\\b', color: '#dc3545' },
			{ pattern: '\\belse\\b', color: '#dc3545' },
			{ pattern: '\\bfor\\b', color: '#17a2b8' },
			{ pattern: '\\bwhile\\b', color: '#17a2b8' },
			{ pattern: '\\bConsole\\.WriteLine\\b', color: '#28a745' }
		]
	},
	assembly: {
		abbr: 'asm',
		keywords: [
			{ pattern: 'mov', color: '#007bff' },
			{ pattern: 'add', color: '#007bff' },
			{ pattern: 'sub', color: '#007bff' },
			{ pattern: 'jmp', color: '#dc3545' },
			{ pattern: 'je', color: '#dc3545' },
			{ pattern: 'call', color: '#17a2b8' },
			{ pattern: 'ret', color: '#17a2b8' }
		]
	},
	sql: {
		abbr: 'sql',
		keywords: [
			{ pattern: '\\bSELECT\\b', color: '#007bff' },
			{ pattern: '\\bFROM\\b', color: '#007bff' },
			{ pattern: '\\bWHERE\\b', color: '#007bff' },
			{ pattern: '\\bJOIN\\b', color: '#007bff' },
			{ pattern: '\\bGROUP\\b', color: '#007bff' },
			{ pattern: '\\bORDER\\b', color: '#007bff' },
			{ pattern: '\\bBY\\b', color: '#007bff' },
			{ pattern: '\\bINSERT\\b', color: '#28a745' },
			{ pattern: '\\bUPDATE\\b', color: '#28a745' },
			{ pattern: '\\bDELETE\\b', color: '#dc3545' }
		]
	},
	markdown: {
		abbr: 'md',
		keywords: [
			{ pattern: '# .*$', color: '#007bff' },
			{ pattern: '\\*\\*.*?\\*\\*', color: '#28a745' },
			{ pattern: '\\_.*?\\_', color: '#28a745' },
			{ pattern: '\\[.*?\\]\\(.*?\\)', color: '#6f42c1' },
			{ pattern: '\\`.*?\\`', color: '#6c757d' }
		]
	},
	bash: {
		abbr: 'sh',
		keywords: [
			{ pattern: 'echo', color: '#007bff' },
			{ pattern: 'if', color: '#dc3545' },
			{ pattern: 'else', color: '#dc3545' },
			{ pattern: 'for', color: '#17a2b8' },
			{ pattern: 'while', color: '#17a2b8' },
			{ pattern: '#.*$', color: '#6c757d' }
		]
	},
	latex: {
		abbr: 'tex',
		keywords: [
			{ pattern: '\\documentclass\\{.*?\\}', color: '#007bff' },
			{ pattern: '\\usepackage\\{.*?\\}', color: '#007bff' },
			{ pattern: '\\section\\{.*?\\}', color: '#007bff' },
			{ pattern: '\\subsection\\{.*?\\}', color: '#007bff' },
			{ pattern: '\\begin\\{.*?\\}.*?\\end\\{.*?\\}', color: '#6f42c1' },
			{ pattern: '%.*$', color: '#6c757d' }
		]
	}
};

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
		console.error('No filename class found for code block.');
		return 'pseudocode'; // Default to pseudocode
	}

	const filename = filenameElement.textContent.trim();
	const extension = filename.split('.').pop();

	const {abbr}=languages[extension]||'pseudocode'; // Default to pseudocode
	const language = abbr;
	return language;
}

function fetchFileContent(filename) {
	// Assuming the file is in the same directory as the HTML file
	return fetch(filename)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.status}`);
			}
			return response.text();
		})
		.catch(error => {
			console.error('There was a problem fetching the file:', error);
			return 'Error loading file content';
		});
}

function replaceCodeWithFileContent() {
	const codeElementsWithFilename = document.querySelectorAll('.box .filename');

	codeElementsWithFilename.forEach(codeElement => {
		const filename = codeElement.parentElement.querySelector('.filename').textContent.trim();

		// Fetch the content of the file based on the filename
		// Here you would use your method of loading the file content
		// For example, using XMLHttpRequest or fetch API
		const fileContent = fetchFileContent(filename); // Implement fetchFileContent function

		// Set the fetched file content as the code content
		codeElement.querySelector('.code').innerHTML = fileContent;
	});
}

//replaceCodeWithFileContent();

const codeBlocks = document.querySelectorAll('.box .code');

codeBlocks.forEach(codeBlock => {
	//const detectedLanguage = autoDetectLanguage(codeBlock);
	const detectedLanguage = 'cpp';
	highlightKeywords(codeBlock, detectedLanguage);
});