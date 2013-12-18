#!/bin/bash

PACKAGED_PATH=`pwd`
APP_NAME=${PWD##*/}

rm -rf /tmp/$APP_NAME
cd /tmp
cp -r $PACKAGED_PATH .
cd $APP_NAME
rm -rf .git
rm dist.sh
rm .gitignore
rm .DS_Store
rm icon.ai
rm img/440x280.ai
cd /tmp
zip -r $APP_NAME.zip $APP_NAME
rm -rf $APP_NAME
mv $APP_NAME.zip ~/Desktop
