# Dashboards by Dif
Alternative title: dashboards.chridgn.dev

## What is Dashboards by Dif?
Dif is a plushy toy I bought my now wife in 2018.
The dashboard is a visualization of data that I have felt compelled to ingest into my Postgres instance. The main motivation was development for the sake of muscle memory and infra practice, but a nice side bonus is having all metrics and timeseries that I'm interested in, all in one place.

## The Pipeline
At this time, the data is fetched from government API's and ingested into Postgres via a staging layer exposed via a mart layer, with postgres' timescaledb extension powering the data as a timeseries. Grafana then connects to the metrics marts and visualizes this data all in one dashboard.

## The Stack
Apache Airflow is the task scheduler of choice here, due to its rich API and ease of use/building. 
The same Postgres database that stores the data also holds the scheduler's metadata. 

While we're talking about Postgres - I have chosen this datastore due to its quick transactional nature and familiar SQL syntax (I'm typically a Snowflake user). In addition, the timescaledb extension allows me to format the metrics table for ease of use by Grafana.

Grafana connects directly to Postgres instance (specifically the metrics table) and filters by metric type to create a visualization for every type of data being logged.

## Deployment
docker-compose on an EC2. That easy. While I could have broken each service into their own machines to embrace microservice philosophy, I went with a single EC2 for cost reasons. If my wallet was fat, I'd prefer separate services for each, as I genuinely enjoy the networking setup between services.

