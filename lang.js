
/*
        
const allLangs = ['ru', 'en'];
let currentLanguage = localStorage.getItem('language') || "ru";
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname; 
let currentText = {};


   

const hometexts = {

    "connect_header":{
        ru:"Подключить кошелек",
        en:"Connect wallet"
    },

   "buy_xpp_header":{
    ru:"Купить XPP",
    en:"Buy XPP"
   },

    "crypto_header":{
        ru:"Криптоинвестиции без границ",
        en:"Crypto investments without borders",
    },
    "crypto_sub":{
        ru:"Самая доступная социальная площадка для ранних инвестиций и запуска проектов",
        en:"The most accessible social platform for early investments and project launches",
    },

      "ticker":{
        ru:"Тикер",
        en:"Ticker",
    },
    "platform":{
        ru:"Платформа",
        en:"Platform",
    },

    "adress":{
        ru:"Адрес контракта",
        en:"Contract address",
    },
    "xpad_textSub":{
        ru:"Cоциализированная LaunchPad-площадка с самыми комфортными условиями для ранних инвестиций,без каких-либо обременительных требований и ограничений.",
        en:"A socialized LaunchPad platform with the most comfortable conditions for early investments, without any burdensome requirements and restrictions.",
    },

    "socialization_head":{
        ru:"Социализация",
        en:"Socialization",
    },
    "socialization_sub":{
        ru:"Ваши будущие инвесторы, эдвайзеры, сотрудники, пользователи продукта — все здесь. Легко и удобно: собирайте единомышленников, расширяйте круг полезных связей, советуйтесь с профессионалами, объединяйтесь в инвестиционные пулы, создавайте совместные проекты, покупайте и продавайте токены, получайте бонусы за социальную активность.",
        en:"Your future investors, advisors, employees, product users are all here. Easy and convenient: gather like-minded people, expand the circle of useful contacts, consult with professionals, join investment pools, create joint projects, buy and sell tokens, get bonuses for social activity.",
    },

    "allocation":{
        ru:"100% аллокация",
        en:"100% allocation",
    },

    "allocation_sub":{
        ru:"Аллокации до 1000$ со 100% шансом по принципу first come — first served (в порядке очереди).",
        en:"Allocations up to $ 1000 with a 100% chance on the principle of first come - first served (in order of priority).",
    },
    "bezbarnost":{
        ru:"Безбарьерность",
        en:"Barrier-free",
    },

    "bezbarnost_sub":{
        ru:"Нет рандома, белых списков, тиров, лотерей, кармы, переподписки, индексации и высоких коэффициентов.",
        en:"No randomness, whitelists, shooting ranges, lotteries, karma, oversubscription, indexing and high odds.",
    },

    "inv_heading":{
        ru:"Инвестируйте в стартапы",
        en:"Invest in startups",
    },

    "inv_sub":{
        ru:"Выбирайте тариф и зарабатывайте на ранних стадиях в проверенных проектах, без мошенников и коррупционных схем.",
        en:"Choose a tariff and earn in the early stages in proven projects, without scammers and corruption schemes.",
    },


    "start_to":{
        ru:"Начать инвестировать",
        en:"Start investing",
    },

    "md_heading":{
        ru:"Запустите свой проект",
        en:"Run your project",
    },


    "md_sub":{
        ru:"Выйдите на листинг быстрее и с большей аудиторией благодаря экспертизе и инкубационным программам Xpad.",
        en:"Get listed faster and with a bigger audience with Xpad expertise and incubation programs.",
    },

    "start_to_2":{
        ru:"Подать заявку",
        en:"Apply",
    },


    "token_sale_top_info__row_sub_p":{
        ru:"Не упустите возможность приобрести токен XPP на ранней стадии и по очень выгодной цене",
        en:"Don't miss the opportunity to purchase XPP token at an early stage and at a very favorable price",
    },


    "active":{
        ru:"Активен",
        en:"Active",
    },


    "end_in":{
        ru:"Завершится",
        en:"Will end",
    },


    "price":{
        ru:"Цена:",
        en:"Price:",
    },

    "count":{
        ru:"Количество",
        en:"Quantity",
    },


    "westing":{
        ru:"Вестинг:",
        en:"Vesting:",
    },

    "mouth":{
        ru:"месяца",
        en:"months",
    },


    "soon":{
        ru:"Скоро",
        en:"Soon",
    },

    "soon1":{
        ru:"Скоро",
        en:"Soon",
    },

    "soon2":{
        ru:"Скоро",
        en:"Soon",
    },

      "soon3":{
        ru:"Скоро",
        en:"Soon",
    },
    "soon4":{
        ru:"Скоро",
        en:"Soon",
    },


    "listing":{
        ru:"Листинг",
        en:"Listing",
    },




    "peculiarities_header":{
        ru:"Особенности токена XPP",
        en:"Token features XPP",
    },

    "ogronichenia_header":{
        ru:"Ограниченная эмиссия",
        en:"Limited issue",
    },


    "ogronichenia_sub":{
        ru:"Основной дефляционный инструмент для долгосрочных инвестиций. Курс токена растет планомерно, защищен от инфляции и рыночной волатильности.",
        en:"The main deflationary tool for long-term investments. The token exchange rate is growing systematically, protected from inflation and market volatility.",
    },


       "quantum_sub":{
        ru:"Большинство схем асимметричной криптографии, включая схемы цифровой подписи Биткойн и Эфириум не защищены от квантовых угроз. Внедрение квантово-устойчивых алгоритмов защитит от квантовых атак",
        en:"Most asymmetric cryptography schemes, including Bitcoin and Ethereum digital signature schemes, are not immune to quantum threats. The introduction of quantum-resistant algorithms will protect against quantum attacks",
    },

    "antidamp":{
        ru:"Антидамп",
        en:"Antidump",
    },

    "antidamp_sub":{
        ru:"Справедливая система комиссий с уникальным DeFi-алгоритмом для плавного регулирования курса монет. Это защитит курс монеты от сливов и поможет обеспечить его устойчивый рост.",
        en:"A fair commission system with a unique DeFi algorithm for smooth regulation of the coin rate. This will protect the coin rate from drains and help ensure its sustainable growth.",
    },


    "Asset_sub":{
        ru:"Вид цифровой валюты, цена которой обеспечена активом реального мира. Компании, выпускающие такие монеты, гарантируют их держателю обмен на конкретный товар или услугу.",
        en:"A type of digital currency whose price is backed by a real world asset. Companies issuing such coins guarantee their holder an exchange for a specific product or service.",
    },

    "sjigania":{
        ru:"Сжигание монет",
        en:"Burning coins",
    },

    "sjigania_sub":{
        ru:"Механизм, обеспечивающий устойчивость курса монет за счет постоянного повышения минимального порога их стоимости. Это привлечет интерес покупателей и поможет поддерживать стабильность работы сети.",
        en:"A mechanism that ensures the stability of the exchange rate of coins by constantly increasing the minimum threshold for their value. This will attract the interest of buyers and help maintain the stability of the network.",
    },


    "fond_sub":{
        ru:"Фонд регулируемый сообществом  голосованием, направленный на защиту курса монеты от инфляции и повышение стабильности работы экосистемы Xpad. направленное на сжигание, выкуп, резервирование и стейкинг монет.",
        en:"A community-voted fund aimed at protecting the coin from inflation and improving the stability of the Xpad ecosystem. aimed at burning, redeeming, reserving and staking coins.",
    },

    "tokenomics_header":{
        ru:"Токеномика",
        en:"Tokenomics",
    },

    "tokenomics_sub":{
        ru:"Гарантированный возврат средств всем инвесторам при форс мажорных ситуациях, а все не проданные монеты будут перечислены в пользу стейкинга с расчетом на 50+ лет",
        en:"Guaranteed return of funds to all investors in case of force majeure, and all coins not sold will be transferred in favor of staking for 50+ years",
    },


    "comade_tokenomics":{
        ru:"Команда",
        en:"Command",
    },

    "partnes_tokenomics":{
        ru:"Партнеры, эдвайзеры, инфлюенсеры",
        en:"Partners, advisors, influencers",
    },




}



const productPageText = {
    "home_src":{
        ru:"Главная",
        en:"Home"
    },

    "connect_header":{
        ru:"Подключить кошелек",
        en:"Connect wallet"
    },

   "buy_xpp_header":{
    ru:"Купить XPP",
    en:"Buy XPP"
   },

}

  */

