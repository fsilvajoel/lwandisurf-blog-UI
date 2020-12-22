create_image:
	docker build . -t lwandisurf-ui/node:latest
container_up:
	docker run -dt -v /app/node_modules -v ${PWD}:/app -p 3000:3000 --network=lwandisurf-blog_default --rm --name lwandisurf-ui lwandisurf-ui/node:latest
container_down:
	docker container stop lwandisurf-ui
