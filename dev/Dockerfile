FROM node:lts-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3500
CMD ["node","app.js"]
