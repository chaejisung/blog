defmodule Blog.MixProject do
  use Mix.Project

  def project do
    [
      app: :blog,
      version: "0.1.0",
      elixir: "~> 1.18",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {Blog.Application, []}
    ]
  end

  defp deps do
    [
      {:plug, "~> 1.18"},
      {:bandit, "~> 1.6"},
      {:jason, "~> 1.4"},
      {:eex, "~> 1.18"},
    ]
  end
end
