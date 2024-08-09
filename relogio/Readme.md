# @relogio - Garante uma hora v�lida

- Veja a vers�o online: [aqui.](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/Readme.md)
- Para programar na sua m�quina (local/virtual) use:
  - `tko down poo relogio`
- Se n�o tem o `tko`, instale pelo [LINK](https://github.com/senapk/tko#tko).

---

<!-- toch -->
[Intro](#intro) | [Treino](#treino) | [Draft](#draft) | [Guide](#guide) | [Shell](#shell)
-- | -- | -- | -- | --
<!-- toch -->

![cover](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/relogio/cover.jpg)

## Intro

Utilizando os comandos set para manter a hora correta

O sistema dever�:

- Gerenciar uma classe que guarda a hora, minuto e segundo.
- Ao iniciar a classe, hora, minuto e segundo devem ser setados para 0.
  - O construtor deve receber 3 par�metros, hora, minuto e segundo.
  - Para fazer a inicializa��o dos 3 par�metros, utilize os m�todos set.
- Crie os m�todos getters e setters para cada atributo.
  - Os m�todos set devem garantir que os valor atribu�ido sempre seja v�lido, ou n�o realize nenhuma mudan�a.
- Crie um m�todo que imprime a hora no formato HH:MM:SS.
- Crie um m�todo que incrementa o segundo em 1.

***

## Treino

- Parte 1: atributos p�blicos
  - Crie a classe rel�gio com os atributos p�blicos hora, minuto e segundo.
  - Crie o m�todo construtor que inicializa os atributos com 0.
  - Crie o m�todo toString que retorna a hora no formato HH:MM:SS.
  - Crie um objeto rel�gio, atribua valores para hora, minuto e segundo e imprima a hora.
  - Atribua valores inv�lidos para hora, minuto e segundo e imprima a hora.
- Parte 2: atributos privados
  - Torne os atributos hora, minuto e segundo privados.
  - Crie os m�todos getters e setters para cada atributo.
    - Nos m�todos set, N�O realize nenhuma valida��o.
  - Crie um objeto rel�gio, atribua valores para hora, minuto e segundo e imprima a hora.
  - Atribua valores inv�lidos para hora, minuto e segundo e imprima a hora.
- Parte 3: valida��o
  - Nos m�todos set, realize a valida��o dos valores.
    - Hora deve ser entre 0 e 23. Minuto e segundo devem ser entre 0 e 59.
  - Crie um objeto rel�gio, atribua valores para hora, minuto e segundo e imprima a hora.
  - Tente atribuir valores inv�lidos para hora, minuto e segundo e verifique se a hora permaneceu a mesma.
- Parte 4: construtor
  - Crie um m�todo construtor que recebe hora, minuto e segundo.
  - Utilize os m�todos set para fazer a inicializa��o dos atributos.
  - Tente atribuir valores inv�lidos para hora, minuto e segundo atrav�s do construtor e verifique se a hora permaneceu a mesma.
- Parte 5: nextSecond
  - Crie um m�todo nextSecond que incrementa o segundo em 1.
  - Crie um objeto rel�gio, atribua valores para hora, minuto e segundo e imprima a hora.
  - Teste o m�todo nextSecond criando horas com os seguintes valores e testando:
    - 10:02:30
    - 15:50:59
    - 21:59:59
    - 23:59:59

## Draft

<!-- links .cache/draft -->
- cpp
  - [fn.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/cpp/fn.hpp)
  - [shell.cpp](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/cpp/shell.cpp)
  - [time.hpp](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/cpp/time.hpp)
- java
  - [Shell.java](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/java/Shell.java)
  - [Time.java](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/java/Time.java)
- ts
  - [aashell.ts](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/ts/aashell.ts)
  - [time.ts](https://github.com/qxcodepoo/arcade/blob/master/base/relogio/.cache/draft/ts/time.ts)
<!-- links -->

## Guide

![diagrama](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/relogio/diagrama.png)

<!-- load diagrama.puml fenced=ts:filter -->

```ts
class Time {
  - hour   : int
  - minute : int
  - second : int
  __
  
  ' inicializa os atributos todos para 0
  ' invoca os m�todos setHour, setMinute e setSecond
  ' para tentar atribuir valores v�lidos
  + Time(hour : int, minute : int, second : int)
  
  ' retorna string no formato hh:mm:ss
  + toString() : string
  __
  
  ' apenas retorna o valor dos atributos
  + getHour()   : int
  + getMinute() : int
  + getSecond() : int
  __
  
  ' se valor for v�lido
  '  atribui ao atributo hour
  ' emite erro se for inv�lido
  + setHour  (value   : int)
  
  ' se valor for v�lido
  '   atribui ao atributo minute
  ' emite erro se for inv�lido
  + setMinute(value : int)
  
  ' se valor for v�lido
  '   atribui ao atributo second
  ' emite erro se for inv�lido
  + setSecond(value : int)
  __
  
  ' incrementa o atributo second em um segundo
  ' ent�o, se necess�rio, incrementa o atributo minute
  ' e, se necess�rio, incrementa o atributo hour
  + nextSecond()
}

class Legenda {
  + atributoPublic
  - atributoPrivate
  # atributoProtected
  __
  + m�todoPublic()
  - m�todoPrivate()
  # m�todoProtected()
}

```

<!-- load -->

***

## Shell

```bash
#__case set
$show
00:00:00

#__case set

$set 10 02 30
$show 
10:02:30

#__case set2
$set 15 50 59
$show
15:50:59

#__case error

$set 25 10 30
fail: hora invalida

$show
15:10:30

#__case error2
$set 1 70 50
fail: minuto invalido
$show
01:10:50

#__case error3
$set 23 59 70
fail: segundo invalido
$show
23:59:50

#__case next
$set 15 59 59
$show
15:59:59

#__case next2

$next
$show
16:00:00

$end
```

***

```bash
#__case set
$set 23 59 59
$show
23:59:59

#__case next3

$next
$show
00:00:00

$end
```

***

```bash
#__case init
$init 10 20 30
$show
10:20:30

#__case init2

$init 90 20 30
fail: hora invalida

$show
00:20:30

#__case init3
$init 90 100 60
fail: hora invalida
fail: minuto invalido
fail: segundo invalido

$show
00:00:00

$end
```
