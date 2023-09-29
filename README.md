# node.js
aulas JS para backend


Já aprendemos a declarar variáveis, sejam elas let ou const, utilizando a palavra-chave e um nome que escolhemos para a variável. Chamamos este nome justamente de identificador, e o ideal é que sejam sempre o mais explicativos possível:

let cpfUsuario = "12312312312"COPIAR CÓDIGO
Mas o que acontece se tentarmos identificar uma variável com um termo que faça parte da linguagem, como nos casos abaixo?

let var = 0;
let if = 0;
let const = "Alura";COPIAR CÓDIGO
Faça o teste para ver que o JavaScript não consegue reconhecer estas palavras-chave como identificadores e nem interpretar o que deve ser executado nestas linhas. Isso acontece porque var, if e const são palavras reservadas do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.

Por outro lado, os exemplos abaixo são aceitáveis:

let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";COPIAR CÓDIGO
No JavaScript, algumas palavras são totalmente reservadas (não podem ser utilizadas como identificador em nenhum caso), enquanto outras podem ser utilizadas dependendo do contexto, e ainda outras não podem ser consideradas totalmente reservadas por razões de compatibilidade com versões mais antigas da linguagem, como é o caso de let (lembrando que, até o ES6, só era possível declarar variáveis com var). A palavra let vem do verbo em inglês “permitir”, então não é possível deixá-la reservada pois pode já estar sendo usada como identificador em algum código mais antigo.

A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. As únicas exceções são from, set e target, que são seguras e comumente utilizadas.

arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yieldCOPIAR CÓDIGO
Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:

enum
implements
interface
package
private
protected
publicCOPIAR CÓDIGO
Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais semântica possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.


sobre functions####################

As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
Para ver mais funções matemáticas, basta acessar a documentação do Math.