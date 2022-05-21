package com.hakim.springbootcrud.service;

public class TutorialService {

/*
Run & Test
Run Spring Boot application with command: mvn spring-boot:run.
tutorials table will be automatically generated in Database.

@CrossOrigin is for configuring allowed origins.
– @RestController annotation is used to define a controller and to indicate that the return value of the methods should be be bound to the web response body.
– @RequestMapping("/api") declares that all Apis’ url in the controller will start with /api.
– We use @Autowired to inject TutorialRepository bean to local variable.

Cross-Origin Resource Sharing (CORS) is a security concept that allows restricting the resources implemented in web browsers.
 It prevents the JavaScript code producing or consuming the requests against different origin.
– @CrossOrigin is for configuring allowed origins.
– @RestController annotation is used to define a controller and to indicate that the return value
 of the methods should be be bound to the web response body.
– @RequestMapping("/api") declares that all Apis’ url in the controller will start with /api.
– We use @Autowired to inject TutorialRepository bean to local variable.


   @RequestParam used for accessing the values of the query parameters
    @RequestParam is used to read the HTML form data provided by a user and bind it to the request parameter.
     The Model contains the request data and provides it to view page.
     Method parameters annotated with @RequestParam are required by default. will correctly invoke the method
    The @RequestParam is used to extract query parameters while @PathVariable is used to extract data right from the URI.

ResponseEntity represents the whole HTTP response: status code, headers, and body.
   As a result, we can use it to fully configure the HTTP response.
   If we want to use it, we have to return it from the endpoint; Spring takes care of the rest.
   @ResponseBody is a marker for the HTTP response body(puts the return value into the body of the response) and
    @ResponseStatus declares the status code of the HTTP response(allows us to add headers and status code)


 @RequestMapping is used at the class level while @GetMapping is used to connect the methods

 You don't always need a service layer. Especially if your APIs are just simple CRUD operations,
        for example, with no real logic required or calculations. However, if you have an API which performs some logic
    before querying your repository then this should be in a separate service class

  Can we use ResponseEntity in service layer?
Yes, Service returning domain object should be preferable to a Service returning ResponseEntity<> .
There is no best practices. Having said that, you should think of implementing something like Hexagonal or
 Layered architecture.


 How do I return a JSON response from REST API?
java as follows. Modify the DisplayEmployeeController. java. Add the headers="Accept=application/json",
 to tell the MVC to return Employee info in JSON format.

 Jackson is a very popular and efficient java based library to serialize or map java objects to JSON and vice versa.
 Springboot automatically configures jackson message converters for rest endpoints if it finds jackson as dependency
  or classpath.So all you need to enable a rest endpoint to return a json response is to have the jackson as dependency and springboot will take care of the rest through autoconfiguration

Accept and Content-type are both headers sent from a client(browser say) to a service.
Accept header is a way for a client to specify the media type of the response content it is expecting and
Content-type is a way to specify the media type of request being sent from the client to the server.

How do I read a JSON file in REST API?
To receive JSON from a REST API endpoint, you must send an HTTP GET request to the REST API server and
 provide an Accept: application/json request header.
 The Accept header tells the REST API server that the API client expects JSON.
The Accept request HTTP header indicates which content types, expressed as MIME types, the client is able to understand.
If the Accept header is not present in the request, then the server assumes that the client accepts all types of media.

 How do I return a JSON response from REST API?
java as follows. Modify the DisplayEmployeeController. java.
Add the headers="Accept=application/json", to tell the MVC to return Employee info in JSON format.

How does REST API send JSON data?
To post JSON to a REST API endpoint, you must send an HTTP POST request to the REST API server and
provide JSON data in the body of the POST message.
You also need to specify the data type in the body of the POST message using the
Content-Type: application/json request header.


 @RequestBody annotation maps the HttpRequest body to a transfer or domain object,
 enabling automatic deserialization of the inbound HttpRequest body onto a Java object.
   Spring automatically deserializes the JSON into a Java type, assuming an appropriate one is specified.
    Spring should deserialize a request body into an object. This object is passed as a handler method parameter
   @ResponseBody is a Spring annotation which binds a method return value to the web response body.
It is not interpreted as a view name. It uses HTTP Message converters to convert the return value to HTTP response body,
 based on the content-type in the request HTTP header.


spring.jpa.hibernate.ddl-auto is used for database initialization. We set the value to update value so that a table
will be created in the database automatically corresponding to defined data model.
Any change to the model will also trigger an update to the table. For production, this property should be validate.


Apis help to create, retrieve, update, delete Tutorials.
Apis also support custom finder methods such as find by published status or by title.
These are APIs that we need to provide:

Methods	Urls	Actions
POST	/api/tutorials	create new Tutorial
GET	/api/tutorials	retrieve all Tutorials
GET	/api/tutorials/:id	retrieve a Tutorial by :id
PUT	/api/tutorials/:id	update a Tutorial by :id
DELETE	/api/tutorials/:id	delete a Tutorial by :id
DELETE	/api/tutorials	delete all Tutorials
GET	/api/tutorials/published	find all published Tutorials
GET	/api/tutorials?title=[keyword]	find all Tutorials which title contains keyword

    */
}
