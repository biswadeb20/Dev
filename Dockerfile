
FROM tomcat:10.1-jdk17-openjdk

ENV APP_HOME=/usr/src/app
WORKDIR $APP_HOME

# Copy application JAR
COPY target/calculator-app.jar calculator-app.jar

# Install MySQL client (optional, for debugging)
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt/lists/*

# Expose the port
EXPOSE 8080

# Start application
ENTRYPOINT ["java", "-jar", "calculator-app.jar"]
