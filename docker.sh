pushd ./tools/db
docker build . -t coredb
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password -v db:/home/postgres/pgdata/data coredb
popd