# Usa l'immagine ufficiale Node.js (versione 18)
FROM node:18

# Imposta la cartella di lavoro dentro il container
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto dei file nel container
COPY . .

# Esponi la porta 3000 (modifica se serve)
EXPOSE 3000

# Comando per avviare l'app
CMD ["node", "index.js"]
