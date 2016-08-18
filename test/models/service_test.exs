defmodule StatusPhoenix.ServiceTest do
  use StatusPhoenix.ModelCase

  alias StatusPhoenix.Service

  @valid_attrs %{description: "some content", name: "some content", service_status_id: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Service.changeset(%Service{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Service.changeset(%Service{}, @invalid_attrs)
    refute changeset.valid?
  end
end
