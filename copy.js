function addCopyButtons() {
	const filenameElements = document.querySelectorAll('.box .filename');

	filenameElements.forEach(filenameElement => {
		const copyButton = document.createElement('span');
		copyButton.classList.add('copy-button');
		copyButton.textContent = 'Copy';
		copyButton.onclick = function() {
			copyCode(this);
		};
		filenameElement.insertBefore(copyButton, filenameElement.firstChild);
	});
}

function copyCode(button) {
	const codeBlock = button.parentElement.parentElement.querySelector('.code');
	const codeText = codeBlock.textContent;

	navigator.clipboard.writeText(codeText);
}

addCopyButtons();