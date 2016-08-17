defmodule StatusPhoenix.SessionView do
	use StatusPhoenix.Web, :view

	require Logger

	def render("show.json", %{jwt: jwt, user: user} = stuff) do
		Logger.debug(inspect(user))
		%{
			jwt: jwt,
			user: user
		}
	end

	def render("error.json", _) do
		%{error: "Invalid email or password"}
	end
end