Page in progress - for now, I'll add some brief details here.

# OpenRCT2 Telemetry Pipeline

OpenRCT2 is one of my favorite video games. And Kafka is my favorite distributed log.

But Kafka isn't always a suitable tool for DataEng tasks. And I shouldn't be playing OpenRCT2 when I should be building projects.

The solution? Create a plugin for OpenRCT2 that publishes data while I'm playing, and set up a Kafka ecosystem to ingest and process this data in real time.

## What is OpenRCT2?
OpenRCT2 is an open source project that breathes new life into Chris Sawyer's Roller Coaster Tycoon 1 and 2. It adds graphical support, plentiful QOL, and most importantly, enables a rich plugin ecosystem that anybody can contribute to.

## What is openrct2-telemetry?
In early 2026 I created a plugin that utilizes OpenRCT2's hooks that allow access to in-game data at a polling interval of choice. This data consists of several park metrics such as guest count, average guest happiness, financial data, etc. Some people might be interested in setting the polling at a minute - given I want to work with higher volume of data, I've brought it down to .5 seconds just to stress test my system.

By installing this plugin and launching it alongside OpenRCT2, park data is published to a local endpoint. This endpoint can then do anything with this data: write to a database, log to a console, or more excitingly, produce events to a Kafka broker.

## The Pipeline
As mentioned in the previous section, the plugin can publish data over HTTP to an endpoint exposed on the same machine (due to security purposes, the plugin cannot send data over the internet). This local endpoint is a simple routing service powered by Python's FastAPI framework that can then produce messages to a Kafka broker that I have set up, either locally for testing or to a remote machine hosting the broker.

Data is kept in its raw JSON state and published to a landing topic. A consumer then subscribes to this topic and can clean/filter the data as needed. For my case, I split guest metrics (happiness, guest count, etc), financials (park value, raw cash, loan amount), and ride metrics (number of rides, average ride excitement) and route them to their own topics that can then be consumed from.

## The Use Case
This portion is still in development, but I plan to have an alerting system to notify me of sharp decreases in guests/money - after all, when I'm in the zone, I'm not paying attention to the ingame telemetry system.

In addition, I am building a dashboard that graphs certain park metrics that can give insights into park performance, much like an analytics team at Six Flags.

When that time comes, I'll update this doc - for now, I'll enjoy watching my Kafka topics fill up.
