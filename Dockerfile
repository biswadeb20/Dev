FROM mcr.microsoft.com/windows/servercore:ltsc2019

ENV ARTIFACTORY_USERNAME
ENV ARTIFACTORY_PASSWORD

SHELL ["powershell", "-Command"]

RUN Invoke-WebRequest -OutFile assignment.calculator-0.0.1-SNAPSHOT.jar -Uri "http://localhost:8082/artifactory/jenkin_demo/target/assignment.calculator-0.0.1-SNAPSHOT.jar" -Credential (New-Object System.Management.Automation.PSCredential($Env:ARTIFACTORY_USERNAME, (ConvertTo-SecureString $Env:ARTIFACTORY_PASSWORD -AsPlainText -Force)))

ENTRYPOINT ["java", "-jar", "assignment.calculator-0.0.1-SNAPSHOT.jar"]
