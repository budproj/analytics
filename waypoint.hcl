project = "analytics"

app "app" {
  build {
    use "docker" {}

    registry {
      use "aws-ecr" {
        region = "sa-east-1"
        repository = "analytics"
        tag = gitrefhash()
      }
    }
  }

  deploy{
    use "exec" {
      command = [
        "bash",
        "-c",
        "bash <(curl -s https://raw.githubusercontent.com/budproj/gist/main/gitops/deploy.sh) -t ${gitrefhash()} -s ${gitreftag()}",
      ]
    }
  }
}
