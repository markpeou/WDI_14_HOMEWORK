class PokemonsController < ApplicationController

  def index
    @pokemon = Pokemon.all
  end

  def create
    pokemon = Pokemon.new
    pokemon.nickname = params[:nickname]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.save
    redirect_to '/'
  end

  def new

  end
end
