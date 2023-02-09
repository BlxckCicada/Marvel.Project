FROM node:latest as node
WORKDIR /app
COPY . . 
RUN npm install --force
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/marvel.project.client /usr/share/nginx/html
