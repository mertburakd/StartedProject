# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an ASP.NET Core 9.0 web application using the MVC pattern. The solution contains a single project `WebUI` that implements a standard web application with controllers, views, and models.

## Architecture

- **Framework**: ASP.NET Core 9.0 with MVC
- **Project Structure**: Single web project (`WebUI`)
- **Entry Point**: `WebUI/Program.cs` - contains application configuration and startup
- **Controllers**: Located in `WebUI/Controllers/` - standard MVC controllers
- **Views**: Located in `WebUI/Views/` - Razor views with shared layout
- **Models**: Located in `WebUI/Models/` - view models and data models
- **Static Files**: Located in `WebUI/wwwroot/` - includes Bootstrap, jQuery, and site-specific assets

## Common Commands

### Build and Run
```bash
# Build the solution
dotnet build

# Run the application (development)
dotnet run --project WebUI

# Build for release
dotnet build --configuration Release
```

### Testing
```bash
# Run tests (if test projects exist)
dotnet test
```

### Project Management
```bash
# Restore NuGet packages
dotnet restore

# Clean build artifacts
dotnet clean
```

## Key Files

- `StartedProject.sln`: Visual Studio solution file
- `WebUI/WebUI.csproj`: Main project file targeting .NET 9.0
- `WebUI/Program.cs`: Application entry point and configuration
- `WebUI/Controllers/HomeController.cs`: Main controller with Index, Privacy, and Error actions
- `WebUI/Views/Shared/_Layout.cshtml`: Main layout template

## Development Notes

- The application uses standard ASP.NET Core MVC conventions
- Bootstrap and jQuery are included via wwwroot/lib for styling and client-side functionality
- Error handling is implemented with a standard Error action and view
- The project has nullable reference types enabled
- Implicit usings are enabled for cleaner code