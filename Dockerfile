
FROM openjdk:17
 
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD
 
RUN curl -u $ARTIFACTORY_USERNAME:$ARTIFACTORY_PASSWORD -o assignment.calculator-0.0.1-SNAPSHOT.jar "http://localhost:8082/artifactory/java/target/assignment.calculator-0.0.1-SNAPSHOT.jar"
 
ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