/*
function checkPagePathName(){
    switch(currentPathName){
        case "/index.html":
          currentText = hometexts;
          break;

        case "/projects.html":
            currentText = productPageText;
        break;

        default:
            currentText = hometexts;
    }
}
           
checkPagePathName();

function changeLang(){
    for (const key in currentText) {
        const elem = document.querySelector(`[data-lang = ${key}]`);


        if (elem){

            elem.textContent = currentText[key][currentLanguage];

        }
    }
}

changeLang();


langButtons.forEach((btn) =>{
    btn.addEventListener("click", (event) =>{
        currentLanguage = event.target.dataset.btn;
       // let inputss = document.getElementById("inputsss");
        localStorage.setItem("language",event.target.dataset.btn)
    
        changeLang();
     
    });
});
           
  

         
        

       
     */


document.addEventListener('DOMContentLoaded', getLocalLang)


var arrLang = {
         

    'en':{
        'header_btn_ru' : 'EN',
        'crypto_header': 'Crypto investments without borders',
        'crypto_sub':'The most accessible social platform for early investments and project launches',
        'connect_header':'Connect wallet',
        'buy_xpp_header':'Buy XPP',
        'xpad_textSub':'A socialized LaunchPad platform with the most comfortable conditions for early investments, without any burdensome requirements and restrictions.',
        'socialization_head':'Socialization',
        'socialization_sub':'Your future investors, advisors, employees, product users are all here. Easy and convenient: gather like-minded people, expand the circle of useful contacts, consult with professionals, join investment pools, create joint projects, buy and sell tokens, get bonuses for social activity.',
        'allocation':'100% allocation',
        'allocation_sub':'Allocations up to $ 1000 with a 100% chance on the principle of first come - first served (in order of priority).',
        'bezbarnost':'Barrier-free',
        'bezbarnost_sub':'No randomness, whitelists, shooting ranges, lotteries, karma, oversubscription, indexing and high odds.',

        'inv_heading':'Invest in startups',
        'inv_sub':'Choose a tariff and earn in the early stages in proven projects, without scammers and corruption schemes.',
        'start_to':'Start investing',
        'md_heading':'Run your project',
        'md_sub':'Get listed faster and with a bigger audience with Xpad expertise and incubation programs.',
        'start_to_2':'Apply',
        'token_sale_top_info__row_sub_p':"Don't miss the opportunity to purchase XPP token at an early stage and at a very favorable price",
        'ticker':'Ticker',
        'platform':'Platform',
        'adress':'Contract address',

        'active':'Active',
        'end_in':'Will end',
        'price':'Price:',
        'count':'Quantity:',
        'westing':'Vesting:',
        'mouth':'months',
        'after_listing':'After listing',
        'soon':'Soon',

        'text1':'I want to buy for',
        'text2':'I will receive',
        'slaes_button':'Buy',

        'listing':'Listing',

        'peculiarities_header':'Token features XPP',
        'ogronichenia_header':'Limited issue',
        'ogronichenia_sub':'The main deflationary tool for long-term investments. The token exchange rate is growing systematically, protected from inflation and market volatility.',
        'quantum_sub':'Most asymmetric cryptography schemes, including Bitcoin and Ethereum digital signature schemes, are not immune to quantum threats. The introduction of quantum-resistant algorithms will protect against quantum attacks',
        'antidamp':'Antidump',
        'antidamp_sub':'A fair commission system with a unique DeFi algorithm for smooth regulation of the coin rate. This will protect the coin rate from drains and help ensure its sustainable growth.',
        'Asset_sub':'A type of digital currency whose price is backed by a real world asset. Companies issuing such coins guarantee their holder an exchange for a specific product or service.',
        'sjigania':'Burning coins',
        'sjigania_sub':'A mechanism that ensures the stability of the exchange rate of coins by constantly increasing the minimum threshold for their value. This will attract the interest of buyers and help maintain the stability of the network.',
        'fond_sub':'A community-voted fund aimed at protecting the coin from inflation and improving the stability of the Xpad ecosystem. aimed at burning, redeeming, reserving and staking coins.',

        'xpp':'XPP',

        'tokenomics_header':'Tokenomics',
        'tokenomics_sub':'Guaranteed return of funds to all investors in case of force majeure, and all coins not sold will be transferred in favor of staking for 50+ years',
        'staking_tokenomics':'Staking',
        'podoushka_tokenomics':'Safety bag',
        'marketing_tokenomics':'Marketing and Advertising',
        'partnes_tokenomics':'Partners, advisors, influencers',
        'comade_tokenomics':'Command',

        'benefits_header':'Advantages of the Xpad social platform',
        'pricipi_dao':'DAO Principles',
        'pricipi_dao__sub':'We filter scams and provide reports, but only projects that get the approval of an active community are launched.',
        'expert_audit':'Expert audit',
        'expert_audit__sub':'Professional audit and analytics. Only the best, meaningful, viable projects. No chance for scammers.',
        'sovopo':'Accompanying',
        'sovopo_sub':'Complex support and acceleration of startups. Help in financing and promotion.',
        'zashita':'Protection of anonymity',
        'zashita_sub':'Your transactions with XPP do not leave digital traces about which wallet the money was debited from, where it was credited and what the transfer amount is, which ensures confidentiality and data security.',
        'kostodialni':'Non-custodial crypto wallet',
        'kostodialni_sub':'You fully control all data-langs and funds on the cryptocurrency wallet. No sanctions, foreign policy and other factors can affect the ability to manage funds and their balance.',
        'submit_rez':'Confirmation of reserves',
        'submit_rez__sub':'Any user will be able to track the state of cold and hot wallets. For confirmation of reserves, prevention of risks and increase of confidence of investors.',
        'poqer_comunity':'Power of the community',
        'poqer_comunity__sub':'Use the opportunity to promote to a large audience with the powerful support of an active community.',
        'equal_powers':'Equal conditions',
        'equal_powers__sub':'Fair distribution of tokens regardless of your portfolio or experience. Awards for activity.',
        'multichain':'Multichain',
        'multichain_sub':'Attract more potential investors — we are open to projects on any blockchain.',

        'live_pool_sub':'Participate in initial sales, receive profit and additional rewards from staking',
        'ibeam_sub':"The world's first crypto-locator for fast dating. Find interesting people nearby and make useful contacts!",
        'pintagram_sub':'Social network for the promotion and exchange of NFT, with GameFi mechanics. compete, win, earn!',
        'crypto_mafia_sub':"The world's first crypto-locator for fast dating. Find interesting people nearby and make useful contacts!",
        'metapolis_sub':'Conquer the open seamless world in the style of post-apocalyptic cyberpunk together with your friends.',
        'podrobne':'Read more',

        'bolshe_proektov':'More projects',

        'app_content_header':'Convenient application',
        'app_content_sub':'Fast and simple registration, high security, convenient interface and rich functionality will raise your comfort in the crypto world to a qualitatively new level!',
        'sub_airdrop_page':'Exclusive offer with big prizes. Good luck buying!',
        'sub_air_2':'A total of 19,000,000 tokens will be played. More than 7,000 participants will receive a guaranteed reward of at least $50.',
        'toApericate':'To participate',
        'recive_10':'Get $10 for each friend you invite',

        'mesto':'place',

        'razra':'Development of a user-friendly platform for launching startups in the Polkadot and Binance Smart Chain ecosystems',
        'patgatovka':'Preparing infrastructure for IDO',
        'econo':'Development of economics, tokenomics and technical documentation',
        'web_site':'Website creation',
        'launch_dex':'Platform Beta Launch: Website, DEX UI',
        'MVP':'Binance Smart Chain Bridge MVP Token',
        'стратегии':'Development of a content marketing strategy, promotion and advertising of the project',
        'программы':'Development of a user incentive program, launch of Airdrop',
        'IEO':'IEO on Gate.io',
        'connecting_multichain':'Connecting a multi-chain wallet',
        'launch_alfa':'Development and launch of alpha and beta versions of the application for iOS, Android',
        'final_realise':'Final release of the platform',
        'listing_gate':'Listing on Gate.io',

        'meet_team_p':'The experts and advisors of the Xpad.pro core team will be happy to provide you with advisory support, whether it is questions about portfolio diversification, or problems with the next milestone of your project.',
        'our_mail':'Our contact address:',

        'heading_sovpo':'Project support',
        'sub_sovpo':'Get listed on the largest exchanges with a team of experts in crypto startups. We will pick up your idea or project at any stage, provide funding, help with promotion and scale.',

        'podats_zayavku':'Apply',
        'fonds_header':'We will profitably present your project to investment funds',

        'Станислав':'Stanislav Pavlovsky',
        'Анатолий':'Anatoly Kravchuk',
        'Ласкар':'Laskar Simeonov',
        'Тилемисулы':'Tilemisuly Asyltas',
        'Софья':'Sofia Miroshnichenko',

        'fors_inventrs':'For investors',
        'start_ups':'For startups',
        'founders':'Applicants',
        'for_investrs':'For investors',

        'home_src':'Home',
        'active_projects':'Active projects',
        'not_active_porjects':'Completed projects',

        'actual_up_to_text':'Will end in:',
        'round_and_price_header':'Round sale:',
        'price_for_token':'Token price:',
        'buy':'Buy',

        'days':'d ',
        'hours':'h ',
        'minutes':'m ',
        'sedonds':'s ',


        'actual_up_to_text_2':'Will start in:',

        'sobrono':'Collected:',
        'keushaya_pribil':'Current profit:',

        'active_projects_mobil':'Active',
        'not_active_porjects_mobile':'Completed',

        'actual_up_to_text_launch':'Will end in:',


        'allocation_launch':'Allocation',

        'category':'Category',
        'info_ido':'About IDO',
        'start_of_ido':'Home sale IDO',
        'end_of_ido':'Completion of IDO sales',
        'raspredelenia':'Distribution of tokens',


        'about_all_block__header':'General information',
        'launchpad_plosh':'Launchpad',
        'vam':'and you',

        'ponravilos':'liked:',

        'my_stake':'My Stake',
        'obshaya_suma':'Total amount',
        'my_level':'My level',
        'ostalos':'There are',
        'dney':'days',

        'ukajite_kali':'Enter the amount of XPP:',
        'ukajite_srok':'Specify for how long:',
        'mini_14':'*Minimum 14 days',
        'block_to':'Lock up',
        'available_lvl':'Available level',
        'start_staking':'Start staking',

        'uslovia_launch':'Terms of participation in launchpad',
        'uslovia_launch_sub':'Check out the tariff you need to participate in new projects, and then deposit the required amount for staking.',
        'vash_proekt':' Your project',

        'razmesits':'Submit a project',
        'nazvania':'Project name*',

        'type_of_peodaj':'Type of sale*',
        'banner_projects':'Banner Project*',
        'zagruzite':'Download or move here',

        'category_of_projetc':'Project category',
        'site':'Site*',
        'kratkoe_opisanya':'Brief description of the project*',
        'podrobne_opisania':'Detailed description of the project',
        'youtube_href':'Link to promotional video',

        'naprimer_launchpad':'For example: launchpad pad',
        'inovation_naprimer_22':'For example: innovative socialized launch pad',


        'dorojnaya':'Road map*',
        'addres_of_cont':'Contract address',
        'vseovo_vipusheno':'Total issued tokens',
        'cena_za_token':'Price for 1 token *',
        'dostupno_for':'Available for token sale*',
        'tokenomics_project':'Project tokenomics*',
        'model_postavok':'Token setup model',
        'strogo':'Strictly limited emission',
        'uslovno_ogronichenya':'Conditionally limited emission',
        'neogrichenya':'Unlimited emission',

        'ticker_placeholder':'For example: XPP',
        'naprimer_plat':'For example: ERC20',
        'addres_placeholder':'Enter address',

        'dectachya':'Decimals',
        'vesting_project':'Project vesting',
        'model_of_postavok':'Quantum resistance',
        'Yes':'Yes',
        'no':'No',
        'airdrop_adres':'Project airdrop',

        'twiter':'Twitter* (link)',
        'telegram':'Telegram* (link)',
        'linkdin':'Linkedin (link)',
        'medium':'Medium (link)',
        'github':'Github (link)',
        'youtub':'YouTube (link)',


        'otpravits':'Send a request',

        'vxod_login':'Login',
        'email_login':'E-mail/Login',
        'password_login':'Password',
        'sign_in_login':'Sign in',
        'or_login':'Or',
        'create_account_login':'Create an account',
        'registration_login':'Registration:',
        'login_login':'Login',
        'enter_pasword':'Enter the password',
        'rewrite_password':'Repeat the password',
        'continue_login':'Continue',
        'upload_login':'Download photo',
        'sign_up__login':'Sign up',
        'continue_login__':'Continue',
        'sign_sign_up_login':'I have an account',

        'obshi_balanc':'General balance',
        'pereutsi_v_kashelok':'Go to wallet',
        'papolnits_stake':'Fill stake',
        'myreferals':'My referrals',
        'my_silka':'My link',

        'referal_program':'Referral program',
        'reciver_money':'Get $10 for each invited friend. To receive a reward, it is necessary for a friend to follow your referral link and register on the Xpad.pro platform. At the same time, your tariff should not be advanced',
       


        'my_referals':'My referrals',
        'zagruzithe_v':'Get it on',
        'availabll_in_app':'Available on the',
        '':'',
        '':'',
        '':'',



    },

    'ru':{
        'header_btn_ru' : 'RU',
        'crypto_header': 'Криптоинвестиции без границ',
        'crypto_sub':'Самая доступная социальная площадка для ранних инвестиций и запуска проектов',
        'connect_header':'Подключить кошелек',
        'buy_xpp_header':'Купить XPP',
        'xpad_textSub':'Cоциализированная LaunchPad-площадка с самыми комфортными условиями для ранних инвестиций,без каких-либо обременительных требований и ограничений.',
        'socialization_head':'Социализация',
        'socialization_sub':'Ваши будущие инвесторы, эдвайзеры, сотрудники, пользователи продукта — все здесь. Легко и удобно: собирайте единомышленников, расширяйте круг полезных связей, советуйтесь с профессионалами, объединяйтесь в инвестиционные пулы, создавайте совместные проекты, покупайте и продавайте токены, получайте бонусы за социальную активность.',
        'allocation':'100% аллокация',
        'allocation_sub':'Аллокации до 1000$ со 100% шансом по принципу first come — first served (в порядке очереди).',
        'bezbarnost':'Безбарьерность',
        'bezbarnost_sub':'Нет рандома, белых списков, тиров, лотерей, кармы, переподписки, индексации и высоких коэффициентов.',

        'inv_heading':'Инвестируйте в стартапы',
        'inv_sub':'Выбирайте тариф и зарабатывайте на ранних стадиях в проверенных проектах, без мошенников и коррупционных схем.',
        'start_to':'Начать инвестировать',
        'md_heading':'Запустите свой проект',
        'md_sub':'Выйдите на листинг быстрее и с большей аудиторией благодаря экспертизе и инкубационным программам Xpad.',
        'start_to_2':'Подать заявку',
        'token_sale_top_info__row_sub_p':'Не упустите возможность приобрести токен XPP на ранней стадии и по очень выгодной цене',
        'ticker':'Тикер',
        'platform':'Платформа',
        'adress':'Адрес контракта',
        'active':'Активен',
        'end_in':'Завершится',
        'price':'Цена:',
        'count':'Количество:',
        'westing':'Вестинг:',
        'mouth':'месяца',
        'after_listing':'После листинга',
        'soon':'Скоро',
        'text1':'Хочу купить на сумму',
        'text2':'Получу',
        'slaes_button':'Купить',
        'listing':'Листинг',
        'peculiarities_header':'Особенности токена XPP',
        'ogronichenia_header':'Ограниченная эмиссия',
        'ogronichenia_sub':'Основной дефляционный инструмент для долгосрочных инвестиций. Курс токена растет планомерно, защищен от инфляции и рыночной волатильности.',
        'quantum_sub':'Большинство схем асимметричной криптографии, включая схемы цифровой подписи Биткойн и Эфириум не защищены от квантовых угроз. Внедрение квантово-устойчивых алгоритмов защитит от квантовых атак',
        'antidamp':'Антидамп',
        'antidamp_sub':'Справедливая система комиссий с уникальным DeFi-алгоритмом для плавного регулирования курса монет. Это защитит курс монеты от сливов и поможет обеспечить его устойчивый рост.',
        'Asset_sub':'Вид цифровой валюты, цена которой обеспечена активом реального мира. Компании, выпускающие такие монеты, гарантируют их держателю обмен на конкретный товар или услугу.',
        'sjigania':'Сжигание монет',
        'sjigania_sub':'Механизм, обеспечивающий устойчивость курса монет за счет постоянного повышения минимального порога их стоимости. Это привлечет интерес покупателей и поможет поддерживать стабильность работы сети.',
        'fond_sub':'Фонд регулируемый сообществом  голосованием, направленный на защиту курса монеты от инфляции и повышение стабильности работы экосистемы Xpad. направленное на сжигание, выкуп, резервирование и стейкинг монет.',
        'xpp':'XPP',
        'tokenomics_header':'Токеномика',
        'tokenomics_sub':'Гарантированный возврат средств всем инвесторам при форс мажорных ситуациях, а все не проданные монеты будут перечислены в пользу стейкинга с расчетом на 50+ лет',
        'staking_tokenomics':'Стейкинг',
        'podoushka_tokenomics':'Подушка безопасности',
        'marketing_tokenomics':'Маркетинг и реклама',
        'partnes_tokenomics':'Партнеры, эдвайзеры, инфлюенсеры',
        'comade_tokenomics':'Команда ',
        'benefits_header':'Преимущества социальной площадки Xpad',
        'pricipi_dao':'Принципы DAO',
        'pricipi_dao__sub':'Мы фильтруем скам и предоставляем отчеты, но запускаются только проекты, которые получат одобрение активного сообщества.',
        'expert_audit':'Экспертный аудит',
        'expert_audit__sub':'Профессиональный аудит и аналитика. Только лучшие, значимые, жизнеспособные проекты. Без шансов для мошенников.',
        'sovopo':'Сопровождение',
        'sovopo_sub':'Комплексное сопровождение и акселерация стартапов. Помощь в финансировании и продвижении.',
        'zashita':'Защита анонимности',
        'zashita_sub':'Ваши сделки с XPP не оставляют цифровых следов о том, с какого кошелька списаны деньги, куда они были зачислены и какова сумма перевода, что обеспечивает конфиденциальность и безопасность данных.',
        'kostodialni':'Некастодиальный криптокошелек',
        'kostodialni_sub':'Вы полностью контролируете все ключи и средства на криптовалютном кошельке. Никакие санкции, внешнеполитические и прочие факторы не могут повлиять на возможность управления средствами и их баланс.',
        'submit_rez':'Подтверждение резервов',
        'submit_rez__sub':'Любой пользователь сможет отслеживать состояние холодных и горячих кошельков. Для подтверждения резервов, предотвращения рисков и повышения доверия инвесторов.',
        'poqer_comunity':'Сила комьюнити',
        'poqer_comunity__sub':'Используйте возможность продвижения на большие аудитории с мощной поддержкой активного сообщества.',
        'equal_powers':'Равные условия',
        'equal_powers__sub':'Справедливое распределение токенов вне зависимости от вашего портфеля или опыта. Награды за активность.',
        'multichain':'Мультичейн',
        'multichain_sub':'Привлеките большее число потенциальных инвесторов —  мы открыты для проектов на любом блокчейне.',
        'live_pool_sub':'Участвуйте в первичных продажах, получайте прибыль и дополнительное вознаграждение от стейкинга',
        'ibeam_sub':'Первый в мире криптолокатор для быстрых знакомств. Находи интересных людей поблизости и заводи полезные контакты!',
        'pintagram_sub':'Социальная сеть для продвижения и обмена NFT, с GameFi-механиками: соревнуйся, побеждай, зарабатывай!',
        'crypto_mafia_sub':'Первый в мире криптолокатор для быстрых знакомств. Находи интересных людей поблизости и заводи полезные контакты!',
        'metapolis_sub':'Покорите открытый бесшовный мир в стиле постапокалиптического киберпанка вместе со своими друзьями.',
        'podrobne':'Подробнее',
        'bolshe_proektov':'Больше проектов',
        'app_content_header':'Удобное приложение',
        'app_content_sub':'Быстрая и простая регистрация, высокая защищенность, удобный интерфейс и богатый функционал поднимут ваш комфорт в мире крипты на качественно новый уровень!',
        'sub_airdrop_page':'Эксклюзивное предложение с большими призами. Успей приобрести!',
        'sub_air_2':'Всего будет разыграно 19 000 000 токенов. Более 7 000 участников получат не менее 50$ гарантированного вознаграждения.',
        'toApericate':'Участвовать',
        'recive_10':'Получи 10$ за каждого приглашенного друга',
        'mesto':'место',
        'razra':'Разработка user-friendly платформы для запуска стартапов в экосистемах Polkadot и Binance Smart Chain',
        'patgatovka':'Подготовка инфраструктуры для проведения IDO',
        'econo':'Разработка экономики, токеномики и технической документации',
        'web_site':'Создание веб-сайта',
        'launch_dex':'Запуск Beta-версии платформы: веб-сайт, пользовательский интерфейс DEX',
        'MVP':'Токен MVP Binance Smart Chain Bridge',
        'стратегии':'Разработка стратегии контент-маркетинга, продвижения и рекламы проекта',
        'программы':'Разработка программы поощрения пользователей, запуск Airdrop',
        'IEO':'IEO на Gate.io',
        'connecting_multichain':'Подключение мультичейн-кошелька',
        'launch_alfa':'Разработка и запуск альфа- и бета-версии приложения для iOS, Android',
        'final_realise':'Финальный релиз платформы',
        'listing_gate':'Листинг на Gate.io',
        'meet_team_p':'Эксперты и эдвайзеры core-команды Xpad.pro будут рады оказать вам консультационную поддержку, будь это вопросы по диверсификации портфеля, или проблемы с очередным майлстоуном вашего проекта.',
        'our_mail':'Наш адрес для обратной связи:',
        'heading_sovpo':'Сопровождение проектов',
        'sub_sovpo':'Пройдите листинг на крупнейших биржах вместе с командой экспертов в криптостартапах. Подхватим вашу идею или проект на любом этапе, обеспечим финансирование, поможем с продвижением и масштабируем.',
        'podats_zayavku':'Подать заявку',
        'fonds_header':'Выгодно представим ваш проект инвестиционным фондам',
        'Станислав':'Станислав Павловский',
        'Анатолий':'Анатолий Кравчук',
        'Ласкар':'Ласкар Симеонов',
        'Тилемисулы':'Тилемисулы Асылтас',
        'Софья':'Софья Мирошниченко',
        'fors_inventrs':'Для инвесторов',
        'start_ups':'Для стартапов',
        'founders':'Соискателям',
        'for_investrs':'Для инвесторов',




        'home_src':'Главная',
        'active_projects':'Активные проекты',
        'not_active_porjects':'Завершенные проекты',
        'actual_up_to_text':'Завершится через:',
        'round_and_price_header':'Раунд продаж:',
        'price_for_token':'Цена токена:',
        'buy':'Купить',
        'days':'д ',
        'hours':'ч ',
        'minutes':'м ',
        'sedonds':'с ',
        'actual_up_to_text_2':'Начнется через:',
        'sobrono':'Собрано:',
        'keushaya_pribil':'Текущая прибыль:',
        'active_projects_mobil':'Активные',
        'not_active_porjects_mobile':'Завершенные',
        'allocation_launch':'Аллокация',

        'category':'Категория',
        'info_ido':'Информация о IDO',
        'start_of_ido':'Начало продаж IDO',
        'end_of_ido':'Завершение продаж IDO',
        'raspredelenia':'Распределение токенов',
        'about_all_block__header':'Общая информация',
        'launchpad_plosh':'Лаунчпад площадка',
        'vam':'и вам',
        'ponravilos':'понравилось:',
        'my_stake':'Мой stake',
        'obshaya_suma':'Общая сумма ',
        'my_level':'Мой уровень',
        'ostalos':'Осталось ',
        'dney':'дней',
        'ukajite_kali':'Укажите количество XPP:',
        'ukajite_srok':'Укажите на какой срок:',
        'mini_14':'*Минимум 14 дней',
        'block_to':'Блокировка до',
        'available_lvl':'Доступный уровень',
        'start_staking':'Начать стейкинг',

        'uslovia_launch':'Условия участия в launchpad',
        'uslovia_launch_sub':'Ознакомьтесь с необходимым вам тарифом для участия в новых проектах, а затем внесите нужную сумму на стейкинг.',
        'vash_proekt':'Ваш проект',

        'vash_proekt':'Ваш проект',
        'razmesits':'Разместить проект',

        'nazvania':'Название проекта*',

        'type_of_peodaj':'Тип продажи*',
        'banner_projects':'Баннер проекта*',
        'zagruzite':'Загрузите или переместите сюда ',

        'category_of_projetc':'Категория проекта',
        'site':'Сайт*',
        'kratkoe_opisanya':'Краткое описание проекта*',
        'podrobne_opisania':'Подробное описание проекта',
        'youtube_href':'Ссылка на рекламное видео',

        'naprimer_launchpad':'Например: Лаунчпад площадка',
        'inovation_naprimer_22':'Например: инновационная социализированная лаунчпад площадка',


        'dorojnaya':'Дорожная карта*',
        'addres_of_cont':'Адрес контракта ',
        'vseovo_vipusheno':'Всего выпущено токенов',
        'cena_za_token':'Цена за 1 токен *',
        'dostupno_for':'Доступно для продажи токенов*',
        'tokenomics_project':'Токеномика проекта*',
        'model_postavok':'Модель поставок токена',
        'strogo':'Строго ограниченная эмиссия',
        'uslovno_ogronichenya':'Условно ограниченная эмиссия',
        'neogrichenya':'Неограниченная эмиссия',
 
        'ticker_placeholder':'Например: XPP',
        'naprimer_plat':'Например: ERC20',
        'addres_placeholder':'Введите адрес',
        'dectachya':'Десятичные',
        'vesting_project':'Вестинг проекта',
        'model_of_postavok':'Квантовая резистентность',
        'Yes':'Да',
        'no':'Нет',
        'airdrop_adres':'Airdrop проекта',

        'twiter':'Twitter* (ссылка)',
        'telegram':'Telegram* (ссылка)',
        'linkdin':'Linkedin (ссылка)',
        'medium':'Medium (ссылка)',
        'github':'Github (ссылка)',
        'youtub':'Youtube (ссылка)',
        'otpravits':'Отправить заявку',

        'vxod_login':'Вход',
        'email_login':'E-mail/Логин',
        'password_login':'Пароль',
        'sign_in_login':'Войти',
        'or_login':'Или',
        'create_account_login':'Создать аккаунт',
        'registration_login':'Регистрация',
        'login_login':'Логин',
        'enter_pasword':'Введите пароль',
        'rewrite_password':'Повторите пароль',
        'continue_login':'Продолжить',
        'upload_login':'Загрузите фото',
        'sign_up__login':'Зарегистрироваться',
        'continue_login__':'Продолжить',
        'sign_sign_up_login':'У меня есть аккаунт',
        'obshi_balanc':'Общий баланс',
        'pereutsi_v_kashelok':'Перейти в кошелек',
        'papolnits_stake':'Пополнить stake',
        'myreferals':'Мои рефералы',
        'my_silka':'Моя ссылка',
        'referal_program':'',
        'reciver_money':'Получайте 10$ за каждого приглашенного друга. Для получения вознагрождения необходимо, чтобы друг перешел по вашей реферальной ссылке и зарегистрировался на платформе Xpad.pro. При этом ваш тариф не должен быть ниже advanced',
        'my_referals':'Мои рефералы',

        'zagruzithe_v':'Загрузите в',
        'availabll_in_app':'Доступно в',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',


   
    },
} 


