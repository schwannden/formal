Rails.application.routes.draw do
  resources :events
  resources :tweets do
    resources :comments
    resources :likes
  end
  devise_for :users, :controllers => { :sessions => "users/sessions", :registrations => "users/registrations" }
  get 'current_user' => 'users#get_user'

  root 'home#index'

  match 'admin/*path' => 'admin#index', via: :get
  get '/'       => 'home#index'
  get '/login'  => 'home#index'
  get '/signup' => 'home#index'
end
