class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        print(f"Im {self.name}")

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
        
    def speak(self):
        print("Bark")

class Cat(Animal):
    def __init__(self, name, age, has_mustache):
        super().__init__(name, age)
        self.has_mustache = has_mustache
        
    def speak(self):
        print("Mew")

class Bird(Animal):
    def __init__(self, name, age, wingspan):
        super().__init__(name, age)
        self.wingspan = wingspan
        
    def speak(self):
        print("bird sound")
        
class Bunny(Animal):
    def __init__(self, name, age, ear_length):
        super().__init__(name, age)
        self.ear_length = ear_length
        
    def speak(self):
        print("Bunny sound")
        
class Shark(Animal):
    def __init__(self, name, age, tail_legth):
        super().__init__(name, age)
        self.tail_legth = tail_legth
        
    def speak(self):
        print("Shark sound")
        
dog1 = Dog("David",22,"Haski")
cat1 = Cat("David",22,False)
bird1 = Bird("David",22,7.7)
bunny1 = Bunny("David",22,5)
shark1 = Shark("David",22,22.1)

dog1.speak()
cat1.speak()
bird1.speak()
bunny1.speak()
shark1.speak()

        