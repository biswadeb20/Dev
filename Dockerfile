# Use a minimal OpenJDK image since our JAR has an embedded server
FROM openjdk:17-jdk-slim
WORKDIR /app

# Install curl inside the container
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*


# Define build arguments to be passed at build time
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD
ARG ARTIFACTORY_URL
ARG ARTIFACTORY_REPO

# Set the environment variables for database connectivity
ENV SPRING_DATASOURCE_URL="jdbc:mysql://172.17.0.3:3306/calculator?useSSL=false"
ENV SPRING_DATASOURCE_USERNAME="root"
ENV SPRING_DATASOURCE_PASSWORD="root"

# Download the JAR file from Artifactory using passed build arguments.
RUN curl -u ${ARTIFACTORY_USERNAME}:${ARTIFACTORY_PASSWORD} \
     -o assignment.calculator-0.0.1-SNAPSHOT.jar \
     "${ARTIFACTORY_URL}${ARTIFACTORY_REPO}/target/assignment.calculator-0.0.1-SNAPSHOT.jar"

# Expose the application port
EXPOSE 8080

# Set the default command to run the application
ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
