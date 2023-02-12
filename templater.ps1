echo "${green}Creating solution and projects${reset}"

dotnet new sln
dotnet new webapi -n API
dotnet new classlib -n Application
dotnet new classlib -n Domain
dotnet new classlib -n Persistence

echo "${green}Creating solution and projects${reset}"
dotnet sln add API/API.csproj
dotnet sln add Application/Application.csproj
dotnet sln add Domain/Domain.csproj
dotnet sln add Persistence/Persistence.csproj


echo "${green}Creating solution and projects${reset}"
cd API
dotnet add reference ../Application/Application.csproj
cd ../Application
dotnet add reference ../Domain/Domain.csproj
dotnet add reference ../Persistence/Persistence.csproj
cd ../Persistence
dotnet add reference ../Domain/Domain.csproj
cd ..
echo "${green}Executing dotnet restore ${reset}"
dotnet restore

echo "${green}Finished!${reset}"




