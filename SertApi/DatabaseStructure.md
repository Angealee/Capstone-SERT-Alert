# Database Structure

This document provides an overview of the database structure for the `SertApi` project. 
The database is created using the Entity Framework Code-First approach, and it includes two main tables: `Users` and `Reports`.

## Tables

### Users

The `Users` table stores information about the users of the system. 
Below are the columns and their descriptions:

| Column Name | Data Type | Nullable | Description |
|-------------|------------|----------|-------------|
| Id          | int        | No       | Primary key, auto-incremented. |
| Username    | string     | No       | The username of the user. |
| Password    | string     | No       | The password of the user. |
| Name        | string     | No       | The first name of the user. |
| Course      | string     | No       | The course of the user. |
| Year        | string     | No       | The year of the user. |
| Section     | string     | No       | The section of the user. |
| Email       | string     | Yes      | The position of the user. |
| Position    | string     | Yes      | The position of the user. |
| Role        | int        | No       | The role of the user. _(0 - User, 1 - Admin, 2 - 2nd Admin)_. |
| IsActive    | bool       | No       | Indicates whether the user is inactive __(deleted)__. |
| IsOnline    | bool       | No       | Indicates whether the user is online. |
| DateCreated | DateTime   | No       | The date and time when the user was created. |
| DateModified| DateTime?  | Yes      | The date and time when the user was last modified. |

### Reports

The `Reports` table stores information about the reports created in the system. 
Below are the columns and their descriptions:

| Column Name    | Data Type | Nullable | Description |
|----------------|------------|----------|-------------|
| Id             | int        | No       | Primary key, auto-incremented. |
| BuildingName   | string     | No       | The name of the building where the report was created. |
| LocationDetail | string     | Yes      | Other location details related to the building name. |
| Content        | string     | No       | Description or details of what the report is all about. |
| ReportedBy     | string     | No       | The name of the person who reported the issue. |
| Attachment     | blob       | Yes      | Description or details of what the report is all about. |
| DateCreated    | DateTime   | No       | The date and time when the report was created. |
| DateModified   | DateTime?  | Yes      | The date and time when the report was last modified. |

## Entity Framework Code-First Approach

The database structure is defined using the Entity Framework Code-First approach. 
The `User` and `Report` classes in the `DAL` namespace represent the tables in the database. 
The `ApplicationDbContext` class is used to configure the database context and manage the database connection.