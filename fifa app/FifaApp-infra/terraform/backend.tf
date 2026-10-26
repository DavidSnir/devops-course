terraform {
  cloud {
    organization = "davidsnir"

    workspaces {
      name = "fifaapp-eks"
    }
  }
}