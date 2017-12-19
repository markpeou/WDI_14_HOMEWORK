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

puts "guess the number"
random_number = rand(0...10)
guess = gets.chomp.to_i

while random_number != guess do
  puts 'try again'
  guess = gets.chomp.to_i

  if guess == random_number
    puts guess.to_s  + ' is correct!'
  end
end


puts ('end of program')


# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
# Your choice...
#
# 5. Sort the remaining days alphabetically

#1
 days_of_the_week = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']


#2
days_of_the_week.pop
days_of_the_week.unshift('sunday')

#3
days_of_the_week = ['monday','tuesday','wednesday','thursday','friday',['saturday','sunday']]

#4
days_of_the_week.slice(5,7)

#5
# line of code
# write a program loc.rb to count and puts the number of lines of code in a file
#
# eg. say you have a file data.txt with the following contents
#
# cat
# dog
# rabbit
# when I run the program, it should prompt for a filename
#
# > ruby loc.rb
# > Enter filename: data.txt
# > 3 line(s)
# hint
# lookup gets method and the readlines method


out_file = File.new("data.txt", "w")
#...
out_file.puts("cat","dog","rabbit")
#...
out_file.close
