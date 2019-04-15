#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# Based on https://github.com/eldarlabs/ghpages-deploy-script/blob/master/scripts/deploy-ghpages.sh
# Used with their MIT license https://github.com/eldarlabs/ghpages-deploy-script/blob/master/LICENSE

# abort the script if there is a non-zero error
set -e

cd projects/creamnglib

echo "> update .npmrc"
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
echo "> npm publish --access public"
npm publish --access public