
FROM tomcat:10.1-jdk17-openjdk
EXPOSE 8080
 
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD

# Set environment variables for database connection
ENV SPRING_DATASOURCE_URL=jdbc:mysql://172.17.0.3:3306/calculator?useSSL=false
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=root
 
RUN curl -u $ARTIFACTORY_USERNAME:$ARTIFACTORY_PASSWORD -o assignment.calculator-0.0.1-SNAPSHOT.jar "http://172.17.215.65:8082/artifactory/java/target/assignment.calculator-0.0.1-SNAPSHOT.jar"
 
ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
