defmodule StatusPhoenix.IncidentTest do
  use StatusPhoenix.ModelCase

  alias StatusPhoenix.Incident

  @valid_attrs %{start_time: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, state: "some content", title: "some content", type: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Incident.changeset(%Incident{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Incident.changeset(%Incident{}, @invalid_attrs)
    refute changeset.valid?
  end
end
