# create_image:
# 	docker build . -t lwandisurf-ui/node:latest --no-cache
# container_up:
# 	docker run -dt -v /app/node_modules -v ${PWD}:/app -p 3000:3000 --network=lwandisurf-blog_default --rm --name lwandisurf-ui lwandisurf-ui/node:latest
# container_down:
# 	docker container stop lwandisurf-ui
# container_logs:
# 	docker container logs lwandisurf-ui -f

# Starts the stack
up:
	docker-compose -f docker-compose-dev.yml up --build

# Starts the stack in background mode
up-daemon:
	docker-compose -f docker-compose-dev.yml up -d --build

# Down the stack
down:
	docker-compose -f docker-compose-dev.yml down

# Down the stack and drop containers volumes
down-v:
	docker-compose -f docker-compose-dev.yml down -v

# Show stack logs
logs:
	docker-compose -f docker-compose-dev.yml logs

# Show stack real time logs 
logs-f:
	docker-compose -f docker-compose-dev.yml logs --follow