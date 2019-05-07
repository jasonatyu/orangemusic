Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :index] do 
      resources :songs, only: [:index, :create, :destroy]
      resources :albums, only: [:index]
      resources :artists, only: [:index]
      resources :playlists, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show] do 
       get "search", on: :collection
    end
    resources :playlists, only: [:show, :create, :update, :destroy] do
       get "search", on: :collection
       resources :songs, only: [:create, :destroy]
    end
    resources :albums, only: [:show] do 
      get "search", on: :collection
    end
    resources :artists, only: [:show] do 
      get "search", on: :collection
    end
  end 
end
