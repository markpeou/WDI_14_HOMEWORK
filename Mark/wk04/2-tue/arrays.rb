# Arrays
# Starting with the following array...

# planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# Access the second value in planeteers.
planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push('heart')

# Remove "Captain Planet" from the array (without using a method)
remove_captain = ["Captain Planet"]
her
# planeteers.delete('Captain Planet')


# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.
def alphabetize (arr)
  return arr.sort
end

alphabetize(heroes)


# Randomize the contents of heroes using a method. The Ruby documentation might help.

def randomize(arr)
  return arr.shuffle
end
randomize(heroes)


Bonus
# Select a random element from heroes using a method. The Ruby documentation might help.

def random_hero(arr)
  return arr.sample
end

random_hero(heroes)


# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.
bees = []

def b(arr)
  return arr.each.select{ |b| b == 'b'}.push()
end



# Hashes
# Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = [{
  :name => 'Michelangelo',
  :weapon => 'Nunchuks',
  :radical => true
}]
[{
  :name => 'Leonardo',
  :weapon => 'Katana',
  :radical => true
}]
[{
  :name => 'Donatello',
  :weapon => 'Bo Staff',
  :radical => true
}]
[{
  :name => 'Raphael',
  :weapon => 'Sai',
  :radical => true
}]

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle.merge! (:age => 300)
# # Your answer here
# Remove the radical key-value pair from ninja_turtle.
#
# # Your answer here
# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
#
# # Your answer here
# Access the first element of pizza_toppings.
#
# # Your answer here
# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

# Your answer here
# Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

# Your answer here
