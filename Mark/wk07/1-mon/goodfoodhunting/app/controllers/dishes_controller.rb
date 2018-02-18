class DishesController < ApplicationController

  def index
    @dishes = Dish.all
    render :index
  end

  def api_index
    @dishes = Dish.all
    render json: @dishes
  end

  def new
  end


  def show
    @dish = Dish.find(params[:id])
  end

  def create
    dish = Dish.new
    dish.title = params[:title]
    dish.save
    redirect_to '/dishes'
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    dish = Dish.find(params[:id])
    dish.name = params[:name]
    dish.save
    redirect_to "/dishes/#{dish.id}"
  end
  
end
