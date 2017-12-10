                                  



								                  //////////////////////////////////////
                                  //##################################//
                                  //#                                #//
                                  //#       Discord RPC Maker        #//
                                  //#            Eren#3539           #//
                                  //#      BU DOSYAYI ELLEMEYİN!     #//
                                  //#   YAZILARI DEĞİŞTİRMEK İÇİN    #//
								                  //#      config.json DOSYASINI     #//
								                  //#           KULLANIN!            #//
								                  //#                                #//
                                  //##################################//
                                  //////////////////////////////////////

const RPC = require("discord-rpc");
const ayarlar = require('./ayarlar.json');

RPC.register(ayarlar.appid);

const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
  console.log('RPC Maker başlatıldı!');
  console.log('Discord RPC Makeri kullandığınız için teşekkürler.');
  console.log('Destek & Yardım sunucusu: https://discord.gg/U5v2csS');
  
  client.setActivity({
    details: ayarlar.mesaj1,
    state: ayarlar.mesaj2,
    largeImageKey: ayarlar.resimad1,
    largeImageText: ayarlar.resimyazi1,
    smallImageKey: ayarlar.resimad2,
    smallImageText: ayarlar.resimyazi2,
  });
});

client.login(ayarlar.appid).catch(console.error);