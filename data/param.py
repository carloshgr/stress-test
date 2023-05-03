import csv
import random

N_REQUESTS = 1000
ARRAY_SIZE = 1000
MIN_VALUE = -1000_000_000
MAX_VALUE = 1000_000_000

headers = ["id", "array"]

with open("./param.csv", "w", encoding="UTF8") as f:
    writer = csv.writer(f)
    writer.writerow(headers)

    for i in range(N_REQUESTS):
        new_row = []
        new_row.append(i)
        new_row.append([random.randint(MIN_VALUE, MAX_VALUE) for j in range(ARRAY_SIZE)])

        writer.writerow(new_row)