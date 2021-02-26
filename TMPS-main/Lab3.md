# Topic: *Behavioral Design Patterns*

## Author: *Strainu Tudor*

## Objectives :

__1. Study and understand the Behavioral Design Patterns;__

__2. As a continuation of the previous laboratory work, think about what communication between software entities might be involed in your system;__

__3. Implement some additional functionalities using behavioral design patterns;__

## Some Theory :

    In software engineering, behavioral design patterns have the purpose of identifying common communication patterns between different software entities. By doing so, these patterns increase flexibility in carrying out this communication.

Some examples of this kind of design patterns are :

   * Chain of Responsibility
   * Command
   * Interpreter
   * Iterator
   * Mediator
   * Observer
   * Strategy
  

## Implementation 

I implemented 1 Behavioral Pattern (Iterator) in JavaScript.


Iterator is a class that get as a parameter a list and can iterate through it.


```javascript
first() {
  this.reset();
  return this.next();
}

next() {
  return this.items[this.index++];
}

hasNext() {
  return this.index <= this.items.length;
}

reset() {
  this.index = 0;
}

each(callback) {
  for (let item = this.first(); this.hasNext(); item = this.next()) {
    callback(item);
  }
}
```
Usage:

```javascript
const iter = new Iterator(decoratedPblGroup.students);
console.log("Iterating Students");
iter.each(el => console.log("Student: " + el));
```


## The Output

![image](https://user-images.githubusercontent.com/56167303/101170930-cb84fb80-3647-11eb-8f60-ed2f9918308e.png)

