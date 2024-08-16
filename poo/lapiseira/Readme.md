# @lapiseira - Gerenciando os m�ltiplos grafites

- Veja a vers�o online: [aqui.](https://github.com/qxcodepoo/arcade/blob/master/base/lapiseira/Readme.md)
- Para programar na sua m�quina (local/virtual) use:
  - `tko down poo lapiseira`
- Se n�o tem o `tko`, instale pelo [LINK](https://github.com/senapk/tko#tko).

---

<!-- toch -->
[Intro](#intro) | [Draft](#draft) | [Guide](#guide) | [Shell](#shell)
-- | -- | -- | --
<!-- toch -->

![cover](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/lapiseira/cover.jpg)

Fa�a o modelo de uma lapiseira que pode conter v�rios.

## Intro

- Iniciar lapiseira
  - Inicia uma lapiseira de determinado calibre sem grafite.
  - Lapiseiras possuem um bico e um tambor.
  - O bico guarda o grafite que est� em uso.
  - O tambor guarda os grafites reservas.
- Inserir grafite
  - Insere um grafite passando
    - o calibre: float.
    - a dureza: string.
    - o tamanho em mm: int.
  - N�o deve aceitar um grafite de calibre n�o compat�vel.
  - O grafite � colocado como o �LTIMO grafite do tambor.
- Puxar grafite
  - Puxa o grafite do tambor para o bico.
  - Se j� tiver um grafite no bico, esse precisa ser removido primeiro.
- Remover grafite
  - Retira o grafite do bico.
- Escrever folha
  - N�o � poss�vel escrever se n�o h� grafite no bico.
  - Quanto mais macio o grafite, mais rapidamente ele se acaba. Para simplificar, use a seguinte regra:
    - Grafite HB: 1mm por folha.
    - Grafite 2B: 2mm por folha.
    - Grafite 4B: 4mm por folha.
    - Grafite 6B: 6mm por folha.
  - O �ltimo cent�metro de um grafite n�o pode ser aproveitado, quando o grafite estiver com 10mm, n�o � mais poss�vel escrever e o grafite deve ser retirado.
  - Se n�o houver grafite suficiente para terminar a folha, avise que o texto ficou incompleto.

***

## Draft

- [Solver.java](https://github.com/qxcodepoo/arcade/blob/master/base/lapiseira/.cache/draft.java)
- [solver.cpp](https://github.com/qxcodepoo/arcade/blob/master/base/lapiseira/.cache/draft.cpp)
- [solver.ts](https://github.com/qxcodepoo/arcade/blob/master/base/lapiseira/.cache/draft.ts)

## Guide

![diagrama](https://raw.githubusercontent.com/qxcodepoo/arcade/master/base/lapiseira/diagrama.png)

<!-- load diagrama.puml fenced=ts:filter -->

```ts
' Grafite
class Lead {
    
    ' calibre do grafite
    - thickness : float
    
    ' dureza do grafite HB, 2B, 4B, 6B
    - hardness  : string

    ' tamanho do grafite em mil�metros
    - size      : int
    __
  
    ' inicializa os atributos do grafite
    + Lead(thickness : float, hardness : string, size : int)
    
    ' gastoPorFolha
    ' retorna o gasto em mil�metros para uma p�gina escrita
    ' 1mm para HB
    ' 2mm para 2B
    ' 4mm para 4B
    ' 6mm para 6B
    + usagePerSheet() : int
    __
    
    ' apenas os m�todos get
    + getHardness()  : string
    + getSize()      : int
    + getThickness() : float

    __
    + setSize(size : int)
    __
    + toString()      : string
}

' Lapiseira
class Pencil {
    
    ' calibre da lapiseira
    - thickness : float

    ' guarda o grafite que est� na ponta da lapiseira
    ' um valor nulo indica que a lapiseira est� sem grafite
    - tip       : Lead | null

    ' tambor da lapiseira, guarda os grafites
    - barrel    : List<Lead>
    __

    ' inicializa os atributos da lapiseira
    ' tip para null
    ' barrel para uma lista vazia
    + Pencil(thickness : float)
    __

    ' insere um grafite no final do tambor
    ' verifica se o grafite tem calibre compat�vel
    + insert(lead : Lead) : boolean

    ' remove o grafite da ponta
    ' verifica se existe grafite na ponta
    ' retorna o grafite removido
    ' ou null se n�o tinha grafite
    ' remover significa colocar o atributo tip para null
    + remove()            : Lead | null

    ' remove primeiro grafite do tambor e insere na ponta
    ' precisa existir algum grafite no tambor
    ' precisa a ponta estar vazia
    + pull()              : boolean

    ' escreve na folha gastando o grafite
    ' verifica se existe grafite na ponta
    ' tenta diminuir o tamanho do grafite 
    '   utilizando os m�todos getSize() e setSize()
    '   escrever uma folha gasta tip.usagePerSheet() mm
    ' verifica se existe tamanho para escrever a folha inteira
    + writePage()
    __
    + toString() : string
}
```

<!-- load -->

***

## Shell

```bash
#__case inserindo grafites
$init 0.5
$show
calibre: 0.5, bico: [], tambor: {}
#__case calibre errado
$insert 0.7 2B 50
fail: calibre incompat�vel
#__case calibre certo
$insert 0.5 2B 50
$show
calibre: 0.5, bico: [], tambor: {[0.5:2B:50]}
#__case mais de um grafite
$insert 0.5 2B 30
$show
calibre: 0.5, bico: [], tambor: {[0.5:2B:50][0.5:2B:30]}
#__case puxando grafite
$pull
$show
calibre: 0.5, bico: [0.5:2B:50], tambor: {[0.5:2B:30]}
#__case puxando ocupado
$pull
fail: ja existe grafite no bico
#__case removendo do bico
$remove
$show
calibre: 0.5, bico: [], tambor: {[0.5:2B:30]}
$end
```

***

```bash
#__case escrevendo 
$init 0.9
$insert 0.9 4B 14
$insert 0.9 4B 16
#__case sem grafite no bico
$write
fail: nao existe grafite no bico
#__case puxando grafite
$pull
$show
calibre: 0.9, bico: [0.9:4B:14], tambor: {[0.9:4B:16]}
#__case gastando grafite
$write
$show
calibre: 0.9, bico: [0.9:4B:10], tambor: {[0.9:4B:16]}
#__case puxando novo
$remove
$pull
$show
calibre: 0.9, bico: [0.9:4B:16], tambor: {}
$write
$show
calibre: 0.9, bico: [0.9:4B:12], tambor: {}
#__case folha incompleta
$write
fail: folha incompleta
$show
calibre: 0.9, bico: [0.9:4B:10], tambor: {}
#__case tamanho insuficiente
$write
fail: tamanho insuficiente
$end
```
