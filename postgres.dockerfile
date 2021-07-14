FROM postgres

COPY sql/create_table.sql docker-entrypoint-initdb.d/create_table.sql