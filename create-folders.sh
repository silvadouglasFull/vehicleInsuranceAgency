#!/bin/bash

# Root directory
ROOT="src"

# Array of folders to create
folders=(
  "components"
  "constants"
  "assets"
  "config"
  "features"
  "hooks"
  "layouts"
  "pages"
  "routes"
  "services"
  "store"
  "types"
  "utils"
  "styles"
  "components/NavbarPublic"
  "router"
  "flavor"
)

# Loop to create directories
for folder in "${folders[@]}"; do
  mkdir -p "$ROOT/$folder"
  echo "Created: $ROOT/$folder"
done

echo "✅ Folder structure created successfully."
