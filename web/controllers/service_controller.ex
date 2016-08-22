defmodule StatusPhoenix.ServiceController do
	use StatusPhoenix.Web, :controller

	alias StatusPhoenix.{Repo, Service}

	def index(conn, _params) do
		services = Repo.all(Service)
		render(conn, "index.json", services: services)
	end

	def show(conn, %{"id" => id}) do
		service = Repo.get!(Service, id)
		render(conn, "show.json", service)  
	end

	def create(conn, service_params) do
		changeset = Service.changeset(%Service{}, service_params)
		case Repo.insert(changeset) do
		{:ok, service} ->
			conn
			|> put_status(:created)
			|> put_resp_header("location", service_path(conn, :show, service))
			|> render("show.json", service)
		{:error, changeset} ->
			conn
			|> put_status(:unprocessable_entity)
			|> render(StatusPhoenix.ChangesetView, "error.json", changeset: changeset)
		end
	end

	def update(conn, %{"id" => id} = service_params) do
		service = Repo.get!(Service, id)
		changeset = Service.changeset(service, service_params)

		case Repo.update(changeset) do
		{:ok, service} ->
			render(conn, "show.json", service)
		{:error, changeset} ->
			conn
			|> put_status(:unprocessable_entity)
			|> render(StatusPhoenix.ChangesetView, "error.json", changeset: changeset)
		end
	end
end