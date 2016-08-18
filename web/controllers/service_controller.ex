defmodule StatusPhoenix.ServiceController do
    use StatusPhoenix.Web, :controller

    alias StatusPhoenix.{Repo, Service}

    def index(conn, _params) do
        services = Repo.all(Service)
        render(conn, "index.json", services: services)
    end

    def show(conn, %{"id" => id}) do
        service = Repo.get(Service, id)
        case service do
            nil -> conn |> put_status(:not_found) |> render(StatusPhoenix.ErrorView, "404.json")
            _ -> render(conn, "show.json", service: service)
        end       
    end
end