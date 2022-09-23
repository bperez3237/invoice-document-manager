Rails.application.routes.draw do
  
  resources :subcontractors, [:show, :index]
  resources :employees, only: [:show, :index, :create, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
