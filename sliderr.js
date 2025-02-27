var Ee = Object.defineProperty,
  Ce = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var oe = Object.getOwnPropertySymbols;
var Pe = Object.prototype.hasOwnProperty,
  Ie = Object.prototype.propertyIsEnumerable;
var de = (i, e, t) => e in i ? Ee(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : i[e] = t,
  Y = (i, e) => {
    for (var t in e || (e = {})) Pe.call(e, t) && de(i, t, e[t]);
    if (oe)
      for (var t of oe(e)) Ie.call(e, t) && de(i, t, e[t]);
    return i
  },
  X = (i, e) => Ce(i, Me(e));

function ce(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object
}

function K(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
    typeof i[t] == "undefined" ? i[t] = e[t] : ce(e[t]) && ce(i[t]) && Object.keys(e[t]).length > 0 && K(i[t], e[t])
  })
}
const fe = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return {
      initEvent() {}
    }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function B() {
  const i = typeof document != "undefined" ? document : {};
  return K(i, fe), i
}
const Le = {
  document: fe,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function() {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(i) {
    return typeof setTimeout == "undefined" ? (i(), null) : setTimeout(i, 0)
  },
  cancelAnimationFrame(i) {
    typeof setTimeout != "undefined" && clearTimeout(i)
  }
};

function G() {
  const i = typeof window != "undefined" ? window : {};
  return K(i, Le), i
}

function ze(i) {
  return i === void 0 && (i = ""), i.trim().split(" ").filter(e => !!e.trim())
}

function Ae(i) {
  const e = i;
  Object.keys(e).forEach(t => {
    try {
      e[t] = null
    } catch {}
    try {
      delete e[t]
    } catch {}
  })
}

function U(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e)
}

function N() {
  return Date.now()
}

function Oe(i) {
  const e = G();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t
}

function Ge(i, e) {
  e === void 0 && (e = "x");
  const t = G();
  let s, n, r;
  const o = Oe(i);
  return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(l => l.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function H(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}

function ke(i) {
  return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}

function k() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (s != null && !ke(s)) {
      const n = Object.keys(Object(s)).filter(r => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 && a.enumerable && (H(i[l]) && H(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : k(i[l], s[l]) : !H(i[l]) && H(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : k(i[l], s[l])) : i[l] = s[l])
      }
    }
  }
  return i
}

function _(i, e, t) {
  i.style.setProperty(e, t)
}

function ue(i) {
  let {
    swiper: e,
    targetPosition: t,
    side: s
  } = i;
  const n = G(),
    r = -e.translate;
  let o = null,
    l;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > r ? "next" : "prev",
    f = (h, m) => u === "next" && h >= m || u === "prev" && h <= m,
    p = () => {
      l = new Date().getTime(), o === null && (o = l);
      const h = Math.max(Math.min((l - o) / a, 1), 0),
        m = .5 - Math.cos(h * Math.PI) / 2;
      let v = r + m * (t - r);
      if (f(v, t) && (v = t), e.wrapperEl.scrollTo({
          [s]: v
        }), f(v, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: v
          })
        }), n.cancelAnimationFrame(e.cssModeFrameID);
        return
      }
      e.cssModeFrameID = n.requestAnimationFrame(p)
    };
  p()
}

function $(i, e) {
  return e === void 0 && (e = ""), [...i.children].filter(t => t.matches(e))
}

function R(i) {
  try {
    console.warn(i);
    return
  } catch {}
}

function W(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : ze(e)), t
}

function De(i, e) {
  const t = [];
  for (; i.previousElementSibling;) {
    const s = i.previousElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s
  }
  return t
}

function $e(i, e) {
  const t = [];
  for (; i.nextElementSibling;) {
    const s = i.nextElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s
  }
  return t
}

function V(i, e) {
  return G().getComputedStyle(i, null).getPropertyValue(e)
}

function j(i) {
  let e = i,
    t;
  if (e) {
    for (t = 0;
      (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
    return t
  }
}

function pe(i, e) {
  const t = [];
  let s = i.parentElement;
  for (; s;) e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
  return t
}

function J(i, e, t) {
  const s = G();
  return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}
let Q;

function Ve() {
  const i = G(),
    e = B();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
  }
}

function me() {
  return Q || (Q = Ve()), Q
}
let Z;

function Be(i) {
  let {
    userAgent: e
  } = i === void 0 ? {} : i;
  const t = me(),
    s = G(),
    n = s.navigator.platform,
    r = e || s.navigator.userAgent,
    o = {
      ios: !1,
      android: !1
    },
    l = s.screen.width,
    a = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = r.match(/(iPad).*OS\s([\d_]+)/);
  const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = n === "Win32";
  let v = n === "MacIntel";
  const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !f && v && t.touch && b.indexOf(`${l}x${a}`) >= 0 && (f = r.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), v = !1), u && !m && (o.os = "android", o.android = !0), (f || h || p) && (o.os = "ios", o.ios = !0), o
}

function Fe(i) {
  return i === void 0 && (i = {}), Z || (Z = Be(i)), Z
}
let ee;

function Ne() {
  const i = G();
  let e = !1;

  function t() {
    const s = i.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
  }
  if (t()) {
    const s = String(i.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
      e = n < 16 || n === 16 && r < 2
    }
  }
  return {
    isSafari: e || t(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
  }
}

function He() {
  return ee || (ee = Ne()), ee
}

function _e(i) {
  let {
    swiper: e,
    on: t,
    emit: s
  } = i;
  const n = G();
  let r = null,
    o = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
    },
    a = () => {
      !e || e.destroyed || !e.initialized || (r = new ResizeObserver(p => {
        o = n.requestAnimationFrame(() => {
          const {
            width: h,
            height: m
          } = e;
          let v = h,
            b = m;
          p.forEach(E => {
            let {
              contentBoxSize: w,
              contentRect: c,
              target: d
            } = E;
            d && d !== e.el || (v = c ? c.width : (w[0] || w).inlineSize, b = c ? c.height : (w[0] || w).blockSize)
          }), (v !== h || b !== m) && l()
        })
      }), r.observe(e.el))
    },
    u = () => {
      o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
    },
    f = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange")
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver != "undefined") {
      a();
      return
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", f)
  }), t("destroy", () => {
    u(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", f)
  })
}

function Re(i) {
  let {
    swiper: e,
    extendParams: t,
    on: s,
    emit: n
  } = i;
  const r = [],
    o = G(),
    l = function(f, p) {
      p === void 0 && (p = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        m = new h(v => {
          if (e.__preventObserver__) return;
          if (v.length === 1) {
            n("observerUpdate", v[0]);
            return
          }
          const b = function() {
            n("observerUpdate", v[0])
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(b) : o.setTimeout(b, 0)
        });
      m.observe(f, {
        attributes: typeof p.attributes == "undefined" ? !0 : p.attributes,
        childList: typeof p.childList == "undefined" ? !0 : p.childList,
        characterData: typeof p.characterData == "undefined" ? !0 : p.characterData
      }), r.push(m)
    },
    a = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const f = pe(e.hostEl);
          for (let p = 0; p < f.length; p += 1) l(f[p])
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        })
      }
    },
    u = () => {
      r.forEach(f => {
        f.disconnect()
      }), r.splice(0, r.length)
    };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", u)
}
var We = {
  on(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = t ? "unshift" : "push";
    return i.split(" ").forEach(r => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e)
    }), s
  },
  once(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

    function n() {
      s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
      e.apply(s, o)
    }
    return n.__emitterProxy = e, s.on(i, n, t)
  },
  onAny(i, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
    const s = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
  },
  offAny(i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
  },
  off(i, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
      typeof e == "undefined" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
      })
    }), t
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
    let e, t, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), s = i) : (e = r[0].events, t = r[0].data, s = r[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
      i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(u => {
        u.apply(s, [a, ...t])
      }), i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach(u => {
        u.apply(s, t)
      })
    }), i
  }
};

