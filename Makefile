
up: build start attach

down: 
	docker-compose down

sh:
	docker-compose run app sh

build:
	docker-compose build

rebuild:
	docker-compose build --no-cache

# -d runs detached
start:
	docker-compose up -d

attach:
	docker-compose logs -f

