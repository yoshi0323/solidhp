#!/bin/bash

# ディレクトリを作成
mkdir -p public/images

# チームメンバー画像
curl -L -o public/images/team1.jpg "https://randomuser.me/api/portraits/men/1.jpg"
curl -L -o public/images/team2.jpg "https://randomuser.me/api/portraits/women/1.jpg"
curl -L -o public/images/team3.jpg "https://randomuser.me/api/portraits/men/2.jpg"

# サービス画像
curl -L -o public/images/service1.jpg "https://picsum.photos/600/400"
sleep 1
curl -L -o public/images/service2.jpg "https://picsum.photos/600/400"
sleep 1
curl -L -o public/images/service3.jpg "https://picsum.photos/600/400"
sleep 1
curl -L -o public/images/service4.jpg "https://picsum.photos/600/400"

# 背景画像
curl -L -o public/images/hero-bg.jpg "https://picsum.photos/1920/1080?grayscale"
sleep 1
curl -L -o public/images/about-bg.jpg "https://picsum.photos/1920/1080?grayscale&blur=2"

# ロゴ画像
curl -L -o public/images/logo.png "https://dummyimage.com/200x200/333333/ffffff&text=SOLID"

# ダウンロードした画像の確認
echo "Downloaded images:"
ls -la public/images/ 