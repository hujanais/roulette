Create DockerFile and nginx.conf files
change "outputPath": "dist",
heroku container:login
heroku container:push web -a spb-roulette
heroku container:release web -a spb-roulette
https://spb-roulette.herokuapp.com/
