class Person:
    def __init__(self, name, age, city, job):
        self.name = name
        self.age = age
        self.city = city
        self.job = job

    def show_info(self):
        result = f"""Name: {self.name}
Age: {self.age}
City: {self.city}
Job: {self.job}"""
        return result

person1 = Person("David",22,"Kadima","DevOps")
print(person1.show_info())

#2
class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def show_info(self):
        result = f"""Brand: {self.brand}
Model: {self.model}
Year: {self.year}
Color: {self.color}"""
        return result

car1 = Car("David",22,"Kadima","DevOps")
print(car1.show_info())
