#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const siteDir = path.resolve('site');
const languages = [
  { code: 'zh-cn', dir: '', label: '简体中文', locale: 'zh-CN', domainPath: '/', navArticles: '增长文章', homeTitle: '有道拉新｜App拉新、App激活、留存与付费转化增长', heroEyebrow: '拉新 · 激活 · 留存 · 付费', heroTitle: 'App 小程序 网站<br/>数据增长', heroDesc: '有道拉新专注 APP、小程序和网站的数据增长，覆盖拉新、激活、留存与付费转化。', metric1: '', metric2: '', metric3: '', metric4: '', serviceTitle: '案例方向', serviceDesc: '某商银行掌注册拉新，众安保险订阅推广，某信信用卡申办，某果短剧订阅推广… 借助自有app流量/渠道/私域，小成本见证大数据', services: [], methodTitle: '', methodDesc: '', methods: [], articleTitle: '增长文章', articleDesc: '', footer: '有道拉新 · 专注 App拉新、App激活、留存转化、付费转化' },
  { code: 'en', dir: 'en', label: 'English', locale: 'en', domainPath: '/en/', navArticles: 'Articles', homeTitle: 'Youdao Growth | App acquisition, activation, retention, and monetization', heroEyebrow: 'Acquisition · Activation · Retention · Revenue', heroTitle: 'App · Mini Program · Web<br/>Growth', heroDesc: '', metric1: 'Identity verification, credit card applications', metric2: 'App registrations, first top-up / subscription', metric3: 'Improve subscription rate, reduce cancellations', metric4: '', serviceTitle: 'Focus areas', serviceDesc: 'Banking / Credit Cards<br/>Identity verification, credit card applications<br/><br/>Short Drama / Fiction / Games / Community<br/>App registrations, first top-up / subscription<br/><br/>Insurance / Ringback Tones<br/>Improve subscription rate, reduce cancellations', services: [], methodTitle: '', methodDesc: '', methods: [], articleTitle: 'Growth articles', articleDesc: '', footer: 'Youdao Growth · Focused on acquisition, activation, retention, and monetization' }
];

const articleList = [
  ['2026-03-16-app-activation-playbook.html', '一、APP增长：别盲目追量，小成本试错才是王道'],
  ['2026-03-17-app-acquisition-channel-checklist.html', '二、APP激活：拉新再多，激活不了都是白搭'],
  ['2026-03-18-landing-page-conversion-notes.html', '三、付费和订阅转化：别硬推，让用户主动愿意付钱'],
  ['2026-03-19-d7-retention-practical-fixes.html', '四、退订率高怎么办？找准原因，针对性解决才有效'],
  ['2026-03-20-paid-conversion-pricing-patterns.html', '五、iOS上架注意事项：这些坑别踩，不然审核能卡你半个月']
];

const articleTitlesEn = {
  '2026-03-16-app-activation-playbook.html': 'APP Growth: Small-budget testing beats blind scaling',
  '2026-03-17-app-acquisition-channel-checklist.html': 'APP Activation: Traffic means nothing if users never activate',
  '2026-03-18-landing-page-conversion-notes.html': 'Paid conversion: Do not force it, make it worth paying for',
  '2026-03-19-d7-retention-practical-fixes.html': 'High churn? Fix the cause instead of guessing',
  '2026-03-20-paid-conversion-pricing-patterns.html': 'iOS submission notes: avoid review delays from common mistakes'
};