function je() {
  const i = this;
  let e, t;
  const s = i.el;
  typeof i.params.width != "undefined" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height != "undefined" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(V(s, "padding-left") || 0, 10) - parseInt(V(s, "padding-right") || 0, 10), t = t - parseInt(V(s, "padding-top") || 0, 10) - parseInt(V(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
    width: e,
    height: t,
    size: i.isHorizontal() ? e : t
  }))
}

function qe() {
  const i = this;

  function e(S, x) {
    return parseFloat(S.getPropertyValue(i.getDirectionLabel(x)) || 0)
  }
  const t = i.params,
    {
      wrapperEl: s,
      slidesEl: n,
      size: r,
      rtlTranslate: o,
      wrongRTL: l
    } = i,
    a = i.virtual && t.virtual.enabled,
    u = a ? i.virtual.slides.length : i.slides.length,
    f = $(n, `.${i.params.slideClass}, swiper-slide`),
    p = a ? i.virtual.slides.length : f.length;
  let h = [];
  const m = [],
    v = [];
  let b = t.slidesOffsetBefore;
  typeof b == "function" && (b = t.slidesOffsetBefore.call(i));
  let E = t.slidesOffsetAfter;
  typeof E == "function" && (E = t.slidesOffsetAfter.call(i));
  const w = i.snapGrid.length,
    c = i.slidesGrid.length;
  let d = t.spaceBetween,
    g = -b,
    y = 0,
    M = 0;
  if (typeof r == "undefined") return;
  typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * r : typeof d == "string" && (d = parseFloat(d)), i.virtualSize = -d, f.forEach(S => {
    o ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = ""
  }), t.centeredSlides && t.cssMode && (_(s, "--swiper-centered-offset-before", ""), _(s, "--swiper-centered-offset-after", ""));
  const A = t.grid && t.grid.rows > 1 && i.grid;
  A ? i.grid.initSlides(f) : i.grid && i.grid.unsetSlides();
  let z;
  const L = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(S => typeof t.breakpoints[S].slidesPerView != "undefined").length > 0;
  for (let S = 0; S < p; S += 1) {
    z = 0;
    let x;
    if (f[S] && (x = f[S]), A && i.grid.updateSlide(S, x, f), !(f[S] && V(x, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        L && (f[S].style[i.getDirectionLabel("width")] = "");
        const C = getComputedStyle(x),
          T = x.style.transform,
          P = x.style.webkitTransform;
        if (T && (x.style.transform = "none"), P && (x.style.webkitTransform = "none"), t.roundLengths) z = i.isHorizontal() ? J(x, "width", !0) : J(x, "height", !0);
        else {
          const I = e(C, "width"),
            O = e(C, "padding-left"),
            be = e(C, "padding-right"),
            ne = e(C, "margin-left"),
            ae = e(C, "margin-right"),
            le = C.getPropertyValue("box-sizing");
          if (le && le === "border-box") z = I + ne + ae;
          else {
            const {
              clientWidth: xe,
              offsetWidth: ye
            } = x;
            z = I + O + be + ne + ae + (ye - xe)
          }
        }
        T && (x.style.transform = T), P && (x.style.webkitTransform = P), t.roundLengths && (z = Math.floor(z))
      } else z = (r - (t.slidesPerView - 1) * d) / t.slidesPerView, t.roundLengths && (z = Math.floor(z)), f[S] && (f[S].style[i.getDirectionLabel("width")] = `${z}px`);
      f[S] && (f[S].swiperSlideSize = z), v.push(z), t.centeredSlides ? (g = g + z / 2 + y / 2 + d, y === 0 && S !== 0 && (g = g - r / 2 - d), S === 0 && (g = g - r / 2 - d), Math.abs(g) < 1 / 1e3 && (g = 0), t.roundLengths && (g = Math.floor(g)), M % t.slidesPerGroup == 0 && h.push(g), m.push(g)) : (t.roundLengths && (g = Math.floor(g)), (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup == 0 && h.push(g), m.push(g), g = g + z + d), i.virtualSize += z + d, y = z, M += 1
    }
  }
  if (i.virtualSize = Math.max(i.virtualSize, r) + E, o && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize+d}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize+d}px`), A && i.grid.updateWrapperSize(z, h), !t.centeredSlides) {
    const S = [];
    for (let x = 0; x < h.length; x += 1) {
      let C = h[x];
      t.roundLengths && (C = Math.floor(C)), h[x] <= i.virtualSize - r && S.push(C)
    }
    h = S, Math.floor(i.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(i.virtualSize - r)
  }
  if (a && t.loop) {
    const S = v[0] + d;
    if (t.slidesPerGroup > 1) {
      const x = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
        C = S * t.slidesPerGroup;
      for (let T = 0; T < x; T += 1) h.push(h[h.length - 1] + C)
    }
    for (let x = 0; x < i.virtual.slidesBefore + i.virtual.slidesAfter; x += 1) t.slidesPerGroup === 1 && h.push(h[h.length - 1] + S), m.push(m[m.length - 1] + S), i.virtualSize += S
  }
  if (h.length === 0 && (h = [0]), d !== 0) {
    const S = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
    f.filter((x, C) => !t.cssMode || t.loop ? !0 : C !== f.length - 1).forEach(x => {
      x.style[S] = `${d}px`
    })
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    v.forEach(C => {
      S += C + (d || 0)
    }), S -= d;
    const x = S - r;
    h = h.map(C => C <= 0 ? -b : C > x ? x + E : C)
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    if (v.forEach(x => {
        S += x + (d || 0)
      }), S -= d, S < r) {
      const x = (r - S) / 2;
      h.forEach((C, T) => {
        h[T] = C - x
      }), m.forEach((C, T) => {
        m[T] = C + x
      })
    }
  }
  if (Object.assign(i, {
      slides: f,
      snapGrid: h,
      slidesGrid: m,
      slidesSizesGrid: v
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    _(s, "--swiper-centered-offset-before", `${-h[0]}px`), _(s, "--swiper-centered-offset-after", `${i.size/2-v[v.length-1]/2}px`);
    const S = -i.snapGrid[0],
      x = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map(C => C + S), i.slidesGrid = i.slidesGrid.map(C => C + x)
  }
  if (p !== u && i.emit("slidesLengthChange"), h.length !== w && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), m.length !== c && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const S = `${t.containerModifierClass}backface-hidden`,
      x = i.el.classList.contains(S);
    p <= t.maxBackfaceHiddenSlides ? x || i.el.classList.add(S) : x && i.el.classList.remove(S)
  }
}

function Ye(i) {
  const e = this,
    t = [],
    s = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
  const o = l => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)(e.visibleSlides || []).forEach(l => {
      t.push(l)
    });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        t.push(o(l))
      } else t.push(o(e.activeIndex));
  for (r = 0; r < t.length; r += 1)
    if (typeof t[r] != "undefined") {
      const l = t[r].offsetHeight;
      n = l > n ? l : n
    }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function Xe() {
  const i = this,
    e = i.slides,
    t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}

function Ke(i) {
  i === void 0 && (i = this && this.translate || 0);
  const e = this,
    t = e.params,
    {
      slides: s,
      rtlTranslate: n,
      snapGrid: r
    } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
  let o = -i;
  n && (o = i), s.forEach(a => {
    a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = t.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a];
    let f = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (f -= s[0].swiperSlideOffset);
    const p = (o + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + l),
      h = (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + l),
      m = -(o - f),
      v = m + e.slidesSizesGrid[a],
      b = m >= 0 && m <= e.size - e.slidesSizesGrid[a];
    (m >= 0 && m < e.size - 1 || v > 1 && v <= e.size || m <= 0 && v >= e.size) && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(a), s[a].classList.add(t.slideVisibleClass)), b && s[a].classList.add(t.slideFullyVisibleClass), u.progress = n ? -p : p, u.originalProgress = n ? -h : h
  }
}

function Ue(i) {
  const e = this;
  if (typeof i == "undefined") {
    const f = e.rtlTranslate ? -1 : 1;
    i = e && e.translate && e.translate * f || 0
  }
  const t = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: o,
    progressLoop: l
  } = e;
  const a = r,
    u = o;
  if (s === 0) n = 0, r = !0, o = !0;
  else {
    n = (i - e.minTranslate()) / s;
    const f = Math.abs(i - e.minTranslate()) < 1,
      p = Math.abs(i - e.maxTranslate()) < 1;
    r = f || n <= 0, o = p || n >= 1, f && (n = 0), p && (n = 1)
  }
  if (t.loop) {
    const f = e.getSlideIndexByData(0),
      p = e.getSlideIndexByData(e.slides.length - 1),
      h = e.slidesGrid[f],
      m = e.slidesGrid[p],
      v = e.slidesGrid[e.slidesGrid.length - 1],
      b = Math.abs(i);
    b >= h ? l = (b - h) / v : l = (b + v - m) / v, l > 1 && (l -= 1)
  }
  Object.assign(e, {
    progress: n,
    progressLoop: l,
    isBeginning: r,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), r && !a && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (a && !r || u && !o) && e.emit("fromEdge"), e.emit("progress", n)
}

function Je() {
  const i = this,
    {
      slides: e,
      params: t,
      slidesEl: s,
      activeIndex: n
    } = i,
    r = i.virtual && t.virtual.enabled,
    o = i.grid && t.grid && t.grid.rows > 1,
    l = p => $(s, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
  e.forEach(p => {
    p.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
  });
  let a, u, f;
  if (r)
    if (t.loop) {
      let p = n - i.virtual.slidesBefore;
      p < 0 && (p = i.virtual.slides.length + p), p >= i.virtual.slides.length && (p -= i.virtual.slides.length), a = l(`[data-swiper-slide-index="${p}"]`)
    } else a = l(`[data-swiper-slide-index="${n}"]`);
  else o ? (a = e.filter(p => p.column === n)[0], f = e.filter(p => p.column === n + 1)[0], u = e.filter(p => p.column === n - 1)[0]) : a = e[n];
  a && (a.classList.add(t.slideActiveClass), o ? (f && f.classList.add(t.slideNextClass), u && u.classList.add(t.slidePrevClass)) : (f = $e(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !f && (f = e[0]), f && f.classList.add(t.slideNextClass), u = De(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]), u && u.classList.add(t.slidePrevClass))), i.emitSlidesClasses()
}
const q = (i, e) => {
    if (!i || i.destroyed || !i.params) return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`,
      s = e.closest(t());
    if (s) {
      let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && n.remove())
      })), n && n.remove()
    }
  },
  te = (i, e) => {
    if (!i.slides[e]) return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
  },
  ie = i => {
    if (!i || i.destroyed || !i.params) return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
      n = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const o = n,
        l = [o - e];
      l.push(...Array.from({
        length: e
      }).map((a, u) => o + s + u)), i.slides.forEach((a, u) => {
        l.includes(a.column) && te(i, u)
      });
      return
    }
    const r = n + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let o = n - e; o <= r + e; o += 1) {
        const l = (o % t + t) % t;
        (l < n || l > r) && te(i, l)
      } else
        for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1) o !== n && (o > r || o < n) && te(i, o)
  };

