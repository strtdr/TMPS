# Topic: *Creational Design Patterns*

## Author: *Strainu Tudor*

## Objectives :

__1. Study and understand the Creational Design Patterns;__

__2. Choose a domain, define its main classes/models/entities and choose the appropriate instantiation mechanisms;__

__3. Use some creational design patterns for object instantiation in a sample project;__

## Some Theory :

In software engineering, the creational design patterns are the general solutions that deal with object creation, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by optimizing, hiding or controlling the object creation.

Some examples of this kind of design patterns are :

   * Singleton
   * Builder
   * Prototype
   * Object Pooling
   * Factory Method
   * Abstract Factory
   
## Main tasks :

__1. Choose an OO programming language and a suitable IDE or Editor (No frameworks/libs/engines allowed);__

__2. Select a domain area for the sample project;__

__3. Define the main involved classes and think about what instantiation mechanisms are needed;__

__4. Based on the previous point, implement atleast 3 creational design patterns in your project;__

## My understanding of creational design patterns

1. __Singleton__ - pattern which returns the same instance for every call.
2. __Abstract Factory__ - pattern which creates family of similar objects.
3. __Prototype__ - pattern which allows to create an object using properties from a prototype.

## Domain area

I used as a domain the types of groups of university as follows :  PBL and NoPbl.

## Implementation 

I implemented 3 Creational Patterns (Abstract Factory, Singleton, Prototype) in JavaScript.  
[SingletonPblFactory](https://github.com/Adrianasanduta/TMPS/blob/master/src/CreationalPatterns/SingletonPblFactory.js) is a Singleton class Factory that creates objects of concrete type [Pbl](https://github.com/Adrianasanduta/TMPS/blob/master/src/CreationalPatterns/Pbl.js).  

```javascript
let groups = [];
let pblFactory1 = new SingletonPblFactory();
let pblFactory2 = new SingletonPblFactory();

console.log(`pblFactory1 === pblFactory2 ${pblFactory1 === pblFactory2}`); 
// pblFactory1 === pblFactory2 true

groups.push(pblFactory1.createPbl('FAF-181'));
```

[PblPrototype](https://github.com/Adrianasanduta/TMPS/blob/master/src/CreationalPatterns/PblPrototype.js) is class that has a prototype on creation and creates clones of [Pbl](https://github.com/Adrianasanduta/TMPS/blob/master/src/CreationalPatterns/Pbl.js).

```javascript
let proto = pblFactory1.createPbl('FAF-183 Prototype');
let prototype = new PblPrototype(proto);

groups.push(prototype.clone());
```

## The Output

![image](https://user-images.githubusercontent.com/56167303/95679501-edc84300-0bdb-11eb-8969-0ce3b5ebdc9a.png)
