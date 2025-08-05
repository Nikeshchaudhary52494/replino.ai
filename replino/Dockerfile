# Stage 1: Build the application
FROM maven:3.9.5-eclipse-temurin-21-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the project files
COPY .mvn .mvn
COPY pom.xml .
COPY src ./src

# Build the application
# The `dependency:go-offline` command pre-downloads all dependencies
# The `clean package` command creates the executable JAR
RUN mvn dependency:go-offline
RUN mvn clean package -DskipTests

# Stage 2: Create the final image
FROM eclipse-temurin:21-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the 'build' stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your application listens on
EXPOSE 8080

# Define the command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]