const loadLocaleData: any = (locale: string) => {
	switch (locale) {
		case 'en':
			return import('../compiled-lang/en.json');
		default:
			return import('../compiled-lang/zh.json');
	}
};

export default loadLocaleData;