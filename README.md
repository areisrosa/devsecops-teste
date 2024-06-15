## :car: Junto Seguro (DevSecOps) :shield:

> **Motivação** :thought_balloon: <br>
> <em>DevOps</em> não envolve apenas as equipes de desenvolvimento e de
> operações, é preciso pensar na integração da segurança no desenvolvimento do
> inicio ao fim.

## :bookmark_tabs: Introdução

1. Segurança da informação no processo de integração contínua CI/CD;

2. Varreduras SAST/DAST, validação de dependência, scan de vulnerabilidade e
chaves de acesso expostas;

3. Docker/Container;

4. Cloud AWS;

5. Git (Github/Gitlab).

### Tecnologias e ferramentas usadas no projeto:

* Linguagens: [nodejs](https://nodejs.org/en/);
* Controle de Versão: [git](https://git-scm.com/);
* Container: [docker](https://www.docker.com/);
* Repositorio: [github](github.com);
* CI/CD: [github action](github.com);
* Segurança: [snyk](https://snyk.io/), [trivy](trivy.dev), [burp](https://portswigger.net/burp);
* InfCode: [terraform](https://www.terraform.io/);
* Cloud: [aws](https://aws.amazon.com/pt/).

## :computer: Desenvolvimento :tea:

Este é um projeto que não precisa instalar bibliotecas de Ruby localmente ao
invés disso é possível rodar tudo nos conteiners, então faça as instalações do
`docker` e `docker-compose`, além disso, é uma boa prática não instalar
dependências do projeto em seu próprio sistema operacional. A aplicação contem
os seguintes containers descritas no `docker-compose.yml`:

* `app1` a <em>app1</em> no qual será realizado o deploy.
* `app2` o <em>app2</em> de teste de SAST/DAST.
* `app3` o <em>app3</em> upload do site index.html para o s3,
disponibilizar o acesso via cloud front e adicionar http security headers com
lambda@edge.

### Pré-requisitos:
 
 - Ter o [Docker](https://www.docker.com/) instalado;
 - Ter um editor ou uma IDE de sua preferência configurado, nós sugerimos as
   seguintes ferramentas:

   * [ Lvim ](https://www.lunarvim.org/)
   * [ VSCode ](https://code.visualstudio.com/)

### Instalação de docker e docker-compose:

* Se você não tem o `docker` instalado, [pode seguir este
 tutorial](https://docs.docker.com/get-docker/);

* Se você não tem o `docker-compose` instalado, [pode seguir este
tutorial](https://docs.docker.com/compose/install/).

### Segurança

Uma das grandes vantagens do uso do `docker` é a criação de imagens a partir de
uma já existente, portanto, é preciso ter cautela na utilização delas
porque muitas destas imagens podem estar mal configuradas, ou pior, podem conter
<em>malwares</em>, para mitigar essa possibilidade é indispensável o uso de
imagens autênticas disponibilizadas diretamente do [Docker
Hub](https://hub.docker.com/).

Para garantir isso, o uso do recurso [Docker Content
Trust](https://docs.docker.com/engine/security/trust/), ele é responsável por
validar as imagens, reconhecendo a sua autenticidade, portanto, é crucial que
ele seja habilitado, para isso, você precisa exportá-la para o seu profile no seu terminal
(.bashrc, .zshrc, entre outros), ou seja, via `export` no seu shell favorito:

```shell
export DOCKER_CONTENT_TRUST=1
```

> :notebook_with_decorative_cover: **NOTE**: Se imagem não for assinada você
> receberá a mensagem <em>(...) remote trust data not exist (...)</em>.

### Variáveis de ambiente
O sistema está preparado para carregar um `.env` ou ter as variáveis previamente
exportadas para o ambiente em que está sendo executado.

```shell
$ cp .env.development .env # (Desenvolvimento)
```

```shell
$ cp .env.test .env # (Teste)
```

### Construindo os containers

```shell
$ docker-compose build
```

> :warning: **WARNING**: Se você estiver executando o docker no GNU/Linux, os
> arquivos recém-criados pertencem ao root, portanto, altere a propriedade dos
> novos arquivos com o seguinte comando `sudo chown -R $USER:$USER .`

### Subindo os containers em <em>background</em>

Após o termino das instalações acima, então você terá os containers instalado,
agora basta rodar o seguinte comando:

```shell
$ docker-compose up --build
```

Se for a primeira vez que você executa esse comando, os serviços listados no
`docker-compose.yml` levaram um tempo para serem construídos, porém nas
próximas vezes que você executar o mesmo comando ele irá subir na hora os
containers.

Pode ir tomar um café ou alguma bebida de sua preferência pois isso vai levar
um tempo para terminar.

> :warning: **WARNING**: Terminando a execução deste commando, ambiente de
> desenvolvimento estará pronto.

### Acesso aos <em>logs</em>

Para visualizar as últimas linhas do <em>log</em> do container `junto`:

```shell
$ docker-compose logs -f --tail=100 junto
```

### Parar os <em>containers</em> e remover <em>containers</em>, <em>networks</em>, <em>volumes</em> e <em>imagens</em>

```shell
$ docker-compose down
```

### Testes

Caso queira executar os testes na aplicação, basta referenciar o <em>path</em>
do <em>jest(tion)</em> desejado:

```shell
$ npx jest
```

### Atualizações e Instalações das dependências:

- Executando fora do container:

```shell
$ docker-compose exec junto-app1 npm update
```

```shell
$ docker-compose exec junto-app1 npm install
```

> :notebook_with_decorative_cover: **NOTE**: Para desenvolvimento local usando o
> `docker` e `docker-compose` isso é tudo. :slightly_smiling_face: :tada:
