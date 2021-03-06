(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        n = t.dataset.da.trim().split(","),
        i = {};
      (i.element = t),
        (i.parent = t.parentNode),
        (i.destination = document.querySelector(n[0].trim())),
        (i.breakpoint = n[1] ? n[1].trim() : "767"),
        (i.place = n[2] ? n[2].trim() : "last"),
        (i.index = this.indexInParent(i.parent, i.element)),
        this.оbjects.push(i);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, n) {
          return Array.prototype.indexOf.call(n, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const n = this.mediaQueries[t],
        i = String.prototype.split.call(n, ","),
        r = window.matchMedia(i[0]),
        s = i[1],
        o = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === s;
        });
      r.addListener(function () {
        e.mediaHandler(r, o);
      }),
        this.mediaHandler(r, o);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, n) {
      t.classList.add(this.daClassname),
        "last" === e || e >= n.children.length
          ? n.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? n.children[e].insertAdjacentElement("beforebegin", t)
          : n.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, n) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[n]
          ? e.children[n].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const n = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(n, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = (e, t = 500, n = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = n ? `${n}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !n),
            !n && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !n && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    n = (e, t = 500, n = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          n && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    };
  function i(e, t) {
    const n = Array.from(e).filter(function (e, n, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (n.length) {
      const e = [];
      n.forEach((n) => {
        const i = {},
          r = n.dataset[t].split(",");
        (i.value = r[0]),
          (i.type = r[1] ? r[1].trim() : "max"),
          (i.item = n),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, n) {
          return n.indexOf(e) === t;
        });
      })(i);
      const r = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const n = t.split(","),
              i = n[1],
              s = n[2],
              o = window.matchMedia(n[0]),
              a = e.filter(function (e) {
                if (e.value === i && e.type === s) return !0;
              });
            r.push({ itemsArray: a, matchMedia: o });
          }),
          r
        );
    }
  }
  function r(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function s(e) {
    return e instanceof r(e).Element || e instanceof Element;
  }
  function o(e) {
    return e instanceof r(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var l = Math.max,
    d = Math.min,
    c = Math.round;
  function p(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      i = 1,
      r = 1;
    if (o(e) && t) {
      var s = e.offsetHeight,
        a = e.offsetWidth;
      a > 0 && (i = c(n.width) / a || 1), s > 0 && (r = c(n.height) / s || 1);
    }
    return {
      width: n.width / i,
      height: n.height / r,
      top: n.top / r,
      right: n.right / i,
      bottom: n.bottom / r,
      left: n.left / i,
      x: n.left / i,
      y: n.top / r,
    };
  }
  function u(e) {
    var t = r(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function f(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function h(e) {
    return ((s(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function m(e) {
    return p(h(e)).left + u(e).scrollLeft;
  }
  function v(e) {
    return r(e).getComputedStyle(e);
  }
  function g(e) {
    var t = v(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i);
  }
  function b(e, t, n) {
    void 0 === n && (n = !1);
    var i,
      s,
      a = o(t),
      l =
        o(t) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = c(t.width) / e.offsetWidth || 1,
            i = c(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== i;
        })(t),
      d = h(t),
      v = p(e, l),
      b = { scrollLeft: 0, scrollTop: 0 },
      w = { x: 0, y: 0 };
    return (
      (a || (!a && !n)) &&
        (("body" !== f(t) || g(d)) &&
          (b =
            (i = t) !== r(i) && o(i)
              ? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
              : u(i)),
        o(t)
          ? (((w = p(t, !0)).x += t.clientLeft), (w.y += t.clientTop))
          : d && (w.x = m(d))),
      {
        x: v.left + b.scrollLeft - w.x,
        y: v.top + b.scrollTop - w.y,
        width: v.width,
        height: v.height,
      }
    );
  }
  function w(e) {
    var t = p(e),
      n = e.offsetWidth,
      i = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - i) <= 1 && (i = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
    );
  }
  function y(e) {
    return "html" === f(e)
      ? e
      : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || h(e);
  }
  function x(e) {
    return ["html", "body", "#document"].indexOf(f(e)) >= 0
      ? e.ownerDocument.body
      : o(e) && g(e)
      ? e
      : x(y(e));
  }
  function T(e, t) {
    var n;
    void 0 === t && (t = []);
    var i = x(e),
      s = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
      o = r(i),
      a = s ? [o].concat(o.visualViewport || [], g(i) ? i : []) : i,
      l = t.concat(a);
    return s ? l : l.concat(T(y(a)));
  }
  function E(e) {
    return ["table", "td", "th"].indexOf(f(e)) >= 0;
  }
  function S(e) {
    return o(e) && "fixed" !== v(e).position ? e.offsetParent : null;
  }
  function C(e) {
    for (var t = r(e), n = S(e); n && E(n) && "static" === v(n).position; )
      n = S(n);
    return n &&
      ("html" === f(n) || ("body" === f(n) && "static" === v(n).position))
      ? t
      : n ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              o(e) &&
              "fixed" === v(e).position
            )
              return null;
            for (var n = y(e); o(n) && ["html", "body"].indexOf(f(n)) < 0; ) {
              var i = v(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (t && "filter" === i.willChange) ||
                (t && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var O = "top",
    A = "bottom",
    k = "right",
    L = "left",
    P = "auto",
    M = [O, A, k, L],
    D = "start",
    $ = "end",
    _ = "viewport",
    I = "popper",
    B = M.reduce(function (e, t) {
      return e.concat([t + "-" + D, t + "-" + $]);
    }, []),
    j = [].concat(M, [P]).reduce(function (e, t) {
      return e.concat([t, t + "-" + D, t + "-" + $]);
    }, []),
    z = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function N(e) {
    var t = new Map(),
      n = new Set(),
      i = [];
    function r(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var i = t.get(e);
              i && r(i);
            }
          }),
        i.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || r(e);
      }),
      i
    );
  }
  var V = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function H() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function G(e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      i = void 0 === n ? [] : n,
      r = t.defaultOptions,
      o = void 0 === r ? V : r;
    return function (e, t, n) {
      void 0 === n && (n = o);
      var r,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, V, o),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        d = [],
        c = !1,
        p = {
          state: l,
          setOptions: function (n) {
            var r = "function" == typeof n ? n(l.options) : n;
            u(),
              (l.options = Object.assign({}, o, l.options, r)),
              (l.scrollParents = {
                reference: s(e)
                  ? T(e)
                  : e.contextElement
                  ? T(e.contextElement)
                  : [],
                popper: T(t),
              });
            var a = (function (e) {
              var t = N(e);
              return z.reduce(function (e, n) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === n;
                  })
                );
              }, []);
            })(
              (function (e) {
                var t = e.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {});
                return Object.keys(t).map(function (e) {
                  return t[e];
                });
              })([].concat(i, l.options.modifiers))
            );
            return (
              (l.orderedModifiers = a.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  i = void 0 === n ? {} : n,
                  r = e.effect;
                if ("function" == typeof r) {
                  var s = r({ state: l, name: t, instance: p, options: i }),
                    o = function () {};
                  d.push(s || o);
                }
              }),
              p.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var e = l.elements,
                t = e.reference,
                n = e.popper;
              if (H(t, n)) {
                (l.rects = {
                  reference: b(t, C(n), "fixed" === l.options.strategy),
                  popper: w(n),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var i = 0; i < l.orderedModifiers.length; i++)
                  if (!0 !== l.reset) {
                    var r = l.orderedModifiers[i],
                      s = r.fn,
                      o = r.options,
                      a = void 0 === o ? {} : o,
                      d = r.name;
                    "function" == typeof s &&
                      (l =
                        s({ state: l, options: a, name: d, instance: p }) || l);
                  } else (l.reset = !1), (i = -1);
              }
            }
          },
          update:
            ((r = function () {
              return new Promise(function (e) {
                p.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(r());
                    });
                  })),
                a
              );
            }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!H(e, t)) return p;
      function u() {
        d.forEach(function (e) {
          return e();
        }),
          (d = []);
      }
      return (
        p.setOptions(n).then(function (e) {
          !c && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        p
      );
    };
  }
  var W = { passive: !0 };
  const q = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        n = e.instance,
        i = e.options,
        s = i.scroll,
        o = void 0 === s || s,
        a = i.resize,
        l = void 0 === a || a,
        d = r(t.elements.popper),
        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        o &&
          c.forEach(function (e) {
            e.addEventListener("scroll", n.update, W);
          }),
        l && d.addEventListener("resize", n.update, W),
        function () {
          o &&
            c.forEach(function (e) {
              e.removeEventListener("scroll", n.update, W);
            }),
            l && d.removeEventListener("resize", n.update, W);
        }
      );
    },
    data: {},
  };
  function R(e) {
    return e.split("-")[0];
  }
  function F(e) {
    return e.split("-")[1];
  }
  function X(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Y(e) {
    var t,
      n = e.reference,
      i = e.element,
      r = e.placement,
      s = r ? R(r) : null,
      o = r ? F(r) : null,
      a = n.x + n.width / 2 - i.width / 2,
      l = n.y + n.height / 2 - i.height / 2;
    switch (s) {
      case O:
        t = { x: a, y: n.y - i.height };
        break;
      case A:
        t = { x: a, y: n.y + n.height };
        break;
      case k:
        t = { x: n.x + n.width, y: l };
        break;
      case L:
        t = { x: n.x - i.width, y: l };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var d = s ? X(s) : null;
    if (null != d) {
      var c = "y" === d ? "height" : "width";
      switch (o) {
        case D:
          t[d] = t[d] - (n[c] / 2 - i[c] / 2);
          break;
        case $:
          t[d] = t[d] + (n[c] / 2 - i[c] / 2);
      }
    }
    return t;
  }
  var U = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Q(e) {
    var t,
      n = e.popper,
      i = e.popperRect,
      s = e.placement,
      o = e.variation,
      a = e.offsets,
      l = e.position,
      d = e.gpuAcceleration,
      p = e.adaptive,
      u = e.roundOffsets,
      f = e.isFixed,
      m = a.x,
      g = void 0 === m ? 0 : m,
      b = a.y,
      w = void 0 === b ? 0 : b,
      y = "function" == typeof u ? u({ x: g, y: w }) : { x: g, y: w };
    (g = y.x), (w = y.y);
    var x = a.hasOwnProperty("x"),
      T = a.hasOwnProperty("y"),
      E = L,
      S = O,
      P = window;
    if (p) {
      var M = C(n),
        D = "clientHeight",
        _ = "clientWidth";
      if (
        (M === r(n) &&
          "static" !== v((M = h(n))).position &&
          "absolute" === l &&
          ((D = "scrollHeight"), (_ = "scrollWidth")),
        (M = M),
        s === O || ((s === L || s === k) && o === $))
      )
        (S = A),
          (w -=
            (f && P.visualViewport ? P.visualViewport.height : M[D]) -
            i.height),
          (w *= d ? 1 : -1);
      if (s === L || ((s === O || s === A) && o === $))
        (E = k),
          (g -=
            (f && P.visualViewport ? P.visualViewport.width : M[_]) - i.width),
          (g *= d ? 1 : -1);
    }
    var I,
      B = Object.assign({ position: l }, p && U),
      j =
        !0 === u
          ? (function (e) {
              var t = e.x,
                n = e.y,
                i = window.devicePixelRatio || 1;
              return { x: c(t * i) / i || 0, y: c(n * i) / i || 0 };
            })({ x: g, y: w })
          : { x: g, y: w };
    return (
      (g = j.x),
      (w = j.y),
      d
        ? Object.assign(
            {},
            B,
            (((I = {})[S] = T ? "0" : ""),
            (I[E] = x ? "0" : ""),
            (I.transform =
              (P.devicePixelRatio || 1) <= 1
                ? "translate(" + g + "px, " + w + "px)"
                : "translate3d(" + g + "px, " + w + "px, 0)"),
            I)
          )
        : Object.assign(
            {},
            B,
            (((t = {})[S] = T ? w + "px" : ""),
            (t[E] = x ? g + "px" : ""),
            (t.transform = ""),
            t)
          )
    );
  }
  const K = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          i = t.attributes[e] || {},
          r = t.elements[e];
        o(r) &&
          f(r) &&
          (Object.assign(r.style, n),
          Object.keys(i).forEach(function (e) {
            var t = i[e];
            !1 === t
              ? r.removeAttribute(e)
              : r.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var i = t.elements[e],
              r = t.attributes[e] || {},
              s = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            o(i) &&
              f(i) &&
              (Object.assign(i.style, s),
              Object.keys(r).forEach(function (e) {
                i.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  const J = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.offset,
        s = void 0 === r ? [0, 0] : r,
        o = j.reduce(function (e, n) {
          return (
            (e[n] = (function (e, t, n) {
              var i = R(e),
                r = [L, O].indexOf(i) >= 0 ? -1 : 1,
                s =
                  "function" == typeof n
                    ? n(Object.assign({}, t, { placement: e }))
                    : n,
                o = s[0],
                a = s[1];
              return (
                (o = o || 0),
                (a = (a || 0) * r),
                [L, k].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
              );
            })(n, t.rects, s)),
            e
          );
        }, {}),
        a = o[t.placement],
        l = a.x,
        d = a.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += l),
        (t.modifiersData.popperOffsets.y += d)),
        (t.modifiersData[i] = o);
    },
  };
  var Z = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ee(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return Z[e];
    });
  }
  var te = { start: "end", end: "start" };
  function ne(e) {
    return e.replace(/start|end/g, function (e) {
      return te[e];
    });
  }
  function ie(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function re(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function se(e, t) {
    return t === _
      ? re(
          (function (e) {
            var t = r(e),
              n = h(e),
              i = t.visualViewport,
              s = n.clientWidth,
              o = n.clientHeight,
              a = 0,
              l = 0;
            return (
              i &&
                ((s = i.width),
                (o = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((a = i.offsetLeft), (l = i.offsetTop))),
              { width: s, height: o, x: a + m(e), y: l }
            );
          })(e)
        )
      : s(t)
      ? (function (e) {
          var t = p(e);
          return (
            (t.top = t.top + e.clientTop),
            (t.left = t.left + e.clientLeft),
            (t.bottom = t.top + e.clientHeight),
            (t.right = t.left + e.clientWidth),
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            (t.x = t.left),
            (t.y = t.top),
            t
          );
        })(t)
      : re(
          (function (e) {
            var t,
              n = h(e),
              i = u(e),
              r = null == (t = e.ownerDocument) ? void 0 : t.body,
              s = l(
                n.scrollWidth,
                n.clientWidth,
                r ? r.scrollWidth : 0,
                r ? r.clientWidth : 0
              ),
              o = l(
                n.scrollHeight,
                n.clientHeight,
                r ? r.scrollHeight : 0,
                r ? r.clientHeight : 0
              ),
              a = -i.scrollLeft + m(e),
              d = -i.scrollTop;
            return (
              "rtl" === v(r || n).direction &&
                (a += l(n.clientWidth, r ? r.clientWidth : 0) - s),
              { width: s, height: o, x: a, y: d }
            );
          })(h(e))
        );
  }
  function oe(e, t, n) {
    var i =
        "clippingParents" === t
          ? (function (e) {
              var t = T(y(e)),
                n =
                  ["absolute", "fixed"].indexOf(v(e).position) >= 0 && o(e)
                    ? C(e)
                    : e;
              return s(n)
                ? t.filter(function (e) {
                    return s(e) && ie(e, n) && "body" !== f(e);
                  })
                : [];
            })(e)
          : [].concat(t),
      r = [].concat(i, [n]),
      a = r[0],
      c = r.reduce(function (t, n) {
        var i = se(e, n);
        return (
          (t.top = l(i.top, t.top)),
          (t.right = d(i.right, t.right)),
          (t.bottom = d(i.bottom, t.bottom)),
          (t.left = l(i.left, t.left)),
          t
        );
      }, se(e, a));
    return (
      (c.width = c.right - c.left),
      (c.height = c.bottom - c.top),
      (c.x = c.left),
      (c.y = c.top),
      c
    );
  }
  function ae(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function le(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function de(e, t) {
    void 0 === t && (t = {});
    var n = t,
      i = n.placement,
      r = void 0 === i ? e.placement : i,
      o = n.boundary,
      a = void 0 === o ? "clippingParents" : o,
      l = n.rootBoundary,
      d = void 0 === l ? _ : l,
      c = n.elementContext,
      u = void 0 === c ? I : c,
      f = n.altBoundary,
      m = void 0 !== f && f,
      v = n.padding,
      g = void 0 === v ? 0 : v,
      b = ae("number" != typeof g ? g : le(g, M)),
      w = u === I ? "reference" : I,
      y = e.rects.popper,
      x = e.elements[m ? w : u],
      T = oe(s(x) ? x : x.contextElement || h(e.elements.popper), a, d),
      E = p(e.elements.reference),
      S = Y({ reference: E, element: y, strategy: "absolute", placement: r }),
      C = re(Object.assign({}, y, S)),
      L = u === I ? C : E,
      P = {
        top: T.top - L.top + b.top,
        bottom: L.bottom - T.bottom + b.bottom,
        left: T.left - L.left + b.left,
        right: L.right - T.right + b.right,
      },
      D = e.modifiersData.offset;
    if (u === I && D) {
      var $ = D[r];
      Object.keys(P).forEach(function (e) {
        var t = [k, A].indexOf(e) >= 0 ? 1 : -1,
          n = [O, A].indexOf(e) >= 0 ? "y" : "x";
        P[e] += $[n] * t;
      });
    }
    return P;
  }
  function ce(e, t, n) {
    return l(e, d(t, n));
  }
  const pe = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.mainAxis,
        s = void 0 === r || r,
        o = n.altAxis,
        a = void 0 !== o && o,
        c = n.boundary,
        p = n.rootBoundary,
        u = n.altBoundary,
        f = n.padding,
        h = n.tether,
        m = void 0 === h || h,
        v = n.tetherOffset,
        g = void 0 === v ? 0 : v,
        b = de(t, { boundary: c, rootBoundary: p, padding: f, altBoundary: u }),
        y = R(t.placement),
        x = F(t.placement),
        T = !x,
        E = X(y),
        S = "x" === E ? "y" : "x",
        P = t.modifiersData.popperOffsets,
        M = t.rects.reference,
        $ = t.rects.popper,
        _ =
          "function" == typeof g
            ? g(Object.assign({}, t.rects, { placement: t.placement }))
            : g,
        I =
          "number" == typeof _
            ? { mainAxis: _, altAxis: _ }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
        B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        j = { x: 0, y: 0 };
      if (P) {
        if (s) {
          var z,
            N = "y" === E ? O : L,
            V = "y" === E ? A : k,
            H = "y" === E ? "height" : "width",
            G = P[E],
            W = G + b[N],
            q = G - b[V],
            Y = m ? -$[H] / 2 : 0,
            U = x === D ? M[H] : $[H],
            Q = x === D ? -$[H] : -M[H],
            K = t.elements.arrow,
            J = m && K ? w(K) : { width: 0, height: 0 },
            Z = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            ee = Z[N],
            te = Z[V],
            ne = ce(0, M[H], J[H]),
            ie = T
              ? M[H] / 2 - Y - ne - ee - I.mainAxis
              : U - ne - ee - I.mainAxis,
            re = T
              ? -M[H] / 2 + Y + ne + te + I.mainAxis
              : Q + ne + te + I.mainAxis,
            se = t.elements.arrow && C(t.elements.arrow),
            oe = se ? ("y" === E ? se.clientTop || 0 : se.clientLeft || 0) : 0,
            ae = null != (z = null == B ? void 0 : B[E]) ? z : 0,
            le = G + re - ae,
            pe = ce(m ? d(W, G + ie - ae - oe) : W, G, m ? l(q, le) : q);
          (P[E] = pe), (j[E] = pe - G);
        }
        if (a) {
          var ue,
            fe = "x" === E ? O : L,
            he = "x" === E ? A : k,
            me = P[S],
            ve = "y" === S ? "height" : "width",
            ge = me + b[fe],
            be = me - b[he],
            we = -1 !== [O, L].indexOf(y),
            ye = null != (ue = null == B ? void 0 : B[S]) ? ue : 0,
            xe = we ? ge : me - M[ve] - $[ve] - ye + I.altAxis,
            Te = we ? me + M[ve] + $[ve] - ye - I.altAxis : be,
            Ee =
              m && we
                ? (function (e, t, n) {
                    var i = ce(e, t, n);
                    return i > n ? n : i;
                  })(xe, me, Te)
                : ce(m ? xe : ge, me, m ? Te : be);
          (P[S] = Ee), (j[S] = Ee - me);
        }
        t.modifiersData[i] = j;
      }
    },
    requiresIfExists: ["offset"],
  };
  const ue = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        i = e.name,
        r = e.options,
        s = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        a = R(n.placement),
        l = X(a),
        d = [L, k].indexOf(a) >= 0 ? "height" : "width";
      if (s && o) {
        var c = (function (e, t) {
            return ae(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : le(e, M)
            );
          })(r.padding, n),
          p = w(s),
          u = "y" === l ? O : L,
          f = "y" === l ? A : k,
          h =
            n.rects.reference[d] +
            n.rects.reference[l] -
            o[l] -
            n.rects.popper[d],
          m = o[l] - n.rects.reference[l],
          v = C(s),
          g = v ? ("y" === l ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          y = c[u],
          x = g - p[d] - c[f],
          T = g / 2 - p[d] / 2 + b,
          E = ce(y, T, x),
          S = l;
        n.modifiersData[i] = (((t = {})[S] = E), (t.centerOffset = E - T), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        i = void 0 === n ? "[data-popper-arrow]" : n;
      null != i &&
        ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
        ie(t.elements.popper, i) &&
        (t.elements.arrow = i);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function fe(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function he(e) {
    return [O, k, A, L].some(function (t) {
      return e[t] >= 0;
    });
  }
  var me = G({
      defaultModifiers: [
        q,
        {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = Y({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = n.gpuAcceleration,
              r = void 0 === i || i,
              s = n.adaptive,
              o = void 0 === s || s,
              a = n.roundOffsets,
              l = void 0 === a || a,
              d = {
                placement: R(t.placement),
                variation: F(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Q(
                  Object.assign({}, d, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: l,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Q(
                    Object.assign({}, d, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        K,
        J,
        {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = e.name;
            if (!t.modifiersData[i]._skip) {
              for (
                var r = n.mainAxis,
                  s = void 0 === r || r,
                  o = n.altAxis,
                  a = void 0 === o || o,
                  l = n.fallbackPlacements,
                  d = n.padding,
                  c = n.boundary,
                  p = n.rootBoundary,
                  u = n.altBoundary,
                  f = n.flipVariations,
                  h = void 0 === f || f,
                  m = n.allowedAutoPlacements,
                  v = t.options.placement,
                  g = R(v),
                  b =
                    l ||
                    (g === v || !h
                      ? [ee(v)]
                      : (function (e) {
                          if (R(e) === P) return [];
                          var t = ee(e);
                          return [ne(e), t, ne(t)];
                        })(v)),
                  w = [v].concat(b).reduce(function (e, n) {
                    return e.concat(
                      R(n) === P
                        ? (function (e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                              i = n.placement,
                              r = n.boundary,
                              s = n.rootBoundary,
                              o = n.padding,
                              a = n.flipVariations,
                              l = n.allowedAutoPlacements,
                              d = void 0 === l ? j : l,
                              c = F(i),
                              p = c
                                ? a
                                  ? B
                                  : B.filter(function (e) {
                                      return F(e) === c;
                                    })
                                : M,
                              u = p.filter(function (e) {
                                return d.indexOf(e) >= 0;
                              });
                            0 === u.length && (u = p);
                            var f = u.reduce(function (t, n) {
                              return (
                                (t[n] = de(e, {
                                  placement: n,
                                  boundary: r,
                                  rootBoundary: s,
                                  padding: o,
                                })[R(n)]),
                                t
                              );
                            }, {});
                            return Object.keys(f).sort(function (e, t) {
                              return f[e] - f[t];
                            });
                          })(t, {
                            placement: n,
                            boundary: c,
                            rootBoundary: p,
                            padding: d,
                            flipVariations: h,
                            allowedAutoPlacements: m,
                          })
                        : n
                    );
                  }, []),
                  y = t.rects.reference,
                  x = t.rects.popper,
                  T = new Map(),
                  E = !0,
                  S = w[0],
                  C = 0;
                C < w.length;
                C++
              ) {
                var $ = w[C],
                  _ = R($),
                  I = F($) === D,
                  z = [O, A].indexOf(_) >= 0,
                  N = z ? "width" : "height",
                  V = de(t, {
                    placement: $,
                    boundary: c,
                    rootBoundary: p,
                    altBoundary: u,
                    padding: d,
                  }),
                  H = z ? (I ? k : L) : I ? A : O;
                y[N] > x[N] && (H = ee(H));
                var G = ee(H),
                  W = [];
                if (
                  (s && W.push(V[_] <= 0),
                  a && W.push(V[H] <= 0, V[G] <= 0),
                  W.every(function (e) {
                    return e;
                  }))
                ) {
                  (S = $), (E = !1);
                  break;
                }
                T.set($, W);
              }
              if (E)
                for (
                  var q = function (e) {
                      var t = w.find(function (t) {
                        var n = T.get(t);
                        if (n)
                          return n.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (S = t), "break";
                    },
                    X = h ? 3 : 1;
                  X > 0;
                  X--
                ) {
                  if ("break" === q(X)) break;
                }
              t.placement !== S &&
                ((t.modifiersData[i]._skip = !0),
                (t.placement = S),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        },
        pe,
        ue,
        {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              i = t.rects.reference,
              r = t.rects.popper,
              s = t.modifiersData.preventOverflow,
              o = de(t, { elementContext: "reference" }),
              a = de(t, { altBoundary: !0 }),
              l = fe(o, i),
              d = fe(a, r, s),
              c = he(l),
              p = he(d);
            (t.modifiersData[n] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: d,
              isReferenceHidden: c,
              hasPopperEscaped: p,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": p,
              }));
          },
        },
      ],
    }),
    ve = "tippy-content",
    ge = "tippy-backdrop",
    be = "tippy-arrow",
    we = "tippy-svg-arrow",
    ye = { passive: !0, capture: !0 },
    xe = function () {
      return document.body;
    };
  function Te(e, t, n) {
    if (Array.isArray(e)) {
      var i = e[t];
      return null == i ? (Array.isArray(n) ? n[t] : n) : i;
    }
    return e;
  }
  function Ee(e, t) {
    var n = {}.toString.call(e);
    return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
  }
  function Se(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }
  function Ce(e, t) {
    return 0 === t
      ? e
      : function (i) {
          clearTimeout(n),
            (n = setTimeout(function () {
              e(i);
            }, t));
        };
    var n;
  }
  function Oe(e) {
    return [].concat(e);
  }
  function Ae(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function ke(e) {
    return e.split("-")[0];
  }
  function Le(e) {
    return [].slice.call(e);
  }
  function Pe(e) {
    return Object.keys(e).reduce(function (t, n) {
      return void 0 !== e[n] && (t[n] = e[n]), t;
    }, {});
  }
  function Me() {
    return document.createElement("div");
  }
  function De(e) {
    return ["Element", "Fragment"].some(function (t) {
      return Ee(e, t);
    });
  }
  function $e(e) {
    return Ee(e, "MouseEvent");
  }
  function _e(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e);
  }
  function Ie(e) {
    return De(e)
      ? [e]
      : (function (e) {
          return Ee(e, "NodeList");
        })(e)
      ? Le(e)
      : Array.isArray(e)
      ? e
      : Le(document.querySelectorAll(e));
  }
  function Be(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function je(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function ze(e) {
    var t,
      n = Oe(e)[0];
    return null != n && null != (t = n.ownerDocument) && t.body
      ? n.ownerDocument
      : document;
  }
  function Ne(e, t, n) {
    var i = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[i](t, n);
    });
  }
  function Ve(e, t) {
    for (var n = t; n; ) {
      var i;
      if (e.contains(n)) return !0;
      n =
        null == n.getRootNode || null == (i = n.getRootNode())
          ? void 0
          : i.host;
    }
    return !1;
  }
  var He = { isTouch: !1 },
    Ge = 0;
  function We() {
    He.isTouch ||
      ((He.isTouch = !0),
      window.performance && document.addEventListener("mousemove", qe));
  }
  function qe() {
    var e = performance.now();
    e - Ge < 20 &&
      ((He.isTouch = !1), document.removeEventListener("mousemove", qe)),
      (Ge = e);
  }
  function Re() {
    var e = document.activeElement;
    if (_e(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  var Fe =
    !!("undefined" != typeof window && "undefined" != typeof document) &&
    !!window.msCrypto;
  var Xe = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Ye = Object.assign(
      {
        appendTo: xe,
        aria: { content: "auto", expanded: "auto" },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
      },
      Xe,
      {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999,
      }
    ),
    Ue = Object.keys(Ye);
  function Qe(e) {
    var t = (e.plugins || []).reduce(function (t, n) {
      var i,
        r = n.name,
        s = n.defaultValue;
      r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = Ye[r]) ? i : s);
      return t;
    }, {});
    return Object.assign({}, e, t);
  }
  function Ke(e, t) {
    var n = Object.assign(
      {},
      t,
      { content: Se(t.content, [e]) },
      t.ignoreAttributes
        ? {}
        : (function (e, t) {
            return (
              t ? Object.keys(Qe(Object.assign({}, Ye, { plugins: t }))) : Ue
            ).reduce(function (t, n) {
              var i = (e.getAttribute("data-tippy-" + n) || "").trim();
              if (!i) return t;
              if ("content" === n) t[n] = i;
              else
                try {
                  t[n] = JSON.parse(i);
                } catch (e) {
                  t[n] = i;
                }
              return t;
            }, {});
          })(e, t.plugins)
    );
    return (
      (n.aria = Object.assign({}, Ye.aria, n.aria)),
      (n.aria = {
        expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
        content:
          "auto" === n.aria.content
            ? t.interactive
              ? null
              : "describedby"
            : n.aria.content,
      }),
      n
    );
  }
  function Je(e, t) {
    e.innerHTML = t;
  }
  function Ze(e) {
    var t = Me();
    return (
      !0 === e
        ? (t.className = be)
        : ((t.className = we), De(e) ? t.appendChild(e) : Je(t, e)),
      t
    );
  }
  function et(e, t) {
    De(t.content)
      ? (Je(e, ""), e.appendChild(t.content))
      : "function" != typeof t.content &&
        (t.allowHTML ? Je(e, t.content) : (e.textContent = t.content));
  }
  function tt(e) {
    var t = e.firstElementChild,
      n = Le(t.children);
    return {
      box: t,
      content: n.find(function (e) {
        return e.classList.contains(ve);
      }),
      arrow: n.find(function (e) {
        return e.classList.contains(be) || e.classList.contains(we);
      }),
      backdrop: n.find(function (e) {
        return e.classList.contains(ge);
      }),
    };
  }
  function nt(e) {
    var t = Me(),
      n = Me();
    (n.className = "tippy-box"),
      n.setAttribute("data-state", "hidden"),
      n.setAttribute("tabindex", "-1");
    var i = Me();
    function r(n, i) {
      var r = tt(t),
        s = r.box,
        o = r.content,
        a = r.arrow;
      i.theme
        ? s.setAttribute("data-theme", i.theme)
        : s.removeAttribute("data-theme"),
        "string" == typeof i.animation
          ? s.setAttribute("data-animation", i.animation)
          : s.removeAttribute("data-animation"),
        i.inertia
          ? s.setAttribute("data-inertia", "")
          : s.removeAttribute("data-inertia"),
        (s.style.maxWidth =
          "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
        i.role ? s.setAttribute("role", i.role) : s.removeAttribute("role"),
        (n.content === i.content && n.allowHTML === i.allowHTML) ||
          et(o, e.props),
        i.arrow
          ? a
            ? n.arrow !== i.arrow &&
              (s.removeChild(a), s.appendChild(Ze(i.arrow)))
            : s.appendChild(Ze(i.arrow))
          : a && s.removeChild(a);
    }
    return (
      (i.className = ve),
      i.setAttribute("data-state", "hidden"),
      et(i, e.props),
      t.appendChild(n),
      n.appendChild(i),
      r(e.props, e.props),
      { popper: t, onUpdate: r }
    );
  }
  nt.$$tippy = !0;
  var it = 1,
    rt = [],
    st = [];
  function ot(e, t) {
    var n,
      i,
      r,
      s,
      o,
      a,
      l,
      d,
      c = Ke(e, Object.assign({}, Ye, Qe(Pe(t)))),
      p = !1,
      u = !1,
      f = !1,
      h = !1,
      m = [],
      v = Ce(X, c.interactiveDebounce),
      g = it++,
      b = (d = c.plugins).filter(function (e, t) {
        return d.indexOf(e) === t;
      }),
      w = {
        id: g,
        reference: e,
        popper: Me(),
        popperInstance: null,
        props: c,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        plugins: b,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
        },
        setProps: function (t) {
          0;
          if (w.state.isDestroyed) return;
          $("onBeforeUpdate", [w, t]), R();
          var n = w.props,
            i = Ke(e, Object.assign({}, n, Pe(t), { ignoreAttributes: !0 }));
          (w.props = i),
            q(),
            n.interactiveDebounce !== i.interactiveDebounce &&
              (B(), (v = Ce(X, i.interactiveDebounce)));
          n.triggerTarget && !i.triggerTarget
            ? Oe(n.triggerTarget).forEach(function (e) {
                e.removeAttribute("aria-expanded");
              })
            : i.triggerTarget && e.removeAttribute("aria-expanded");
          I(), D(), T && T(n, i);
          w.popperInstance &&
            (K(),
            Z().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
            }));
          $("onAfterUpdate", [w, t]);
        },
        setContent: function (e) {
          w.setProps({ content: e });
        },
        show: function () {
          0;
          var e = w.state.isVisible,
            t = w.state.isDestroyed,
            n = !w.state.isEnabled,
            i = He.isTouch && !w.props.touch,
            r = Te(w.props.duration, 0, Ye.duration);
          if (e || t || n || i) return;
          if (k().hasAttribute("disabled")) return;
          if (($("onShow", [w], !1), !1 === w.props.onShow(w))) return;
          (w.state.isVisible = !0), A() && (x.style.visibility = "visible");
          D(), V(), w.state.isMounted || (x.style.transition = "none");
          if (A()) {
            var s = P(),
              o = s.box,
              l = s.content;
            Be([o, l], 0);
          }
          (a = function () {
            var e;
            if (w.state.isVisible && !h) {
              if (
                ((h = !0),
                x.offsetHeight,
                (x.style.transition = w.props.moveTransition),
                A() && w.props.animation)
              ) {
                var t = P(),
                  n = t.box,
                  i = t.content;
                Be([n, i], r), je([n, i], "visible");
              }
              _(),
                I(),
                Ae(st, w),
                null == (e = w.popperInstance) || e.forceUpdate(),
                $("onMount", [w]),
                w.props.animation &&
                  A() &&
                  (function (e, t) {
                    G(e, t);
                  })(r, function () {
                    (w.state.isShown = !0), $("onShown", [w]);
                  });
            }
          }),
            (function () {
              var e,
                t = w.props.appendTo,
                n = k();
              e =
                (w.props.interactive && t === xe) || "parent" === t
                  ? n.parentNode
                  : Se(t, [n]);
              e.contains(x) || e.appendChild(x);
              (w.state.isMounted = !0), K(), !1;
            })();
        },
        hide: function () {
          0;
          var e = !w.state.isVisible,
            t = w.state.isDestroyed,
            n = !w.state.isEnabled,
            i = Te(w.props.duration, 1, Ye.duration);
          if (e || t || n) return;
          if (($("onHide", [w], !1), !1 === w.props.onHide(w))) return;
          (w.state.isVisible = !1),
            (w.state.isShown = !1),
            (h = !1),
            (p = !1),
            A() && (x.style.visibility = "hidden");
          if ((B(), H(), D(!0), A())) {
            var r = P(),
              s = r.box,
              o = r.content;
            w.props.animation && (Be([s, o], i), je([s, o], "hidden"));
          }
          _(),
            I(),
            w.props.animation
              ? A() &&
                (function (e, t) {
                  G(e, function () {
                    !w.state.isVisible &&
                      x.parentNode &&
                      x.parentNode.contains(x) &&
                      t();
                  });
                })(i, w.unmount)
              : w.unmount();
        },
        hideWithInteractivity: function (e) {
          0;
          L().addEventListener("mousemove", v), Ae(rt, v), v(e);
        },
        enable: function () {
          w.state.isEnabled = !0;
        },
        disable: function () {
          w.hide(), (w.state.isEnabled = !1);
        },
        unmount: function () {
          0;
          w.state.isVisible && w.hide();
          if (!w.state.isMounted) return;
          J(),
            Z().forEach(function (e) {
              e._tippy.unmount();
            }),
            x.parentNode && x.parentNode.removeChild(x);
          (st = st.filter(function (e) {
            return e !== w;
          })),
            (w.state.isMounted = !1),
            $("onHidden", [w]);
        },
        destroy: function () {
          0;
          if (w.state.isDestroyed) return;
          w.clearDelayTimeouts(),
            w.unmount(),
            R(),
            delete e._tippy,
            (w.state.isDestroyed = !0),
            $("onDestroy", [w]);
        },
      };
    if (!c.render) return w;
    var y = c.render(w),
      x = y.popper,
      T = y.onUpdate;
    x.setAttribute("data-tippy-root", ""),
      (x.id = "tippy-" + w.id),
      (w.popper = x),
      (e._tippy = w),
      (x._tippy = w);
    var E = b.map(function (e) {
        return e.fn(w);
      }),
      S = e.hasAttribute("aria-expanded");
    return (
      q(),
      I(),
      D(),
      $("onCreate", [w]),
      c.showOnCreate && ee(),
      x.addEventListener("mouseenter", function () {
        w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
      }),
      x.addEventListener("mouseleave", function () {
        w.props.interactive &&
          w.props.trigger.indexOf("mouseenter") >= 0 &&
          L().addEventListener("mousemove", v);
      }),
      w
    );
    function C() {
      var e = w.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }
    function O() {
      return "hold" === C()[0];
    }
    function A() {
      var e;
      return !(null == (e = w.props.render) || !e.$$tippy);
    }
    function k() {
      return l || e;
    }
    function L() {
      var e = k().parentNode;
      return e ? ze(e) : document;
    }
    function P() {
      return tt(x);
    }
    function M(e) {
      return (w.state.isMounted && !w.state.isVisible) ||
        He.isTouch ||
        (s && "focus" === s.type)
        ? 0
        : Te(w.props.delay, e ? 0 : 1, Ye.delay);
    }
    function D(e) {
      void 0 === e && (e = !1),
        (x.style.pointerEvents = w.props.interactive && !e ? "" : "none"),
        (x.style.zIndex = "" + w.props.zIndex);
    }
    function $(e, t, n) {
      var i;
      (void 0 === n && (n = !0),
      E.forEach(function (n) {
        n[e] && n[e].apply(n, t);
      }),
      n) && (i = w.props)[e].apply(i, t);
    }
    function _() {
      var t = w.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          i = x.id;
        Oe(w.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(n);
          if (w.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
          else {
            var r = t && t.replace(i, "").trim();
            r ? e.setAttribute(n, r) : e.removeAttribute(n);
          }
        });
      }
    }
    function I() {
      !S &&
        w.props.aria.expanded &&
        Oe(w.props.triggerTarget || e).forEach(function (e) {
          w.props.interactive
            ? e.setAttribute(
                "aria-expanded",
                w.state.isVisible && e === k() ? "true" : "false"
              )
            : e.removeAttribute("aria-expanded");
        });
    }
    function B() {
      L().removeEventListener("mousemove", v),
        (rt = rt.filter(function (e) {
          return e !== v;
        }));
    }
    function j(t) {
      if (!He.isTouch || (!f && "mousedown" !== t.type)) {
        var n = (t.composedPath && t.composedPath()[0]) || t.target;
        if (!w.props.interactive || !Ve(x, n)) {
          if (
            Oe(w.props.triggerTarget || e).some(function (e) {
              return Ve(e, n);
            })
          ) {
            if (He.isTouch) return;
            if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
              return;
          } else $("onClickOutside", [w, t]);
          !0 === w.props.hideOnClick &&
            (w.clearDelayTimeouts(),
            w.hide(),
            (u = !0),
            setTimeout(function () {
              u = !1;
            }),
            w.state.isMounted || H());
        }
      }
    }
    function z() {
      f = !0;
    }
    function N() {
      f = !1;
    }
    function V() {
      var e = L();
      e.addEventListener("mousedown", j, !0),
        e.addEventListener("touchend", j, ye),
        e.addEventListener("touchstart", N, ye),
        e.addEventListener("touchmove", z, ye);
    }
    function H() {
      var e = L();
      e.removeEventListener("mousedown", j, !0),
        e.removeEventListener("touchend", j, ye),
        e.removeEventListener("touchstart", N, ye),
        e.removeEventListener("touchmove", z, ye);
    }
    function G(e, t) {
      var n = P().box;
      function i(e) {
        e.target === n && (Ne(n, "remove", i), t());
      }
      if (0 === e) return t();
      Ne(n, "remove", o), Ne(n, "add", i), (o = i);
    }
    function W(t, n, i) {
      void 0 === i && (i = !1),
        Oe(w.props.triggerTarget || e).forEach(function (e) {
          e.addEventListener(t, n, i),
            m.push({ node: e, eventType: t, handler: n, options: i });
        });
    }
    function q() {
      O() &&
        (W("touchstart", F, { passive: !0 }),
        W("touchend", Y, { passive: !0 })),
        (function (e) {
          return e.split(/\s+/).filter(Boolean);
        })(w.props.trigger).forEach(function (e) {
          if ("manual" !== e)
            switch ((W(e, F), e)) {
              case "mouseenter":
                W("mouseleave", Y);
                break;
              case "focus":
                W(Fe ? "focusout" : "blur", U);
                break;
              case "focusin":
                W("focusout", U);
            }
        });
    }
    function R() {
      m.forEach(function (e) {
        var t = e.node,
          n = e.eventType,
          i = e.handler,
          r = e.options;
        t.removeEventListener(n, i, r);
      }),
        (m = []);
    }
    function F(e) {
      var t,
        n = !1;
      if (w.state.isEnabled && !Q(e) && !u) {
        var i = "focus" === (null == (t = s) ? void 0 : t.type);
        (s = e),
          (l = e.currentTarget),
          I(),
          !w.state.isVisible &&
            $e(e) &&
            rt.forEach(function (t) {
              return t(e);
            }),
          "click" === e.type &&
          (w.props.trigger.indexOf("mouseenter") < 0 || p) &&
          !1 !== w.props.hideOnClick &&
          w.state.isVisible
            ? (n = !0)
            : ee(e),
          "click" === e.type && (p = !n),
          n && !i && te(e);
      }
    }
    function X(e) {
      var t = e.target,
        n = k().contains(t) || x.contains(t);
      if ("mousemove" !== e.type || !n) {
        var i = Z()
          .concat(x)
          .map(function (e) {
            var t,
              n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
            return n
              ? {
                  popperRect: e.getBoundingClientRect(),
                  popperState: n,
                  props: c,
                }
              : null;
          })
          .filter(Boolean);
        (function (e, t) {
          var n = t.clientX,
            i = t.clientY;
          return e.every(function (e) {
            var t = e.popperRect,
              r = e.popperState,
              s = e.props.interactiveBorder,
              o = ke(r.placement),
              a = r.modifiersData.offset;
            if (!a) return !0;
            var l = "bottom" === o ? a.top.y : 0,
              d = "top" === o ? a.bottom.y : 0,
              c = "right" === o ? a.left.x : 0,
              p = "left" === o ? a.right.x : 0,
              u = t.top - i + l > s,
              f = i - t.bottom - d > s,
              h = t.left - n + c > s,
              m = n - t.right - p > s;
            return u || f || h || m;
          });
        })(i, e) && (B(), te(e));
      }
    }
    function Y(e) {
      Q(e) ||
        (w.props.trigger.indexOf("click") >= 0 && p) ||
        (w.props.interactive ? w.hideWithInteractivity(e) : te(e));
    }
    function U(e) {
      (w.props.trigger.indexOf("focusin") < 0 && e.target !== k()) ||
        (w.props.interactive &&
          e.relatedTarget &&
          x.contains(e.relatedTarget)) ||
        te(e);
    }
    function Q(e) {
      return !!He.isTouch && O() !== e.type.indexOf("touch") >= 0;
    }
    function K() {
      J();
      var t = w.props,
        n = t.popperOptions,
        i = t.placement,
        r = t.offset,
        s = t.getReferenceClientRect,
        o = t.moveTransition,
        l = A() ? tt(x).arrow : null,
        d = s
          ? {
              getBoundingClientRect: s,
              contextElement: s.contextElement || k(),
            }
          : e,
        c = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (e) {
            var t = e.state;
            if (A()) {
              var n = P().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                e
              ) {
                "placement" === e
                  ? n.setAttribute("data-placement", t.placement)
                  : t.attributes.popper["data-popper-" + e]
                  ? n.setAttribute("data-" + e, "")
                  : n.removeAttribute("data-" + e);
              }),
                (t.attributes.popper = {});
            }
          },
        },
        p = [
          { name: "offset", options: { offset: r } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !o } },
          c,
        ];
      A() &&
        l &&
        p.push({ name: "arrow", options: { element: l, padding: 3 } }),
        p.push.apply(p, (null == n ? void 0 : n.modifiers) || []),
        (w.popperInstance = me(
          d,
          x,
          Object.assign({}, n, { placement: i, onFirstUpdate: a, modifiers: p })
        ));
    }
    function J() {
      w.popperInstance &&
        (w.popperInstance.destroy(), (w.popperInstance = null));
    }
    function Z() {
      return Le(x.querySelectorAll("[data-tippy-root]"));
    }
    function ee(e) {
      w.clearDelayTimeouts(), e && $("onTrigger", [w, e]), V();
      var t = M(!0),
        i = C(),
        r = i[0],
        s = i[1];
      He.isTouch && "hold" === r && s && (t = s),
        t
          ? (n = setTimeout(function () {
              w.show();
            }, t))
          : w.show();
    }
    function te(e) {
      if (
        (w.clearDelayTimeouts(), $("onUntrigger", [w, e]), w.state.isVisible)
      ) {
        if (
          !(
            w.props.trigger.indexOf("mouseenter") >= 0 &&
            w.props.trigger.indexOf("click") >= 0 &&
            ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
            p
          )
        ) {
          var t = M(!1);
          t
            ? (i = setTimeout(function () {
                w.state.isVisible && w.hide();
              }, t))
            : (r = requestAnimationFrame(function () {
                w.hide();
              }));
        }
      } else H();
    }
  }
  function at(e, t) {
    void 0 === t && (t = {});
    var n = Ye.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", We, ye),
      window.addEventListener("blur", Re);
    var i = Object.assign({}, t, { plugins: n }),
      r = Ie(e).reduce(function (e, t) {
        var n = t && ot(t, i);
        return n && e.push(n), e;
      }, []);
    return De(e) ? r[0] : r;
  }
  (at.defaultProps = Ye),
    (at.setDefaultProps = function (e) {
      Object.keys(e).forEach(function (t) {
        Ye[t] = e[t];
      });
    }),
    (at.currentInput = He);
  Object.assign({}, K, {
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
    },
  });
  at.setDefaultProps({ render: nt });
  function lt(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function dt(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      void 0 === e[n]
        ? (e[n] = t[n])
        : lt(t[n]) &&
          lt(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          dt(e[n], t[n]);
    });
  }
  at("[data-tippy-content]", {});
  const ct = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function pt() {
    const e = "undefined" != typeof document ? document : {};
    return dt(e, ct), e;
  }
  const ut = {
    document: ct,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function ft() {
    const e = "undefined" != typeof window ? window : {};
    return dt(e, ut), e;
  }
  class ht extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function mt(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...mt(e)) : t.push(e);
      }),
      t
    );
  }
  function vt(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function gt(e, t) {
    const n = ft(),
      i = pt();
    let r = [];
    if (!t && e instanceof ht) return e;
    if (!e) return new ht(r);
    if ("string" == typeof e) {
      const n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        let e = "div";
        0 === n.indexOf("<li") && (e = "ul"),
          0 === n.indexOf("<tr") && (e = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
          0 === n.indexOf("<tbody") && (e = "table"),
          0 === n.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = n;
        for (let e = 0; e < t.childNodes.length; e += 1)
          r.push(t.childNodes[e]);
      } else
        r = (function (e, t) {
          if ("string" != typeof e) return [e];
          const n = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) n.push(i[e]);
          return n;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === n || e === i) r.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof ht) return e;
      r = e;
    }
    return new ht(
      (function (e) {
        const t = [];
        for (let n = 0; n < e.length; n += 1)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      })(r)
    );
  }
  gt.fn = ht.prototype;
  const bt = "resize scroll".split(" ");
  function wt(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          bt.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : gt(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  wt("click"),
    wt("blur"),
    wt("focus"),
    wt("focusin"),
    wt("focusout"),
    wt("keyup"),
    wt("keydown"),
    wt("keypress"),
    wt("submit"),
    wt("change"),
    wt("mousedown"),
    wt("mousemove"),
    wt("mouseup"),
    wt("mouseenter"),
    wt("mouseleave"),
    wt("mouseout"),
    wt("mouseover"),
    wt("touchstart"),
    wt("touchend"),
    wt("touchmove"),
    wt("resize"),
    wt("scroll");
  const yt = {
    addClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        vt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let n = 0; n < this.length; n += 1)
        if (2 === arguments.length) this[n].setAttribute(e, t);
        else
          for (const t in e) (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, n, i, r] = e;
      function s(e) {
        const t = e.target;
        if (!t) return;
        const r = e.target.dom7EventData || [];
        if ((r.indexOf(e) < 0 && r.unshift(e), gt(t).is(n))) i.apply(t, r);
        else {
          const e = gt(t).parents();
          for (let t = 0; t < e.length; t += 1)
            gt(e[t]).is(n) && i.apply(e[t], r);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
        r || (r = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (n)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: s }),
              t.addEventListener(e, s, r);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
              t.addEventListener(e, o, r);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, n, i, r] = e;
      "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
        r || (r = !1);
      const s = t.split(" ");
      for (let e = 0; e < s.length; e += 1) {
        const t = s[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let o;
          if (
            (!n && s.dom7Listeners
              ? (o = s.dom7Listeners[t])
              : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const n = o[e];
              (i && n.listener === i) ||
              (i &&
                n.listener &&
                n.listener.dom7proxy &&
                n.listener.dom7proxy === i)
                ? (s.removeEventListener(t, n.proxyListener, r), o.splice(e, 1))
                : i ||
                  (s.removeEventListener(t, n.proxyListener, r),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = ft(),
        n = e[0].split(" "),
        i = e[1];
      for (let r = 0; r < n.length; r += 1) {
        const s = n[r];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n];
          if (t.CustomEvent) {
            const n = new t.CustomEvent(s, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (r.dom7EventData = e.filter((e, t) => t > 0)),
              r.dispatchEvent(n),
              (r.dom7EventData = []),
              delete r.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function n(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", n));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = ft();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = ft(),
          t = pt(),
          n = this[0],
          i = n.getBoundingClientRect(),
          r = t.body,
          s = n.clientTop || r.clientTop || 0,
          o = n.clientLeft || r.clientLeft || 0,
          a = n === e ? e.scrollY : n.scrollTop,
          l = n === e ? e.scrollX : n.scrollLeft;
        return { top: i.top + a - s, left: i.left + l - o };
      }
      return null;
    },
    css: function (e, t) {
      const n = ft();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, n) => {
            e.apply(t, [t, n]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = ft(),
        n = pt(),
        i = this[0];
      let r, s;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (r = gt(e), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
        return !1;
      }
      if (e === n) return i === n;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof ht) {
        for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
          if (r[s] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return gt([]);
      if (e < 0) {
        const n = t + e;
        return gt(n < 0 ? [] : [this[n]]);
      }
      return gt([this[e]]);
    },
    append: function (...e) {
      let t;
      const n = pt();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = n.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof ht)
            for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = pt();
      let n, i;
      for (n = 0; n < this.length; n += 1)
        if ("string" == typeof e) {
          const r = t.createElement("div");
          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
            this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
        } else if (e instanceof ht)
          for (i = 0; i < e.length; i += 1)
            this[n].insertBefore(e[i], this[n].childNodes[0]);
        else this[n].insertBefore(e, this[n].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && gt(this[0].nextElementSibling).is(e)
            ? gt([this[0].nextElementSibling])
            : gt([])
          : this[0].nextElementSibling
          ? gt([this[0].nextElementSibling])
          : gt([])
        : gt([]);
    },
    nextAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return gt([]);
      for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? gt(i).is(e) && t.push(i) : t.push(i), (n = i);
      }
      return gt(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && gt(t.previousElementSibling).is(e)
            ? gt([t.previousElementSibling])
            : gt([])
          : t.previousElementSibling
          ? gt([t.previousElementSibling])
          : gt([]);
      }
      return gt([]);
    },
    prevAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return gt([]);
      for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? gt(i).is(e) && t.push(i) : t.push(i), (n = i);
      }
      return gt(t);
    },
    parent: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1)
        null !== this[n].parentNode &&
          (e
            ? gt(this[n].parentNode).is(e) && t.push(this[n].parentNode)
            : t.push(this[n].parentNode));
      return gt(t);
    },
    parents: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        let i = this[n].parentNode;
        for (; i; )
          e ? gt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return gt(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? gt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const i = this[n].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return gt(t);
    },
    children: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const i = this[n].children;
        for (let n = 0; n < i.length; n += 1)
          (e && !gt(i[n]).is(e)) || t.push(i[n]);
      }
      return gt(t);
    },
    filter: function (e) {
      return gt(vt(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(yt).forEach((e) => {
    Object.defineProperty(gt.fn, e, { value: yt[e], writable: !0 });
  });
  const xt = gt;
  function Tt(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function Et() {
    return Date.now();
  }
  function St(e, t) {
    void 0 === t && (t = "x");
    const n = ft();
    let i, r, s;
    const o = (function (e) {
      const t = ft();
      let n;
      return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
      );
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((r = o.transform || o.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
        : ((s =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      "x" === t &&
        (r = n.WebKitCSSMatrix
          ? s.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (r = n.WebKitCSSMatrix
          ? s.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      r || 0
    );
  }
  function Ct(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function Ot(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function At() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (null != i && !Ot(i)) {
        const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, r = n.length; t < r; t += 1) {
          const r = n[t],
            s = Object.getOwnPropertyDescriptor(i, r);
          void 0 !== s &&
            s.enumerable &&
            (Ct(e[r]) && Ct(i[r])
              ? i[r].__swiper__
                ? (e[r] = i[r])
                : At(e[r], i[r])
              : !Ct(e[r]) && Ct(i[r])
              ? ((e[r] = {}), i[r].__swiper__ ? (e[r] = i[r]) : At(e[r], i[r]))
              : (e[r] = i[r]));
        }
      }
    }
    return e;
  }
  function kt(e, t, n) {
    e.style.setProperty(t, n);
  }
  function Lt(e) {
    let { swiper: t, targetPosition: n, side: i } = e;
    const r = ft(),
      s = -t.translate;
    let o,
      a = null;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(t.cssModeFrameID);
    const d = n > s ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (o = new Date().getTime()), null === a && (a = o);
        const e = Math.max(Math.min((o - a) / l, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let u = s + d * (n - s);
        if ((c(u, n) && (u = n), t.wrapperEl.scrollTo({ [i]: u }), c(u, n)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: u });
            }),
            void r.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = r.requestAnimationFrame(p);
      };
    p();
  }
  let Pt, Mt, Dt;
  function $t() {
    return (
      Pt ||
        (Pt = (function () {
          const e = ft(),
            t = pt();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, n);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      Pt
    );
  }
  function _t(e) {
    return (
      void 0 === e && (e = {}),
      Mt ||
        (Mt = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const n = $t(),
            i = ft(),
            r = i.navigator.platform,
            s = t || i.navigator.userAgent,
            o = { ios: !1, android: !1 },
            a = i.screen.width,
            l = i.screen.height,
            d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = s.match(/(iPad).*OS\s([\d_]+)/);
          const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === r;
          let h = "MacIntel" === r;
          return (
            !c &&
              h &&
              n.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${l}`) >= 0 &&
              ((c = s.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (h = !1)),
            d && !f && ((o.os = "android"), (o.android = !0)),
            (c || u || p) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      Mt
    );
  }
  function It() {
    return (
      Dt ||
        (Dt = (function () {
          const e = ft();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      Dt
    );
  }
  const Bt = {
    on(e, t, n) {
      const i = this;
      if ("function" != typeof t) return i;
      const r = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][r](t);
        }),
        i
      );
    },
    once(e, t, n) {
      const i = this;
      if ("function" != typeof t) return i;
      function r() {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
          s[o] = arguments[o];
        t.apply(i, s);
      }
      return (r.__emitterProxy = t), i.on(e, r, n);
    },
    onAny(e, t) {
      const n = this;
      if ("function" != typeof e) return n;
      const i = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return n.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (n.eventsListeners[e] = [])
              : n.eventsListeners[e] &&
                n.eventsListeners[e].forEach((i, r) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[e].splice(r, 1);
                });
          }),
          n)
        : n;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, n, i;
      for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      "string" == typeof s[0] || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (i = e))
        : ((t = s[0].events), (n = s[0].data), (i = s[0].context || e)),
        n.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, n);
              });
        }),
        e
      );
    },
  };
  const jt = {
    updateSize: function () {
      const e = this;
      let t, n;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (n =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === n && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (n =
            n -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(n) && (n = 0),
          Object.assign(e, {
            width: t,
            height: n,
            size: e.isHorizontal() ? t : n,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function n(e, n) {
        return parseFloat(e.getPropertyValue(t(n)) || 0);
      }
      const i = e.params,
        { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && i.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = r.children(`.${e.params.slideClass}`),
        p = l ? e.virtual.slides.length : c.length;
      let u = [];
      const f = [],
        h = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let v = i.slidesOffsetAfter;
      "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
      const g = e.snapGrid.length,
        b = e.slidesGrid.length;
      let w = i.spaceBetween,
        y = -m,
        x = 0,
        T = 0;
      if (void 0 === s) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * s),
        (e.virtualSize = -w),
        o
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (kt(e.wrapperEl, "--swiper-centered-offset-before", ""),
          kt(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = i.grid && i.grid.rows > 1 && e.grid;
      let S;
      E && e.grid.initSlides(p);
      const C =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let r = 0; r < p; r += 1) {
        S = 0;
        const o = c.eq(r);
        if (
          (E && e.grid.updateSlide(r, o, p, t), "none" !== o.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            C && (c[r].style[t("width")] = "");
            const s = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = n(s, "width"),
                t = n(s, "padding-left"),
                i = n(s, "padding-right"),
                r = n(s, "margin-left"),
                a = n(s, "margin-right"),
                l = s.getPropertyValue("box-sizing");
              if (l && "border-box" === l) S = e + r + a;
              else {
                const { clientWidth: n, offsetWidth: s } = o[0];
                S = e + t + i + r + a + (s - n);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              i.roundLengths && (S = Math.floor(S));
          } else
            (S = (s - (i.slidesPerView - 1) * w) / i.slidesPerView),
              i.roundLengths && (S = Math.floor(S)),
              c[r] && (c[r].style[t("width")] = `${S}px`);
          c[r] && (c[r].swiperSlideSize = S),
            h.push(S),
            i.centeredSlides
              ? ((y = y + S / 2 + x / 2 + w),
                0 === x && 0 !== r && (y = y - s / 2 - w),
                0 === r && (y = y - s / 2 - w),
                Math.abs(y) < 0.001 && (y = 0),
                i.roundLengths && (y = Math.floor(y)),
                T % i.slidesPerGroup == 0 && u.push(y),
                f.push(y))
              : (i.roundLengths && (y = Math.floor(y)),
                (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                f.push(y),
                (y = y + S + w)),
            (e.virtualSize += S + w),
            (x = S),
            (T += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, s) + v),
        o &&
          a &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(S, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let n = 0; n < u.length; n += 1) {
          let r = u[n];
          i.roundLengths && (r = Math.floor(r)),
            u[n] <= e.virtualSize - s && t.push(r);
        }
        (u = t),
          Math.floor(e.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - s);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
          [n]: `${w}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        h.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - s;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + v : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < s)
        ) {
          const t = (s - e) / 2;
          u.forEach((e, n) => {
            u[n] = e - t;
          }),
            f.forEach((e, n) => {
              f[n] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: f,
          slidesSizesGrid: h,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        kt(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          kt(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - h[h.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          n = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + n));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        u.length !== g &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== b && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          n = e.$el.hasClass(t);
        p <= i.maxBackfaceHiddenSlides
          ? n || e.$el.addClass(t)
          : n && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        n = [],
        i = t.virtual && t.params.virtual.enabled;
      let r,
        s = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            n.push(e);
          });
        else
          for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            n.push(o(e));
          }
      else n.push(o(t.activeIndex));
      for (r = 0; r < n.length; r += 1)
        if (void 0 !== n[r]) {
          const e = n[r].offsetHeight;
          s = e > s ? e : s;
        }
      (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let n = 0; n < t.length; n += 1)
        t[n].swiperSlideOffset = e.isHorizontal()
          ? t[n].offsetLeft
          : t[n].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        n = t.params,
        { slides: i, rtlTranslate: r, snapGrid: s } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      r && (o = e),
        i.removeClass(n.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const a = i[e];
        let l = a.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
        const d =
            (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          c =
            (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          p = -(o - l),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(n.slideVisibleClass)),
          (a.progress = r ? -d : d),
          (a.originalProgress = r ? -c : c);
      }
      t.visibleSlides = xt(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const n = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * n) || 0;
      }
      const n = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: r, isBeginning: s, isEnd: o } = t;
      const a = s,
        l = o;
      0 === i
        ? ((r = 0), (s = !0), (o = !0))
        : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
        Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
          t.updateSlidesProgress(e),
        s && !a && t.emit("reachBeginning toEdge"),
        o && !l && t.emit("reachEnd toEdge"),
        ((a && !s) || (l && !o)) && t.emit("fromEdge"),
        t.emit("progress", r);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: n,
          $wrapperEl: i,
          activeIndex: r,
          realIndex: s,
        } = e,
        o = e.virtual && n.virtual.enabled;
      let a;
      t.removeClass(
        `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${n.slideClass}[data-swiper-slide-index="${r}"]`
            )
          : t.eq(r)),
        a.addClass(n.slideActiveClass),
        n.loop &&
          (a.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                )
                .addClass(n.slideDuplicateActiveClass)
            : i
                .children(
                  `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                )
                .addClass(n.slideDuplicateActiveClass));
      let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
      n.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(n.slideNextClass));
      let d = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
      n.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
        n.loop &&
          (l.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass)
            : i
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass),
          d.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)
            : i
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: r,
          params: s,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (c = e)
              : n >= i[e] && n < i[e + 1] && (c = e + 1)
            : n >= i[e] && (c = e);
        s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (r.indexOf(n) >= 0) d = r.indexOf(n);
      else {
        const e = Math.min(s.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / s.slidesPerGroup);
      }
      if ((d >= r.length && (d = r.length - 1), c === o))
        return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: o,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        n = t.params,
        i = xt(e).closest(`.${n.slideClass}`)[0];
      let r,
        s = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (s = !0), (r = e);
            break;
          }
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              xt(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = r),
        n.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const zt = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: n, translate: i, $wrapperEl: r } = this;
      if (t.virtualTranslate) return n ? -i : i;
      if (t.cssMode) return i;
      let s = St(r[0], e);
      return n && (s = -s), s || 0;
    },
    setTranslate: function (e, t) {
      const n = this,
        {
          rtlTranslate: i,
          params: r,
          $wrapperEl: s,
          wrapperEl: o,
          progress: a,
        } = n;
      let l,
        d = 0,
        c = 0;
      n.isHorizontal() ? (d = i ? -e : e) : (c = e),
        r.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        r.cssMode
          ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
              ? -d
              : -c)
          : r.virtualTranslate ||
            s.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? d : c);
      const p = n.maxTranslate() - n.minTranslate();
      (l = 0 === p ? 0 : (e - n.minTranslate()) / p),
        l !== a && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, n, i, r) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        void 0 === i && (i = !0);
      const s = this,
        { params: o, wrapperEl: a } = s;
      if (s.animating && o.preventInteractionOnTransition) return !1;
      const l = s.minTranslate(),
        d = s.maxTranslate();
      let c;
      if (
        ((c = i && e > l ? l : i && e < d ? d : e),
        s.updateProgress(c),
        o.cssMode)
      ) {
        const e = s.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!s.support.smoothScroll)
            return (
              Lt({ swiper: s, targetPosition: -c, side: e ? "left" : "top" }),
              !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (s.setTransition(0),
            s.setTranslate(c),
            n &&
              (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd")))
          : (s.setTransition(t),
            s.setTranslate(c),
            n &&
              (s.emit("beforeTransitionStart", t, r),
              s.emit("transitionStart")),
            s.animating ||
              ((s.animating = !0),
              s.onTranslateToWrapperTransitionEnd ||
                (s.onTranslateToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    n && s.emit("transitionEnd"));
                }),
              s.$wrapperEl[0].addEventListener(
                "transitionend",
                s.onTranslateToWrapperTransitionEnd
              ),
              s.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                s.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function Nt(e) {
    let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
    const { activeIndex: s, previousIndex: o } = t;
    let a = i;
    if (
      (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
      t.emit(`transition${r}`),
      n && s !== o)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
      t.emit(`slideChangeTransition${r}`),
        "next" === a
          ? t.emit(`slideNextTransition${r}`)
          : t.emit(`slidePrevTransition${r}`);
    }
  }
  const Vt = {
    slideTo: function (e, t, n, i, r) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const s = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: f,
        enabled: h,
      } = s;
      if ((s.animating && a.preventInteractionOnTransition) || (!h && !i && !r))
        return !1;
      const m = Math.min(s.params.slidesPerGroupSkip, o);
      let v = m + Math.floor((o - m) / s.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1),
        (p || a.initialSlide || 0) === (c || 0) &&
          n &&
          s.emit("beforeSlideChangeStart");
      const g = -l[v];
      if ((s.updateProgress(g), a.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * g),
            n = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= n && t < i - (i - n) / 2
              ? (o = e)
              : t >= n && t < i && (o = e + 1)
            : t >= n && (o = e);
        }
      if (s.initialized && o !== p) {
        if (!s.allowSlideNext && g < s.translate && g < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          g > s.translate &&
          g > s.maxTranslate() &&
          (p || 0) !== o
        )
          return !1;
      }
      let b;
      if (
        ((b = o > p ? "next" : o < p ? "prev" : "reset"),
        (u && -g === s.translate) || (!u && g === s.translate))
      )
        return (
          s.updateActiveIndex(o),
          a.autoHeight && s.updateAutoHeight(),
          s.updateSlidesClasses(),
          "slide" !== a.effect && s.setTranslate(g),
          "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)),
          !1
        );
      if (a.cssMode) {
        const e = s.isHorizontal(),
          n = u ? g : -g;
        if (0 === t) {
          const t = s.virtual && s.params.virtual.enabled;
          t &&
            ((s.wrapperEl.style.scrollSnapType = "none"),
            (s._immediateVirtual = !0)),
            (f[e ? "scrollLeft" : "scrollTop"] = n),
            t &&
              requestAnimationFrame(() => {
                (s.wrapperEl.style.scrollSnapType = ""),
                  (s._swiperImmediateVirtual = !1);
              });
        } else {
          if (!s.support.smoothScroll)
            return (
              Lt({ swiper: s, targetPosition: n, side: e ? "left" : "top" }), !0
            );
          f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
        }
        return !0;
      }
      return (
        s.setTransition(t),
        s.setTranslate(g),
        s.updateActiveIndex(o),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", t, i),
        s.transitionStart(n, b),
        0 === t
          ? s.transitionEnd(n, b)
          : s.animating ||
            ((s.animating = !0),
            s.onSlideToWrapperTransitionEnd ||
              (s.onSlideToWrapperTransitionEnd = function (e) {
                s &&
                  !s.destroyed &&
                  e.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(n, b));
              }),
            s.$wrapperEl[0].addEventListener(
              "transitionend",
              s.onSlideToWrapperTransitionEnd
            ),
            s.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              s.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, n, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0);
      const r = this;
      let s = e;
      return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
    },
    slideNext: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { animating: r, enabled: s, params: o } = i;
      if (!s) return i;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (r && o.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return o.rewind && i.isEnd
        ? i.slideTo(0, e, t, n)
        : i.slideTo(i.activeIndex + l, e, t, n);
    },
    slidePrev: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: r,
          animating: s,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: d,
        } = i;
      if (!d) return i;
      if (r.loop) {
        if (s && r.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(l ? i.translate : -i.translate),
        u = o.map((e) => c(e));
      let f = o[u.indexOf(p) - 1];
      if (void 0 === f && r.cssMode) {
        let e;
        o.forEach((t, n) => {
          p >= t && (e = n);
        }),
          void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      if (
        (void 0 !== f &&
          ((h = a.indexOf(f)),
          h < 0 && (h = i.activeIndex - 1),
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        r.rewind && i.isBeginning)
      ) {
        const r =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(r, e, t, n);
      }
      return i.slideTo(h, e, t, n);
    },
    slideReset: function (e, t, n) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, n)
      );
    },
    slideToClosest: function (e, t, n, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const r = this;
      let s = r.activeIndex;
      const o = Math.min(r.params.slidesPerGroupSkip, s),
        a = o + Math.floor((s - o) / r.params.slidesPerGroup),
        l = r.rtlTranslate ? r.translate : -r.translate;
      if (l >= r.snapGrid[a]) {
        const e = r.snapGrid[a];
        l - e > (r.snapGrid[a + 1] - e) * i && (s += r.params.slidesPerGroup);
      } else {
        const e = r.snapGrid[a - 1];
        l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
      }
      return (
        (s = Math.max(s, 0)),
        (s = Math.min(s, r.slidesGrid.length - 1)),
        r.slideTo(s, e, t, n)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: n } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let r,
        s = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (r = parseInt(xt(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? s < e.loopedSlides - i / 2 ||
              s > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (s = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Tt(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s)
            : s > e.slides.length - i
            ? (e.loopFix(),
              (s = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Tt(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s);
      } else e.slideTo(s);
    },
  };
  const Ht = {
    loopCreate: function () {
      const e = this,
        t = pt(),
        { params: n, $wrapperEl: i } = e,
        r = i.children().length > 0 ? xt(i.children()[0].parentNode) : i;
      r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
      let s = r.children(`.${n.slideClass}`);
      if (n.loopFillGroupWithBlank) {
        const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
        if (e !== n.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = xt(t.createElement("div")).addClass(
              `${n.slideClass} ${n.slideBlankClass}`
            );
            r.append(e);
          }
          s = r.children(`.${n.slideClass}`);
        }
      }
      "auto" !== n.slidesPerView ||
        n.loopedSlides ||
        (n.loopedSlides = s.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(n.loopedSlides || n.slidesPerView, 10)
        )),
        (e.loopedSlides += n.loopAdditionalSlides),
        e.loopedSlides > s.length && (e.loopedSlides = s.length);
      const o = [],
        a = [];
      s.each((t, n) => {
        const i = xt(t);
        n < e.loopedSlides && a.push(t),
          n < s.length && n >= s.length - e.loopedSlides && o.push(t),
          i.attr("data-swiper-slide-index", n);
      });
      for (let e = 0; e < a.length; e += 1)
        r.append(xt(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        r.prepend(xt(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: n,
        loopedSlides: i,
        allowSlidePrev: r,
        allowSlideNext: s,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -o[t] - e.getTranslate();
      if (t < i) {
        (l = n.length - 3 * i + t), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      } else if (t >= n.length - i) {
        (l = -n.length + t + i), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: n } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        n.removeAttr("data-swiper-slide-index");
    },
  };
  function Gt(e) {
    const t = this,
      n = pt(),
      i = ft(),
      r = t.touchEventsData,
      { params: s, touches: o, enabled: a } = t;
    if (!a) return;
    if (t.animating && s.preventInteractionOnTransition) return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = xt(l.target);
    if ("wrapper" === s.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((r.isTouchEvent = "touchstart" === l.type),
      !r.isTouchEvent && "which" in l && 3 === l.which)
    )
      return;
    if (!r.isTouchEvent && "button" in l && l.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    !!s.noSwipingClass &&
      "" !== s.noSwipingClass &&
      l.target &&
      l.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = xt(e.path[0]));
    const c = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      p = !(!l.target || !l.target.shadowRoot);
    if (
      s.noSwiping &&
      (p
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(n) {
                return n && n !== pt() && n !== ft()
                  ? (n.assignedSlot && (n = n.assignedSlot),
                    n.closest(e) || t(n.getRootNode().host))
                  : null;
              })(t)
            );
          })(c, l.target)
        : d.closest(c)[0])
    )
      return void (t.allowClick = !0);
    if (s.swipeHandler && !d.closest(s.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (o.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const u = o.currentX,
      f = o.currentY,
      h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (h && (u <= m || u >= i.innerWidth - m)) {
      if ("prevent" !== h) return;
      e.preventDefault();
    }
    if (
      (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = u),
      (o.startY = f),
      (r.touchStartTime = Et()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      d.is(r.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (r.isTouched = !1)),
        n.activeElement &&
          xt(n.activeElement).is(r.focusableElements) &&
          n.activeElement !== d[0] &&
          n.activeElement.blur();
      const i = e && t.allowTouchMove && s.touchStartPreventDefault;
      (!s.touchStartForcePreventDefault && !i) ||
        d[0].isContentEditable ||
        l.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function Wt(e) {
    const t = pt(),
      n = this,
      i = n.touchEventsData,
      { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
    if (!a) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        n.emit("touchMoveOpposite", l)
      );
    if (i.isTouchEvent && "touchmove" !== l.type) return;
    const d =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      c = "touchmove" === l.type ? d.pageX : l.pageX,
      p = "touchmove" === l.type ? d.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (s.startX = c), void (s.startY = p);
    if (!n.allowTouchMove)
      return (
        xt(l.target).is(i.focusableElements) || (n.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(s, { startX: c, startY: p, currentX: c, currentY: p }),
          (i.touchStartTime = Et()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (n.isVertical()) {
        if (
          (p < s.startY && n.translate <= n.maxTranslate()) ||
          (p > s.startY && n.translate >= n.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (c < s.startX && n.translate <= n.maxTranslate()) ||
        (c > s.startX && n.translate >= n.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      xt(l.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (n.allowClick = !1);
    if (
      (i.allowTouchCallbacks && n.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (s.currentX = c), (s.currentY = p);
    const u = s.currentX - s.startX,
      f = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(u ** 2 + f ** 2) < n.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : u * u + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
          (i.isScrolling = n.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && n.emit("touchMoveOpposite", l),
      void 0 === i.startMoving &&
        ((s.currentX === s.startX && s.currentY === s.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (n.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && n.loopFix(),
        (i.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)),
      n.emit("sliderMove", l),
      (i.isMoved = !0);
    let h = n.isHorizontal() ? u : f;
    (s.diff = h),
      (h *= r.touchRatio),
      o && (h = -h),
      (n.swipeDirection = h > 0 ? "prev" : "next"),
      (i.currentTranslate = h + i.startTranslate);
    let m = !0,
      v = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (v = 0),
      h > 0 && i.currentTranslate > n.minTranslate()
        ? ((m = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + h) ** v))
        : h < 0 &&
          i.currentTranslate < n.maxTranslate() &&
          ((m = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - h) ** v)),
      m && (l.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        "next" === n.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !n.allowSlidePrev &&
        "prev" === n.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      n.allowSlidePrev ||
        n.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          void (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
        r.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        r.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(i.currentTranslate),
      n.setTranslate(i.currentTranslate));
  }
  function qt(e) {
    const t = this,
      n = t.touchEventsData,
      { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = Et(),
      c = d - n.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          d - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = Et()),
      Tt(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    let p;
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (p = i.followFinger
        ? s
          ? t.translate
          : -t.translate
        : -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== o[e + t]
        ? p >= o[e] && p < o[e + t] && ((u = e), (f = o[e + t] - o[e]))
        : p >= o[e] && ((u = e), (f = o[o.length - 1] - o[o.length - 2]));
    }
    let h = null,
      m = null;
    i.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (h = 0));
    const v = (p - o[u]) / f,
      g = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (v >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? h : u + g)
          : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (v > 1 - i.longSwipesRatio
            ? t.slideTo(u + g)
            : null !== m && v < 0 && Math.abs(v) > i.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(u + g)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + g),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
    }
  }
  function Rt() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = r),
      (e.allowSlideNext = i),
      e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function Ft(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Xt() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
    if (!i) return;
    let r;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const s = e.maxTranslate() - e.minTranslate();
    (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
      r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Yt = !1;
  function Ut() {}
  const Qt = (e, t) => {
    const n = pt(),
      {
        params: i,
        touchEvents: r,
        el: s,
        wrapperEl: o,
        device: a,
        support: l,
      } = e,
      d = !!i.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== r.start ||
        !l.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      s[c](r.start, e.onTouchStart, t),
        s[c](
          r.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: d } : d
        ),
        s[c](r.end, e.onTouchEnd, t),
        r.cancel && s[c](r.cancel, e.onTouchEnd, t);
    } else
      s[c](r.start, e.onTouchStart, !1),
        n[c](r.move, e.onTouchMove, d),
        n[c](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      s[c]("click", e.onClick, !0),
      i.cssMode && o[c]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Rt,
            !0
          )
        : e[p]("observerUpdate", Rt, !0);
  };
  const Kt = {
      attachEvents: function () {
        const e = this,
          t = pt(),
          { params: n, support: i } = e;
        (e.onTouchStart = Gt.bind(e)),
          (e.onTouchMove = Wt.bind(e)),
          (e.onTouchEnd = qt.bind(e)),
          n.cssMode && (e.onScroll = Xt.bind(e)),
          (e.onClick = Ft.bind(e)),
          i.touch && !Yt && (t.addEventListener("touchstart", Ut), (Yt = !0)),
          Qt(e, "on");
      },
      detachEvents: function () {
        Qt(this, "off");
      },
    },
    Jt = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Zt = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: n,
          loopedSlides: i = 0,
          params: r,
          $el: s,
        } = e,
        o = r.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        d = Jt(e, r),
        c = Jt(e, l),
        p = r.enabled;
      d && !c
        ? (s.removeClass(
            `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (s.addClass(`${r.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === r.grid.fill)) &&
            s.addClass(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = l.direction && l.direction !== r.direction,
        f = r.loop && (l.slidesPerView !== r.slidesPerView || u);
      u && n && e.changeDirection(), At(e.params, l);
      const h = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !h ? e.disable() : !p && h && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", l),
        f &&
          n &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, n) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
        return;
      let i = !1;
      const r = ft(),
        s = "window" === t ? r.innerHeight : n.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: s * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: s, value: a } = o[e];
        "window" === t
          ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
          : a <= n.clientWidth && (i = s);
      }
      return i || "max";
    },
  };
  const en = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: n, rtl: i, $el: r, device: s, support: o } = e,
        a = (function (e, t) {
          const n = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && n.push(t + i);
                  })
                : "string" == typeof e && n.push(t + e);
            }),
            n
          );
        })(
          [
            "initialized",
            n.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && n.freeMode.enabled },
            { autoheight: n.autoHeight },
            { rtl: i },
            { grid: n.grid && n.grid.rows > 1 },
            {
              "grid-column":
                n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
            },
            { android: s.android },
            { ios: s.ios },
            { "css-mode": n.cssMode },
            { centered: n.cssMode && n.centeredSlides },
          ],
          n.containerModifierClass
        );
      t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const tn = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
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
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
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
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function nn(e, t) {
    return function (n) {
      void 0 === n && (n = {});
      const i = Object.keys(n)[0],
        r = n[i];
      "object" == typeof r && null !== r
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in r
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              At(t, n))
            : At(t, n))
        : At(t, n);
    };
  }
  const rn = {
      eventsEmitter: Bt,
      update: jt,
      translate: zt,
      transition: {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: i } = n;
          i.cssMode ||
            (i.autoHeight && n.updateAutoHeight(),
            Nt({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: i } = n;
          (n.animating = !1),
            i.cssMode ||
              (n.setTransition(0),
              Nt({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: Vt,
      loop: Ht,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (n.style.cursor = "move"),
            (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (n.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: Kt,
      breakpoints: Zt,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: n } = e,
            { slidesOffsetBefore: i } = n;
          if (i) {
            const t = e.slides.length - 1,
              n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > n;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: en,
      images: {
        loadImage: function (e, t, n, i, r, s) {
          const o = ft();
          let a;
          function l() {
            s && s();
          }
          xt(e).parent("picture")[0] || (e.complete && r)
            ? l()
            : t
            ? ((a = new o.Image()),
              (a.onload = l),
              (a.onerror = l),
              i && (a.sizes = i),
              n && (a.srcset = n),
              t && (a.src = t))
            : l();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let n = 0; n < e.imagesToLoad.length; n += 1) {
            const i = e.imagesToLoad[n];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    sn = {};
  class on {
    constructor() {
      let e, t;
      for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
        i[r] = arguments[r];
      if (
        (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
        t || (t = {}),
        (t = At({}, t)),
        e && !t.el && (t.el = e),
        t.el && xt(t.el).length > 1)
      ) {
        const e = [];
        return (
          xt(t.el).each((n) => {
            const i = At({}, t, { el: n });
            e.push(new on(i));
          }),
          e
        );
      }
      const s = this;
      (s.__swiper__ = !0),
        (s.support = $t()),
        (s.device = _t({ userAgent: t.userAgent })),
        (s.browser = It()),
        (s.eventsListeners = {}),
        (s.eventsAnyListeners = []),
        (s.modules = [...s.__modules__]),
        t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
      const o = {};
      s.modules.forEach((e) => {
        e({
          swiper: s,
          extendParams: nn(t, o),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s),
        });
      });
      const a = At({}, tn, o);
      return (
        (s.params = At({}, a, sn, t)),
        (s.originalParams = At({}, s.params)),
        (s.passedParams = At({}, t)),
        s.params &&
          s.params.on &&
          Object.keys(s.params.on).forEach((e) => {
            s.on(e, s.params.on[e]);
          }),
        s.params && s.params.onAny && s.onAny(s.params.onAny),
        (s.$ = xt),
        Object.assign(s, {
          enabled: s.params.enabled,
          el: e,
          classNames: [],
          slides: xt(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === s.params.direction,
          isVertical: () => "vertical" === s.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: s.params.allowSlideNext,
          allowSlidePrev: s.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (s.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              s.support.touch || !s.params.simulateTouch
                ? s.touchEventsTouch
                : s.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: s.params.focusableElements,
            lastClickTime: Et(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: s.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        s.emit("_swiper"),
        s.params.init && s.init(),
        s
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = n.minTranslate(),
        r = (n.maxTranslate() - i) * e + i;
      n.translateTo(r, void 0 === t ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((n) => {
        const i = e.getSlideClasses(n);
        t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: n,
        slides: i,
        slidesGrid: r,
        slidesSizesGrid: s,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (n.centeredSlides) {
        let e,
          t = i[a].swiperSlideSize;
        for (let n = a + 1; n < i.length; n += 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let n = a - 1; n >= 0; n -= 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < i.length; e += 1) {
          (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          r[a] - r[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      n.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((r =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            r || i()),
        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const n = this,
        i = n.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (n.$el
            .removeClass(`${n.params.containerModifierClass}${i}`)
            .addClass(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          n.emit("changeDirection"),
          t && n.update()),
        n
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const n = xt(e || t.params.el);
      if (!(e = n[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = xt(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => n.children(e)), t;
        }
        return n.children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = pt().createElement("div");
        (r = xt(e)),
          (e.className = t.params.wrapperClass),
          n.append(e),
          n.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: n,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const n = this,
        { params: i, $el: r, $wrapperEl: s, slides: o } = n;
      return (
        void 0 === n.params ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          i.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            r.removeAttr("style"),
            s.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            ((n.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(sn, e);
    }
    static get extendedDefaults() {
      return sn;
    }
    static get defaults() {
      return tn;
    }
    static installModule(e) {
      on.prototype.__modules__ || (on.prototype.__modules__ = []);
      const t = on.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => on.installModule(e)), on)
        : (on.installModule(e), on);
    }
  }
  Object.keys(rn).forEach((e) => {
    Object.keys(rn[e]).forEach((t) => {
      on.prototype[t] = rn[e][t];
    });
  }),
    on.use([
      function (e) {
        let { swiper: t, on: n, emit: i } = e;
        const r = ft();
        let s = null,
          o = null;
        const a = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (i("beforeResize"), i("resize"));
          },
          l = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        n("init", () => {
          t.params.resizeObserver && void 0 !== r.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((s = new ResizeObserver((e) => {
                o = r.requestAnimationFrame(() => {
                  const { width: n, height: i } = t;
                  let r = n,
                    s = i;
                  e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: i, target: o } = e;
                    (o && o !== t.el) ||
                      ((r = i ? i.width : (n[0] || n).inlineSize),
                      (s = i ? i.height : (n[0] || n).blockSize));
                  }),
                    (r === n && s === i) || a();
                });
              })),
              s.observe(t.el))
            : (r.addEventListener("resize", a),
              r.addEventListener("orientationchange", l));
        }),
          n("destroy", () => {
            o && r.cancelAnimationFrame(o),
              s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
              r.removeEventListener("resize", a),
              r.removeEventListener("orientationchange", l);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const s = [],
          o = ft(),
          a = function (e, t) {
            void 0 === t && (t = {});
            const n = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void r("observerUpdate", e[0]);
                const t = function () {
                  r("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              }
            );
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              s.push(n);
          };
        n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) a(e[t]);
              }
              a(t.$el[0], { childList: t.params.observeSlideChildren }),
                a(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          i("destroy", () => {
            s.forEach((e) => {
              e.disconnect();
            }),
              s.splice(0, s.length);
          });
      },
    ]);
  const an = on;
  function ln(e) {
    let { swiper: t, extendParams: n, on: i, emit: r } = e;
    function s(e) {
      let n;
      return (
        e &&
          ((n = xt(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            n.length > 1 &&
            1 === t.$el.find(e).length &&
            (n = t.$el.find(e))),
        n
      );
    }
    function o(e, n) {
      const i = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[n ? "addClass" : "removeClass"](i.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function a() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: n } = t.navigation;
      o(n, t.isBeginning && !t.params.rewind),
        o(e, t.isEnd && !t.params.rewind);
    }
    function l(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function d(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function c() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, n, i) {
          const r = pt();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((s) => {
                if (!n[s] && !0 === n.auto) {
                  let o = e.$el.children(`.${i[s]}`)[0];
                  o ||
                    ((o = r.createElement("div")),
                    (o.className = i[s]),
                    e.$el.append(o)),
                    (n[s] = o),
                    (t[s] = o);
                }
              }),
            n
          );
        })(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !e.nextEl && !e.prevEl)
      )
        return;
      const n = s(e.nextEl),
        i = s(e.prevEl);
      n && n.length > 0 && n.on("click", d),
        i && i.length > 0 && i.on("click", l),
        Object.assign(t.navigation, {
          $nextEl: n,
          nextEl: n && n[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        t.enabled ||
          (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
    }
    function p() {
      const { $nextEl: e, $prevEl: n } = t.navigation;
      e &&
        e.length &&
        (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
        n &&
          n.length &&
          (n.off("click", l), n.removeClass(t.params.navigation.disabledClass));
    }
    n({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      i("init", () => {
        c(), a();
      }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          n &&
            n[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      i("click", (e, n) => {
        const { $nextEl: i, $prevEl: s } = t.navigation,
          o = n.target;
        if (t.params.navigation.hideOnClick && !xt(o).is(s) && !xt(o).is(i)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === o || t.pagination.el.contains(o))
          )
            return;
          let e;
          i
            ? (e = i.hasClass(t.params.navigation.hiddenClass))
            : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
            r(!0 === e ? "navigationShow" : "navigationHide"),
            i && i.toggleClass(t.params.navigation.hiddenClass),
            s && s.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: a, init: c, destroy: p });
  }
  function dn() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    dn(),
      document.querySelector(".flights__slider") &&
        new an(".flights__slider", {
          modules: [ln],
          observer: !0,
          observeParents: !0,
          slidesPerView: 3,
          spaceBetween: 40,
          autoHeight: !0,
          speed: 800,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            590: { slidesPerView: 2, spaceBetween: 30 },
            930: { slidesPerView: 3, spaceBetween: 30 },
            1268: { slidesPerView: 3, spaceBetween: 40 },
          },
          on: {},
        }),
      document.querySelector(".tour__slider") &&
        new an(".tour__slider", {
          modules: [ln],
          observer: !0,
          observeParents: !0,
          slidesPerView: 3.2,
          spaceBetween: 80,
          autoHeight: !0,
          speed: 800,
          navigation: {
            nextEl: ".slider-arrow__next",
            prevEl: ".slider-arrow__prev",
          },
          breakpoints: {
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            500: { slidesPerView: 1.7, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 40 },
            992: { slidesPerView: 2.7, spaceBetween: 60 },
            1268: { slidesPerView: 3.2, spaceBetween: 80 },
          },
          on: {},
        }),
      document.querySelector(".destinaters__slider") &&
        new an(".destinaters__slider", {
          observer: !0,
          observeParents: !0,
          slidesPerView: 1.5,
          spaceBetween: 100,
          autoHeight: !0,
          speed: 800,
          navigation: {
            nextEl: ".about__more .more__item_next",
            prevEl: ".about__more .more__item_prev",
          },
          breakpoints: {
            320: { slidesPerView: 1.2, spaceBetween: 50 },
            768: { slidesPerView: 1.3, spaceBetween: 50 },
            992: { slidesPerView: 1.5, spaceBetween: 100 },
            1268: { slidesPerView: 1.5, spaceBetween: 100 },
          },
          on: {},
        });
  });
  let cn = !1;
  setTimeout(() => {
    if (cn) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const pn = document.querySelector(".__select"),
    un = pn.querySelector(".__select__title"),
    fn = pn.querySelectorAll(".__select__label");
  un.addEventListener("click", () => {
    "active" === pn.getAttribute("data-state")
      ? pn.setAttribute("data-state", "")
      : pn.setAttribute("data-state", "active");
  });
  for (let e = 0; e < fn.length; e++)
    fn[e].addEventListener("click", (e) => {
      (un.textContent = e.target.textContent),
        pn.setAttribute("data-state", "");
    });
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let r = [];
      if (e.length > 0) {
        const t = location.hash.replace("#", "");
        t.startsWith("tab-") && (r = t.replace("tab-", "").split("-")),
          e.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", o),
              (function (e) {
                const t = e.querySelectorAll("[data-tabs-titles]>*"),
                  n = e.querySelectorAll("[data-tabs-body]>*"),
                  i = e.dataset.tabsIndex,
                  s = r[0] == i;
                if (s) {
                  e.querySelector(
                    "[data-tabs-titles]>._tab-active"
                  ).classList.remove("_tab-active");
                }
                n.length > 0 &&
                  n.forEach((e, n) => {
                    t[n].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      s && n == r[1] && t[n].classList.add("_tab-active"),
                      (e.hidden = !t[n].classList.contains("_tab-active"));
                  });
              })(e);
          });
        let n = i(e, "tabs");
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              s(e.itemsArray, e.matchMedia);
            }),
              s(e.itemsArray, e.matchMedia);
          });
      }
      function s(e, t) {
        e.forEach((e) => {
          const n = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            r = e.querySelector("[data-tabs-body]");
          e.querySelectorAll("[data-tabs-item]").forEach((s, o) => {
            t.matches
              ? (r.append(i[o]), r.append(s), e.classList.add("_tab-spoller"))
              : (n.append(i[o]), e.classList.remove("_tab-spoller"));
          });
        });
      }
      function o(e) {
        const i = e.target;
        if (i.closest("[data-tabs-title]")) {
          const r = i.closest("[data-tabs-title]"),
            s = r.closest("[data-tabs]");
          if (
            !r.classList.contains("_tab-active") &&
            !s.querySelectorAll("._slide").length
          ) {
            const e = s.querySelector("[data-tabs-title]._tab-active");
            e && e.classList.remove("_tab-active"),
              r.classList.add("_tab-active"),
              (function (e) {
                const i = e.querySelectorAll("[data-tabs-title]"),
                  r = e.querySelectorAll("[data-tabs-item]"),
                  s = e.dataset.tabsIndex,
                  o = (function (e) {
                    if (e.hasAttribute("data-tabs-animate"))
                      return e.dataset.tabsAnimate > 0
                        ? e.dataset.tabsAnimate
                        : 500;
                  })(e);
                r.length > 0 &&
                  r.forEach((e, r) => {
                    i[r].classList.contains("_tab-active")
                      ? (o ? n(e, o) : (e.hidden = !1),
                        e.closest(".popup") ||
                          (location.hash = `tab-${s}-${r}`))
                      : o
                      ? t(e, o)
                      : (e.hidden = !0);
                  });
              })(s);
          }
          e.preventDefault();
        }
      }
    })();
})();
