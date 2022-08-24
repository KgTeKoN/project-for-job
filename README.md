npm start - for run server

npm test - for testing

http://localhost:5000/api-docs/#/ - swagger

http://localhost:5000/api/v1/health - endpoint

docker build . -t nodejs-tutorial --secret id=npmrc,src=.npmrc - command for create Docker image

DOCKER_BUILDKIT=1 docker build . -t nodejs-tutorial --build-arg NPM_TOKEN=1234 --secret id=npmrc,src=.npmrc
Secrets are a new feature in Docker and if you’re using an older version, you might need to enable it Buildkit as follows:
