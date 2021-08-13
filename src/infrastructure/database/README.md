# Database

Since dumping our analytics database means dumping our entire data warehouse, the contents of the dump where hidden for security and privacy reasons. You can get an updated dump with the following command:

```shell
pg_dump -U <your-user> -h <our-dw-endpoint> <the-dw-database> -n <the-desired-datamart> -O -x -a > seed.sql
```

After running that command and providing the correct credentials, you can create your database for development purposes.
