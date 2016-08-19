defmodule StatusPhoenix.Incident do
	use StatusPhoenix.Web, :model

	schema "incidents" do
		field :title, :string
		field :state, :string
		field :type, :string
		field :start_time, Ecto.DateTime

		has_many :incident_updates, StatusPhoenix.IncidentUpdate

		timestamps()
	end

	@required_fields ~w(title, state, type)
	@optional_fields ~w(start_time)

	@doc """
	Builds a changeset based on the `struct` and `params`.
	"""
	def changeset(struct, params \\ %{}) do
		struct
		|> cast(params, [:title, :state, :type, :start_time])
		|> validate_required([:title, :state, :type, :start_time])
	end
end
