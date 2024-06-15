# DevSecOps - Teste
DevOps não envolve apenas as equipes de desenvolvimento e de operações, é
preciso pensar na integração da segurança no desenvolvimento do inicio ao fim.

Aqui está o que gostaríamos de ver:

1 - Segurança da informação no processo de integração contínua CI/CD;

2 - Varreduras SAST/DAST, validação de dependência, scan de vulnerabilidade e
chaves de acesso expostas;

3 - Docker/Container;

4 - Cloud AWS;

5 - Git (Github/Gitlab).

### Para o desafio você é livre para utilizar as ferramentas que fique
confortável para você.

Seu desafio é criar um pipeline para implementação da aplicação com processos de
segurança de forma automatizada, disponibilizar acesso via web e implementar
itens de segurança na infraestrutura.

* Recomendamos a criação de uma conta de nível gratuito(free tier) para não
incorrer em custos.

## Desafio:

Estamos testando sua capacidade de implementar infraestrutura automatizada
moderna com segurança, bem como conhecimentos gerais sobre administração de
sistemas. Na sua solução, você deve enfatizar a legibilidade, a manutenção e as
metodologias de DevSecOps.

1 - Criar um Dockerfile para rodar uma aplicação a sua escolha. Recomendamos o
NodeJS do diretório ./app1.

2 - Criar um Pipeline com os passos abaixo(Checkout/Test/AppSec/Deploy).
Recomendamos CircleCI.

2.1 - Checkout -> Checkout do Código

2.2 - Test -> Teste com output "Fake test" ou o teste da sua aplicação.

2.3.1 - AppSec -> scan-app -> Teste a segurança da aplicação ./app2.
Recomendamos uma ou mais ferramentas SAST.

2.3.2 - AppSec -> scan-docker -> Teste a segurança do Dockerfile/Imagem(docker
image security scanning) criado para o ../app1.

2.4 - Deploy -> Criar um script para implementar de forma automatizada a
aplicação. Deploy deve ser feito via pipeline no local de sua escolha.
Recomendamos AWS (EC2, ECS, Fargate, Beanstalk, etc).

3 - Verificar headers HTTP de segurança ausentes na aplicação app1. Recomendamos
Burp Suite.

4 - Corrigir headers HTTP de segurança ausentes na aplicação app1.

5 - Disponibilizar uma URL/IP com o retorno da aplicação app1 "Hello World!
{hostname}!".

## Envie sua solução
Crie um repositório público(recomendamos o Github). Preferimos ver um histórico
de tentativa e erro do que um único push. Quando terminar, envie-nos a URL do
repositório do git, URL/IP da aplicação e relatório de segurança com as
evidências.

## Bônus
1 - Fazer upload do site ./app3/index.html para o s3, disponibilizar o acesso
via CloudFront e adicionar HTTP Security Headers com Lambda@Edge.

2 - Criar infraestrutura do projeto com Terraform.

### /app1 é uma aplicação NodeJS.

- `npm test` Roda o Fake test da aplicação
- `npm start` Inicia a aplicação na porta 3000

### /app2 é um componente para react-native.

- `npm install` Instala pacotes npm

### /app3 é um index.html.

- index.html simples
