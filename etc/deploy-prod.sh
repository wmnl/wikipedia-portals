#!/bin/bash
cd ../
npm run build

# There are two servers where this needs to be copied and two folders, so we
# do four transfers
rsync -avz build/be/* wikipedia_portals@dumas.wikimedia.nl:/var/www/wikipedia.be/public/
rsync -avz build/nl/* wikipedia_portals@dumas.wikimedia.nl:/var/www/wikipedia.nl/public/
rsync -avz build/be/* wikipedia_portals@dijkstra.wikimedia.nl:/var/www/wikipedia.be/public/
rsync -avz build/nl/* wikipedia_portals@dijkstra.wikimedia.nl:/var/www/wikipedia.nl/public/