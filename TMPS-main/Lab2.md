# Topic: *Structural Design Patterns*

## Author: *Strainu Tudor*

## Objectives:
&ensp; &ensp; __1. Study and understand the Structural Design Patterns;__

&ensp; &ensp; __2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user;__

&ensp; &ensp; __3. Implement some additional functionalities using structural design patterns;__

## Theoretical background:
&ensp; &ensp; In software engineering, the Structural Design Patterns are concerned with how classes and objects are composed to form larger structures. Structural class patterns use inheritance to create a hierarchy of classes/abstractions, but the structural object patterns use composition which is generally a more flexible alternative to inheritance.

&ensp; &ensp; Some examples of from this category of design patterns are :

   * Adapter
   * Bridge
   * Composite
   * Decorator
   * Facade
   * Flyweight
   * Proxy
   
## Implementation

I implemented 3 Structural Patterns (Decorator, Proxy, Facade) in JavaScript.  
[DecoratedPbl](src/StructuralPatterns/DecorantedPbl.js) decorates [Pbl](src/CreationalPatterns/Pbl.js) class with new properties and methods.

```javascript
export default class DecoratedPbl {
  constructor(pbl, moderator) {
    this.pbl = pbl;
    this.groupName = pbl.groupName;
    this.students = [moderator];
    this.moderator = moderator;
  }
  /*...*/
```

Usage:

```javascript
let group = pblFactory1.create('FAF-201');
group.say(); // I am Pbl FAF-201
let decoratedGroup = new DecoratedPbl(group, `Adriana Sanduta`);
decoratedGroup.say();
// I am Decorated Pbl FAF-201,
// Moderator: Adriana Sanduta,
// Students:  [ 'Adriana Sanduta' ]
```

[GroupsProxy](src/StructuralPatterns/GroupsProxy.js) has 2 classes, `GroupInfo` and `InfoProxy`.  
`InfoProxy` has a instance of `GroupInfo` and a `infoCache` object that store all requests to proxy and if request is repeated it does not create a new connection but use old request from cache.

```javascript
export default class InfoProxy {
  constructor(groups){
    this.groupsInfo = new GroupsInfo(groups);
    this.infoCache = {}
  }

  getFieldInfo(fieldName){
    if(!this.infoCache[fieldName]){
      this.infoCache[fieldName] = this.groupsInfo.getFieldInfo(fieldName);
    }
    console.log(fieldName, this.infoCache[fieldName]);
  }

  getCount(){
    let count = 0;
    for (let code in this.infoCache) { count++; }
    console.log(`Cache size: ${count}`);
  }
}
```

Usage:

```javascript
/*...*/
let groupProxy = new GroupsProxy(groups);
groupProxy.getFieldInfo('groupName');
// groupName: FAF-181,FAF-182,FAF-171,FAF-172,TI-151,TI-151,TI-151,TI-151,FAF-183 Prototype,FAF-201
groupProxy.getFieldInfo('moderator');
// NOTE: ONLY DECORATEDGROUP (LAST GROUP) HAS 'moderator' FIELD
// moderator: Field does not exists,Field does not exists,Field does not exists,Field does not exists,
// Field does not exists,Field does not exists,Field does not exists,Field does not exists,
// Field does not exists,Adriana Sanduta
groupProxy.getFieldInfo('groupName');
// groupName: FAF-181,FAF-182,FAF-171,FAF-172,TI-151,TI-151,TI-151,TI-151,FAF-183 Prototype,FAF-201
groupProxy.getCount(); // Cache size: 2
```
[AplicantFacade](src/StructuralPatterns/AplicantFacade.js) is a facade that uses classes with complex logic and is a bridge between them and user.  

```javascript
applyInGroup(groupName) {
let result = true;
if (!new Diploma().get(this.name)) {
  result = false;
} else if (!new BAC().verify(this.name)) {
  result = false;
} else if (!new Group().available(groupName)) {
  result = false;
}

return result;
}
```

Usage:

```javascript
const aplicant = new AplicantFacade('Madalina Sanduta');
const result = aplicant.applyInGroup(decoratedPblGroup.groupName);
if (result) {
  decoratedPblGroup.addStudent(aplicant.name);
}
decoratedPblGroup.say();
/* I am Decorated Pbl FAF-201,
Moderator: Adriana Sanduta,
Students:  [
  'Adriana Sanduta',
  'Sandrinia Saponari',
  'Ilona Sanduta',
  'Madalina Sanduta' */

```
