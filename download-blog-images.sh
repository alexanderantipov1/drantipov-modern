#!/bin/bash

# Create directories
mkdir -p public/images/blog/2024-08-13
mkdir -p public/images/blog/2024-08-09
mkdir -p public/images/blog/2024-08-08
mkdir -p public/images/blog/2023-04-14
mkdir -p public/images/blog/2023-04-13
mkdir -p public/images/blog/2023-04-10
mkdir -p public/images/blog/2023-04-07
mkdir -p public/images/blog/2023-04-06
mkdir -p public/images/blog/2021-01-25
mkdir -p public/images/blog/2017-10-17

# Download images using curl
echo "Downloading blog images..."

curl -o public/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg \
  https://www.drantipov.com/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg

curl -o public/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg \
  https://www.drantipov.com/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg

curl -o public/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg \
  https://www.drantipov.com/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg

curl -o public/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg \
  https://www.drantipov.com/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg

curl -o public/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg \
  https://www.drantipov.com/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg

curl -o public/images/blog/2023-04-10/dental-implants-process-c1577863.jpg \
  https://www.drantipov.com/images/blog/2023-04-10/dental-implants-process-c1577863.jpg

curl -o public/images/blog/2023-04-07/dental-implants-maintenance-a937cd3b.jpg \
  https://www.drantipov.com/images/blog/2023-04-07/dental-implants-maintenance-a937cd3b.jpg

curl -o public/images/blog/2023-04-06/dental-implants-vs-dentures-3cf9017a.jpg \
  https://www.drantipov.com/images/blog/2023-04-06/dental-implants-vs-dentures-3cf9017a.jpg

curl -o public/images/blog/2021-01-25/food-and-implants-e0812c2e.jpg \
  https://www.drantipov.com/images/blog/2021-01-25/food-and-implants-e0812c2e.jpg

curl -o public/images/blog/2017-10-17/feminization-177e91f7.jpg \
  https://www.drantipov.com/images/blog/2017-10-17/feminization-177e91f7.jpg

echo "Done! All blog images downloaded to public/images/blog/"
