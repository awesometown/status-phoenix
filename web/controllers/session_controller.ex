defmodule StatusPhoenix.SessionController do
	use StatusPhoenix.Web, :controller

	require Logger

	plug :scrub_params, "session" when action in [:create]

	def create(conn, %{"session" => session_params}) do
		case StatusPhoenix.Session.authenticate(session_params) do
			{:ok, user} ->
				{:ok, jwt, _full_claims} = user |> Guardian.encode_and_sign(:token)

				conn
				|> put_status(:created)
				|> render("show.json", jwt: jwt, user: user)

			:error ->
				conn
				|> put_status(:unprocessable_entity)
				|> render("error.json")
		end
	end

	def unauthenticated(conn, _params) do
		conn
		|> put_status(:forbidden)
		|> render(StatusPhoenix.SessionView, "forbidden.json", error: "Not Authenticated")
	end
end