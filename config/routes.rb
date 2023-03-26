Rails.application.routes.draw do
  root "pages#home"

  get "/about", to: "pages#about", as: :about
  get "/snippets", to: "snippets#index", as: :snippets

  get "/snippets/custom-redirect-devise", to: "snippets#custom"

end
