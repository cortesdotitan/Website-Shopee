
// Dados brutos processados (os 100 produtos)
const productsRaw = [
    ["22496441605", "cabo de áudio Adaptador duplicador p3 Jack 3,5mm divisor y", "19,49", "596", "Áudio Pro", "33%", "https://s.shopee.com.br/9KeAx0hxMo","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lu9awh8ho2ud43@resize_w450_nl.webp" ],
    ["22892291911", "suporte de fone ouvido gamer - homem aranha - spider man (Vermelho)", "130,00", "93", "Acessórios", "33%", "https://s.shopee.com.br/9Uxb9JhK1r","https://down-br.img.susercontent.com/file/br-11134207-7r98q-ll5c2zx8xwra15@resize_w450_nl.webp"],
    ["22896784994", "suporte fone de ouvido gamer - homem aranha - spider mam 26cm (TOUCA)", "169,00", "172", "Acessórios", "33%", "https://s.shopee.com.br/AKWi8qe9L2","https://down-br.img.susercontent.com/file/br-11134207-7r98r-ll3tkygcs7bqcb@resize_w450_nl.webp"],
    ["21771744546", "Fone de Ouvido Bluetooth Sem Fio Confortável Graves Potentes Inova", "79,90", "1500", "Fones", "33%", "https://s.shopee.com.br/AUq8L9dW05","https://down-br.img.susercontent.com/file/br-11134207-820m2-mm7h3qyrnpj43f_tn"],
    ["20599028821", "Fone de Ouvido Bluetooth Original Inova Sem Fio Headphone Wireless", "79,90", "4500", "Fones", "33%", "https://s.shopee.com.br/9ztrkEfQ10","https://down-br.img.susercontent.com/file/br-11134207-820lw-mm8uiqk5jklgbb_tn"],
    ["21899672489", "Quadro Decorativo Controle Videogame Gamer Fone Headset 122x60", "29,90", "59", "Casa & Setup", "38%", "https://s.shopee.com.br/AADHwXemg3","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m80rsb1k775dc8@resize_w450_nl.webp"],
    ["23893867402", "Fone de Ouvido com Fio X-BASS Sem Ruídos LE-0201", "24,69", "491", "Fones", "35%", "https://s.shopee.com.br/W2mQmFaIC","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfzjzvq3axon15@resize_w450_nl.webp"],
    ["23394347227", "Fone De Ouvido Sem Fio Bluetoth 5.4 Tws Resistente Água", "58,99", "160", "Fones", "33%", "https://s.shopee.com.br/LjMETGDdB","https://down-br.img.susercontent.com/file/br-11134207-820l7-ml6z4tddf11ib9_tn"],
    ["58250652820", "Fone de Ouvido Sem Fio Bluetooth TWS Peining PEI P9002", "49,99", "290", "Fones", "33%", "https://s.shopee.com.br/BPw2AGqyA","https://down-br.img.susercontent.com/file/br-11134207-820lh-mm1w3nz5fthc61_tn"],
    ["18998917974", "homem aranha suporte fone de ouvido headset headphone 26cm", "125,00", "16", "Acessórios", "33%", "https://s.shopee.com.br/16VprHUJ9","https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll3tkygcgys672@resize_w450_nl.webp"],
    ["27031076044", "Kit M10 Bluetooth 5.3 Sem Fio TWS Com Carregador Power Bank", "25,89", "51", "Fones", "33%", "https://s.shopee.com.br/1BITE0D2wO","https://down-br.img.susercontent.com/file/sg-11134201-7rd3s-m7lpytx6nks1ce.webp"],
    ["12655053426", "Adaptador Usb Wireless Bluetooth 5.0 Dongle Conector Pc", "21,90", "1200", "PC & Gamer", "33%", "https://s.shopee.com.br/10z31hDgHN","https://down-br.img.susercontent.com/file/br-11134207-820lj-mm7u8l271fk7c0_tn"],
    ["19099835612", "Fone De Ouvido Bluetooth Condução Óssea Esportivo Kimaster", "39,90", "639", "Fones", "30%", "https://s.shopee.com.br/qfcpOEJcM","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbmstqtz3lk2fd_tn"],
    ["29739398543", "Stitch AirPods Pro2 Geração Fone De Ouvido Capa Protetora", "15,06", "301", "Diversos", "28%", "https://s.shopee.com.br/gMCd5EwxL","https://down-br.img.susercontent.com/file/sg-11134201-7rdwt-mcw2nrfzl0bq17.webp"],
    ["43622469394", "Kit Microfone Lapela Profissional Anti Ruido p/ Celular", "75,91", "89", "Microfones", "38%", "https://s.shopee.com.br/1qYA1EAVaa","https://down-br.img.susercontent.com/file/sg-11134201-824g1-mf9zruz18vt62b_tn"],
    ["43415050960", "Fone Usb C Inova Original Som Estéreo Microfone Com Fio", "29,90", "196", "Fones", "33%", "https://s.shopee.com.br/1gEjovB8vZ","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mf4b344nb7ydb0_tn"],
    ["22691690252", "Cabo OTG 2 em 1 Tipo-C USB 3.0 com Carga Simultânea", "35,99", "406", "PC & Gamer", "28%", "https://s.shopee.com.br/1VvJccBmGY","https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjh2gmoqxlaa4f@resize_w450_nl.webp"],
    ["20895492420", "15pcs Criativos Colar Chaveiro Microfone Encanta Cantor", "9,71", "575", "Diversos", "31%", "https://s.shopee.com.br/1LbtQJCPbX","https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lom72ao7057ec3_tn"],
    ["22694453325", "Microfone Lapela Sem Fio Kaidi KMF4-C Tipo C e Lightning", "74,00", "109", "Microfones", "21%", "https://s.shopee.com.br/2VnqoS7yEm","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mf4arzfdk2rp45_tn"],
    ["22492659139", "Ring Light Iluminador 10 Polegadas Com Tripé De 2.10 Metro", "63,79", "210", "Iluminação", "30%", "https://s.shopee.com.br/2LUQc98bZl","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrpwa6o7psmccc_tn"],
    ["22897326610", "Ring Light Tripé Iluminador 10 Polegadas 26CM 1.80M", "64,90", "390", "Iluminação", "30%", "https://s.shopee.com.br/2BB0Pq9Euk","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrq01rvgv4el35_tn"],
    ["19997687324", "Ring Light Iluminador 10 Polegadas Com Tripé De 2.10 Metro", "59,90", "383", "Iluminação", "27%", "https://s.shopee.com.br/20raDX9sFj","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lw5t6frts61e5f_tn"],
    ["12914943096", "Braço Articulado Suporte De Mesa Para Microfones", "39,90", "8", "Microfones", "26%", "https://s.shopee.com.br/3B3Xbg5Qsy","https://down-br.img.susercontent.com/file/d046050e402a2051f234979fd02a9cca@resize_w450_nl.webp"],
    ["12858632422", "Suporte Braço Articulado De Ferro Para Microfone e Ring Light", "63,20", "1500", "Microfones", "15%", "https://s.shopee.com.br/30k7PN64Dx","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzqf7vqlsqw572_tn"],
    ["42964392020", "Cabo USB Tipo B 5 Metros Impressora Interface de áudio", "9,90", "46", "Áudio Pro", "25%", "https://s.shopee.com.br/2qQhD46hYw","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdoyyvozbidt21@resize_w450_nl.webp"],
    ["23794012730", "Interface de Áudio Boya By-am4 Mixer Canal Duplo Preto", "758,54", "0", "Áudio Pro", "23%", "https://s.shopee.com.br/2g7H0l7Ktv","https://down-br.img.susercontent.com/file/br-11134275-7r98o-m9ofyak6wr3teb@resize_w450_nl.webp"],
    ["23692388774", "TEYUN-Placa De Som De Interface De Áudio Com Monitoramento", "116,78", "1200", "Áudio Pro", "23%", "https://s.shopee.com.br/3qJEOu2tXA","https://down-br.img.susercontent.com/file/br-11134207-7r98q-llnd209rawnn87@resize_w450_nl.webp"],
    ["23998682683", "Alto-falante para guitarra elétrica KOKKO 10W recarregável", "198,46", "17", "Áudio Pro", "23%", "https://s.shopee.com.br/3fzoCb3Ws9","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbqjkacco47t41@resize_w450_nl.webp"],
    ["58203116820", "ULANZI D200H 7 em 1 Deck U-Studio Stream Teclado 14 teclas", "459,00", "101", "PC & Gamer", "11%", "https://s.shopee.com.br/3VgO0I4AD8","https://down-br.img.susercontent.com/file/br-11134207-820l5-mm01j6b1se84ee@resize_w450_nl.webp"],
    ["40614379857", "Cabo USB 2.0 Tipo B 5m Para Teclado e Piano Digital", "9,90", "204", "Áudio Pro", "25%", "https://s.shopee.com.br/3LMxnz4nY7","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdoz349yupxtff@resize_w450_nl.webp"],
    ["23398742044", "M-VAVE SK-16 SMC-PAD Pocket Pad Controlador MIDI", "173,82", "103", "Áudio Pro", "23%", "https://s.shopee.com.br/4VYvC80MBM","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcj1qtzymbzmd0@resize_w450_nl.webp"],
    ["23594223444", "M-vave Chocolate Plus Programmable MIDI Controller 4 Buttons", "210,12", "380", "Áudio Pro", "23%", "https://s.shopee.com.br/4LFUzp0zWL","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc68kzmb15evd8@resize_w450_nl.webp"],
    ["23893639386", "M-VAVE SMC-Mixer Controlador MIDI sem fios 8 codificadores", "271,72", "58", "Áudio Pro", "23%", "https://s.shopee.com.br/4Aw4nW1crK","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcbvehmlzcob36@resize_w450_nl.webp"],
    ["41908456156", "M-VAVE Chocolate Plus Foot Switch sem fio de 4 botões", "199,81", "139", "Áudio Pro", "16%", "https://s.shopee.com.br/40cebD2GCJ","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc675j69tm11d1@resize_w450_nl.webp"],
    ["21198256950", "AMW P61X White Teclado Controlador Midi USB 61 Teclas", "1300,00", "47", "Áudio Pro", "3%", "https://s.shopee.com.br/5AobzLxopY","https://down-br.img.susercontent.com/file/sg-11134201-7rdxy-mbprabo0ka4941@resize_w450_nl.webp"],
    ["22494059336", "Câmera Webcam Ugreen 2k Full Hd 1080p p/Pc Preta", "413,44", "4", "PC & Gamer", "23%", "https://s.shopee.com.br/50VBn2ySAX","https://down-br.img.susercontent.com/file/br-11134275-7r98o-macwkf3h3h5bad_tn"],
    ["23597894913", "Kit Apoio Teclado + Mouse Pad Ergonômico Confortavel", "34,90", "1300", "Acessórios", "38%", "https://s.shopee.com.br/4qBlajz5VW","https://down-br.img.susercontent.com/file/sg-11134201-7rdyo-m0yretw7ccxzcc_tn"],
    ["22499317082", "Adaptador Caddy 9,5mm HD/SSD Para Notebook 2,5 SATA", "14,14", "34", "PC & Gamer", "44%", "https://s.shopee.com.br/4fsLOQziqV","https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjiy6fo4dlvl61@resize_w450_nl.webp"],
    ["58255937916", "Cartão De Memória SD Ultra A1 Classe 10 256gb / 512gb", "15,99", "5500", "PC & Gamer", "5%", "https://s.shopee.com.br/5q4ImZvHTk","https://down-br.img.susercontent.com/file/br-11134207-820li-ml7pinuecpvp84@resize_w450_nl.webp"],
    ["22494644170", "Case Externa para SSD/HD SATA 2.5 transparente USB 3.0", "17,99", "10500", "PC & Gamer", "3%", "https://s.shopee.com.br/5fksaGvuoj","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgclhmlidiboce_tn"],
    ["22398841957", "SSD KINGSTON 240GB A400 INTERNO SATA 3 6GB/S", "279,00", "3200", "PC & Gamer", "3%", "https://s.shopee.com.br/5VRSNxwY9i","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdq2hourgywpee_tn"],
    ["41309772410", "Console Playstation 5 Sony, Slim, SSD 1TB, Edição Disk", "4200,00", "477", "PC & Gamer", "3%", "https://s.shopee.com.br/5L82BexBUh","https://down-br.img.susercontent.com/file/br-11134207-81zu9-mkmm7if5wum853.webp"],
    ["23194154229", "PC Gamer Completo, Intel Core i5, 12GB de Ram, SSD 480GB", "1400,00", "1100", "PC & Gamer", "9%", "https://s.shopee.com.br/6VJzZnsk7w","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mb16s1yqi0svcb_tn"],
    ["22592875862", "Cpu Gamer Barato I7 8gb Ssd 240gb + Wifi + GT 210 Nvidia", "1500,00", "2100", "PC & Gamer", "11%", "https://s.shopee.com.br/6L0ZNUtNSv","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3y0v994pvso75_tn"],
    ["50005206105", "Cpu Gamer Barato I5 6gb Ssd 120gb Wifi + Gt 210", "1200,00", "127", "PC & Gamer", "10%", "https://s.shopee.com.br/6Ah9BBu0nu","https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjtx6wf1shdu10_tn"],
    ["22493262223", "Mouse Pad Couro a Prova d'água 26x21", "19,00", "160", "Acessórios", "18%", "https://s.shopee.com.br/60Niysue8t","https://down-br.img.susercontent.com/file/sg-11134201-7rdyu-lzqax4jmiy9z3a_tn"],
    ["17336789556", "Mouse Pad ergonômico com suporte em gel para o pulso", "25,64", "1400", "Acessórios", "16%", "https://s.shopee.com.br/7AZgN1qCm8","https://down-br.img.susercontent.com/file/sg-11134201-23020-dlehv3f5iwnvef_tn"],
    ["22228612707", "Mouse Pad Ergonomico Personalizado Gota ou Retangular", "22,99", "8500", "Acessórios", "16%", "https://s.shopee.com.br/70GGAiqq77","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9ap8j78iptl8d_tn"],
    ["22897356191", "Mouse Pad Ergonomico Retangular Flores Formas Lilas", "29,50", "1200", "Acessórios", "16%", "https://s.shopee.com.br/6pwpyPrTS6","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfvm49ybf3t316@resize_w450_nl.webp"],
    ["22693157071", "Mouse Pad Retangular 28x20 Flork Senhor não deixa surtar", "21,75", "1100", "Acessórios", "16%", "https://s.shopee.com.br/6fdPm6s6n5","https://down-br.img.susercontent.com/file/sg-11134201-7rdxx-lxug118jkj9w60@resize_w450_nl.webp"],
    ["23397319638", "Mouse Pad Ergonomico Gota Tons de Rosa", "28,50", "1300", "Acessórios", "16%", "https://s.shopee.com.br/7ppNAFnfQK","https://down-br.img.susercontent.com/file/br-11134207-81ztv-mklijra61ypv0f_tn"],
    ["16420235535", "Mouse Pad Personalizado Quadrado Ou Redondo", "23,09", "1100", "Acessórios", "16%", "https://s.shopee.com.br/7fVwxwoIlJ","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9aqpxapj32179@resize_w450_nl.webp"],
    ["23592842649", "Mouse Pad e Apoio de Teclado Ergonomico Espaço Estrelas", "45,00", "266", "Acessórios", "16%", "https://s.shopee.com.br/7VCWldow6I","https://down-br.img.susercontent.com/file/br-11134211-7r98o-lrqctxs6qou3a1@resize_w450_nl.webp"],
    ["22193015124", "jogo 2 Caneca Taberna Padrinhos Casamento Batizado", "45,00", "51", "Diversos", "62%", "https://s.shopee.com.br/7Kt6ZKpZRH","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgd0x32eyeitfa_tn"],
    ["58207735121", "Kit canecas acrílico personalizada com DTF presente", "144,56", "1", "Diversos", "79%", "https://s.shopee.com.br/8V53xTl84W","https://down-br.img.susercontent.com/file/br-11134207-820lk-mme0td21xrt0be_tn"],
    ["22293286729", "Jogo 2 Caneca Tabernas Personalizada Pai Mãe", "49,90", "7", "Diversos", "62%", "https://s.shopee.com.br/8KldlAllPV","https://down-br.img.susercontent.com/file/sg-11134201-7rdxi-m04lbjda7nwa38_tn"],
    ["23597767562", "Kit 4 Caneca Tabernas Personalizada Madrinha Padrinho", "132,00", "4", "Diversos", "59%", "https://s.shopee.com.br/8ASDYrmOkU","https://down-br.img.susercontent.com/file/sg-11134201-7rdvc-mdibh1ai6zii37_tn"],
    ["22493281807", "Kit 4 Caneca Conica Personalizada Noivos Casamento", "79,90", "9", "Diversos", "56%", "https://s.shopee.com.br/808nMYn25T","https://down-br.img.susercontent.com/file/sg-11134201-7rdvm-m04lo42pqc099b_tn"],
    ["23597696165", "Kit Caneca Personalizadas Memes Divertidas", "90,00", "2", "Diversos", "57%", "https://s.shopee.com.br/9AKkkhiaii","https://down-br.img.susercontent.com/file/br-11134201-7r98o-lv9950t40yaw9d@resize_w450_nl.webp"],
    ["21297810931", "Kit 4 Caneca Conica Personalizada Madrinha Padrinho", "89,90", "4", "Diversos", "53%", "https://s.shopee.com.br/901KYOjE3h","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m03bkz1vyp2hf5_tn"],
    ["22419927118", "Pop Filter Côncavo Arcano N-pop Anti Puff Microfone", "35,70", "34", "Microfones", "7%", "https://s.shopee.com.br/8phuM5jrOg","https://down-br.img.susercontent.com/file/br-11134201-23010-1ieprznllpmvf8@resize_w450_nl.webp"],
    ["9912125149", "Pedestal convencional Arcano PMV-100 + Pop filter", "147,90", "55", "Microfones", "12%", "https://s.shopee.com.br/8fOU9mkUjf","https://down-br.img.susercontent.com/file/d75239a59ef15b448c9a19ae96256a9e@resize_w450_nl.webp"],
    ["23499421494", "Pop Filter Anti Pop Microfone Dupla Camada Nylon", "49,99", "1", "Microfones", "10%", "https://s.shopee.com.br/9paRXvg3Mu","https://down-br.img.susercontent.com/file/br-11134207-820lb-mmiywe3wmltyce@resize_w450_nl.webp"],
    ["12719371676", "Pop Filter com Garra Tubular S-POP GRIP Sabra-Som", "333,00", "1", "Microfones", "3%", "https://s.shopee.com.br/9fH1Lcgght","https://down-br.img.susercontent.com/file/1c7ecb44ac5383755fcedbf57f3b7b7b@resize_w450_nl.webp"],
    ["12619375804", "Pop Filter Dupla Face UNI-POP Sabra-Som", "185,00", "1", "Microfones", "3%", "https://s.shopee.com.br/9Uxb9JhK2s","https://down-br.img.susercontent.com/file/3a52244398708a3d1d02cd14bf746918@resize_w450_nl.webp"],
    ["18497121712", "Kit Microfone Profissional Completo Pop Filter Braço", "71,90", "4200", "Microfones", "3%", "https://s.shopee.com.br/9KeAx0hxNr","https://down-br.img.susercontent.com/file/br-11134207-7qukw-lipzc7t13bg036@resize_w450_nl.webp"],
    ["8669866933", "Prendedor de microfone pop filter Arcano AM-POP", "35,70", "76", "Microfones", "12%", "https://s.shopee.com.br/AUq8L9dW16","https://down-br.img.susercontent.com/file/b729626b1d1a2e4d08779823041a0bfb@resize_w450_nl.webp"],
    ["9147223382", "Espuma Para Microfone Sem Fio e Com Fio Globo", "13,90", "634", "Microfones", "3%", "https://s.shopee.com.br/AKWi8qe9M5","https://down-br.img.susercontent.com/file/db1025d7e6d6240d0c49acbcc4a35949_tn"],
    ["21799581614", "Painel Linho Liso Espuma Adesivo Revestimento Acústico", "29,99", "20500", "Acústica", "3%", "https://s.shopee.com.br/AADHwXemh4","https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5ee9z3j6mhc40_tn"],
    ["22592808040", "Painel Linho Espuma 3mx50cm Adesivo Acústico", "25,00", "20500", "Acústica", "8%", "https://s.shopee.com.br/9ztrkEfQ23","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqp1erophwcj4e_tn"],
    ["22992803322", "Painel Linho Espuma 10mx50cm Adesivo Acústico", "79,00", "10500", "Acústica", "8%", "https://s.shopee.com.br/16VprHUK8","https://down-br.img.susercontent.com/file/sg-11134201-7rbms-lqp2fucodhm1cf_tn"],
    ["23197304957", "Painel Linho Espuma 10mx50cm Adesivo Decoração", "79,00", "10500", "Acústica", "14%", "https://s.shopee.com.br/BPw2AGqzB","https://down-br.img.susercontent.com/file/sg-11134201-7rbms-lqp2fucodhm1cf_tn"],
    ["22897304952", "Painel Linho Espuma 3mx50cm Adesivo Autocolante", "25,00", "10500", "Acústica", "14%", "https://s.shopee.com.br/LjMETGDeE","https://down-br.img.susercontent.com/file/sg-11134201-7rbmt-lqp1zgh7l0em3f_tn"],
    ["43955184634", "Protetor Auricular de Silicone Espuma Macia Ruído", "22,99", "10500", "Acústica", "12%", "https://s.shopee.com.br/W2mQmFaJH","https://down-br.img.susercontent.com/file/cn-11134207-820l4-mdziczwfyy2v12_tn"],
    ["10694797362", "Fita de Vedação Antiruído Acústica Espuma 10mts", "19,00", "7500", "Acústica", "9%", "https://s.shopee.com.br/gMCd5EwyK","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdmasmjih2hd42@resize_w450_nl.webp"],
    ["23999124482", "Painel Linho Espuma Adesivo Decoração Acústico", "29,99", "1500", "Acústica", "3%", "https://s.shopee.com.br/qfcpOEJdN","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgenq6zgvtok80@resize_w450_nl.webp"],
    ["23898946134", "Kit 10 Placas Espumas Acústicas Lisas 30x30cm", "38,00", "1500", "Acústica", "3%", "https://s.shopee.com.br/10z31hDgIQ","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfdzq8n37ksg32_tn"],
    ["58200860077", "KIT COM 10 ESPUMAS ACÚSTICAS CAIXA DE OVO", "39,00", "450", "Acústica", "7%", "https://s.shopee.com.br/1BITE0D2xT","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhcbg7vup2ps00@resize_w450_nl.webp"],
    ["20251631527", "Espuma Acústica Anti-Chamas Kit 10 Placas 50x50cm", "40,00", "2500", "Acústica", "3%", "https://s.shopee.com.br/1LbtQJCPcW","https://down-br.img.susercontent.com/file/br-11134207-7r98o-loegl9lzt5ex40_tn"],
    ["23492639849", "Kit C/ 15 Placas Espuma Acústica Hexagonal 30x2cm", "87,10", "4", "Acústica", "21%", "https://s.shopee.com.br/1VvJccBmHZ","https://down-br.img.susercontent.com/file/sg-11134201-7rdxm-mcq7v6eono5c19@resize_w450_nl.webp"],
    ["18097659652", "Papel de Parede Autocolante 3D Linho com Espuma", "64,90", "2500", "Acústica", "20%", "https://s.shopee.com.br/1gEjovB8wc","https://down-br.img.susercontent.com/file/sg-11134201-7rcbw-ls1f2dlt8fwq8e_tn"],
    ["24720236714", "12Pcs Painel De Espuma Acústica Pirâmide 2.5X30X30cm", "63,08", "80", "Acústica", "19%", "https://s.shopee.com.br/1qYA1EAVbf","https://down-br.img.susercontent.com/file/sg-11134201-7rcci-lt565kmlijow02.webp"],
    ["26413616321", "Placa De Espuma Acústica 48 Unidades Studio Wedge", "216,99", "20", "Acústica", "19%", "https://s.shopee.com.br/20raDX9sGi","https://down-br.img.susercontent.com/file/sg-11134201-7rdvo-m15hh5q27rwqe1.webp"],
    ["22292629493", "Kit C/ 10 Painéis de Espuma Acústica Estúdio Lisa", "56,30", "12", "Acústica", "18%", "https://s.shopee.com.br/2BB0Pq9Evl","https://down-br.img.susercontent.com/file/sg-11134201-7rbmy-lnt1r7try2rwe3@resize_w450_nl.webp"],
    ["21296953487", "10 Espumas Acústicas Lisas p/ Absorção de Som", "34,99", "33", "Acústica", "18%", "https://s.shopee.com.br/2LUQc98bao","https://down-br.img.susercontent.com/file/br-11134207-820lo-mlnk1y7qksna12@resize_w450_nl.webp"],
    ["22792772384", "10 Espuma de Tratamento Colmeia Hexagonal", "57,80", "36", "Acústica", "18%", "https://s.shopee.com.br/2VnqoS7yFr","https://down-br.img.susercontent.com/file/sg-11134201-821es-mh7pvkn6g6q463@resize_w450_nl.webp"],
    ["11126540828", "01 Placa Espuma Acústica Anti Ruídos Decorativa", "17,80", "144", "Acústica", "18%", "https://s.shopee.com.br/2g7H0l7Kuu","https://down-br.img.susercontent.com/file/0a8ae5b121213ecf9a11f25820cdd8d7_tn"],
    ["4770511562", "Kit Espuma Acústica Caixa de Ovo Cinza Grafite", "9,99", "191", "Acústica", "18%", "https://s.shopee.com.br/2qQhD46hZx","https://down-br.img.susercontent.com/file/br-11134207-820lf-mlgby0mh6n7oef_tn"],
    ["22892693024", "Kit 10un Espuma Acústica Lisa p/ Sala 50x25x2cm", "53,40", "7", "Acústica", "18%", "https://s.shopee.com.br/30k7PN64F0","https://down-br.img.susercontent.com/file/sg-11134201-8258v-mg2bpmb8wrnxa9@resize_w450_nl.webp"],
    ["22694682841", "Copo de Vidro Borossilicato Duplo Parede Isolante", "31,25", "49", "Diversos", "22%", "https://s.shopee.com.br/3B3Xbg5Qu3","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgwhkf2f3bif24@resize_w450_nl.webp"],
    ["19199088198", "COPO DE VIDRO PAREDE DUPLA 80ML UNITÁRIO CAFÉ", "22,36", "54", "Diversos", "21%", "https://s.shopee.com.br/3LMxnz4nZ6","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgwhkf2f3bif24@resize_w450_nl.webp"],
    ["58250475979", "Kit Copos Parede Dupla de Vidro 100 ml Café Chá", "19,98", "369", "Diversos", "21%", "https://s.shopee.com.br/3VgO0I4AE9","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh2nu3sukef438_tn"],
    ["58200219048", "Mesa Escrivaninha em L Para Computador Notebook", "199,90", "771", "Casa & Setup", "72%", "https://s.shopee.com.br/3fzoCb3WtC","https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgi2xlfksgsnaa@resize_w450_nl.webp"],
    ["23898628892", "Kit Conjunto Mesa Infantil com 2 Cadeiras Estudo", "374,30", "119", "Diversos", "38%", "https://s.shopee.com.br/3qJEOu2tYF","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mau6994buiz3e9_tn"],
    ["21498263472", "Kit Mesa Infantil Com 4 Cadeirinhas Coloridas", "730,00", "151", "Diversos", "38%", "https://s.shopee.com.br/40cebD2GDI","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc6mr4p7x5mt1d_tn"],
    ["22298841076", "Conjunto Mesa Infantil Quadrada Com 1 Cadeira", "278,30", "20", "Diversos", "38%", "https://s.shopee.com.br/4Aw4nW1csL","https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdkmb4jwvxkp2e_tn"],
    ["11633042256", "Caneca Personalizada Flow Podcast", "29,90", "1", "Diversos", "3%", "https://s.shopee.com.br/4LFUzp0zXO",""],
    ["58204331259", "As Aventuras do Richard Rasmussen autor", "29,90", "1", "Diversos", "7%", "https://s.shopee.com.br/4VYvC80MCR","https://down-br.img.susercontent.com/file/sg-11134201-81ztr-mmvbs5msqpl06f@resize_w450_nl.webp"],
    ["11803948645", "Camiseta Baby look Pode Pa Podcast Tumblr", "49,90", "1", "Diversos", "20%", "https://s.shopee.com.br/4fsLOQzirU","https://down-br.img.susercontent.com/file/7d7a104e90adf13a71c00ccef6bdd330@resize_w450_nl.webp"],
    ["23492839191", "Kit Pc Gamer Ddr4 - Intel Core I5 + 16gb Ram", "1300,00", "1", "PC & Gamer", "43%", "https://s.shopee.com.br/4qBlajz5WX","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrhdoib4pquc6f@resize_w450_nl.webp"]
];

