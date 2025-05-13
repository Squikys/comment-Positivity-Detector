### COMPOSE COMMANDS
.PHONY: compose-build
compose-build:
	docker compose build

.PHONY: compose-up
compose-up:
	docker compose up

.PHONY: compose-up-build
compose-up-build:
	docker compose up --build

.PHONY: compose-down
compose-down:
	docker compose down


### BUILDING CONTAINERS
.PHONY: docker-build-all
docker-build-all:
	docker build -t nginx_frontend -f ./frontend/Dockerfile ./frontend/
	docker build -t fastapi_backend -f ./backend/Dockerfile ./backend/

.PHONY: docker-run-all
docker-run-all:
### REMOVING CONFLICTS
	$(MAKE) docker-stop 
	$(MAKE) docker-rm

### RUNNING CONTAINERS
	docker run -d --name nginx_frontend -p 8080:8080 nginx_frontend
	docker run -d --name fastapi_backend -p 8000:8000 fastapi_backend


.PHONY: docker-stop
docker-stop:
	-docker stop nginx_frontend
	-docker stop fastapi_backend

.PHONY: docker-rm
docker-rm:
	-docker container rm nginx_frontend
	-docker container rm fastapi_backend