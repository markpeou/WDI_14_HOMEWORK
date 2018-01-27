Rails.application.routes.draw do
  resources :hogwarts_developments

  get '/',  to: "houses#index"




  resource :house, only: [:index, :show]
  resources :students, only: [:index, :show]

end
