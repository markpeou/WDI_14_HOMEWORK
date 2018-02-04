Rails.application.routes.draw do
  resources :pokemons

  get '/', to: 'pokemons#index'

  post '/show', to: 'pokemons#new'
end
