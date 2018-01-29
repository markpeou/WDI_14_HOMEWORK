Rails.application.routes.draw do
  resources :likes
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/', to: 'pages#home'

get '/login', to: 'session#new'
post '/session', to: 'session#create'
delete '/session', to: 'session#create'

get '/show/:id', to: 'projects#show'



resources :projects, only: [:new,:create,:show]
resources :users

end
