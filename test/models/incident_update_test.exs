defmodule StatusPhoenix.IncidentUpdateTest do
  use StatusPhoenix.ModelCase

  alias StatusPhoenix.IncidentUpdate

  @valid_attrs %{description: "some content", new_service_status_id: "some content", new_state: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = IncidentUpdate.changeset(%IncidentUpdate{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = IncidentUpdate.changeset(%IncidentUpdate{}, @invalid_attrs)
    refute changeset.valid?
  end
end
