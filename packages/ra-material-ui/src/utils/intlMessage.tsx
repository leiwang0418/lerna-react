const intlMessage: any = (locale: string) => {
	switch (locale) {
		case "en":
			return import("../compiled-lang/zh.json");
		default:
			return import("../compiled-lang/zh.json");
	}
};

export default intlMessage;
