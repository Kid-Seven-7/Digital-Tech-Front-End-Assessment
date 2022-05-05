clear;

Write-Host "Setting up CIB FE Assessment" -ForegroundColor Green;

$module = "$PWD\node_modules"

if (Test-Path -Path $module) {
  Write-Host "Node modules found" -ForegroundColor Green;
}
else {
  Write-Host "Node modules not found" -ForegroundColor Red;
  Write-Host "Installing Node modules" -ForegroundColor Yellow;

  npm install
  Write-Host "Node modules installed" -ForegroundColor Green;
}

$submodule = "$PWD\mock-api-server"

if (Test-Path -Path $submodule) {
  Write-Host "Submodule found" -ForegroundColor Green;
}
else {
  Write-Host "Submodules not found" -ForegroundColor Red;
  Write-Host "Cloning submodules" -ForegroundColor Yellow;

  git clone --recurse-submodules https://github.com/Kid-Seven-7/CIB-Digital-Tech-Front-End-Assessment.git
  Write-Host "Submodule cloned" -ForegroundColor Green;
}

Write-Host "Scanning ports" -ForegroundColor Yellow;

$pidInUse = netstat -ano | findstr 4200 | Select-String "TCP\s+(.+)\:(.+)\s+(.+)\:(\d+)\s+(\w+)\s+(\d+)" | ForEach-Object { Write-Output $_.matches[0].Groups[6].value };

if ($pidInUse.Split(" ")[0]){
  Write-Host "Process found" -ForegroundColor Red;

  taskkill /PID $pidInUse.Split(" ")[0] /F
}

Write-Host "Running CIB FE Assessment" -ForegroundColor Green;
npm run start