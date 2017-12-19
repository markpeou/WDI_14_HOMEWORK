require 'pry'

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

puts ('end of program')
