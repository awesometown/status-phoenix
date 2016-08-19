defmodule StatusPhoenix.Repo.Migrations.CreateIncident do
  use Ecto.Migration

  def change do
    create table(:incidents) do
      add :title, :string
      add :state, :string
      add :type, :string
      add :start_time, :datetime

      timestamps()
    end

  end
end
