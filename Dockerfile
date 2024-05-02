
FROM tomcat:10.1-jdk17-openjdk
 
ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD
 
RUN curl -u $ARTIFACTORY_USERNAME:$ARTIFACTORY_PASSWORD -o assignment.calculator-0.0.1-SNAPSHOT.jar "http://172.17.215.65:8082/artifactory/java/target/assignment.calculator-0.0.1-SNAPSHOT.jar"
 
ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
