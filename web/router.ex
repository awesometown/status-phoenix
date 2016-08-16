defmodule StatusPhoenix.Router do
  use StatusPhoenix.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", StatusPhoenix do
    pipe_through :api

    scope "/v1" do
      post "/registrations", RegistrationController, :create
    end
  end

  scope "/", StatusPhoenix do
    pipe_through :browser # Use the default browser stack

    get "*path", PageController, :index
    
    #resources "/services", ServiceController, only: [:index, :show]
  end

  scope "/admin", StatusPhoenix.Admin, as: :admin do
    pipe_through :browser

    resources "/services", ServiceController, only: [:delete]
  end

  # Other scopes may use custom stacks.
  # scope "/api", StatusPhoenix do
  #   pipe_through :api
  # end
end
