## Projecto de prueba vue

En este proyecto hice una pequeña aplicacion de vue en la cual se muestra un dashboard y una pagina simplemente para ver el funcionamiento de vue router.

para esta prueba ya que vengo de un entorno de `React` quise asociar algunas librerias que ya usaba en mi entorno pero en este caso para un entorno de vue.

## proposito del proyecto

El proposito del proyecto abarcar ciertos conceptos como `router`, `layouts`, `hooks`, `queries`

para ello use las siguientes librerias:

- `vue-router`

se realiza la configuracion como lo recomienda la documentacion oficial

- `@tanstack/vue-query`

esta es una libreria que me gusta mucho en react ya que me pertime tener control sobre el estado de mis peticiones y siempre poder controlar el estado de ellas, por lo cual quise ver como es su implementacion en vue

- `@tailwindcss/vite`

tailwindcss en su ultima version para manejar todo el tema de estilos de los componentes

- `ant-design-vue`

esta es una libreria que me gusta tambien usar en mis proyectos ya que tiene unos componentes muy practicos y faciles de usar como el progressbar, el drawer, table, etc

## estructura del proyecto

a nivel personal me gusta separar lo que mas pueda la logica y estructura de las paginas, separando la estructura de una pagina en pequeños componentes que me permita tener legibilidad y control del codigo, en este caso lo podemos ver en el dashboard el cual en la carpeta `pages` tiene la carpeta `dashboard` en la cual tenemos la pagina principal y separados sus componentes enviando por props los datos que requiera cada uno de ellos.

tambien ademas de ello podemos ver en el componente de la `tabla` que la llamada a la api la cual proviene de un hook solo la cargamos aqui que es solo donde la requerimos y asi tener una mejor asignacion de responsabilidades de los componentes

- `Layout`

Ya que se esta pensando en una vista de admin se utiliza la tipica visualizacion de un sidebar que se mantiene fijo y una vista a su derecha que es la que cambia segun su ruta, por ende cree un `layout` para evitar estar cargando el mismo componente en cada page.

- `app.vue`
- `sidebar.vue`
- `sidebarDrawer.vue`

ya despues de tener la estructura principal podemos pasar a las vista dinamicas o en este caso al dashboard

pagina principal:

- `dashboard.vue`

componentes:

- `cardDinamic.vue`
- `cardProgress.vue`
- `cardDinamicCircularProgress.vue`
- `tableUserDashboard.vue`

y por ultimo tenemos el hook para el fetch

- `useFetchApi.ts`
