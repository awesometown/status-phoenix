defmodule StatusPhoenix.IncidentControllerTest do
  use StatusPhoenix.ConnCase

  alias StatusPhoenix.Incident
  @valid_attrs %{start_time: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, state: "some content", title: "some content", type: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, incident_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    incident = Repo.insert! %Incident{}
    conn = get conn, incident_path(conn, :show, incident)
    assert json_response(conn, 200) == %{"id" => incident.id,
      "title" => incident.title,
      "state" => incident.state,
      "type" => incident.type,
      "start_time" => incident.start_time}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, incident_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, incident_path(conn, :create), @valid_attrs
    assert json_response(conn, 201)["id"]
    assert Repo.get_by(Incident, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, incident_path(conn, :create), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    incident = Repo.insert! %Incident{}
    conn = put conn, incident_path(conn, :update, incident), @valid_attrs
    assert json_response(conn, 200)["id"]
    assert Repo.get_by(Incident, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    incident = Repo.insert! %Incident{}
    conn = put conn, incident_path(conn, :update, incident), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    incident = Repo.insert! %Incident{}
    conn = delete conn, incident_path(conn, :delete, incident)
    assert response(conn, 204)
    refute Repo.get(Incident, incident.id)
  end
end
