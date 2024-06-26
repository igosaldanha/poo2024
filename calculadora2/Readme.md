# Cuidado com a bateria da @calculadora2

- Veja a versão online: [aqui.](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/Readme.md)
- Para programar na sua máquina (local/virtual) use:
  - `tko down poo calculadora2`
- Se não tem o `tko`, instale pelo [LINK](https://github.com/senapk/tko#tko).

---

<!-- toch -->
[Model](#model) | [Intro](#intro) | [Guide](#guide) | [Shell](#shell) | [Draft](#draft) | [Cheat](#cheat)
-- | -- | -- | -- | -- | --
<!-- toch -->

![cover](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/calculadora2/cover.jpg)

## Model

Essa atividade utiliza um padrão de projeto de requisições e respostas.

- Os testes são feitos através de requisições de texto e podem ser vistos na seção [Shell](#shell).
- A classe `Shell` é responsável por ler as requisições de texto, decodificar e chamar os métodos da classe `Adapter`.
- Na classe `Adapter` é onde você deve implementar e conectar seu código.
- A classe `Adapter` é apenas a classe de conexão, você deve as classes que implementam a lógica do problema. Use como base o diagrama de classes e a descrição do problema.
- Mensagens de erros podem ser lançadas por exceções ou comandos de `print` diretamente para o terminal.
- Ao mostrar uma string formatada, será utilizado o modelo do python `f"{variavel:param}"`.
- Na seção de [Cheat](#cheat), você pode conferir as respostas dessa atividade.

## Intro

O objetivo dessa atividade é implementar uma calculadora a bateria. Se há bateria, ela executa operações de soma e divisão. É possível também mostrar a quantidade de bateria e recarregar a calculadora. Ela avisa quando está sem bateria e se há tentativa de divisão por 0. A classe de adaptação abaixo mostra a lógica para cada requisição.

- Descrição
  - A calculadora possui um display e uma bateria.
  - O display é onde o resultado das operações é armazenado.
  - A bateria é a quantidade de energia que a calculadora possui.
  - Cada operação gasta um ponto de bateria.
  - A calculadora não pode realizar operações se não houver bateria.
  - A calculadora não pode realizar divisões por zero.
- Reponsabilidades
  - O código deve ser implementado na classe `Calculadora`.
  - A classe `Adapter` é responsável por chamar os métodos da classe `Calculadora`.
  - A classe `Shell` é responsável por ler as requisições de texto e chamar os métodos da classe `Adapter`.
- Comandos
  - Todos os comandos seguem o modelo `$comando arg1 arg2 ...`.
  - `$show` - Mostra o display e a bateria.
    - `f"{this.display:.2f}, {this.battery}"`
  - `$init batteryMax` - Inicializa a calculadora com a quantidade máxima de bateria e o display zerado.
  - `$charge value` - Adiciona carga à bateria, mas não pode ultrapassar o limite.
  - `$sum a b` - Soma dois valores e guarda no display.
    - Se não houver bateria, emita a mensagem `fail: bateria insuficiente`.
  - `$div a b` - Divide dois valores e guarda no display.
    - Se não houver bateria, emita a mensagem `fail: bateria insuficiente`.
    - Se houver divisão por zero, emita a mensagem `fail: divisao por zero`.
  - `$end` - Finaliza a execução.

## Guide

![diagrama](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/calculadora2/diagrama.png)

- Parte 1
  - Crie a classe Calculator com os três atributos.
  - Através do construtor, inicialize os valores de acordo adequadamente.
  - Crie o método toString e gere a saída conforme.
  - Inicie algumas calculadoras e teste imprimir o toString.
  - Se ainda estiver aprendendo, consulte os códigos  abaixo. Lembre que o toString não imprime, ele retorna o valor.
- Parte 2
  - Crie o método `charge`. Tente adicionar carga à bateria.
  - Verifique se ele adiciona além do limite.
- Parte 3
  - Crie o método para somar.
  - Verifique se a soma é guardada no display ao invés de impressa diretamente.
  - Imprima a mensagem de erro adequada se não houver bateria.
  - Lembre de gastar bateria.
- Parte 4
  - Crie o método para dividir.
  - Verifique se existe bateria, se existir gaste, se não, emita o erro.
  - Verifique se a divisão é possível, se não for, emita o erro e retorne.
  - Guarde o resultado no display.
- Parte 5 - Integração
  - Tente integrar seu código na classe `Adapter`.
  - Crie uma `Calculadora` como atributo de `Adapter` e a inicialize no construtor.
  - Na médoto `init` de `Adapter`, recrie o objeto `Calculadora`.
  - Nos outros métodos de `Adapter`, chame o método equivalente da classe `Calculadora`.
  
```java
// java
public String toString() {
    // Dependendo da configuração do sistema, o java usa vírgula nos decimais. 
    // Para contornar isso e gerar sempre com ponto, usamos a classe Decimal Format
    DecimalFormat df = new DecimalFormat("0.00");
    return String.format("display = %s, battery = %d", df.format(this.display), this.battery);
}

//ts
toString(): string {
    // o typescript usa o modelo crase %{} para string de substituição
    return `display = ${this.display.toFixed(2)}, battery = ${this.battery}`;
}

//cpp
std::string str() const {
    // a biblioteca auxiliar de formatação permite formatar como o format do python
    return fn::format("display = {%.2f}, battery = {}", this->display, this->battery); 
}

```

## Shell

### Primeira simulação

```bash
#TEST_CASE iniciar mostrar e recarregar

$init 5
$show
display = 0.00, battery = 0

```

```bash
#TEST_CASE charge

$charge 3
$show
display = 0.00, battery = 3
$charge 1
$show
display = 0.00, battery = 4
```

```bash
#TEST_CASE boundary

$charge 2
$show
display = 0.00, battery = 5
```

```bash
#TEST_CASE reset

$init 4
$charge 2
$show
display = 0.00, battery = 2
$charge 3
$show
display = 0.00, battery = 4

```

```bash
$end
```

### Segunda simulação

```bash
#TEST_CASE somando

$init 2
$charge 2
$sum 4 3
$show
display = 7.00, battery = 1
```

```bash
#TEST_CASE gastando bateria

$sum 2 3
$show
display = 5.00, battery = 0
```

```bash
#TEST_CASE sem bateria

$sum -4 -1
fail: bateria insuficiente
```

```bash
#TEST_CASE recarregando

$charge 1
$show
display = 5.00, battery = 1
$sum -4 -2
$show
display = -6.00, battery = 0
```

```bash
$end
```

### Terceira simulação

```bash
#TEST_CASE dividindo

$init 3
$charge 3
$div 6 3
$show
display = 2.00, battery = 2
```

```bash
#TEST_CASE dividindo por zero gastando bateria

$div 7 0
fail: divisao por zero
$show
display = 2.00, battery = 1
```

```bash
#TEST_CASE gastando bateria

$div 7 2
$div 10 2
fail: bateria insuficiente
$show
display = 3.50, battery = 0
```

```bash
$end
```

## Draft

<!-- draft -->
- cpp
  - [adapter.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/cpp/adapter.hpp)
  - [fn.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/cpp/fn.hpp)
  - [shell.cpp](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/cpp/shell.cpp)
- java
  - [Adapter.java](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/java/Adapter.java)
  - [Shell.java](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/java/Shell.java)
- ts
  - [.vscode](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/ts/.vscode)
  - [adapter.ts](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/ts/adapter.ts)
  - [shell.ts](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/lang/ts/shell.ts)

<!-- draft -->

## Cheat

- [cheat.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/cheat.hpp)
- [cheat.java](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/cheat.java)
- [cheat.ts](https://github.com/qxcodepoo/arcade/blob/master/base/calculadora2/.cache/cheat.ts)
