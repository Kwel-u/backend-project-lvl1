install: install-deps

install-deps:
	npm ci

lint:
	npx eslint .

link:
	npm link

unlink:
	npm unlink

publish:
	npm publish --dry-run
