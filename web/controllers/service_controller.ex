defmodule StatusPhoenix.ServiceController do
    use StatusPhoenix.Web, :controller

    def index(conn, _params) do
        render conn, "index.html"
    end
end