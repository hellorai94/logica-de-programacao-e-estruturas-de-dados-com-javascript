# Seção 3: Operadores de comparação e lógicos

Os operadores de comparação são usados para comparar dois valores. Eles retornam um valor booleano: `true` ou `false`.

## Operadores

- `==` → Igualdade solta: verifica se os valores são iguais, **sem considerar o tipo**.  
  **Ex:** `5 == '5'` → `true`

- `===` → Igualdade estrita: verifica se os valores e os tipos são iguais.  
  **Ex:** `5 === '5'` → `false`

- `!=` → Diferença solta: verifica se os valores são diferentes, **sem considerar o tipo**.  
  **Ex:** `5 != '5'` → `false`

- `!==` → Diferença estrita: verifica se os valores e os tipos são diferentes.  
  **Ex:** `5 !== '5'` → `true`

- `<` → Menor que: verifica se o valor à esquerda é menor que o valor à direita.  
  **Ex:** `3 < 5` → `true`

- `<=` → Menor ou igual: verifica se o valor à esquerda é menor ou igual ao valor à direita.  
  **Ex:** `5 <= 5` → `true`

- `>` → Maior que: verifica se o valor à esquerda é maior que o valor à direita.  
  **Ex:** `10 > 7` → `true`

- `>=` → Maior ou igual: verifica se o valor à esquerda é maior ou igual ao valor à direita.  
  **Ex:** `8 >= 10` → `false`

## Atenção:

- **`=`** (um sinal de igual) é usado para **atribuição**, não para comparação.  
  **Ex:** `let x = 10` (atribui o valor `10` à variável `x`).
## Operadores Lógicos

Os operadores lógicos são usados para combinar ou inverter expressões booleanas. Eles retornam `true` ou `false` com base na lógica aplicada.

## Operadores

- `!` → **Negação (NOT)**: inverte o valor lógico da expressão.  
  **Ex:** `!true` → `false`

- `&&` → **Conjunção (AND)**: retorna `true` se **ambas** as expressões forem verdadeiras.  
  **Ex:** `true && false` → `false`

- `||` → **Disjunção (OR)**: retorna `true` se **pelo menos uma** das expressões for verdadeira.  
  **Ex:** `true || false` → `true`

## Negação das expressões:

- A negação (`!`) inverte o resultado lógico:  
  **Ex:** `!(5 > 3)` → `false`

- Também é possível combinar operadores para criar expressões mais complexas:  
  **Ex:** `!(true || false) && true` → `false`

