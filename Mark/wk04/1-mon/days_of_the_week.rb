#1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:

days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

# 2. My calendar says the first day is Sunday...
days_of_the_week.pop
days_of_the_week.unshift('Sunday')

# 3. Create a new array of the days of the week:
new_days = ["Saturday","Sunday",["Monday","Tuesday","Wednesday","Thursday","Friday"]]
# 4. Remove either the weekdays or the weekends
# Your choice...
new_days.shift
new_days.shift[0]

# 5. Sort the remaining days alphabetically
new_days.sort
