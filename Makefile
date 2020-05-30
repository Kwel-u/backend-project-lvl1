install: install-deps

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
