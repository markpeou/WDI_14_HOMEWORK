require 'pry'



class Atm

  def initialize (amount)
    @balance = amount
  end

  def withdraw (amount)
    @balance = @balance - amount
  end

  def deposit (amount)
    @balance = @balance + amount
  end

  def balance
    return @balance
  end

  def t_history
    return

  end

end
  binding.pry
