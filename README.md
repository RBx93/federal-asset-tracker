# Federal Asset Tracker

A Model-Driven App built on Microsoft Power Platform for tracking government assets, locations, and inspections.

## Overview

This solution demonstrates enterprise Power Platform development including:
- Dataverse data modeling with custom tables
- Model-Driven App with forms, views, and business rules
- PCF (PowerApps Component Framework) custom controls
- SOAP web service integration
- CI/CD with GitHub Actions

## Tech Stack

- Microsoft Dataverse
- Model-Driven Apps
- PCF (TypeScript/React)
- Power Automate
- GitHub Actions

## Solution Structure
```
src/
├── Entities/           # Dataverse tables
│   ├── nouv_Asset/
│   ├── nouv_Inspection/
│   └── nouv_Location/
├── AppModules/         # Model-Driven App
├── AppModuleSiteMaps/  # Navigation
└── Other/              # Relationships, config
```

## Author

Robertson Bassy  
Nouvela Technology Group LLC