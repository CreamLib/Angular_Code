#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# Based on https://github.com/eldarlabs/ghpages-deploy-script/blob/master/scripts/deploy-ghpages.sh
# Used with their MIT license https://github.com/eldarlabs/ghpages-deploy-script/blob/master/LICENSE

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd
remote=$(git config remote.origin.url)

# make a directory to put the gp-pages branch
mkdir gh-pages-branch
cd gh-pages-branch
# now lets setup a new repo so we can update the gh-pages branch
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1
git init
git remote add --fetch origin https://github.com/CreamLib/CreamLib.github.io


# switch into the the gh-pages branch
if git rev-parse --verify origin/master > /dev/null 2>&1
then
    git checkout master
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan master
fi

# copy over or recompile the new site
cd ..
mkdir master
cd master
git init
git remote add --fetch origin "$remote"
git checkout master
npm i

npm run build -- --base-href="https://creamlib.github.io/"

## Deploy the library
cd dist/creamnglib
cp ../../../projects/creamnglib/README.md README.md
echo "> update .npmrc"
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
echo "> npm publish --access public"
npm publish --access public
cd ../.. 

## Build ghpages
cd ../gh-pages-branch
cp -a "../master/dist/." .

# stage any changes and new files
git add -A
# now commit, ignoring branch gh-pages doesn't seem to work, so trying skip
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin master
# go back to where we started and remove the gh-pages git repo we made and used
# for deployment
cd ..
rm -rf gh-pages-branch
rm -rf master

echo "Finished Deployment!"

