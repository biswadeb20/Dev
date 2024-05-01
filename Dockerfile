
FROM openjdk:17
EXPOSE 8080
 
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD
 
RUN curl -u $ARTIFACTORY_USERNAME:$ARTIFACTORY_PASSWORD -o basic-java-project-0.0.1-SNAPSHOT.jar "http://localhost:8082/artifactory/jenkin_demo/target/assignment.calculator-0.0.1-SNAPSHOT.jar"
 
ENTRYPOINT ["java", "-jar", "basic-java-project-0.0.1-SNAPSHOT.jar"]
