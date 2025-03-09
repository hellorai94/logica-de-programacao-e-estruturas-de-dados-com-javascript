### Seção 2: Variáveis e Tipos de Valores

- **`alert()`**: Exibe uma mensagem em uma caixa de diálogo.  
- **`prompt()`**: Solicita a entrada de dados do usuário através de uma caixa de diálogo.  
- **Variável**: Um endereço na memória que armazena um valor, permitindo que ele seja acessado e manipulado posteriormente.  
- **Constante**: Um endereço na memória que armazena um valor fixo, ou seja, não é possível alterá-lo após a atribuição.  
- **Concatenação**: Processo de unir duas ou mais strings em uma única string.  
- **Instrução**: Cada linha de código é uma instrução que o JavaScript executa.  
- **Case Sensitive**: O JavaScript diferencia maiúsculas de minúsculas (ex: `nome` e `Nome` são variáveis diferentes).  
- **Comentários**:  
  - **Em bloco**: `/* comentário */`  
  - **Em linha**: `// comentário`  
- **Entrada de dados**: Tudo que vem da interface gráfica do usuário (como `prompt`) é tratado como **texto (string)**.  
- **Tipos de dados**:  
  - **String**: Cadeia de caracteres (texto).  
  - **Number**: Números (decimais ou inteiros).  
  - **Boolean**: Valores lógicos (**true** ou **false**).  
- **Operadores Aritméticos**:  
  - **Soma** (`+`)  
  - **Subtração** (`-`)  
  - **Multiplicação** (`*`)  
  - **Divisão** (`/`)  
  - **Resto da divisão (módulo)** (`%`)  
- **Conversão entre tipos**:  
  - **`Number()`**: Converte para número (aceita inteiros e decimais).  
  - **`parseInt()`**: Converte para número inteiro.  
  - **`parseFloat()`**: Converte para número decimal (com casas decimais).  
- **Concatenação de strings:** Utilize o operador `+` para unir strings. Ele também é usado para adição numérica.  
- **Números decimais:** Use o ponto (`.`) como separador decimal.  
- **Declaração de variáveis:** Evite declarar a mesma variável mais de uma vez para manter o código limpo e evitar erros.  
- **Conversão implícita:** O JavaScript realiza conversões automáticas de tipos.  
  - Exemplo: `"3" - 1` resulta em `2`.  
- **Precedência de Operadores:** Define a ordem em que os operadores são executados em uma expressão.  
  - **Parênteses** `()` têm a maior precedência, forçando a avaliação interna primeiro.  
  - **Exponenciação** `**` tem precedência maior que multiplicação e divisão.  
  - **Multiplicação** `*`, **divisão** `/` e **resto** `%` vêm antes de adição `+` e subtração `-`.  
  - **Operadores lógicos**, como `&&` (E) e `||` (OU), também seguem uma ordem específica.  
  - Quando os operadores têm a mesma precedência, a avaliação ocorre da **esquerda para a direita** (*associatividade*), com exceção da **exponenciação**, que é **da direita para a esquerda**.  
  - **Exemplos:**  
    ```javascript
    console.log(3 + 4 * 2);      // Resultado: 11
    console.log((3 + 4) * 2);    // Resultado: 14
    console.log(2 ** 3 ** 2);    // Resultado: 512 (2 ** (3 ** 2))
    console.log(2 ** 3 * 2);     // Resultado: 16 ((2 ** 3) * 2)
    ```
- **Operadores de Atribuição:** Usados para atribuir ou atualizar valores de variáveis.  

  - `=` → **Atribuição simples:** Define o valor de uma variável.  
    ```javascript
    let x = 10; // x recebe 10
    ```

  - `+=` → **Atribuição com adição:** Soma o valor à variável e atualiza.  
    ```javascript
    x += 5; // x = x + 5 (agora x é 15)
    ```

  - `-=` → **Atribuição com subtração:** Subtrai o valor e atualiza a variável.  
    ```javascript
    x -= 3; // x = x - 3 (agora x é 12)
    ```

  - `*=` → **Atribuição com multiplicação:** Multiplica a variável pelo valor e atualiza.  
    ```javascript
    x *= 2; // x = x * 2 (agora x é 24)
    ```

  - `/=` → **Atribuição com divisão:** Divide a variável pelo valor e atualiza.  
    ```javascript
    x /= 4; // x = x / 4 (agora x é 6)
    ```

  - `%=` → **Atribuição com módulo:** Calcula o resto da divisão e atualiza.  
    ```javascript
    x %= 4; // x = x % 4 (agora x é 2)
    ```

  - `**=` → **Atribuição com exponenciação:** Eleva a variável à potência e atualiza.  
    ```javascript
    x **= 3; // x = x ** 3 (agora x é 8)
    ```
- **Operadores Aritméticos:**

  - **Incremento** `++`: Aumenta o valor da variável em 1. Pode ser **pré-fixado** (antes da variável) ou **pós-fixado** (depois da variável).
  
    - **Pré-fixado:** A variável é incrementada antes de ser usada na expressão.
      ```javascript
      let a = 5;
      console.log(++a); // Resultado: 6 (a é incrementado antes de ser impresso)
      ```

    - **Pós-fixado:** A variável é incrementada depois de ser usada na expressão.
      ```javascript
      let b = 5;
      console.log(b++); // Resultado: 5 (b é impresso antes de ser incrementado)
      console.log(b);   // Resultado: 6 (b agora é 6)
      ```

  - **Decremento** `--`: Diminui o valor da variável em 1. Também pode ser **pré-fixado** ou **pós-fixado**.

    - **Pré-fixado:** A variável é decrementada antes de ser usada na expressão.
      ```javascript
      let c = 5;
      console.log(--c); // Resultado: 4 (c é decrementado antes de ser impresso)
      ```

    - **Pós-fixado:** A variável é decrementada depois de ser usada na expressão.
      ```javascript
      let d = 5;
      console.log(d--); // Resultado: 5 (d é impresso antes de ser decrementado)
      console.log(d);   // Resultado: 4 (d agora é 4)
      ```
