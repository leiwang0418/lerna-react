import intl from 'react-intl-universal';
import locales from '../locale';

// const CURRENT_LOCALE = 'en-US';

// export const initialiseLocale = () => {
// 	// TODO 先去账号中取语言,没有再取url和cookie,如果都没取到,则给个默认语言
// 	// account.locale

// 	let currentLocale = intl.determineLocale({
// 		urlLocaleKey: 'lang',
// 		cookieLocaleKey: 'lang'
// 	});

// 	if (Object.keys(locales).findIndex((v) => v === currentLocale) === -1) {
// 		currentLocale = 'en-US';
// 	}

// 	// setLocale(currentLocale);
// 	return currentLocale;
// };

// export const setLocale = () => {
// 	intl.init({
// 		currentLocale: initialiseLocale(),
// 		locales
// 	});
// };

// export default setLocale();

const CURRENT_LOCALE = 'zh-CN';
// const CURRENT_LOCALE = 'en-US';

intl.init({
	currentLocale: CURRENT_LOCALE,
	locales
});


console.log("==============")