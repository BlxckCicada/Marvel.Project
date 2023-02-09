#!/bin/bash

dotnet add package Microsoft.EntityFrameworkCore --version 7.0.2

dotnet ef migrations add InitialCreate 

dotnet ef database update 