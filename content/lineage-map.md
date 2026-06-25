**LineageMap**

This document is a work in progress as I am still working on packaging the tool; visit the repository to track progress!

LineageMap is a lightweight, open source tool that gives data engineers column-level lineage for dbt projects — no catalog required.

Most teams either have no lineage visibility at all, or they're paying five figures a year for an enterprise catalog. LineageMap sits in the middle: run one command against your dbt project and get an interactive graph showing exactly where every column comes from and what breaks if you change it.

Great for demos, and for giving business users confidence in the data that they use daily!

**Why am I building LineageMap?**
Perhaps this is an uncommon problem, but across every team I've been on, there was no lineage tracing; people suggest solutions, cost is surfaced, and it gets swept under the rug.

In more recent years, it has become easier to point an LLM at the repository to answer lineage questions, but why waste tokens when a CLI tool can answer the question more quickly?

**Why LineageMap?**

With this library I'm looking to solve the "where does this metric come from?" question that takes hours to answer manually. It also surfaces impact; hover any column and every downstream model, report, or transformation that depends on it lights up. That makes schema changes and refactors significantly less dangerous.

**Good for**

- Data engineers and analytics engineers working with dbt who want lineage without the overhead of a full data catalog
- Small to mid-sized teams that have outgrown "just read the SQL" but can't justify Atlan or Collibra
- Anyone who's ever broken a downstream dashboard by renaming a column

**How it works**

Reads dbt's compiled `manifest.json` — no live warehouse connection needed — parses the SQL using column-level AST analysis, and builds a traversable dependency graph. Served locally via a single CLI command, with a shareable hosted option for teams.
