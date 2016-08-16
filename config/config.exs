# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :status_phoenix,
	ecto_repos: [StatusPhoenix.Repo]

# Configures the endpoint
config :status_phoenix, StatusPhoenix.Endpoint,
	url: [host: "localhost"],
	secret_key_base: "Ke9h3H+k9enpTZ+iBdrUZ8I1WYNtJlvfSeYyGZvJk5IKOKt6jHcJWpwwWnjyHz4Q",
	render_errors: [view: StatusPhoenix.ErrorView, accepts: ~w(html json)],
	pubsub: [name: StatusPhoenix.PubSub,
			 adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
	format: "$time $metadata[$level] $message\n",
	metadata: [:request_id]

config :guardian, Guardian,
	issuer: "StatusPhoenix",
	ttl: {3, :days},
	verify_issuer: true,
	secret_key: 12345,
	serializer: StatusPhoenix.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
