/* @ds-bundle: {"format":4,"namespace":"ComunilifeDesignSystem_ea236c","components":[{"name":"CTAPanel","sourcePath":"components/cards/CTAPanel.jsx"},{"name":"GivingCard","sourcePath":"components/cards/GivingCard.jsx"},{"name":"ProgramCard","sourcePath":"components/cards/ProgramCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"QuoteFeature","sourcePath":"components/cards/QuoteFeature.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Ticker","sourcePath":"components/navigation/Ticker.jsx"},{"name":"PillarItem","sourcePath":"components/stats/PillarItem.jsx"},{"name":"StatFig","sourcePath":"components/stats/StatFig.jsx"},{"name":"StatInline","sourcePath":"components/stats/StatInline.jsx"}],"sourceHashes":{"components/cards/CTAPanel.jsx":"cc58b85cd014","components/cards/GivingCard.jsx":"c26f335b8e61","components/cards/ProgramCard.jsx":"0cd0faeba367","components/cards/QuoteCard.jsx":"8c070e730557","components/cards/QuoteFeature.jsx":"e997071cbd4b","components/core/Button.jsx":"0457104017c1","components/core/SectionLabel.jsx":"fcd152901564","components/core/TextLink.jsx":"6c52010eed65","components/navigation/SiteFooter.jsx":"d1cf85653e11","components/navigation/SiteHeader.jsx":"22e951681815","components/navigation/Ticker.jsx":"3bb2e7fb93e2","components/stats/PillarItem.jsx":"8594dc0e8532","components/stats/StatFig.jsx":"5e2120f6bf8e","components/stats/StatInline.jsx":"0255f959829a","ui_kits/website/GiveScreen.jsx":"3c3004b792e2","ui_kits/website/HomeScreen.jsx":"82a6364b2097"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ComunilifeDesignSystem_ea236c = window.ComunilifeDesignSystem_ea236c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/GivingCard.jsx
try { (() => {
function GivingCard({
  icon,
  title = 'Give online',
  body = 'Make a one-time or monthly gift securely.',
  cta = 'Give online',
  accent = 'var(--cl-orange)',
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cl-white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-full)',
      background: accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cl-ink)'
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 15 2 2 4-4"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--type-h4-size)',
      letterSpacing: '-0.4px',
      color: 'var(--cl-ink)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0,
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 700,
      letterSpacing: 'var(--type-label-button-tracking)',
      textTransform: 'uppercase',
      color: 'var(--cl-ink)',
      textDecoration: 'none'
    }
  }, cta, " \u2192"));
}
Object.assign(__ds_scope, { GivingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/GivingCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProgramCard.jsx
try { (() => {
function ProgramCard({
  number = '01',
  title = 'Health & Housing',
  body = 'Supportive and affordable housing across New York City.',
  tag = 'Since 1992',
  background = 'var(--cl-blue)',
  color = 'var(--cl-paper)',
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background,
      color,
      textDecoration: 'none',
      padding: '36px 32px',
      minHeight: 320,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      color: 'currentColor'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.85
    }
  }, '§ ' + number), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-h3-size)',
      letterSpacing: 'var(--type-h3-tracking)',
      lineHeight: 1,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      margin: 0,
      opacity: 0.9,
      maxWidth: 380
    }
  }, body), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)',
      marginTop: 8
    }
  }, "Learn more \u2192")));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote = 'They didn\u2019t treat me like a case file. They treated me like a person.',
  name = 'Maria',
  role = 'Program participant',
  accent = 'var(--cl-purple)'
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderLeft: `4px solid ${accent}`,
      paddingLeft: 28
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'var(--type-lede-size)',
      lineHeight: 'var(--type-lede-leading)',
      color: 'var(--cl-ink)'
    }
  }, '\u201C' + quote + '\u201D'), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)',
      color: 'var(--text-muted)'
    }
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "\xB7"), " ", role));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteFeature.jsx
try { (() => {
function QuoteFeature({
  quote = 'Health and housing are human rights.',
  name = 'Dr. Rosa M. Gil',
  role = 'Founder & President',
  background = 'var(--cl-blue)',
  color = 'var(--cl-paper)'
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background,
      color,
      padding: '80px 72px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      lineHeight: 0.5,
      display: 'block',
      opacity: 0.4
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '24px 0 0',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'var(--type-quote-size)',
      lineHeight: 'var(--type-quote-leading)',
      letterSpacing: '-0.5px',
      maxWidth: 900
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)'
    }
  }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--dot-size)',
      height: 'var(--dot-size)',
      borderRadius: 'var(--radius-full)',
      background: 'var(--cl-orange)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.8
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteFeature.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  label = 'Make a Donation',
  variant = 'solid',
  arrow = true,
  href = '#',
  onClick
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--type-label-size)',
    fontWeight: 700,
    letterSpacing: 'var(--type-label-button-tracking)',
    textDecoration: 'none',
    padding: '17px 28px',
    borderRadius: 'var(--radius-none)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    border: '1px solid transparent'
  };
  const variants = {
    solid: {
      background: 'var(--cl-ink)',
      color: 'var(--cl-paper)',
      borderColor: 'var(--cl-ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--cl-ink)',
      borderColor: 'var(--cl-ink)'
    },
    'on-dark': {
      background: 'var(--cl-paper)',
      color: 'var(--cl-ink)',
      borderColor: 'var(--cl-paper)'
    },
    'outline-on-dark': {
      background: 'transparent',
      color: 'var(--cl-paper)',
      borderColor: 'var(--line-on-color-light)'
    },
    orange: {
      background: 'var(--cl-orange)',
      color: 'var(--cl-ink)',
      borderColor: 'var(--cl-orange)'
    }
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.solid)
    }
  }, /*#__PURE__*/React.createElement("span", null, label), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/CTAPanel.jsx
