# Neo4j with GraphQL API

This is a prototype to prove 2 things:

1. Whether using a GraphQL library within a NodeJS application significantly improves performance of executing deeply nested queries.
1. Whether the queries and mutations within a GraphQL schema can be separated into 2 individual API's, but still be connected.

## Prerequisites

The following tools are required to be installed to work with this repository.

1. [GNU Make](https://www.gnu.org/software/make/)
1. [NodeJS and npm](https://nodejs.org/en/download/package-manager/)
1. [Docker](https://docs.docker.com/get-docker/)
1. [Docker Compose](https://docs.docker.com/compose/install/)

## Getting started

Make sure the graph database is running locally:

```shell
$ docker-compose up -d
```

Then, to run the project, run the following commands from the terminal in the root folder.

```shell
$ npm i
$ npm start
```

> Make sure you are running within a terminal where /bin/bash is available, as this is used to run the scripts.

## Cleanup

To run all cleanup, execute the following command from the terminal in the root folder.

```shell
$ npm run clean
```
