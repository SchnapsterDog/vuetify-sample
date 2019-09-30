# Adopt a Dog - Vuetify Sample with Persisted Table

Vuetify applicaiton that allows the user to view a list of objects, sort/filter the list and load a specific object's detail view. The app use the following components:

- Vuex
- Vuetify
- Vue Router

## Demo

Demo is uploaded on my server. Check this out:

https://vuetify.theflexiseo.com

### Docker

Docker URL: https://hub.docker.com/r/schnapsterdog/vuetify-sample

Run the follow command to pull an image:

```
docker pull schnapsterdog/vuetify-sample
```

## Requirements

- App run inside a docker container
- App pull data from a API Data Source -- either static file (i.e. JSON Placeholder) or a API Data source ( See Configration section below)
- App render the data in a list view
- App have sorting and filtering on at all fields
- App persist sort/filter preferences on page refresh
- App have the ability to click on an object in the list view to display extended details of the object on a separate page
- App have reasonable test coverage (jest) which run inside the container

## Project setup

- npm install (install app localy)
- npm run serve (compiles and hot-reloads for developmenet)
- npm run build (compiles and minified for production environment)
- npm run test (run your tests)
- npm run test:unit (test the units)
- npm run lint (lints and fixed files)

### Configuration:

Inside .env file set VUE_APP_API_CLIENT to ‘mock’ in order to fetch local data from json file.

Dont modify vue.config.json file. There, we are telling the application to use the constant described above, in order our application to make real api call, or to fetch data from static json file which is stored in src/data/static/items.json

### Application Structure

```
src
├── assets
│   ├── img
│   │   ├── cat.jpeg
│   │    └── dog.jpg
│   ├── logo.png
│   └── logo.svg
├── components
│   ├── AppContent.vue
│   ├── AppFooter.vue
│   ├── ApplicationBar.vue
│   └── NavigationDrawer.vue
├── data
│   ├── constants
│   │   └── routes.js
│   └── static 
│       └── items.json
├── plugins
│   └── vuetify.js
├── services
│   ├── mock
│   │   └── index.js
│   └── server
│       └── index.js
├── store
│   ├── actions.js
│   ├── getters.js
│   ├── index.js
│   ├── mutations.js
│   ├── state.js
│   └── storage.js
├── views
│   ├── Home.vue
│   └── Pet.vue
├── App.vue
├── main.js
└── router.js
```

### Structure Described:

1. Assets folder contains logo image in .png and .svg format, and two images neeed for application, inside img folder.

```
── assets
   ├── img
   │   ├── cat.jpeg
   │    └── dog.jpg
   ├── logo.png
   └── logo.svg
```

2. Components folder contains four Vue components, which represent the skeleton of the entire application. ApplicationBar contain vuetify components need for header, NavigationDrawer that is sidebar component, AppFooter is the footer and AppContent is the core component for Views, which contains 
```
```html
<router-view />.
```

```
── components
   ├── AppContent.vue
   ├── AppFooter.vue
   ├── ApplicationBar.vue
   └── NavigationDrawer.vue
```
3. Data folder contains two subfolders: constants and static. In constants, you could find Endpoints, and in static subfolder, there is items.json, which represents mock-up data needed for our fake API call.

```
── data
   ├── constants
   │   └── routes.js
   └── static 
       └── items.json
```
4. Plugins folder contains vuetify.js config file, where developers could play(add/remove) with the options given by Vuetify Framework. For example, we can simple change theme of our Application by setting the dark option to false.

```json
theme: {
  dark: true,
}
```
  
5. Services folder contains mock and server subfolders, which are responsible for the API calls. Depend on the .env setting (mock or server), we can easy use fake or real API call, in order to fetch the data and show it to the end-user. By defult, Application fetch data from local storage. 

```
── services
   ├── mock
   │   └── index.js
   └── server
       └── index.js
```
6. Store folder contains six files, that together unify the Vuex store. Main point is index.js, where we import actions, muttations, getters, state and storage. Inside this file, we import external vuex-persistedstate library, in order to persist table and its options. Inside storage.js we import js-cookies external library, that is used for storing the vuex state as cookies. If we simply want to delete cookies and using them no more, we set expires value to 0.

```js
export default  {
  setItem: (key, value) => Cookies.set(key, value, { expires: 0, secure: false })
}
```

7. Views folder contains Home.vue and Pet.vue which run inside <router-view /> as views.

- Home view contains vuetify vue-data-table where we bind data comes from vuex store. 

```
I On <v-text-field> component we simple use: 

a) :value=“sarch“ as input (not v-model in order to prevent using vue-warning)
b) @input event which we bind to updateFilter function.
```

```html
<v-text-field
  :value="search"
  @input="updateFilter"
  label="Search"
  single-line
  hide-details
></v-text-field>
}
```

```
II On <v-data-table> we use:
a) :headers as headers of the table
b) :items as table rows which come from json file, and are stored inside vuex store.
c) :search as filter
d) :sort-by=“sortBy“ as sort columns
e) @click:row event for selection of certain row
f) @update:options event to update sorted columns inside vuex store
g) multi-sort set to true
h) no-data-text prop (to show text during loading data from API call)
```

```html
<v-data-table
  class="custom-data-table"
  :headers="headers"
  :items="items"
  :search="search"
  :sort-by="sortedBy"
  @click:row="select"
  @update:options="updateSortedColumns"
  multi-sort
  no-data-text="Loading, please wait ..."
></v-data-table>
```

- Pet.vue is called only if we click on the certain row on the table. This component has route like /pet/:id. Inside the component, we have function that fetch id from the route when component is mounted. 

```html
<v-card-text>
  <span class="text--primary">
    <span>Gender: {{ selectedItem.gender }}</span><br>
    <span>Weight: {{ selectedItem.weight }} lb</span><br>
    <span>Age: {{ selectedItem.age }} months</span><br>
    <span>Friendly with other animals: {{ selectedItem.friendly }}</span>
  </span>
</v-card-text>
```

Inside this component, we have computed property called dynamic picture. 

```html
<v-img
  class="white--text"
  height="400px"
  :src="dynamicPicture"
>
  <v-card-title class="align-end fill-height">{{ selectedItem.name }}</v-card-title>
</v-img>
```

8. App.vue component is the core component, which contain the entire skeleton of our application.
The structure of this component is follow:

```html
<v-app id="inspire">
    
  <app-navigation></app-navigation>

  <app-top-bar></app-top-bar>

  <app-content></app-content>

  <app-footer></app-footer>

  </v-app>
```

9. Main.js file is the enter point of the application. Inside we init the Vue instance, import router, vuex store and vuetify framework, and render the entire applcation through App.vue component.

```js
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
```

10. Router.js contains the Views routes of the Application.

```js
routes: [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/pet/:id',
    name: 'pet',
    component: () => import('./views/Pet.vue')
  }
]
```