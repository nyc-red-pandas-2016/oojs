class Dog

	def initialize(args)
		@name = args[:name]
		@breed = args[:breed]
		@age = args[:age]
	end

  def bark
    puts "Woof woof"
  end
  
end

dog = Dog.new({name: "Chancy", breed: "Dalmation", age: 11})
dog.bark

