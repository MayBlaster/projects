$(info $(SHELL))

#Install necessary frontend libraries
npm-setup:
	npm install shadow-cljs
	npm install react react-dom react-refresh tailwindcss

#Make backend clojure REPL developer mode
dev-backend:
	clj -A:nrepl

#Make frontend clojure REPL developer mode
dev-frontend:
	npm start

#Make backend release
release-backend:
	clojure -A:package -m projects.package

#Make frontend release
release-frontend:
	./node_modules/.bin/shadow-cljs release projects

#Make app release
app-release:
	make release-backend
	make release-frontend

#Format code
format:
	clj -A:format

# Run backend test
backend-test:
	clj -A:test