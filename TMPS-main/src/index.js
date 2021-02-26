// lab1
import SingletonPblFactory from "./CreationalPatterns/SingletonPblFactory";
import PblPrototype from './CreationalPatterns/PblPrototype';
import DecoratedPbl from './StructuralPatterns/DecorantedPbl';
import GroupsProxy from './StructuralPatterns/GroupsProxy';
import AplicantFacade from "./StructuralPatterns/AplicantFacade";
import Iterator from './BehavioralPatterns/Iterator';

const groups = [];
const pblFactory1 = new SingletonPblFactory();
const pblFactory2 = new SingletonPblFactory();
console.log(`\n============ Lab1, Creational Patterns ==============\n`);

console.log(`pblFactory1 === pblFactory2 ${pblFactory1 === pblFactory2}`);

groups.push(pblFactory1.createPbl('FAF-181'));
groups.push(pblFactory1.createPbl('FAF-182'));
groups.push(pblFactory2.createPbl('FAF-171'));
groups.push(pblFactory2.createPbl('FAF-172'));
groups.push(pblFactory1.createNoPbl('TI-161'));
groups.push(pblFactory1.createNoPbl('TI-162'));
groups.push(pblFactory2.createNoPbl('TI-163'));
groups.push(pblFactory2.createNoPbl('TI-164'));

const proto = pblFactory1.createPbl('FAF-183 Prototype');
const prototype = new PblPrototype(proto);

groups.push(prototype.clone());

groups.forEach((group) => {
  group.say();
});

console.log(`\n============ Lab2, Structural Patterns ==============\n`);

const group = pblFactory1.createPbl('FAF-201');
group.say();
const decoratedPblGroup = new DecoratedPbl(group, 'Adriana Sanduta');
decoratedPblGroup.say();
decoratedPblGroup.addStudent('Victoria Belinschi');
decoratedPblGroup.addStudent('Sandrinia Saponari');
decoratedPblGroup.removeStudent('Victoria Belinschi');
decoratedPblGroup.addStudent('Ilona Sanduta');
decoratedPblGroup.say();
groups.push(decoratedPblGroup);

console.log(`\nProxy\n`);
const groupProxy = new GroupsProxy(groups);
groupProxy.getFieldInfo('groupName');
groupProxy.getFieldInfo('moderator');
groupProxy.getFieldInfo('groupName');
groupProxy.getCount();

const aplicant = new AplicantFacade('Madalina Sanduta');
const result = aplicant.applyInGroup(decoratedPblGroup.groupName);
if (result) {
  decoratedPblGroup.addStudent(aplicant.name);
}
decoratedPblGroup.say();

const iter = new Iterator(decoratedPblGroup.students);
console.log("Iterating Students");
iter.each(el => console.log("Student: " + el));