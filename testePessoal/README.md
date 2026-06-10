# Projeto Shooter Inspirado em Undertale Yellow

> ⚠️ **AVISO:** As músicas presentes neste projeto possuem copyright. Este projeto é apenas uma recriação pessoal para fins educacionais e de estudo.
>
> Não vejo problemas em utilizar os arquivos da pasta para referência, porém tome cuidado caso utilize as músicas em outros projetos.

---
> ⚠️ **AVISO 2:** Não há nenhuma garantia que o conteúdo desse README.md se torne realidade :P.
> Apenas to criando por diversão e aprendizado na prática.
> Então se você por acaso ver esse repositório e ele estiver vazio ou incompleto, é por isso.
> Mas caso ele realmente tenha um conteúdo... se divirta ou aprenda com ele
## 📖 Sobre o Projeto

Este projeto consiste na recriação de um antigo trabalho do ensino médio.

A versão original possuía todo o código concentrado em um único arquivo, tornando extremamente difícil:

- Encontrar erros;
- Adicionar funcionalidades;
- Modificar sistemas;
- Organizar o projeto.

Por esse motivo, estou reconstruindo o projeto do zero utilizando uma estrutura modular e organizada.

---

## 🎯 Objetivos

- Utilizar **localStorage** para salvar progresso.
- Dividir o código em múltiplos arquivos.
- Facilitar futuras modificações.
- Implementar sistemas de progressão.
- Criar um sistema de cosméticos.
- Criar múltiplos modos de jogo.

---

## 🏠 Tela Inicial

A tela inicial deverá possuir:

| Botão | Função |
|---------|---------|
| Modos | Seleção de modo de jogo |
| Loja | Compra de cosméticos |
| Inventário | Equipar cosméticos |
| Melhorias | Evoluir personagem |

Além disso:

- Exibir o título do jogo;
- Mostrar instruções básicas;
- Carregar o progresso salvo;
- Permitir acesso rápido às funcionalidades principais.

---

## 🎮 Modos de Jogo

### 🎯 Solo (1 Jogador)

Modo roguelike inspirado na movimentação aérea de Undertale Yellow.

#### Funcionamento

- O jogador voa livremente pela tela;
- Inimigos surgem constantemente;
- A dificuldade aumenta conforme os níveis avançam;
- Novos poderes são desbloqueados durante a partida;
- O objetivo é sobreviver o maior tempo possível.

#### Características

- Progressão infinita;
- Escalonamento automático de dificuldade;
- Escolha de poderes;
- Grande rejogabilidade.

---

### 🤝 Cooperativo (2 Jogadores)

Versão cooperativa do modo solo.

#### Alterações

- Dois jogadores dividem o teclado;
- Inimigos possuem mais vida;
- Inimigos surgem em maior quantidade;
- Dificuldade adaptada para duas pessoas.

#### Objetivo

Sobreviver em equipe e alcançar a maior pontuação possível.

---

### ⚔️ PvP

Modo jogador contra jogador.

#### Regras iniciais

- Cada jogador inicia em lados opostos da arena;
- Ataque básico será alterado ou removido;
- Foco em movimentação, dash e habilidades;
- Balanceamento exclusivo para combate entre jogadores.

---

## 🛒 Loja

A loja será dividida em quatro categorias.

### ❤️ Almas

Permite alterar:

- Cor da alma;
- Aparência do jogador.

### 🎵 Themes

Permite alterar:

- Música de fundo;
- Temas sonoros.

### 🌄 Ambiente

Permite alterar:

- Plano de fundo;
- Cenário da partida.

### ✨ Efeitos

Permite alterar:

- Dash;
- Tiros;
- Super;
- Partículas visuais.

---

## 🎒 Inventário

Responsável por equipar itens adquiridos.

### Funcionalidades

- Equipar cosméticos;
- Desequipar cosméticos;
- Visualizar coleção;
- Gerenciar itens desbloqueados.

### 🎲 Sistema Random

Quando ativado:

- Seleciona cosméticos aleatórios;
- Altera os itens a cada partida;
- Utiliza apenas itens já desbloqueados.

---

## 🌳 Melhorias

Sistema permanente de progressão.

### Classes

As classes modificam atributos como:

- Vida;
- Dano;
- Velocidade;
- Dash;
- Super.

### Formas de Tiro

Desbloqueio de novos padrões de ataque.

Exemplos:

- Tiro Duplo;
- Tiro Triplo;
- Tiro Circular;
- Tiro Perfurante;
- Tiro Explosivo.

### Pets

Companheiros que auxiliam o jogador.

Possíveis funções:

- Atacar inimigos;
- Coletar recursos;
- Curar o jogador;
- Fornecer bônus passivos.

---

## 💾 Sistema de Salvamento

O progresso será salvo utilizando:

```javascript
localStorage
```

Dados armazenados:

- Moedas;
- Cosméticos;
- Melhorias;
- Configurações;
- Estatísticas;
- Conquistas.

---

## 📂 Estrutura Planejada

```text
Projeto/
│
├── index.html
│
├── css/
│   ├── menu.css
│   ├── loja.css
│   ├── inventario.css
│   ├── melhorias.css
│   └── jogo.css
│
├── js/
│   ├── main.js
│   ├── save.js
│   ├── player.js
│   ├── enemy.js
│   ├── bullet.js
│   ├── shop.js
│   ├── inventory.js
│   ├── upgrades.js
│   ├── coop.js
│   └── pvp.js
│
├── assets/
│   ├── sprites/
│   ├── sounds/
│   ├── themes/
│   └── backgrounds/
│
└── README.md
```

---

## 📝 Planejamento Atual

### Base do Projeto

- [ ] Sistema de telas
- [ ] Sistema de navegação
- [ ] Sistema de salvamento
- [ ] Configurações

### Jogabilidade

- [ ] Movimento do jogador
- [ ] Sistema de tiro
- [ ] Sistema de dash
- [ ] Sistema de super
- [ ] Sistema de colisão

### Inimigos

- [ ] Spawn automático
- [ ] IA básica
- [ ] Escalonamento de dificuldade
- [ ] Chefes

### Loja

- [ ] Sistema de moedas
- [ ] Compra de almas
- [ ] Compra de themes
- [ ] Compra de ambientes
- [ ] Compra de efeitos

### Inventário

- [ ] Equipamento de cosméticos
- [ ] Sistema Random

### Melhorias

- [ ] Classes
- [ ] Formas de tiro
- [ ] Pets

### Modos

- [ ] Solo
- [ ] Cooperativo
- [ ] PvP

---

## 🚀 Prioridade Atual

1. Sistema de telas;
2. Sistema de salvamento;
3. Jogador;
4. Sistema de tiro;
5. Inimigos;
6. Progressão;
7. Loja;
8. Inventário;
9. Melhorias;
10. PvP.

---

## 👤 Desenvolvedor

Projeto desenvolvido individualmente como estudo, aprendizado e recriação de um trabalho antigo do ensino médio.

---

## 📌 Observação

Este projeto utiliza recursos criados anteriormente apenas como referência e base de estudo.

Não possui finalidade comercial.