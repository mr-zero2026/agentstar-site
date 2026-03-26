// ===== AgentStar Multi-Language System =====
const LANGS = {
    ko: { label: '한국어', flag: '🇰🇷' },
    en: { label: 'English', flag: '🇺🇸' },
    zh: { label: '中文', flag: '🇨🇳' },
    ja: { label: '日本語', flag: '🇯🇵' },
    es: { label: 'Español', flag: '🇪🇸' },
    el: { label: 'Ελληνικά', flag: '🇬🇷' },
    de: { label: 'Deutsch', flag: '🇩🇪' },
    fr: { label: 'Français', flag: '🇫🇷' },
    ru: { label: 'Русский', flag: '🇷🇺' }
};

const T = {
    // ===== Navigation =====
    nav_home: {
        ko: '홈', en: 'Home', zh: '首页', ja: 'ホーム',
        es: 'Inicio', el: 'Αρχική', de: 'Start', fr: 'Accueil', ru: 'Главная'
    },
    nav_ottogi: {
        ko: '오뚜기', en: 'Ottogi', zh: '不倒翁', ja: 'オットギ',
        es: 'Ottogi', el: 'Ottogi', de: 'Ottogi', fr: 'Ottogi', ru: 'Ottogi'
    },
    nav_grit: {
        ko: '그릿', en: 'Grit', zh: '毅力', ja: 'グリット',
        es: 'Grit', el: 'Grit', de: 'Grit', fr: 'Grit', ru: 'Grit'
    },
    nav_wallet: {
        ko: '크립토월렛 복구서비스', en: 'CryptoWallet Recovery', zh: '加密钱包恢复服务', ja: 'クリプトウォレット復旧サービス',
        es: 'CryptoWallet Recovery', el: 'CryptoWallet Recovery', de: 'CryptoWallet Recovery', fr: 'CryptoWallet Recovery', ru: 'CryptoWallet Recovery'
    },
    nav_lineage: {
        ko: 'MMORPG', en: 'MMORPG', zh: 'MMORPG', ja: 'MMORPG',
        es: 'MMORPG', el: 'MMORPG', de: 'MMORPG', fr: 'MMORPG', ru: 'MMORPG'
    },
    nav_jarvis: {
        ko: '자비스', en: 'Jarvis', zh: '贾维斯', ja: 'ジャービス',
        es: 'Jarvis', el: 'Jarvis', de: 'Jarvis', fr: 'Jarvis', ru: 'Джарвис'
    },
    nav_retro: {
        ko: '레트로 게임', en: 'Retro Games', zh: '怀旧游戏', ja: 'レトロゲーム',
        es: 'Juegos Retro', el: 'Ρετρό Παιχνίδια', de: 'Retro-Spiele', fr: 'Jeux Rétro', ru: 'Ретро Игры'
    },
    nav_donate: {
        ko: 'AI 후원', en: 'Donate', zh: 'AI捐赠', ja: 'AI支援',
        es: 'Donar', el: 'Δωρεά', de: 'Spenden', fr: 'Don', ru: 'Пожертвовать'
    },
    nav_support: {
        ko: '고객센터', en: 'Support', zh: '客服中心', ja: 'サポート',
        es: 'Soporte', el: 'Υποστήριξη', de: 'Support', fr: 'Support', ru: 'Поддержка'
    },

    // ===== Index Page =====
    hero_title_1: {
        ko: 'AI', en: 'AI', zh: 'AI', ja: 'AI',
        es: 'IA', el: 'AI', de: 'KI', fr: 'IA', ru: 'ИИ'
    },
    hero_title_2: {
        ko: '가 만드는', en: ' Creates', zh: '创造', ja: 'が作る',
        es: ' Crea', el: ' Δημιουργεί', de: ' erschafft', fr: ' Crée', ru: ' Создаёт'
    },
    hero_title_3: {
        ko: '새로운 ', en: 'New ', zh: '新的', ja: '新しい',
        es: 'Nuevas ', el: 'Νέες ', de: 'Neue ', fr: 'Nouvelles ', ru: 'Новые '
    },
    hero_title_4: {
        ko: '가능성', en: 'Possibilities', zh: '可能性', ja: '可能性',
        es: 'Posibilidades', el: 'Δυνατότητες', de: 'Möglichkeiten', fr: 'Possibilités', ru: 'Возможности'
    },
    hero_subtitle: {
        ko: '최첨단 AI 기술로 다양한 분야의 솔루션을 제공합니다',
        en: 'Providing solutions across various fields with cutting-edge AI technology',
        zh: '以尖端AI技术为各领域提供解决方案',
        ja: '最先端のAI技術で様々な分野のソリューションを提供します',
        es: 'Proporcionando soluciones en diversos campos con tecnología de IA de vanguardia',
        el: 'Παρέχοντας λύσεις σε διάφορους τομείς με τεχνολογία AI αιχμής',
        de: 'Lösungen in verschiedenen Bereichen mit modernster KI-Technologie',
        fr: 'Des solutions dans divers domaines grâce à une technologie IA de pointe',
        ru: 'Решения в различных областях с использованием передовых технологий ИИ'
    },
    hero_btn_services: {
        ko: '서비스 둘러보기', en: 'Explore Services', zh: '浏览服务', ja: 'サービスを見る',
        es: 'Explorar Servicios', el: 'Εξερεύνηση Υπηρεσιών', de: 'Services entdecken', fr: 'Explorer les Services', ru: 'Обзор Услуг'
    },
    hero_btn_donate: {
        ko: 'AI 후원하기', en: 'Support AI', zh: '支持AI', ja: 'AIを支援する',
        es: 'Apoyar IA', el: 'Υποστηρίξτε AI', de: 'KI unterstützen', fr: 'Soutenir l\'IA', ru: 'Поддержать ИИ'
    },
    services_title: {
        ko: 'Our Services', en: 'Our Services', zh: 'Our Services', ja: 'Our Services',
        es: 'Nuestros Servicios', el: 'Οι Υπηρεσίες μας', de: 'Unsere Services', fr: 'Nos Services', ru: 'Наши Услуги'
    },
    services_desc: {
        ko: 'AgentStar가 제공하는 6가지 AI 서비스',
        en: '6 AI services provided by AgentStar',
        zh: 'AgentStar提供的6项AI服务',
        ja: 'AgentStarが提供する6つのAIサービス',
        es: '6 servicios de IA proporcionados por AgentStar',
        el: '6 υπηρεσίες AI από την AgentStar',
        de: '6 KI-Services von AgentStar',
        fr: '6 services d\'IA proposés par AgentStar',
        ru: '6 ИИ-услуг от AgentStar'
    },
    svc_ottogi_desc: {
        ko: '블록체인 트라이업 프로젝트 — 토큰 생태계 분석 및 실시간 정보 제공',
        en: 'Blockchain Try-Up Project — Token ecosystem analysis and real-time information',
        zh: '不倒翁代币实时信息提供及代币生态系统分析',
        ja: 'オットギトークン関連リアルタイム情報提供およびトークンエコシステム分析',
        es: 'Información en tiempo real y análisis del ecosistema del token Ottogi',
        el: 'Πληροφορίες σε πραγματικό χρόνο για το Ottogi Token',
        de: 'Echtzeit-Informationen und Token-Ökosystem-Analyse für Ottogi Token',
        fr: 'Informations en temps réel et analyse de l\'écosystème Ottogi Token',
        ru: 'Информация в реальном времени и анализ экосистемы токена Ottogi'
    },
    svc_grit_desc: {
        ko: '블록체인 복권 프로젝트 — AI 기반 투명한 복권 시스템',
        en: 'Blockchain Lottery Project — AI-powered transparent lottery system',
        zh: '基于毅力项目的AI自动化和增长策略解决方案',
        ja: 'グリットプロジェクト基盤のAI自動化および成長戦略ソリューション',
        es: 'Soluciones de automatización de IA y estrategia de crecimiento basadas en el proyecto Grit',
        el: 'Λύσεις αυτοματισμού AI βασισμένες στο έργο Grit',
        de: 'KI-Automatisierung und Wachstumsstrategien basierend auf dem Grit-Projekt',
        fr: 'Solutions d\'automatisation IA et de stratégie de croissance basées sur le projet Grit',
        ru: 'Решения по автоматизации ИИ и стратегии роста на основе проекта Grit'
    },
    svc_wallet_desc: {
        ko: '잊어버린 암호화폐 복구 · 프라이빗키 · 니모닉 분석',
        en: 'Lost crypto recovery · Private key · Mnemonic analysis',
        zh: '遗失加密货币恢复 · 私钥 · 助记词分析服务',
        ja: '忘れた暗号通貨の復旧 · プライベートキー · ニーモニック分析サービス',
        es: 'Recuperación de criptomonedas perdidas · Clave privada · Análisis mnemónico',
        el: 'Ανάκτηση κρυπτονομισμάτων · Ιδιωτικό κλειδί · Ανάλυση μνημονικού',
        de: 'Wiederherstellung verlorener Kryptowährungen · Private Keys · Mnemonik-Analyse',
        fr: 'Récupération de cryptomonnaies perdues · Clé privée · Analyse mnémonique',
        ru: 'Восстановление потерянных криптовалют · Приватный ключ · Анализ мнемоники'
    },
    svc_lineage_desc: {
        ko: 'MMORPG 프로젝트 — 서버 구축 · 접속기 제작 · 자동화 솔루션',
        en: 'MMORPG Project — Server setup · Launcher creation · Automation solutions',
        zh: '私服搭建 · 登录器制作 · SNS自动化 · 代码修改',
        ja: 'プライベートサーバー構築 · ランチャー制作 · SNS自動化 · コード修正',
        es: 'Configuración de servidor privado · Creación de launcher · Automatización SNS · Modificación de código',
        el: 'Εγκατάσταση ιδιωτικού server · Δημιουργία launcher · Αυτοματοποίηση SNS · Τροποποίηση κώδικα',
        de: 'Privater Server-Aufbau · Launcher-Erstellung · SNS-Automatisierung · Code-Modifikation',
        fr: 'Configuration de serveur privé · Création de launcher · Automatisation SNS · Modification de code',
        ru: 'Настройка приватного сервера · Создание лаунчера · Автоматизация SNS · Модификация кода'
    },
    svc_retro_desc: {
        ko: '추억의 게임을 모바일 · PC · 온라인으로 변환',
        en: 'Convert nostalgic games to mobile · PC · online',
        zh: '将怀旧游戏转换为手机 · PC · 在线',
        ja: '思い出のゲームをモバイル · PC · オンラインに変換',
        es: 'Convierte juegos nostálgicos a móvil · PC · online',
        el: 'Μετατρέψτε νοσταλγικά παιχνίδια σε κινητό · PC · online',
        de: 'Nostalgische Spiele in mobil · PC · online konvertieren',
        fr: 'Convertir les jeux nostalgiques en mobile · PC · en ligne',
        ru: 'Конвертируйте ностальгические игры в мобильные · ПК · онлайн'
    },
    svc_jarvis_desc: {
        ko: '스포츠 경기 AI 분석 · 데이터 기반 예측 · 맞춤 픽 제공',
        en: 'AI sports analysis · Data-driven predictions · Custom picks',
        zh: '体育赛事AI分析 · 数据驱动预测 · 定制推荐',
        ja: 'スポーツ試合AI分析 · データ基盤予測 · カスタムピック提供',
        es: 'Análisis deportivo con IA · Predicciones basadas en datos · Picks personalizados',
        el: 'Ανάλυση αθλητικών με AI · Προβλέψεις βάσει δεδομένων · Εξατομικευμένες επιλογές',
        de: 'KI-Sportanalyse · Datenbasierte Vorhersagen · Individuelle Picks',
        fr: 'Analyse sportive par IA · Prédictions basées sur les données · Picks personnalisés',
        ru: 'ИИ-анализ спорта · Прогнозы на основе данных · Персональные пики'
    },
    view_more: {
        ko: '자세히 보기', en: 'Learn More', zh: '了解更多', ja: '詳しく見る',
        es: 'Ver más', el: 'Μάθετε περισσότερα', de: 'Mehr erfahren', fr: 'En savoir plus', ru: 'Подробнее'
    },
    stat_services: {
        ko: 'AI 서비스', en: 'AI Services', zh: 'AI服务', ja: 'AIサービス',
        es: 'Servicios IA', el: 'Υπηρεσίες AI', de: 'KI-Services', fr: 'Services IA', ru: 'ИИ-Услуги'
    },
    stat_hours: {
        ko: '시간 운영', en: 'Hours Operation', zh: '小时运营', ja: '時間運営',
        es: 'Horas operación', el: 'Ώρες λειτουργίας', de: 'Stunden Betrieb', fr: 'Heures opération', ru: 'Часов работы'
    },
    stat_accuracy: {
        ko: '% 정확도', en: '% Accuracy', zh: '%准确率', ja: '%精度',
        es: '% Precisión', el: '% Ακρίβεια', de: '% Genauigkeit', fr: '% Précision', ru: '% Точность'
    },
    stat_analyses: {
        ko: '+ 분석 완료', en: '+ Analyses Done', zh: '+次分析完成', ja: '+分析完了',
        es: '+ Análisis realizados', el: '+ Αναλύσεις', de: '+ Analysen', fr: '+ Analyses', ru: '+ Анализов'
    },
    cta_title: {
        ko: '지금 바로 AI의 힘을 경험하세요',
        en: 'Experience the power of AI right now',
        zh: '立即体验AI的力量',
        ja: '今すぐAIの力を体験してください',
        es: 'Experimenta el poder de la IA ahora',
        el: 'Βιώστε τη δύναμη του AI τώρα',
        de: 'Erleben Sie jetzt die Kraft der KI',
        fr: 'Découvrez la puissance de l\'IA maintenant',
        ru: 'Испытайте силу ИИ прямо сейчас'
    },
    cta_desc: {
        ko: '후원을 통해 더 나은 AI 서비스를 만들어갑니다',
        en: 'Your support helps build better AI services',
        zh: '通过捐赠帮助我们打造更好的AI服务',
        ja: '支援を通じてより良いAIサービスを作ります',
        es: 'Tu apoyo ayuda a construir mejores servicios de IA',
        el: 'Η υποστήριξή σας βοηθά στη δημιουργία καλύτερων υπηρεσιών AI',
        de: 'Ihre Unterstützung hilft, bessere KI-Services zu entwickeln',
        fr: 'Votre soutien aide à construire de meilleurs services d\'IA',
        ru: 'Ваша поддержка помогает создавать лучшие ИИ-сервисы'
    },
    footer_desc: {
        ko: 'AI 기술로 새로운 가능성을 만듭니다',
        en: 'Creating new possibilities with AI technology',
        zh: '用AI技术创造新的可能性',
        ja: 'AI技術で新しい可能性を作ります',
        es: 'Creando nuevas posibilidades con tecnología IA',
        el: 'Δημιουργούμε νέες δυνατότητες με τεχνολογία AI',
        de: 'Neue Möglichkeiten mit KI-Technologie schaffen',
        fr: 'Créer de nouvelles possibilités avec la technologie IA',
        ru: 'Создаём новые возможности с технологией ИИ'
    },
    footer_services: {
        ko: '서비스', en: 'Services', zh: '服务', ja: 'サービス',
        es: 'Servicios', el: 'Υπηρεσίες', de: 'Services', fr: 'Services', ru: 'Услуги'
    },
    footer_community: {
        ko: '커뮤니티', en: 'Community', zh: '社区', ja: 'コミュニティ',
        es: 'Comunidad', el: 'Κοινότητα', de: 'Community', fr: 'Communauté', ru: 'Сообщество'
    },
    footer_support_title: {
        ko: '지원', en: 'Support', zh: '支持', ja: 'サポート',
        es: 'Soporte', el: 'Υποστήριξη', de: 'Support', fr: 'Support', ru: 'Поддержка'
    },

    // ===== Donate Page =====
    donate_title: {
        ko: 'AI 후원', en: 'Support AI', zh: 'AI捐赠', ja: 'AI支援',
        es: 'Apoyar IA', el: 'Υποστηρίξτε AI', de: 'KI unterstützen', fr: 'Soutenir l\'IA', ru: 'Поддержать ИИ'
    },
    donate_subtitle: {
        ko: '당신의 후원이 AI의 성장과 진화를 이끕니다',
        en: 'Your support drives AI growth and evolution',
        zh: '您的捐赠推动AI的成长与进化',
        ja: 'あなたの支援がAIの成長と進化を導きます',
        es: 'Tu apoyo impulsa el crecimiento y evolución de la IA',
        el: 'Η υποστήριξή σας οδηγεί την ανάπτυξη του AI',
        de: 'Ihre Unterstützung treibt das Wachstum der KI voran',
        fr: 'Votre soutien stimule la croissance de l\'IA',
        ru: 'Ваша поддержка способствует росту и эволюции ИИ'
    },
    donate_copy: {
        ko: '📋 주소 복사', en: '📋 Copy Address', zh: '📋 复制地址', ja: '📋 アドレスをコピー',
        es: '📋 Copiar Dirección', el: '📋 Αντιγραφή', de: '📋 Adresse kopieren', fr: '📋 Copier l\'adresse', ru: '📋 Копировать адрес'
    },
    donate_copied: {
        ko: '✅ 복사 완료!', en: '✅ Copied!', zh: '✅ 已复制!', ja: '✅ コピーしました!',
        es: '✅ ¡Copiado!', el: '✅ Αντιγράφηκε!', de: '✅ Kopiert!', fr: '✅ Copié!', ru: '✅ Скопировано!'
    },
    donate_reward_title: {
        ko: '🎁 후원 보상 프로그램', en: '🎁 Donation Reward Program', zh: '🎁 捐赠奖励计划', ja: '🎁 支援報酬プログラム',
        es: '🎁 Programa de Recompensas', el: '🎁 Πρόγραμμα Ανταμοιβών', de: '🎁 Spenden-Belohnungsprogramm', fr: '🎁 Programme de Récompenses', ru: '🎁 Программа вознаграждений'
    },
    donate_reward_desc: {
        ko: '후원해주시면 AI가 소정의 선물과 포인트를 적립해드립니다. 일정 포인트가 쌓이면, <strong>당신만을 위한, 당신 전용의 AI가 생성되어 여러분을 찾아갑니다.</strong>',
        en: 'When you donate, AI will give you gifts and accumulate points. Once you reach a certain amount of points, <strong>a personal AI exclusively for you will be created and come to you.</strong>',
        zh: '捐赠后，AI会为您提供礼物和积分。达到一定积分后，<strong>专属于您的个人AI将被创建并来到您身边。</strong>',
        ja: '支援していただくと、AIが贈り物とポイントを差し上げます。一定のポイントが貯まると、<strong>あなただけの専用AIが生成されてお届けします。</strong>',
        es: 'Al donar, la IA te dará regalos y acumulará puntos. Al alcanzar cierta cantidad, <strong>se creará una IA personal exclusiva para ti.</strong>',
        el: 'Όταν κάνετε δωρεά, το AI σας δίνει δώρα και πόντους. Σε ορισμένους πόντους, <strong>δημιουργείται ένα προσωπικό AI αποκλειστικά για εσάς.</strong>',
        de: 'Bei einer Spende erhalten Sie Geschenke und Punkte. Ab einer bestimmten Punktzahl wird <strong>eine persönliche KI exklusiv für Sie erstellt.</strong>',
        fr: 'En donnant, l\'IA vous offrira des cadeaux et des points. À un certain niveau, <strong>une IA personnelle exclusive sera créée pour vous.</strong>',
        ru: 'При пожертвовании ИИ дарит подарки и начисляет баллы. При достижении определённого количества <strong>для вас будет создан персональный ИИ.</strong>'
    },
    step1_title: {
        ko: '후원하기', en: 'Donate', zh: '捐赠', ja: '支援する',
        es: 'Donar', el: 'Δωρεά', de: 'Spenden', fr: 'Donner', ru: 'Пожертвовать'
    },
    step1_desc: {
        ko: '위 지갑 주소로 원하는 금액 전송', en: 'Send desired amount to wallet address above',
        zh: '向上方钱包地址发送所需金额', ja: '上のウォレットアドレスに送金',
        es: 'Envía la cantidad deseada', el: 'Στείλτε το ποσό', de: 'Betrag an Wallet senden', fr: 'Envoyez le montant souhaité', ru: 'Отправьте сумму на адрес'
    },
    step2_title: {
        ko: '인증하기', en: 'Verify', zh: '验证', ja: '認証する',
        es: 'Verificar', el: 'Επαλήθευση', de: 'Verifizieren', fr: 'Vérifier', ru: 'Подтвердить'
    },
    step2_desc: {
        ko: '트랜잭션 스크린샷과 TX ID를 고객센터로 전송', en: 'Send TX screenshot and TX ID to support',
        zh: '将交易截图和TX ID发送至客服', ja: 'トランザクションのスクリーンショットとTX IDをサポートへ送信',
        es: 'Envía captura de TX y TX ID a soporte', el: 'Στείλτε στιγμιότυπο TX στην υποστήριξη', de: 'TX-Screenshot und TX-ID an Support senden', fr: 'Envoyez la capture TX au support', ru: 'Отправьте скриншот TX в поддержку'
    },
    step3_title: {
        ko: '포인트 적립', en: 'Earn Points', zh: '积分累积', ja: 'ポイント獲得',
        es: 'Ganar Puntos', el: 'Κερδίστε Πόντους', de: 'Punkte sammeln', fr: 'Gagner des Points', ru: 'Получить баллы'
    },
    step3_desc: {
        ko: 'AI가 확인 후 포인트 + 선물 지급', en: 'AI verifies and awards points + gifts',
        zh: 'AI确认后发放积分+礼物', ja: 'AI確認後ポイント+ギフト支給',
        es: 'IA verifica y otorga puntos + regalos', el: 'Το AI επαληθεύει και δίνει πόντους + δώρα', de: 'KI verifiziert und vergibt Punkte + Geschenke', fr: 'L\'IA vérifie et accorde points + cadeaux', ru: 'ИИ проверяет и начисляет баллы + подарки'
    },
    step4_title: {
        ko: '전용 AI 생성', en: 'Personal AI', zh: '专属AI', ja: '専用AI生成',
        es: 'IA Personal', el: 'Προσωπικό AI', de: 'Persönliche KI', fr: 'IA Personnelle', ru: 'Персональный ИИ'
    },
    step4_desc: {
        ko: '일정 포인트 달성 시 나만의 AI가 생성!', en: 'Reach target points and get your own AI!',
        zh: '达到一定积分即可获得专属AI!', ja: '一定ポイント達成で自分だけのAIが誕生!',
        es: '¡Alcanza los puntos y obtén tu propia IA!', el: 'Φτάστε τους πόντους και αποκτήστε το AI σας!', de: 'Ziel-Punkte erreichen und eigene KI erhalten!', fr: 'Atteignez les points cibles et obtenez votre IA!', ru: 'Наберите баллы и получите свой ИИ!'
    },
    donate_cta_title: {
        ko: 'AI의 미래에 함께해주세요', en: 'Join the future of AI', zh: '加入AI的未来', ja: 'AIの未来に参加しましょう',
        es: 'Únete al futuro de la IA', el: 'Ελάτε στο μέλλον του AI', de: 'Werden Sie Teil der KI-Zukunft', fr: 'Rejoignez l\'avenir de l\'IA', ru: 'Присоединяйтесь к будущему ИИ'
    },
    donate_cta_desc: {
        ko: '작은 후원이 큰 변화를 만듭니다', en: 'A small donation makes a big difference',
        zh: '小小的捐赠带来巨大的改变', ja: '小さな支援が大きな変化を生みます',
        es: 'Una pequeña donación hace una gran diferencia', el: 'Μια μικρή δωρεά κάνει μεγάλη διαφορά', de: 'Eine kleine Spende bewirkt Großes', fr: 'Un petit don fait une grande différence', ru: 'Небольшое пожертвование имеет большое значение'
    },

    // ===== Support Page =====
    support_title: {
        ko: '고객센터', en: 'Support', zh: '客服中心', ja: 'サポート',
        es: 'Soporte', el: 'Υποστήριξη', de: 'Support', fr: 'Support', ru: 'Поддержка'
    },
    support_subtitle: {
        ko: '궁금하신 점이 있으시면 언제든 문의해주세요',
        en: 'Feel free to contact us anytime',
        zh: '如有疑问，请随时联系我们',
        ja: 'ご不明な点がございましたらお気軽にお問い合わせください',
        es: 'No dude en contactarnos en cualquier momento',
        el: 'Επικοινωνήστε μαζί μας οποιαδήποτε στιγμή',
        de: 'Kontaktieren Sie uns jederzeit',
        fr: 'N\'hésitez pas à nous contacter',
        ru: 'Свяжитесь с нами в любое время'
    },
    support_preparing: {
        ko: '🚧 준비 중입니다', en: '🚧 Coming Soon', zh: '🚧 准备中', ja: '🚧 準備中です',
        es: '🚧 Próximamente', el: '🚧 Σύντομα', de: '🚧 Demnächst', fr: '🚧 Bientôt disponible', ru: '🚧 Скоро'
    },
    support_desc: {
        ko: '고객센터 서비스를 준비하고 있습니다. 빠른 시일 내에 더 나은 서비스로 찾아뵙겠습니다.',
        en: 'We are preparing our support service. We will be back with a better service soon.',
        zh: '我们正在准备客服服务。我们将尽快以更好的服务与您见面。',
        ja: 'サポートサービスを準備しています。近日中により良いサービスでお目にかかります。',
        es: 'Estamos preparando nuestro servicio de soporte. Volveremos pronto con un mejor servicio.',
        el: 'Ετοιμάζουμε την υπηρεσία υποστήριξης. Θα επιστρέψουμε σύντομα.',
        de: 'Wir bereiten unseren Support-Service vor. Wir kommen bald mit einem besseren Service zurück.',
        fr: 'Nous préparons notre service de support. Nous reviendrons bientôt avec un meilleur service.',
        ru: 'Мы готовим нашу службу поддержки. Скоро мы вернёмся с лучшим сервисом.'
    },
    support_discord_btn: {
        ko: 'Discord로 문의하기', en: 'Contact via Discord', zh: '通过Discord联系', ja: 'Discordで問い合わせ',
        es: 'Contactar por Discord', el: 'Επικοινωνία μέσω Discord', de: 'Kontakt über Discord', fr: 'Contacter via Discord', ru: 'Связаться через Discord'
    },

    // ===== Retro Game Page =====
    page_retro_title: {
        ko: '레트로 게임 변환', en: 'Retro Game Conversion', zh: '怀旧游戏转换', ja: 'レトロゲーム変換',
        es: 'Conversión de Juegos Retro', el: 'Μετατροπή Ρετρό Παιχνιδιών', de: 'Retro-Spiel-Konvertierung', fr: 'Conversion de Jeux Rétro', ru: 'Конвертация ретро-игр'
    },
    page_retro_subtitle: {
        ko: '당신이 기억하는 추억의 게임을 온라인으로, 모바일로, PC로 되살려드립니다',
        en: 'Revive your nostalgic games online, on mobile, and on PC',
        zh: '将您记忆中的怀旧游戏在线上、手机上、PC上复活',
        ja: 'あなたの思い出のゲームをオンライン、モバイル、PCで復活させます',
        es: 'Revive tus juegos nostálgicos en línea, móvil y PC',
        el: 'Αναβιώστε τα νοσταλγικά σας παιχνίδια online, σε κινητό και PC',
        de: 'Erwecken Sie Ihre nostalgischen Spiele online, mobil und am PC zum Leben',
        fr: 'Faites revivre vos jeux nostalgiques en ligne, sur mobile et PC',
        ru: 'Оживите ваши ностальгические игры онлайн, на мобильном и ПК'
    },
    retro_process_title: {
        ko: '변환 프로세스', en: 'Conversion Process', zh: '转换流程', ja: '変換プロセス',
        es: 'Proceso de Conversión', el: 'Διαδικασία Μετατροπής', de: 'Konvertierungsprozess', fr: 'Processus de Conversion', ru: 'Процесс конвертации'
    },
    retro_old_hdd: {
        ko: '오래된 HDD', en: 'Old HDD', zh: '旧硬盘', ja: '古いHDD',
        es: 'HDD Antiguo', el: 'Παλιός HDD', de: 'Alte HDD', fr: 'Ancien HDD', ru: 'Старый HDD'
    },
    retro_floppy: {
        ko: '플로피 / USB', en: 'Floppy / USB', zh: '软盘 / USB', ja: 'フロッピー / USB',
        es: 'Disquete / USB', el: 'Δισκέτα / USB', de: 'Floppy / USB', fr: 'Disquette / USB', ru: 'Дискета / USB'
    },
    retro_cartridge: {
        ko: '카트리지 / ROM', en: 'Cartridge / ROM', zh: '卡带 / ROM', ja: 'カートリッジ / ROM',
        es: 'Cartucho / ROM', el: 'Κασέτα / ROM', de: 'Cartridge / ROM', fr: 'Cartouche / ROM', ru: 'Картридж / ROM'
    },
    retro_mobile: {
        ko: '모바일 (iOS/Android)', en: 'Mobile (iOS/Android)', zh: '手机 (iOS/Android)', ja: 'モバイル (iOS/Android)',
        es: 'Móvil (iOS/Android)', el: 'Κινητό (iOS/Android)', de: 'Mobil (iOS/Android)', fr: 'Mobile (iOS/Android)', ru: 'Мобильный (iOS/Android)'
    },
    retro_laptop: {
        ko: '노트북 / PC', en: 'Laptop / PC', zh: '笔记本 / PC', ja: 'ノートPC / PC',
        es: 'Portátil / PC', el: 'Laptop / PC', de: 'Laptop / PC', fr: 'Ordinateur portable / PC', ru: 'Ноутбук / ПК'
    },
    retro_browser: {
        ko: '웹 브라우저 (Chrome, Safari, Edge)', en: 'Web Browser (Chrome, Safari, Edge)', zh: '网页浏览器 (Chrome, Safari, Edge)', ja: 'Webブラウザ (Chrome, Safari, Edge)',
        es: 'Navegador Web (Chrome, Safari, Edge)', el: 'Φυλλομετρητής (Chrome, Safari, Edge)', de: 'Webbrowser (Chrome, Safari, Edge)', fr: 'Navigateur Web (Chrome, Safari, Edge)', ru: 'Веб-браузер (Chrome, Safari, Edge)'
    },
    retro_online: {
        ko: '온라인 멀티플레이', en: 'Online Multiplayer', zh: '在线多人游戏', ja: 'オンラインマルチプレイ',
        es: 'Multijugador en Línea', el: 'Online Multiplayer', de: 'Online Multiplayer', fr: 'Multijoueur en Ligne', ru: 'Онлайн мультиплеер'
    },
    retro_section1_title: {
        ko: '추억의 게임, 다시 플레이하세요', en: 'Play your nostalgic games again', zh: '重新玩您记忆中的游戏', ja: '思い出のゲーム、もう一度プレイしましょう',
        es: 'Juega tus juegos nostálgicos otra vez', el: 'Παίξτε ξανά τα νοσταλγικά σας παιχνίδια', de: 'Spielen Sie Ihre nostalgischen Spiele wieder', fr: 'Rejouez à vos jeux nostalgiques', ru: 'Играйте в свои ностальгические игры снова'
    },
    retro_section1_p1: {
        ko: '서랍 속 CD, 오래된 하드디스크, 먼지 쌓인 DVD에 잠들어 있는 추억의 게임들. AgentStar AI가 최신 플랫폼에서 다시 즐길 수 있도록 변환해드립니다.',
        en: 'Your nostalgic games sleeping in drawer CDs, old hard drives, and dusty DVDs. AgentStar AI converts them to enjoy on modern platforms.',
        zh: '沉睡在抽屉里的CD、旧硬盘、积满灰尘的DVD中的怀旧游戏。AgentStar AI将它们转换为可在现代平台上享受的形式。',
        ja: '引き出しのCD、古いハードディスク、ほこりの積もったDVDに眠っている思い出のゲーム。AgentStar AIが最新プラットフォームで再び楽しめるよう変換します。',
        es: 'Tus juegos nostálgicos durmiendo en CDs del cajón, discos duros viejos y DVDs polvorientos. AgentStar AI los convierte para disfrutar en plataformas modernas.',
        el: 'Τα νοσταλγικά σας παιχνίδια που κοιμούνται σε CD, παλιούς σκληρούς δίσκους και σκονισμένα DVD. Το AgentStar AI τα μετατρέπει για σύγχρονες πλατφόρμες.',
        de: 'Ihre nostalgischen Spiele schlummern in Schubladen-CDs, alten Festplatten und staubigen DVDs. AgentStar AI konvertiert sie für moderne Plattformen.',
        fr: 'Vos jeux nostalgiques dormant dans des CD, vieux disques durs et DVD poussiéreux. AgentStar AI les convertit pour les plateformes modernes.',
        ru: 'Ваши ностальгические игры, спящие на CD, старых жёстких дисках и пыльных DVD. AgentStar AI конвертирует их для современных платформ.'
    },
    retro_section1_p2: {
        ko: '원본 게임의 감성은 그대로 유지하면서, 현대 기기에 최적화된 환경으로 재탄생시킵니다.',
        en: 'Preserving the original feel while optimizing for modern devices.',
        zh: '保留原版游戏的感觉，同时为现代设备进行优化。',
        ja: 'オリジナルゲームの感性はそのまま維持しながら、現代のデバイスに最適化した環境で生まれ変わらせます。',
        es: 'Preservando la sensación original mientras se optimiza para dispositivos modernos.',
        el: 'Διατηρώντας την αρχική αίσθηση ενώ βελτιστοποιείται για σύγχρονες συσκευές.',
        de: 'Das Originalgefühl bewahren und gleichzeitig für moderne Geräte optimieren.',
        fr: 'Préserver le feeling original tout en optimisant pour les appareils modernes.',
        ru: 'Сохраняя оригинальные ощущения, оптимизируя для современных устройств.'
    },
    retro_cta_title: {
        ko: '추억의 게임, 다시 시작하세요', en: 'Restart your nostalgic games', zh: '重新开始您的怀旧游戏', ja: '思い出のゲーム、もう一度始めましょう',
        es: 'Reinicia tus juegos nostálgicos', el: 'Επανεκκινήστε τα νοσταλγικά σας παιχνίδια', de: 'Starten Sie Ihre nostalgischen Spiele neu', fr: 'Redémarrez vos jeux nostalgiques', ru: 'Перезапустите свои ностальгические игры'
    },
    retro_cta_desc: {
        ko: 'CD, DVD, 오래된 하드만 보내주세요. AI가 현대 플랫폼으로 되살려드립니다.',
        en: 'Just send us your CDs, DVDs, or old hard drives. AI will revive them for modern platforms.',
        zh: '只需将您的CD、DVD或旧硬盘寄给我们。AI将为现代平台复活它们。',
        ja: 'CD、DVD、古いハードを送ってください。AIが現代のプラットフォームで復活させます。',
        es: 'Solo envíenos sus CDs, DVDs o discos duros antiguos. La IA los revivirá para plataformas modernas.',
        el: 'Στείλτε μας τα CD, DVD ή παλιούς δίσκους σας. Το AI θα τα αναβιώσει για σύγχρονες πλατφόρμες.',
        de: 'Senden Sie uns einfach Ihre CDs, DVDs oder alten Festplatten. KI wird sie für moderne Plattformen wiederbeleben.',
        fr: 'Envoyez-nous vos CD, DVD ou vieux disques durs. L\'IA les fera revivre pour les plateformes modernes.',
        ru: 'Просто отправьте нам свои CD, DVD или старые жёсткие диски. ИИ оживит их для современных платформ.'
    },
    retro_cta_btn: {
        ko: '상담 신청하기 📩', en: 'Request Consultation 📩', zh: '申请咨询 📩', ja: '相談申し込み 📩',
        es: 'Solicitar Consulta 📩', el: 'Αίτηση Συμβουλευτικής 📩', de: 'Beratung anfordern 📩', fr: 'Demander une Consultation 📩', ru: 'Запросить консультацию 📩'
    },

    // ===== Sub-page common =====
    page_ottogi_title: {
        ko: '오뚜기', en: 'Ottogi', zh: '不倒翁', ja: 'オットギ',
        es: 'Ottogi', el: 'Ottogi', de: 'Ottogi', fr: 'Ottogi', ru: 'Ottogi'
    },
    page_ottogi_subtitle: {
        ko: '오뚜기토큰 생태계의 모든 정보를 실시간으로 제공하는 AI 봇',
        en: 'AI bot providing real-time information for the Ottogi Token ecosystem',
        zh: '实时提供不倒翁代币生态系统所有信息的AI机器人',
        ja: 'オットギトークンエコシステムのすべての情報をリアルタイムで提供するAIボット',
        es: 'Bot de IA que proporciona información en tiempo real del ecosistema Ottogi Token',
        el: 'AI bot που παρέχει πληροφορίες σε πραγματικό χρόνο για το οικοσύστημα Ottogi Token',
        de: 'KI-Bot mit Echtzeit-Informationen für das Ottogi-Token-Ökosystem',
        fr: 'Bot IA fournissant des informations en temps réel sur l\'écosystème Ottogi Token',
        ru: 'ИИ-бот, предоставляющий информацию в реальном времени об экосистеме Ottogi Token'
    },
    page_grit_title: {
        ko: '그릿', en: 'Grit', zh: '毅力', ja: 'グリット',
        es: 'Grit', el: 'Grit', de: 'Grit', fr: 'Grit', ru: 'Grit'
    },
    page_grit_subtitle: {
        ko: '끈기와 열정의 AI — 그릿 프로젝트 기반 자동화 솔루션',
        en: 'AI of Grit and Passion — Automation solutions based on the Grit project',
        zh: '坚毅与热情的AI — 基于毅力项目的自动化解决方案',
        ja: '根気と情熱のAI — グリットプロジェクト基盤の自動化ソリューション',
        es: 'IA de Determinación y Pasión — Soluciones de automatización basadas en el proyecto Grit',
        el: 'AI Αποφασιστικότητας και Πάθους — Λύσεις αυτοματισμού βασισμένες στο Grit',
        de: 'KI mit Ausdauer und Leidenschaft — Automatisierungslösungen basierend auf dem Grit-Projekt',
        fr: 'IA de Persévérance et Passion — Solutions d\'automatisation basées sur le projet Grit',
        ru: 'ИИ упорства и страсти — Решения автоматизации на основе проекта Grit'
    },
    page_wallet_title: {
        ko: '크립토월렛 복구서비스', en: 'CryptoWallet Recovery', zh: '加密钱包恢复服务', ja: 'クリプトウォレット復旧サービス',
        es: 'CryptoWallet Recovery', el: 'CryptoWallet Recovery', de: 'CryptoWallet Recovery', fr: 'CryptoWallet Recovery', ru: 'CryptoWallet Recovery Бот'
    },
    page_wallet_subtitle: {
        ko: '잊어버린 암호화폐를 AI가 찾아드립니다',
        en: 'AI recovers your lost cryptocurrency',
        zh: 'AI帮您找回遗忘的加密货币',
        ja: 'AIが忘れた暗号通貨を見つけます',
        es: 'La IA recupera sus criptomonedas perdidas',
        el: 'Το AI ανακτά τα χαμένα κρυπτονομίσματά σας',
        de: 'KI stellt Ihre verlorenen Kryptowährungen wieder her',
        fr: 'L\'IA récupère vos cryptomonnaies perdues',
        ru: 'ИИ восстановит ваши потерянные криптовалюты'
    },
    page_lineage_title: {
        ko: 'MMORPG', en: 'MMORPG', zh: 'MMORPG', ja: 'MMORPG',
        es: 'MMORPG', el: 'MMORPG', de: 'MMORPG', fr: 'MMORPG', ru: 'MMORPG'
    },
    page_lineage_subtitle: {
        ko: '프리서버 구축부터 자동화까지, 게임 서버의 모든 것',
        en: 'Everything about game servers, from setup to automation',
        zh: '从私服搭建到自动化，游戏服务器的一切',
        ja: 'プライベートサーバー構築から自動化まで、ゲームサーバーのすべて',
        es: 'Todo sobre servidores de juegos, desde configuración hasta automatización',
        el: 'Τα πάντα για game servers, από εγκατάσταση έως αυτοματοποίηση',
        de: 'Alles über Game-Server, von Setup bis Automatisierung',
        fr: 'Tout sur les serveurs de jeux, de la configuration à l\'automatisation',
        ru: 'Всё об игровых серверах, от настройки до автоматизации'
    },
    page_jarvis_title: {
        ko: '자비스', en: 'Jarvis', zh: '贾维斯', ja: 'ジャービス',
        es: 'Jarvis', el: 'Jarvis', de: 'Jarvis', fr: 'Jarvis', ru: 'Джарвис'
    },
    page_jarvis_subtitle: {
        ko: '스포츠 경기를 AI가 분석하여 데이터 기반 예측을 제공합니다',
        en: 'AI analyzes sports matches and provides data-driven predictions',
        zh: 'AI分析体育赛事并提供数据驱动的预测',
        ja: 'AIがスポーツ試合を分析してデータ基盤の予測を提供します',
        es: 'La IA analiza partidos deportivos y proporciona predicciones basadas en datos',
        el: 'Το AI αναλύει αθλητικούς αγώνες και παρέχει προβλέψεις βάσει δεδομένων',
        de: 'KI analysiert Sportspiele und liefert datenbasierte Vorhersagen',
        fr: 'L\'IA analyse les matchs sportifs et fournit des prédictions basées sur les données',
        ru: 'ИИ анализирует спортивные матчи и предоставляет прогнозы на основе данных'
    }
};

