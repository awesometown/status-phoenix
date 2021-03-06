defmodule StatusPhoenix.ServiceControllerTest do
	use StatusPhoenix.ConnCase

	alias StatusPhoenix.Service
	
	@valid_attrs %{description: "some content", name: "some content", service_status_id: "some content"}
	@invalid_attrs %{}

	setup %{conn: conn} do
		{:ok, conn: put_req_header(conn, "accept", "application/json")}
	end

	test "lists all entries on index", %{conn: conn} do
		conn = get conn, service_path(conn, :index)
		assert json_response(conn, 200) == %{"services" => []}
	end

	test "shows chosen resource", %{conn: conn} do
		service = Repo.insert! %Service{}
		conn = get conn, service_path(conn, :show, service)
		assert json_response(conn, 200) == %{"id" => service.id,
			"name" => service.name,
			"description" => service.description,
			"service_status_id" => service.service_status_id}
	end

	test "renders page not found when id is nonexistent", %{conn: conn} do
		assert_error_sent 404, fn ->
			get conn, service_path(conn, :show, -1)
		end
	end

	test "creates and renders resource when data is valid", %{conn: conn} do
		conn = post conn, service_path(conn, :create), @valid_attrs
		assert json_response(conn, 201)["id"]
		assert Repo.get_by(Service, @valid_attrs)
	end

	test "does not create resource and renders errors when data is invalid", %{conn: conn} do
		conn = post conn, service_path(conn, :create), @invalid_attrs
		assert json_response(conn, 422)["errors"] != %{}
	end

	test "updates and renders chosen resource when data is valid", %{conn: conn} do
		service = Repo.insert! %Service{}
		conn = put conn, service_path(conn, :update, service),  @valid_attrs
		assert json_response(conn, 200)["id"]
		assert Repo.get_by(Service, @valid_attrs)
	end

	test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
		service = Repo.insert! %Service{}
		conn = put conn, service_path(conn, :update, service), @invalid_attrs
		assert json_response(conn, 422)["errors"] != %{}
	end

	# test "deletes chosen resource", %{conn: conn} do
	# 	service = Repo.insert! %Service{}
	# 	conn = delete conn, service_path(conn, :delete, service)
	# 	assert response(conn, 204)
	# 	refute Repo.get(Service, service.id)
	# end
end
