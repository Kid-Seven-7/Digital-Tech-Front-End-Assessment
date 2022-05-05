clear;

Write-Host "Setting up Mock server" -ForegroundColor Green;

$path = "$PWD\mock-api-server\node_modules"

cd .\mock-api-server\;

if (Test-Path -Path $path) {
  Write-Host "Node modules found" -ForegroundColor Green;
}
else {
  Write-Host "Node modules not found" -ForegroundColor Red;
  Write-Host "Installing Node modules" -ForegroundColor Yellow;

  npm install;
  Write-Host "Node modules installed" -ForegroundColor Green;
}

Write-Host "Scanning ports" -ForegroundColor Yellow;

$pidInUse = netstat -ano | findstr 8080 | Select-String "TCP\s+(.+)\:(.+)\s+(.+)\:(\d+)\s+(\w+)\s+(\d+)" | ForEach-Object { Write-Output $_.matches[0].Groups[6].value };

if ($pidInUse.Split(" ")[0]){
  Write-Host "Process found" -ForegroundColor Red;

  taskkill /PID $pidInUse.Split(" ")[0] /F
}

Write-Host "Running up Mock server" -ForegroundColor Green;

npm run dev;
