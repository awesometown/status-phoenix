defmodule StatusPhoenix.IncidentView do
  use StatusPhoenix.Web, :view

  def render("index.json", %{incidents: incidents}) do
    %{data: render_many(incidents, StatusPhoenix.IncidentView, "incident.json")}
  end

  def render("show.json", %{incident: incident}) do
    render_one(incident, StatusPhoenix.IncidentView, "incident.json")
  end

  def render("incident.json", %{incident: incident}) do
    %{id: incident.id,
      title: incident.title,
      state: incident.state,
      type: incident.type,
      start_time: incident.start_time}
  end
end
