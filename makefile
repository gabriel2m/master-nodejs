install:
	cp .env.example .env
	docker compose run --rm app npm i
	$(MAKE) run

run:
	docker compose up -d
