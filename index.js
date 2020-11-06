/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const humans = {
   woman,
   man,
   legs: 2,
   hands: 2,
   saying() {
      'Hello!'
   }
}

const pets = {
   dog,
   cat,
   paws: 4
}

const gender = {
   female,
   male
}

const woman = {
   name: 'Hanna',
   whoIs: humans.woman,
   gender: gender.female,
   hands: humans.hands,
   legs: humans.legs,
   sayng: humans.saying()
}

const man = {
   name: 'Vlad',
   whoIs: humans.man,
   gender: gender.male,
   hands: humans.hands,
   legs: humans.legs,
   saying: humans.saying()
}

const cat = {
   name: 'Ernest',
   whoIs: pets.cat,
   gender: gender.male,
   paws: pets.paws,
   saying() {
      'Meoy!'
   }
}

const dog = {
   name: 'Emilia',
   whoIs: pets.dog,
   gender: gender.female,
   paws: pets.paws,
   saying() {
      'Woooff!'
   }
}

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


