FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /src

COPY . ./
RUN dotnet restore "./AppWebApi.WebApi/AppWebApi.WebApi.csproj" --disable-parallel
RUN dotnet publish "./AppWebApi.WebApi/AppWebApi.WebApi.csproj" -c Release -o /app --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal
WORKDIR /app
COPY --from=build /app ./
EXPOSE 80

ENTRYPOINT ["dotnet", "AppWebApi.WebApi.dll"]