$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      saveLocalLang(lang);
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
        if($(this).is( "input" )){
            $(this).attr('placeholder',arrLang[$(this).data("translate")] )
            window.location.reload();
            

         }
               
      });

    });

  });

  


function saveLocalLang(language){
    let langs

    if(localStorage.getItem('langs') === null){
        langs = [];
    }else{
        langs = JSON.parse(localStorage.getItem('langs')) 
    }
    langs.push(language)
    localStorage.setItem('langs', JSON.stringify(langs))


}



function getLocalLang(){
    let langs

    if(localStorage.getItem('langs') === null){
        langs=[]
    }else{
        langs = JSON.parse(localStorage.getItem('langs'))
    }
 
    langs.forEach(function(language){
        let lang = langs[langs.length - 1 ];
        setTimeout(()=>{
            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
                if($(this).is( "input" )){
                    $(this).text(arrLang[lang][$(this).attr('placeholder')] )
                    set_lang(arrLang[lang]);
                }
              
              
              });
 
        }, 0);

  
       
    });

    
    var set_lang = function (arrLang) {
        $("[data-translate]").each(function(){
           if($(this).is( "input" )){
              $(this).attr('placeholder',arrLang[$(this).data("translate")] )
            
              
 
           }


         if($(this).is( "textarea")){
            $(this).attr('placeholder',arrLang[$(this).data("translate")] )
            

         }
        
        })
    };



   // Swap languages when menu changes

    
    // Set initial language to English

    
       
}


/*

function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());

*/

