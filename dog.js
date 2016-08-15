function Dog(args){
	this.name = args["name"] || "shoes";
	this.breed = args.breed;
	this.age = args.age;

	this.bark = function(){
		return this.name;
	}

}


// Dog.prototype.bark = function(){
// 	return "Ruff ruff";
// }

var dog = new Dog({breed:"Red Panda", age:87});

console.log(dog.bark());
