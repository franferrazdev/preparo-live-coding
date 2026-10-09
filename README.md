# 🚀 Preparatório para Entrevistas de Live Coding (Front-End)

Este repositório foi criado para centralizar meus estudos, treinar lógica de programação, manipulação de DOM Vanilla e consumo de APIs assíncronas focando em processos seletivos de Front-End.

## 🎯 Objetivos

- Dominar os fundamentos do JavaScript Vanilla (ES6+).
- Resolver problemas de estruturas de dados e algoritmos (padrão LeetCode/HackerRank).
- Praticar a comunicação técnica e cenários com mudanças de regras (variações).

## 📂 Desafios Implementados

### 🛠️ Manipulação de DOM

- [x] **Contador Dinâmico:** Manipulação de eventos, gerenciamento de estado independente do input e validação de limites.
  - _Variações aplicadas:_ Controle de passos dinâmicos, persistência de dados com `localStorage`, formatação visual (`padStart`) e modo de incremento automático (`setInterval`/`clearInterval`).
- [x] **Filtro de Lista em Tempo Real:** Filtragem de arrays e manipulação de nós na árvore DOM de forma performática.
  - _Variações aplicadas:_ Feedback visual de estado vazio ("No products found"), otimização de performance com **Debounce** (atraso de 300ms) e realce de termos em negrito usando Expressões Regulares (`RegExp`).
- [x] **Todo List (Lista de Tarefas):** Uso prático de formulários semânticos com suporte nativo ao "Enter" e criação dinâmica de elementos seguros contra vulnerabilidades XSS.
  - _Variações aplicadas:_ Gerenciamento de estado complexo (array de objetos), persistência no `localStorage` e contadores estatísticos em tempo real (Tarefas concluídas / totais).

### 🌐 Integração com APIs

- [x] **Renderização de Cards de Usuários:** Uso de `async/await`, manipulação de Promises e renderização sob demanda.
  - _Variações aplicadas:_ Tratamento defensivo de erros HTTP com `response.ok`, gerenciamento determinístico de ciclo de vida (_Loading State_ via bloco `finally`), limites de exibição (`slice`), interrupção de conexões travadas por estouro de tempo (**AbortController Timeout**) e botão operacional de "Tentar Novamente" (_Retry Mechanism_).

### 🧮 Algoritmos & Estruturas de Dados (LeetCode / HackerRank)

- [x] **Two SUm (\(O(n)\)):** Otimização de busca linear utilizando Mapas/Objetos de frequência para evitar loops aninhados quadráticos (\(O(n^2)\)).
  - _Variações aplicadas:_ **Two SUm II** para arrays ordenados usando a técnica de **Dois Ponteiros** (\(O(1)\) de espaço), busca direta de valores reais usando **ES6 Sets** e extração de múltiplos pares válidos com deduplicação de ponteiros móveis.
- [x] **Anagrama Válido:** Comparação e contagem linear de caracteres usando dicionários de frequência para evitar ordenações pesadas.
  - _Variações aplicadas:_ **Anagrama Flexível** capaz de tratar sentenças complexas ignorando espaçamentos e diferenças de caixa (_case-insensitive_) via tratamento com regEx.
- [x] **Find the Difference:** Desafio focado em encontrar o caractere adicional entre duas strings.
  - _Variações aplicadas:_ Resolução matemática ultraotimizada por acúmulo e subtração de códigos **ASCII** (\(O(1)\) de espaço), resolução genérica para múltiplas letras extras usando mapas de frequência e mapeamento combinando caractere e índice posicional real via `.indexOf()`.
- [x] **Palíndromo Válido:** Validação de strings invertidas em tempo de execução linear (\(O(n)\)) e memória constante (\(O(1)\)) usando ponteiros convergentes.
- [x] **FizzBuzz:** Sequência lógica tradicional com tratamento de precedência de operações artméticas condicionais (múltiplos comuns).

---

_💡 "Pensar em voz alta e entender os fundamentos vale mais do que apenas fazer o código funcionar."_