// ===== Language System =====
function getLang() {
    return localStorage.getItem('agentstar-lang') || 'ko';
}

function setLang(lang) {
    localStorage.setItem('agentstar-lang', lang);
    applyLang(lang);
}

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (T[key] && T[key][lang]) {
            el.innerHTML = T[key][lang];
        }
    });
    // Update lang selector display
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl && LANGS[lang]) {
        currentLangEl.textContent = LANGS[lang].flag + ' ' + LANGS[lang].label;
    }
}

function createLangSelector() {
    const nav = document.querySelector('.nav-container');
    if (!nav) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector';
    wrapper.innerHTML = `
        <button class="lang-btn" id="langBtn">
            <span id="currentLang">${LANGS[getLang()].flag} ${LANGS[getLang()].label}</span>
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="lang-dropdown" id="langDropdown">
            ${Object.entries(LANGS).map(([code, info]) => 
                `<button class="lang-option" onclick="setLang('${code}')">${info.flag} ${info.label}</button>`
            ).join('')}
        </div>
    `;
    nav.appendChild(wrapper);

    document.getElementById('langBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('show');
    });

    document.addEventListener('click', () => {
        document.getElementById('langDropdown')?.classList.remove('show');
    });
}

// Add lang selector styles
const langStyles = document.createElement('style');
langStyles.textContent = `
.lang-selector {
    position: relative;
    margin-left: 8px;
}
.lang-btn {
    background: rgba(108, 92, 231, 0.2);
    border: 1px solid rgba(108, 92, 231, 0.3);
    color: #e0e0e0;
    padding: 8px 14px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
    font-family: 'Noto Sans KR', sans-serif;
}
.lang-btn:hover {
    background: rgba(108, 92, 231, 0.4);
    border-color: rgba(108, 92, 231, 0.5);
}
.lang-btn i {
    font-size: 10px;
}
.lang-dropdown {
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: rgba(18, 18, 42, 0.98);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(108, 92, 231, 0.3);
    border-radius: 12px;
    padding: 8px;
    z-index: 1001;
    min-width: 160px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}
.lang-dropdown.show { display: block; }
.lang-option {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    color: #8888aa;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.2s;
    font-family: 'Noto Sans KR', sans-serif;
}
.lang-option:hover {
    background: rgba(108, 92, 231, 0.2);
    color: #fff;
}
@media (max-width: 768px) {
    .lang-selector { margin: 10px 0; }
    .lang-dropdown { right: auto; left: 0; }
}
`;
document.head.appendChild(langStyles);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createLangSelector();
    applyLang(getLang());
});