try { (() => {
function CTAPanel({
  label = 'Get involved',
  title = 'There are many ways to help.',
  body = 'Give, volunteer, or partner with us to build a healthier New York.',
  primary = 'Make a Donation',
  secondary = 'Volunteer with us',
  background = 'var(--cl-orange)',
  color = 'var(--cl-ink)'
}) {
  const onDark = color !== 'var(--cl-ink)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background,
      color,
      padding: '96px 72px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      opacity: 0.85
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-h2-size)',
      letterSpacing: 'var(--type-h2-tracking)',
      lineHeight: 1.02,
      margin: 0,
      maxWidth: 900
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: 560,
      opacity: 0.9
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: primary,
    variant: onDark ? 'on-dark' : 'solid'
  }), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: secondary,
    variant: onDark ? 'outline-on-dark' : 'outline'
  })));
}
Object.assign(__ds_scope, { CTAPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CTAPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  number = '01',
  label,
  color = 'var(--cl-purple)',
  onColor = false
}) {
  const ink = onColor ? 'currentColor' : color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", null, '§ ' + number), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'currentColor',
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function TextLink({
  label,
  href = '#',
  color = 'var(--cl-ink)',
  caps = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)',
      textTransform: caps ? 'uppercase' : 'none',
      color,
      textDecoration: 'none',
      borderBottom: '1px solid currentColor',
      paddingBottom: 3,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  sealSrc = '../../assets/ny-cares-seal.png'
}) {
  const cols = [{
    h: 'Programs',
    links: ['Health & Housing', 'Life is Precious', 'Medical Respite', 'Community Engagement']
  }, {
    h: 'About',
    links: ['Our story', 'Leadership', 'Careers', 'News']
  }, {
    h: 'Get involved',
    links: ['Donate', 'Volunteer', 'Partner with us', 'Contact']
  }];
  const socials = ['F', 'T', 'In', 'Ig'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cl-cream)',
      borderTop: '1px solid var(--border-hairline)',
      color: 'var(--cl-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: '72px 48px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 56,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: '-0.5px'
    }
  }, "Comunilife"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 300,
      marginTop: 16
    }
  }, "Health and housing are human rights. Serving New Yorkers since 1989."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 24
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 34,
      height: 34,
      border: '1px solid var(--cl-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500
    }
  }, s)))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      color: 'var(--cl-purple)',
      marginBottom: 18
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--cl-ink)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 28,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-legal-size)',
      letterSpacing: 'var(--type-legal-tracking)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Comunilife, Inc. \xB7 A 501(c)(3) nonprofit \xB7 EIN 13-3517657"), sealSrc && /*#__PURE__*/React.createElement("img", {
    src: sealSrc,
    alt: "New Yorkers Care",
    style: {
      height: 48,
      width: 'auto'
    }
  }))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  active = 'Home',
  lang = 'EN',
  onLang,
  onNav
}) {
  const nav = ['About', 'Programs', 'Impact', 'Get Involved'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--cl-paper)',
      borderBottom: '1px solid var(--border-hairline)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 48px',
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onNav && (e => {
      e.preventDefault();
      onNav('Home');
    }),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: '-0.5px',
      color: 'var(--cl-ink)',
      textDecoration: 'none'
    }
  }, "Comunilife"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: onNav && (e => {
      e.preventDefault();
      onNav(n);
    }),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)',
      color: active === n ? 'var(--cl-orange)' : 'var(--cl-ink)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLang,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-nav-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-nav-tracking)',
      color: 'var(--cl-ink)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, lang === 'EN' ? 'EN / es' : 'en / ES'), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: "Donate",
    arrow: false
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Ticker.jsx
try { (() => {
function Ticker({
  items = ['Health is a human right', 'Housing is a human right', 'Dignity for every New Yorker'],
  background = 'var(--cl-sky)',
  color = 'var(--cl-ink)',
  dotColor = 'var(--cl-orange)',
  speed = 30
}) {
  const run = [...items, ...items, ...items];
  const seq = [...run, ...run];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background,
      color,
      overflow: 'hidden',
      width: '100%',
      borderTop: '1px solid var(--line-on-color-dark)',
      borderBottom: '1px solid var(--line-on-color-dark)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes cl-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `cl-ticker ${speed}s linear infinite`
    }
  }, seq.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '13px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-ticker-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-ticker-tracking)',
      whiteSpace: 'nowrap'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--dot-size)',
      height: 'var(--dot-size)',
      borderRadius: 'var(--radius-full)',
      background: dotColor,
      margin: '0 20px'
    }
  })))));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Ticker.jsx", error: String((e && e.message) || e) }); }