function Qe(i) {
  const {
    slidesGrid: e,
    params: t
  } = i, s = i.rtlTranslate ? i.translate : -i.translate;
  let n;
  for (let r = 0; r < e.length; r += 1) typeof e[r + 1] != "undefined" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return t.normalizeSlideIndex && (n < 0 || typeof n == "undefined") && (n = 0), n
}

function Ze(i) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      snapGrid: s,
      params: n,
      activeIndex: r,
      realIndex: o,
      snapIndex: l
    } = e;
  let a = i,
    u;
  const f = m => {
    let v = m - e.virtual.slidesBefore;
    return v < 0 && (v = e.virtual.slides.length + v), v >= e.virtual.slides.length && (v -= e.virtual.slides.length), v
  };
  if (typeof a == "undefined" && (a = Qe(e)), s.indexOf(t) >= 0) u = s.indexOf(t);
  else {
    const m = Math.min(n.slidesPerGroupSkip, a);
    u = m + Math.floor((a - m) / n.slidesPerGroup)
  }
  if (u >= s.length && (u = s.length - 1), a === r && !e.params.loop) {
    u !== l && (e.snapIndex = u, e.emit("snapIndexChange"));
    return
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = f(a);
    return
  }
  const p = e.grid && n.grid && n.grid.rows > 1;
  let h;
  if (e.virtual && n.virtual.enabled && n.loop) h = f(a);
  else if (p) {
    const m = e.slides.filter(b => b.column === a)[0];
    let v = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(e.slides.indexOf(m), 0)), h = Math.floor(v / n.grid.rows)
  } else if (e.slides[a]) {
    const m = e.slides[a].getAttribute("data-swiper-slide-index");
    m ? h = parseInt(m, 10) : h = a
  } else h = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && ie(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"))
}

function et(i, e) {
  const t = this,
    s = t.params;
  let n = i.closest(`.${s.slideClass}, swiper-slide`);
  !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(l => {
    !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l)
  });
  let r = !1,
    o;
  if (n) {
    for (let l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === n) {
        r = !0, o = l;
        break
      }
  }
  if (n && r) t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var tt = {
  updateSize: je,
  updateSlides: qe,
  updateAutoHeight: Ye,
  updateSlidesOffset: Xe,
  updateSlidesProgress: Ke,
  updateProgress: Ue,
  updateSlidesClasses: Je,
  updateActiveIndex: Ze,
  updateClickedSlide: et
};

function it(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const e = this,
    {
      params: t,
      rtlTranslate: s,
      translate: n,
      wrapperEl: r
    } = e;
  if (t.virtualTranslate) return s ? -n : n;
  if (t.cssMode) return n;
  let o = Ge(r, i);
  return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0
}

