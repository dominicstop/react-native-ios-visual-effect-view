#!/bin/sh

#  ci_post_clone.sh
#  IosVisualEffectViewExample
#
#  Created by Dominic Go on 8/18/24.
#  

echo "Install: cocoapods"
export HOMEBREW_NO_INSTALL_CLEANUP=TRUE
brew install cocoapods

echo "Install: nodejs"
brew install node

echo "Install: yarn"
brew install yarn

# Install dependencies for library
echo "Install library dependencies"
yarn install

# Install dependencies for example
echo "Install example dependencies"
cd example
yarn install
cd ios
pod install
