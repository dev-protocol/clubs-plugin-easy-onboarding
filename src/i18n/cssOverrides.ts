const one = `.dynamic-widget-modal .popper-content .dots-menu-dropdown__container .dots-menu-dropdown__item:first-child .typography`
const two = `.dynamic-widget-modal .popper-content .dots-menu-dropdown__container .dots-menu-dropdown__item:last-child .typography`
const xxx = `.balance-container > .typography:first-child`

export default (lang?: string) => `
.dynamic-widget-header .dynamic-widget-wallet-header .dynamic-widget-wallet-header__wallet-actions {
  display: none;
}

${one} {
  visibility: hidden;
  width: ${lang === 'ja' ? '18ch' : '12ch'};
  overflow: clip;
}
${
	lang === 'ja'
		? `
    ${one}::before {
      content: 'ユーザーIDをコピー';
      visibility: visible;
    }
      `
		: `
      ${one}::before {
        content: 'Copy user ID';
        visibility: visible;
      }
    `
}

${two} {
  visibility: hidden;
  width: ${lang === 'ja' ? '16ch' : '17ch'};
  overflow: clip;
}
${
	lang === 'ja'
		? `
    ${two}::before {
      content: 'セキュリティ設定';
      visibility: visible;
    }
      `
		: `
      ${two}::before {
        content: 'Security settings';
        visibility: visible;
      }
    `
}

${xxx} {
  visibility: hidden;
  width: ${lang === 'ja' ? '6ch' : '4ch'};
  overflow: clip;
  text-wrap: nowrap;
}
${
	lang === 'ja'
		? `
    ${xxx}::before {
      content: 'コイン';
      visibility: visible;
    }
      `
		: `
      ${xxx}::before {
        content: 'Coin';
        visibility: visible;
      }
    `
}
 `
