# vuetify-sample

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Configuration:
```
Inside .env file set VUE_APP_API_CLIENT to ‘mock’ in order to run the application and fetch local data from json file.

Dont modify vue.config.json file. There, we tell the application to use the contant above in order the app to make real api call, or to fetch data from static json file which is stored in src/data/static/items.json 
```

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

### Explanation:
```
1. assets folder contain logo image in .png and .svg format, and two images neeed for application, inside img folder.
2. components folder contains four Vue components, which represent the skeleton of the entire application. ApplicationBar contain vuetify components need for header, NavigationDrawer is sidebar component, AppFooter is the footer and AppContent is the core component for Views, which contain <router-view />.
3. data folder contains two subfolderd, constants and static. In constants, there are URL routes, and in static, there is items.json object, which represents mock-up data for fake api call.
4. plugins folder contains vuetify.js config file, where developers could play(add/remove) with given options by vuetify framework. For example, we can simple change theme of the app by set the dark option to false  theme: { dark: false } 
5. services folder contains mock and server subfolders, which are responsible for api calls. Depend on the .env setting (mock or server), we can easy use fake or real api call to the server, in order to fetch the data and show it to the end-user. Default -> mock data.
6. store folder contains six files, that together unify the Vuex store. Main point is index.js, where we import actions, muttations, getters, state and storage. Inside this file, we import external vuex-persistedstate library, in order to persist table and its options. Inside storage.js we import js-cookie external library, which is used for the reason explained above. (We store the vuex state there). Default value is „expires: 1“, which means that the data will store inside cookies for the whole day. If we simply want to delete cookies, created prior, we set this value to 0.
7. views folder contains the main view for the entire Application. Home.vue and Pet.vue run inside <router-view />. 
Home view contains vuetify vue-data-table where we bind data comes from vuex store. 
I On <v-text-field> component we simple use: 
a) :value=“sarch“ as input (not v-model in order to prevent using vue-warning)
b) @input event which we bind to updateFilter function. 
II On <v-data-table> we use:
a) :headers as headers of the table
b) :items as table items which come from json file, and are stored inside vuex.
c) :search as filter
d) :sort-by=“sortBy“ as sort columns
e) @click:row event for selection of certain row
f) @update:options event to update sorted columns inside vuex store
g) multi-sort set to true
h) no-data-text prop (to show text during loading data from API call)
Pet.vue is called only if we click on the certain row on the table. This component has route like /pet/:id. Inside the component, we have function that fetch id from the route when component is mounted. 
8. App.vue component is the core component, which contain the entire skeleton of our application.
9. main.js file is the enter point of the application. Inside we init the Vue instance, import router, vuex store and vuetify framework, and render the entire applcation through App.vue component.
10. router.js
```