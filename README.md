# Individual Project - Food

<p align="right">
  <img height="200" src="./cooking.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas y clonarlo en sus computadoras

## Iniciar el proyecto

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost:5432

DB_NAME= food

Registrarse y buscarla en https://spoonacular.com/food-api/
dbApi = 

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `food`

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver distintas recetas de comida junto con información relevante de las mismas utilizando la api externa [spoonacular](https://spoonacular.com/food-api) y a partir de ella poder, entre otras cosas:

  - Buscar recetas
  - Filtrarlos / Ordenarlos
  - Crear nuevas recetas propias

  En principio se utilizo todo el tiempo la API y en una segunda instancia se realizo una copia de la informacion cargando la data en la propia base de datos de una vez y continuar utilizando solo la informacion que la base de datos brinda para poder realizar un CRUD completo

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se han utilizado las tecnologias de React y redux para poder acceder a los enpoints creados. Para el diseño solo se recurrio al uso de CSS puro con su formato de Css modules

__Pagina inicial__: Landing page con imagen representativa

__Ruta principal__: Donde se muestran todas las recetas, el paginado correspondiente y el acceso a demas elementos de la pagina

__Ruta de detalle de receta__: Con toda la informacion respectiva a una receta particular y donde se puede eliminar o modificar una receta

__Ruta de creación de recetas__: Donde se puede agregar a la base de datos una nueva creacion relacionandola con las dietas respectivas

#### Base de datos

Se han creado dos modelos de entidad relacion de muchos a muchos con Sequelize relacionando a las Recetas de la API con sus dietas respectivas

#### Backend

- [ ] __GET /recipes?name="..."__: Para buscar recetas por nombre
- [ ] __GET /recipes/{idReceta}__: Para buscar recetas por id
- [ ] __GET /types__: Para buscar dietas 
- [ ] __POST /recipe__: Para crear una nueva receta
- [ ] __DELETE /recipe__: Para eliminar una receta
- [ ] __PUT /recipe__: Para modificar una receta
