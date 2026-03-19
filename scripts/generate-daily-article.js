#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const today = new Date().toISOString().slice(0,10);
const slug = `${today}-app-growth-daily`;
const file = path.resolve('site/articles', `${slug}.html`);

if (fs.existsSync(file)) {
  console.log('Article already exists:', file);
  process.exit(0);
}

const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>App增长日报 ${today}</title>
<meta name="description" content="App拉新、App激活、留存转化的每日实战观察。"/>
<link rel="canonical" href="https://youdaolaxiin.com/articles/${slug}.html"/>
</head><body style="font-family:Inter,-apple-system,Segoe UI,Roboto,PingFang SC,Microsoft YaHei,sans-serif;max-width:860px;margin:0 auto;padding:24px;line-height:1.9">
<p><a href="/articles/">← 返回文章列表</a></p>
<h1>App增长日报 ${today}</h1>
<p>今日关键词：app拉新、app激活、留存转化、付费转化。</p>
<h2>今日观察</h2>
<p>补充你当天的真实增长实验复盘、数据变化和可复用结论。</p>
</body></html>`;

fs.writeFileSync(file, html, 'utf8');
console.log('Created:', file);
