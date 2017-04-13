.PHONY: all css server clean js webpack
all:
	(make css & make js & make server & wait)	

css:
	mkdir -p bundle
	./node_modules/postcss-cli/bin/postcss --watch --use autoprefixer --use postcss-import ./css/app.css --output ./bundle/app.css

server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.jsx'

clean:
	rm -r bundle

js:
	webpack -d --watch --progress ./js/app.jsx ./build/app.js --module-bind "js=babel" --module-bind "jsx=babel"
		

webpack:
	babel --watch ./js/app.jsx -s --out-file ./build/app.js 原来的js