- **Tipos de Dados no JavaScript:**  

  - **String:** Sequência de caracteres, representada por aspas simples ou duplas.  
    ```javascript
    let nome = "JavaScript";
    let saudacao = 'Olá, mundo!';
    ```
    - Strings são usadas para armazenar textos.  

  - **Number:** Representa números inteiros ou de ponto flutuante (decimais).  
    ```javascript
    let idade = 25;
    let preco = 99.99;
    ```
    - No JavaScript, todos os números são do tipo **Number** (não há distinção entre inteiros e floats).  

  - **Boolean:** Representa valores lógicos: **true** ou **false**.  
    ```javascript
    let ativo = true;
    let aprovado = false;
    ```
    - Muito usado para controle de fluxo e tomadas de decisão.  

  - **Null:** Representa a ausência intencional de valor.  
    ```javascript
    let valor = null;
    ```
    - Indica que a variável está vazia ou sem valor definido, mas de forma explícita.  

  - **Undefined:** Representa uma variável que foi declarada, mas não inicializada.  
    ```javascript
    let teste;
    console.log(teste); // undefined
    ```
    - É o valor padrão de uma variável que ainda não recebeu uma atribuição.  

  - **NaN (Not a Number):** Representa um valor que não é numérico, mas resultante de uma operação matemática inválida.  
    ```javascript
    let resultado = "teste" * 2;
    console.log(resultado); // NaN
    ```
    - **NaN** indica que uma operação aritmética falhou ou foi aplicada a algo que não é um número.  

- O JavaScript é uma linguagem de **tipagem dinâmica**, ou seja, você não precisa declarar explicitamente o tipo da variável — ele é definido automaticamente durante a execução. 

- **Conversão de Tipos em JavaScript:**  

  O JavaScript permite converter valores entre diferentes tipos de dados de forma explícita ou implícita. 

  ### 🟢 **Conversão para Número:**  

  - **`Number()`**: Converte um valor para o tipo **Number**.  
    ```javascript
    console.log(Number("42"));      // 42 (string para número)
    console.log(Number(true));      // 1 (true vira 1, false vira 0)
    console.log(Number("abc"));     // NaN (não é possível converter)
    ```

  - **`parseInt()`**: Converte uma string para número inteiro, ignorando os decimais.  
    ```javascript
    console.log(parseInt("42.9"));  // 42
    console.log(parseInt("100px")); // 100 (lê até encontrar algo não numérico)
    ```

  - **`parseFloat()`**: Converte uma string para número de ponto flutuante (decimal).  
    ```javascript
    console.log(parseFloat("42.9")); // 42.9
    console.log(parseFloat("10.5px"));// 10.5
    ```

  ### 🟡 **Conversão para String:**  

  - **`String()`**: Converte um valor para o tipo **String**.  
    ```javascript
    console.log(String(123));       // "123"
    console.log(String(true));      // "true"
    ```

  - **`.toString()`**: Método que converte um valor para string.  
    ```javascript
    let num = 42;
    console.log(num.toString());    // "42"
    console.log((100).toString());  // "100"
    ```

  ### 🔴 **Conversão para Boolean:**  

  - **`Boolean()`**: Converte um valor para **true** ou **false**.  
    - Valores **falsy** (convertidos para false): `0`, `""`, `null`, `undefined`, `NaN`  
    - Valores **truthy** (convertidos para true): Qualquer valor diferente dos falsy  
    ```javascript
    console.log(Boolean(1));        // true
    console.log(Boolean(0));        // false
    console.log(Boolean("Hello"));  // true
    console.log(Boolean(""));       // false
    ```

  - **`!` (not lógico)**: Inverte o valor booleano.  
    - Usar `!!` é um truque para converter qualquer valor para booleano!  
    ```javascript
    console.log(!true);             // false
    console.log(!0);                // true
    console.log(!!"texto");         // true (dupla negação converte para boolean)
    ```

### 🚀 **Exemplos práticos:**  
```javascript
let valor = "123";
let convertido = Number(valor);     
console.log(convertido);            // 123 (número)

let num = 456;
let texto = num.toString();
console.log(texto);                 // "456" (string)

let flag = "algum texto";
console.log(Boolean(flag));         // true (string não vazia é truthy)
```
- **Operador `typeof`:**  

  O operador `typeof` é usado para verificar o tipo de dado de um valor ou variável. Ele retorna uma **string** com a descrição do tipo.  

  ### 📘 **Sintaxe:**  
  ```javascript
  typeof valor

- **`console.log`:**  

  O método `console.log` é usado para exibir mensagens ou valores no console do navegador ou terminal. É uma das ferramentas mais usadas para depuração e análise de código no JavaScript.  

  ### 📘 **Sintaxe:**  
  ```javascript
  console.log(valor1, valor2, ...);
- **Valores que se tornam `false` em JavaScript:**  

  Em JavaScript, alguns valores são considerados **falsy**, ou seja, quando convertidos para **boolean**, resultam em **`false`**.  

  ### 🟠 **Exemplos:**  
  ```javascript
  console.log(Boolean(null));      // false
  console.log(Boolean(NaN));       // false
  console.log(Boolean(undefined)); // false

### 🟠 **Variável `NaN` com `typeof` retorna 'number':**  

Apesar de **`NaN`** representar "Not-a-Number", o operador **`typeof`** ainda retorna **'number'** quando é usado com ele. Isso pode ser confuso, já que **`NaN`** não é um número válido.

