# Discord RPC Maker by Eren

# Destek & Yardım sunucusu:
https://discord.gg/U5v2csS

# Gerekli Programlar
- Node
https://nodejs.org/en/

- Git
https://git-scm.com/download/win

- NotePad++
https://notepad-plus-plus.org/download/


# Kurulum
1- İndirdikten sonra dosyaları zipten çıkarın.

2- Arama yerine cmd yazın ve açılan yere "cd <dosyanızın konumu>" yazın.

3- "npm install discord-rpc" yazın ve indirmesini bekleyin.

4- Ardından https://discordapp.com/developers/applications/me sitesine girin.

5- Bir "Application" yani "App" oluşturun. (Discordda "<app adı> Oynuyor" şeklinde gözükür.)

6- Aşağıdan "Enable Rich Presence" tuşuna basın.

7- En altta bulunan yerden large ve small fotoğraf yükleyin. (yüklerken onlara birer isim koyun ve "Upload Asset"e basın)

8- Üstte bulunan yerden ClientID'yi alın ve ayarlar.json dosyasında bulunan "appid" kısmının önüne koyun.

9- Yazıları düzenlemek için "ayarlar.json" dosyasını açın.

10 - Son olarak onları değiştirip kaydettikten sonra "baslat.bat" dosyasına çift tıklayın ve çalıştırın.

# config.json'da Bulunan Yazıların Anlamları
- "AppID": oluşturduğumuz application'un ID'si.
 - "durum": ilk satırda yazacak olan mesaj.
 - "aciklama": ikinci satırda yazacak olan mesaj.
 - "buyukResimAd": large (büyük) olarak yüklediğimiz fotoğrafa koyduğumuz ad.
 - "kucukResimAd": small (küçük) olarak yüklediğimiz fotoğrafa koyduğumuz ad.
 - "buyukResimYazi": large (büyük) resime imleç geldiğinde yazacak olan mesaj.
 - "kucukResimYazi": small (küçük) resime imleç geldiğinde yazacak olan mesaj.
 