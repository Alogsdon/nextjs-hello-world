
up: build-image start attach

down: 
	docker compose down

sh:
	docker compose run app sh

build: build-image
	docker compose run app yarn build

build-image:
	docker compose build

rebuild:
	docker compose build --no-cache

# -d runs detached
start:
	docker compose up -d

attach:
	docker compose logs -f