function st(i, e) {
  const t = this,
    {
      rtlTranslate: s,
      params: n,
      wrapperEl: r,
      progress: o
    } = t;
  let l = 0,
    a = 0;
  const u = 0;
  t.isHorizontal() ? l = s ? -i : i : a = i, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : n.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`);
  let f;
  const p = t.maxTranslate() - t.minTranslate();
  p === 0 ? f = 0 : f = (i - t.minTranslate()) / p, f !== o && t.updateProgress(i), t.emit("setTranslate", t.translate, e)
}

function rt() {
  return -this.snapGrid[0]
}

function nt() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function at(i, e, t, s, n) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
  const r = this,
    {
      params: o,
      wrapperEl: l
    } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    u = r.maxTranslate();
  let f;
  if (s && i > a ? f = a : s && i < u ? f = u : f = i, r.updateProgress(f), o.cssMode) {
    const p = r.isHorizontal();
    if (e === 0) l[p ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll) return ue({
        swiper: r,
        targetPosition: -f,
        side: p ? "left" : "top"
      }), !0;
      l.scrollTo({
        [p ? "left" : "top"]: -f,
        behavior: "smooth"
      })
    }
    return !0
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(f), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(f), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
    !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, t && r.emit("transitionEnd"))
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var lt = {
  getTranslate: it,
  setTranslate: st,
  minTranslate: rt,
  maxTranslate: nt,
  translateTo: at
};

function ot(i, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e)
}

function he(i) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: s,
    step: n
  } = i;
  const {
    activeIndex: r,
    previousIndex: o
  } = e;
  let l = s;
  if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit(`transition${n}`), t && r !== o) {
    if (l === "reset") {
      e.emit(`slideResetTransition${n}`);
      return
    }
    e.emit(`slideChangeTransition${n}`), l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
  }
}

function dt(i, e) {
  i === void 0 && (i = !0);
  const t = this,
    {
      params: s
    } = t;
  s.cssMode || (s.autoHeight && t.updateAutoHeight(), he({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "Start"
  }))
}

function ct(i, e) {
  i === void 0 && (i = !0);
  const t = this,
    {
      params: s
    } = t;
  t.animating = !1, !s.cssMode && (t.setTransition(0), he({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "End"
  }))
}
var ft = {
  setTransition: ot,
  transitionStart: dt,
  transitionEnd: ct
};

function ut(i, e, t, s, n) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const r = this;
  let o = i;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: f,
    activeIndex: p,
    rtlTranslate: h,
    wrapperEl: m,
    enabled: v
  } = r;
  if (r.animating && l.preventInteractionOnTransition || !v && !s && !n) return !1;
  const b = Math.min(r.params.slidesPerGroupSkip, o);
  let E = b + Math.floor((o - b) / r.params.slidesPerGroup);
  E >= a.length && (E = a.length - 1);
  const w = -a[E];
  if (l.normalizeSlideIndex)
    for (let d = 0; d < u.length; d += 1) {
      const g = -Math.floor(w * 100),
        y = Math.floor(u[d] * 100),
        M = Math.floor(u[d + 1] * 100);
      typeof u[d + 1] != "undefined" ? g >= y && g < M - (M - y) / 2 ? o = d : g >= y && g < M && (o = d + 1) : g >= y && (o = d)
    }
  if (r.initialized && o !== p && (!r.allowSlideNext && (h ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()) || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== o)) return !1;
  o !== (f || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
  let c;
  if (o > p ? c = "next" : o < p ? c = "prev" : c = "reset", h && -w === r.translate || !h && w === r.translate) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(w), c !== "reset" && (r.transitionStart(t, c), r.transitionEnd(t, c)), !1;
  if (l.cssMode) {
    const d = r.isHorizontal(),
      g = h ? w : -w;
    if (e === 0) {
      const y = r.virtual && r.params.virtual.enabled;
      y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        m[d ? "scrollLeft" : "scrollTop"] = g
      })) : m[d ? "scrollLeft" : "scrollTop"] = g, y && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
      })
    } else {
      if (!r.support.smoothScroll) return ue({
        swiper: r,
        targetPosition: g,
        side: d ? "left" : "top"
      }), !0;
      m.scrollTo({
        [d ? "left" : "top"]: g,
        behavior: "smooth"
      })
    }
    return !0
  }
  return r.setTransition(e), r.setTranslate(w), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(t, c), e === 0 ? r.transitionEnd(t, c) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(g) {
    !r || r.destroyed || g.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, c))
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function pt(i, e, t, s) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const n = this,
    r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = i;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const h = o * n.params.grid.rows;
        l = n.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
      } else l = n.getSlideIndexByData(o);
      const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
        {
          centeredSlides: u
        } = n.params;
      let f = n.params.slidesPerView;
      f === "auto" ? f = n.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(n.params.slidesPerView, 10)), u && f % 2 == 0 && (f = f + 1));
      let p = a - l < f;
      if (u && (p = p || l < Math.ceil(f / 2)), p) {
        const h = u ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
          slideRealIndex: h === "next" ? n.realIndex : void 0
        })
      }
      if (r) {
        const h = o * n.params.grid.rows;
        o = n.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
      } else o = n.getSlideIndexByData(o)
    } return requestAnimationFrame(() => {
    n.slideTo(o, e, t, s)
  }), n
}

function mt(i, e, t) {
  i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      enabled: n,
      params: r,
      animating: o
    } = s;
  if (!n) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
      s.slideTo(s.activeIndex + a, i, e, t)
    }), !0
  }
  return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t)
}

function ht(i, e, t) {
  i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u
    } = s;
  if (!a) return s;
  const f = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (u && !f && n.loopPreventsSliding) return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft
  }
  const p = l ? s.translate : -s.translate;

  function h(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
  }
  const m = h(p),
    v = r.map(w => h(w));
  let b = r[v.indexOf(m) - 1];
  if (typeof b == "undefined" && n.cssMode) {
    let w;
    r.forEach((c, d) => {
      m >= c && (w = d)
    }), typeof w != "undefined" && (b = r[w > 0 ? w - 1 : w])
  }
  let E = 0;
  if (typeof b != "undefined" && (E = o.indexOf(b), E < 0 && (E = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (E = E - s.slidesPerViewDynamic("previous", !0) + 1, E = Math.max(E, 0))), n.rewind && s.isBeginning) {
    const w = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(w, i, e, t)
  } else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
    s.slideTo(E, i, e, t)
  }), !0;
  return s.slideTo(E, i, e, t)
}

function gt(i, e, t) {
  i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, i, e, t)
}

function vt(i, e, t, s) {
  i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = .5);
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const u = n.snapGrid[l],
      f = n.snapGrid[l + 1];
    a - u > (f - u) * s && (r += n.params.slidesPerGroup)
  } else {
    const u = n.snapGrid[l - 1],
      f = n.snapGrid[l];
    a - u <= (f - u) * s && (r -= n.params.slidesPerGroup)
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, i, e, t)
}

function wt() {
  const i = this,
    {
      params: e,
      slidesEl: t
    } = i,
    s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let n = i.clickedIndex,
    r;
  const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating) return;
    r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), n = i.getSlideIndex($(t, `${o}[data-swiper-slide-index="${r}"]`)[0]), U(() => {
      i.slideTo(n)
    })) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(), n = i.getSlideIndex($(t, `${o}[data-swiper-slide-index="${r}"]`)[0]), U(() => {
      i.slideTo(n)
    })) : i.slideTo(n)
  } else i.slideTo(n)
}
var St = {
  slideTo: ut,
  slideToLoop: pt,
  slideNext: mt,
  slidePrev: ht,
  slideReset: gt,
  slideToClosest: vt,
  slideToClickedSlide: wt
};

function Tt(i) {
  const e = this,
    {
      params: t,
      slidesEl: s
    } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const n = () => {
      $(s, `.${t.slideClass}, swiper-slide`).forEach((p, h) => {
        p.setAttribute("data-swiper-slide-index", h)
      })
    },
    r = e.grid && t.grid && t.grid.rows > 1,
    o = t.slidesPerGroup * (r ? t.grid.rows : 1),
    l = e.slides.length % o != 0,
    a = r && e.slides.length % t.grid.rows != 0,
    u = f => {
      for (let p = 0; p < f; p += 1) {
        const h = e.isElement ? W("swiper-slide", [t.slideBlankClass]) : W("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(h)
      }
    };
  if (l) {
    if (t.loopAddBlankSlides) {
      const f = o - e.slides.length % o;
      u(f), e.recalcSlides(), e.updateSlides()
    } else R("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n()
  } else if (a) {
    if (t.loopAddBlankSlides) {
      const f = t.grid.rows - e.slides.length % t.grid.rows;
      u(f), e.recalcSlides(), e.updateSlides()
    } else R("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n()
  } else n();
  e.loopFix({
    slideRealIndex: i,
    direction: t.centeredSlides ? void 0 : "next"
  })
}

function bt(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l
  } = i === void 0 ? {} : i;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: f,
    allowSlideNext: p,
    slidesEl: h,
    params: m
  } = a, {
    centeredSlides: v
  } = m;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && m.virtual.enabled) {
    t && (!m.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : m.centeredSlides && a.snapIndex < m.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = f, a.allowSlideNext = p, a.emit("loopFix");
    return
  }
  let b = m.slidesPerView;
  b === "auto" ? b = a.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(m.slidesPerView, 10)), v && b % 2 == 0 && (b = b + 1));
  const E = m.slidesPerGroupAuto ? b : m.slidesPerGroup;
  let w = E;
  w % E != 0 && (w += E - w % E), w += m.loopAdditionalSlides, a.loopedSlides = w;
  const c = a.grid && m.grid && m.grid.rows > 1;
  u.length < b + w ? R("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : c && m.grid.fill === "row" && R("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const d = [],
    g = [];
  let y = a.activeIndex;
  typeof r == "undefined" ? r = a.getSlideIndex(u.filter(T => T.classList.contains(m.slideActiveClass))[0]) : y = r;
  const M = s === "next" || !s,
    A = s === "prev" || !s;
  let z = 0,
    L = 0;
  const S = c ? Math.ceil(u.length / m.grid.rows) : u.length,
    C = (c ? u[r].column : r) + (v && typeof n == "undefined" ? -b / 2 + .5 : 0);
  if (C < w) {
    z = Math.max(w - C, E);
    for (let T = 0; T < w - C; T += 1) {
      const P = T - Math.floor(T / S) * S;
      if (c) {
        const I = S - P - 1;
        for (let O = u.length - 1; O >= 0; O -= 1) u[O].column === I && d.push(O)
      } else d.push(S - P - 1)
    }
  } else if (C + b > S - w) {
    L = Math.max(C - (S - w * 2), E);
    for (let T = 0; T < L; T += 1) {
      const P = T - Math.floor(T / S) * S;
      c ? u.forEach((I, O) => {
        I.column === P && g.push(O)
      }) : g.push(P)
    }
  }
  if (A && d.forEach(T => {
      u[T].swiperLoopMoveDOM = !0, h.prepend(u[T]), u[T].swiperLoopMoveDOM = !1
    }), M && g.forEach(T => {
      u[T].swiperLoopMoveDOM = !0, h.append(u[T]), u[T].swiperLoopMoveDOM = !1
    }), a.recalcSlides(), m.slidesPerView === "auto" ? a.updateSlides() : c && (d.length > 0 && A || g.length > 0 && M) && a.slides.forEach((T, P) => {
      a.grid.updateSlide(P, T, a.slides)
    }), m.watchSlidesProgress && a.updateSlidesOffset(), t) {
    if (d.length > 0 && A) {
      if (typeof e == "undefined") {
        const T = a.slidesGrid[y],
          I = a.slidesGrid[y + z] - T;
        l ? a.setTranslate(a.translate - I) : (a.slideTo(y + z, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I))
      } else if (n) {
        const T = c ? d.length / m.grid.rows : d.length;
        a.slideTo(a.activeIndex + T, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate
      }
    } else if (g.length > 0 && M)
      if (typeof e == "undefined") {
        const T = a.slidesGrid[y],
          I = a.slidesGrid[y - L] - T;
        l ? a.setTranslate(a.translate - I) : (a.slideTo(y - L, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I))
      } else {
        const T = c ? g.length / m.grid.rows : g.length;
        a.slideTo(a.activeIndex - T, 0, !1, !0)
      }
  }
  if (a.allowSlidePrev = f, a.allowSlideNext = p, a.controller && a.controller.control && !o) {
    const T = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach(P => {
      !P.destroyed && P.params.loop && P.loopFix(X(Y({}, T), {
        slideTo: P.params.slidesPerView === m.slidesPerView ? t : !1
      }))
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(X(Y({}, T), {
      slideTo: a.controller.control.params.slidesPerView === m.slidesPerView ? t : !1
    }))
  }
  a.emit("loopFix")
}

function xt() {
  const i = this,
    {
      params: e,
      slidesEl: t
    } = i;
  if (!e.loop || i.virtual && i.params.virtual.enabled) return;
  i.recalcSlides();
  const s = [];
  i.slides.forEach(n => {
    const r = typeof n.swiperSlideIndex == "undefined" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n
  }), i.slides.forEach(n => {
    n.removeAttribute("data-swiper-slide-index")
  }), s.forEach(n => {
    t.append(n)
  }), i.recalcSlides(), i.slideTo(i.realIndex, 0)
}
var yt = {
  loopCreate: Tt,
  loopFix: bt,
  loopDestroy: xt
};

function Et(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  })
}

function Ct() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1
  }))
}
var Mt = {
  setGrabCursor: Et,
  unsetGrabCursor: Ct
};

function Pt(i, e) {
  e === void 0 && (e = this);

  function t(s) {
    if (!s || s === B() || s === G()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(i);
    return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
  }
  return t(e)
}

function ge(i, e, t) {
  const s = G(),
    {
      params: n
    } = i,
    r = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return r && (t <= o || t >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function It(i) {
  const e = this,
    t = B();
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
    n.pointerId = s.pointerId
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    ge(e, s, s.targetTouches[0].pageX);
    return
  }
  const {
    params: r,
    touches: o,
    enabled: l
  } = e;
  if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    f = s.composedPath ? s.composedPath() : s.path;
  u && s.target && s.target.shadowRoot && f && (a = f[0]);
  const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    h = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (h ? Pt(p, a) : a.closest(p))) {
    e.allowClick = !0;
    return
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  o.currentX = s.pageX, o.currentY = s.pageY;
  const m = o.currentX,
    v = o.currentY;
  if (!ge(e, s, m)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = m, o.startY = v, n.touchStartTime = N(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let b = !0;
  a.matches(n.focusableElements) && (b = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
  const E = b && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || E) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
}

function Lt(i) {
  const e = B(),
    t = this,
    s = t.touchEventsData,
    {
      params: n,
      touches: r,
      rtlTranslate: o,
      enabled: l
    } = t;
  if (!l || !n.simulateTouch && i.pointerType === "mouse") return;
  let a = i;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId)) return;
  let u;
  if (a.type === "touchmove") {
    if (u = [...a.changedTouches].filter(M => M.identifier === s.touchId)[0], !u || u.identifier !== s.touchId) return
  } else u = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
    return
  }
  const f = u.pageX,
    p = u.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = f, r.startY = p;
    return
  }
  if (!t.allowTouchMove) {
    a.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: f,
      startY: p,
      currentX: f,
      currentY: p
    }), s.touchStartTime = N());
    return
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (t.isVertical()) {
      if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return
      }
    } else if (f < r.startX && t.translate <= t.maxTranslate() || f > r.startX && t.translate >= t.minTranslate()) return
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return
  }
  s.allowTouchCallbacks && t.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = f, r.currentY = p;
  const h = r.currentX - r.startX,
    m = r.currentY - r.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + m ** 2) < t.params.threshold) return;
  if (typeof s.isScrolling == "undefined") {
    let M;
    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + m * m >= 25 && (M = Math.atan2(Math.abs(m), Math.abs(h)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? M > n.touchAngle : 90 - M > n.touchAngle)
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", a), typeof s.startMoving == "undefined" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled) {
    s.isTouched = !1;
    return
  }
  if (!s.startMoving) return;
  t.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let v = t.isHorizontal() ? h : m,
    b = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), b = Math.abs(b) * (o ? 1 : -1)), r.diff = v, v *= n.touchRatio, o && (v = -v, b = -b);
  const E = t.touchesDirection;
  t.swipeDirection = v > 0 ? "prev" : "next", t.touchesDirection = b > 0 ? "prev" : "next";
  const w = t.params.loop && !n.cssMode,
    c = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (w && c && t.loopFix({
        direction: t.swipeDirection
      }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const M = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      t.wrapperEl.dispatchEvent(M)
    }
    s.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a)
  }
  let d;
  if (new Date().getTime(), s.isMoved && s.allowThresholdMove && E !== t.touchesDirection && w && c && Math.abs(v) >= 1) {
    Object.assign(r, {
      startX: f,
      startY: p,
      currentX: f,
      currentY: p,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return
  }
  t.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = v + s.startTranslate;
  let g = !0,
    y = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (y = 0), v > 0 ? (w && c && !d && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > t.minTranslate() && (g = !1, n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + v) ** y))) : v < 0 && (w && c && !d && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), s.currentTranslate < t.maxTranslate() && (g = !1, n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - v) ** y))), g && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(v) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return
    }! n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
}

function zt(i) {
  const e = this,
    t = e.touchEventsData;
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (n = [...s.changedTouches].filter(g => g.identifier === t.touchId)[0], !n || n.identifier !== t.touchId) return
  } else {
    if (t.touchId !== null || s.pointerId !== t.pointerId) return;
    n = s
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
  t.pointerId = null, t.touchId = null;
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: f
  } = e;
  if (!f || !o.simulateTouch && s.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return
  }
  o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const p = N(),
    h = p - t.touchStartTime;
  if (e.allowClick) {
    const g = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(g && g[0] || s.target, g), e.emit("tap click", s), h < 300 && p - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
  }
  if (t.lastClickTime = N(), U(() => {
      e.destroyed || (e.allowClick = !0)
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let m;
  if (o.followFinger ? m = a ? e.translate : -e.translate : m = -t.currentTranslate, o.cssMode) return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: m
    });
    return
  }
  let v = 0,
    b = e.slidesSizesGrid[0];
  for (let g = 0; g < u.length; g += g < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const y = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[g + y] != "undefined" ? m >= u[g] && m < u[g + y] && (v = g, b = u[g + y] - u[g]) : m >= u[g] && (v = g, b = u[u.length - 1] - u[u.length - 2])
  }
  let E = null,
    w = null;
  o.rewind && (e.isBeginning ? w = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (E = 0));
  const c = (m - u[v]) / b,
    d = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.swipeDirection === "next" && (c >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? E : v + d) : e.slideTo(v)), e.swipeDirection === "prev" && (c > 1 - o.longSwipesRatio ? e.slideTo(v + d) : w !== null && c < 0 && Math.abs(c) > o.longSwipesRatio ? e.slideTo(w) : e.slideTo(v))
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + d) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(E !== null ? E : v + d), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : v))
  }
}

function ve() {
  const i = this,
    {
      params: e,
      el: t
    } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = i, o = i.virtual && i.params.virtual.enabled;
  i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
  }, 500)), i.allowSlidePrev = n, i.allowSlideNext = s, i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}

function At(i) {
  const e = this;
  !e.enabled || e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation()))
}

function Ot() {
  const i = this,
    {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: s
    } = i;
  if (!s) return;
  i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
  let n;
  const r = i.maxTranslate() - i.minTranslate();
  r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r, n !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1)
}

function Gt(i) {
  const e = this;
  q(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function kt() {
  const i = this;
  i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const we = (i, e) => {
  const t = B(),
    {
      params: s,
      el: n,
      wrapperEl: r,
      device: o
    } = i,
    l = !!s.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  t[a]("touchstart", i.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), n[a]("touchstart", i.onTouchStart, {
    passive: !1
  }), n[a]("pointerdown", i.onTouchStart, {
    passive: !1
  }), t[a]("touchmove", i.onTouchMove, {
    passive: !1,
    capture: l
  }), t[a]("pointermove", i.onTouchMove, {
    passive: !1,
    capture: l
  }), t[a]("touchend", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerup", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointercancel", i.onTouchEnd, {
    passive: !0
  }), t[a]("touchcancel", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerout", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerleave", i.onTouchEnd, {
    passive: !0
  }), t[a]("contextmenu", i.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0), s.cssMode && r[a]("scroll", i.onScroll), s.updateOnWindowResize ? i[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ve, !0) : i[u]("observerUpdate", ve, !0), n[a]("load", i.onLoad, {
    capture: !0
  })
};

function Dt() {
  const i = this,
    {
      params: e
    } = i;
  i.onTouchStart = It.bind(i), i.onTouchMove = Lt.bind(i), i.onTouchEnd = zt.bind(i), i.onDocumentTouchStart = kt.bind(i), e.cssMode && (i.onScroll = Ot.bind(i)), i.onClick = At.bind(i), i.onLoad = Gt.bind(i), we(i, "on")
}

function $t() {
  we(this, "off")
}
var Vt = {
  attachEvents: Dt,
  detachEvents: $t
};
const Se = (i, e) => i.grid && e.grid && e.grid.rows > 1;

function Bt() {
  const i = this,
    {
      realIndex: e,
      initialized: t,
      params: s,
      el: n
    } = i,
    r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const o = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
  if (!o || i.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || i.originalParams,
    u = Se(i, s),
    f = Se(i, a),
    p = s.enabled;
  u && !f ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !u && f && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(w => {
    if (typeof a[w] == "undefined") return;
    const c = s[w] && s[w].enabled,
      d = a[w] && a[w].enabled;
    c && !d && i[w].disable(), !c && d && i[w].enable()
  });
  const h = a.direction && a.direction !== s.direction,
    m = s.loop && (a.slidesPerView !== s.slidesPerView || h),
    v = s.loop;
  h && t && i.changeDirection(), k(i.params, a);
  const b = i.params.enabled,
    E = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev
  }), p && !b ? i.disable() : !p && b && i.enable(), i.currentBreakpoint = o, i.emit("_beforeBreakpoint", a), t && (m ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !v && E ? (i.loopCreate(e), i.updateSlides()) : v && !E && i.loopDestroy()), i.emit("breakpoint", a)
}

function Ft(i, e, t) {
  if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
  let s = !1;
  const n = G(),
    r = e === "window" ? n.innerHeight : t.clientHeight,
    o = Object.keys(i).map(l => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return {
          value: r * a,
          point: l
        }
      }
      return {
        value: l,
        point: l
      }
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: u
    } = o[l];
    e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (s = a) : u <= t.clientWidth && (s = a)
  }
  return s || "max"
}
var Nt = {
  setBreakpoint: Bt,
  getBreakpoint: Ft
};

function Ht(i, e) {
  const t = [];
  return i.forEach(s => {
    typeof s == "object" ? Object.keys(s).forEach(n => {
      s[n] && t.push(e + n)
    }) : typeof s == "string" && t.push(e + s)
  }), t
}

function _t() {
  const i = this,
    {
      classNames: e,
      params: t,
      rtl: s,
      el: n,
      device: r
    } = i,
    o = Ht(["initialized", t.direction, {
      "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: s
    }, {
      grid: t.grid && t.grid.rows > 1
    }, {
      "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
  e.push(...o), n.classList.add(...e), i.emitContainerClasses()
}

function Rt() {
  const i = this,
    {
      el: e,
      classNames: t
    } = i;
  e.classList.remove(...t), i.emitContainerClasses()
}
var Wt = {
  addClasses: _t,
  removeClasses: Rt
};

function jt() {
  const i = this,
    {
      isLocked: e,
      params: t
    } = i,
    {
      slidesOffsetBefore: s
    } = t;
  if (s) {
    const n = i.slides.length - 1,
      r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
    i.isLocked = i.size > r
  } else i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var qt = {
    checkOverflow: jt
  },
  Te = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    autoplay:true,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

function Yt(i, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      k(e, s);
      return
    }
    if (i[n] === !0 && (i[n] = {
        enabled: !0
      }), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in r)) {
      k(e, s);
      return
    }
    typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
      enabled: !1
    }), k(e, s)
  }
}
const se = {
    eventsEmitter: We,
    update: tt,
    translate: lt,
    transition: ft,
    slide: St,
    loop: yt,
    grabCursor: Mt,
    events: Vt,
    breakpoints: Nt,
    checkOverflow: qt,
    classes: Wt
  },
  re = {};
class D {
  constructor() {
    let e, t;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e, t] = n, t || (t = {}), t = k({}, t), e && !t.el && (t.el = e);
    const o = B();
    if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
      const f = [];
      return o.querySelectorAll(t.el).forEach(p => {
        const h = k({}, t, {
          el: p
        });
        f.push(new D(h))
      }), f
    }
    const l = this;
    l.__swiper__ = !0, l.support = me(), l.device = Fe({
      userAgent: t.userAgent
    }), l.browser = He(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const a = {};
    l.modules.forEach(f => {
      f({
        params: t,
        swiper: l,
        extendParams: Yt(t, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      })
    });
    const u = k({}, Te, a);
    return l.params = k({}, u, re, t), l.originalParams = k({}, l.params), l.passedParams = k({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(f => {
      l.on(f, l.params.on[f])
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: e,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return l.params.direction === "horizontal"
      },
      isVertical() {
        return l.params.direction === "vertical"
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
      },
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: l.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      allowClick: !0,
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [e]
  }
  getSlideIndex(e) {
    const {
      slidesEl: t,
      params: s
    } = this, n = $(t, `.${s.slideClass}, swiper-slide`), r = j(n[0]);
    return j(e) - r
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
  }
  recalcSlides() {
    const e = this,
      {
        slidesEl: t,
        params: s
      } = e;
    e.slides = $(t, `.${s.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
  }
  disable() {
    const e = this;
    !e.enabled || (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
  }
  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof t == "undefined" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "))
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach(s => {
      const n = e.getSlideClasses(s);
      t.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n)
    }), e.emit("_slideClasses", t)
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u
      } = s;
    let f = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let p = r[u] ? r[u].swiperSlideSize : 0,
        h;
      for (let m = u + 1; m < r.length; m += 1) r[m] && !h && (p += r[m].swiperSlideSize, f += 1, p > a && (h = !0));
      for (let m = u - 1; m >= 0; m -= 1) r[m] && !h && (p += r[m].swiperSlideSize, f += 1, p > a && (h = !0))
    } else if (e === "current")
      for (let p = u + 1; p < r.length; p += 1)(t ? o[p] + l[p] - o[u] < a : o[p] - o[u] < a) && (f += 1);
    else
      for (let p = u - 1; p >= 0; p -= 1) o[u] - o[p] < a && (f += 1);
    return f
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
      o.complete && q(e, o)
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0)
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n()
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const s = this,
      n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(r => {
      e === "vertical" ? r.style.width = "" : r.style.height = ""
    }), s.emit("changeDirection"), t && s.update()), s
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
    s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let o = (() => s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : $(s, n())[0])();
    return !o && t.params.createElements && (o = W("div", t.params.wrapperClass), s.append(o), $(s, `.${t.params.slideClass}`).forEach(l => {
      o.append(l)
    })), Object.assign(t, {
      el: s,
      wrapperEl: o,
      slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
      hostEl: t.isElement ? s.parentNode.host : s,
      mounted: !0,
      rtl: s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl"),
      wrongRTL: V(o, "display") === "-webkit-box"
    }), !0
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(r => {
      r.complete ? q(t, r) : r.addEventListener("load", o => {
        q(t, o.target)
      })
    }), ie(t), t.initialized = !0, ie(t), t.emit("init"), t.emit("afterInit"), t
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const s = this,
      {
        params: n,
        el: r,
        wrapperEl: o,
        slides: l
      } = s;
    return typeof s.params == "undefined" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(a => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(a => {
      s.off(a)
    }), e !== !1 && (s.el.swiper = null, Ae(s)), s.destroyed = !0), null
  }
  static extendDefaults(e) {
    k(re, e)
  }
  static get extendedDefaults() {
    return re
  }
  static get defaults() {
    return Te
  }
  static installModule(e) {
    D.prototype.__modules__ || (D.prototype.__modules__ = []);
    const t = D.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach(t => D.installModule(t)), D) : (D.installModule(e), D)
  }
}
Object.keys(se).forEach(i => {
  Object.keys(se[i]).forEach(e => {
    D.prototype[e] = se[i][e]
  })
});
D.use([_e, Re]);

