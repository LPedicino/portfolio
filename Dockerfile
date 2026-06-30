# Etapa 1: Compilación de la app con Node
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx ultra liviano para producción
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/portfolio
RUN ln -sf /usr/share/nginx/html/portfolio/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]