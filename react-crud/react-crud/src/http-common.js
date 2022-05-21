import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

/*

This React.js Client consumes the following Web API:
– http-common.ts initializes axios with HTTP base Url and headers.
– TutorialDataService has methods for sending HTTP requests to the Apis.
Configure Port for React CRUD Client with Web API
Because most of HTTP Server use CORS configuration that
accepts resource sharing restricted to some sites or ports, so we also need to configure port for our App.
In project folder, create .env file with following content:

PORT=8081
Now we’ve set our app running at port 8081

             react                             spring boot                         DB
router,components,service, axios(http --> <---),spring rest controller,spring JPA, postgresSQL
– Spring Boot exports REST Apis using Spring Web MVC & interacts with Database using Spring JPA
– React Client sends HTTP Requests and retrieve HTTP Responses using axios, shows data on the components.
We also use React Router for navigating to pages.
– Database could be MySQL or PostgreSQL.

{App -->Router}---> /Tutorials/:id,/tutorials,/add ---> Tutorial,TutorialList,AddTutorial
---->TutorialDataService(axios---http req--> & http res <--)

React.js Front-end
– The App component is a container with React Router. It has navbar that links to routes paths.
– TutorialsList component gets and displays Tutorials.
– Tutorial component has form for editing Tutorial’s details based on :id.
– AddTutorial component has form for submission new Tutorial.
– These Components call TutorialDataService methods which use axios to make HTTP requests and receive responses.

Technology
React 16
react-router-dom 5.1.2
axios 0.19.2
bootstrap 4.4.1
-----------
React 17/16
typescript 4.3.5
react-router-dom 5
axios 0.24.0
bootstrap 4.6.0
---------------
package.json contains 4 main modules: react, react-router-dom, axios & bootstrap.
– App is the container that has Router & navbar.
– There are 3 components: TutorialsList, Tutorial, AddTutorial.
– http-common.js initializes axios with HTTP base Url and headers.
– TutorialDataService has methods for sending HTTP requests to the Apis.
– .env configures port for this React CRUD App.
-----------------------------------
Open cmd at the folder you want to save Project folder, run command:
npx create-react-app react-crud
npx create-react-app react-axios-typescript-example --template typescript

npm install bootstrap
npm install bootstrap@4.6.0

npm install react-router-dom
-------------
Add React Router to React Typescript Project
When using Typescript with React.js, we don’t use Proptypes. Typescript is stronger than Propstypes.
npm has many dependencies with prefix @types/{name} such as @types/lodash, @types/react…
which is easy to install and use. For this project, we use @types/react-router-dom.
– Run the command: npm install @types/react-router-dom.
-------------

npm install axios
Under src folder, we create http-common.js file with following code:
Create Data Service
npm start
-------------------------------------
After the process is done. We create additional folders and files like the following tree:
components
add-tutorial.component.js
tutorial.component.js
tutorials-list.component.js

services
tutorial.service.js
----------------------------
 components
 add-tutorial.component.tsx
 tutorial.component.tsx
 tutorials-list.component.tsx
 services
 tutorial.service.ts
 types
 tutorial.type.ts
-----------------------------------
npm install bootstrap
Open src/App.js and modify the code inside it as following-

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    // ...
  }
}
export default App;
--------------------------------
Add React Router to React CRUD App
– Run the command: npm install react-router-dom.
– Open src/index.js and wrap App component by BrowserRouter object.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render( <BrowserRouter> <App /></BrowserRouter>, document.getElementById("root"));
serviceWorker.unregister();
----------------------------
Add Navbar to React CRUD App
Open src/App.js, this App component is the root container for our application, it will contain a navbar,
 and also, a Switch object with several Route. Each Route points to a React Component.

import React, { Component } from "react";
...
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">bezKoder</a>

          <div className="navbar-nav mr-auto">
            <li className="nav-item"> <Link to={"/tutorials"} className="nav-link">Tutorials</Link></li>
            <li className="nav-item"><Link to={"/add"} className="nav-link">Add</Link></li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
-------------------------------------------------------
Initialize Axios for React CRUD HTTP Client
Let’s install axios with command: npm install axios.
Under src folder, we create http-common.js file with following code:

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
You can change the baseURL that depends on REST APIs url that your Server configures.
------------------------------------------------------
Create Data Service
In this step, we’re gonna create a service that uses axios object above to send HTTP requests.

services/tutorial.service.js

import http from "../http-common";
class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new TutorialDataService();
We call axios get, post, put, delete method corresponding to HTTP Requests: GET, POST, PUT, DELETE to make CRUD Operations.
-----------------------------------------------------------
Run React CRUD App
You can run our App with command: npm start.
If the process is successful, open Browser with Url: http://localhost:8081/ and check it.
--------------------------------------------------------
 */