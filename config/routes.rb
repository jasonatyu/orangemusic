Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :index] do 
      resources :songs, only: [:index, :create, :destroy]
      resources :playlists, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
       resources :songs, only: [:create, :destroy]
    end
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end 

end
