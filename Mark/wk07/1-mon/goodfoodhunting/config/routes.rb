Rails.application.routes.draw do
  resources :comments
  resources :dishes
        # controller file & method
#   get '/', to: 'pages#home'
#   get '/about', to: 'pages#about'
#
#   get '/dishes/new', to: 'dishes#new'
#
#   get '/dishes/:id', to: 'dishes#show'
#   get '/dishes', to: 'dishes#index'
#
#   post '/dishes', to: 'dishes#create'
get '/api/dishes', to: 'dishes#api_index'
post '/api/comments', to: 'comments#api_create'
end
