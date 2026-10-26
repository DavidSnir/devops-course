# installing staff
sudo dnf update -y
sudo dnf install -y git python3 python3-pip

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# clone repo
git clone https://github.com/ronhadad22/IITC-2026.git
cd IITC-2026/DataBite/backend

# run server
source .venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