const articleBodies = {
  '2026-03-16-app-activation-playbook.html': ['做APP增长也快两年了，踩过最坑的就是一开始就砸钱投渠道，最后钱花完了，留存连10%都不到。其实对中小团队来说，不用搞那些高大上的增长模型，先把基础的做好，反而能见效。','首先说拉新，别只盯着应用商店的排行榜，那种付费冲榜成本高，而且用户质量参差不齐。我们现在主要做的是私域和内容引流，比如在小红书、抖音发一些APP的实用教程，不用刻意硬广，就分享用户用APP能解决的问题，比如“用这个APP3分钟搞定职场报表”，底下留个下载链接，虽然量慢，但用户都是精准的，留存能到30%以上。','还有一个小技巧，就是老用户拉新，别搞那种“拉3个新用户送10元”的活动，太容易被羊毛党盯上。我们改成“老用户邀请新用户，双方都能解锁高级功能7天”，既降低了成本，也能提高老用户的活跃度，新用户因为有免费功能可以用，留存也会更高。','另外，一定要做好数据监控，每天看新增、留存、活跃，哪个渠道的用户质量高，就重点投入，质量差的及时砍掉，别浪费时间和钱。增长不是一蹴而就的，慢慢试错，找到适合自己APP的渠道，比盲目跟风更重要。'],
  '2026-03-17-app-acquisition-channel-checklist.html': ['很多人做运营，只关注拉新的数量，却忽略了激活率，其实拉新过来的用户，激活不了，就等于白拉，还浪费了渠道成本。我之前就吃过这个亏，一天拉新500多，激活率才20%，后来调整了激活流程，现在能稳定在60%以上。','首先，新手引导别太复杂，很多APP一打开就一堆弹窗，要同意这个、授权那个，用户直接就退出了。我们现在把新手引导简化到3步，第一步介绍核心功能，第二步让用户完成一个简单的操作（比如点击一次按钮、输入一个简单信息），第三步解锁免费权益，全程不超过30秒，用户不会有抵触感。','然后，激活后的首次体验很重要。用户激活后，一定要第一时间给用户提供价值，比如工具类APP，就让用户直接能用核心功能，不用先充值、不用先完善资料；内容类APP，就给用户推送他可能感兴趣的内容，让用户觉得“这个APP有用”，才会继续留下来。','还有一个小细节，就是推送提醒，激活后24小时内，给用户发一条个性化的推送，比如“你还没体验XX功能，点击立即尝试”，别发那种生硬的“欢迎使用XXAPP”，个性化的推送能提高用户的打开率，进而提升激活后的留存。'],
  '2026-03-18-landing-page-conversion-notes.html': ['做付费和订阅转化，最忌讳的就是一打开APP就弹窗让用户充值，或者频繁推送付费提醒，这样只会让用户反感，甚至直接卸载。我们做订阅转化，核心就是“让用户觉得付费值得”，而不是“强迫用户付费”。','首先，要明确用户的核心需求，比如我们的APP是职场工具类，用户的核心需求是提高工作效率，那我们就把高级功能和“提高效率”绑定，比如“付费后可解锁批量处理功能，每天节省1小时”，而不是单纯说“付费解锁高级功能”，用户能看到实实在在的好处，才会愿意付费。','然后，免费试用很重要。我们现在做的是7天免费试用，试用期间，用户可以使用所有高级功能，不用绑定银行卡，也不用提前扣费，试用到期前3天，给用户发提醒，告知试用即将结束，以及付费后的权益，这样用户体验过高级功能的价值，转化意愿会高很多。','还有，订阅套餐的设置要合理，不要只设置一个高价套餐，可以设置基础版、进阶版、年度版，基础版价格低，满足普通用户需求，进阶版和年度版针对有更高需求的用户，而且年度版比月度版更划算，引导用户订阅长期套餐，提高客单价。','另外，付费页面的说明要清晰，比如订阅后能享受什么权益、是否自动续费、如何取消订阅，都要写清楚，不要藏着掖着，用户觉得透明，才会放心付费。'],
  '2026-03-19-d7-retention-practical-fixes.html': ['最近有很多同行问我，APP订阅退订率太高，怎么办？其实退订率高，不是单一原因造成的，一定要先找到问题所在，再针对性解决，盲目调整只会越改越差。','首先，先看退订的时间节点，是试用到期后退订，还是订阅一段时间后退订。如果是试用到期后退订，大概率是用户觉得高级功能不值这个价，或者试用期间没感受到核心价值，这时候就要优化试用体验，比如在试用期间给用户推送使用教程，引导用户体验核心功能，让用户看到付费的价值。','如果是订阅一段时间后退订，可能是用户的需求发生了变化，或者APP的功能没有持续更新，满足不了用户的需求。这时候就要定期更新功能，根据用户反馈优化产品，比如我们每月都会收集用户反馈，更新1-2个实用功能，同时给老订阅用户推送专属权益，提高用户的粘性。','还有一个常见的原因，就是自动续费提醒不到位，用户忘记取消订阅，被扣费后，就会直接退订，甚至投诉。我们现在的做法是，自动续费前3天、前1天，分别给用户发提醒，告知用户即将续费，以及如何取消订阅，让用户有足够的时间做决定，这样能减少很多不必要的退订。','另外，退订后可以做一个简单的问卷，问问用户退订的原因，比如“是价格太高”“功能用不上”“有更好的替代APP”，根据用户的反馈，调整产品和订阅策略，慢慢降低退订率。'],
  '2026-03-20-paid-conversion-pricing-patterns.html': ['做iOS APP的，应该都有过被苹果审核驳回的经历，我之前上架一款APP，因为没注意几个小细节，被驳回了3次，前后花了半个多月才审核通过，总结了一些实操经验，分享给大家，避免踩坑。','首先，隐私政策一定要规范。苹果对用户隐私要求特别严格，隐私政策里必须明确说明，APP收集用户的哪些信息、收集这些信息的用途、如何保护用户隐私，不能有模糊的表述，比如“可能收集用户信息”，一定要写清楚“收集用户的XX信息，用于XX用途”，而且隐私政策必须能在APP内直接打开，不能跳转到外部链接。','然后，权限申请要合理。比如APP不需要定位权限，就不要申请定位权限；需要相机权限，就要在申请的时候说明用途，比如“申请相机权限，用于拍摄照片上传”，不能默认申请所有权限，不然会被驳回，理由是“权限与APP功能无关”。','还有，APP内不能有违规内容，比如色情、暴力、虚假宣传，也不能有诱导用户分享、诱导用户付费的内容，比如“分享到朋友圈可解锁功能”“不付费就无法使用核心功能”，这些都是苹果审核的重点，很容易被驳回。','另外，SDK的选择要注意，一定要用正规的SDK，不要用未经苹果审核的SDK，不然会被检测到，导致审核驳回。还有，APP的版本号要规范，不能随意修改，比如之前提交的版本是1.0，下次提交就要是1.1，不能跳过版本号，也不能用0.1、0.2这种测试版本号。','最后，提交审核前，一定要自己先测试一遍，检查有没有闪退、卡顿、功能异常的情况，同时检查隐私政策、权限申请、内容是否合规，避免因为一些小细节被驳回，浪费时间。']
};

