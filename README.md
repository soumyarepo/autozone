# autozone
This is task for Autozone

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

docker build -t simple-https-app .
docker tag simple-https-app soumyakube/simple-https-app:latest
docker push soumyakube/simple-https-app:latest

kubectl create secret generic my-tls-secret --from-file=cert.pem --from-file=key.pem

kubectl logs simple-https-app-7d9b94cc58-d9zjp   -c simple-https-app

kubectl apply -k .


 # Add Liveness and Readiness Probes 
        livenessProbe:
          httpsGet:
            path: /healthz
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 15
        readinessProbe:
          httpsGet:
            path: /healthz
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 15
