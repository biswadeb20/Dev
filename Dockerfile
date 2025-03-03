FROM tomcat:10.1-jdk17-openjdk
EXPOSE 8080

ARG ARTIFACTORY_USERNAME
ARG ARTIFACTORY_PASSWORD

ENV SPRING_DATASOURCE_URL=jdbc:mysql://172.17.0.3:3306/calculator?useSSL=false
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=root

# Download the JAR file from Artifactory
RUN curl -u $ARTIFACTORY_USERNAME:$ARTIFACTORY_PASSWORD -o assignment.calculator-0.0.1-SNAPSHOT.jar "http://localhost:8081/artifactory/my-local-repo/target/assignment.calculator-0.0.1-SNAPSHOT.jar"

ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]