// Mapeando dados para objetos
const products = productsRaw.map(p => ({
    id: p[0],
    name: p[1],
    price: parseFloat(p[2].replace('.', '').replace(',', '.')),
    sales: parseInt(p[3].replace('mil+', '000')) || 0,
    cat: p[4],
    comm: p[5],
    link: p[6],
    image: p[7] // <--- Ele vai pegar o link que você colocar na 8ª posição
}));

const categories = ["Todos", "Fones", "Microfones", "Áudio Pro", "Iluminação", "PC & Gamer", "Acessórios", "Acústica", "Casa & Setup", "Diversos"];
let activeCat = "Todos";

function renderCategories() {
    const container = document.getElementById('categoryTabs');
    container.innerHTML = categories.map(c => {
        const count = c === "Todos" ? products.length : products.filter(p => p.cat === c).length;
        return `
                    <button onclick="setCategory('${c}')" class="category-pill ${activeCat === c ? 'active' : ''} px-4 py-2 rounded-xl text-xs font-bold transition-all">
                        ${c} <span class="opacity-40 ml-1">• ${count}</span>
                    </button>
                `;
    }).join('');
}

function setCategory(c) {
    activeCat = c;
    renderCategories();
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const sort = document.getElementById('sortSelect').value;

    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search);
        const matchesCat = activeCat === "Todos" || p.cat === activeCat;
        return matchesSearch && matchesCat;
    });

    if (sort === "menor") filtered.sort((a, b) => a.price - b.price);
    else if (sort === "maior") filtered.sort((a, b) => b.price - a.price);
    else filtered.sort((a, b) => b.sales - a.sales);

    renderProducts(filtered);
}

