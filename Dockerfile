# Use a minimal OpenJDK image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Install curl inside the container
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Set up Artifactory credentials
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD

# Download JAR file from Artifactory
RUN curl -u ${ARTIFACTORY_USERNAME}:${ARTIFACTORY_PASSWORD} \
     -o assignment.calculator-0.0.1-SNAPSHOT.jar \
     "http://localhost:8081/artifactory/my-local-repo/target/assignment.calculator-0.0.1-SNAPSHOT.jar"

# Expose application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
