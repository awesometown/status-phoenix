defmodule StatusPhoenix.Repo.Migrations.CreateIncidentUpdate do
  use Ecto.Migration

  def change do
    create table(:incident_updates) do
      add :description, :string
      add :new_state, :string
      add :new_service_status_id, :string

      timestamps()
    end

  end
end
