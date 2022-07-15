![capa](https://user-images.githubusercontent.com/102002212/179225344-4bea210b-6779-4bd9-b3e0-04ebbdedca8b.png)

<H2>🔖 Requisitos funcionais</H2>

<H4>📥 Cadastro de Personagens</H4>

- [X] Deve poder cadastrar um personagem com as características conforme tabela abaixo:
  - Com requisição que testa o cadastro via StatusCode e Id
- [X] Deve retornar o id do personagem ao realizar o cadastro
  - Retorna o valor do Id e valida sua veracidade
- [X] Não deve cadastrar personagem com nome duplicado
  - Com função que retorna 400 e resposta de erro **(Duplicate Character)**
- [X] Com exceção da idade, todos os campos são obrigatórios
 
 <table>
 
 <tr>
    <th>Campos</th>
    <th>Descrição</th>
    <th>Tipo</th>
    <th>Obrigatótio</th>
  </tr>
 <tr>
    <td>name</td>
    <td>nome do personagem</td>
    <td>texto</td>
    <td>sim</td>
  </tr>
 <tr>
    <td>age</td>
    <td>idade</td>
    <td>inteiro</td>
    <td>não</td>
  </tr>
  <tr>
    <td>alias</td>
    <td>codinome</td>
    <td>texto</td>
    <td>sim</td>
  </tr>
   <tr>
    <td>team</td>
    <td>afiliações (vingadores, x-men, etc..)</td>
    <td>lista</td>
    <td>sim</td>
  </tr>
  <tr>
    <td>active</td>
    <td>se o personagem está ativo ou não</td>
    <td>booleano</td>
    <td>sim</td>
  </tr>  
 </table>

<H4>🔎 Busca de Personagens</H4>

- [X] Deve retornar uma lista de personagens cadastrados
- [X] Deve poder buscar por personagem por nome
- [X] Deve poder buscar personagem pelo id
- [X] Deve retornar 404 ao buscar por id não cadastrado


<H4>📤 Remover Personagem</H4>

- [X] Deve poder remover por id, um personagem cadastrado
- [X] Deve retornar não encontrado ao remover por id não cadastrado

<h2>📷 Screenshots </h2>

<H2>🚀 Tecnologias</H2>
<ul>
 <li>[Node.js] - plataforma de desenvolvimento</li>
 <li>[Express] - framework onde a API foi construída</li>
 <li>[Cypress] - framework de testes automatizados</li>
 <li>[MongoDB] - Banco de dados (Não relacional)</li>
</ul>

<H2>👨🏻‍💻 Como executar o projeto</H2>
<a href="https://nodejs.org/en/">Node.js</a> v16 ou superior para executar.

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="cd vdt-season1-marvel-api
npm i
npx cypress run"><pre><span class="pl-c1">cd</span> teste-marvel-api
npm i
npx cypress run</pre></div>
