defmodule StatusPhoenix.Repo.Migrations.CreateService do
  use Ecto.Migration

  def change do
    create table(:services) do
      add :name, :string
      add :description, :string
      add :service_status_id, :string

      timestamps()
    end

  end
end
