FROM node:lts-slim
WORKDIR /usr/src/app

# Copying package files efficiently
COPY ./pdfMerger/package*.json ./

# Install dependencies
RUN npm install

# Copying rest of the files
COPY ./pdfMerger/ .

EXPOSE 3000
CMD ["node", "server.js"]