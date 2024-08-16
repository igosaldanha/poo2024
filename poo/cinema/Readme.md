# @cinema - Gerenciando reservas e cancelamentos de uma sala de cinema

- Veja a vers�o online: [aqui.](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/Readme.md)
- Para programar na sua m�quina (local/virtual) use:
  - `tko down poo cinema`
- Se n�o tem o `tko`, instale pelo [LINK](https://github.com/senapk/tko#tko).

---

<!-- toch -->
[Intro](#intro) | [Guide](#guide) | [Draft](#draft) | [Shell](#shell)
-- | -- | -- | --
<!-- toch -->

![cover](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/cinema/cover.jpg)

## Intro

O objetivo desta atividade � implementar m�todos para manipular uma sala de cinema, permitindo a reserva, cancelamento e consulta de cadeiras.

- **Descri��o**
  - A sala de cinema � representada pela classe `Sala`, que possui um conjunto de cadeiras, cada uma associada a um cliente ou vazia.
  - Os m�todos a serem implementados permitir�o reservar uma cadeira para um cliente, cancelar a reserva de uma cadeira e consultar o estado das cadeiras na sala.
  - Cada cadeira pode estar associada a um objeto `Client`, representando um cliente que reservou a cadeira, ou ser nula, indicando que a cadeira est� vazia.
  - Os m�todos fornecidos devem lidar com valida��es, como verificar se a cadeira existe, se est� ocupada e se o cliente j� est� presente na sala.

- **Responsabilidades**
  - A classe `Sala` � respons�vel por gerenciar as opera��es relacionadas �s cadeiras na sala de cinema.
    - M�todos a serem implementados:
      - p�blicos: s�o m�todos acessados por outras classes.
        - `reservar(id: string, fone: number, ind: number)`: Reserva uma cadeira para um cliente com o ID e telefone especificados.
        - `cancelar(id: string)`: Cancela a reserva de uma cadeira para o cliente com o ID especificado.
        - `getCadeiras(): Array(Client | null)`: Retorna um array contendo o estado atual de todas as cadeiras na sala.
        - `toString(): string`: Retorna uma representa��o em string do estado atual das cadeiras na sala.
      - privados: s�o m�todos apenas de uso interno, utilizados para auxiliar as opera��es da classe.
        - `procurar(nome: string): int`: Procura o �ndice da cadeira reservada pelo cliente com o nome especificado.
        - `verificarIndice(indice: number)`: Verifica se um �ndice de cadeira � v�lido na sala.
  - A classe `Client` � respons�vel por representar os clientes que reservam cadeiras na sala de cinema.
    - A classe possui m�todos para obter e definir o ID e telefone do cliente, bem como uma representa��o em string do cliente.
  - A classe `Adapter` atua como uma ponte entre os m�todos de teste e as opera��es da sala de cinema.
    - Ela integra os m�todos de teste com as opera��es da sala de cinema, permitindo a execu��o de comandos como reserva, cancelamento e consulta de cadeiras.

## Guide

![diagrama](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/cinema/diagrama.png)

### Parte 1: Reservar Cadeira

- **Passo 1:** Crie a classe `Client` com os atributos `id` e `fone`. Lembre de implementar os gets e os sets. Crie tamb�m o m�todo toString. Exemplo de retorno: `joao:3131`.

- **Passo 2:** Crie a classe `Sala` com o atributo `cadeiras`, um array de cadeiras que pode conter objetos `Client` ou ser nulo. Ao inicializar o array de cadeiras no construtor, todas as posi��es devem ser nulas.

- **Passo 3:** Implemente o m�todo `toString(): string` na classe `Sala`:
  - Percorra o array de cadeiras.
  - Para cada cadeira ocupada, adicione a representa��o do cliente � string resultante.
  - Para cadeiras vazias, adicione '-' � string resultante.
  - Exemplo: `[davi:3232 - - joao:3131]`

- **Passo 4:** Implemente o m�todo `procurar(nome: string): number` na classe `Sala`:
  - Percorra o array de cadeiras.
  - Se encontrar uma cadeira ocupada com o ID fornecido, retorne o �ndice da cadeira.
  - Se n�o encontrar, retorne -1.

- **Passo 5:** Implemente o m�todo `verificarIndice(indice: number): boolean` na classe `Sala`:
  - Verifique se o �ndice fornecido est� dentro dos limites do array de cadeiras.
  - Retorne true se estiver dentro dos limites, caso contr�rio, retorne false.

- **Passo 6:** Implemente o m�todo `reservar(id: string, fone: number, ind: number): boolean` na classe `Sala`:
  - Verifique se o �ndice da cadeira fornecido � v�lido. Se n�o for, emita a mensagem de erro `fail: cadeira nao existe`.
  - Verifique se a cadeira est� vazia. Se n�o estiver, emita a mensagem de erro `fail: cadeira ja esta ocupada`.
  - Verifique se o cliente j� est� na sala. Se estiver, emita a mensagem de erro `fail: cliente ja esta no cinema`.
  - Se todas as verifica��es passarem, crie um novo objeto `Client` e insira na cadeira.
  - Retorne true se a reserva for bem-sucedida, caso contr�rio, retorne false.

- **Passo 7:** Implemente o m�todo `cancelar(id: string): void` na classe `Sala`:
  - Verifique se o cliente est� na sala. Se n�o estiver, emita a mensagem de erro `fail: cliente nao esta no cinema`.
  - Se estiver, remova o cliente da cadeira.

- **Passo 8:** Crie um objeto `sala` e verifique se est� vazia.

- **Passo 9:** Reserva uma cadeira para um cliente usando o m�todo `reservar(id, fone, ind)`.

- **Passo 10:** Verifique se a cadeira foi reservada corretamente.

### Parte 2: Cancelar Reserva de Cadeira

- **Passo 1:** Tente cancelar a reserva de uma cadeira usando o m�todo `cancelar(id)`.

- **Passo 2:** Verifique se a reserva foi cancelada corretamente.

### Parte 3: Consultar Estado das Cadeiras

- **Passo 1:** Chame o m�todo `toString()` da sala para obter uma representa��o do estado atual das cadeiras.

- **Passo 2:** Verifique se a representa��o das cadeiras est� correta.

### Integra��o com a Classe Adapter

- **Passo 1:** Utilize a classe `Adapter` para integrar os m�todos de reserva, cancelamento e consulta de cadeiras na sala de cinema.

## Draft

<!-- links .cache/draft -->
- cpp
  - [adapter.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/cpp/adapter.hpp)
  - [flow.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/cpp/flow.hpp)
  - [shell.cpp](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/cpp/shell.cpp)
- java
  - [Adapter.java](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/java/Adapter.java)
  - [Shell.java](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/java/Shell.java)
- ts
  - [aashell.ts](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/ts/aashell.ts)
  - [adapter.ts](https://github.com/qxcodepoo/arcade/blob/master/base/cinema/.cache/draft/ts/adapter.ts)
<!-- links -->

## Shell

```bash
#TEST_CASE init 1
$show
[]
#TEST_CASE init 2
$init 5
$show
[- - - - -]
#TEST_CASE init 3
$init 4
$show
[- - - -]
$end
```

```sh
#TEST_CASE reservas

$init 4
$reservar davi 3232 0
$reservar joao 3131 3
$show
[davi:3232 - - joao:3131]

#TEST_CASE ocupado

$reservar rute 3030 0
fail: cadeira ja esta ocupada

#TEST_CASE duplicado

$reservar davi 3234 2
fail: cliente ja esta no cinema
$end
```

```sh
#TEST_CASE cadeira invalida

$init 4
$reservar davi 3232 5
fail: cadeira nao existe

#TEST_CASE cancelamentos

$reservar davi 3232 0
$reservar joao 3131 3
$cancelar davi
$show
[- - - joao:3131]

#TEST_CASE cancelamentos errado

$cancelar rita
fail: cliente nao esta no cinema
$show
[- - - joao:3131]
$end
```

