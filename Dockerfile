# Establecer la imagen base
FROM node:14

# Crear el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente al directorio de trabajo
COPY . .

# Exponer el puerto que la aplicación utilizará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
