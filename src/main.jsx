import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Download, GitBranch, Headphones, Languages, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import './styles.css';

const repositoryUrl = 'https://github.com/chuxuehaocai/Lazer';
const releasesUrl = 'https://github.com/chuxuehaocai/Lazer/releases';
const desktopPreview = '/assets/desktop-preview.png';
const mobilePreview = '/assets/mobile-preview.jpg';
const brandIcon = '/assets/newicon.png';

const copy = {
  zh: {
    documentTitle: 'Lazer — 让音乐回到你的手中', documentDescription: 'Lazer 是一款安静、精致的开源音乐播放器。',
    experience: '体验', preview: '预览', downloads: '下载', github: 'GitHub', latest: '最新版本',
    eyebrow: '开源音乐播放器', heroTitle: <>让音乐<br /><em>回到你的手中。</em></>,
    heroLede: 'Lazer 是一款安静而精致的音乐播放器。找到你的声音，沉浸在当下，让每张专辑都拥有自己的氛围。',
    download: '下载 Lazer', source: '查看源码', windows: 'Windows 与 Android', architectures: '桌面端与移动端', free: '免费且开源',
    inside: 'Lazer 内部', previewTitle: <>一个给音乐<br /><em>留出呼吸感的播放器。</em></>,
    previewBody: '跨设备体验围绕让聆听变得私人的习惯展开：实用的音乐库、富有表现力的封面，以及始终触手可及的播放控制。',
    desktop: '桌面视图', mobile: '移动端', start: '开始聆听', downloadTitle: <>下一个喜欢的<br /><em>聆听空间。</em></>,
    downloadBody: '下载最新的 Lazer 版本，在 Windows 或 Android 设备上找到更好的聆听空间。', releases: '查看所有版本',
    madeTitle: '独占音频', madeBody: '在支持的设备上，独占音频模式可直接连接所选输出设备，减少系统混音的干扰。',
    expressiveTitle: '安静地表达', expressiveBody: '每个界面都从当前专辑汲取灵感，同时保持易于浏览。',
    openTitle: '生来开放', openBody: '在开放环境中构建，版本可查看、安装，也可以由你塑造。',
    footer: '一款为专注聆听而设计的开源音乐播放器。', light: '切换到浅色模式', dark: '切换到深色模式', language: '切换到 English',
    primaryNav: '主导航', home: 'Lazer 首页', openGithub: '在 GitHub 上打开 Lazer', openMenu: '打开菜单', closeMenu: '关闭菜单',
    desktopAlt: 'Lazer 桌面音乐播放器界面', mobileAlt: 'Lazer 移动端音乐播放器界面',
  },
  en: {
    documentTitle: 'Lazer — Music that feels like yours', documentDescription: 'Lazer is a calm, beautifully crafted open source music player.',
    experience: 'Experience', preview: 'Preview', downloads: 'Download', github: 'GitHub', latest: 'Latest release',
    eyebrow: 'Open source music player', heroTitle: <>Music that feels<br /><em>like yours.</em></>,
    heroLede: 'Lazer is a calm, beautifully crafted music player. Find your sound, tune into the moment, and let every album have its own atmosphere.',
    download: 'Download Lazer', source: 'View source', windows: 'Windows & Android', architectures: 'Desktop & mobile', free: 'Free and open source',
    inside: 'Inside Lazer', previewTitle: <>A player with<br /><em>room to breathe.</em></>,
    previewBody: 'The cross-device experience is built around the rituals that make listening personal: a useful library, expressive artwork, and playback controls that stay close at hand.',
    desktop: 'Desktop view', mobile: 'On the go', start: 'Start listening', downloadTitle: <>Your next favorite<br /><em>place to listen.</em></>,
    downloadBody: 'Download the latest Lazer release for Windows or Android and settle into a better listening space.', releases: 'See all releases',
    madeTitle: 'Exclusive audio', madeBody: 'On supported devices, exclusive mode connects Lazer directly to the selected output and reduces system mixing.',
    expressiveTitle: 'Quietly expressive', expressiveBody: 'Every surface takes cues from the album in front of you, while staying easy to scan.',
    openTitle: 'Open by design', openBody: 'Built in the open, with releases you can inspect, install, and make your own.',
    footer: 'An open source music player for considered listening.', light: 'Switch to light mode', dark: 'Switch to dark mode', language: '切换到中文',
    primaryNav: 'Primary navigation', home: 'Lazer home', openGithub: 'Open Lazer on GitHub', openMenu: 'Open menu', closeMenu: 'Close menu',
    desktopAlt: 'Lazer desktop music player interface', mobileAlt: 'Lazer mobile music player interface',
  },
};

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem('lazer-language');
  if (savedLanguage === 'en' || savedLanguage === 'zh') return savedLanguage;
  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem('lazer-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState(getInitialLanguage);
  const [theme, setTheme] = React.useState(getInitialTheme);
  const t = copy[language];
  const darkMode = theme === 'dark';
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  React.useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = t.documentTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.documentDescription);
    window.localStorage.setItem('lazer-language', language);
  }, [language, t.documentDescription, t.documentTitle]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('lazer-theme', theme);
  }, [theme]);

  return (
    <div className={darkMode ? 'site-shell dark-mode' : 'site-shell'}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label={t.home}><span className="brand-mark" aria-hidden="true"><img src={brandIcon} alt="" /></span><span>Lazer</span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={t.primaryNav}>
          <button onClick={() => scrollTo('experience')}>{t.experience}</button><button onClick={() => scrollTo('preview')}>{t.preview}</button><button onClick={() => scrollTo('downloads')}>{t.downloads}</button>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">{t.github} <ArrowUpRight size={14} /></a>
        </nav>
        <div className="topbar-actions">
          <span className="status-dot"><i /> {t.latest}</span>
          <div className="preference-controls">
            <button className="toolbar-button language-button" onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} aria-label={t.language} title={t.language}>
              <Languages size={16} aria-hidden="true" /> <span lang={language === 'zh' ? 'zh-CN' : 'en'}>{language === 'zh' ? '中文' : 'EN'}</span>
            </button>
            <span className="control-divider" aria-hidden="true" />
            <button className="toolbar-button theme-button" onClick={() => setTheme(darkMode ? 'light' : 'dark')} aria-label={darkMode ? t.light : t.dark} aria-pressed={darkMode} title={darkMode ? t.light : t.dark}>
              {darkMode ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
          </div>
          <a className="icon-button" href={repositoryUrl} target="_blank" rel="noreferrer" aria-label={t.openGithub}><GitBranch size={18} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> {t.eyebrow}</div><h1>{t.heroTitle}</h1><p className="hero-lede">{t.heroLede}</p><div className="hero-actions"><a className="button button-primary" href={releasesUrl} target="_blank" rel="noreferrer"><Download size={17} /> {t.download}</a><a className="button button-quiet" href={repositoryUrl} target="_blank" rel="noreferrer">{t.source} <ArrowUpRight size={16} /></a></div><div className="platform-note"><span className="platform-pill">{t.windows}</span><span>{t.architectures}</span><span className="note-separator" /><span>{t.free}</span></div></div>
          <div className="hero-art"><div className="art-glow" /><figure className="hero-screenshot-frame"><img src={desktopPreview} alt={t.desktopAlt} /></figure></div>
        </section>

        <section className="signal-strip section-wrap" id="experience"><div><span className="signal-icon"><Headphones size={18} /></span><strong>{t.madeTitle}</strong><p>{t.madeBody}</p></div><div><span className="signal-icon"><Sparkles size={18} /></span><strong>{t.expressiveTitle}</strong><p>{t.expressiveBody}</p></div><div><span className="signal-icon"><GitBranch size={18} /></span><strong>{t.openTitle}</strong><p>{t.openBody}</p></div></section>

        <section className="preview-section section-wrap" id="preview"><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> {t.inside}</span><h2>{t.previewTitle}</h2></div><p>{t.previewBody}</p></div><div className="preview-layout"><div className="preview-desktop"><div className="preview-label">{t.desktop} <span>01</span></div><div className="image-frame desktop-frame"><img src={desktopPreview} alt={t.desktopAlt} /></div></div><div className="preview-mobile"><div className="preview-label">{t.mobile} <span>02</span></div><div className="image-frame mobile-frame"><img src={mobilePreview} alt={t.mobileAlt} /></div></div></div></section>

        <section className="download-section section-wrap" id="downloads"><div className="download-panel"><div><span className="eyebrow"><span className="eyebrow-line" /> {t.start}</span><h2>{t.downloadTitle}</h2><p>{t.downloadBody}</p></div><a className="button button-light" href={releasesUrl} target="_blank" rel="noreferrer"><Download size={17} /> {t.releases}</a></div></section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#top" aria-label={t.home}><span className="brand-mark" aria-hidden="true"><img src={brandIcon} alt="" /></span><span>Lazer</span></a><span className="footer-copy">{t.footer}</span><a href={repositoryUrl} target="_blank" rel="noreferrer" className="footer-link">{t.github} <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
