FROM node:12

# Create Directory for the Container
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

# Copy all other source code to work directory
COPY . /usr/src/app

RUN npm run build

CMD ["node", "index"]

EXPOSE 8080
