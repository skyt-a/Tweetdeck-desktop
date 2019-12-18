# Tweetdeck-desktop
自分用のTweetdeckのデスクトップアプリ風

以下のコマンドで生成される実行ファイル使えばいけるはず
```sh
npm i -g electron
cd /path/to/Tweetdeck-desktop
npm i
./node_modules/.bin/electron-packager . ElectronFirstApp --platform=darwin,win32 --arch=x64 --electronVersion=[ELECTRON-VERSION]
```
Windows10 64bitでしか動作確認してないのであしからず
(--platformと--archパラメータいじれば他環境でも動作するはず)
