const win = window as any;
export const languages = {
    "Common": {},
    "cascadingslot": {},
    "WukongsRevenge": {}
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh_cn = languages;