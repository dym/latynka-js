.PHONY: test

all: test

test:
	./node_modules/.bin/mocha --reporter spec

