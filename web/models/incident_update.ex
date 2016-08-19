defmodule StatusPhoenix.IncidentUpdate do
  use StatusPhoenix.Web, :model

  schema "incident_updates" do
    field :description, :string
    field :new_state, :string
    field :new_service_status_id, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :new_state, :new_service_status_id])
    |> validate_required([:description, :new_state, :new_service_status_id])
  end
end
