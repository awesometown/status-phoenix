# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     StatusPhoenix.Repo.insert!(%StatusPhoenix.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias StatusPhoenix.{Repo, User}

[
	%{
		first_name: "Test",
		last_name: "User",
		email: "test@example.com",
		password: "asdfg"
	},
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))