defmodule StatusPhoenix.ServiceView do
   use StatusPhoenix.Web, :view
   
   	def render("index.json", %{services: services}) do
		%{services: services}
	end

   def render("show.json", %{service: service}) do
		service
	end
end