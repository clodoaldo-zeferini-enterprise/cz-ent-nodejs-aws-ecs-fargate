# cz-ent-nodejs-aws-ecs-fargate
cz-ent-nodejs-aws-ecs-fargate

Sequência de publicação do docker no AWS Fargate

1 - (Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 504330613280.dkr.ecr.us-east-1.amazonaws.com

2 - docker build -t fargate-nodejs-app .

3 - docker tag fargate-nodejs-app:latest 504330613280.dkr.ecr.us-east-1.amazonaws.com/fargate-nodejs-app:latest

4 - docker push 504330613280.dkr.ecr.us-east-1.amazonaws.com/fargate-nodejs-app:latest