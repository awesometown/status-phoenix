defmodule StatusPhoenix.Service do
	use StatusPhoenix.Web, :model

	@derive {Poison.Encoder, only: [:id, :name, :description, :service_status_id]}

	schema "services" do
		field :name, :string
		field :description, :string
		field :service_status_id, :string

		timestamps()
	end

	@required_fields ~w(name, description)
	@optional_fields ~w(service_status_id)

	@doc """
	Builds a changeset based on the `struct` and `params`.
	"""
	def changeset(struct, params \\ %{}) do
		struct
		|> cast(params, [:name, :description, :service_status_id])
		|> validate_required([:name, :description, :service_status_id])
	end
end
