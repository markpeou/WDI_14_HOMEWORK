# Calculator
# Explanation
# You will be building a CLI calculator. Which means it will be a command line text based program. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
puts "Calculator"

puts "what would you like to do?
- add
- subtract
- divide
- multiply
- square_root"

operator = gets.chomp
case operator
  when 'add'
    def add
      puts "what do you wanna add?"
      n1 = gets.to_i
      puts " + "
      n2 = gets.to_i
      puts = " = "
      answer = n1 + n2
      puts "the answer is #{answer}"
    end
    add()

  when 'subtract'
    def subtract
      puts "what do you want to subract?"
      n1 = gets.to_i
      puts "-"
      n2 = gets.to_i
      puts "="
      answer = n1 - n2
      puts "the answer is #{answer}"
    end
    substract()

  when 'multiply'
    def multiply
      puts "what do you want to multiply?"
      n1 = gets.to_i
      puts "*"
      n2= gets.to_i
      puts "="
      answer = n1 * n2
      puts "the answer is #{answer}"
    end
    multiply()

  when 'divide'
    def divide
      puts "what do you want to divide?"
      n1 = gets.to_i
      puts "/"
      n2 = gets.to_i
      puts "="
      answer = n1 / n2
      puts "the answer is #{answer}"
    end
    divide()

  when 'square_root'
    def square_root
      puts "what is the square root of...?"
      n1 = gets.to_i
      answer = Math.sqrt(n1)
      puts "#{answer}"
      square_root()
    end

  end
