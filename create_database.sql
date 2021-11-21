USE [master]
GO

--CREATE DATABASE
CREATE DATABASE [holiday_calendar]
GO
USE [holiday_calendar]
GO

-- CREATE TABLES
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[items](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[group] [int] NOT NULL,
	[title] [varchar](1024) NULL,
	[start_time] [varchar](50) NOT NULL,
	[end_time] [varchar](50) NOT NULL,
 CONSTRAINT [PK_items] PRIMARY KEY CLUSTERED 
(
	[id] ASC
) ON [PRIMARY]
) ON [PRIMARY]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[teams](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](1024) NOT NULL,
	[title_id] [varchar](1024) NOT NULL,
 CONSTRAINT [PK_teams] PRIMARY KEY CLUSTERED 
(
	[id] ASC
) ON [PRIMARY]
) ON [PRIMARY]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[group_id] [int] NOT NULL,
	[title] [varchar](256) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
) ON [PRIMARY]
) ON [PRIMARY]
GO

