# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install project dependencies (including types for React)
RUN npm install
RUN npm install --save-dev @types/react @types/react-dom

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use NGINX as a lightweight web server to serve the built app
FROM nginx:alpine

# Step 8: Copy the build folder from the previous stage into NGINX's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to be accessible externally
EXPOSE 80

# Step 10: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