function ensureDir(p){ fs.mkdirSync(p,{recursive:true}); }
function relativePrefix(depth){ return depth <= 0 ? '.' : Array(depth).fill('..').join('/'); }
function assetPath(depth, file){ return `${relativePrefix(depth)}/assets/${file}`; }
function footerSitemap(depth, locale='zh-CN'){
  const prefix = relativePrefix(depth);
  const isEn = locale === 'en';
  return `<div class="card"><h3>${isEn ? 'Sitemap' : '网站地图'}</h3><div class="site-map-grid"><div><p><strong>${isEn ? 'Core pages' : '核心页面'}</strong></p><p><a href="${prefix}/index.html">${isEn ? 'Home' : '首页'}</a><br/><a href="${prefix}/articles/index.html">${isEn ? 'Articles' : '增长文章'}</a><br/><a href="${prefix}/sitemap.xml">XML Sitemap</a></p></div><div><p><strong>${isEn ? 'Languages' : '语言'}</strong></p><p><a href="${prefix}/index.html">简体中文</a><br/><a href="${prefix}/en/index.html">English</a></p></div><div><p><strong>${isEn ? 'Growth topics' : '增长主题'}</strong></p><p>${isEn ? 'App acquisition<br/>App activation<br/>Retention<br/>Paid conversion' : 'App拉新<br/>App激活<br/>留存转化<br/>付费转化'}</p></div></div></div>`;
}
function articleCard(file,title, depth, locale='zh-CN'){
  const prefix = relativePrefix(depth);
  const isEn = locale === 'en';
  return `<article class="article-item"><div><h3><a href="${prefix}/articles/${file}" style="text-decoration:none">${title}</a></h3><p>${isEn ? 'Practical notes from real app growth work.' : '来自真实APP增长工作的实战记录。'}</p></div><div><a class="button" href="${prefix}/articles/${file}">${isEn ? 'Open' : '查看'}</a></div></article>`;
}
function buildHome(lang){
  const fallback = languages[0];
  const L = { ...fallback, ...lang };
  const depth = L.dir ? 1 : 0;
  const prefix = relativePrefix(depth);
  const homeHref = `${prefix}/index.html`;
  const articlesHref = `${prefix}/articles/index.html`;
  const consultationLabel = L.locale === 'zh-CN' ? '免费咨询' : 'Free consultation';
  const logoTitleText = L.locale === 'zh-CN' ? '有道拉新' : 'App Growth';
  const logoSubtitleText = '';
  const navServices = L.locale === 'zh-CN' ? '服务' : 'Services';
  const navArticles = L.locale === 'zh-CN' ? '文章' : 'Articles';
  const modalTitle = L.locale === 'zh-CN' ? '扫码咨询' : 'Scan to contact us';
  const modalDesc = '';
  const qrFile = L.locale === 'zh-CN' ? 'wechat-qr-user.png' : 'whatsapp-qr.svg';
  const isZh = L.locale === 'zh-CN';
  const heroDescHtml = L.heroDesc ? `<p>${L.heroDesc}</p>` : '';
  const links = articleList.slice(0,4).map(([f,t]) => articleCard(f, L.locale === 'en' ? (articleTitlesEn[f] || t) : t, depth, L.locale)).join('');
  const statsHtml = isZh ? `<section class="stats-strip"><div class="stat"><b>银行/信用卡</b><span>实名认证，信用卡申办</span></div><div class="stat"><b>短剧/小说/游戏/社区</b><span>app注册，付费首充/订阅</span></div><div class="stat"><b>保险/彩铃</b><span>提高订阅率，降低退订率</span></div></section>` : `<section class="stats-strip"><div class="stat"><b>Banking / Credit Cards</b><span>Identity verification, credit card applications</span></div><div class="stat"><b>Short Drama / Fiction / Games / Community</b><span>App registrations, first top-up / subscription</span></div><div class="stat"><b>Insurance / Ringback Tones</b><span>Improve subscription rate, reduce cancellations</span></div></section>`;
  const languageOptions = languages.map(l => ({
    label: l.label,
    locale: l.locale,
    dir: l.dir,
    domainPath: l.domainPath,
    localPath: `${relativePrefix(depth)}${l.dir ? '/' + l.dir : ''}/index.html`,
    selected: l.dir === L.dir
  }));
  const languageScript = `<script>(function(){const KEY='youdaolaxin-preferred-language';const currentPath=${JSON.stringify(L.domainPath)};const currentLocale=${JSON.stringify(L.locale)};const options=${JSON.stringify(languageOptions.map(({label,selected,...rest})=>rest))};function normalize(input){const value=(input||'').toLowerCase();if(!value)return 'zh-CN';if(value==='zh'||value.startsWith('zh-'))return value.startsWith('zh-tw')||value.startsWith('zh-hk')||value.startsWith('zh-mo')?'zh-CN':'zh-CN';return 'en';}function targetFor(locale){return normalize(locale)==='en'?'/en/':'/';}window.switchSiteLanguage=function(sel){const selected=sel&&sel.options?sel.options[sel.selectedIndex]:null;const nextPath=(selected&&selected.value)||'/';const nextLocale=(selected&&selected.dataset&&selected.dataset.locale)||'zh-CN';try{localStorage.setItem(KEY,nextLocale);}catch(e){} if(nextPath&&nextPath!==location.pathname){location.href=nextPath;}};if(currentPath==='/'){let preferred=null;try{preferred=localStorage.getItem(KEY);}catch(e){}const browserLocale=(navigator.languages&&navigator.languages[0])||navigator.language||'';const targetPath=targetFor(preferred||browserLocale);if(targetPath!==currentPath){location.replace(targetPath);}}try{const stored=localStorage.getItem(KEY);if(!stored){localStorage.setItem(KEY,currentLocale);}}catch(e){}})();</script>`;
  return `<!doctype html><html lang="${L.locale}"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${L.homeTitle}</title><meta name="description" content="${L.heroDesc}"/><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"/><link rel="canonical" href="https://youdaolaxin.com${L.domainPath}"/>${languages.map(x=>`<link rel="alternate" hreflang="${x.locale}" href="https://youdaolaxin.com${x.domainPath}"/>`).join('')}<link rel="icon" type="image/svg+xml" href="${assetPath(depth,'favicon.svg')}"/><link rel="stylesheet" href="${assetPath(depth,'styles.css')}"/>${languageScript}</head><body><div class="page-shell"><div class="main-shell"><div class="hero"><div class="wrap"><header class="nav"><a class="logo" href="${homeHref}"><span class="logo-mark" aria-hidden="true"><span class="p">P</span><span class="arrow">↗</span></span><span class="logo-text"><span class="logo-title">${logoTitleText}</span><span class="logo-subtitle">${logoSubtitleText}</span></span></a><div class="nav-links"><a href="#services">${navServices}</a><a href="#articles">${navArticles}</a><label class="sr-only" for="lang">Language</label><select id="lang" class="lang-select" onchange="switchSiteLanguage(this)">${languageOptions.map(l=>`<option value="https://youdaolaxin.com${l.domainPath}" data-local="${l.localPath}" data-locale="${l.locale}" ${l.selected?'selected':''}>${l.label}</option>`).join('')}</select></div></header><div class="hero-grid"><div><span class="eyebrow">${L.heroEyebrow}</span><h1>${L.heroTitle}</h1>${heroDescHtml}<div class="hero-actions"><a class="button" href="#" onclick="document.getElementById('consult-modal').classList.add('open'); return false;">${consultationLabel}</a><a class="button-light" href="${articlesHref}">${L.locale === 'en' ? 'Read articles' : '查看文章'}</a></div></div><div class="hero-card"><div class="hero-visual"><div class="copy"><div><span class="tag">${isZh ? '增长案例' : 'Growth cases'}</span><h3>${isZh ? '银行、保险、信用卡、短剧等推广转化' : 'Acquisition and conversion across finance and content apps'}</h3><p>${isZh ? '借助自有 app 流量、渠道和私域，把注册、激活、订阅和转化做得更稳。' : 'Turn traffic, activation, subscription, and conversion into a repeatable system.'}</p></div><a class="button-light" href="#services">${isZh ? '看案例方向' : 'See focus areas'}</a></div><div class="visual-stage"><img class="visual-fg" src="${assetPath(depth,'growth-illustration.svg')}" alt="hero visual"/></div></div></div></div>${statsHtml}</div></div><main class="wrap"><section id="services" class="card"><h2 class="section-title">${isZh ? '我们做什么' : L.serviceTitle}</h2><p class="section-sub">${L.serviceDesc}</p></section><section id="articles" class="card"><h2 class="section-title">${L.articleTitle}</h2><div class="article-list">${links}</div><p style="margin-top:16px"><a class="button" href="${articlesHref}">${L.locale === 'en' ? 'Browse all articles' : '查看更多文章'}</a></p></section><section>${footerSitemap(depth, L.locale)}</section><footer class="footer">${L.footer}</footer></main></div></div><div id="consult-modal" class="modal" onclick="if(event.target===this)this.classList.remove('open')"><div class="modal-card"><h3>${modalTitle}</h3><p>${modalDesc}</p><img src="${assetPath(depth, qrFile)}" alt="QR code" onerror="this.style.display='none';document.getElementById('qr-fallback').style.display='block'"/><iframe id="qr-fallback" src="${relativePrefix(depth)}/assets/wechat-qr-user.html" style="display:none;width:100%;height:220px;border:0;border-radius:16px"></iframe><div class="modal-close"><a class="button-light" href="#" onclick="document.getElementById('consult-modal').classList.remove('open'); return false;">${L.locale === 'en' ? 'Close' : '关闭'}</a></div></div></div></body></html>`;
}
function buildArticlesIndex(){
  return `<!doctype html><html lang="zh-CN" class="article-index"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>增长文章｜有道拉新</title><meta name="description" content="围绕App拉新、App激活、留存与付费转化的实战文章。"/><link rel="canonical" href="https://youdaolaxin.com/articles/"/><link rel="icon" type="image/svg+xml" href="../assets/favicon.svg"/><link rel="stylesheet" href="../assets/styles.css"/></head><body><main class="wrap article-content"><nav class="article-meta" aria-label="breadcrumb"><a href="../index.html">首页</a> / <span>增长文章</span></nav><h1>增长文章目录</h1><div class="article-list">${articleList.map(([f,t])=>articleCard(f,t,1)).join('')}</div><section style="margin-top:20px">${footerSitemap(1)}</section></main></body></html>`
}
function buildArticle(file,title,paras){
  return `<!doctype html><html lang="zh-CN" class="article-page"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${title}｜有道拉新</title><meta name="description" content="${title}，围绕App拉新、App激活、留存与付费转化的实战观察。"/><meta name="keywords" content="app拉新,app激活,留存转化,付费转化"/><link rel="canonical" href="https://youdaolaxin.com/articles/${file}"/><link rel="icon" type="image/svg+xml" href="../assets/favicon.svg"/><link rel="stylesheet" href="../assets/styles.css"/></head><body><main class="wrap article-content"><nav class="article-meta" aria-label="breadcrumb"><a href="../index.html">首页</a> / <a href="./index.html">增长文章</a> / <span>${title}</span></nav><h1>${title}</h1>${paras.map(p=>`<p>${p}</p>`).join('')}<p><a class="button" href="./index.html">返回文章目录</a></p><section style="margin-top:24px">${footerSitemap(1)}</section></main></body></html>`;
}

ensureDir(path.join(siteDir,'articles'));
for (const lang of languages){
  const dir = lang.dir ? path.join(siteDir, lang.dir) : siteDir;
  ensureDir(dir);
  fs.writeFileSync(path.join(dir,'index.html'), buildHome(lang), 'utf8');
}
fs.writeFileSync(path.join(siteDir,'articles','index.html'), buildArticlesIndex(),'utf8');
for (const [file,title] of articleList){
  fs.writeFileSync(path.join(siteDir,'articles',file), buildArticle(file,title,articleBodies[file]), 'utf8');
}

const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const lang of languages){ sitemap.push(`<url><loc>https://youdaolaxin.com${lang.domainPath}</loc><changefreq>weekly</changefreq><priority>${lang.dir?'0.8':'1.0'}</priority></url>`); }
sitemap.push('<url><loc>https://youdaolaxin.com/articles/</loc><changefreq>daily</changefreq><priority>0.9</priority></url>');
for (const [file] of articleList){ sitemap.push(`<url><loc>https://youdaolaxin.com/articles/${file}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`); }
sitemap.push('</urlset>');
fs.writeFileSync(path.join(siteDir,'sitemap.xml'), sitemap.join(''), 'utf8');
console.log('Site rebuilt.');
