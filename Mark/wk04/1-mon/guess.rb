require 'pry'
# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

puts "guess the number between 0-100"
random_number = rand(0...100)
guess = gets.chomp.to_i

while random_number != guess do
  puts 'try again'
  guess = gets.chomp.to_i

  if guess == random_number
    puts guess.to_s  + ' is correct!'
  end

  if guess > random_number
    puts 'too high!'
  end

  if guess < random_number
    puts 'too low!'
  end

end


puts ('end of program')
