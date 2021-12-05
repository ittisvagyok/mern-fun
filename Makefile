.PHONY: up
up:
	docker-compose up -d

start:
	docker-compose start

stop:
	docker-compose stop

logs:
	docker-compose logs -f $(filter-out $@,$(MAKECMDGOALS))