function renderProducts(list) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = list.map(p => {
        // Ícone reserva caso não tenha imagem
        let icon = "fa-box";
        if (p.cat === "Fones") icon = "fa-headphones";
        else if (p.cat === "Microfones") icon = "fa-microphone";
        else if (p.cat === "PC & Gamer") icon = "fa-computer";
        else if (p.cat === "Acústica") icon = "fa-volume-high";
        else if (p.cat === "Diversos") icon = "fa-star";

        return `
            <a href="${p.link}" target="_blank" class="product-card rounded-2xl p-4 relative group">
                <div class="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-600 to-red-600 px-2 py-0.5 rounded text-[9px] font-black flex items-center gap-1 shadow-lg">
                    <i class="fas fa-fire text-[8px]"></i> TOP
                </div>
                
                <div class="aspect-square w-full rounded-xl bg-black/20 mb-4 flex items-center justify-center relative overflow-hidden">
                    <!-- LOGICA DA IMAGEM: Se tiver p.image, mostra a foto. Se não, mostra o ícone -->
                    ${p.image ? 
                        `<img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">` : 
                        `<i class="fas ${icon} text-4xl opacity-20 group-hover:scale-110 transition-transform"></i>`
                    }
                    
                    <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[9px] font-bold text-gray-300 uppercase">${p.cat}</div>
                </div>

                <h3 class="text-[13px] font-semibold text-gray-100 line-clamp-2 leading-snug mb-2 min-h-[34px]">${p.name}</h3>
                
                <div class="mt-auto">
                    <div class="text-lg font-black orange-text mb-1">R$ ${p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div class="flex items-center justify-between text-[10px] text-gray-400 font-bold">
                        <span><i class="fas fa-chart-line mr-1"></i> ${p.sales > 999 ? (p.sales / 1000).toFixed(0) + 'mil+' : p.sales}</span>
                        <span class="text-emerald-500">${p.comm} de comissão</span>
                    </div>
                </div>
            </a>
        `}).join('');
}

document.getElementById('searchInput').addEventListener('input', applyFiltersAndSort);
renderCategories();
applyFiltersAndSort();