function Xt(i, e, t, s) {
  return i.params.createElements && Object.keys(s).forEach(n => {
    if (!t[n] && t.auto === !0) {
      let r = $(i.el, `.${s[n]}`)[0];
      r || (r = W("div", s[n]), r.className = s[n], i.el.append(r)), t[n] = r, e[n] = r
    }
  }), t
}

function F(i) {
  return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function Ut(i) {
  let {
    swiper: e,
    extendParams: t,
    on: s,
    emit: n
  } = i;
  const r = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: c => c,
      formatFractionTotal: c => c,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let o, l = 0;
  const a = c => (Array.isArray(c) ? c : [c]).filter(d => !!d);

  function u() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
  }

  function f(c, d) {
    const {
      bulletActiveClass: g
    } = e.params.pagination;
    !c || (c = c[`${d==="prev"?"previous":"next"}ElementSibling`], c && (c.classList.add(`${g}-${d}`), c = c[`${d==="prev"?"previous":"next"}ElementSibling`], c && c.classList.add(`${g}-${d}-${d}`)))
  }

  function p(c) {
    const d = c.target.closest(F(e.params.pagination.bulletClass));
    if (!d) return;
    c.preventDefault();
    const g = j(d) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === g) return;
      e.slideToLoop(g)
    } else e.slideTo(g)
  }

  function h() {
    const c = e.rtl,
      d = e.params.pagination;
    if (u()) return;
    let g = e.pagination.el;
    g = a(g);
    let y, M;
    const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      z = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (M = e.previousRealIndex || 0, y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex != "undefined" ? (y = e.snapIndex, M = e.previousSnapIndex) : (M = e.previousIndex || 0, y = e.activeIndex || 0), d.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const L = e.pagination.bullets;
      let S, x, C;
      if (d.dynamicBullets && (o = J(L[0], e.isHorizontal() ? "width" : "height", !0), g.forEach(T => {
          T.style[e.isHorizontal() ? "width" : "height"] = `${o*(d.dynamicMainBullets+4)}px`
        }), d.dynamicMainBullets > 1 && M !== void 0 && (l += y - (M || 0), l > d.dynamicMainBullets - 1 ? l = d.dynamicMainBullets - 1 : l < 0 && (l = 0)), S = Math.max(y - l, 0), x = S + (Math.min(L.length, d.dynamicMainBullets) - 1), C = (x + S) / 2), L.forEach(T => {
          const P = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(I => `${d.bulletActiveClass}${I}`)].map(I => typeof I == "string" && I.includes(" ") ? I.split(" ") : I).flat();
          T.classList.remove(...P)
        }), g.length > 1) L.forEach(T => {
        const P = j(T);
        P === y ? T.classList.add(...d.bulletActiveClass.split(" ")) : e.isElement && T.setAttribute("part", "bullet"), d.dynamicBullets && (P >= S && P <= x && T.classList.add(...`${d.bulletActiveClass}-main`.split(" ")), P === S && f(T, "prev"), P === x && f(T, "next"))
      });
      else {
        const T = L[y];
        if (T && T.classList.add(...d.bulletActiveClass.split(" ")), e.isElement && L.forEach((P, I) => {
            P.setAttribute("part", I === y ? "bullet-active" : "bullet")
          }), d.dynamicBullets) {
          const P = L[S],
            I = L[x];
          for (let O = S; O <= x; O += 1) L[O] && L[O].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          f(P, "prev"), f(I, "next")
        }
      }
      if (d.dynamicBullets) {
        const T = Math.min(L.length, d.dynamicMainBullets + 4),
          P = (o * T - o) / 2 - C * o,
          I = c ? "right" : "left";
        L.forEach(O => {
          O.style[e.isHorizontal() ? I : "top"] = `${P}px`
        })
      }
    }
    g.forEach((L, S) => {
      if (d.type === "fraction" && (L.querySelectorAll(F(d.currentClass)).forEach(x => {
          x.textContent = d.formatFractionCurrent(y + 1)
        }), L.querySelectorAll(F(d.totalClass)).forEach(x => {
          x.textContent = d.formatFractionTotal(z)
        })), d.type === "progressbar") {
        let x;
        d.progressbarOpposite ? x = e.isHorizontal() ? "vertical" : "horizontal" : x = e.isHorizontal() ? "horizontal" : "vertical";
        const C = (y + 1) / z;
        let T = 1,
          P = 1;
        x === "horizontal" ? T = C : P = C, L.querySelectorAll(F(d.progressbarFillClass)).forEach(I => {
          I.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${P})`, I.style.transitionDuration = `${e.params.speed}ms`
        })
      }
      d.type === "custom" && d.renderCustom ? (L.innerHTML = d.renderCustom(e, y + 1, z), S === 0 && n("paginationRender", L)) : (S === 0 && n("paginationRender", L), n("paginationUpdate", L)), e.params.watchOverflow && e.enabled && L.classList[e.isLocked ? "add" : "remove"](d.lockClass)
    })
  }

  function m() {
    const c = e.params.pagination;
    if (u()) return;
    const d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let g = e.pagination.el;
    g = a(g);
    let y = "";
    if (c.type === "bullets") {
      let M = e.params.loop ? Math.ceil(d / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && M > d && (M = d);
      for (let A = 0; A < M; A += 1) c.renderBullet ? y += c.renderBullet.call(e, A, c.bulletClass) : y += `<${c.bulletElement} ${e.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`
    }
    c.type === "fraction" && (c.renderFraction ? y = c.renderFraction.call(e, c.currentClass, c.totalClass) : y = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`), c.type === "progressbar" && (c.renderProgressbar ? y = c.renderProgressbar.call(e, c.progressbarFillClass) : y = `<span class="${c.progressbarFillClass}"></span>`), e.pagination.bullets = [], g.forEach(M => {
      c.type !== "custom" && (M.innerHTML = y || ""), c.type === "bullets" && e.pagination.bullets.push(...M.querySelectorAll(F(c.bulletClass)))
    }), c.type !== "custom" && n("paginationRender", g[0])
  }

  function v() {
    e.params.pagination = Xt(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const c = e.params.pagination;
    if (!c.el) return;
    let d;
    typeof c.el == "string" && e.isElement && (d = e.el.querySelector(c.el)), !d && typeof c.el == "string" && (d = [...document.querySelectorAll(c.el)]), d || (d = c.el), !(!d || d.length === 0) && (e.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(d) && d.length > 1 && (d = [...e.el.querySelectorAll(c.el)], d.length > 1 && (d = d.filter(g => pe(g, ".swiper")[0] === e.el)[0])), Array.isArray(d) && d.length === 1 && (d = d[0]), Object.assign(e.pagination, {
      el: d
    }), d = a(d), d.forEach(g => {
      c.type === "bullets" && c.clickable && g.classList.add(...(c.clickableClass || "").split(" ")), g.classList.add(c.modifierClass + c.type), g.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.type === "bullets" && c.dynamicBullets && (g.classList.add(`${c.modifierClass}${c.type}-dynamic`), l = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), c.type === "progressbar" && c.progressbarOpposite && g.classList.add(c.progressbarOppositeClass), c.clickable && g.addEventListener("click", p), e.enabled || g.classList.add(c.lockClass)
    }))
  }

  function b() {
    const c = e.params.pagination;
    if (u()) return;
    let d = e.pagination.el;
    d && (d = a(d), d.forEach(g => {
      g.classList.remove(c.hiddenClass), g.classList.remove(c.modifierClass + c.type), g.classList.remove(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.clickable && (g.classList.remove(...(c.clickableClass || "").split(" ")), g.removeEventListener("click", p))
    })), e.pagination.bullets && e.pagination.bullets.forEach(g => g.classList.remove(...c.bulletActiveClass.split(" ")))
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const c = e.params.pagination;
    let {
      el: d
    } = e.pagination;
    d = a(d), d.forEach(g => {
      g.classList.remove(c.horizontalClass, c.verticalClass), g.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass)
    })
  }), s("init", () => {
    e.params.pagination.enabled === !1 ? w() : (v(), m(), h())
  }), s("activeIndexChange", () => {
    typeof e.snapIndex == "undefined" && h()
  }), s("snapIndexChange", () => {
    h()
  }), s("snapGridLengthChange", () => {
    m(), h()
  }), s("destroy", () => {
    b()
  }), s("enable disable", () => {
    let {
      el: c
    } = e.pagination;
    c && (c = a(c), c.forEach(d => d.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
  }), s("lock unlock", () => {
    h()
  }), s("click", (c, d) => {
    const g = d.target,
      y = a(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && y && y.length > 0 && !g.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && g === e.navigation.nextEl || e.navigation.prevEl && g === e.navigation.prevEl)) return;
      const M = y[0].classList.contains(e.params.pagination.hiddenClass);
      n(M === !0 ? "paginationShow" : "paginationHide"), y.forEach(A => A.classList.toggle(e.params.pagination.hiddenClass))
    }
  });
  const E = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = a(c), c.forEach(d => d.classList.remove(e.params.pagination.paginationDisabledClass))), v(), m(), h()
    },
    w = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = a(c), c.forEach(d => d.classList.add(e.params.pagination.paginationDisabledClass))), b()
    };
  Object.assign(e.pagination, {
    enable: E,
    disable: w,
    render: m,
    update: h,
    init: v,
    destroy: b
  })
}
export {
  Ut as P, D as S
};