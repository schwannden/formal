Rails.application.routes.draw do
  resources :events
  resources :tweets do
    resources :comments
    resources :likes
  end
  devise_for :users, :controllers => { :sessions => "users/sessions", :registrations => "users/registrations" }
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'admin#index'

  match 'admin/*path' => 'admin#index', via: :get
  get '/'       => 'admin#index'
  get '/login'  => 'users#login'
  get '/signup' => 'users#login'
end
