# @busca - Opera��es I

- Veja a vers�o online: [aqui.](https://github.com/qxcodepoo/arcade/blob/master/base/busca/Readme.md)
- Para programar na sua m�quina (local/virtual) use:
  - `tko down poo busca`
- Se n�o tem o `tko`, instale pelo [LINK](https://github.com/senapk/tko#tko).

---


<!-- toch -->
[Intro](#intro) | [Draft](#draft) | [Shell](#shell)
-- | -- | --
<!-- toch -->

![cover](https://gist.github.com/assets/4747652/c22c464a-b797-4bd7-b963-4e4f1ee7f96b)

***

## Intro

- Na entrada de um evento de um experimento social, os participantes ganhavam uma pulseira especial que precisavam ficar utilizando.
- A pulseira informava, num pequeno visor, um n�mero inteiro que representava o n�vel de stress daquele participante.
- O n�mero 1 significava totalmente tranquilo e vai aumentando conforme o stress do participante aumentava at� o valor m�ximo de infinito.
- Para fazer uma representa��o l�gica de homens e mulheres em um vetor de inteiros, os n�meros positivos representam os homens e os n�meros negativos representam mulheres.
- Precisamos escrever os algoritmos que identifiquem informa��es importantes sobre os participantes da fila.

**Exemplos:**

- `{}` equivale a uma fila vazia.
- `{-1, -50, -99}` equivale a uma mulher totalmente tranquila, uma mulher m�dio estressada e uma mulher extremamente estressada.
- `{80, 70, 90, -4}` equivale a tr�s homens estressados e uma mulher tranquila.

**Fun��es**:

- **in**: existe determinado valor na fila?
- **index_of**: qual posi��o aparece X na fila pela primeira vez?
- **find_if**: qual a posi��o do primeiro valor positivo da fila?
- **min_element**: qual a posi��o do menor valor da lista?
- **find_min_if**: qual a posi��o do menor valor positivo?

***

## Draft

- [solver.cpp](https://github.com/qxcodepoo/arcade/blob/master/base/busca/.cache/draft.cpp)
- [solver.ts](https://github.com/qxcodepoo/arcade/blob/master/base/busca/.cache/draft.ts)
- [Solver.java](https://github.com/qxcodepoo/arcade/blob/master/base/busca/.cache/draft.java)

## Shell

```sh
#__case in
$in [1,2,3,4] 4
true
$in [1,2,3,5] 1
true
$in [1,2,5,9] 7
false
$end
```

```sh
#__case index_of
$index_of [-1,-50,-1,-99] -50
1
$index_of [-1,-50,-1,-99] -99
3
$index_of [-1,-50,-1,-99] 10
-1
$end
```

```sh
#__case find_if
$find_if [5,3,-1,-50,-1,-99]
0
$find_if [-1,-50,-1,-99,-444]
-1
$end
```

```sh
#__case min_element
$min_element [5,3,-1,-50,-1,-99]
5
$min_element [-1,-50,-1,-99,-444]
4
$min_element [-2,5,3,-1,50,-1]
0
$min_element []
-1
$end
```

```sh
#__case find_min_if
$find_min_if [5,3,-1,-50,-1,-99]
1
$find_min_if [-1,-50,-1,-99,-444]
-1
$end
```
