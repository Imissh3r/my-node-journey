#!/usr/bin/env bash
RESULT=$(( $1 * ($2 + $3) ))
echo project-$RESULT/{src/{index.js,util.js},dest/{index.js,util.js},test/{index.js,util.js}}