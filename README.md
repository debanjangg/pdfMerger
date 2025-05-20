# pdfMerger
pdfMerger is a JavaScript based web application which can merge uploaded pdfs. It uses ExpressJS as the backend framework.

The docker file (dockerfile) can be used to build the Docker container and run it, without requiring any changes to the host environment.

## How to run using Dockerfile (You need to have Docker installed)
1. Clone this repository to your local machine.
2. Open the repository folder.
3. Build the dockerfile using the command: `docker build -t pdf_merger:v1.1 . -f dockerfile` 
4. Run the docker build using the command: `docker run -d -p 3000:3000 pdf_merger:v1.1`

To check if the container is running, use the command: `docker ps`

If the app doesn't behave as expected, you can view the logs using the command: `docker logs <container_id>`
