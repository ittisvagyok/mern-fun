.PHONY:
up:
	docker-compose up -d

start:
	docker-compose start

stop:
	docker-compose stop

logs:
	docker-compose logs -f $(filter-out $@,$(MAKECMDGOALS))

shell:
	docker exec -it $(filter-out $@,$(MAKECMDGOALS)) /bin/bash