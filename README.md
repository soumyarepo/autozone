# autozone
This is task for Autozone

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

docker build -t simple-https-app .
docker tag simple-https-app soumyakube/simple-https-app:latest
docker push soumyakube/simple-https-app:latest