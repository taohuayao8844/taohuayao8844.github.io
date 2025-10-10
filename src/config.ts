import type { PostHideElements } from '~/content/config';

export const Site = 'https://taohuayao8844.github.io';
export const SiteLanguage = 'zh';
export const SiteTitle = 'ZeroPointNine站';
export const SiteDescription = '叹隙中驹，石中火，梦中身';
export const FooterDescription = '浙ICP备2025202341号';
export const AdminName = 'ZERO_POINT_NINE';
export const PageSize = 15;

//友情链接
// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	github: { url: 'https://github.com/taohuayao8844/taohuayao8844.github.io' },
	weibo: { url: 'https://weibo.com/u/5920416195' },
	bilibili: {
		url: 'https://space.bilibili.com/396104992?spm_id_from=333.1007.0.0',
	},
	friend: { url: 'https://sysnow.xyz/' },
};

//评论实现
// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'taohuayao8844/taohuayao8844.github.io',
	'data-repo-id': 'R_kgDOLgobXQ',
	'data-category': 'Q&A',
	'data-category-id': 'DIC_kwDONQWpx84CkVG5',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'bottom',
	'data-lang': 'zh-CN',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
