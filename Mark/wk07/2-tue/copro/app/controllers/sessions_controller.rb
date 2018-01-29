class SessionsController < ApplicationController

   def new
   end

     def show
       @project = Project.find(params[:id])
       render :show
     end

   def create
     user = User.find_by(email: params[:email])

     if user && user.authenticate(params[:password])
       session[:user_id] = user.id
        redirect_to '/'
     else
       "you failed to log in"
       render :new
     end

   end

 end