// components/stats/PillarItem.jsx
try { (() => {
function PillarItem({
  number = '01',
  title = 'Health & Housing',
  body = 'Supportive and affordable housing across New York City.',
  color = 'var(--cl-purple)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: '28px 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      color,
      paddingTop: 6,
      minWidth: 32
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--type-h4-size)',
      letterSpacing: '-0.4px',
      color: 'var(--cl-ink)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: 480
    }
  }, body)));
}
Object.assign(__ds_scope, { PillarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/PillarItem.jsx", error: String((e && e.message) || e) }); }

// components/stats/StatFig.jsx
try { (() => {
function StatFig({
  fig = '01',
  value = '3,107',
  label = 'units of housing',
  color = 'var(--cl-orange)',
  onColor = false
}) {
  const accent = onColor ? 'currentColor' : color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-label-tracking)',
      color: accent
    }
  }, 'Fig. ' + fig), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--type-stat-size)',
      letterSpacing: 'var(--type-stat-tracking)',
      lineHeight: 1,
      color: onColor ? 'currentColor' : 'var(--cl-ink)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      color: onColor ? 'var(--text-on-dark-soft)' : 'var(--text-muted)',
      maxWidth: 220
    }
  }, label));
}
Object.assign(__ds_scope, { StatFig });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/StatFig.jsx", error: String((e && e.message) || e) }); }

