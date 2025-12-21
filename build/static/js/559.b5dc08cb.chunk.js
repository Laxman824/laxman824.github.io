/*! For license information please see 559.b5dc08cb.chunk.js.LICENSE.txt */
(self.webpackChunkLaxman_portfolio =
  self.webpackChunkLaxman_portfolio || []).push([
  [559],
  {
    45: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(8587);
      function o(e, t) {
        if (null == e) return {};
        var n,
          o,
          i = (0, r.A)(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              -1 === t.indexOf(n) &&
                {}.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
    },
    559: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => Pn });
      var r = n(9379),
        o = n(45);
      function i(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var s = n(5173),
        a = n.n(s),
        c = n(5043);
      function u(e) {
        const t = (function (e) {
          const t = (0, c.useRef)(e);
          return (t.current = e), t;
        })(e);
        (0, c.useEffect)(() => () => t.current(), []);
      }
      const l = 2 ** 31 - 1;
      function f(e, t, n) {
        const r = n - Date.now();
        e.current = r <= l ? setTimeout(t, r) : setTimeout(() => f(e, t, n), l);
      }
      function p() {
        const e = (function () {
            const e = (0, c.useRef)(!0),
              t = (0, c.useRef)(() => e.current);
            return (
              (0, c.useEffect)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                []
              ),
              t.current
            );
          })(),
          t = (0, c.useRef)();
        return (
          u(() => clearTimeout(t.current)),
          (0, c.useMemo)(() => {
            const n = () => clearTimeout(t.current);
            return {
              set: function (r) {
                let o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                e() &&
                  (n(),
                  o <= l
                    ? (t.current = setTimeout(r, o))
                    : f(t, r, Date.now() + o));
              },
              clear: n,
              handleRef: t,
            };
          }, [])
        );
      }
      var d = n(6440),
        h = n.n(d);
      n(2740);
      function m(e, t, n) {
        var r = (0, c.useRef)(void 0 !== e),
          o = (0, c.useState)(t),
          i = o[0],
          s = o[1],
          a = void 0 !== e,
          u = r.current;
        return (
          (r.current = a),
          !a && u && i !== t && s(t),
          [
            a ? e : i,
            (0, c.useCallback)(
              function (e) {
                for (
                  var t = arguments.length,
                    r = new Array(t > 1 ? t - 1 : 0),
                    o = 1;
                  o < t;
                  o++
                )
                  r[o - 1] = arguments[o];
                n && n.apply(void 0, [e].concat(r)), s(e);
              },
              [n]
            ),
          ]
        );
      }
      function v() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function g(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function y(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (v.__suppressDeprecationWarning = !0),
        (g.__suppressDeprecationWarning = !0),
        (y.__suppressDeprecationWarning = !0);
      const b = (e) =>
        e && "function" !== typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const x = function (e, t) {
        return (0, c.useMemo)(
          () =>
            (function (e, t) {
              const n = b(e),
                r = b(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t]
        );
      };
      function E(e) {
        if (!e || "function" === typeof e) return null;
        const { major: t } = (function () {
          const e = c.version.split(".");
          return { major: +e[0], minor: +e[1], patch: +e[2] };
        })();
        return t >= 19 ? e.props.ref : e.ref;
      }
      var w = n(8139),
        O = n.n(w),
        A = n(7950);
      function C() {
        return (0, c.useState)(null);
      }
      const k = (e) =>
        e && "function" !== typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const j = function (e, t) {
        return (0, c.useMemo)(
          () =>
            (function (e, t) {
              const n = k(e),
                r = k(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t]
        );
      };
      var R = Object.prototype.hasOwnProperty;
      function P(e, t, n) {
        for (n of e.keys()) if (S(n, t)) return n;
      }
      function S(e, t) {
        var n, r, o;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && S(e[r], t[r]); );
            return -1 === r;
          }
          if (n === Set) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((o = r) && "object" === typeof o && !(o = P(t, o))) return !1;
              if (!t.has(o)) return !1;
            }
            return !0;
          }
          if (n === Map) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((o = r[0]) && "object" === typeof o && !(o = P(t, o)))
                return !1;
              if (!S(r[1], t.get(o))) return !1;
            }
            return !0;
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (n === DataView) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e.getInt8(r) === t.getInt8(r); );
            return -1 === r;
          }
          if (ArrayBuffer.isView(e)) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e[r] === t[r]; );
            return -1 === r;
          }
          if (!n || "object" === typeof e) {
            for (n in ((r = 0), e)) {
              if (R.call(e, n) && ++r && !R.call(t, n)) return !1;
              if (!(n in t) || !S(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
          }
        }
        return e !== e && t !== t;
      }
      const D = function (e) {
        const t = (function () {
          const e = (0, c.useRef)(!0),
            t = (0, c.useRef)(() => e.current);
          return (
            (0, c.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            t.current
          );
        })();
        return [
          e[0],
          (0, c.useCallback)(
            (n) => {
              if (t()) return e[1](n);
            },
            [t, e[1]]
          ),
        ];
      };
      function T(e) {
        return e.split("-")[0];
      }
      function N(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function L(e) {
        return e instanceof N(e).Element || e instanceof Element;
      }
      function M(e) {
        return e instanceof N(e).HTMLElement || e instanceof HTMLElement;
      }
      function _(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof N(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var W = Math.max,
        B = Math.min,
        U = Math.round;
      function F() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function H() {
        return !/^((?!chrome|android).)*safari/i.test(F());
      }
      function I(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          M(e) &&
          ((o = (e.offsetWidth > 0 && U(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && U(r.height) / e.offsetHeight) || 1));
        var s = (L(e) ? N(e) : window).visualViewport,
          a = !H() && n,
          c = (r.left + (a && s ? s.offsetLeft : 0)) / o,
          u = (r.top + (a && s ? s.offsetTop : 0)) / i,
          l = r.width / o,
          f = r.height / i;
        return {
          width: l,
          height: f,
          top: u,
          right: c + l,
          bottom: u + f,
          left: c,
          x: c,
          y: u,
        };
      }
      function V(e) {
        var t = I(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function q(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && _(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function z(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function X(e) {
        return N(e).getComputedStyle(e);
      }
      function G(e) {
        return ["table", "td", "th"].indexOf(z(e)) >= 0;
      }
      function K(e) {
        return ((L(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Y(e) {
        return "html" === z(e)
          ? e
          : e.assignedSlot || e.parentNode || (_(e) ? e.host : null) || K(e);
      }
      function Z(e) {
        return M(e) && "fixed" !== X(e).position ? e.offsetParent : null;
      }
      function $(e) {
        for (var t = N(e), n = Z(e); n && G(n) && "static" === X(n).position; )
          n = Z(n);
        return n &&
          ("html" === z(n) || ("body" === z(n) && "static" === X(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(F());
                if (/Trident/i.test(F()) && M(e) && "fixed" === X(e).position)
                  return null;
                var n = Y(e);
                for (
                  _(n) && (n = n.host);
                  M(n) && ["html", "body"].indexOf(z(n)) < 0;

                ) {
                  var r = X(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function J(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Q(e, t, n) {
        return W(e, B(t, n));
      }
      function ee(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function te(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var ne = "top",
        re = "bottom",
        oe = "right",
        ie = "left",
        se = "auto",
        ae = [ne, re, oe, ie],
        ce = "start",
        ue = "end",
        le = "viewport",
        fe = "popper",
        pe = ae.reduce(function (e, t) {
          return e.concat([t + "-" + ce, t + "-" + ue]);
        }, []),
        de = [].concat(ae, [se]).reduce(function (e, t) {
          return e.concat([t, t + "-" + ce, t + "-" + ue]);
        }, []),
        he = [
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
      const me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            s = n.modifiersData.popperOffsets,
            a = T(n.placement),
            c = J(a),
            u = [ie, oe].indexOf(a) >= 0 ? "height" : "width";
          if (i && s) {
            var l = (function (e, t) {
                return ee(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : te(e, ae)
                );
              })(o.padding, n),
              f = V(i),
              p = "y" === c ? ne : ie,
              d = "y" === c ? re : oe,
              h =
                n.rects.reference[u] +
                n.rects.reference[c] -
                s[c] -
                n.rects.popper[u],
              m = s[c] - n.rects.reference[c],
              v = $(i),
              g = v
                ? "y" === c
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = h / 2 - m / 2,
              b = l[p],
              x = g - f[u] - l[d],
              E = g / 2 - f[u] / 2 + y,
              w = Q(b, E, x),
              O = c;
            n.modifiersData[r] =
              (((t = {})[O] = w), (t.centerOffset = w - E), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            q(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function ve(e) {
        return e.split("-")[1];
      }
      var ge = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ye(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          s = e.offsets,
          a = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          l = e.roundOffsets,
          f = e.isFixed,
          p = s.x,
          d = void 0 === p ? 0 : p,
          h = s.y,
          m = void 0 === h ? 0 : h,
          v = "function" === typeof l ? l({ x: d, y: m }) : { x: d, y: m };
        (d = v.x), (m = v.y);
        var g = s.hasOwnProperty("x"),
          y = s.hasOwnProperty("y"),
          b = ie,
          x = ne,
          E = window;
        if (u) {
          var w = $(n),
            O = "clientHeight",
            A = "clientWidth";
          if (
            (w === N(n) &&
              "static" !== X((w = K(n))).position &&
              "absolute" === a &&
              ((O = "scrollHeight"), (A = "scrollWidth")),
            o === ne || ((o === ie || o === oe) && i === ue))
          )
            (x = re),
              (m -=
                (f && w === E && E.visualViewport
                  ? E.visualViewport.height
                  : w[O]) - r.height),
              (m *= c ? 1 : -1);
          if (o === ie || ((o === ne || o === re) && i === ue))
            (b = oe),
              (d -=
                (f && w === E && E.visualViewport
                  ? E.visualViewport.width
                  : w[A]) - r.width),
              (d *= c ? 1 : -1);
        }
        var C,
          k = Object.assign({ position: a }, u && ge),
          j =
            !0 === l
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: U(n * o) / o || 0, y: U(r * o) / o || 0 };
                })({ x: d, y: m }, N(n))
              : { x: d, y: m };
        return (
          (d = j.x),
          (m = j.y),
          c
            ? Object.assign(
                {},
                k,
                (((C = {})[x] = y ? "0" : ""),
                (C[b] = g ? "0" : ""),
                (C.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + d + "px, " + m + "px)"
                    : "translate3d(" + d + "px, " + m + "px, 0)"),
                C)
              )
            : Object.assign(
                {},
                k,
                (((t = {})[x] = y ? m + "px" : ""),
                (t[b] = g ? d + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            s = void 0 === i || i,
            a = n.roundOffsets,
            c = void 0 === a || a,
            u = {
              placement: T(t.placement),
              variation: ve(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              ye(
                Object.assign({}, u, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: c,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                ye(
                  Object.assign({}, u, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: c,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var xe = { passive: !0 };
      const Ee = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            s = r.resize,
            a = void 0 === s || s,
            c = N(t.elements.popper),
            u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              u.forEach(function (e) {
                e.addEventListener("scroll", n.update, xe);
              }),
            a && c.addEventListener("resize", n.update, xe),
            function () {
              i &&
                u.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, xe);
                }),
                a && c.removeEventListener("resize", n.update, xe);
            }
          );
        },
        data: {},
      };
      var we = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Oe(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return we[e];
        });
      }
      var Ae = { start: "end", end: "start" };
      function Ce(e) {
        return e.replace(/start|end/g, function (e) {
          return Ae[e];
        });
      }
      function ke(e) {
        var t = N(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function je(e) {
        return I(K(e)).left + ke(e).scrollLeft;
      }
      function Re(e) {
        var t = X(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Pe(e) {
        return ["html", "body", "#document"].indexOf(z(e)) >= 0
          ? e.ownerDocument.body
          : M(e) && Re(e)
          ? e
          : Pe(Y(e));
      }
      function Se(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Pe(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = N(r),
          s = o ? [i].concat(i.visualViewport || [], Re(r) ? r : []) : r,
          a = t.concat(s);
        return o ? a : a.concat(Se(Y(s)));
      }
      function De(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Te(e, t, n) {
        return t === le
          ? De(
              (function (e, t) {
                var n = N(e),
                  r = K(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  s = r.clientHeight,
                  a = 0,
                  c = 0;
                if (o) {
                  (i = o.width), (s = o.height);
                  var u = H();
                  (u || (!u && "fixed" === t)) &&
                    ((a = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: i, height: s, x: a + je(e), y: c };
              })(e, n)
            )
          : L(t)
          ? (function (e, t) {
              var n = I(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : De(
              (function (e) {
                var t,
                  n = K(e),
                  r = ke(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  i = W(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  s = W(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  a = -r.scrollLeft + je(e),
                  c = -r.scrollTop;
                return (
                  "rtl" === X(o || n).direction &&
                    (a += W(n.clientWidth, o ? o.clientWidth : 0) - i),
                  { width: i, height: s, x: a, y: c }
                );
              })(K(e))
            );
      }
      function Ne(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Se(Y(e)),
                    n =
                      ["absolute", "fixed"].indexOf(X(e).position) >= 0 && M(e)
                        ? $(e)
                        : e;
                  return L(n)
                    ? t.filter(function (e) {
                        return L(e) && q(e, n) && "body" !== z(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          s = i[0],
          a = i.reduce(function (t, n) {
            var o = Te(e, n, r);
            return (
              (t.top = W(o.top, t.top)),
              (t.right = B(o.right, t.right)),
              (t.bottom = B(o.bottom, t.bottom)),
              (t.left = W(o.left, t.left)),
              t
            );
          }, Te(e, s, r));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function Le(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? T(o) : null,
          s = o ? ve(o) : null,
          a = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case ne:
            t = { x: a, y: n.y - r.height };
            break;
          case re:
            t = { x: a, y: n.y + n.height };
            break;
          case oe:
            t = { x: n.x + n.width, y: c };
            break;
          case ie:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? J(i) : null;
        if (null != u) {
          var l = "y" === u ? "height" : "width";
          switch (s) {
            case ce:
              t[u] = t[u] - (n[l] / 2 - r[l] / 2);
              break;
            case ue:
              t[u] = t[u] + (n[l] / 2 - r[l] / 2);
          }
        }
        return t;
      }
      function Me(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          s = void 0 === i ? e.strategy : i,
          a = n.boundary,
          c = void 0 === a ? "clippingParents" : a,
          u = n.rootBoundary,
          l = void 0 === u ? le : u,
          f = n.elementContext,
          p = void 0 === f ? fe : f,
          d = n.altBoundary,
          h = void 0 !== d && d,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          g = ee("number" !== typeof v ? v : te(v, ae)),
          y = p === fe ? "reference" : fe,
          b = e.rects.popper,
          x = e.elements[h ? y : p],
          E = Ne(L(x) ? x : x.contextElement || K(e.elements.popper), c, l, s),
          w = I(e.elements.reference),
          O = Le({
            reference: w,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          A = De(Object.assign({}, b, O)),
          C = p === fe ? A : w,
          k = {
            top: E.top - C.top + g.top,
            bottom: C.bottom - E.bottom + g.bottom,
            left: E.left - C.left + g.left,
            right: C.right - E.right + g.right,
          },
          j = e.modifiersData.offset;
        if (p === fe && j) {
          var R = j[o];
          Object.keys(k).forEach(function (e) {
            var t = [oe, re].indexOf(e) >= 0 ? 1 : -1,
              n = [ne, re].indexOf(e) >= 0 ? "y" : "x";
            k[e] += R[n] * t;
          });
        }
        return k;
      }
      const _e = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                s = n.altAxis,
                a = void 0 === s || s,
                c = n.fallbackPlacements,
                u = n.padding,
                l = n.boundary,
                f = n.rootBoundary,
                p = n.altBoundary,
                d = n.flipVariations,
                h = void 0 === d || d,
                m = n.allowedAutoPlacements,
                v = t.options.placement,
                g = T(v),
                y =
                  c ||
                  (g === v || !h
                    ? [Oe(v)]
                    : (function (e) {
                        if (T(e) === se) return [];
                        var t = Oe(e);
                        return [Ce(e), t, Ce(t)];
                      })(v)),
                b = [v].concat(y).reduce(function (e, n) {
                  return e.concat(
                    T(n) === se
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            s = n.padding,
                            a = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            u = void 0 === c ? de : c,
                            l = ve(r),
                            f = l
                              ? a
                                ? pe
                                : pe.filter(function (e) {
                                    return ve(e) === l;
                                  })
                              : ae,
                            p = f.filter(function (e) {
                              return u.indexOf(e) >= 0;
                            });
                          0 === p.length && (p = f);
                          var d = p.reduce(function (t, n) {
                            return (
                              (t[n] = Me(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: s,
                              })[T(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(d).sort(function (e, t) {
                            return d[e] - d[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: l,
                          rootBoundary: f,
                          padding: u,
                          flipVariations: h,
                          allowedAutoPlacements: m,
                        })
                      : n
                  );
                }, []),
                x = t.rects.reference,
                E = t.rects.popper,
                w = new Map(),
                O = !0,
                A = b[0],
                C = 0;
              C < b.length;
              C++
            ) {
              var k = b[C],
                j = T(k),
                R = ve(k) === ce,
                P = [ne, re].indexOf(j) >= 0,
                S = P ? "width" : "height",
                D = Me(t, {
                  placement: k,
                  boundary: l,
                  rootBoundary: f,
                  altBoundary: p,
                  padding: u,
                }),
                N = P ? (R ? oe : ie) : R ? re : ne;
              x[S] > E[S] && (N = Oe(N));
              var L = Oe(N),
                M = [];
              if (
                (i && M.push(D[j] <= 0),
                a && M.push(D[N] <= 0, D[L] <= 0),
                M.every(function (e) {
                  return e;
                }))
              ) {
                (A = k), (O = !1);
                break;
              }
              w.set(k, M);
            }
            if (O)
              for (
                var _ = function (e) {
                    var t = b.find(function (t) {
                      var n = w.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (A = t), "break";
                  },
                  W = h ? 3 : 1;
                W > 0;
                W--
              ) {
                if ("break" === _(W)) break;
              }
            t.placement !== A &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = A),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function We(e, t, n) {
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
      function Be(e) {
        return [ne, oe, re, ie].some(function (t) {
          return e[t] >= 0;
        });
      }
      const Ue = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            s = de.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = T(e),
                    o = [ie, ne].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" === typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    s = i[0],
                    a = i[1];
                  return (
                    (s = s || 0),
                    (a = (a || 0) * o),
                    [ie, oe].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            a = s[t.placement],
            c = a.x,
            u = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += u)),
            (t.modifiersData[r] = s);
        },
      };
      const Fe = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            s = n.altAxis,
            a = void 0 !== s && s,
            c = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            f = n.padding,
            p = n.tether,
            d = void 0 === p || p,
            h = n.tetherOffset,
            m = void 0 === h ? 0 : h,
            v = Me(t, {
              boundary: c,
              rootBoundary: u,
              padding: f,
              altBoundary: l,
            }),
            g = T(t.placement),
            y = ve(t.placement),
            b = !y,
            x = J(g),
            E = "x" === x ? "y" : "x",
            w = t.modifiersData.popperOffsets,
            O = t.rects.reference,
            A = t.rects.popper,
            C =
              "function" === typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            k =
              "number" === typeof C
                ? { mainAxis: C, altAxis: C }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
            j = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            R = { x: 0, y: 0 };
          if (w) {
            if (i) {
              var P,
                S = "y" === x ? ne : ie,
                D = "y" === x ? re : oe,
                N = "y" === x ? "height" : "width",
                L = w[x],
                M = L + v[S],
                _ = L - v[D],
                U = d ? -A[N] / 2 : 0,
                F = y === ce ? O[N] : A[N],
                H = y === ce ? -A[N] : -O[N],
                I = t.elements.arrow,
                q = d && I ? V(I) : { width: 0, height: 0 },
                z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                X = z[S],
                G = z[D],
                K = Q(0, O[N], q[N]),
                Y = b
                  ? O[N] / 2 - U - K - X - k.mainAxis
                  : F - K - X - k.mainAxis,
                Z = b
                  ? -O[N] / 2 + U + K + G + k.mainAxis
                  : H + K + G + k.mainAxis,
                ee = t.elements.arrow && $(t.elements.arrow),
                te = ee
                  ? "y" === x
                    ? ee.clientTop || 0
                    : ee.clientLeft || 0
                  : 0,
                se = null != (P = null == j ? void 0 : j[x]) ? P : 0,
                ae = L + Z - se,
                ue = Q(d ? B(M, L + Y - se - te) : M, L, d ? W(_, ae) : _);
              (w[x] = ue), (R[x] = ue - L);
            }
            if (a) {
              var le,
                fe = "x" === x ? ne : ie,
                pe = "x" === x ? re : oe,
                de = w[E],
                he = "y" === E ? "height" : "width",
                me = de + v[fe],
                ge = de - v[pe],
                ye = -1 !== [ne, ie].indexOf(g),
                be = null != (le = null == j ? void 0 : j[E]) ? le : 0,
                xe = ye ? me : de - O[he] - A[he] - be + k.altAxis,
                Ee = ye ? de + O[he] + A[he] - be - k.altAxis : ge,
                we =
                  d && ye
                    ? (function (e, t, n) {
                        var r = Q(e, t, n);
                        return r > n ? n : r;
                      })(xe, de, Ee)
                    : Q(d ? xe : me, de, d ? Ee : ge);
              (w[E] = we), (R[E] = we - de);
            }
            t.modifiersData[r] = R;
          }
        },
        requiresIfExists: ["offset"],
      };
      function He(e, t, n) {
        void 0 === n && (n = !1);
        var r = M(t),
          o =
            M(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = U(t.width) / e.offsetWidth || 1,
                r = U(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          i = K(t),
          s = I(e, o, n),
          a = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== z(t) || Re(i)) &&
              (a = (function (e) {
                return e !== N(e) && M(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : ke(e);
                var t;
              })(t)),
            M(t)
              ? (((c = I(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
              : i && (c.x = je(i))),
          {
            x: s.left + a.scrollLeft - c.x,
            y: s.top + a.scrollTop - c.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function Ie(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      function Ve(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var qe = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ze() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function Xe(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? qe : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, qe, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            a = !1,
            c = {
              state: o,
              setOptions: function (n) {
                var a = "function" === typeof n ? n(o.options) : n;
                u(),
                  (o.options = Object.assign({}, i, o.options, a)),
                  (o.scrollParents = {
                    reference: L(e)
                      ? Se(e)
                      : e.contextElement
                      ? Se(e.contextElement)
                      : [],
                    popper: Se(t),
                  });
                var l = (function (e) {
                  var t = Ie(e);
                  return he.reduce(function (e, n) {
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
                  })([].concat(r, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = l.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" === typeof i) {
                      var a = i({ state: o, name: t, instance: c, options: r }),
                        u = function () {};
                      s.push(a || u);
                    }
                  }),
                  c.update()
                );
              },
              forceUpdate: function () {
                if (!a) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (ze(t, n)) {
                    (o.rects = {
                      reference: He(t, $(n), "fixed" === o.options.strategy),
                      popper: V(n),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[r],
                          s = i.fn,
                          u = i.options,
                          l = void 0 === u ? {} : u,
                          f = i.name;
                        "function" === typeof s &&
                          (o =
                            s({ state: o, options: l, name: f, instance: c }) ||
                            o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: Ve(function () {
                return new Promise(function (e) {
                  c.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                u(), (a = !0);
              },
            };
          if (!ze(e, t)) return c;
          function u() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            c.setOptions(n).then(function (e) {
              !a && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            c
          );
        };
      }
      const Ge = Xe({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  s = Me(t, { elementContext: "reference" }),
                  a = Me(t, { altBoundary: !0 }),
                  c = We(s, r),
                  u = We(a, o, i),
                  l = Be(c),
                  f = Be(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: l,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": l,
                      "data-popper-escaped": f,
                    }
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Le({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            be,
            Ee,
            Ue,
            _e,
            Fe,
            me,
          ],
        }),
        Ke = ["enabled", "placement", "strategy", "modifiers"];
      const Ye = {
          name: "applyStyles",
          enabled: !1,
          phase: "afterWrite",
          fn: () => {},
        },
        Ze = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: (e) => {
            let { state: t } = e;
            return () => {
              const { reference: e, popper: n } = t.elements;
              if ("removeAttribute" in e) {
                const t = (e.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter((e) => e.trim() !== n.id);
                t.length
                  ? e.setAttribute("aria-describedby", t.join(","))
                  : e.removeAttribute("aria-describedby");
              }
            };
          },
          fn: (e) => {
            let { state: t } = e;
            var n;
            const { popper: r, reference: o } = t.elements,
              i =
                null == (n = r.getAttribute("role")) ? void 0 : n.toLowerCase();
            if (r.id && "tooltip" === i && "setAttribute" in o) {
              const e = o.getAttribute("aria-describedby");
              if (e && -1 !== e.split(",").indexOf(r.id)) return;
              o.setAttribute(
                "aria-describedby",
                e ? "".concat(e, ",").concat(r.id) : r.id
              );
            }
          },
        },
        $e = [];
      const Je = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            {
              enabled: r = !0,
              placement: o = "bottom",
              strategy: i = "absolute",
              modifiers: s = $e,
            } = n,
            a = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(n, Ke);
          const u = (0, c.useRef)(s),
            l = (0, c.useRef)(),
            f = (0, c.useCallback)(() => {
              var e;
              null == (e = l.current) || e.update();
            }, []),
            p = (0, c.useCallback)(() => {
              var e;
              null == (e = l.current) || e.forceUpdate();
            }, []),
            [d, h] = D(
              (0, c.useState)({
                placement: o,
                update: f,
                forceUpdate: p,
                attributes: {},
                styles: { popper: {}, arrow: {} },
              })
            ),
            m = (0, c.useMemo)(
              () => ({
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: (e) => {
                  let { state: t } = e;
                  const n = {},
                    r = {};
                  Object.keys(t.elements).forEach((e) => {
                    (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                  }),
                    h({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: f,
                      forceUpdate: p,
                      placement: t.placement,
                    });
                },
              }),
              [f, p, h]
            ),
            v = (0, c.useMemo)(
              () => (S(u.current, s) || (u.current = s), u.current),
              [s]
            );
          return (
            (0, c.useEffect)(() => {
              l.current &&
                r &&
                l.current.setOptions({
                  placement: o,
                  strategy: i,
                  modifiers: [...v, m, Ye],
                });
            }, [i, o, m, r, v]),
            (0, c.useEffect)(() => {
              if (r && null != e && null != t)
                return (
                  (l.current = Ge(
                    e,
                    t,
                    Object.assign({}, a, {
                      placement: o,
                      strategy: i,
                      modifiers: [...v, Ze, m],
                    })
                  )),
                  () => {
                    null != l.current &&
                      (l.current.destroy(),
                      (l.current = void 0),
                      h((e) =>
                        Object.assign({}, e, {
                          attributes: {},
                          styles: { popper: {} },
                        })
                      ));
                  }
                );
            }, [r, e, t]),
            d
          );
        },
        Qe = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var et = !1,
        tt = !1;
      try {
        var nt = {
          get passive() {
            return (et = !0);
          },
          get once() {
            return (tt = et = !0);
          },
        };
        Qe &&
          (window.addEventListener("test", nt, nt),
          window.removeEventListener("test", nt, !0));
      } catch (Sn) {}
      const rt = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !tt) {
          var o = r.once,
            i = r.capture,
            s = n;
          !tt &&
            o &&
            ((s =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = s)),
            e.addEventListener(t, s, et ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const ot = function (e, t, n, r) {
        var o = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const it = function (e, t, n, r) {
        return (
          rt(e, t, n, r),
          function () {
            ot(e, t, n, r);
          }
        );
      };
      function st(e) {
        return (e && e.ownerDocument) || document;
      }
      const at = function (e) {
        const t = (0, c.useRef)(e);
        return (
          (0, c.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function ct(e) {
        const t = at(e);
        return (0, c.useCallback)(
          function () {
            return t.current && t.current(...arguments);
          },
          [t]
        );
      }
      const ut = () => {};
      const lt = (e) => e && ("current" in e ? e.current : e),
        ft = {
          click: "mousedown",
          mouseup: "mousedown",
          pointerup: "pointerdown",
        };
      const pt = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ut,
            { disabled: n, clickTrigger: r = "click" } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          const o = (0, c.useRef)(!1),
            s = (0, c.useRef)(!1),
            a = (0, c.useCallback)(
              (t) => {
                const n = lt(e);
                var r;
                h()(
                  !!n,
                  "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
                ),
                  (o.current =
                    !n ||
                    !!(
                      (r = t).metaKey ||
                      r.altKey ||
                      r.ctrlKey ||
                      r.shiftKey
                    ) ||
                    !(function (e) {
                      return 0 === e.button;
                    })(t) ||
                    !!i(n, t.target) ||
                    s.current),
                  (s.current = !1);
              },
              [e]
            ),
            u = ct((t) => {
              const n = lt(e);
              n && i(n, t.target) ? (s.current = !0) : (s.current = !1);
            }),
            l = ct((e) => {
              o.current || t(e);
            });
          (0, c.useEffect)(() => {
            var t, o;
            if (n || null == e) return;
            const i = st(lt(e)),
              s = i.defaultView || window;
            let c =
                null != (t = s.event)
                  ? t
                  : null == (o = s.parent)
                  ? void 0
                  : o.event,
              f = null;
            ft[r] && (f = it(i, ft[r], u, !0));
            const p = it(i, r, a, !0),
              d = it(i, r, (e) => {
                e !== c ? l(e) : (c = void 0);
              });
            let h = [];
            return (
              "ontouchstart" in i.documentElement &&
                (h = [].slice
                  .call(i.body.children)
                  .map((e) => it(e, "mousemove", ut))),
              () => {
                null == f || f(), p(), d(), h.forEach((e) => e());
              }
            );
          }, [e, n, r, a, u, l]);
        },
        dt = () => {};
      const ht = function (e, t) {
          let { disabled: n, clickTrigger: r } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const o = t || dt;
          pt(e, o, { disabled: n, clickTrigger: r });
          const i = ct((e) => {
            (function (e) {
              return "Escape" === e.code || 27 === e.keyCode;
            })(e) && o(e);
          });
          (0, c.useEffect)(() => {
            if (n || null == e) return;
            const t = st(lt(e));
            let r = (t.defaultView || window).event;
            const o = it(t, "keyup", (e) => {
              e !== r ? i(e) : (r = void 0);
            });
            return () => {
              o();
            };
          }, [e, n, i]);
        },
        mt = (0, c.createContext)(Qe ? window : void 0);
      mt.Provider;
      const vt = (e, t) =>
        Qe
          ? null == e
            ? (t || st()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      function gt(e, t) {
        const n = (0, c.useContext)(mt),
          [r, o] = (0, c.useState)(() =>
            vt(e, null == n ? void 0 : n.document)
          );
        if (!r) {
          const t = vt(e);
          t && o(t);
        }
        return (
          (0, c.useEffect)(() => {
            t && r && t(r);
          }, [t, r]),
          (0, c.useEffect)(() => {
            const t = vt(e);
            t !== r && o(t);
          }, [e, r]),
          r
        );
      }
      function yt() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Array.isArray(e)
          ? e
          : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
      }
      function bt(e) {
        let {
          enabled: t,
          enableEvents: n,
          placement: r,
          flip: o,
          offset: i,
          fixed: s,
          containerPadding: a,
          arrowElement: c,
          popperConfig: u = {},
        } = e;
        var l, f, p, d, h;
        const m = (function (e) {
          const t = {};
          return Array.isArray(e)
            ? (null == e ||
                e.forEach((e) => {
                  t[e.name] = e;
                }),
              t)
            : e || t;
        })(u.modifiers);
        return Object.assign({}, u, {
          placement: r,
          enabled: t,
          strategy: s ? "fixed" : u.strategy,
          modifiers: yt(
            Object.assign({}, m, {
              eventListeners: {
                enabled: n,
                options: null == (l = m.eventListeners) ? void 0 : l.options,
              },
              preventOverflow: Object.assign({}, m.preventOverflow, {
                options: a
                  ? Object.assign(
                      { padding: a },
                      null == (f = m.preventOverflow) ? void 0 : f.options
                    )
                  : null == (p = m.preventOverflow)
                  ? void 0
                  : p.options,
              }),
              offset: {
                options: Object.assign(
                  { offset: i },
                  null == (d = m.offset) ? void 0 : d.options
                ),
              },
              arrow: Object.assign({}, m.arrow, {
                enabled: !!c,
                options: Object.assign(
                  {},
                  null == (h = m.arrow) ? void 0 : h.options,
                  { element: c }
                ),
              }),
              flip: Object.assign({ enabled: !!o }, m.flip),
            })
          ),
        });
      }
      const xt =
          "undefined" !== typeof n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product,
        Et =
          "undefined" !== typeof document || xt
            ? c.useLayoutEffect
            : c.useEffect;
      const wt = function (e) {
          let {
            children: t,
            in: n,
            onExited: r,
            mountOnEnter: o,
            unmountOnExit: i,
          } = e;
          const s = (0, c.useRef)(null),
            a = (0, c.useRef)(n),
            u = ct(r);
          (0, c.useEffect)(() => {
            n ? (a.current = !0) : u(s.current);
          }, [n, u]);
          const l = j(s, E(t)),
            f = (0, c.cloneElement)(t, { ref: l });
          return n ? f : i || (!a.current && o) ? null : f;
        },
        Ot = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
        ];
      var At = n(579);
      const Ct = ["component"];
      const kt = c.forwardRef((e, t) => {
        let { component: n } = e;
        const r = (function (e) {
          let {
              onEnter: t,
              onEntering: n,
              onEntered: r,
              onExit: o,
              onExiting: i,
              onExited: s,
              addEndListener: a,
              children: u,
            } = e,
            l = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, Ot);
          const f = (0, c.useRef)(null),
            p = j(f, E(u)),
            d = (e) => (t) => {
              e && f.current && e(f.current, t);
            },
            h = (0, c.useCallback)(d(t), [t]),
            m = (0, c.useCallback)(d(n), [n]),
            v = (0, c.useCallback)(d(r), [r]),
            g = (0, c.useCallback)(d(o), [o]),
            y = (0, c.useCallback)(d(i), [i]),
            b = (0, c.useCallback)(d(s), [s]),
            x = (0, c.useCallback)(d(a), [a]);
          return Object.assign(
            {},
            l,
            { nodeRef: f },
            t && { onEnter: h },
            n && { onEntering: m },
            r && { onEntered: v },
            o && { onExit: g },
            i && { onExiting: y },
            s && { onExited: b },
            a && { addEndListener: x },
            {
              children:
                "function" === typeof u
                  ? (e, t) => u(e, Object.assign({}, t, { ref: p }))
                  : (0, c.cloneElement)(u, { ref: p }),
            }
          );
        })(
          (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Ct)
        );
        return (0, At.jsx)(n, Object.assign({ ref: t }, r));
      });
      function jt(e) {
        let {
          children: t,
          in: n,
          onExited: r,
          onEntered: o,
          transition: i,
        } = e;
        const [s, a] = (0, c.useState)(!n);
        n && s && a(!1);
        const u = (function (e) {
            let { in: t, onTransition: n } = e;
            const r = (0, c.useRef)(null),
              o = (0, c.useRef)(!0),
              i = ct(n);
            return (
              Et(() => {
                if (!r.current) return;
                let e = !1;
                return (
                  i({
                    in: t,
                    element: r.current,
                    initial: o.current,
                    isStale: () => e,
                  }),
                  () => {
                    e = !0;
                  }
                );
              }, [t, i]),
              Et(
                () => (
                  (o.current = !1),
                  () => {
                    o.current = !0;
                  }
                ),
                []
              ),
              r
            );
          })({
            in: !!n,
            onTransition: (e) => {
              Promise.resolve(i(e)).then(
                () => {
                  e.isStale() ||
                    (e.in
                      ? null == o || o(e.element, e.initial)
                      : (a(!0), null == r || r(e.element)));
                },
                (t) => {
                  throw (e.in || a(!0), t);
                }
              );
            },
          }),
          l = j(u, E(t));
        return s && !n ? null : (0, c.cloneElement)(t, { ref: l });
      }
      const Rt = c.forwardRef((e, t) => {
        const {
            flip: n,
            offset: r,
            placement: o,
            containerPadding: i,
            popperConfig: s = {},
            transition: a,
            runTransition: u,
          } = e,
          [l, f] = C(),
          [p, d] = C(),
          h = j(f, t),
          m = gt(e.container),
          v = gt(e.target),
          [g, y] = (0, c.useState)(!e.show),
          b = Je(
            v,
            l,
            bt({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: i || 5,
              flip: n,
              offset: r,
              arrowElement: p,
              popperConfig: s,
            })
          );
        e.show && g && y(!1);
        const x = e.show || !g;
        if (
          (ht(l, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !x)
        )
          return null;
        const {
          onExit: E,
          onExiting: w,
          onEnter: O,
          onEntering: k,
          onEntered: R,
        } = e;
        let P = e.children(
          Object.assign({}, b.attributes.popper, {
            style: b.styles.popper,
            ref: h,
          }),
          {
            popper: b,
            placement: o,
            show: !!e.show,
            arrowProps: Object.assign({}, b.attributes.arrow, {
              style: b.styles.arrow,
              ref: d,
            }),
          }
        );
        return (
          (P = (function (e, t, n) {
            return e
              ? (0, At.jsx)(kt, Object.assign({}, n, { component: e }))
              : t
              ? (0, At.jsx)(jt, Object.assign({}, n, { transition: t }))
              : (0, At.jsx)(wt, Object.assign({}, n));
          })(a, u, {
            in: !!e.show,
            appear: !0,
            mountOnEnter: !0,
            unmountOnExit: !0,
            children: P,
            onExit: E,
            onExiting: w,
            onExited: function () {
              y(!0), e.onExited && e.onExited(...arguments);
            },
            onEnter: O,
            onEntering: k,
            onEntered: R,
          })),
          m ? A.createPortal(P, m) : null
        );
      });
      Rt.displayName = "Overlay";
      const Pt = Rt;
      const St = function (e) {
        const t = (0, c.useRef)(e);
        return (
          (0, c.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      const Dt =
          "undefined" !== typeof n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product,
        Tt =
          "undefined" !== typeof document || Dt
            ? c.useLayoutEffect
            : c.useEffect;
      function Nt(e, t) {
        return e.classList
          ? !!t && e.classList.contains(t)
          : -1 !==
              (" " + (e.className.baseVal || e.className) + " ").indexOf(
                " " + t + " "
              );
      }
      var Lt = n(7852);
      const Mt = ["className", "bsPrefix", "as"],
        _t = c.forwardRef((e, t) => {
          let { className: n, bsPrefix: i, as: s = "div" } = e,
            a = (0, o.A)(e, Mt);
          return (
            (i = (0, Lt.oU)(i, "popover-header")),
            (0, At.jsx)(s, (0, r.A)({ ref: t, className: O()(n, i) }, a))
          );
        });
      _t.displayName = "PopoverHeader";
      const Wt = _t,
        Bt = ["className", "bsPrefix", "as"],
        Ut = c.forwardRef((e, t) => {
          let { className: n, bsPrefix: i, as: s = "div" } = e,
            a = (0, o.A)(e, Bt);
          return (
            (i = (0, Lt.oU)(i, "popover-body")),
            (0, At.jsx)(s, (0, r.A)({ ref: t, className: O()(n, i) }, a))
          );
        });
      Ut.displayName = "PopoverBody";
      const Ft = Ut;
      var Ht = n(6213),
        It = n(6330);
      const Vt = [
          "bsPrefix",
          "placement",
          "className",
          "style",
          "children",
          "body",
          "arrowProps",
          "hasDoneInitialMeasure",
          "popper",
          "show",
        ],
        qt = c.forwardRef((e, t) => {
          let {
              bsPrefix: n,
              placement: i = "right",
              className: s,
              style: a,
              children: c,
              body: u,
              arrowProps: l,
              hasDoneInitialMeasure: f,
              popper: p,
              show: d,
            } = e,
            h = (0, o.A)(e, Vt);
          const m = (0, Lt.oU)(n, "popover"),
            v = (0, Lt.Wz)(),
            [g] = (null == i ? void 0 : i.split("-")) || [],
            y = (0, Ht.G)(g, v);
          let b = a;
          return (
            d &&
              !f &&
              (b = (0, r.A)(
                (0, r.A)({}, a),
                (0, It.A)(null == p ? void 0 : p.strategy)
              )),
            (0, At.jsxs)(
              "div",
              (0, r.A)(
                (0, r.A)(
                  {
                    ref: t,
                    role: "tooltip",
                    style: b,
                    "x-placement": g,
                    className: O()(s, m, g && "bs-popover-".concat(y)),
                  },
                  h
                ),
                {},
                {
                  children: [
                    (0, At.jsx)(
                      "div",
                      (0, r.A)({ className: "popover-arrow" }, l)
                    ),
                    u ? (0, At.jsx)(Ft, { children: c }) : c,
                  ],
                }
              )
            )
          );
        });
      qt.displayName = "Popover";
      const zt = Object.assign(qt, {
        Header: Wt,
        Body: Ft,
        POPPER_OFFSET: [0, 8],
      });
      var Xt = n(615);
      var Gt = n(8587),
        Kt = n(5540);
      const Yt = !1,
        Zt = c.createContext(null);
      var $t = "unmounted",
        Jt = "exited",
        Qt = "entering",
        en = "entered",
        tn = "exiting",
        nn = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? i
                  ? ((o = Jt), (r.appearStatus = Qt))
                  : (o = en)
                : (o = t.unmountOnExit || t.mountOnEnter ? $t : Jt),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          (0, Kt.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === $t ? { status: Jt } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== Qt && n !== en && (t = Qt)
                  : (n !== Qt && n !== en) || (t = tn);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === Qt)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : A.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === Jt &&
                  this.setState({ status: $t });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [A.findDOMNode(this), r],
                i = o[0],
                s = o[1],
                a = this.getTimeouts(),
                c = r ? a.appear : a.enter;
              (!e && !n) || Yt
                ? this.safeSetState({ status: en }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, s),
                  this.safeSetState({ status: Qt }, function () {
                    t.props.onEntering(i, s),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: en }, function () {
                          t.props.onEntered(i, s);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : A.findDOMNode(this);
              t && !Yt
                ? (this.props.onExit(r),
                  this.safeSetState({ status: tn }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: Jt }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: Jt }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : A.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = o[0],
                    s = o[1];
                  this.props.addEndListener(i, s);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === $t) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, Gt.A)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return c.createElement(
                Zt.Provider,
                { value: null },
                "function" === typeof n
                  ? n(e, r)
                  : c.cloneElement(c.Children.only(n), r)
              );
            }),
            t
          );
        })(c.Component);
      function rn() {}
      (nn.contextType = Zt),
        (nn.propTypes = {}),
        (nn.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: rn,
          onEntering: rn,
          onEntered: rn,
          onExit: rn,
          onExiting: rn,
          onExited: rn,
        }),
        (nn.UNMOUNTED = $t),
        (nn.EXITED = Jt),
        (nn.ENTERING = Qt),
        (nn.ENTERED = en),
        (nn.EXITING = tn);
      const on = nn;
      function sn(e, t) {
        return (function (e) {
          var t = st(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var an = /([A-Z])/g;
      var cn = /^ms-/;
      function un(e) {
        return (function (e) {
          return e.replace(an, "-$1").toLowerCase();
        })(e).replace(cn, "-ms-");
      }
      var ln = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const fn = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(un(t)) || sn(e).getPropertyValue(un(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !ln.test(e));
              })(o)
              ? (n += un(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(un(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function pn(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          o = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var o = document.createEvent("HTMLEvents");
                  o.initEvent(t, n, r), e.dispatchEvent(o);
                }
              })(e, "transitionend", !0);
          }, t + n),
          i = it(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(o), i();
        };
      }
      function dn(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = fn(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var o = pn(e, n, r),
          i = it(e, "transitionend", t);
        return function () {
          o(), i();
        };
      }
      function hn(e, t) {
        const n = fn(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function mn(e, t) {
        const n = hn(e, "transitionDuration"),
          r = hn(e, "transitionDelay"),
          o = dn(
            e,
            (n) => {
              n.target === e && (o(), t(n));
            },
            n + r
          );
      }
      function vn(e) {
        return e && "setState" in e ? A.findDOMNode(e) : null != e ? e : null;
      }
      const gn = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        yn = c.forwardRef((e, t) => {
          let {
              onEnter: n,
              onEntering: i,
              onEntered: s,
              onExit: a,
              onExiting: u,
              onExited: l,
              addEndListener: f,
              children: p,
              childRef: d,
            } = e,
            h = (0, o.A)(e, gn);
          const m = (0, c.useRef)(null),
            v = x(m, d),
            g = (e) => {
              v(vn(e));
            },
            y = (e) => (t) => {
              e && m.current && e(m.current, t);
            },
            b = (0, c.useCallback)(y(n), [n]),
            E = (0, c.useCallback)(y(i), [i]),
            w = (0, c.useCallback)(y(s), [s]),
            O = (0, c.useCallback)(y(a), [a]),
            A = (0, c.useCallback)(y(u), [u]),
            C = (0, c.useCallback)(y(l), [l]),
            k = (0, c.useCallback)(y(f), [f]);
          return (0, At.jsx)(
            on,
            (0, r.A)(
              (0, r.A)({ ref: t }, h),
              {},
              {
                onEnter: b,
                onEntered: w,
                onEntering: E,
                onExit: O,
                onExited: C,
                onExiting: A,
                addEndListener: k,
                nodeRef: m,
                children:
                  "function" === typeof p
                    ? (e, t) => p(e, (0, r.A)((0, r.A)({}, t), {}, { ref: g }))
                    : c.cloneElement(p, { ref: g }),
              }
            )
          );
        });
      yn.displayName = "TransitionWrapper";
      const bn = yn,
        xn = ["className", "children", "transitionClasses", "onEnter"],
        En = { [Qt]: "show", [en]: "show" },
        wn = c.forwardRef((e, t) => {
          let {
              className: n,
              children: i,
              transitionClasses: s = {},
              onEnter: a,
            } = e,
            u = (0, o.A)(e, xn);
          const l = (0, r.A)(
              {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
              },
              u
            ),
            f = (0, c.useCallback)(
              (e, t) => {
                !(function (e) {
                  e.offsetHeight;
                })(e),
                  null == a || a(e, t);
              },
              [a]
            );
          return (0, At.jsx)(
            bn,
            (0, r.A)(
              (0, r.A)({ ref: t, addEndListener: mn }, l),
              {},
              {
                onEnter: f,
                childRef: E(i),
                children: (e, t) =>
                  c.cloneElement(
                    i,
                    (0, r.A)(
                      (0, r.A)({}, t),
                      {},
                      {
                        className: O()(
                          "fade",
                          n,
                          i.props.className,
                          En[e],
                          s[e]
                        ),
                      }
                    )
                  ),
              }
            )
          );
        });
      wn.displayName = "Fade";
      const On = wn,
        An = [
          "children",
          "transition",
          "popperConfig",
          "rootClose",
          "placement",
          "show",
        ];
      const Cn = c.forwardRef((e, t) => {
        let {
            children: n,
            transition: i = On,
            popperConfig: s = {},
            rootClose: a = !1,
            placement: u = "top",
            show: l = !1,
          } = e,
          f = (0, o.A)(e, An);
        const p = (0, c.useRef)({}),
          [d, h] = (0, c.useState)(null),
          [m, v] = (function (e) {
            const t = (0, c.useRef)(null),
              n = (0, Lt.oU)(void 0, "popover"),
              r = (0, Lt.oU)(void 0, "tooltip"),
              o = (0, c.useMemo)(
                () => ({
                  name: "offset",
                  options: {
                    offset: () => {
                      if (e) return e;
                      if (t.current) {
                        if (Nt(t.current, n)) return zt.POPPER_OFFSET;
                        if (Nt(t.current, r)) return Xt.A.TOOLTIP_OFFSET;
                      }
                      return [0, 0];
                    },
                  },
                }),
                [e, n, r]
              );
            return [t, [o]];
          })(f.offset),
          g = x(t, m),
          y = !0 === i ? On : i || void 0,
          b = (function (e) {
            const t = St(e);
            return (0, c.useCallback)(
              function () {
                return t.current && t.current(...arguments);
              },
              [t]
            );
          })((e) => {
            h(e), null == s || null == s.onFirstUpdate || s.onFirstUpdate(e);
          });
        return (
          Tt(() => {
            d &&
              f.target &&
              (null == p.current.scheduleUpdate || p.current.scheduleUpdate());
          }, [d, f.target]),
          (0, c.useEffect)(() => {
            l || h(null);
          }, [l]),
          (0, At.jsx)(
            Pt,
            (0, r.A)(
              (0, r.A)({}, f),
              {},
              {
                ref: g,
                popperConfig: (0, r.A)(
                  (0, r.A)({}, s),
                  {},
                  { modifiers: v.concat(s.modifiers || []), onFirstUpdate: b }
                ),
                transition: y,
                rootClose: a,
                placement: u,
                show: l,
                children: (e, t) => {
                  let { arrowProps: o, popper: a, show: u } = t;
                  var l;
                  !(function (e, t) {
                    const { ref: n } = e,
                      { ref: r } = t;
                    (e.ref = n.__wrapped || (n.__wrapped = (e) => n(vn(e)))),
                      (t.ref = r.__wrapped || (r.__wrapped = (e) => r(vn(e))));
                  })(e, o);
                  const f = null == a ? void 0 : a.placement,
                    h = Object.assign(p.current, {
                      state: null == a ? void 0 : a.state,
                      scheduleUpdate: null == a ? void 0 : a.update,
                      placement: f,
                      outOfBoundaries:
                        (null == a ||
                        null == (l = a.state) ||
                        null == (l = l.modifiersData.hide)
                          ? void 0
                          : l.isReferenceHidden) || !1,
                      strategy: s.strategy,
                    }),
                    m = !!d;
                  return "function" === typeof n
                    ? n(
                        (0, r.A)(
                          (0, r.A)(
                            (0, r.A)({}, e),
                            {},
                            { placement: f, show: u },
                            !i && u && { className: "show" }
                          ),
                          {},
                          { popper: h, arrowProps: o, hasDoneInitialMeasure: m }
                        )
                      )
                    : c.cloneElement(
                        n,
                        (0, r.A)(
                          (0, r.A)({}, e),
                          {},
                          {
                            placement: f,
                            arrowProps: o,
                            popper: h,
                            hasDoneInitialMeasure: m,
                            className: O()(
                              n.props.className,
                              !i && u && "show"
                            ),
                            style: (0, r.A)(
                              (0, r.A)({}, n.props.style),
                              e.style
                            ),
                          }
                        )
                      );
                },
              }
            )
          )
        );
      });
      Cn.displayName = "Overlay";
      const kn = Cn,
        jn = [
          "trigger",
          "overlay",
          "children",
          "popperConfig",
          "show",
          "defaultShow",
          "onToggle",
          "delay",
          "placement",
          "flip",
        ];
      function Rn(e, t, n) {
        const [r] = t,
          o = r.currentTarget,
          s = r.relatedTarget || r.nativeEvent[n];
        (s && s === o) || i(o, s) || e(...t);
      }
      a().oneOf(["click", "hover", "focus"]);
      const Pn = (e) => {
        let {
            trigger: t = ["hover", "focus"],
            overlay: n,
            children: i,
            popperConfig: s = {},
            show: a,
            defaultShow: u = !1,
            onToggle: l,
            delay: f,
            placement: d,
            flip: h = d && -1 !== d.indexOf("auto"),
          } = e,
          v = (0, o.A)(e, jn);
        const g = (0, c.useRef)(null),
          y = x(g, E(i)),
          b = p(),
          w = (0, c.useRef)(""),
          [O, A] = m(a, u, l),
          C = (function (e) {
            return e && "object" === typeof e ? e : { show: e, hide: e };
          })(f),
          { onFocus: k, onBlur: j, onClick: R } =
            "function" !== typeof i ? c.Children.only(i).props : {},
          P = (0, c.useCallback)(() => {
            b.clear(),
              (w.current = "show"),
              C.show
                ? b.set(() => {
                    "show" === w.current && A(!0);
                  }, C.show)
                : A(!0);
          }, [C.show, A, b]),
          S = (0, c.useCallback)(() => {
            b.clear(),
              (w.current = "hide"),
              C.hide
                ? b.set(() => {
                    "hide" === w.current && A(!1);
                  }, C.hide)
                : A(!1);
          }, [C.hide, A, b]),
          D = (0, c.useCallback)(
            function () {
              P(), null == k || k(...arguments);
            },
            [P, k]
          ),
          T = (0, c.useCallback)(
            function () {
              S(), null == j || j(...arguments);
            },
            [S, j]
          ),
          N = (0, c.useCallback)(
            function () {
              A(!O), null == R || R(...arguments);
            },
            [R, A, O]
          ),
          L = (0, c.useCallback)(
            function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Rn(P, t, "fromElement");
            },
            [P]
          ),
          M = (0, c.useCallback)(
            function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Rn(S, t, "toElement");
            },
            [S]
          ),
          _ = null == t ? [] : [].concat(t),
          W = {
            ref: (e) => {
              y(vn(e));
            },
          };
        return (
          -1 !== _.indexOf("click") && (W.onClick = N),
          -1 !== _.indexOf("focus") && ((W.onFocus = D), (W.onBlur = T)),
          -1 !== _.indexOf("hover") &&
            ((W.onMouseOver = L), (W.onMouseOut = M)),
          (0, At.jsxs)(At.Fragment, {
            children: [
              "function" === typeof i ? i(W) : (0, c.cloneElement)(i, W),
              (0, At.jsx)(
                kn,
                (0, r.A)(
                  (0, r.A)({}, v),
                  {},
                  {
                    show: O,
                    onHide: S,
                    flip: h,
                    placement: d,
                    popperConfig: s,
                    target: g.current,
                    children: n,
                  }
                )
              ),
            ],
          })
        );
      };
    },
    615: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => h });
      var r = n(9379),
        o = n(45),
        i = n(8139),
        s = n.n(i),
        a = n(5043),
        c = n(7852),
        u = n(6213),
        l = n(6330),
        f = n(579);
      const p = [
          "bsPrefix",
          "placement",
          "className",
          "style",
          "children",
          "arrowProps",
          "hasDoneInitialMeasure",
          "popper",
          "show",
        ],
        d = a.forwardRef((e, t) => {
          let {
              bsPrefix: n,
              placement: i = "right",
              className: a,
              style: d,
              children: h,
              arrowProps: m,
              hasDoneInitialMeasure: v,
              popper: g,
              show: y,
            } = e,
            b = (0, o.A)(e, p);
          n = (0, c.oU)(n, "tooltip");
          const x = (0, c.Wz)(),
            [E] = (null == i ? void 0 : i.split("-")) || [],
            w = (0, u.G)(E, x);
          let O = d;
          return (
            y &&
              !v &&
              (O = (0, r.A)(
                (0, r.A)({}, d),
                (0, l.A)(null == g ? void 0 : g.strategy)
              )),
            (0, f.jsxs)(
              "div",
              (0, r.A)(
                (0, r.A)(
                  {
                    ref: t,
                    style: O,
                    role: "tooltip",
                    "x-placement": E,
                    className: s()(a, n, "bs-tooltip-".concat(w)),
                  },
                  b
                ),
                {},
                {
                  children: [
                    (0, f.jsx)(
                      "div",
                      (0, r.A)({ className: "tooltip-arrow" }, m)
                    ),
                    (0, f.jsx)("div", {
                      className: "".concat(n, "-inner"),
                      children: h,
                    }),
                  ],
                }
              )
            )
          );
        });
      d.displayName = "Tooltip";
      const h = Object.assign(d, { TOOLTIP_OFFSET: [0, 6] });
    },
    2740: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o, i, s, a) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, r, o, i, s, a],
              l = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return u[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    6213: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => o });
      var r = n(5043);
      r.Component;
      function o(e, t) {
        let n = e;
        return (
          "left" === e
            ? (n = t ? "end" : "start")
            : "right" === e && (n = t ? "start" : "end"),
          n
        );
      }
    },
    6330: (e, t, n) => {
      "use strict";
      function r() {
        return {
          position:
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "absolute",
          top: "0",
          left: "0",
          opacity: "0",
          pointerEvents: "none",
        };
      }
      n.d(t, { A: () => r });
    },
    6440: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    7852: (e, t, n) => {
      "use strict";
      n.d(t, { Wz: () => l, oU: () => u });
      var r = n(5043);
      n(579);
      const o = ["xxl", "xl", "lg", "md", "sm", "xs"],
        i = "xs",
        s = r.createContext({ prefixes: {}, breakpoints: o, minBreakpoint: i }),
        { Consumer: a, Provider: c } = s;
      function u(e, t) {
        const { prefixes: n } = (0, r.useContext)(s);
        return e || n[t] || t;
      }
      function l() {
        const { dir: e } = (0, r.useContext)(s);
        return "rtl" === e;
      }
    },
    8139: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = s(e, i(n)));
          }
          return e;
        }
        function i(e) {
          if ("string" === typeof e || "number" === typeof e) return e;
          if ("object" !== typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (
            e.toString !== Object.prototype.toString &&
            !e.toString.toString().includes("[native code]")
          )
            return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = s(t, n));
          return t;
        }
        function s(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
  },
]);
//# sourceMappingURL=559.b5dc08cb.chunk.js.map
