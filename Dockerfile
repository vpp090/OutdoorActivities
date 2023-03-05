FROM mcr.microsoft.com/dotnet/sdk:7.0 as build-env
WORKDIR /app
EXPOSE 8080

COPY "OutdoorActivities.sln" "OutdoorActivities.sln"
COPY "API/API.csproj" "API/API.csproj"
COPY "Application/Application.csproj" "Application/Application.csproj"
COPY "Persistence/Persistence.csproj" "Persistence/Persistence.csproj"
COPY "Domain/Domain.csproj" "Domain/Domain.csproj"

RUN dotnet restore "OutdoorActivities.sln"

COPY . .
WORKDIR /app
RUN dotnet publish -c Release -o out

WORKDIR /app
FROM mcr.microsoft.com/dotnet/aspnet:7.0
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]