// components/stats/StatInline.jsx
try { (() => {
function StatInline({
  value = '0',
  label = 'suicides in 20+ years',
  onColor = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 20,
      padding: '20px 0',
      borderBottom: `1px solid ${onColor ? 'var(--line-on-color-light)' : 'var(--border-hairline)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 40,
      letterSpacing: '-1px',
      lineHeight: 1,
      color: onColor ? 'currentColor' : 'var(--cl-ink)',
      minWidth: 120
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      color: onColor ? 'var(--text-on-dark-soft)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatInline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/StatInline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GiveScreen.jsx
try { (() => {
const {
  SiteHeader: GHeader,
  Ticker: GTicker,
  SiteFooter: GFooter,
  Button: GButton,
  SectionLabel: GLabel,
  GivingCard,
  StatFig: GStat
} = window.ComunilifeDesignSystem_ea236c;
const GMAX = 'var(--layout-max-width)';
const gwrap = {
  maxWidth: GMAX,
  margin: '0 auto',
  padding: '0 48px',
  boxSizing: 'border-box'
};
function GiveScreen({
  go
}) {
  const [amount, setAmount] = React.useState('100');
  const [freq, setFreq] = React.useState('once');
  const amounts = ['50', '100', '250', '500'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GHeader, {
    active: "Get Involved",
    onNav: go
  }), /*#__PURE__*/React.createElement(GTicker, {
    items: ['Every gift stays in New York', 'Donations are tax-deductible', 'Since 1989'],
    background: "var(--cl-purple)",
    color: "var(--cl-paper)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...gwrap,
      paddingTop: 80,
      paddingBottom: 72,
      display: 'grid',
      gridTemplateColumns: '1fr 480px',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GLabel, {
    number: "01",
    label: "Make a donation",
    color: "var(--cl-red)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 88,
      lineHeight: 0.96,
      letterSpacing: '-2px',
      color: 'var(--cl-ink)',
      margin: '28px 0 24px'
    }
  }, "Your gift builds a home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: 520,
      margin: '0 0 40px'
    }
  }, "Every dollar goes directly to housing and services for vulnerable New Yorkers. Give once or become a monthly sustainer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(GStat, {
    fig: "01",
    value: "88\\u00A2",
    label: "of every dollar goes to programs",
    color: "var(--cl-red)"
  }), /*#__PURE__*/React.createElement(GStat, {
    fig: "02",
    value: "35+",
    label: "years of trusted service",
    color: "var(--cl-red)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cl-white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 8,
      padding: 32,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24
    }
  }, ['once', 'monthly'].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFreq(f),
    style: {
      flex: 1,
      padding: '12px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      border: '1px solid var(--cl-ink)',
      borderRadius: 4,
      background: freq === f ? 'var(--cl-ink)' : 'transparent',
      color: freq === f ? 'var(--cl-paper)' : 'var(--cl-ink)'
    }
  }, f === 'once' ? 'One time' : 'Monthly'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 12
    }
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setAmount(a),
    style: {
      padding: '18px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-1px',
      cursor: 'pointer',
      border: `1px solid ${amount === a ? 'var(--cl-orange)' : 'var(--border-hairline)'}`,
      borderRadius: 4,
      background: amount === a ? 'var(--cl-orange)' : 'var(--cl-paper)',
      color: 'var(--cl-ink)'
    }
  }, "$", a))), /*#__PURE__*/React.createElement("input", {
    value: amount,
    onChange: e => setAmount(e.target.value.replace(/\D/g, '')),
    placeholder: "Other amount",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      border: '1px solid var(--border-hairline)',
      borderRadius: 4,
      marginBottom: 20,
      color: 'var(--cl-ink)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'block',
      textAlign: 'center',
      background: 'var(--cl-red)',
      color: 'var(--cl-paper)',
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      padding: '18px',
      borderRadius: 4
    }
  }, "Give $", amount || '0', freq === 'monthly' ? ' / month' : '', " \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.5px',
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: '16px 0 0'
    }
  }, "Secure \xB7 Tax-deductible \xB7 EIN 13-3517657"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cl-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...gwrap,
      paddingTop: 100,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(GLabel, {
    number: "02",
    label: "More ways to help",
    color: "var(--cl-purple)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      letterSpacing: '-1.6px',
      lineHeight: 1.02,
      margin: '24px 0 56px',
      maxWidth: 800
    }
  }, "Give in the way that fits you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GivingCard, {
    title: "Give monthly",
    body: "Become a sustaining donor and provide steady support all year round.",
    cta: "Join today",
    accent: "var(--cl-sky)"
  }), /*#__PURE__*/React.createElement(GivingCard, {
    title: "Corporate match",
    body: "Double your impact \u2014 many employers match charitable gifts.",
    cta: "Check eligibility",
    accent: "var(--cl-purple)"
  }), /*#__PURE__*/React.createElement(GivingCard, {
    title: "Legacy giving",
    body: "Include Comunilife in your estate plans and leave a lasting mark.",
    cta: "Learn how",
    accent: "var(--cl-orange)"
  })))), /*#__PURE__*/React.createElement(GFooter, {
    sealSrc: "../../assets/ny-cares-seal.png"
  }));
}
window.GiveScreen = GiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  useState
} = React;
const {
  SiteHeader,
  Ticker,
  SiteFooter,
  Button,
  TextLink,
  SectionLabel,
  StatFig,
  StatInline,
  PillarItem,
  ProgramCard,
  QuoteCard,
  QuoteFeature,
  GivingCard,
  CTAPanel
} = window.ComunilifeDesignSystem_ea236c;
const MAX = 'var(--layout-max-width)';
const wrap = {
  maxWidth: MAX,
  margin: '0 auto',
  padding: '0 48px',
  boxSizing: 'border-box'
};
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "Home",
    onNav: go
  }), /*#__PURE__*/React.createElement(Ticker, {
    items: ['Health is a human right', 'Housing is a human right', 'Dignity for every New Yorker', 'Since 1989'],
    background: "var(--cl-sky)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 88,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "01",
    label: "Comunilife \xB7 Since 1989"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 108,
      lineHeight: 0.95,
      letterSpacing: '-2.4px',
      color: 'var(--cl-ink)',
      margin: '28px 0 0',
      maxWidth: 1100
    }
  }, "Hope, healing,", /*#__PURE__*/React.createElement("br", null), "and a home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 640,
      margin: '32px 0 40px'
    }
  }, "We provide housing and culturally responsive services to vulnerable New Yorkers \u2014 in their language and shaped by their culture."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Make a Donation",
    onClick: e => {
      e.preventDefault();
      go('Give');
    }
  }), /*#__PURE__*/React.createElement(Button, {
    label: "Explore our programs",
    variant: "outline",
    onClick: e => {
      e.preventDefault();
      go('Programs');
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/home-hero.jpg",
    alt: "",
    style: {
      width: '100%',
      height: 480,
      objectFit: 'cover',
      marginTop: 64,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cl-night)',
      color: 'var(--cl-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 100,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "02",
    label: "By the numbers",
    onColor: true,
    color: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 77,
      letterSpacing: '-1.75px',
      lineHeight: 1.02,
      margin: '24px 0 12px',
      maxWidth: 900
    }
  }, "Numbers tell part of the story."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-on-dark-soft)',
      maxWidth: 560,
      margin: '0 0 64px'
    }
  }, "Behind every statistic is a person \u2014 a neighbor, a family, a New Yorker."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(StatFig, {
    fig: "01",
    value: "3,107",
    label: "units of supportive & affordable housing",
    onColor: true,
    color: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement(StatFig, {
    fig: "02",
    value: "750+",
    label: "Latina teens served by Life is Precious",
    onColor: true,
    color: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement(StatFig, {
    fig: "03",
    value: "80",
    label: "Medical Respite beds",
    onColor: true,
    color: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement(StatFig, {
    fig: "04",
    value: "35+",
    label: "years serving New York",
    onColor: true,
    color: "var(--cl-orange)"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 100,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "03",
    label: "What we do",
    color: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 77,
      letterSpacing: '-1.75px',
      lineHeight: 1.02,
      margin: '24px 0 56px',
      maxWidth: 900
    }
  }, "Four pillars of care, rooted in community."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgramCard, {
    number: "01",
    title: "Health & Housing",
    tag: "Since 1992",
    body: "Supportive and affordable housing across New York City, paired with on-site services.",
    background: "var(--cl-blue)"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    number: "02",
    title: "Life is Precious",
    tag: "Since 2008",
    body: "Suicide prevention and wellness for Latina teens and their families.",
    background: "var(--cl-orange)",
    color: "var(--cl-ink)"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    number: "03",
    title: "Medical Respite",
    tag: "Since 2017",
    body: "Short-term housing and recovery for homeless New Yorkers leaving the hospital.",
    background: "var(--cl-purple)"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    number: "04",
    title: "Community Engagement",
    tag: "Ongoing",
    body: "Care coordination, health homes, and social care networks connecting people to services.",
    background: "var(--cl-red)"
  }))), /*#__PURE__*/React.createElement(QuoteFeature, {
    quote: "Health and housing are human rights.",
    name: "Dr. Rosa M. Gil",
    role: "Founder & President",
    background: "var(--cl-purple)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 100,
      paddingBottom: 100,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/about-2.jpg",
    alt: "",
    style: {
      width: '100%',
      height: 460,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "04",
    label: "Who we are",
    color: "var(--cl-red)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 56,
      letterSpacing: '-1.4px',
      lineHeight: 1.04,
      margin: '24px 0 20px'
    }
  }, "A person, not a case file."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '0 0 28px'
    }
  }, "Founded in 1989 by Dr. Rosa M. Gil, Comunilife delivers culturally responsive care in English, Spanish, and French \u2014 no insurance needed. We meet people where they are, and walk with them toward stability."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(StatInline, {
    value: "0",
    label: "suicides among Life is Precious participants in 20+ years"
  }), /*#__PURE__*/React.createElement(StatInline, {
    value: "1989",
    label: "year we opened our doors"
  })), /*#__PURE__*/React.createElement(TextLink, {
    label: "Read our story",
    onClick: e => {
      e.preventDefault();
      go('Programs');
    }
  }))), /*#__PURE__*/React.createElement(CTAPanel, {
    label: "Get involved",
    title: "There are many ways to help.",
    body: "Give, volunteer, or partner with us to build a healthier, more equitable New York.",
    primary: "Make a Donation",
    secondary: "Volunteer with us",
    background: "var(--cl-orange)"
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    sealSrc: "../../assets/ny-cares-seal.png"
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CTAPanel = __ds_scope.CTAPanel;

__ds_ns.GivingCard = __ds_scope.GivingCard;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.QuoteFeature = __ds_scope.QuoteFeature;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Ticker = __ds_scope.Ticker;

__ds_ns.PillarItem = __ds_scope.PillarItem;

__ds_ns.StatFig = __ds_scope.StatFig;

__ds_ns.StatInline = __ds_scope.StatInline;

})();
