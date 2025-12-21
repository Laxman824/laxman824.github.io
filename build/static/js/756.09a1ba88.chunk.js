/*! For license information please see 756.09a1ba88.chunk.js.LICENSE.txt */
(self.webpackChunkLaxman_portfolio =
  self.webpackChunkLaxman_portfolio || []).push([
  [756],
  {
    45: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => r });
      var i = n(8587);
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (0, i.A)(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              -1 === e.indexOf(n) &&
                {}.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
    },
    411: (t, e, n) => {
      "use strict";
      n.d(e, { N1: () => m, Vd: () => y, nu: () => b, yP: () => v });
      var i = n(45),
        r = n(9379),
        o = n(5043),
        s = n(7304);
      const a = [
          "height",
          "width",
          "redraw",
          "datasetIdKey",
          "type",
          "data",
          "options",
          "plugins",
          "fallbackContent",
          "updateMode",
        ],
        l = "label";
      function c(t, e) {
        "function" === typeof t ? t(e) : t && (t.current = e);
      }
      function u(t, e) {
        t.labels = e;
      }
      function h(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l;
        const i = [];
        t.datasets = e.map((e) => {
          const o = t.datasets.find((t) => t[n] === e[n]);
          return o && e.data && !i.includes(o)
            ? (i.push(o), Object.assign(o, e), o)
            : (0, r.A)({}, e);
        });
      }
      function d(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        const n = { labels: [], datasets: [] };
        return u(n, t.labels), h(n, t.datasets, e), n;
      }
      function f(t, e) {
        let {
            height: n = 150,
            width: l = 300,
            redraw: f = !1,
            datasetIdKey: p,
            type: g,
            data: m,
            options: v,
            plugins: y = [],
            fallbackContent: b,
            updateMode: x,
          } = t,
          w = (0, i.A)(t, a);
        const _ = (0, o.useRef)(null),
          M = (0, o.useRef)(),
          S = () => {
            _.current &&
              ((M.current = new s.t1(_.current, {
                type: g,
                data: d(m, p),
                options: v && (0, r.A)({}, v),
                plugins: y,
              })),
              c(e, M.current));
          },
          A = () => {
            c(e, null), M.current && (M.current.destroy(), (M.current = null));
          };
        return (
          (0, o.useEffect)(() => {
            var t, e;
            !f &&
              M.current &&
              v &&
              ((t = M.current), (e = v), Object.assign(t.options, e));
          }, [f, v]),
          (0, o.useEffect)(() => {
            !f && M.current && u(M.current.config.data, m.labels);
          }, [f, m.labels]),
          (0, o.useEffect)(() => {
            !f &&
              M.current &&
              m.datasets &&
              h(M.current.config.data, m.datasets, p);
          }, [f, m.datasets]),
          (0, o.useEffect)(() => {
            M.current && (f ? (A(), setTimeout(S)) : M.current.update(x));
          }, [f, v, m.labels, m.datasets, x]),
          (0, o.useEffect)(() => {
            M.current && (A(), setTimeout(S));
          }, [g]),
          (0, o.useEffect)(() => (S(), () => A()), []),
          o.createElement(
            "canvas",
            Object.assign({ ref: _, role: "img", height: n, width: l }, w),
            b
          )
        );
      }
      const p = (0, o.forwardRef)(f);
      function g(t, e) {
        return (
          s.t1.register(e),
          (0, o.forwardRef)((e, n) =>
            o.createElement(p, Object.assign({}, e, { ref: n, type: t }))
          )
        );
      }
      const m = g("line", s.ZT),
        v = g("bar", s.A6),
        y = g("radar", s.h9),
        b = g("doughnut", s.ju);
    },
    1306: (t, e, n) => {
      "use strict";
      n.d(e, { M: () => r });
      var i = n(5043);
      function r(t) {
        var e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    1418: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => r });
      var i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const r = (function (t) {
        var e = {};
        return function (n) {
          return void 0 === e[n] && (e[n] = t(n)), e[n];
        };
      })(function (t) {
        return (
          i.test(t) ||
          (111 === t.charCodeAt(0) &&
            110 === t.charCodeAt(1) &&
            t.charCodeAt(2) < 91)
        );
      });
    },
    1605: (t, e, n) => {
      "use strict";
      n.d(e, { P: () => Eo });
      var i = n(6326),
        r = n(5043),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        s = {
          measureLayout: o([
            "layout",
            "layoutId",
            "drag",
            "_layoutResetTransform",
          ]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          layoutAnimation: o(["layout", "layoutId"]),
        };
      var a = (0, r.createContext)({ strict: !1 }),
        l = Object.keys(s),
        c = l.length;
      var u = (0, r.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        h = (0, r.createContext)({});
      var d = n(3532),
        f = n(1306);
      function p() {
        var t = (0, r.useContext)(d.t);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          i = t.register,
          o = y();
        (0, r.useEffect)(function () {
          return i(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      function g(t) {
        return null === t || t.isPresent;
      }
      var m = 0,
        v = function () {
          return m++;
        },
        y = function () {
          return (0, f.M)(v);
        },
        b = (0, r.createContext)(null),
        x = "undefined" !== typeof window,
        w = x ? r.useLayoutEffect : r.useEffect;
      function _(t, e, n, o) {
        var s = (0, r.useContext)(u),
          l = (0, r.useContext)(a),
          c = (0, r.useContext)(h).visualElement,
          f = (0, r.useContext)(d.t),
          p = (function (t) {
            var e = t.layoutId,
              n = (0, r.useContext)(b);
            return n && void 0 !== e ? n + "-" + e : e;
          })(n),
          m = (0, r.useRef)(void 0);
        o || (o = l.renderer),
          !m.current &&
            o &&
            (m.current = o(t, {
              visualState: e,
              parent: c,
              props: (0, i.Cl)((0, i.Cl)({}, n), { layoutId: p }),
              presenceId: null === f || void 0 === f ? void 0 : f.id,
              blockInitialAnimation:
                !1 === (null === f || void 0 === f ? void 0 : f.initial),
            }));
        var v = m.current;
        return (
          w(function () {
            v &&
              (v.setProps(
                (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, s), n), { layoutId: p })
              ),
              (v.isPresent = g(f)),
              (v.isPresenceRoot =
                !c ||
                c.presenceId !== (null === f || void 0 === f ? void 0 : f.id)),
              v.syncRender());
          }),
          (0, r.useEffect)(function () {
            var t;
            v &&
              (null === (t = v.animationState) ||
                void 0 === t ||
                t.animateChanges());
          }),
          w(function () {
            return function () {
              return null === v || void 0 === v ? void 0 : v.notifyUnmount();
            };
          }, []),
          v
        );
      }
      function M(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function S(t) {
        return Array.isArray(t);
      }
      function A(t) {
        return "string" === typeof t || S(t);
      }
      function k(t, e, n, i, r) {
        var o;
        return (
          void 0 === i && (i = {}),
          void 0 === r && (r = {}),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e
            ? e(null !== n && void 0 !== n ? n : t.custom, i, r)
            : e
        );
      }
      function P(t, e, n) {
        var i = t.getProps();
        return k(
          i,
          e,
          null !== n && void 0 !== n ? n : i.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function C(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          A(t.initial) ||
          A(t.animate) ||
          A(t.whileHover) ||
          A(t.whileDrag) ||
          A(t.whileTap) ||
          A(t.whileFocus) ||
          A(t.exit)
        );
      }
      function E(t) {
        return Boolean(C(t) || t.variants);
      }
      function T(t, e) {
        var n = (function (t, e) {
            if (C(t)) {
              var n = t.initial,
                i = t.animate;
              return {
                initial: !1 === n || A(n) ? n : void 0,
                animate: A(i) ? i : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, r.useContext)(h)),
          i = n.initial,
          o = n.animate;
        return (0, r.useMemo)(
          function () {
            return { initial: i, animate: o };
          },
          e ? [O(i), O(o)] : []
        );
      }
      function O(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function D(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.useRender,
          d = t.useVisualState,
          f = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t) {
                var n = t[e];
                null !== n && (s[e].Component = n);
              }
            })(e),
          (0, r.forwardRef)(function (t, e) {
            var p = (0, r.useContext)(u).isStatic,
              g = null,
              m = T(t, p),
              v = d(t, p);
            return (
              !p &&
                x &&
                ((m.visualElement = _(f, v, t, n)),
                (g = (function (t, e) {
                  var n = [];
                  if (((0, r.useContext)(a), !e)) return null;
                  for (var o = 0; o < c; o++) {
                    var u = l[o],
                      h = s[u],
                      d = h.isEnabled,
                      f = h.Component;
                    d(t) &&
                      f &&
                      n.push(
                        r.createElement(
                          f,
                          (0, i.Cl)({ key: u }, t, { visualElement: e })
                        )
                      );
                  }
                  return n;
                })(t, m.visualElement))),
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  h.Provider,
                  { value: m },
                  o(
                    f,
                    t,
                    (function (t, e, n) {
                      return (0, r.useCallback)(
                        function (i) {
                          var r;
                          i &&
                            (null === (r = t.mount) ||
                              void 0 === r ||
                              r.call(t, i)),
                            e && (i ? e.mount(i) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(i)
                                : M(n) && (n.current = i));
                        },
                        [e]
                      );
                    })(v, m.visualElement, e),
                    v,
                    p
                  )
                ),
                g
              )
            );
          })
        );
      }
      function R(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), D(t(e, n));
        }
        var n = new Map();
        return new Proxy(e, {
          get: function (t, i) {
            return n.has(i) || n.set(i, e(i)), n.get(i);
          },
        });
      }
      var L = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function F(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(L.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var V = {};
      var I = ["", "X", "Y", "Z"],
        j = ["transformPerspective", "x", "y", "z"];
      function z(t, e) {
        return j.indexOf(t) - j.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return I.forEach(function (e) {
          return j.push(t + e);
        });
      });
      var N = new Set(j);
      function B(t) {
        return N.has(t);
      }
      var W = new Set(["originX", "originY", "originZ"]);
      function H(t) {
        return W.has(t);
      }
      function U(t, e) {
        var n = e.layout,
          i = e.layoutId;
        return (
          B(t) || H(t) || ((n || void 0 !== i) && (!!V[t] || "opacity" === t))
        );
      }
      var Y = function (t) {
          return null !== t && "object" === typeof t && t.getVelocity;
        },
        q = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function X(t) {
        return t.startsWith("--");
      }
      var $ = function (t, e) {
          return e && "number" === typeof t ? e.transform(t) : t;
        },
        K = function (t, e) {
          return function (n) {
            return Math.max(Math.min(n, e), t);
          };
        },
        G = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t;
        },
        Z = /(-)?([\d]*\.?[\d])+/g,
        J = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Q = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function tt(t) {
        return "string" === typeof t;
      }
      var et = function (t) {
          return {
            test: function (e) {
              return tt(e) && e.endsWith(t) && 1 === e.split(" ").length;
            },
            parse: parseFloat,
            transform: function (e) {
              return "" + e + t;
            },
          };
        },
        nt = et("deg"),
        it = et("%"),
        rt = et("px"),
        ot = et("vh"),
        st = et("vw"),
        at = (0, i.Cl)((0, i.Cl)({}, it), {
          parse: function (t) {
            return it.parse(t) / 100;
          },
          transform: function (t) {
            return it.transform(100 * t);
          },
        }),
        lt = {
          test: function (t) {
            return "number" === typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          },
        },
        ct = (0, i.Cl)((0, i.Cl)({}, lt), { transform: K(0, 1) }),
        ut = (0, i.Cl)((0, i.Cl)({}, lt), { default: 1 }),
        ht = (0, i.Cl)((0, i.Cl)({}, lt), { transform: Math.round }),
        dt = {
          borderWidth: rt,
          borderTopWidth: rt,
          borderRightWidth: rt,
          borderBottomWidth: rt,
          borderLeftWidth: rt,
          borderRadius: rt,
          radius: rt,
          borderTopLeftRadius: rt,
          borderTopRightRadius: rt,
          borderBottomRightRadius: rt,
          borderBottomLeftRadius: rt,
          width: rt,
          maxWidth: rt,
          height: rt,
          maxHeight: rt,
          size: rt,
          top: rt,
          right: rt,
          bottom: rt,
          left: rt,
          padding: rt,
          paddingTop: rt,
          paddingRight: rt,
          paddingBottom: rt,
          paddingLeft: rt,
          margin: rt,
          marginTop: rt,
          marginRight: rt,
          marginBottom: rt,
          marginLeft: rt,
          rotate: nt,
          rotateX: nt,
          rotateY: nt,
          rotateZ: nt,
          scale: ut,
          scaleX: ut,
          scaleY: ut,
          scaleZ: ut,
          skew: nt,
          skewX: nt,
          skewY: nt,
          distance: rt,
          translateX: rt,
          translateY: rt,
          translateZ: rt,
          x: rt,
          y: rt,
          z: rt,
          perspective: rt,
          transformPerspective: rt,
          opacity: ct,
          originX: at,
          originY: at,
          originZ: rt,
          zIndex: ht,
          fillOpacity: ct,
          strokeOpacity: ct,
          numOctaves: ht,
        };
      function ft(t, e, n, i, r, o, s, a) {
        var l,
          c = t.style,
          u = t.vars,
          h = t.transform,
          d = t.transformKeys,
          f = t.transformOrigin;
        d.length = 0;
        var p = !1,
          g = !1,
          m = !0;
        for (var v in e) {
          var y = e[v];
          if (X(v)) u[v] = y;
          else {
            var b = dt[v],
              x = $(y, b);
            if (B(v)) {
              if (((p = !0), (h[v] = x), d.push(v), !m)) continue;
              y !== (null !== (l = b.default) && void 0 !== l ? l : 0) &&
                (m = !1);
            } else if (H(v)) (f[v] = x), (g = !0);
            else if (
              (null === n || void 0 === n ? void 0 : n.isHydrated) &&
              (null === i || void 0 === i ? void 0 : i.isHydrated) &&
              V[v]
            ) {
              var w = V[v].process(y, i, n),
                _ = V[v].applyTo;
              if (_) for (var M = _.length, S = 0; S < M; S++) c[_[S]] = w;
              else c[v] = w;
            } else c[v] = x;
          }
        }
        i && n && s && a
          ? ((c.transform = s(i.deltaFinal, i.treeScale, p ? h : void 0)),
            o && (c.transform = o(h, c.transform)),
            (c.transformOrigin = a(i)))
          : (p &&
              (c.transform = (function (t, e, n, i) {
                var r = t.transform,
                  o = t.transformKeys,
                  s = e.enableHardwareAcceleration,
                  a = void 0 === s || s,
                  l = e.allowTransformNone,
                  c = void 0 === l || l,
                  u = "";
                o.sort(z);
                for (var h = !1, d = o.length, f = 0; f < d; f++) {
                  var p = o[f];
                  (u += (q[p] || p) + "(" + r[p] + ") "), "z" === p && (h = !0);
                }
                return (
                  !h && a ? (u += "translateZ(0)") : (u = u.trim()),
                  i ? (u = i(r, n ? "" : u)) : c && n && (u = "none"),
                  u
                );
              })(t, r, m, o)),
            g &&
              (c.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? "50%" : e,
                  i = t.originY,
                  r = void 0 === i ? "50%" : i,
                  o = t.originZ;
                return n + " " + r + " " + (void 0 === o ? 0 : o);
              })(f)));
      }
      var pt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function gt(t, e, n) {
        for (var i in e) Y(e[i]) || U(i, n) || (t[i] = e[i]);
      }
      function mt(t, e, n) {
        var o = {};
        return (
          gt(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, r.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  ft(
                    t,
                    e,
                    void 0,
                    void 0,
                    { enableHardwareAcceleration: !n },
                    o
                  );
                  var r = t.vars,
                    s = t.style;
                  return (0, i.Cl)((0, i.Cl)({}, r), s);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function vt(t, e, n) {
        var i = {},
          r = mt(t, e, n);
        return (
          Boolean(t.drag) &&
            ((i.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (i.style = r),
          i
        );
      }
      var yt = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "_layoutResetTransform",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
      ]);
      function bt(t) {
        return yt.has(t);
      }
      var xt = function (t) {
        return !bt(t);
      };
      try {
        var wt = n(1418).A;
        xt = function (t) {
          return t.startsWith("on") ? !bt(t) : wt(t);
        };
      } catch (To) {}
      function _t(t, e, n) {
        return "string" === typeof t ? t : rt.transform(e + n * t);
      }
      var Mt = function (t, e) {
          return rt.transform(t * e);
        },
        St = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        At = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function kt(t, e, n, r, o, s, a, l) {
        var c = e.attrX,
          u = e.attrY,
          h = e.originX,
          d = e.originY,
          f = e.pathLength,
          p = e.pathSpacing,
          g = void 0 === p ? 1 : p,
          m = e.pathOffset,
          v = void 0 === m ? 0 : m;
        ft(
          t,
          (0, i.Tt)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r,
          o,
          s,
          a,
          l
        ),
          (t.attrs = t.style),
          (t.style = {});
        var y = t.attrs,
          b = t.style,
          x = t.dimensions,
          w = t.totalPathLength;
        y.transform && (x && (b.transform = y.transform), delete y.transform),
          x &&
            (void 0 !== h || void 0 !== d || b.transform) &&
            (b.transformOrigin = (function (t, e, n) {
              return _t(e, t.x, t.width) + " " + _t(n, t.y, t.height);
            })(x, void 0 !== h ? h : 0.5, void 0 !== d ? d : 0.5)),
          void 0 !== c && (y.x = c),
          void 0 !== u && (y.y = u),
          void 0 !== w &&
            void 0 !== f &&
            (function (t, e, n, i, r, o) {
              void 0 === i && (i = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0);
              var s = o ? St : At;
              t[s.offset] = Mt(-r, e);
              var a = Mt(n, e),
                l = Mt(i, e);
              t[s.array] = a + " " + l;
            })(y, w, f, g, v, !1);
      }
      var Pt = function () {
        return (0, i.Cl)(
          (0, i.Cl)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Ct(t, e) {
        var n = (0, r.useMemo)(
          function () {
            var n = Pt();
            return (
              kt(
                n,
                e,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              (0, i.Cl)((0, i.Cl)({}, n.attrs), {
                style: (0, i.Cl)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          gt(o, t.style, t), (n.style = (0, i.Cl)((0, i.Cl)({}, o), n.style));
        }
        return n;
      }
      function Et(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, s, a) {
          var l = s.latestValues,
            c = (F(e) ? Ct : vt)(n, l, a),
            u = (function (t, e, n) {
              var i = {};
              for (var r in t)
                (xt(r) || (!0 === n && bt(r)) || (!e && !bt(r))) &&
                  (i[r] = t[r]);
              return i;
            })(n, "string" === typeof e, t),
            h = (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, u), c), { ref: o });
          return (0, r.createElement)(e, h);
        };
      }
      var Tt = /([a-z])([A-Z])/g,
        Ot = function (t) {
          return t.replace(Tt, "$1-$2").toLowerCase();
        };
      function Dt(t, e) {
        var n = e.style,
          i = e.vars;
        for (var r in (Object.assign(t.style, n), i))
          t.style.setProperty(r, i[r]);
      }
      var Rt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
      ]);
      function Lt(t, e) {
        for (var n in (Dt(t, e), e.attrs))
          t.setAttribute(Rt.has(n) ? n : Ot(n), e.attrs[n]);
      }
      function Ft(t) {
        var e = t.style,
          n = {};
        for (var i in e) (Y(e[i]) || U(i, t)) && (n[i] = e[i]);
        return n;
      }
      function Vt(t) {
        var e = Ft(t);
        for (var n in t) {
          if (Y(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function It(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var jt = function (t) {
          return Array.isArray(t);
        },
        zt = function (t) {
          return jt(t) ? t[t.length - 1] || 0 : t;
        };
      function Nt(t) {
        var e,
          n = Y(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      function Bt(t, e, n, i) {
        var r = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          s = t.onMount,
          a = { latestValues: Ht(e, n, i, r), renderState: o() };
        return (
          s &&
            (a.mount = function (t) {
              return s(e, t, a);
            }),
          a
        );
      }
      var Wt = function (t) {
        return function (e, n) {
          var i = (0, r.useContext)(h),
            o = (0, r.useContext)(d.t);
          return n
            ? Bt(t, e, i, o)
            : (0, f.M)(function () {
                return Bt(t, e, i, o);
              });
        };
      };
      function Ht(t, e, n, r) {
        var o = {},
          s = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(t);
        for (var l in a) o[l] = Nt(a[l]);
        var c = t.initial,
          u = t.animate,
          h = C(t),
          d = E(t);
        e &&
          d &&
          !h &&
          !1 !== t.inherit &&
          ((null !== c && void 0 !== c) || (c = e.initial),
          (null !== u && void 0 !== u) || (u = e.animate));
        var f = s || !1 === c ? u : c;
        f &&
          "boolean" !== typeof f &&
          !It(f) &&
          (Array.isArray(f) ? f : [f]).forEach(function (e) {
            var n = k(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var s = (0, i.Tt)(n, ["transitionEnd", "transition"]);
              for (var a in s) o[a] = s[a];
              for (var a in r) o[a] = r[a];
            }
          });
        return o;
      }
      var Ut = {
        useVisualState: Wt({
          scrapeMotionValuesFromProps: Vt,
          createRenderState: Pt,
          onMount: function (t, e, n) {
            var i = n.renderState,
              r = n.latestValues;
            try {
              i.dimensions =
                "function" === typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch (o) {
              i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            "path" === e.tagName && (i.totalPathLength = e.getTotalLength()),
              kt(
                i,
                r,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              Lt(e, i);
          },
        }),
      };
      var Yt,
        qt = {
          useVisualState: Wt({
            scrapeMotionValuesFromProps: Ft,
            createRenderState: pt,
          }),
        };
      function Xt(t, e, n, i) {
        return (
          t.addEventListener(e, n, i),
          function () {
            return t.removeEventListener(e, n, i);
          }
        );
      }
      function $t(t, e, n, i) {
        (0, r.useEffect)(
          function () {
            var r = t.current;
            if (n && r) return Xt(r, e, n, i);
          },
          [t, e, n, i]
        );
      }
      function Kt(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Gt(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.Exit = "exit");
      })(Yt || (Yt = {}));
      var Zt = { pageX: 0, pageY: 0 };
      function Jt(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || Zt;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Qt(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function te(t, e) {
        return (
          void 0 === e && (e = "page"), { point: Gt(t) ? Jt(t, e) : Qt(t, e) }
        );
      }
      var ee = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            i = function (e) {
              return t(e, te(e));
            };
          return e
            ? ((n = i),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : i;
        },
        ne = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        ie = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function re(t) {
        return x && null === window.onpointerdown
          ? t
          : x && null === window.ontouchstart
          ? ie[t]
          : x && null === window.onmousedown
          ? ne[t]
          : t;
      }
      function oe(t, e, n, i) {
        return Xt(t, re(e), ee(n, "pointerdown" === e), i);
      }
      function se(t, e, n, i) {
        return $t(t, re(e), n && ee(n, "pointerdown" === e), i);
      }
      function ae(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var le = ae("dragHorizontal"),
        ce = ae("dragVertical");
      function ue(t) {
        var e = !1;
        if ("y" === t) e = ce();
        else if ("x" === t) e = le();
        else {
          var n = le(),
            i = ce();
          n && i
            ? (e = function () {
                n(), i();
              })
            : (n && n(), i && i());
        }
        return e;
      }
      function he() {
        var t = ue(!0);
        return !t || (t(), !1);
      }
      function de(t, e, n) {
        return function (i, r) {
          var o;
          Kt(i) &&
            !he() &&
            (null === n || void 0 === n || n(i, r),
            null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(Yt.Hover, e));
        };
      }
      var fe = function (t, e) {
          return !!e && (t === e || fe(t, e.parentElement));
        },
        pe = n(4768),
        ge = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        me = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t.reduce(ge);
        };
      var ve = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ye = {
          tap: ve(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              i = t.onTapCancel,
              o = t.whileTap,
              s = t.visualElement,
              a = e || n || i || o,
              l = (0, r.useRef)(!1),
              c = (0, r.useRef)(null);
            function u() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function h() {
              var t;
              return (
                u(),
                (l.current = !1),
                null === (t = s.animationState) ||
                  void 0 === t ||
                  t.setActive(Yt.Tap, !1),
                !he()
              );
            }
            function d(t, n) {
              h() &&
                (fe(s.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === i || void 0 === i || i(t, n));
            }
            function f(t, e) {
              h() && (null === i || void 0 === i || i(t, e));
            }
            se(
              s,
              "pointerdown",
              a
                ? function (t, e) {
                    var i;
                    u(),
                      l.current ||
                        ((l.current = !0),
                        (c.current = me(
                          oe(window, "pointerup", d),
                          oe(window, "pointercancel", f)
                        )),
                        null === n || void 0 === n || n(t, e),
                        null === (i = s.animationState) ||
                          void 0 === i ||
                          i.setActive(Yt.Tap, !0));
                  }
                : void 0
            ),
              (0, pe.l)(u);
          }),
          focus: ve(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            $t(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(Yt.Focus, !0);
                  }
                : void 0
            ),
              $t(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(Yt.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: ve(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              i = t.whileHover,
              r = t.visualElement;
            se(r, "pointerenter", e || i ? de(r, !0, e) : void 0),
              se(r, "pointerleave", n || i ? de(r, !1, n) : void 0);
          }),
        };
      function be(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var xe = function () {};
      var we = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        },
        _e = 0.001;
      function Me(t) {
        var e,
          n,
          i = t.duration,
          r = void 0 === i ? 800 : i,
          o = t.bounce,
          s = void 0 === o ? 0.25 : o,
          a = t.velocity,
          l = void 0 === a ? 0 : a,
          c = t.mass,
          u = void 0 === c ? 1 : c,
          h = 1 - s;
        (h = we(0.05, 1, h)),
          (r = we(0.01, 10, r / 1e3)),
          h < 1
            ? ((e = function (t) {
                var e = t * h,
                  n = e * r,
                  i = e - l,
                  o = Ae(t, h),
                  s = Math.exp(-n);
                return _e - (i / o) * s;
              }),
              (n = function (t) {
                var n = t * h * r,
                  i = n * l + l,
                  o = Math.pow(h, 2) * Math.pow(t, 2) * r,
                  s = Math.exp(-n),
                  a = Ae(Math.pow(t, 2), h);
                return ((-e(t) + _e > 0 ? -1 : 1) * ((i - o) * s)) / a;
              }))
            : ((e = function (t) {
                return Math.exp(-t * r) * ((t - l) * r + 1) - 0.001;
              }),
              (n = function (t) {
                return Math.exp(-t * r) * (r * r * (l - t));
              }));
        var d = (function (t, e, n) {
          for (var i = n, r = 1; r < Se; r++) i -= t(i) / e(i);
          return i;
        })(e, n, 5 / r);
        if (((r *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: r };
        var f = Math.pow(d, 2) * u;
        return { stiffness: f, damping: 2 * h * Math.sqrt(u * f), duration: r };
      }
      var Se = 12;
      function Ae(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var ke = ["duration", "bounce"],
        Pe = ["stiffness", "damping", "mass"];
      function Ce(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function Ee(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          s = t.restSpeed,
          a = void 0 === s ? 2 : s,
          l = t.restDelta,
          c = (0, i.Tt)(t, ["from", "to", "restSpeed", "restDelta"]),
          u = { done: !1, value: n },
          h = (function (t) {
            var e = (0, i.Cl)(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Ce(t, Pe) && Ce(t, ke)) {
              var n = Me(t);
              (e = (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(c),
          d = h.stiffness,
          f = h.damping,
          p = h.mass,
          g = h.velocity,
          m = h.duration,
          v = h.isResolvedFromDuration,
          y = Te,
          b = Te;
        function x() {
          var t = g ? -g / 1e3 : 0,
            e = o - n,
            i = f / (2 * Math.sqrt(d * p)),
            r = Math.sqrt(d / p) / 1e3;
          if (
            ((null !== l && void 0 !== l) ||
              (l = Math.abs(o - n) <= 1 ? 0.01 : 0.4),
            i < 1)
          ) {
            var s = Ae(r, i);
            (y = function (n) {
              var a = Math.exp(-i * r * n);
              return (
                o -
                a *
                  (((t + i * r * e) / s) * Math.sin(s * n) +
                    e * Math.cos(s * n))
              );
            }),
              (b = function (n) {
                var o = Math.exp(-i * r * n);
                return (
                  i *
                    r *
                    o *
                    ((Math.sin(s * n) * (t + i * r * e)) / s +
                      e * Math.cos(s * n)) -
                  o *
                    (Math.cos(s * n) * (t + i * r * e) -
                      s * e * Math.sin(s * n))
                );
              });
          } else if (1 === i)
            y = function (n) {
              return o - Math.exp(-r * n) * (e + (t + r * e) * n);
            };
          else {
            var a = r * Math.sqrt(i * i - 1);
            y = function (n) {
              var s = Math.exp(-i * r * n),
                l = Math.min(a * n, 300);
              return (
                o -
                (s * ((t + i * r * e) * Math.sinh(l) + a * e * Math.cosh(l))) /
                  a
              );
            };
          }
        }
        return (
          x(),
          {
            next: function (t) {
              var e = y(t);
              if (v) u.done = t >= m;
              else {
                var n = 1e3 * b(t),
                  i = Math.abs(n) <= a,
                  r = Math.abs(o - e) <= l;
                u.done = i && r;
              }
              return (u.value = u.done ? o : e), u;
            },
            flipTarget: function () {
              var t;
              (g = -g), (n = (t = [o, n])[0]), (o = t[1]), x();
            },
          }
        );
      }
      Ee.needsInterpolation = function (t, e) {
        return "string" === typeof t || "string" === typeof e;
      };
      var Te = function (t) {
          return 0;
        },
        Oe = function (t, e, n) {
          var i = e - t;
          return 0 === i ? 1 : (n - t) / i;
        },
        De = function (t, e, n) {
          return -n * t + n * e + t;
        },
        Re = function (t, e) {
          return function (n) {
            return Boolean(
              (tt(n) && Q.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            );
          };
        },
        Le = function (t, e, n) {
          return function (i) {
            var r;
            if (!tt(i)) return i;
            var o = i.match(Z),
              s = o[0],
              a = o[1],
              l = o[2],
              c = o[3];
            return (
              ((r = {})[t] = parseFloat(s)),
              (r[e] = parseFloat(a)),
              (r[n] = parseFloat(l)),
              (r.alpha = void 0 !== c ? parseFloat(c) : 1),
              r
            );
          };
        },
        Fe = K(0, 255),
        Ve = (0, i.Cl)((0, i.Cl)({}, lt), {
          transform: function (t) {
            return Math.round(Fe(t));
          },
        }),
        Ie = {
          test: Re("rgb", "red"),
          parse: Le("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              i = t.blue,
              r = t.alpha,
              o = void 0 === r ? 1 : r;
            return (
              "rgba(" +
              Ve.transform(e) +
              ", " +
              Ve.transform(n) +
              ", " +
              Ve.transform(i) +
              ", " +
              G(ct.transform(o)) +
              ")"
            );
          },
        };
      var je = {
          test: Re("#"),
          parse: function (t) {
            var e = "",
              n = "",
              i = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (i = t.substr(5, 2)),
                  (r = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (i = t.substr(3, 1)),
                  (r = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (i += i),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: Ie.transform,
        },
        ze = {
          test: Re("hsl", "hue"),
          parse: Le("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              i = t.lightness,
              r = t.alpha,
              o = void 0 === r ? 1 : r;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              it.transform(G(n)) +
              ", " +
              it.transform(G(i)) +
              ", " +
              G(ct.transform(o)) +
              ")"
            );
          },
        },
        Ne = function (t, e, n) {
          var i = t * t,
            r = e * e;
          return Math.sqrt(Math.max(0, n * (r - i) + i));
        },
        Be = [je, Ie, ze],
        We = function (t) {
          return Be.find(function (e) {
            return e.test(t);
          });
        },
        He = function (t) {
          return (
            "'" +
            t +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Ue = function (t, e) {
          var n = We(t),
            r = We(e);
          He(t), He(e), n.transform, r.transform;
          var o = n.parse(t),
            s = r.parse(e),
            a = (0, i.Cl)({}, o),
            l = n === ze ? De : Ne;
          return function (t) {
            for (var e in a) "alpha" !== e && (a[e] = l(o[e], s[e], t));
            return (a.alpha = De(o.alpha, s.alpha, t)), n.transform(a);
          };
        },
        Ye = {
          test: function (t) {
            return Ie.test(t) || je.test(t) || ze.test(t);
          },
          parse: function (t) {
            return Ie.test(t)
              ? Ie.parse(t)
              : ze.test(t)
              ? ze.parse(t)
              : je.parse(t);
          },
          transform: function (t) {
            return tt(t)
              ? t
              : t.hasOwnProperty("red")
              ? Ie.transform(t)
              : ze.transform(t);
          },
        },
        qe = "${c}",
        Xe = "${n}";
      function $e(t) {
        var e = [],
          n = 0,
          i = t.match(J);
        i &&
          ((n = i.length),
          (t = t.replace(J, qe)),
          e.push.apply(e, i.map(Ye.parse)));
        var r = t.match(Z);
        return (
          r && ((t = t.replace(Z, Xe)), e.push.apply(e, r.map(lt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function Ke(t) {
        return $e(t).values;
      }
      function Ge(t) {
        var e = $e(t),
          n = e.values,
          i = e.numColors,
          r = e.tokenised,
          o = n.length;
        return function (t) {
          for (var e = r, n = 0; n < o; n++)
            e = e.replace(
              n < i ? qe : Xe,
              n < i ? Ye.transform(t[n]) : G(t[n])
            );
          return e;
        };
      }
      var Ze = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var Je = {
          test: function (t) {
            var e, n, i, r;
            return (
              isNaN(t) &&
              tt(t) &&
              (null !==
                (n =
                  null === (e = t.match(Z)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (r =
                    null === (i = t.match(J)) || void 0 === i
                      ? void 0
                      : i.length) && void 0 !== r
                  ? r
                  : 0) >
                0
            );
          },
          parse: Ke,
          createTransformer: Ge,
          getAnimatableNone: function (t) {
            var e = Ke(t);
            return Ge(t)(e.map(Ze));
          },
        },
        Qe = function (t) {
          return "number" === typeof t;
        };
      function tn(t, e) {
        return Qe(t)
          ? function (n) {
              return De(t, e, n);
            }
          : Ye.test(t)
          ? Ue(t, e)
          : on(t, e);
      }
      var en = function (t, e) {
          var n = (0, i.fX)([], t),
            r = n.length,
            o = t.map(function (t, n) {
              return tn(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        nn = function (t, e) {
          var n = (0, i.Cl)((0, i.Cl)({}, t), e),
            r = {};
          for (var o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = tn(t[o], e[o]));
          return function (t) {
            for (var e in r) n[e] = r[e](t);
            return n;
          };
        };
      function rn(t) {
        for (
          var e = Je.parse(t), n = e.length, i = 0, r = 0, o = 0, s = 0;
          s < n;
          s++
        )
          i || "number" === typeof e[s] ? i++ : void 0 !== e[s].hue ? o++ : r++;
        return { parsed: e, numNumbers: i, numRGB: r, numHSL: o };
      }
      var on = function (t, e) {
          var n = Je.createTransformer(e),
            i = rn(t),
            r = rn(e);
          return (
            i.numHSL === r.numHSL &&
              i.numRGB === r.numRGB &&
              (i.numNumbers, r.numNumbers),
            me(en(i.parsed, r.parsed), n)
          );
        },
        sn = function (t, e) {
          return function (n) {
            return De(t, e, n);
          };
        };
      function an(t, e, n) {
        for (
          var i,
            r = [],
            o =
              n ||
              ("number" === typeof (i = t[0])
                ? sn
                : "string" === typeof i
                ? Ye.test(i)
                  ? Ue
                  : on
                : Array.isArray(i)
                ? en
                : "object" === typeof i
                ? nn
                : void 0),
            s = t.length - 1,
            a = 0;
          a < s;
          a++
        ) {
          var l = o(t[a], t[a + 1]);
          if (e) {
            var c = Array.isArray(e) ? e[a] : e;
            l = me(c, l);
          }
          r.push(l);
        }
        return r;
      }
      function ln(t, e, n) {
        var i = void 0 === n ? {} : n,
          r = i.clamp,
          o = void 0 === r || r,
          s = i.ease,
          a = i.mixer,
          l = t.length;
        e.length,
          !s || !Array.isArray(s) || s.length,
          t[0] > t[l - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        var c = an(e, s, a),
          u =
            2 === l
              ? (function (t, e) {
                  var n = t[0],
                    i = t[1],
                    r = e[0];
                  return function (t) {
                    return r(Oe(n, i, t));
                  };
                })(t, c)
              : (function (t, e) {
                  var n = t.length,
                    i = n - 1;
                  return function (r) {
                    var o = 0,
                      s = !1;
                    if (
                      (r <= t[0]
                        ? (s = !0)
                        : r >= t[i] && ((o = i - 1), (s = !0)),
                      !s)
                    ) {
                      for (var a = 1; a < n && !(t[a] > r || a === i); a++);
                      o = a - 1;
                    }
                    var l = Oe(t[o], t[o + 1], r);
                    return e[o](l);
                  };
                })(t, c);
        return o
          ? function (e) {
              return u(we(t[0], t[l - 1], e));
            }
          : u;
      }
      var cn,
        un = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        hn = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        dn = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t);
          };
        },
        fn = 4 / 11,
        pn = 8 / 11,
        gn = function (t) {
          return t;
        },
        mn =
          ((cn = 2),
          function (t) {
            return Math.pow(t, cn);
          }),
        vn = un(mn),
        yn = hn(mn),
        bn = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        xn = un(bn),
        wn = hn(xn),
        _n = dn(1.525),
        Mn = un(_n),
        Sn = hn(_n),
        An = (function (t) {
          var e = dn(t);
          return function (t) {
            return (t *= 2) < 1
              ? 0.5 * e(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          };
        })(1.525),
        kn = 4356 / 361,
        Pn = 35442 / 1805,
        Cn = 16061 / 1805,
        En = function (t) {
          if (1 === t || 0 === t) return t;
          var e = t * t;
          return t < fn
            ? 7.5625 * e
            : t < pn
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? kn * e - Pn * t + Cn
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        Tn = un(En);
      function On(t, e) {
        return t
          .map(function () {
            return e || yn;
          })
          .splice(0, t.length - 1);
      }
      function Dn(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          i = t.to,
          r = void 0 === i ? 1 : i,
          o = t.ease,
          s = t.offset,
          a = t.duration,
          l = void 0 === a ? 300 : a,
          c = { done: !1, value: n },
          u = Array.isArray(r) ? r : [n, r],
          h = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(
            s && s.length === u.length
              ? s
              : (function (t) {
                  var e = t.length;
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0;
                  });
                })(u),
            l
          );
        function d() {
          return ln(h, u, { ease: Array.isArray(o) ? o : On(u, o) });
        }
        var f = d();
        return {
          next: function (t) {
            return (c.value = f(t)), (c.done = t >= l), c;
          },
          flipTarget: function () {
            u.reverse(), (f = d());
          },
        };
      }
      var Rn = {
        keyframes: Dn,
        spring: Ee,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            i = t.from,
            r = void 0 === i ? 0 : i,
            o = t.power,
            s = void 0 === o ? 0.8 : o,
            a = t.timeConstant,
            l = void 0 === a ? 350 : a,
            c = t.restDelta,
            u = void 0 === c ? 0.5 : c,
            h = t.modifyTarget,
            d = { done: !1, value: r },
            f = s * n,
            p = r + f,
            g = void 0 === h ? p : h(p);
          return (
            g !== p && (f = g - r),
            {
              next: function (t) {
                var e = -f * Math.exp(-t / l);
                return (
                  (d.done = !(e > u || e < -u)),
                  (d.value = d.done ? g : g + e),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      var Ln = n(6388);
      function Fn(t, e, n) {
        return void 0 === n && (n = 0), t - e - n;
      }
      var Vn = function (t) {
        var e = function (e) {
          var n = e.delta;
          return t(n);
        };
        return {
          start: function () {
            return Ln.Ay.update(e, !0);
          },
          stop: function () {
            return Ln.eO.update(e);
          },
        };
      };
      function In(t) {
        var e,
          n,
          r,
          o,
          s,
          a = t.from,
          l = t.autoplay,
          c = void 0 === l || l,
          u = t.driver,
          h = void 0 === u ? Vn : u,
          d = t.elapsed,
          f = void 0 === d ? 0 : d,
          p = t.repeat,
          g = void 0 === p ? 0 : p,
          m = t.repeatType,
          v = void 0 === m ? "loop" : m,
          y = t.repeatDelay,
          b = void 0 === y ? 0 : y,
          x = t.onPlay,
          w = t.onStop,
          _ = t.onComplete,
          M = t.onRepeat,
          S = t.onUpdate,
          A = (0, i.Tt)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          k = A.to,
          P = 0,
          C = A.duration,
          E = !1,
          T = !0,
          O = (function (t) {
            if (Array.isArray(t.to)) return Dn;
            if (Rn[t.type]) return Rn[t.type];
            var e = new Set(Object.keys(t));
            return e.has("ease") ||
              (e.has("duration") && !e.has("dampingRatio"))
              ? Dn
              : e.has("dampingRatio") ||
                e.has("stiffness") ||
                e.has("mass") ||
                e.has("damping") ||
                e.has("restSpeed") ||
                e.has("restDelta")
              ? Ee
              : Dn;
          })(A);
        (null === (n = (e = O).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, a, k)) &&
          ((s = ln([0, 100], [a, k], { clamp: !1 })), (a = 0), (k = 100));
        var D = O((0, i.Cl)((0, i.Cl)({}, A), { from: a, to: k }));
        function R() {
          P++,
            "reverse" === v
              ? (f = (function (t, e, n, i) {
                  return (
                    void 0 === n && (n = 0),
                    void 0 === i && (i = !0),
                    i ? Fn(e + -t, e, n) : e - (t - e) + n
                  );
                })(f, C, b, (T = P % 2 === 0)))
              : ((f = Fn(f, C, b)), "mirror" === v && D.flipTarget()),
            (E = !1),
            M && M();
        }
        function L(t) {
          if ((T || (t = -t), (f += t), !E)) {
            var e = D.next(Math.max(0, f));
            (o = e.value), s && (o = s(o)), (E = T ? e.done : f <= 0);
          }
          null === S || void 0 === S || S(o),
            E &&
              (0 === P && ((null !== C && void 0 !== C) || (C = f)),
              P < g
                ? (function (t, e, n, i) {
                    return i ? t >= e + n : t <= -n;
                  })(f, C, b, T) && R()
                : (r.stop(), _ && _()));
        }
        return (
          c && (null === x || void 0 === x || x(), (r = h(L)).start()),
          {
            stop: function () {
              null === w || void 0 === w || w(), r.stop();
            },
          }
        );
      }
      function jn(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var zn = function (t) {
          return 1e3 * t;
        },
        Nn = function (t, e) {
          return 1 - 3 * e + 3 * t;
        },
        Bn = function (t, e) {
          return 3 * e - 6 * t;
        },
        Wn = function (t) {
          return 3 * t;
        },
        Hn = function (t, e, n) {
          return ((Nn(e, n) * t + Bn(e, n)) * t + Wn(e)) * t;
        },
        Un = function (t, e, n) {
          return 3 * Nn(e, n) * t * t + 2 * Bn(e, n) * t + Wn(e);
        };
      var Yn = 0.1;
      function qn(t, e, n, i) {
        if (t === e && n === i) return gn;
        for (var r = new Float32Array(11), o = 0; o < 11; ++o)
          r[o] = Hn(o * Yn, t, n);
        function s(e) {
          for (var i = 0, o = 1; 10 !== o && r[o] <= e; ++o) i += Yn;
          --o;
          var s = i + ((e - r[o]) / (r[o + 1] - r[o])) * Yn,
            a = Un(s, t, n);
          return a >= 0.001
            ? (function (t, e, n, i) {
                for (var r = 0; r < 8; ++r) {
                  var o = Un(e, n, i);
                  if (0 === o) return e;
                  e -= (Hn(e, n, i) - t) / o;
                }
                return e;
              })(e, s, t, n)
            : 0 === a
            ? s
            : (function (t, e, n, i, r) {
                var o,
                  s,
                  a = 0;
                do {
                  (o = Hn((s = e + (n - e) / 2), i, r) - t) > 0
                    ? (n = s)
                    : (e = s);
                } while (Math.abs(o) > 1e-7 && ++a < 10);
                return s;
              })(e, i, i + Yn, t, n);
        }
        return function (t) {
          return 0 === t || 1 === t ? t : Hn(s(t), e, i);
        };
      }
      var Xn = {
          linear: gn,
          easeIn: mn,
          easeInOut: yn,
          easeOut: vn,
          circIn: bn,
          circInOut: wn,
          circOut: xn,
          backIn: _n,
          backInOut: Sn,
          backOut: Mn,
          anticipate: An,
          bounceIn: Tn,
          bounceInOut: function (t) {
            return t < 0.5
              ? 0.5 * (1 - En(1 - 2 * t))
              : 0.5 * En(2 * t - 1) + 0.5;
          },
          bounceOut: En,
        },
        $n = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, i.zs)(t, 4);
            return qn(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t ? Xn[t] : t;
        },
        Kn = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Je.test(e) || e.startsWith("url(")))
          );
        },
        Gn = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        Zn = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        Jn = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Qn = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        ti = {
          x: Gn,
          y: Gn,
          z: Gn,
          rotate: Gn,
          rotateX: Gn,
          rotateY: Gn,
          rotateZ: Gn,
          scaleX: Zn,
          scaleY: Zn,
          scale: Zn,
          opacity: Jn,
          backgroundColor: Jn,
          color: Jn,
          default: Zn,
        },
        ei = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ni(t) {
        var e = t.slice(0, -1).split("("),
          n = e[0],
          i = e[1];
        if ("drop-shadow" === n) return t;
        var r = (i.match(Z) || [])[0];
        if (!r) return t;
        var o = i.replace(r, ""),
          s = ei.has(n) ? 1 : 0;
        return r !== i && (s *= 100), n + "(" + s + o + ")";
      }
      var ii = /([a-z-]*)\(.*?\)/g,
        ri = (0, i.Cl)((0, i.Cl)({}, Je), {
          getAnimatableNone: function (t) {
            var e = t.match(ii);
            return e ? e.map(ni).join(" ") : t;
          },
        }),
        oi = (0, i.Cl)((0, i.Cl)({}, dt), {
          color: Ye,
          backgroundColor: Ye,
          outlineColor: Ye,
          fill: Ye,
          stroke: Ye,
          borderColor: Ye,
          borderTopColor: Ye,
          borderRightColor: Ye,
          borderBottomColor: Ye,
          borderLeftColor: Ye,
          filter: ri,
          WebkitFilter: ri,
        }),
        si = function (t) {
          return oi[t];
        };
      function ai(t, e) {
        var n,
          i = si(t);
        return (
          i !== ri && (i = Je),
          null === (n = i.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(i, e)
        );
      }
      function li(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          o = t.flip,
          s = t.loop,
          a = (0, i.Tt)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          l = (0, i.Cl)({}, a);
        return (
          n && (l.offset = n),
          a.duration && (l.duration = zn(a.duration)),
          a.repeatDelay && (l.repeatDelay = zn(a.repeatDelay)),
          e &&
            (l.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map($n)
              : $n(e)),
          "tween" === a.type && (l.type = "keyframes"),
          (r || s || o) &&
            (r
              ? (l.repeatType = "reverse")
              : s
              ? (l.repeatType = "loop")
              : o && (l.repeatType = "mirror"),
            (l.repeat = s || r || o || a.repeat)),
          "spring" !== a.type && (l.type = "keyframes"),
          l
        );
      }
      function ci(t, e, n) {
        var r;
        return (
          Array.isArray(e.to) &&
            ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, i.fX)([], (0, i.zs)(t.to))), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, i.Tt)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, i.Cl)(
              (0, i.Cl)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = jt(e) ? Qn : ti[t] || ti.default),
                  (0, i.Cl)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, i.Cl)((0, i.Cl)({}, e), li(t))
        );
      }
      function ui(t, e, n, r, o) {
        var s,
          a = fi(r, t),
          l = null !== (s = a.from) && void 0 !== s ? s : e.get(),
          c = Kn(t, n);
        "none" === l && c && "string" === typeof n
          ? (l = ai(t, n))
          : hi(l) && "string" === typeof n
          ? (l = di(n))
          : !Array.isArray(n) && hi(n) && "string" === typeof l && (n = di(l));
        var u = Kn(t, l);
        return u && c && !1 !== a.type
          ? function () {
              var r = {
                from: l,
                to: n,
                velocity: e.getVelocity(),
                onComplete: o,
                onUpdate: function (t) {
                  return e.set(t);
                },
              };
              return "inertia" === a.type || "decay" === a.type
                ? (function (t) {
                    var e,
                      n = t.from,
                      r = void 0 === n ? 0 : n,
                      o = t.velocity,
                      s = void 0 === o ? 0 : o,
                      a = t.min,
                      l = t.max,
                      c = t.power,
                      u = void 0 === c ? 0.8 : c,
                      h = t.timeConstant,
                      d = void 0 === h ? 750 : h,
                      f = t.bounceStiffness,
                      p = void 0 === f ? 500 : f,
                      g = t.bounceDamping,
                      m = void 0 === g ? 10 : g,
                      v = t.restDelta,
                      y = void 0 === v ? 1 : v,
                      b = t.modifyTarget,
                      x = t.driver,
                      w = t.onUpdate,
                      _ = t.onComplete;
                    function M(t) {
                      return (void 0 !== a && t < a) || (void 0 !== l && t > l);
                    }
                    function S(t) {
                      return void 0 === a
                        ? l
                        : void 0 === l || Math.abs(a - t) < Math.abs(l - t)
                        ? a
                        : l;
                    }
                    function A(t) {
                      null === e || void 0 === e || e.stop(),
                        (e = In(
                          (0, i.Cl)((0, i.Cl)({}, t), {
                            driver: x,
                            onUpdate: function (e) {
                              var n;
                              null === w || void 0 === w || w(e),
                                null === (n = t.onUpdate) ||
                                  void 0 === n ||
                                  n.call(t, e);
                            },
                            onComplete: _,
                          })
                        ));
                    }
                    function k(t) {
                      A(
                        (0, i.Cl)(
                          {
                            type: "spring",
                            stiffness: p,
                            damping: m,
                            restDelta: y,
                          },
                          t
                        )
                      );
                    }
                    if (M(r)) k({ from: r, velocity: s, to: S(r) });
                    else {
                      var P = u * s + r;
                      "undefined" !== typeof b && (P = b(P));
                      var C,
                        E,
                        T = S(P),
                        O = T === a ? -1 : 1;
                      A({
                        type: "decay",
                        from: r,
                        velocity: s,
                        timeConstant: d,
                        power: u,
                        restDelta: y,
                        modifyTarget: b,
                        onUpdate: M(P)
                          ? function (t) {
                              (C = E),
                                (E = t),
                                (s = jn(t - C, (0, Ln.KK)().delta)),
                                ((1 === O && t > T) || (-1 === O && t < T)) &&
                                  k({ from: t, to: T, velocity: s });
                            }
                          : void 0,
                      });
                    }
                    return {
                      stop: function () {
                        return null === e || void 0 === e ? void 0 : e.stop();
                      },
                    };
                  })((0, i.Cl)((0, i.Cl)({}, r), a))
                : In(
                    (0, i.Cl)((0, i.Cl)({}, ci(a, r, t)), {
                      onUpdate: function (t) {
                        var e;
                        r.onUpdate(t),
                          null === (e = a.onUpdate) ||
                            void 0 === e ||
                            e.call(a, t);
                      },
                      onComplete: function () {
                        var t;
                        r.onComplete(),
                          null === (t = a.onComplete) ||
                            void 0 === t ||
                            t.call(a);
                      },
                    })
                  );
            }
          : function () {
              var t;
              return (
                e.set(n),
                o(),
                null ===
                  (t = null === a || void 0 === a ? void 0 : a.onComplete) ||
                  void 0 === t ||
                  t.call(a),
                { stop: function () {} }
              );
            };
      }
      function hi(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function di(t) {
        return "number" === typeof t ? 0 : ai("", t);
      }
      function fi(t, e) {
        return t[e] || t.default || t;
      }
      function pi(t, e, n, i) {
        return (
          void 0 === i && (i = {}),
          e.start(function (r) {
            var o,
              s,
              a = ui(t, e, n, i, r),
              l = (function (t, e) {
                var n;
                return null !== (n = (fi(t, e) || {}).delay) && void 0 !== n
                  ? n
                  : 0;
              })(i, t),
              c = function () {
                return (s = a());
              };
            return (
              l ? (o = setTimeout(c, zn(l))) : c(),
              function () {
                clearTimeout(o), null === s || void 0 === s || s.stop();
              }
            );
          })
        );
      }
      var gi = function (t) {
        return /^\-?\d*\.?\d+$/.test(t);
      };
      function mi(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function vi(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var yi = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                mi(this.subscriptions, t),
                function () {
                  return vi(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var i = this.subscriptions.length;
              if (i)
                if (1 === i) this.subscriptions[0](t, e, n);
                else
                  for (var r = 0; r < i; r++) {
                    var o = this.subscriptions[r];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        bi = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new yi()),
              (this.velocityUpdateSubscribers = new yi()),
              (this.renderSubscribers = new yi()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var i = (0, Ln.KK)(),
                  r = i.delta,
                  o = i.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = r),
                  (n.lastUpdated = o),
                  Ln.Ay.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Ln.Ay.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? jn(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function xi(t) {
        return new bi(t);
      }
      var wi = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        _i = [
          lt,
          rt,
          it,
          nt,
          st,
          ot,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Mi = function (t) {
          return _i.find(wi(t));
        },
        Si = (0, i.fX)((0, i.fX)([], (0, i.zs)(_i)), [Ye, Je]),
        Ai = function (t) {
          return Si.find(wi(t));
        };
      function ki(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, xi(n));
      }
      function Pi(t, e) {
        var n = P(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          s = void 0 === o ? {} : o;
        r.transition;
        var a = (0, i.Tt)(r, ["transitionEnd", "transition"]);
        for (var l in (a = (0, i.Cl)((0, i.Cl)({}, a), s))) {
          ki(t, l, zt(a[l]));
        }
      }
      function Ci(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Ei(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = P(t, e, n.custom),
          s = (o || {}).transition,
          a = void 0 === s ? t.getDefaultTransition() || {} : s;
        n.transitionOverride && (a = n.transitionOverride);
        var l = o
            ? function () {
                return Ti(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren,
                  s = void 0 === o ? 0 : o,
                  l = a.staggerChildren,
                  c = a.staggerDirection;
                return (function (t, e, n, r, o, s) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var a = [],
                    l = (t.variantChildren.size - 1) * r,
                    c =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), l - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Oi)
                      .forEach(function (t, r) {
                        a.push(
                          Ei(
                            t,
                            e,
                            (0, i.Cl)((0, i.Cl)({}, s), { delay: n + c(r) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, s + r, l, c, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = a.when;
        if (u) {
          var h = (0, i.zs)("beforeChildren" === u ? [l, c] : [c, l], 2),
            d = h[0],
            f = h[1];
          return d().then(f);
        }
        return Promise.all([l(), c(n.delay)]);
      }
      function Ti(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          s = o.delay,
          a = void 0 === s ? 0 : s,
          l = o.transitionOverride,
          c = o.type,
          u = t.makeTargetAnimatable(e),
          h = u.transition,
          d = void 0 === h ? t.getDefaultTransition() : h,
          f = u.transitionEnd,
          p = (0, i.Tt)(u, ["transition", "transitionEnd"]);
        l && (d = l);
        var g = [],
          m =
            c &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[c]);
        for (var v in p) {
          var y = t.getValue(v),
            b = p[v];
          if (!(!y || void 0 === b || (m && Di(m, v)))) {
            var x = pi(v, y, b, (0, i.Cl)({ delay: a }, d));
            g.push(x);
          }
        }
        return Promise.all(g).then(function () {
          f && Pi(t, f);
        });
      }
      function Oi(t, e) {
        return t.sortNodePosition(e);
      }
      function Di(t, e) {
        var n = t.protectedKeys,
          i = t.needsAnimating,
          r = n.hasOwnProperty(e) && !0 !== i[e];
        return (i[e] = !1), r;
      }
      var Ri = [Yt.Animate, Yt.Hover, Yt.Tap, Yt.Drag, Yt.Focus, Yt.Exit],
        Li = (0, i.fX)([], (0, i.zs)(Ri)).reverse(),
        Fi = Ri.length;
      function Vi(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                i = e.options;
              return (function (t, e, n) {
                var i;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(),
                  Array.isArray(e))
                ) {
                  var r = e.map(function (e) {
                    return Ei(t, e, n);
                  });
                  i = Promise.all(r);
                } else if ("string" === typeof e) i = Ei(t, e, n);
                else {
                  var o = "function" === typeof e ? P(t, e, n.custom) : e;
                  i = Ti(t, o, n);
                }
                return i.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, i);
            })
          );
        };
      }
      function Ii(t) {
        var e = Vi(t),
          n = (function () {
            var t;
            return (
              ((t = {})[Yt.Animate] = ji(!0)),
              (t[Yt.Hover] = ji()),
              (t[Yt.Tap] = ji()),
              (t[Yt.Drag] = ji()),
              (t[Yt.Focus] = ji()),
              (t[Yt.Exit] = ji()),
              t
            );
          })(),
          r = {},
          o = !0,
          s = function (e, n) {
            var r = P(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                s = (0, i.Tt)(r, ["transition", "transitionEnd"]);
              e = (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, e), s), o);
            }
            return e;
          };
        function a(a, l) {
          for (
            var c,
              u = t.getProps(),
              h = t.getVariantContext(!0) || {},
              d = [],
              f = new Set(),
              p = {},
              g = 1 / 0,
              m = function (e) {
                var r = Li[e],
                  m = n[r],
                  v = null !== (c = u[r]) && void 0 !== c ? c : h[r],
                  y = A(v),
                  b = r === l ? m.isActive : null;
                !1 === b && (g = e);
                var x = v === h[r] && v !== u[r] && y;
                if (
                  (x && o && t.manuallyAnimateOnMount && (x = !1),
                  (m.protectedKeys = (0, i.Cl)({}, p)),
                  (!m.isActive && null === b) ||
                    (!v && !m.prevProp) ||
                    It(v) ||
                    "boolean" === typeof v)
                )
                  return "continue";
                var w =
                    (function (t, e) {
                      if ("string" === typeof e) return e !== t;
                      if (S(e)) return !be(e, t);
                      return !1;
                    })(m.prevProp, v) ||
                    (r === l && m.isActive && !x && y) ||
                    (e > g && y),
                  _ = Array.isArray(v) ? v : [v],
                  M = _.reduce(s, {});
                !1 === b && (M = {});
                var k = m.prevResolvedValues,
                  P = void 0 === k ? {} : k,
                  C = (0, i.Cl)((0, i.Cl)({}, P), M),
                  E = function (t) {
                    (w = !0), f.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var T in C) {
                  var O = M[T],
                    D = P[T];
                  p.hasOwnProperty(T) ||
                    (O !== D
                      ? jt(O) && jt(D)
                        ? be(O, D)
                          ? (m.protectedKeys[T] = !0)
                          : E(T)
                        : void 0 !== O
                        ? E(T)
                        : f.add(T)
                      : void 0 !== O && f.has(T)
                      ? E(T)
                      : (m.protectedKeys[T] = !0));
                }
                (m.prevProp = v),
                  (m.prevResolvedValues = M),
                  m.isActive && (p = (0, i.Cl)((0, i.Cl)({}, p), M)),
                  o && t.blockInitialAnimation && (w = !1),
                  w &&
                    !x &&
                    d.push.apply(
                      d,
                      (0, i.fX)(
                        [],
                        (0, i.zs)(
                          _.map(function (t) {
                            return {
                              animation: t,
                              options: (0, i.Cl)({ type: r }, a),
                            };
                          })
                        )
                      )
                    );
              },
              v = 0;
            v < Fi;
            v++
          )
            m(v);
          if (((r = (0, i.Cl)({}, p)), f.size)) {
            var y = {};
            f.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (y[e] = n);
            }),
              d.push({ animation: y });
          }
          var b = Boolean(d.length);
          return (
            o && !1 === u.initial && !t.manuallyAnimateOnMount && (b = !1),
            (o = !1),
            b ? e(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== r[t];
          },
          animateChanges: a,
          setActive: function (e, i, r) {
            var o;
            return n[e].isActive === i
              ? Promise.resolve()
              : (null === (o = t.variantChildren) ||
                  void 0 === o ||
                  o.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, i);
                  }),
                (n[e].isActive = i),
                a(r, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function ji(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var zi = {
          animation: ve(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Ii(e)),
              It(n) &&
                (0, r.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: ve(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, i.zs)(p(), 2),
              s = o[0],
              a = o[1],
              l = (0, r.useContext)(d.t);
            (0, r.useEffect)(
              function () {
                var t,
                  i,
                  r =
                    null === (t = n.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(Yt.Exit, !s, {
                          custom:
                            null !==
                              (i =
                                null === l || void 0 === l
                                  ? void 0
                                  : l.custom) && void 0 !== i
                              ? i
                              : e,
                        });
                !s && (null === r || void 0 === r || r.then(a));
              },
              [s]
            );
          }),
        },
        Ni = function (t) {
          return t.hasOwnProperty("x") && t.hasOwnProperty("y");
        },
        Bi = function (t) {
          return Ni(t) && t.hasOwnProperty("z");
        },
        Wi = function (t, e) {
          return Math.abs(t - e);
        };
      function Hi(t, e) {
        if (Qe(t) && Qe(e)) return Wi(t, e);
        if (Ni(t) && Ni(e)) {
          var n = Wi(t.x, e.x),
            i = Wi(t.y, e.y),
            r = Bi(t) && Bi(e) ? Wi(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2));
        }
      }
      var Ui = (function () {
        function t(t, e, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = Xi(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = Hi(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var o = t.point,
                    s = (0, Ln.KK)().timestamp;
                  r.history.push((0, i.Cl)((0, i.Cl)({}, o), { timestamp: s }));
                  var a = r.handlers,
                    l = a.onStart,
                    c = a.onMove;
                  e ||
                    (l && l(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    c && c(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (r.lastMoveEvent = t),
                (r.lastMoveEventInfo = Yi(e, r.transformPagePoint)),
                Kt(t) && 0 === t.buttons
                  ? r.handlePointerUp(t, e)
                  : Ln.Ay.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              r.end();
              var n = r.handlers,
                i = n.onEnd,
                o = n.onSessionEnd,
                s = Xi(Yi(e, r.transformPagePoint), r.history);
              r.startEvent && i && i(t, s), o && o(t, s);
            }),
            !(Gt(t) && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var s = Yi(te(t), this.transformPagePoint),
              a = s.point,
              l = (0, Ln.KK)().timestamp;
            this.history = [(0, i.Cl)((0, i.Cl)({}, a), { timestamp: l })];
            var c = e.onSessionStart;
            c && c(t, Xi(s, this.history)),
              (this.removeListeners = me(
                oe(window, "pointermove", this.handlePointerMove),
                oe(window, "pointerup", this.handlePointerUp),
                oe(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              Ln.eO.update(this.updatePoint);
          }),
          t
        );
      })();
      function Yi(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function qi(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Xi(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: qi(n, Ki(e)),
          offset: qi(n, $i(e)),
          velocity: Gi(e, 0.1),
        };
      }
      function $i(t) {
        return t[0];
      }
      function Ki(t) {
        return t[t.length - 1];
      }
      function Gi(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, i = null, r = Ki(t);
          n >= 0 && ((i = t[n]), !(r.timestamp - i.timestamp > zn(e)));

        )
          n--;
        if (!i) return { x: 0, y: 0 };
        var o = (r.timestamp - i.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var s = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
      }
      var Zi = n(2085);
      function Ji(t) {
        return [t("x"), t("y")];
      }
      function Qi(t, e, n) {
        var i = e.min,
          r = e.max;
        return (
          void 0 !== i && t < i
            ? (t = n ? De(i, t, n.min) : Math.max(t, i))
            : void 0 !== r &&
              t > r &&
              (t = n ? De(r, t, n.max) : Math.min(t, r)),
          t
        );
      }
      function tr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function er(t, e) {
        var n,
          r = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = (0, i.zs)([o, r], 2))[0]), (o = n[1])),
          { min: t.min + r, max: t.min + o }
        );
      }
      function nr(t, e, n) {
        return { min: ir(t, e), max: ir(t, n) };
      }
      function ir(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function rr(t, e) {
        var n = t.getBoundingClientRect();
        return (0, Zi.MM)((0, Zi.YT)(n, e));
      }
      function or(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), Hi(t, e) < n
        );
      }
      function sr(t) {
        return t.max - t.min;
      }
      function ar(t, e) {
        var n = 0.5,
          i = sr(t),
          r = sr(e);
        return (
          r > i
            ? (n = Oe(e.min, e.max - i, t.min))
            : i > r && (n = Oe(t.min, t.max - r, e.min)),
          we(0, 1, n)
        );
      }
      function lr(t, e, n, i) {
        void 0 === i && (i = 0.5),
          (t.origin = i),
          (t.originPoint = De(e.min, e.max, t.origin)),
          (t.scale = sr(n) / sr(e)),
          or(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = De(n.min, n.max, t.origin) - t.originPoint),
          or(t.translate) && (t.translate = 0);
      }
      function cr(t, e, n, i) {
        lr(t.x, e.x, n.x, ur(i.originX)), lr(t.y, e.y, n.y, ur(i.originY));
      }
      function ur(t) {
        return "number" === typeof t ? t : 0.5;
      }
      function hr(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + sr(e));
      }
      var dr = n(5195);
      function fr(t, e) {
        return { min: e.min - t.min, max: e.max - t.min };
      }
      function pr(t, e) {
        return { x: fr(t.x, e.x), y: fr(t.y, e.y) };
      }
      function gr(t) {
        var e = t.getProps(),
          n = e.drag,
          i = e._dragX;
        return n && !i;
      }
      function mr(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function vr(t, e, n) {
        return n + e * (t - n);
      }
      function yr(t, e, n, i, r) {
        return void 0 !== r && (t = vr(t, r, i)), vr(t, n, i) + e;
      }
      function br(t, e, n, i, r) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = yr(t.min, e, n, i, r)),
          (t.max = yr(t.max, e, n, i, r));
      }
      function xr(t, e) {
        var n = e.x,
          i = e.y;
        br(t.x, n.translate, n.scale, n.originPoint),
          br(t.y, i.translate, i.scale, i.originPoint);
      }
      function wr(t, e, n, r) {
        var o = (0, i.zs)(r, 3),
          s = o[0],
          a = o[1],
          l = o[2];
        (t.min = e.min), (t.max = e.max);
        var c = void 0 !== n[l] ? n[l] : 0.5,
          u = De(e.min, e.max, c);
        br(t, n[s], n[a], u, n.scale);
      }
      var _r = ["x", "scaleX", "originX"],
        Mr = ["y", "scaleY", "originY"];
      function Sr(t, e, n) {
        wr(t.x, e.x, n, _r), wr(t.y, e.y, n, Mr);
      }
      function Ar(t, e, n, i, r) {
        return (
          (t = vr((t -= e), 1 / n, i)), void 0 !== r && (t = vr(t, 1 / r, i)), t
        );
      }
      function kr(t, e, n) {
        var r = (0, i.zs)(n, 3),
          o = r[0],
          s = r[1],
          a = r[2];
        !(function (t, e, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === i && (i = 0.5);
          var o = De(t.min, t.max, i) - e;
          (t.min = Ar(t.min, e, n, o, r)), (t.max = Ar(t.max, e, n, o, r));
        })(t, e[o], e[s], e[a], e.scale);
      }
      function Pr(t, e) {
        kr(t.x, e, _r), kr(t.y, e, Mr);
      }
      var Cr,
        Er = n(6343),
        Tr = new WeakMap(),
        Or = (function () {
          function t(t) {
            var e = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = (0, Zi.$Z)()),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              Tr.set(e, this);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = void 0 === e ? {} : e,
                o = r.snapToCursor,
                s = void 0 !== o && o,
                a = r.cursorProgress,
                l = this.props.transformPagePoint;
              this.panSession = new Ui(
                t,
                {
                  onSessionStart: function (t) {
                    var e;
                    n.stopMotion();
                    var r = (function (t) {
                      return te(t, "client");
                    })(t).point;
                    null === (e = n.cancelLayout) || void 0 === e || e.call(n),
                      (n.cancelLayout = (0, Er.V)(function (t, e) {
                        var o = (0, dr.kP)(n.visualElement),
                          l = (0, dr.nP)(n.visualElement),
                          c = (0, i.fX)(
                            (0, i.fX)([], (0, i.zs)(o)),
                            (0, i.zs)(l)
                          ),
                          u = !1;
                        n.isLayoutDrag() &&
                          n.visualElement.lockProjectionTarget(),
                          e(function () {
                            c.forEach(function (t) {
                              return t.resetTransform();
                            });
                          }),
                          t(function () {
                            (0, dr.QS)(n.visualElement), l.forEach(dr.QS);
                          }),
                          e(function () {
                            c.forEach(function (t) {
                              return t.restoreTransform();
                            }),
                              s && (u = n.snapToCursor(r));
                          }),
                          t(function () {
                            Boolean(
                              n.getAxisMotionValue("x") && !n.isExternalDrag()
                            ) ||
                              n.visualElement.rebaseProjectionTarget(
                                !0,
                                n.visualElement.measureViewportBox(!1)
                              ),
                              n.visualElement.scheduleUpdateLayoutProjection();
                            var t = n.visualElement.projection;
                            Ji(function (e) {
                              if (!u) {
                                var i = t.target[e],
                                  o = i.min,
                                  s = i.max;
                                n.cursorProgress[e] = a ? a[e] : Oe(o, s, r[e]);
                              }
                              var l = n.getAxisMotionValue(e);
                              l && (n.originPoint[e] = l.get());
                            });
                          }),
                          e(function () {
                            Ln.qX.update(),
                              Ln.qX.preRender(),
                              Ln.qX.render(),
                              Ln.qX.postRender();
                          }),
                          t(function () {
                            return n.resolveDragConstraints();
                          });
                      }));
                  },
                  onStart: function (t, e) {
                    var i,
                      r,
                      o,
                      s = n.props,
                      a = s.drag,
                      l = s.dragPropagation;
                    (!a ||
                      l ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = ue(a)),
                      n.openGlobalLock)) &&
                      ((0, Er.L)(),
                      (n.isDragging = !0),
                      (n.currentDirection = null),
                      null === (r = (i = n.props).onDragStart) ||
                        void 0 === r ||
                        r.call(i, t, e),
                      null === (o = n.visualElement.animationState) ||
                        void 0 === o ||
                        o.setActive(Yt.Drag, !0));
                  },
                  onMove: function (t, e) {
                    var i,
                      r,
                      o,
                      s,
                      a = n.props,
                      l = a.dragPropagation,
                      c = a.dragDirectionLock;
                    if (l || n.openGlobalLock) {
                      var u = e.offset;
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10);
                            var n = null;
                            Math.abs(t.y) > e
                              ? (n = "y")
                              : Math.abs(t.x) > e && (n = "x");
                            return n;
                          })(u)),
                          void (
                            null !== n.currentDirection &&
                            (null === (r = (i = n.props).onDirectionLock) ||
                              void 0 === r ||
                              r.call(i, n.currentDirection))
                          )
                        );
                      n.updateAxis("x", e.point, u),
                        n.updateAxis("y", e.point, u),
                        null === (s = (o = n.props).onDrag) ||
                          void 0 === s ||
                          s.call(o, t, e),
                        (Cr = t);
                    }
                  },
                  onSessionEnd: function (t, e) {
                    return n.stop(t, e);
                  },
                },
                { transformPagePoint: l }
              );
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props,
                n = e.dragConstraints,
                i = e.dragElastic,
                r = this.visualElement.getLayoutState().layoutCorrected;
              (this.constraints =
                !!n &&
                (M(n)
                  ? this.resolveRefConstraints(r, n)
                  : (function (t, e) {
                      var n = e.top,
                        i = e.left,
                        r = e.bottom,
                        o = e.right;
                      return { x: tr(t.x, i, o), y: tr(t.y, n, r) };
                    })(r, n))),
                (this.elastic = (function (t) {
                  return (
                    !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                    { x: nr(t, "left", "right"), y: nr(t, "top", "bottom") }
                  );
                })(i)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  Ji(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(r[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                i = n.onMeasureDragConstraints,
                r = n.transformPagePoint,
                o = e.current;
              this.constraintsBox = rr(o, r);
              var s = (function (t, e) {
                return { x: er(t.x, e.x), y: er(t.y, e.y) };
              })(t, this.constraintsBox);
              if (i) {
                var a = i((0, Zi.Wy)(s));
                (this.hasMutatedConstraints = !!a), a && (s = (0, Zi.MM)(a));
              }
              return s;
            }),
            (t.prototype.cancelDrag = function () {
              var t, e;
              this.visualElement.unlockProjectionTarget(),
                null === (t = this.cancelLayout) ||
                  void 0 === t ||
                  t.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(Yt.Drag, !1);
            }),
            (t.prototype.stop = function (t, e) {
              var n, i, r;
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var o = this.isDragging;
              if ((this.cancelDrag(), o)) {
                var s = e.velocity;
                this.animateDragEnd(s),
                  null === (r = (i = this.props).onDragEnd) ||
                    void 0 === r ||
                    r.call(i, t, e);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              return Ji(function (n) {
                if (Dr(n, e.props.drag, e.currentDirection)) {
                  var i = e.getAxisMotionValue(n);
                  if (!i) return (e.cursorProgress[n] = 0.5), !0;
                  var r = e.visualElement.getLayoutState().layout,
                    o = r[n].max - r[n].min,
                    s = r[n].min + o / 2,
                    a = t[n] - s;
                  (e.originPoint[n] = t[n]), i.set(a);
                }
              }).includes(!0);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (Dr(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e);
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (e && n) {
                var i = this.originPoint[t] + e[t],
                  r = this.constraints
                    ? Qi(i, this.constraints[t], this.elastic[t])
                    : i;
                n.set(r);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                i = this.visualElement.getLayoutState().layout[t],
                r = i.max - i.min,
                o = this.cursorProgress[t],
                s = (function (t, e, n, i, r) {
                  var o = t - e * n;
                  return i ? Qi(o, i, r) : o;
                })(
                  e[t],
                  r,
                  o,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[t],
                  this.elastic[t]
                );
              this.visualElement.setProjectionTargetAxis(t, s, s + r);
            }),
            (t.prototype.setProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                o = void 0 !== r && r,
                s = t.dragPropagation,
                a = void 0 !== s && s,
                l = t.dragConstraints,
                c = void 0 !== l && l,
                u = t.dragElastic,
                h = void 0 === u ? 0.35 : u,
                d = t.dragMomentum,
                f = void 0 === d || d,
                p = (0, i.Tt)(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = (0, i.Cl)(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: a,
                  dragConstraints: c,
                  dragElastic: h,
                  dragMomentum: f,
                },
                p
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                i = e.layoutId,
                r = "_drag" + t.toUpperCase();
              return this.props[r]
                ? this.props[r]
                : n || void 0 !== i
                ? void 0
                : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue("x");
            }),
            (t.prototype.isExternalDrag = function () {
              var t = this.props,
                e = t._dragX,
                n = t._dragY;
              return e || n;
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                r = n.drag,
                o = n.dragMomentum,
                s = n.dragElastic,
                a = n.dragTransition,
                l = (function (t, e) {
                  void 0 === e && (e = !0);
                  var n,
                    i = t.getProjectionParent();
                  return (
                    !!i &&
                    (e
                      ? Pr(
                          (n = pr(i.projection.target, t.projection.target)),
                          i.getLatestValues()
                        )
                      : (n = pr(
                          i.getLayoutState().layout,
                          t.getLayoutState().layout
                        )),
                    Ji(function (e) {
                      return t.setProjectionTargetAxis(
                        e,
                        n[e].min,
                        n[e].max,
                        !0
                      );
                    }),
                    !0)
                  );
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                c = this.constraints || {};
              if (l && Object.keys(c).length && this.isLayoutDrag()) {
                var u = this.visualElement.getProjectionParent();
                if (u) {
                  var h = pr(u.projection.targetFinal, c);
                  Ji(function (t) {
                    var e = h[t],
                      n = e.min,
                      i = e.max;
                    c[t] = {
                      min: isNaN(n) ? void 0 : n,
                      max: isNaN(i) ? void 0 : i,
                    };
                  });
                }
              }
              var d = Ji(function (n) {
                var u;
                if (Dr(n, r, e.currentDirection)) {
                  var h =
                      null !==
                        (u = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== u
                        ? u
                        : {},
                    d = s ? 200 : 1e6,
                    f = s ? 40 : 1e7,
                    p = (0, i.Cl)(
                      (0, i.Cl)(
                        {
                          type: "inertia",
                          velocity: o ? t[n] : 0,
                          bounceStiffness: d,
                          bounceDamping: f,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        a
                      ),
                      h
                    );
                  return e.getAxisMotionValue(n)
                    ? e.startAxisValueAnimation(n, p)
                    : e.visualElement.startLayoutAnimation(n, p, l);
                }
              });
              return Promise.all(d).then(function () {
                var t, n;
                null === (n = (t = e.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              Ji(function (e) {
                var n = t.getAxisMotionValue(e);
                n ? n.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (n) {
                var i = n.get();
                return n.set(i), n.set(i), pi(t, n, 0, e);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag;
              if (M(e.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var i = { x: 0, y: 0 };
                Ji(function (e) {
                  i[e] = ar(
                    t.visualElement.projection.target[e],
                    t.constraintsBox[e]
                  );
                }),
                  this.updateConstraints(function () {
                    Ji(function (e) {
                      if (Dr(e, n, null)) {
                        var r = (function (t, e, n) {
                            var i = t.max - t.min,
                              r = De(e.min, e.max - i, n);
                            return { min: r, max: r + i };
                          })(
                            t.visualElement.projection.target[e],
                            t.constraintsBox[e],
                            i[e]
                          ),
                          o = r.min,
                          s = r.max;
                        t.visualElement.setProjectionTargetAxis(e, o, s);
                      }
                    });
                  }),
                  setTimeout(Er.L, 1);
              }
            }),
            (t.prototype.updateConstraints = function (t) {
              var e = this;
              this.cancelLayout = (0, Er.V)(function (n, i) {
                var r = (0, dr.kP)(e.visualElement);
                i(function () {
                  return r.forEach(function (t) {
                    return t.resetTransform();
                  });
                }),
                  n(function () {
                    return (0, dr.QS)(e.visualElement);
                  }),
                  i(function () {
                    return r.forEach(function (t) {
                      return t.restoreTransform();
                    });
                  }),
                  n(function () {
                    e.resolveDragConstraints();
                  }),
                  t && i(t);
              });
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = oe(t.getInstance(), "pointerdown", function (t) {
                  var n = e.props,
                    i = n.drag,
                    r = n.dragListener;
                  i && (void 0 === r || r) && e.start(t);
                }),
                i = Xt(window, "resize", function () {
                  e.scalePoint();
                }),
                r = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints();
                }),
                o = t.prevDragCursor;
              return (
                o && this.start(Cr, { cursorProgress: o }),
                function () {
                  null === n || void 0 === n || n(),
                    null === i || void 0 === i || i(),
                    null === r || void 0 === r || r(),
                    e.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Dr(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Rr = {
          pan: ve(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              i = t.onPanEnd,
              o = t.onPanSessionStart,
              s = t.visualElement,
              a = e || n || i || o,
              l = (0, r.useRef)(null),
              c = (0, r.useContext)(u).transformPagePoint,
              h = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (l.current = null), i && i(t, e);
                },
              };
            (0, r.useEffect)(function () {
              null !== l.current && l.current.updateHandlers(h);
            }),
              se(
                s,
                "pointerdown",
                a &&
                  function (t) {
                    l.current = new Ui(t, h, { transformPagePoint: c });
                  }
              ),
              (0, pe.l)(function () {
                return l.current && l.current.end();
              });
          }),
          drag: ve(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              o = (0, r.useContext)(u).transformPagePoint,
              s = (0, f.M)(function () {
                return new Or({ visualElement: n });
              });
            s.setProps((0, i.Cl)((0, i.Cl)({}, t), { transformPagePoint: o })),
              (0, r.useEffect)(
                function () {
                  return e && e.subscribe(s);
                },
                [s]
              ),
              (0, r.useEffect)(function () {
                return s.mount(n);
              }, []);
          }),
        },
        Lr = n(8011);
      function Fr(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Vr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Ir(t, e, n) {
        void 0 === n && (n = 1);
        var r = (0, i.zs)(
            (function (t) {
              var e = Vr.exec(t);
              if (!e) return [,];
              var n = (0, i.zs)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = r[0],
          s = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : Fr(s) ? Ir(s, e, n + 1) : s;
        }
      }
      function jr(t, e) {
        return (t / (e.max - e.min)) * 100;
      }
      var zr = "_$css";
      var Nr = {
          process: function (t, e, n) {
            var i = n.target;
            if ("string" === typeof t) {
              if (!rt.test(t)) return t;
              t = parseFloat(t);
            }
            return jr(t, i.x) + "% " + jr(t, i.y) + "%";
          },
        },
        Br = {
          borderRadius: (0, i.Cl)((0, i.Cl)({}, Nr), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Nr,
          borderTopRightRadius: Nr,
          borderBottomLeftRadius: Nr,
          borderBottomRightRadius: Nr,
          boxShadow: {
            process: function (t, e) {
              var n = e.delta,
                i = e.treeScale,
                r = t,
                o = t.includes("var("),
                s = [];
              o &&
                (t = t.replace(Vr, function (t) {
                  return s.push(t), zr;
                }));
              var a = Je.parse(t);
              if (a.length > 5) return r;
              var l = Je.createTransformer(t),
                c = "number" !== typeof a[0] ? 1 : 0,
                u = n.x.scale * i.x,
                h = n.y.scale * i.y;
              (a[0 + c] /= u), (a[1 + c] /= h);
              var d = De(u, h, 0.5);
              "number" === typeof a[2 + c] && (a[2 + c] /= d),
                "number" === typeof a[3 + c] && (a[3 + c] /= d);
              var f = l(a);
              if (o) {
                var p = 0;
                f = f.replace(zr, function () {
                  var t = s[p];
                  return p++, t;
                });
              }
              return f;
            },
          },
        },
        Wr = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.frameTarget = (0, Zi.$Z)()),
              (e.currentAnimationTarget = (0, Zi.$Z)()),
              (e.isAnimating = { x: !1, y: !1 }),
              (e.stopAxisAnimation = { x: void 0, y: void 0 }),
              (e.isAnimatingTree = !1),
              (e.animate = function (t, n, r) {
                void 0 === r && (r = {});
                var o = r.originBox,
                  s = r.targetBox,
                  a = r.visibilityAction,
                  l = r.shouldStackAnimate,
                  c = r.onComplete,
                  u = r.prevParent,
                  h = (0, i.Tt)(r, [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                    "onComplete",
                    "prevParent",
                  ]),
                  d = e.props,
                  f = d.visualElement,
                  p = d.layout;
                if (!1 === l) return (e.isAnimatingTree = !1), e.safeToRemove();
                if (!e.isAnimatingTree || !0 === l) {
                  l && (e.isAnimatingTree = !0), (n = o || n), (t = s || t);
                  var g = !1,
                    m = f.getProjectionParent();
                  if (m) {
                    var v = m.prevViewportBox,
                      y = m.getLayoutState().layout;
                    u &&
                      (s && (y = u.getLayoutState().layout),
                      o &&
                        !(function (t, e) {
                          var n = t.getLayoutId(),
                            i = e.getLayoutId();
                          return n !== i || (void 0 === i && t !== e);
                        })(u, m) &&
                        u.prevViewportBox &&
                        (v = u.prevViewportBox)),
                      v &&
                        (function (t, e, n) {
                          return t || (!t && !(e || n));
                        })(u, o, s) &&
                        ((g = !0), (n = pr(v, n)), (t = pr(y, t)));
                  }
                  var b = (function (t, e) {
                      return (
                        !Ur(t) && !Ur(e) && (!Yr(t.x, e.x) || !Yr(t.y, e.y))
                      );
                    })(n, t),
                    x = Ji(function (r) {
                      var o, s;
                      if ("position" === p) {
                        var l = t[r].max - t[r].min;
                        n[r].max = n[r].min + l;
                      }
                      if (!f.projection.isTargetLocked)
                        return void 0 === a
                          ? b
                            ? e.animateAxis(
                                r,
                                t[r],
                                n[r],
                                (0, i.Cl)((0, i.Cl)({}, h), { isRelative: g })
                              )
                            : (null === (s = (o = e.stopAxisAnimation)[r]) ||
                                void 0 === s ||
                                s.call(o),
                              f.setProjectionTargetAxis(
                                r,
                                t[r].min,
                                t[r].max,
                                g
                              ))
                          : void f.setVisibility(a === Lr.b.Show);
                    });
                  return (
                    f.syncRender(),
                    Promise.all(x).then(function () {
                      (e.isAnimatingTree = !1),
                        c && c(),
                        f.notifyLayoutAnimationComplete();
                    })
                  );
                }
              }),
              e
            );
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props.visualElement;
              (e.animateMotionValue = pi),
                e.enableLayoutProjection(),
                (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
                (e.layoutSafeToRemove = function () {
                  return t.safeToRemove();
                }),
                (function (t) {
                  for (var e in t) V[e] = t[e];
                })(Br);
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this;
              this.unsubLayoutReady(),
                Ji(function (e) {
                  var n, i;
                  return null === (i = (n = t.stopAxisAnimation)[e]) ||
                    void 0 === i
                    ? void 0
                    : i.call(n);
                });
            }),
            (e.prototype.animateAxis = function (t, e, n, i) {
              var r,
                o,
                s = this,
                a = void 0 === i ? {} : i,
                l = a.transition,
                c = a.isRelative;
              if (
                !this.isAnimating[t] ||
                !Yr(e, this.currentAnimationTarget[t])
              ) {
                null === (o = (r = this.stopAxisAnimation)[t]) ||
                  void 0 === o ||
                  o.call(r),
                  (this.isAnimating[t] = !0);
                var u = this.props.visualElement,
                  h = this.frameTarget[t],
                  d = u.getProjectionAnimationProgress()[t];
                d.clearListeners(), d.set(0), d.set(0);
                var f = function () {
                  var i = d.get() / 1e3;
                  !(function (t, e, n, i) {
                    (t.min = De(e.min, n.min, i)),
                      (t.max = De(e.max, n.max, i));
                  })(h, n, e, i),
                    u.setProjectionTargetAxis(t, h.min, h.max, c);
                };
                f();
                var p = d.onChange(f);
                (this.stopAxisAnimation[t] = function () {
                  (s.isAnimating[t] = !1), d.stop(), p();
                }),
                  (this.currentAnimationTarget[t] = e);
                var g = l || u.getDefaultTransition() || qr;
                return pi(
                  "x" === t ? "layoutX" : "layoutY",
                  d,
                  1e3,
                  g && fi(g, "layout")
                ).then(this.stopAxisAnimation[t]);
              }
            }),
            (e.prototype.safeToRemove = function () {
              var t, e;
              null === (e = (t = this.props).safeToRemove) ||
                void 0 === e ||
                e.call(t);
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(r.Component);
      var Hr = { min: 0, max: 0 };
      function Ur(t) {
        return Yr(t.x, Hr) && Yr(t.y, Hr);
      }
      function Yr(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      var qr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      var Xr = n(4827),
        $r = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.framerSyncLayout,
                i = t.visualElement;
              (0, Xr.mt)(e) && e.register(i),
                (0, Xr.mt)(n) && n.register(i),
                i.onUnmount(function () {
                  (0, Xr.mt)(e) && e.remove(i), (0, Xr.mt)(n) && n.remove(i);
                });
            }),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement;
              return (
                (0, Xr.mt)(e) ? e.syncUpdate() : ((0, dr.AV)(n), e.add(n)), null
              );
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.syncLayout;
              (0, Xr.mt)(t) || t.flush();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(r.Component);
      var Kr = {
        measureLayout: function (t) {
          var e = (0, r.useContext)(Xr.R2),
            n = (0, r.useContext)(Xr.vR);
          return r.createElement(
            $r,
            (0, i.Cl)({}, t, { syncLayout: e, framerSyncLayout: n })
          );
        },
        layoutAnimation: function (t) {
          var e = (0, i.zs)(p(), 2)[1];
          return r.createElement(Wr, (0, i.Cl)({}, t, { safeToRemove: e }));
        },
      };
      function Gr() {
        return {
          isHydrated: !1,
          layout: (0, Zi.$Z)(),
          layoutCorrected: (0, Zi.$Z)(),
          treeScale: { x: 1, y: 1 },
          delta: (0, Zi.pU)(),
          deltaFinal: (0, Zi.pU)(),
          deltaTransform: "",
        };
      }
      var Zr = Gr();
      function Jr(t, e, n) {
        var i = t.x,
          r = t.y,
          o =
            "translate3d(" +
            i.translate / e.x +
            "px, " +
            r.translate / e.y +
            "px, 0) ";
        if (n) {
          var s = n.rotate,
            a = n.rotateX,
            l = n.rotateY;
          s && (o += "rotate(" + s + ") "),
            a && (o += "rotateX(" + a + ") "),
            l && (o += "rotateY(" + l + ") ");
        }
        return (
          (o += "scale(" + i.scale + ", " + r.scale + ")"),
          n || o !== to ? o : ""
        );
      }
      function Qr(t) {
        var e = t.deltaFinal;
        return 100 * e.x.origin + "% " + 100 * e.y.origin + "% 0";
      }
      var to = Jr(Zr.delta, Zr.treeScale, { x: 1, y: 1 }),
        eo = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      function no(t, e, n, i) {
        var r,
          o,
          s = t.delta,
          a = t.layout,
          l = t.layoutCorrected,
          c = t.treeScale,
          u = e.target;
        (o = a),
          mr((r = l).x, o.x),
          mr(r.y, o.y),
          (function (t, e, n) {
            var i = n.length;
            if (i) {
              var r, o;
              e.x = e.y = 1;
              for (var s = 0; s < i; s++)
                (o = (r = n[s]).getLayoutState().delta),
                  (e.x *= o.x.scale),
                  (e.y *= o.y.scale),
                  xr(t, o),
                  gr(r) && Sr(t, t, r.getLatestValues());
            }
          })(l, c, n),
          cr(s, l, u, i);
      }
      var io = n(8916),
        ro = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              mi(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              vi(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(io.u),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      var oo = function (t) {
        var e = t.treeType,
          n = void 0 === e ? "" : e,
          r = t.build,
          o = t.getBaseTarget,
          s = t.makeTargetAnimatable,
          a = t.measureViewportBox,
          l = t.render,
          c = t.readValueFromInstance,
          u = t.resetTransform,
          h = t.restoreTransform,
          d = t.removeValueFromRenderState,
          f = t.sortNodePosition,
          p = t.scrapeMotionValuesFromProps;
        return function (t, e) {
          var g = t.parent,
            m = t.props,
            v = t.presenceId,
            y = t.blockInitialAnimation,
            b = t.visualState;
          void 0 === e && (e = {});
          var x,
            w,
            _,
            M,
            S,
            k,
            P = b.latestValues,
            T = b.renderState,
            O = (function () {
              var t = eo.map(function () {
                  return new yi();
                }),
                e = {},
                n = {
                  clearAllListeners: function () {
                    return t.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    return eo.forEach(function (i) {
                      var r;
                      null === (r = e[i]) || void 0 === r || r.call(e);
                      var o = "on" + i,
                        s = t[o];
                      s && (e[i] = n[o](s));
                    });
                  },
                };
              return (
                t.forEach(function (t, e) {
                  (n["on" + eo[e]] = function (e) {
                    return t.add(e);
                  }),
                    (n["notify" + eo[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(t, (0, i.fX)([], (0, i.zs)(e)));
                    });
                }),
                n
              );
            })(),
            D = {
              isEnabled: !1,
              isHydrated: !1,
              isTargetLocked: !1,
              target: (0, Zi.$Z)(),
              targetFinal: (0, Zi.$Z)(),
            },
            R = D,
            L = P,
            F = Gr(),
            V = !1,
            I = new Map(),
            j = new Map(),
            z = {},
            N = (0, i.Cl)({}, P);
          function B() {
            x &&
              (Z.isProjectionReady() &&
                (Sr(R.targetFinal, R.target, L),
                cr(F.deltaFinal, F.layoutCorrected, R.targetFinal, P)),
              W(),
              l(x, T));
          }
          function W() {
            var t = P;
            if (M && M.isActive()) {
              var n = M.getCrossfadeState(Z);
              n && (t = n);
            }
            r(Z, T, t, R, F, e, m);
          }
          function H() {
            O.notifyUpdate(P);
          }
          function U() {
            Z.layoutTree.forEach(ao);
          }
          var q = p(m);
          for (var X in q) {
            var $ = q[X];
            void 0 !== P[X] && Y($) && $.set(P[X], !1);
          }
          var K = C(m),
            G = E(m),
            Z = (0, i.Cl)(
              (0, i.Cl)(
                {
                  treeType: n,
                  current: null,
                  depth: g ? g.depth + 1 : 0,
                  parent: g,
                  children: new Set(),
                  path: g
                    ? (0, i.fX)((0, i.fX)([], (0, i.zs)(g.path)), [g])
                    : [],
                  layoutTree: g ? g.layoutTree : new ro(),
                  presenceId: v,
                  projection: D,
                  variantChildren: G ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === g || void 0 === g ? void 0 : g.isMounted()
                  ),
                  blockInitialAnimation: y,
                  isMounted: function () {
                    return Boolean(x);
                  },
                  mount: function (t) {
                    (x = Z.current = t),
                      Z.pointTo(Z),
                      G &&
                        g &&
                        !K &&
                        (k =
                          null === g || void 0 === g
                            ? void 0
                            : g.addVariantChild(Z)),
                      null === g || void 0 === g || g.children.add(Z);
                  },
                  unmount: function () {
                    Ln.eO.update(H),
                      Ln.eO.render(B),
                      Ln.eO.preRender(Z.updateLayoutProjection),
                      j.forEach(function (t) {
                        return t();
                      }),
                      Z.stopLayoutAnimation(),
                      Z.layoutTree.remove(Z),
                      null === k || void 0 === k || k(),
                      null === g || void 0 === g || g.children.delete(Z),
                      null === _ || void 0 === _ || _(),
                      O.clearAllListeners();
                  },
                  addVariantChild: function (t) {
                    var e,
                      n = Z.getClosestVariantNode();
                    if (n)
                      return (
                        null === (e = n.variantChildren) ||
                          void 0 === e ||
                          e.add(t),
                        function () {
                          return n.variantChildren.delete(t);
                        }
                      );
                  },
                  sortNodePosition: function (t) {
                    return f && n === t.treeType
                      ? f(Z.getInstance(), t.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return G
                      ? Z
                      : null === g || void 0 === g
                      ? void 0
                      : g.getClosestVariantNode();
                  },
                  scheduleUpdateLayoutProjection: g
                    ? g.scheduleUpdateLayoutProjection
                    : function () {
                        return Ln.Ay.preRender(
                          Z.updateTreeLayoutProjection,
                          !1,
                          !0
                        );
                      },
                  getLayoutId: function () {
                    return m.layoutId;
                  },
                  getInstance: function () {
                    return x;
                  },
                  getStaticValue: function (t) {
                    return P[t];
                  },
                  setStaticValue: function (t, e) {
                    return (P[t] = e);
                  },
                  getLatestValues: function () {
                    return P;
                  },
                  setVisibility: function (t) {
                    Z.isVisible !== t &&
                      ((Z.isVisible = t), Z.scheduleRender());
                  },
                  makeTargetAnimatable: function (t, e) {
                    return void 0 === e && (e = !0), s(Z, t, m, e);
                  },
                  addValue: function (t, e) {
                    Z.hasValue(t) && Z.removeValue(t),
                      I.set(t, e),
                      (P[t] = e.get()),
                      (function (t, e) {
                        var n = e.onChange(function (e) {
                            (P[t] = e), m.onUpdate && Ln.Ay.update(H, !1, !0);
                          }),
                          i = e.onRenderRequest(Z.scheduleRender);
                        j.set(t, function () {
                          n(), i();
                        });
                      })(t, e);
                  },
                  removeValue: function (t) {
                    var e;
                    I.delete(t),
                      null === (e = j.get(t)) || void 0 === e || e(),
                      j.delete(t),
                      delete P[t],
                      d(t, T);
                  },
                  hasValue: function (t) {
                    return I.has(t);
                  },
                  getValue: function (t, e) {
                    var n = I.get(t);
                    return (
                      void 0 === n &&
                        void 0 !== e &&
                        ((n = xi(e)), Z.addValue(t, n)),
                      n
                    );
                  },
                  forEachValue: function (t) {
                    return I.forEach(t);
                  },
                  readValue: function (t) {
                    var n;
                    return null !== (n = P[t]) && void 0 !== n ? n : c(x, t, e);
                  },
                  setBaseTarget: function (t, e) {
                    N[t] = e;
                  },
                  getBaseTarget: function (t) {
                    if (o) {
                      var e = o(m, t);
                      if (void 0 !== e && !Y(e)) return e;
                    }
                    return N[t];
                  },
                },
                O
              ),
              {
                build: function () {
                  return W(), T;
                },
                scheduleRender: function () {
                  Ln.Ay.render(B, !1, !0);
                },
                syncRender: B,
                setProps: function (t) {
                  (m = t),
                    O.updatePropListeners(t),
                    (z = (function (t, e, n) {
                      var i;
                      for (var r in e) {
                        var o = e[r],
                          s = n[r];
                        if (Y(o)) t.addValue(r, o);
                        else if (Y(s)) t.addValue(r, xi(o));
                        else if (s !== o)
                          if (t.hasValue(r)) {
                            var a = t.getValue(r);
                            !a.hasAnimated && a.set(o);
                          } else
                            t.addValue(
                              r,
                              xi(
                                null !== (i = t.getStaticValue(r)) &&
                                  void 0 !== i
                                  ? i
                                  : o
                              )
                            );
                      }
                      for (var r in n) void 0 === e[r] && t.removeValue(r);
                      return e;
                    })(Z, p(m), z));
                },
                getProps: function () {
                  return m;
                },
                getVariant: function (t) {
                  var e;
                  return null === (e = m.variants) || void 0 === e
                    ? void 0
                    : e[t];
                },
                getDefaultTransition: function () {
                  return m.transition;
                },
                getVariantContext: function (t) {
                  if ((void 0 === t && (t = !1), t))
                    return null === g || void 0 === g
                      ? void 0
                      : g.getVariantContext();
                  if (!K) {
                    var e =
                      (null === g || void 0 === g
                        ? void 0
                        : g.getVariantContext()) || {};
                    return void 0 !== m.initial && (e.initial = m.initial), e;
                  }
                  for (var n = {}, i = 0; i < uo; i++) {
                    var r = co[i],
                      o = m[r];
                    (A(o) || !1 === o) && (n[r] = o);
                  }
                  return n;
                },
                enableLayoutProjection: function () {
                  (D.isEnabled = !0), Z.layoutTree.add(Z);
                },
                lockProjectionTarget: function () {
                  D.isTargetLocked = !0;
                },
                unlockProjectionTarget: function () {
                  Z.stopLayoutAnimation(), (D.isTargetLocked = !1);
                },
                getLayoutState: function () {
                  return F;
                },
                setCrossfader: function (t) {
                  M = t;
                },
                isProjectionReady: function () {
                  return D.isEnabled && D.isHydrated && F.isHydrated;
                },
                startLayoutAnimation: function (t, e, n) {
                  void 0 === n && (n = !1);
                  var i = Z.getProjectionAnimationProgress()[t],
                    r = n ? D.relativeTarget[t] : D.target[t],
                    o = r.min,
                    s = r.max - o;
                  return (
                    i.clearListeners(),
                    i.set(o),
                    i.set(o),
                    i.onChange(function (e) {
                      Z.setProjectionTargetAxis(t, e, e + s, n);
                    }),
                    Z.animateMotionValue(t, i, 0, e)
                  );
                },
                stopLayoutAnimation: function () {
                  Ji(function (t) {
                    return Z.getProjectionAnimationProgress()[t].stop();
                  });
                },
                measureViewportBox: function (t) {
                  void 0 === t && (t = !0);
                  var n = a(x, e);
                  return t || Pr(n, P), n;
                },
                getProjectionAnimationProgress: function () {
                  return S || (S = { x: xi(0), y: xi(0) }), S;
                },
                setProjectionTargetAxis: function (t, e, n, i) {
                  var r;
                  void 0 === i && (i = !1),
                    i
                      ? (D.relativeTarget || (D.relativeTarget = (0, Zi.$Z)()),
                        (r = D.relativeTarget[t]))
                      : ((D.relativeTarget = void 0), (r = D.target[t])),
                    (D.isHydrated = !0),
                    (r.min = e),
                    (r.max = n),
                    (V = !0),
                    O.notifySetAxisTarget();
                },
                rebaseProjectionTarget: function (t, e) {
                  void 0 === e && (e = F.layout);
                  var n = Z.getProjectionAnimationProgress(),
                    i = n.x,
                    r = n.y,
                    o =
                      !D.relativeTarget &&
                      !D.isTargetLocked &&
                      !i.isAnimating() &&
                      !r.isAnimating();
                  (t || o) &&
                    Ji(function (t) {
                      var n = e[t],
                        i = n.min,
                        r = n.max;
                      Z.setProjectionTargetAxis(t, i, r);
                    });
                },
                notifyLayoutReady: function (t) {
                  !(function (t) {
                    var e = t.getProjectionParent();
                    if (e) {
                      var n = pr(
                        e.getLayoutState().layout,
                        t.getLayoutState().layout
                      );
                      Ji(function (e) {
                        t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0);
                      });
                    } else t.rebaseProjectionTarget();
                  })(Z),
                    Z.notifyLayoutUpdate(
                      F.layout,
                      Z.prevViewportBox || F.layout,
                      t
                    );
                },
                resetTransform: function () {
                  return u(Z, x, m);
                },
                restoreTransform: function () {
                  return h(x, T);
                },
                updateLayoutProjection: function () {
                  if (Z.isProjectionReady()) {
                    var t = F.delta,
                      e = F.treeScale,
                      n = e.x,
                      i = e.y,
                      r = F.deltaTransform;
                    no(F, R, Z.path, P),
                      V && Z.notifyViewportBoxUpdate(R.target, t),
                      (V = !1);
                    var o = Jr(t, e);
                    (o === r && n === e.x && i === e.y) || Z.scheduleRender(),
                      (F.deltaTransform = o);
                  }
                },
                updateTreeLayoutProjection: function () {
                  Z.layoutTree.forEach(so), Ln.Ay.preRender(U, !1, !0);
                },
                getProjectionParent: function () {
                  if (void 0 === w) {
                    for (var t = !1, e = Z.path.length - 1; e >= 0; e--) {
                      var n = Z.path[e];
                      if (n.projection.isEnabled) {
                        t = n;
                        break;
                      }
                    }
                    w = t;
                  }
                  return w;
                },
                resolveRelativeTargetBox: function () {
                  var t = Z.getProjectionParent();
                  if (
                    D.relativeTarget &&
                    t &&
                    ((function (t, e) {
                      hr(t.target.x, t.relativeTarget.x, e.target.x),
                        hr(t.target.y, t.relativeTarget.y, e.target.y);
                    })(D, t.projection),
                    gr(t))
                  ) {
                    var e = D.target;
                    Sr(e, e, t.getLatestValues());
                  }
                },
                shouldResetTransform: function () {
                  return Boolean(m._layoutResetTransform);
                },
                pointTo: function (t) {
                  (R = t.projection),
                    (L = t.getLatestValues()),
                    null === _ || void 0 === _ || _(),
                    (_ = me(
                      t.onSetAxisTarget(Z.scheduleUpdateLayoutProjection),
                      t.onLayoutAnimationComplete(function () {
                        var t;
                        Z.isPresent
                          ? (Z.presence = Lr.C.Present)
                          : null === (t = Z.layoutSafeToRemove) ||
                            void 0 === t ||
                            t.call(Z);
                      })
                    ));
                },
                isPresent: !0,
                presence: Lr.C.Entering,
              }
            );
          return Z;
        };
      };
      function so(t) {
        t.resolveRelativeTargetBox();
      }
      function ao(t) {
        t.updateLayoutProjection();
      }
      var lo,
        co = (0, i.fX)(["initial"], (0, i.zs)(Ri)),
        uo = co.length,
        ho = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        fo = function (t) {
          return ho.has(t);
        },
        po = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        go = function (t) {
          return t === lt || t === rt;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(lo || (lo = {}));
      var mo = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        vo = function (t, e) {
          return function (n, i) {
            var r = i.transform;
            if ("none" === r || !r) return 0;
            var o = r.match(/^matrix3d\((.+)\)$/);
            if (o) return mo(o[1], e);
            var s = r.match(/^matrix\((.+)\)$/);
            return s ? mo(s[1], t) : 0;
          };
        },
        yo = new Set(["x", "y", "z"]),
        bo = j.filter(function (t) {
          return !yo.has(t);
        });
      var xo = {
          width: function (t) {
            var e = t.x;
            return e.max - e.min;
          },
          height: function (t) {
            var e = t.y;
            return e.max - e.min;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              i = e.top;
            return parseFloat(i) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              i = e.left;
            return parseFloat(i) + (n.max - n.min);
          },
          x: vo(4, 13),
          y: vo(5, 14),
        },
        wo = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = (0, i.Cl)({}, e)),
            (r = (0, i.Cl)({}, r));
          var o = Object.keys(e).filter(fo),
            s = [],
            a = !1,
            l = [];
          if (
            (o.forEach(function (i) {
              var o = t.getValue(i);
              if (t.hasValue(i)) {
                var c,
                  u = n[i],
                  h = e[i],
                  d = Mi(u);
                if (jt(h))
                  for (var f = h.length, p = null === h[0] ? 1 : 0; p < f; p++)
                    c
                      ? xe(Mi(h[p]))
                      : ((c = Mi(h[p])), xe(c === d || (go(d) && go(c))));
                else c = Mi(h);
                if (d !== c)
                  if (go(d) && go(c)) {
                    var g = o.get();
                    "string" === typeof g && o.set(parseFloat(g)),
                      "string" === typeof h
                        ? (e[i] = parseFloat(h))
                        : Array.isArray(h) &&
                          c === rt &&
                          (e[i] = h.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === c || void 0 === c ? void 0 : c.transform) &&
                    (0 === u || 0 === h)
                      ? 0 === u
                        ? o.set(c.transform(u))
                        : (e[i] = d.transform(h))
                      : (a ||
                          ((s = (function (t) {
                            var e = [];
                            return (
                              bo.forEach(function (n) {
                                var i = t.getValue(n);
                                void 0 !== i &&
                                  (e.push([n, i.get()]),
                                  i.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (a = !0)),
                        l.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                        po(o, h));
              }
            }),
            l.length)
          ) {
            var c = (function (t, e, n) {
              var i = e.measureViewportBox(),
                r = e.getInstance(),
                o = getComputedStyle(r),
                s = o.display,
                a = {
                  top: o.top,
                  left: o.left,
                  bottom: o.bottom,
                  right: o.right,
                  transform: o.transform,
                };
              "none" === s && e.setStaticValue("display", t.display || "block"),
                e.syncRender();
              var l = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  po(r, xo[n](i, a)), (t[n] = xo[n](l, o));
                }),
                t
              );
            })(e, t, l);
            return (
              s.length &&
                s.forEach(function (e) {
                  var n = (0, i.zs)(e, 2),
                    r = n[0],
                    o = n[1];
                  t.getValue(r).set(o);
                }),
              t.syncRender(),
              { target: c, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function _o(t, e, n, i) {
        return (function (t) {
          return Object.keys(t).some(fo);
        })(e)
          ? wo(t, e, n, i)
          : { target: e, transitionEnd: i };
      }
      var Mo = function (t, e, n, r) {
        var o = (function (t, e, n) {
          var r,
            o = (0, i.Tt)(e, []),
            s = t.getInstance();
          if (!(s instanceof HTMLElement))
            return { target: o, transitionEnd: n };
          for (var a in (n && (n = (0, i.Cl)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Fr(e)) {
              var n = Ir(e, s);
              n && t.set(n);
            }
          }),
          o)) {
            var l = o[a];
            if (Fr(l)) {
              var c = Ir(l, s);
              c &&
                ((o[a] = c),
                n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = l)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, r);
        return _o(t, (e = o.target), n, (r = o.transitionEnd));
      };
      var So = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (B(e)) {
              var n = si(e);
              return (n && n.default) || 0;
            }
            var i,
              r = ((i = t), window.getComputedStyle(i));
            return (X(e) ? r.getPropertyValue(e) : r[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return rr(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var i = n.transformTemplate;
            (e.style.transform = i ? i({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              i = e.style;
            delete n[t], delete i[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var s = e.transition,
              a = e.transitionEnd,
              l = (0, i.Tt)(e, ["transition", "transitionEnd"]),
              c = (function (t, e, n) {
                var i,
                  r,
                  o = {};
                for (var s in t)
                  o[s] =
                    null !== (i = Ci(s, e)) && void 0 !== i
                      ? i
                      : null === (r = n.getValue(s)) || void 0 === r
                      ? void 0
                      : r.get();
                return o;
              })(l, s || {}, t);
            if ((o && (a && (a = o(a)), l && (l = o(l)), c && (c = o(c))), r)) {
              !(function (t, e, n) {
                var i,
                  r,
                  o,
                  s,
                  a = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  l = a.length;
                if (l)
                  for (var c = 0; c < l; c++) {
                    var u = a[c],
                      h = e[u],
                      d = null;
                    Array.isArray(h) && (d = h[0]),
                      null === d &&
                        (d =
                          null !==
                            (r =
                              null !== (i = n[u]) && void 0 !== i
                                ? i
                                : t.readValue(u)) && void 0 !== r
                            ? r
                            : e[u]),
                      void 0 !== d &&
                        null !== d &&
                        ("string" === typeof d && gi(d)
                          ? (d = parseFloat(d))
                          : !Ai(d) && Je.test(h) && (d = ai(u, h)),
                        t.addValue(u, xi(d)),
                        (null !== (o = (s = n)[u]) && void 0 !== o) ||
                          (s[u] = d),
                        t.setBaseTarget(u, d));
                  }
              })(t, l, c);
              var u = Mo(t, l, c, a);
              (a = u.transitionEnd), (l = u.target);
            }
            return (0, i.Cl)({ transition: s, transitionEnd: a }, l);
          },
          scrapeMotionValuesFromProps: Ft,
          build: function (t, e, n, i, r, o, s) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden");
            var a = i.isEnabled && r.isHydrated;
            ft(
              e,
              n,
              i,
              r,
              o,
              s.transformTemplate,
              a ? Jr : void 0,
              a ? Qr : void 0
            );
          },
          render: Dt,
        },
        Ao = oo(So),
        ko = oo(
          (0, i.Cl)((0, i.Cl)({}, So), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return B(e)
                ? (null === (n = si(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Rt.has(e) ? e : Ot(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Vt,
            build: function (t, e, n, i, r, o, s) {
              var a = i.isEnabled && r.isHydrated;
              kt(
                e,
                n,
                i,
                r,
                o,
                s.transformTemplate,
                a ? Jr : void 0,
                a ? Qr : void 0
              );
            },
            render: Lt,
          })
        ),
        Po = function (t, e) {
          return F(t)
            ? ko(e, { enableHardwareAcceleration: !1 })
            : Ao(e, { enableHardwareAcceleration: !0 });
        },
        Co = (0, i.Cl)((0, i.Cl)((0, i.Cl)((0, i.Cl)({}, zi), ye), Rr), Kr),
        Eo = R(function (t, e) {
          return (function (t, e, n, r) {
            var o = e.forwardMotionProps,
              s = void 0 !== o && o,
              a = F(t) ? Ut : qt;
            return (0,
            i.Cl)((0, i.Cl)({}, a), { preloadedFeatures: n, useRender: Et(s), createVisualElement: r, Component: t });
          })(t, e, Co, Po);
        });
    },
    1662: (t, e, n) => {
      "use strict";
      n.d(e, { c: () => o });
      var i = n(1844),
        r = n(8342);
      function o(t, e, n) {
        const [o, a] = (0, i.x)(
            null === n || void 0 === n ? void 0 : n.in,
            t,
            e
          ),
          l = s(o, a),
          c = Math.abs((0, r.m)(o, a));
        o.setDate(o.getDate() - l * c);
        const u = l * (c - Number(s(o, a) === -l));
        return 0 === u ? 0 : u;
      }
      function s(t, e) {
        const n =
          t.getFullYear() - e.getFullYear() ||
          t.getMonth() - e.getMonth() ||
          t.getDate() - e.getDate() ||
          t.getHours() - e.getHours() ||
          t.getMinutes() - e.getMinutes() ||
          t.getSeconds() - e.getSeconds() ||
          t.getMilliseconds() - e.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n;
      }
    },
    1844: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => r });
      var i = n(2440);
      function r(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        const o = i.w.bind(null, t || n.find((t) => "object" === typeof t));
        return n.map(o);
      }
    },
    2085: (t, e, n) => {
      "use strict";
      n.d(e, {
        $Z: () => l,
        Wy: () => s,
        MM: () => o,
        YM: () => c,
        pU: () => h,
        YT: () => a,
      });
      var i = n(6326);
      function r(t) {
        return t;
      }
      function o(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function s(t) {
        var e = t.x,
          n = t.y;
        return { top: n.min, bottom: n.max, left: e.min, right: e.max };
      }
      function a(t, e) {
        var n = t.top,
          i = t.left,
          o = t.bottom,
          s = t.right;
        void 0 === e && (e = r);
        var a = e({ x: i, y: n }),
          l = e({ x: s, y: o });
        return { top: a.y, left: a.x, bottom: l.y, right: l.x };
      }
      function l() {
        return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
      }
      function c(t) {
        return { x: (0, i.Cl)({}, t.x), y: (0, i.Cl)({}, t.y) };
      }
      var u = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function h() {
        return { x: (0, i.Cl)({}, u), y: (0, i.Cl)({}, u) };
      }
    },
    2316: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => r });
      var i = n(2440);
      function r(t, e) {
        return (0, i.w)(e || t, t);
      }
    },
    2440: (t, e, n) => {
      "use strict";
      n.d(e, { w: () => r });
      var i = n(4524);
      function r(t, e) {
        return "function" === typeof t
          ? t(e)
          : t && "object" === typeof t && i._P in t
          ? t[i._P](e)
          : t instanceof Date
          ? new t.constructor(e)
          : new Date(e);
      }
    },
    3532: (t, e, n) => {
      "use strict";
      n.d(e, { t: () => i });
      var i = (0, n(5043).createContext)(null);
    },
    3576: (t, e, n) => {
      "use strict";
      n.d(e, { N: () => p });
      var i = n(6326),
        r = n(5043),
        o = n(4768);
      var s = n(3532),
        a = n(1306),
        l = 0;
      function c() {
        var t = l;
        return l++, t;
      }
      var u = function (t) {
        var e = t.children,
          n = t.initial,
          i = t.isPresent,
          o = t.onExitComplete,
          l = t.custom,
          u = t.presenceAffectsLayout,
          d = (0, a.M)(h),
          f = (0, a.M)(c),
          p = (0, r.useMemo)(
            function () {
              return {
                id: f,
                initial: n,
                isPresent: i,
                custom: l,
                onExitComplete: function (t) {
                  d.set(t, !0);
                  var e = !0;
                  d.forEach(function (t) {
                    t || (e = !1);
                  }),
                    e && (null === o || void 0 === o || o());
                },
                register: function (t) {
                  return (
                    d.set(t, !1),
                    function () {
                      return d.delete(t);
                    }
                  );
                },
              };
            },
            u ? void 0 : [i]
          );
        return (
          (0, r.useMemo)(
            function () {
              d.forEach(function (t, e) {
                return d.set(e, !1);
              });
            },
            [i]
          ),
          r.useEffect(
            function () {
              !i && !d.size && (null === o || void 0 === o || o());
            },
            [i]
          ),
          r.createElement(s.t.Provider, { value: p }, e)
        );
      };
      function h() {
        return new Map();
      }
      var d = n(4827);
      function f(t) {
        return t.key || "";
      }
      var p = function (t) {
        var e = t.children,
          n = t.custom,
          s = t.initial,
          a = void 0 === s || s,
          l = t.onExitComplete,
          c = t.exitBeforeEnter,
          h = t.presenceAffectsLayout,
          p = void 0 === h || h,
          g = (function () {
            var t = (0, r.useRef)(!1),
              e = (0, i.zs)((0, r.useState)(0), 2),
              n = e[0],
              s = e[1];
            return (
              (0, o.l)(function () {
                return (t.current = !0);
              }),
              (0, r.useCallback)(
                function () {
                  !t.current && s(n + 1);
                },
                [n]
              )
            );
          })(),
          m = (0, r.useContext)(d.R2);
        (0, d.mt)(m) && (g = m.forceUpdate);
        var v = (0, r.useRef)(!0),
          y = (function (t) {
            var e = [];
            return (
              r.Children.forEach(t, function (t) {
                (0, r.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          b = (0, r.useRef)(y),
          x = (0, r.useRef)(new Map()).current,
          w = (0, r.useRef)(new Set()).current;
        if (
          ((function (t, e) {
            t.forEach(function (t) {
              var n = f(t);
              e.set(n, t);
            });
          })(y, x),
          v.current)
        )
          return (
            (v.current = !1),
            r.createElement(
              r.Fragment,
              null,
              y.map(function (t) {
                return r.createElement(
                  u,
                  {
                    key: f(t),
                    isPresent: !0,
                    initial: !!a && void 0,
                    presenceAffectsLayout: p,
                  },
                  t
                );
              })
            )
          );
        for (
          var _ = (0, i.fX)([], (0, i.zs)(y)),
            M = b.current.map(f),
            S = y.map(f),
            A = M.length,
            k = 0;
          k < A;
          k++
        ) {
          var P = M[k];
          -1 === S.indexOf(P) ? w.add(P) : w.delete(P);
        }
        return (
          c && w.size && (_ = []),
          w.forEach(function (t) {
            if (-1 === S.indexOf(t)) {
              var e = x.get(t);
              if (e) {
                var i = M.indexOf(t);
                _.splice(
                  i,
                  0,
                  r.createElement(
                    u,
                    {
                      key: f(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        x.delete(t), w.delete(t);
                        var e = b.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        b.current.splice(e, 1),
                          w.size || ((b.current = y), g(), l && l());
                      },
                      custom: n,
                      presenceAffectsLayout: p,
                    },
                    e
                  )
                );
              }
            }
          }),
          (_ = _.map(function (t) {
            var e = t.key;
            return w.has(e)
              ? t
              : r.createElement(
                  u,
                  { key: f(t), isPresent: !0, presenceAffectsLayout: p },
                  t
                );
          })),
          (b.current = _),
          r.createElement(
            r.Fragment,
            null,
            w.size
              ? _
              : _.map(function (t) {
                  return (0, r.cloneElement)(t);
                })
          )
        );
      };
    },
    4524: (t, e, n) => {
      "use strict";
      n.d(e, {
        Cg: () => o,
        _P: () => a,
        my: () => i,
        s0: () => s,
        w4: () => r,
      });
      Math.pow(10, 8);
      const i = 6048e5,
        r = 864e5,
        o = 6e4,
        s = 36e5,
        a = Symbol.for("constructDateFrom");
    },
    4653: (t, e, n) => {
      "use strict";
      n.d(e, { H: () => s });
      var i = n(4524),
        r = n(2440),
        o = n(2316);
      function s(t, e) {
        var n;
        const s = () =>
            (0, r.w)(null === e || void 0 === e ? void 0 : e.in, NaN),
          g =
            null !==
              (n = null === e || void 0 === e ? void 0 : e.additionalDigits) &&
            void 0 !== n
              ? n
              : 2,
          m = (function (t) {
            const e = {},
              n = t.split(a.dateTimeDelimiter);
            let i;
            if (n.length > 2) return e;
            /:/.test(n[0])
              ? (i = n[0])
              : ((e.date = n[0]),
                (i = n[1]),
                a.timeZoneDelimiter.test(e.date) &&
                  ((e.date = t.split(a.timeZoneDelimiter)[0]),
                  (i = t.substr(e.date.length, t.length))));
            if (i) {
              const t = a.timezone.exec(i);
              t
                ? ((e.time = i.replace(t[1], "")), (e.timezone = t[1]))
                : (e.time = i);
            }
            return e;
          })(t);
        let v;
        if (m.date) {
          const t = (function (t, e) {
            const n = new RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + e) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + e) +
                  "})$)"
              ),
              i = t.match(n);
            if (!i) return { year: NaN, restDateString: "" };
            const r = i[1] ? parseInt(i[1]) : null,
              o = i[2] ? parseInt(i[2]) : null;
            return {
              year: null === o ? r : 100 * o,
              restDateString: t.slice((i[1] || i[2]).length),
            };
          })(m.date, g);
          v = (function (t, e) {
            if (null === e) return new Date(NaN);
            const n = t.match(l);
            if (!n) return new Date(NaN);
            const i = !!n[4],
              r = h(n[1]),
              o = h(n[2]) - 1,
              s = h(n[3]),
              a = h(n[4]),
              c = h(n[5]) - 1;
            if (i)
              return (function (t, e, n) {
                return e >= 1 && e <= 53 && n >= 0 && n <= 6;
              })(0, a, c)
                ? (function (t, e, n) {
                    const i = new Date(0);
                    i.setUTCFullYear(t, 0, 4);
                    const r = i.getUTCDay() || 7,
                      o = 7 * (e - 1) + n + 1 - r;
                    return i.setUTCDate(i.getUTCDate() + o), i;
                  })(e, a, c)
                : new Date(NaN);
            {
              const t = new Date(0);
              return (function (t, e, n) {
                return (
                  e >= 0 && e <= 11 && n >= 1 && n <= (f[e] || (p(t) ? 29 : 28))
                );
              })(e, o, s) &&
                (function (t, e) {
                  return e >= 1 && e <= (p(t) ? 366 : 365);
                })(e, r)
                ? (t.setUTCFullYear(e, o, Math.max(r, s)), t)
                : new Date(NaN);
            }
          })(t.restDateString, t.year);
        }
        if (!v || isNaN(+v)) return s();
        const y = +v;
        let b,
          x = 0;
        if (
          m.time &&
          ((x = (function (t) {
            const e = t.match(c);
            if (!e) return NaN;
            const n = d(e[1]),
              r = d(e[2]),
              o = d(e[3]);
            if (
              !(function (t, e, n) {
                if (24 === t) return 0 === e && 0 === n;
                return n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
              })(n, r, o)
            )
              return NaN;
            return n * i.s0 + r * i.Cg + 1e3 * o;
          })(m.time)),
          isNaN(x))
        )
          return s();
        if (!m.timezone) {
          const t = new Date(y + x),
            n = (0, o.a)(0, null === e || void 0 === e ? void 0 : e.in);
          return (
            n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
            n.setHours(
              t.getUTCHours(),
              t.getUTCMinutes(),
              t.getUTCSeconds(),
              t.getUTCMilliseconds()
            ),
            n
          );
        }
        return (
          (b = (function (t) {
            if ("Z" === t) return 0;
            const e = t.match(u);
            if (!e) return 0;
            const n = "+" === e[1] ? -1 : 1,
              r = parseInt(e[2]),
              o = (e[3] && parseInt(e[3])) || 0;
            if (
              !(function (t, e) {
                return e >= 0 && e <= 59;
              })(0, o)
            )
              return NaN;
            return n * (r * i.s0 + o * i.Cg);
          })(m.timezone)),
          isNaN(b)
            ? s()
            : (0, o.a)(y + x + b, null === e || void 0 === e ? void 0 : e.in)
        );
      }
      const a = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        c = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        u = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function h(t) {
        return t ? parseInt(t) : 1;
      }
      function d(t) {
        return (t && parseFloat(t.replace(",", "."))) || 0;
      }
      const f = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function p(t) {
        return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
      }
    },
    4768: (t, e, n) => {
      "use strict";
      n.d(e, { l: () => r });
      var i = n(5043);
      function r(t) {
        return (0, i.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    4827: (t, e, n) => {
      "use strict";
      n.d(e, { vR: () => p, R2: () => f, mt: () => g });
      var i = n(5043),
        r = n(6326),
        o = n(6388),
        s = n(5195),
        a = n(6343),
        l = n(8916),
        c = n(8011),
        u = {
          layoutReady: function (t) {
            return t.notifyLayoutReady();
          },
        };
      function h() {
        var t = new Set();
        return {
          add: function (e) {
            return t.add(e);
          },
          flush: function (e) {
            var n = void 0 === e ? u : e,
              i = n.layoutReady,
              h = n.parent;
            (0, a.V)(function (e, n) {
              var a = Array.from(t).sort(l.u),
                u = h ? (0, s.kP)(h) : [];
              n(function () {
                (0, r.fX)((0, r.fX)([], (0, r.zs)(u)), (0, r.zs)(a)).forEach(
                  function (t) {
                    return t.resetTransform();
                  }
                );
              }),
                e(function () {
                  a.forEach(s.QS);
                }),
                n(function () {
                  u.forEach(function (t) {
                    return t.restoreTransform();
                  }),
                    a.forEach(i);
                }),
                e(function () {
                  a.forEach(function (t) {
                    t.isPresent && (t.presence = c.C.Present);
                  });
                }),
                n(function () {
                  o.qX.preRender(), o.qX.render();
                }),
                e(function () {
                  o.Ay.postRender(function () {
                    return a.forEach(d);
                  }),
                    t.clear();
                });
            }),
              (0, a.L)();
          },
        };
      }
      function d(t) {
        t.prevViewportBox = t.projection.target;
      }
      var f = (0, i.createContext)(h()),
        p = (0, i.createContext)(h());
      function g(t) {
        return !!t.forceUpdate;
      }
    },
    5195: (t, e, n) => {
      "use strict";
      n.d(e, { AV: () => u, QS: () => c, kP: () => a, nP: () => l });
      var i = n(6388),
        r = n(2085),
        o = n(8916);
      function s(t) {
        return t.projection.isEnabled || t.shouldResetTransform();
      }
      function a(t, e) {
        void 0 === e && (e = []);
        var n = t.parent;
        return n && a(n, e), s(t) && e.push(t), e;
      }
      function l(t) {
        var e = [],
          n = function (t) {
            s(t) && e.push(t), t.children.forEach(n);
          };
        return t.children.forEach(n), e.sort(o.u);
      }
      function c(t) {
        if (!t.shouldResetTransform()) {
          var e = t.getLayoutState();
          t.notifyBeforeLayoutMeasure(e.layout),
            (e.isHydrated = !0),
            (e.layout = t.measureViewportBox()),
            (e.layoutCorrected = (0, r.YM)(e.layout)),
            t.notifyLayoutMeasure(e.layout, t.prevViewportBox || e.layout),
            i.Ay.update(function () {
              return t.rebaseProjectionTarget();
            });
        }
      }
      function u(t) {
        t.shouldResetTransform() ||
          ((t.prevViewportBox = t.measureViewportBox(!1)),
          t.rebaseProjectionTarget(!1, t.prevViewportBox));
      }
    },
    5751: (t, e, n) => {
      "use strict";
      var i = n(5043),
        r = n(7870);
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                l(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == typeof e ? e : String(e);
      }
      function l(t, e, n) {
        return (
          (e = a(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          i,
          r = (function (t, e) {
            if (null == t) return {};
            var n,
              i,
              r = {},
              o = Object.keys(t);
            for (i = 0; i < o.length; i++)
              (n = o[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (r[n] = t[n]));
        }
        return r;
      }
      function h(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var i,
                r,
                o,
                s,
                a = [],
                l = !0,
                c = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = o.call(n)).done) &&
                    (a.push(i.value), a.length !== e);
                    l = !0
                  );
              } catch (t) {
                (c = !0), (r = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((s = n.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return a;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var f =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? i.useLayoutEffect
          : i.useEffect;
      function p(t) {
        var e = i.useRef(t);
        return (
          f(function () {
            e.current = t;
          }),
          i.useCallback(function () {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            return e.current.apply(void 0, n);
          }, [])
        );
      }
      var g = [
          "ref",
          "startOnMount",
          "enableReinitialize",
          "delay",
          "onEnd",
          "onStart",
          "onPauseResume",
          "onReset",
          "onUpdate",
        ],
        m = {
          decimal: ".",
          separator: ",",
          delay: null,
          prefix: "",
          suffix: "",
          duration: 2,
          start: 0,
          decimals: 0,
          startOnMount: !0,
          enableReinitialize: !0,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
        },
        v = function (t) {
          var e = Object.fromEntries(
              Object.entries(t).filter(function (t) {
                return void 0 !== h(t, 2)[1];
              })
            ),
            n = i.useMemo(
              function () {
                return s(s({}, m), e);
              },
              [t]
            ),
            o = n.ref,
            a = n.startOnMount,
            l = n.enableReinitialize,
            c = n.delay,
            d = n.onEnd,
            f = n.onStart,
            v = n.onPauseResume,
            y = n.onReset,
            b = n.onUpdate,
            x = u(n, g),
            w = i.useRef(),
            _ = i.useRef(),
            M = i.useRef(!1),
            S = p(function () {
              return (function (t, e) {
                var n = e.decimal,
                  i = e.decimals,
                  o = e.duration,
                  s = e.easingFn,
                  a = e.end,
                  l = e.formattingFn,
                  c = e.numerals,
                  u = e.prefix,
                  h = e.separator,
                  d = e.start,
                  f = e.suffix,
                  p = e.useEasing,
                  g = e.useGrouping,
                  m = e.useIndianSeparators,
                  v = e.enableScrollSpy,
                  y = e.scrollSpyDelay,
                  b = e.scrollSpyOnce,
                  x = e.plugin;
                return new r.CountUp(t, a, {
                  startVal: d,
                  duration: o,
                  decimal: n,
                  decimalPlaces: i,
                  easingFn: s,
                  formattingFn: l,
                  numerals: c,
                  separator: h,
                  prefix: u,
                  suffix: f,
                  plugin: x,
                  useEasing: p,
                  useIndianSeparators: m,
                  useGrouping: g,
                  enableScrollSpy: v,
                  scrollSpyDelay: y,
                  scrollSpyOnce: b,
                });
              })("string" === typeof o ? o : o.current, x);
            }),
            A = p(function (t) {
              var e = w.current;
              if (e && !t) return e;
              var n = S();
              return (w.current = n), n;
            }),
            k = p(function () {
              var t = function () {
                return A(!0).start(function () {
                  null === d ||
                    void 0 === d ||
                    d({ pauseResume: P, reset: C, start: T, update: E });
                });
              };
              c && c > 0 ? (_.current = setTimeout(t, 1e3 * c)) : t(),
                null === f ||
                  void 0 === f ||
                  f({ pauseResume: P, reset: C, update: E });
            }),
            P = p(function () {
              A().pauseResume(),
                null === v ||
                  void 0 === v ||
                  v({ reset: C, start: T, update: E });
            }),
            C = p(function () {
              A().el &&
                (_.current && clearTimeout(_.current),
                A().reset(),
                null === y ||
                  void 0 === y ||
                  y({ pauseResume: P, start: T, update: E }));
            }),
            E = p(function (t) {
              A().update(t),
                null === b ||
                  void 0 === b ||
                  b({ pauseResume: P, reset: C, start: T });
            }),
            T = p(function () {
              C(), k();
            }),
            O = p(function (t) {
              a && (t && C(), k());
            });
          return (
            i.useEffect(
              function () {
                M.current ? l && O(!0) : ((M.current = !0), O());
              },
              [
                l,
                M,
                O,
                c,
                t.start,
                t.suffix,
                t.prefix,
                t.duration,
                t.separator,
                t.decimals,
                t.decimal,
                t.formattingFn,
              ]
            ),
            i.useEffect(
              function () {
                return function () {
                  C();
                };
              },
              [C]
            ),
            { start: T, pauseResume: P, reset: C, update: E, getCountUp: A }
          );
        },
        y = ["className", "redraw", "containerProps", "children", "style"];
      e.Ay = function (t) {
        var e = t.className,
          n = t.redraw,
          r = t.containerProps,
          o = t.children,
          a = t.style,
          l = u(t, y),
          h = i.useRef(null),
          d = i.useRef(!1),
          f = v(
            s(
              s({}, l),
              {},
              {
                ref: h,
                startOnMount: "function" !== typeof o || 0 === t.delay,
                enableReinitialize: !1,
              }
            )
          ),
          g = f.start,
          m = f.reset,
          b = f.update,
          x = f.pauseResume,
          w = f.getCountUp,
          _ = p(function () {
            g();
          }),
          M = p(function (e) {
            t.preserveValue || m(), b(e);
          }),
          S = p(function () {
            "function" !== typeof t.children || h.current instanceof Element
              ? w()
              : console.error(
                  'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
                );
          });
        i.useEffect(
          function () {
            S();
          },
          [S]
        ),
          i.useEffect(
            function () {
              d.current && M(t.end);
            },
            [t.end, M]
          );
        var A = n && t;
        return (
          i.useEffect(
            function () {
              n && d.current && _();
            },
            [_, n, A]
          ),
          i.useEffect(
            function () {
              !n && d.current && _();
            },
            [
              _,
              n,
              t.start,
              t.suffix,
              t.prefix,
              t.duration,
              t.separator,
              t.decimals,
              t.decimal,
              t.className,
              t.formattingFn,
            ]
          ),
          i.useEffect(function () {
            d.current = !0;
          }, []),
          "function" === typeof o
            ? o({
                countUpRef: h,
                start: g,
                reset: m,
                update: b,
                pauseResume: x,
                getCountUp: w,
              })
            : i.createElement(
                "span",
                c({ className: e, ref: h, style: a }, r),
                "undefined" !== typeof t.start ? w().formattingFn(t.start) : ""
              )
        );
      };
    },
    6263: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => ke });
      var i = {};
      function r(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      n.r(i),
        n.d(i, {
          hasBrowserEnv: () => ut,
          hasStandardBrowserEnv: () => dt,
          hasStandardBrowserWebWorkerEnv: () => ft,
          navigator: () => ht,
          origin: () => pt,
        });
      const { toString: o } = Object.prototype,
        { getPrototypeOf: s } = Object,
        { iterator: a, toStringTag: l } = Symbol,
        c =
          ((u = Object.create(null)),
          (t) => {
            const e = o.call(t);
            return u[e] || (u[e] = e.slice(8, -1).toLowerCase());
          });
      var u;
      const h = (t) => ((t = t.toLowerCase()), (e) => c(e) === t),
        d = (t) => (e) => typeof e === t,
        { isArray: f } = Array,
        p = d("undefined");
      function g(t) {
        return (
          null !== t &&
          !p(t) &&
          null !== t.constructor &&
          !p(t.constructor) &&
          y(t.constructor.isBuffer) &&
          t.constructor.isBuffer(t)
        );
      }
      const m = h("ArrayBuffer");
      const v = d("string"),
        y = d("function"),
        b = d("number"),
        x = (t) => null !== t && "object" === typeof t,
        w = (t) => {
          if ("object" !== c(t)) return !1;
          const e = s(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            !(l in t) &&
            !(a in t)
          );
        },
        _ = h("Date"),
        M = h("File"),
        S = h("Blob"),
        A = h("FileList"),
        k = h("URLSearchParams"),
        [P, C, E, T] = ["ReadableStream", "Request", "Response", "Headers"].map(
          h
        );
      function O(t, e) {
        let n,
          i,
          { allOwnKeys: r = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== t && "undefined" !== typeof t)
          if (("object" !== typeof t && (t = [t]), f(t)))
            for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
          else {
            if (g(t)) return;
            const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
              o = i.length;
            let s;
            for (n = 0; n < o; n++) (s = i[n]), e.call(null, t[s], s, t);
          }
      }
      function D(t, e) {
        if (g(t)) return null;
        e = e.toLowerCase();
        const n = Object.keys(t);
        let i,
          r = n.length;
        for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
        return null;
      }
      const R =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        L = (t) => !p(t) && t !== R;
      const F =
        ((V = "undefined" !== typeof Uint8Array && s(Uint8Array)),
        (t) => V && t instanceof V);
      var V;
      const I = h("HTMLFormElement"),
        j = ((t) => {
          let { hasOwnProperty: e } = t;
          return (t, n) => e.call(t, n);
        })(Object.prototype),
        z = h("RegExp"),
        N = (t, e) => {
          const n = Object.getOwnPropertyDescriptors(t),
            i = {};
          O(n, (n, r) => {
            let o;
            !1 !== (o = e(n, r, t)) && (i[r] = o || n);
          }),
            Object.defineProperties(t, i);
        };
      const B = h("AsyncFunction"),
        W = ((t, e) => {
          return t
            ? setImmediate
            : e
            ? ((n = "axios@".concat(Math.random())),
              (i = []),
              R.addEventListener(
                "message",
                (t) => {
                  let { source: e, data: r } = t;
                  e === R && r === n && i.length && i.shift()();
                },
                !1
              ),
              (t) => {
                i.push(t), R.postMessage(n, "*");
              })
            : (t) => setTimeout(t);
          var n, i;
        })("function" === typeof setImmediate, y(R.postMessage)),
        H =
          "undefined" !== typeof queueMicrotask
            ? queueMicrotask.bind(R)
            : ("undefined" !== typeof process && process.nextTick) || W,
        U = {
          isArray: f,
          isArrayBuffer: m,
          isBuffer: g,
          isFormData: (t) => {
            let e;
            return (
              t &&
              (("function" === typeof FormData && t instanceof FormData) ||
                (y(t.append) &&
                  ("formdata" === (e = c(t)) ||
                    ("object" === e &&
                      y(t.toString) &&
                      "[object FormData]" === t.toString()))))
            );
          },
          isArrayBufferView: function (t) {
            let e;
            return (
              (e =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t && t.buffer && m(t.buffer)),
              e
            );
          },
          isString: v,
          isNumber: b,
          isBoolean: (t) => !0 === t || !1 === t,
          isObject: x,
          isPlainObject: w,
          isEmptyObject: (t) => {
            if (!x(t) || g(t)) return !1;
            try {
              return (
                0 === Object.keys(t).length &&
                Object.getPrototypeOf(t) === Object.prototype
              );
            } catch (e) {
              return !1;
            }
          },
          isReadableStream: P,
          isRequest: C,
          isResponse: E,
          isHeaders: T,
          isUndefined: p,
          isDate: _,
          isFile: M,
          isBlob: S,
          isRegExp: z,
          isFunction: y,
          isStream: (t) => x(t) && y(t.pipe),
          isURLSearchParams: k,
          isTypedArray: F,
          isFileList: A,
          forEach: O,
          merge: function t() {
            const { caseless: e, skipUndefined: n } = (L(this) && this) || {},
              i = {},
              r = (r, o) => {
                const s = (e && D(i, o)) || o;
                w(i[s]) && w(r)
                  ? (i[s] = t(i[s], r))
                  : w(r)
                  ? (i[s] = t({}, r))
                  : f(r)
                  ? (i[s] = r.slice())
                  : (n && p(r)) || (i[s] = r);
              };
            for (let o = 0, s = arguments.length; o < s; o++)
              arguments[o] && O(arguments[o], r);
            return i;
          },
          extend: function (t, e, n) {
            let { allOwnKeys: i } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              O(
                e,
                (e, i) => {
                  n && y(e) ? (t[i] = r(e, n)) : (t[i] = e);
                },
                { allOwnKeys: i }
              ),
              t
            );
          },
          trim: (t) =>
            t.trim
              ? t.trim()
              : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
          inherits: (t, e, n, i) => {
            (t.prototype = Object.create(e.prototype, i)),
              (t.prototype.constructor = t),
              Object.defineProperty(t, "super", { value: e.prototype }),
              n && Object.assign(t.prototype, n);
          },
          toFlatObject: (t, e, n, i) => {
            let r, o, a;
            const l = {};
            if (((e = e || {}), null == t)) return e;
            do {
              for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0; )
                (a = r[o]),
                  (i && !i(a, t, e)) || l[a] || ((e[a] = t[a]), (l[a] = !0));
              t = !1 !== n && s(t);
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e;
          },
          kindOf: c,
          kindOfTest: h,
          endsWith: (t, e, n) => {
            (t = String(t)),
              (void 0 === n || n > t.length) && (n = t.length),
              (n -= e.length);
            const i = t.indexOf(e, n);
            return -1 !== i && i === n;
          },
          toArray: (t) => {
            if (!t) return null;
            if (f(t)) return t;
            let e = t.length;
            if (!b(e)) return null;
            const n = new Array(e);
            for (; e-- > 0; ) n[e] = t[e];
            return n;
          },
          forEachEntry: (t, e) => {
            const n = (t && t[a]).call(t);
            let i;
            for (; (i = n.next()) && !i.done; ) {
              const n = i.value;
              e.call(t, n[0], n[1]);
            }
          },
          matchAll: (t, e) => {
            let n;
            const i = [];
            for (; null !== (n = t.exec(e)); ) i.push(n);
            return i;
          },
          isHTMLForm: I,
          hasOwnProperty: j,
          hasOwnProp: j,
          reduceDescriptors: N,
          freezeMethods: (t) => {
            N(t, (e, n) => {
              if (y(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const i = t[n];
              y(i) &&
                ((e.enumerable = !1),
                "writable" in e
                  ? (e.writable = !1)
                  : e.set ||
                    (e.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (t, e) => {
            const n = {},
              i = (t) => {
                t.forEach((t) => {
                  n[t] = !0;
                });
              };
            return f(t) ? i(t) : i(String(t).split(e)), n;
          },
          toCamelCase: (t) =>
            t
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
                return e.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (t, e) =>
            null != t && Number.isFinite((t = +t)) ? t : e,
          findKey: D,
          global: R,
          isContextDefined: L,
          isSpecCompliantForm: function (t) {
            return !!(t && y(t.append) && "FormData" === t[l] && t[a]);
          },
          toJSONObject: (t) => {
            const e = new Array(10),
              n = (t, i) => {
                if (x(t)) {
                  if (e.indexOf(t) >= 0) return;
                  if (g(t)) return t;
                  if (!("toJSON" in t)) {
                    e[i] = t;
                    const r = f(t) ? [] : {};
                    return (
                      O(t, (t, e) => {
                        const o = n(t, i + 1);
                        !p(o) && (r[e] = o);
                      }),
                      (e[i] = void 0),
                      r
                    );
                  }
                }
                return t;
              };
            return n(t, 0);
          },
          isAsyncFn: B,
          isThenable: (t) => t && (x(t) || y(t)) && y(t.then) && y(t.catch),
          setImmediate: W,
          asap: H,
          isIterable: (t) => null != t && y(t[a]),
        };
      function Y(t, e, n, i, r) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          n && (this.config = n),
          i && (this.request = i),
          r &&
            ((this.response = r), (this.status = r.status ? r.status : null));
      }
      U.inherits(Y, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      const q = Y.prototype,
        X = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        X[t] = { value: t };
      }),
        Object.defineProperties(Y, X),
        Object.defineProperty(q, "isAxiosError", { value: !0 }),
        (Y.from = (t, e, n, i, r, o) => {
          const s = Object.create(q);
          U.toFlatObject(
            t,
            s,
            function (t) {
              return t !== Error.prototype;
            },
            (t) => "isAxiosError" !== t
          );
          const a = t && t.message ? t.message : "Error",
            l = null == e && t ? t.code : e;
          return (
            Y.call(s, a, l, n, i, r),
            t &&
              null == s.cause &&
              Object.defineProperty(s, "cause", { value: t, configurable: !0 }),
            (s.name = (t && t.name) || "Error"),
            o && Object.assign(s, o),
            s
          );
        });
      const $ = Y;
      function K(t) {
        return U.isPlainObject(t) || U.isArray(t);
      }
      function G(t) {
        return U.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function Z(t, e, n) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = G(t)), !n && e ? "[" + t + "]" : t;
              })
              .join(n ? "." : "")
          : e;
      }
      const J = U.toFlatObject(U, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      });
      const Q = function (t, e, n) {
        if (!U.isObject(t)) throw new TypeError("target must be an object");
        e = e || new FormData();
        const i = (n = U.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !U.isUndefined(e[t]);
            }
          )).metaTokens,
          r = n.visitor || c,
          o = n.dots,
          s = n.indexes,
          a =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            U.isSpecCompliantForm(e);
        if (!U.isFunction(r)) throw new TypeError("visitor must be a function");
        function l(t) {
          if (null === t) return "";
          if (U.isDate(t)) return t.toISOString();
          if (U.isBoolean(t)) return t.toString();
          if (!a && U.isBlob(t))
            throw new $("Blob is not supported. Use a Buffer instead.");
          return U.isArrayBuffer(t) || U.isTypedArray(t)
            ? a && "function" === typeof Blob
              ? new Blob([t])
              : Buffer.from(t)
            : t;
        }
        function c(t, n, r) {
          let a = t;
          if (t && !r && "object" === typeof t)
            if (U.endsWith(n, "{}"))
              (n = i ? n : n.slice(0, -2)), (t = JSON.stringify(t));
            else if (
              (U.isArray(t) &&
                (function (t) {
                  return U.isArray(t) && !t.some(K);
                })(t)) ||
              ((U.isFileList(t) || U.endsWith(n, "[]")) && (a = U.toArray(t)))
            )
              return (
                (n = G(n)),
                a.forEach(function (t, i) {
                  !U.isUndefined(t) &&
                    null !== t &&
                    e.append(
                      !0 === s ? Z([n], i, o) : null === s ? n : n + "[]",
                      l(t)
                    );
                }),
                !1
              );
          return !!K(t) || (e.append(Z(r, n, o), l(t)), !1);
        }
        const u = [],
          h = Object.assign(J, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: K,
          });
        if (!U.isObject(t)) throw new TypeError("data must be an object");
        return (
          (function t(n, i) {
            if (!U.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + i.join("."));
              u.push(n),
                U.forEach(n, function (n, o) {
                  !0 ===
                    (!(U.isUndefined(n) || null === n) &&
                      r.call(e, n, U.isString(o) ? o.trim() : o, i, h)) &&
                    t(n, i ? i.concat(o) : [o]);
                }),
                u.pop();
            }
          })(t),
          e
        );
      };
      function tt(t) {
        const e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function et(t, e) {
        (this._pairs = []), t && Q(t, this, e);
      }
      const nt = et.prototype;
      (nt.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (nt.toString = function (t) {
          const e = t
            ? function (e) {
                return t.call(this, e, tt);
              }
            : tt;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      const it = et;
      function rt(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+");
      }
      function ot(t, e, n) {
        if (!e) return t;
        const i = (n && n.encode) || rt;
        U.isFunction(n) && (n = { serialize: n });
        const r = n && n.serialize;
        let o;
        if (
          ((o = r
            ? r(e, n)
            : U.isURLSearchParams(e)
            ? e.toString()
            : new it(e, n).toString(i)),
          o)
        ) {
          const e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + o);
        }
        return t;
      }
      const st = class {
          constructor() {
            this.handlers = [];
          }
          use(t, e, n) {
            return (
              this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(t) {
            this.handlers[t] && (this.handlers[t] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(t) {
            U.forEach(this.handlers, function (e) {
              null !== e && t(e);
            });
          }
        },
        at = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      var lt = n(9379);
      const ct = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : it,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ut = "undefined" !== typeof window && "undefined" !== typeof document,
        ht = ("object" === typeof navigator && navigator) || void 0,
        dt =
          ut &&
          (!ht ||
            ["ReactNative", "NativeScript", "NS"].indexOf(ht.product) < 0),
        ft =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        pt = (ut && window.location.href) || "http://localhost",
        gt = (0, lt.A)((0, lt.A)({}, i), ct);
      const mt = function (t) {
        function e(t, n, i, r) {
          let o = t[r++];
          if ("__proto__" === o) return !0;
          const s = Number.isFinite(+o),
            a = r >= t.length;
          if (((o = !o && U.isArray(i) ? i.length : o), a))
            return U.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !s;
          (i[o] && U.isObject(i[o])) || (i[o] = []);
          return (
            e(t, n, i[o], r) &&
              U.isArray(i[o]) &&
              (i[o] = (function (t) {
                const e = {},
                  n = Object.keys(t);
                let i;
                const r = n.length;
                let o;
                for (i = 0; i < r; i++) (o = n[i]), (e[o] = t[o]);
                return e;
              })(i[o])),
            !s
          );
        }
        if (U.isFormData(t) && U.isFunction(t.entries)) {
          const n = {};
          return (
            U.forEachEntry(t, (t, i) => {
              e(
                (function (t) {
                  return U.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                    "[]" === t[0] ? "" : t[1] || t[0]
                  );
                })(t),
                i,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const vt = {
        transitional: at,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (t, e) {
            const n = e.getContentType() || "",
              i = n.indexOf("application/json") > -1,
              r = U.isObject(t);
            r && U.isHTMLForm(t) && (t = new FormData(t));
            if (U.isFormData(t)) return i ? JSON.stringify(mt(t)) : t;
            if (
              U.isArrayBuffer(t) ||
              U.isBuffer(t) ||
              U.isStream(t) ||
              U.isFile(t) ||
              U.isBlob(t) ||
              U.isReadableStream(t)
            )
              return t;
            if (U.isArrayBufferView(t)) return t.buffer;
            if (U.isURLSearchParams(t))
              return (
                e.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                t.toString()
              );
            let o;
            if (r) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (t, e) {
                  return Q(
                    t,
                    new gt.classes.URLSearchParams(),
                    (0, lt.A)(
                      {
                        visitor: function (t, e, n, i) {
                          return gt.isNode && U.isBuffer(t)
                            ? (this.append(e, t.toString("base64")), !1)
                            : i.defaultVisitor.apply(this, arguments);
                        },
                      },
                      e
                    )
                  );
                })(t, this.formSerializer).toString();
              if (
                (o = U.isFileList(t)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const e = this.env && this.env.FormData;
                return Q(
                  o ? { "files[]": t } : t,
                  e && new e(),
                  this.formSerializer
                );
              }
            }
            return r || i
              ? (e.setContentType("application/json", !1),
                (function (t, e, n) {
                  if (U.isString(t))
                    try {
                      return (e || JSON.parse)(t), U.trim(t);
                    } catch (i) {
                      if ("SyntaxError" !== i.name) throw i;
                    }
                  return (n || JSON.stringify)(t);
                })(t))
              : t;
          },
        ],
        transformResponse: [
          function (t) {
            const e = this.transitional || vt.transitional,
              n = e && e.forcedJSONParsing,
              i = "json" === this.responseType;
            if (U.isResponse(t) || U.isReadableStream(t)) return t;
            if (t && U.isString(t) && ((n && !this.responseType) || i)) {
              const n = !(e && e.silentJSONParsing) && i;
              try {
                return JSON.parse(t, this.parseReviver);
              } catch (r) {
                if (n) {
                  if ("SyntaxError" === r.name)
                    throw $.from(
                      r,
                      $.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw r;
                }
              }
            }
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      U.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        vt.headers[t] = {};
      });
      const yt = vt,
        bt = U.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        xt = Symbol("internals");
      function wt(t) {
        return t && String(t).trim().toLowerCase();
      }
      function _t(t) {
        return !1 === t || null == t ? t : U.isArray(t) ? t.map(_t) : String(t);
      }
      function Mt(t, e, n, i, r) {
        return U.isFunction(i)
          ? i.call(this, e, n)
          : (r && (e = n),
            U.isString(e)
              ? U.isString(i)
                ? -1 !== e.indexOf(i)
                : U.isRegExp(i)
                ? i.test(e)
                : void 0
              : void 0);
      }
      class St {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, n) {
          const i = this;
          function r(t, e, n) {
            const r = wt(e);
            if (!r) throw new Error("header name must be a non-empty string");
            const o = U.findKey(i, r);
            (!o ||
              void 0 === i[o] ||
              !0 === n ||
              (void 0 === n && !1 !== i[o])) &&
              (i[o || e] = _t(t));
          }
          const o = (t, e) => U.forEach(t, (t, n) => r(t, n, e));
          if (U.isPlainObject(t) || t instanceof this.constructor) o(t, e);
          else if (
            U.isString(t) &&
            (t = t.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
          )
            o(
              ((t) => {
                const e = {};
                let n, i, r;
                return (
                  t &&
                    t.split("\n").forEach(function (t) {
                      (r = t.indexOf(":")),
                        (n = t.substring(0, r).trim().toLowerCase()),
                        (i = t.substring(r + 1).trim()),
                        !n ||
                          (e[n] && bt[n]) ||
                          ("set-cookie" === n
                            ? e[n]
                              ? e[n].push(i)
                              : (e[n] = [i])
                            : (e[n] = e[n] ? e[n] + ", " + i : i));
                    }),
                  e
                );
              })(t),
              e
            );
          else if (U.isObject(t) && U.isIterable(t)) {
            let n,
              i,
              r = {};
            for (const e of t) {
              if (!U.isArray(e))
                throw TypeError("Object iterator must return a key-value pair");
              r[(i = e[0])] = (n = r[i])
                ? U.isArray(n)
                  ? [...n, e[1]]
                  : [n, e[1]]
                : e[1];
            }
            o(r, e);
          } else null != t && r(e, t, n);
          return this;
        }
        get(t, e) {
          if ((t = wt(t))) {
            const n = U.findKey(this, t);
            if (n) {
              const t = this[n];
              if (!e) return t;
              if (!0 === e)
                return (function (t) {
                  const e = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let i;
                  for (; (i = n.exec(t)); ) e[i[1]] = i[2];
                  return e;
                })(t);
              if (U.isFunction(e)) return e.call(this, t, n);
              if (U.isRegExp(e)) return e.exec(t);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if ((t = wt(t))) {
            const n = U.findKey(this, t);
            return !(!n || void 0 === this[n] || (e && !Mt(0, this[n], n, e)));
          }
          return !1;
        }
        delete(t, e) {
          const n = this;
          let i = !1;
          function r(t) {
            if ((t = wt(t))) {
              const r = U.findKey(n, t);
              !r || (e && !Mt(0, n[r], r, e)) || (delete n[r], (i = !0));
            }
          }
          return U.isArray(t) ? t.forEach(r) : r(t), i;
        }
        clear(t) {
          const e = Object.keys(this);
          let n = e.length,
            i = !1;
          for (; n--; ) {
            const r = e[n];
            (t && !Mt(0, this[r], r, t, !0)) || (delete this[r], (i = !0));
          }
          return i;
        }
        normalize(t) {
          const e = this,
            n = {};
          return (
            U.forEach(this, (i, r) => {
              const o = U.findKey(n, r);
              if (o) return (e[o] = _t(i)), void delete e[r];
              const s = t
                ? (function (t) {
                    return t
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (t, e, n) => e.toUpperCase() + n
                      );
                  })(r)
                : String(r).trim();
              s !== r && delete e[r], (e[s] = _t(i)), (n[s] = !0);
            }),
            this
          );
        }
        concat() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return this.constructor.concat(this, ...e);
        }
        toJSON(t) {
          const e = Object.create(null);
          return (
            U.forEach(this, (n, i) => {
              null != n &&
                !1 !== n &&
                (e[i] = t && U.isArray(n) ? n.join(", ") : n);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((t) => {
              let [e, n] = t;
              return e + ": " + n;
            })
            .join("\n");
        }
        getSetCookie() {
          return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t) {
          const e = new this(t);
          for (
            var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            i[r - 1] = arguments[r];
          return i.forEach((t) => e.set(t)), e;
        }
        static accessor(t) {
          const e = (this[xt] = this[xt] = { accessors: {} }).accessors,
            n = this.prototype;
          function i(t) {
            const i = wt(t);
            e[i] ||
              (!(function (t, e) {
                const n = U.toCamelCase(" " + e);
                ["get", "set", "has"].forEach((i) => {
                  Object.defineProperty(t, i + n, {
                    value: function (t, n, r) {
                      return this[i].call(this, e, t, n, r);
                    },
                    configurable: !0,
                  });
                });
              })(n, t),
              (e[i] = !0));
          }
          return U.isArray(t) ? t.forEach(i) : i(t), this;
        }
      }
      St.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        U.reduceDescriptors(St.prototype, (t, e) => {
          let { value: n } = t,
            i = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => n,
            set(t) {
              this[i] = t;
            },
          };
        }),
        U.freezeMethods(St);
      const At = St;
      function kt(t, e) {
        const n = this || yt,
          i = e || n,
          r = At.from(i.headers);
        let o = i.data;
        return (
          U.forEach(t, function (t) {
            o = t.call(n, o, r.normalize(), e ? e.status : void 0);
          }),
          r.normalize(),
          o
        );
      }
      function Pt(t) {
        return !(!t || !t.__CANCEL__);
      }
      function Ct(t, e, n) {
        $.call(this, null == t ? "canceled" : t, $.ERR_CANCELED, e, n),
          (this.name = "CanceledError");
      }
      U.inherits(Ct, $, { __CANCEL__: !0 });
      const Et = Ct;
      function Tt(t, e, n) {
        const i = n.config.validateStatus;
        n.status && i && !i(n.status)
          ? e(
              new $(
                "Request failed with status code " + n.status,
                [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            )
          : t(n);
      }
      const Ot = function (t, e) {
        t = t || 10;
        const n = new Array(t),
          i = new Array(t);
        let r,
          o = 0,
          s = 0;
        return (
          (e = void 0 !== e ? e : 1e3),
          function (a) {
            const l = Date.now(),
              c = i[s];
            r || (r = l), (n[o] = a), (i[o] = l);
            let u = s,
              h = 0;
            for (; u !== o; ) (h += n[u++]), (u %= t);
            if (((o = (o + 1) % t), o === s && (s = (s + 1) % t), l - r < e))
              return;
            const d = c && l - c;
            return d ? Math.round((1e3 * h) / d) : void 0;
          }
        );
      };
      const Dt = function (t, e) {
          let n,
            i,
            r = 0,
            o = 1e3 / e;
          const s = function (e) {
            let o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now();
            (r = o), (n = null), i && (clearTimeout(i), (i = null)), t(...e);
          };
          return [
            function () {
              const t = Date.now(),
                e = t - r;
              for (
                var a = arguments.length, l = new Array(a), c = 0;
                c < a;
                c++
              )
                l[c] = arguments[c];
              e >= o
                ? s(l, t)
                : ((n = l),
                  i ||
                    (i = setTimeout(() => {
                      (i = null), s(n);
                    }, o - e)));
            },
            () => n && s(n),
          ];
        },
        Rt = function (t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            i = 0;
          const r = Ot(50, 250);
          return Dt((n) => {
            const o = n.loaded,
              s = n.lengthComputable ? n.total : void 0,
              a = o - i,
              l = r(a);
            i = o;
            t({
              loaded: o,
              total: s,
              progress: s ? o / s : void 0,
              bytes: a,
              rate: l || void 0,
              estimated: l && s && o <= s ? (s - o) / l : void 0,
              event: n,
              lengthComputable: null != s,
              [e ? "download" : "upload"]: !0,
            });
          }, n);
        },
        Lt = (t, e) => {
          const n = null != t;
          return [
            (i) => e[0]({ lengthComputable: n, total: t, loaded: i }),
            e[1],
          ];
        },
        Ft = (t) =>
          function () {
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return U.asap(() => t(...n));
          },
        Vt = gt.hasStandardBrowserEnv
          ? ((t, e) => (n) => (
              (n = new URL(n, gt.origin)),
              t.protocol === n.protocol &&
                t.host === n.host &&
                (e || t.port === n.port)
            ))(
              new URL(gt.origin),
              gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)
            )
          : () => !0,
        It = gt.hasStandardBrowserEnv
          ? {
              write(t, e, n, i, r, o, s) {
                if ("undefined" === typeof document) return;
                const a = ["".concat(t, "=").concat(encodeURIComponent(e))];
                U.isNumber(n) &&
                  a.push("expires=".concat(new Date(n).toUTCString())),
                  U.isString(i) && a.push("path=".concat(i)),
                  U.isString(r) && a.push("domain=".concat(r)),
                  !0 === o && a.push("secure"),
                  U.isString(s) && a.push("SameSite=".concat(s)),
                  (document.cookie = a.join("; "));
              },
              read(t) {
                if ("undefined" === typeof document) return null;
                const e = document.cookie.match(
                  new RegExp("(?:^|; )" + t + "=([^;]*)")
                );
                return e ? decodeURIComponent(e[1]) : null;
              },
              remove(t) {
                this.write(t, "", Date.now() - 864e5, "/");
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function jt(t, e, n) {
        let i = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        return t && (i || 0 == n)
          ? (function (t, e) {
              return e
                ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
                : t;
            })(t, e)
          : e;
      }
      const zt = (t) => (t instanceof At ? (0, lt.A)({}, t) : t);
      function Nt(t, e) {
        e = e || {};
        const n = {};
        function i(t, e, n, i) {
          return U.isPlainObject(t) && U.isPlainObject(e)
            ? U.merge.call({ caseless: i }, t, e)
            : U.isPlainObject(e)
            ? U.merge({}, e)
            : U.isArray(e)
            ? e.slice()
            : e;
        }
        function r(t, e, n, r) {
          return U.isUndefined(e)
            ? U.isUndefined(t)
              ? void 0
              : i(void 0, t, 0, r)
            : i(t, e, 0, r);
        }
        function o(t, e) {
          if (!U.isUndefined(e)) return i(void 0, e);
        }
        function s(t, e) {
          return U.isUndefined(e)
            ? U.isUndefined(t)
              ? void 0
              : i(void 0, t)
            : i(void 0, e);
        }
        function a(n, r, o) {
          return o in e ? i(n, r) : o in t ? i(void 0, n) : void 0;
        }
        const l = {
          url: o,
          method: o,
          data: o,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          withXSRFToken: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: a,
          headers: (t, e, n) => r(zt(t), zt(e), 0, !0),
        };
        return (
          U.forEach(Object.keys((0, lt.A)((0, lt.A)({}, t), e)), function (i) {
            const o = l[i] || r,
              s = o(t[i], e[i], i);
            (U.isUndefined(s) && o !== a) || (n[i] = s);
          }),
          n
        );
      }
      const Bt = (t) => {
          const e = Nt({}, t);
          let {
            data: n,
            withXSRFToken: i,
            xsrfHeaderName: r,
            xsrfCookieName: o,
            headers: s,
            auth: a,
          } = e;
          if (
            ((e.headers = s = At.from(s)),
            (e.url = ot(
              jt(e.baseURL, e.url, e.allowAbsoluteUrls),
              t.params,
              t.paramsSerializer
            )),
            a &&
              s.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (a.username || "") +
                      ":" +
                      (a.password
                        ? unescape(encodeURIComponent(a.password))
                        : "")
                  )
              ),
            U.isFormData(n))
          )
            if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
              s.setContentType(void 0);
            else if (U.isFunction(n.getHeaders)) {
              const t = n.getHeaders(),
                e = ["content-type", "content-length"];
              Object.entries(t).forEach((t) => {
                let [n, i] = t;
                e.includes(n.toLowerCase()) && s.set(n, i);
              });
            }
          if (
            gt.hasStandardBrowserEnv &&
            (i && U.isFunction(i) && (i = i(e)), i || (!1 !== i && Vt(e.url)))
          ) {
            const t = r && o && It.read(o);
            t && s.set(r, t);
          }
          return e;
        },
        Wt =
          "undefined" !== typeof XMLHttpRequest &&
          function (t) {
            return new Promise(function (e, n) {
              const i = Bt(t);
              let r = i.data;
              const o = At.from(i.headers).normalize();
              let s,
                a,
                l,
                c,
                u,
                {
                  responseType: h,
                  onUploadProgress: d,
                  onDownloadProgress: f,
                } = i;
              function p() {
                c && c(),
                  u && u(),
                  i.cancelToken && i.cancelToken.unsubscribe(s),
                  i.signal && i.signal.removeEventListener("abort", s);
              }
              let g = new XMLHttpRequest();
              function m() {
                if (!g) return;
                const i = At.from(
                  "getAllResponseHeaders" in g && g.getAllResponseHeaders()
                );
                Tt(
                  function (t) {
                    e(t), p();
                  },
                  function (t) {
                    n(t), p();
                  },
                  {
                    data:
                      h && "text" !== h && "json" !== h
                        ? g.response
                        : g.responseText,
                    status: g.status,
                    statusText: g.statusText,
                    headers: i,
                    config: t,
                    request: g,
                  }
                ),
                  (g = null);
              }
              g.open(i.method.toUpperCase(), i.url, !0),
                (g.timeout = i.timeout),
                "onloadend" in g
                  ? (g.onloadend = m)
                  : (g.onreadystatechange = function () {
                      g &&
                        4 === g.readyState &&
                        (0 !== g.status ||
                          (g.responseURL &&
                            0 === g.responseURL.indexOf("file:"))) &&
                        setTimeout(m);
                    }),
                (g.onabort = function () {
                  g &&
                    (n(new $("Request aborted", $.ECONNABORTED, t, g)),
                    (g = null));
                }),
                (g.onerror = function (e) {
                  const i = e && e.message ? e.message : "Network Error",
                    r = new $(i, $.ERR_NETWORK, t, g);
                  (r.event = e || null), n(r), (g = null);
                }),
                (g.ontimeout = function () {
                  let e = i.timeout
                    ? "timeout of " + i.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = i.transitional || at;
                  i.timeoutErrorMessage && (e = i.timeoutErrorMessage),
                    n(
                      new $(
                        e,
                        r.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                        t,
                        g
                      )
                    ),
                    (g = null);
                }),
                void 0 === r && o.setContentType(null),
                "setRequestHeader" in g &&
                  U.forEach(o.toJSON(), function (t, e) {
                    g.setRequestHeader(e, t);
                  }),
                U.isUndefined(i.withCredentials) ||
                  (g.withCredentials = !!i.withCredentials),
                h && "json" !== h && (g.responseType = i.responseType),
                f && (([l, u] = Rt(f, !0)), g.addEventListener("progress", l)),
                d &&
                  g.upload &&
                  (([a, c] = Rt(d)),
                  g.upload.addEventListener("progress", a),
                  g.upload.addEventListener("loadend", c)),
                (i.cancelToken || i.signal) &&
                  ((s = (e) => {
                    g &&
                      (n(!e || e.type ? new Et(null, t, g) : e),
                      g.abort(),
                      (g = null));
                  }),
                  i.cancelToken && i.cancelToken.subscribe(s),
                  i.signal &&
                    (i.signal.aborted
                      ? s()
                      : i.signal.addEventListener("abort", s)));
              const v = (function (t) {
                const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return (e && e[1]) || "";
              })(i.url);
              v && -1 === gt.protocols.indexOf(v)
                ? n(
                    new $(
                      "Unsupported protocol " + v + ":",
                      $.ERR_BAD_REQUEST,
                      t
                    )
                  )
                : g.send(r || null);
            });
          },
        Ht = (t, e) => {
          const { length: n } = (t = t ? t.filter(Boolean) : []);
          if (e || n) {
            let n,
              i = new AbortController();
            const r = function (t) {
              if (!n) {
                (n = !0), s();
                const e = t instanceof Error ? t : this.reason;
                i.abort(
                  e instanceof $
                    ? e
                    : new Et(e instanceof Error ? e.message : e)
                );
              }
            };
            let o =
              e &&
              setTimeout(() => {
                (o = null),
                  r(
                    new $("timeout ".concat(e, " of ms exceeded"), $.ETIMEDOUT)
                  );
              }, e);
            const s = () => {
              t &&
                (o && clearTimeout(o),
                (o = null),
                t.forEach((t) => {
                  t.unsubscribe
                    ? t.unsubscribe(r)
                    : t.removeEventListener("abort", r);
                }),
                (t = null));
            };
            t.forEach((t) => t.addEventListener("abort", r));
            const { signal: a } = i;
            return (a.unsubscribe = () => U.asap(s)), a;
          }
        };
      function Ut(t, e) {
        (this.v = t), (this.k = e);
      }
      function Yt(t) {
        return function () {
          return new qt(t.apply(this, arguments));
        };
      }
      function qt(t) {
        var e, n;
        function i(e, n) {
          try {
            var o = t[e](n),
              s = o.value,
              a = s instanceof Ut;
            Promise.resolve(a ? s.v : s).then(
              function (n) {
                if (a) {
                  var l = "return" === e ? "return" : "next";
                  if (!s.k || n.done) return i(l, n);
                  n = t[l](n).value;
                }
                r(o.done ? "return" : "normal", n);
              },
              function (t) {
                i("throw", t);
              }
            );
          } catch (t) {
            r("throw", t);
          }
        }
        function r(t, r) {
          switch (t) {
            case "return":
              e.resolve({ value: r, done: !0 });
              break;
            case "throw":
              e.reject(r);
              break;
            default:
              e.resolve({ value: r, done: !1 });
          }
          (e = e.next) ? i(e.key, e.arg) : (n = null);
        }
        (this._invoke = function (t, r) {
          return new Promise(function (o, s) {
            var a = { key: t, arg: r, resolve: o, reject: s, next: null };
            n ? (n = n.next = a) : ((e = n = a), i(t, r));
          });
        }),
          "function" != typeof t.return && (this.return = void 0);
      }
      function Xt(t) {
        return new Ut(t, 0);
      }
      function $t(t) {
        var e = {},
          n = !1;
        function i(e, i) {
          return (
            (n = !0),
            (i = new Promise(function (n) {
              n(t[e](i));
            })),
            { done: !1, value: new Ut(i, 1) }
          );
        }
        return (
          (e[
            ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"
          ] = function () {
            return this;
          }),
          (e.next = function (t) {
            return n ? ((n = !1), t) : i("next", t);
          }),
          "function" == typeof t.throw &&
            (e.throw = function (t) {
              if (n) throw ((n = !1), t);
              return i("throw", t);
            }),
          "function" == typeof t.return &&
            (e.return = function (t) {
              return n ? ((n = !1), t) : i("return", t);
            }),
          e
        );
      }
      (qt.prototype[
        ("function" == typeof Symbol && Symbol.asyncIterator) ||
          "@@asyncIterator"
      ] = function () {
        return this;
      }),
        (qt.prototype.next = function (t) {
          return this._invoke("next", t);
        }),
        (qt.prototype.throw = function (t) {
          return this._invoke("throw", t);
        }),
        (qt.prototype.return = function (t) {
          return this._invoke("return", t);
        });
      var Kt = n(9495);
      const Gt = function* (t, e) {
          let n = t.byteLength;
          if (!e || n < e) return void (yield t);
          let i,
            r = 0;
          for (; r < n; ) (i = r + e), yield t.slice(r, i), (r = i);
        },
        Zt = (function () {
          var t = Yt(function* (t, e) {
            var n,
              i = !1,
              r = !1;
            try {
              for (
                var o, s = (0, Kt.A)(Jt(t));
                (i = !(o = yield Xt(s.next())).done);
                i = !1
              ) {
                const t = o.value;
                yield* $t((0, Kt.A)(Gt(t, e)));
              }
            } catch (a) {
              (r = !0), (n = a);
            } finally {
              try {
                i && null != s.return && (yield Xt(s.return()));
              } finally {
                if (r) throw n;
              }
            }
          });
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        Jt = (function () {
          var t = Yt(function* (t) {
            if (t[Symbol.asyncIterator]) return void (yield* $t((0, Kt.A)(t)));
            const e = t.getReader();
            try {
              for (;;) {
                const { done: t, value: n } = yield Xt(e.read());
                if (t) break;
                yield n;
              }
            } finally {
              yield Xt(e.cancel());
            }
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        Qt = (t, e, n, i) => {
          const r = Zt(t, e);
          let o,
            s = 0,
            a = (t) => {
              o || ((o = !0), i && i(t));
            };
          return new ReadableStream(
            {
              async pull(t) {
                try {
                  const { done: e, value: i } = await r.next();
                  if (e) return a(), void t.close();
                  let o = i.byteLength;
                  if (n) {
                    let t = (s += o);
                    n(t);
                  }
                  t.enqueue(new Uint8Array(i));
                } catch (e) {
                  throw (a(e), e);
                }
              },
              cancel: (t) => (a(t), r.return()),
            },
            { highWaterMark: 2 }
          );
        },
        { isFunction: te } = U,
        ee = ((t) => {
          let { Request: e, Response: n } = t;
          return { Request: e, Response: n };
        })(U.global),
        { ReadableStream: ne, TextEncoder: ie } = U.global,
        re = function (t) {
          try {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              n[i - 1] = arguments[i];
            return !!t(...n);
          } catch (r) {
            return !1;
          }
        },
        oe = (t) => {
          t = U.merge.call({ skipUndefined: !0 }, ee, t);
          const { fetch: e, Request: n, Response: i } = t,
            r = e ? te(e) : "function" === typeof fetch,
            o = te(n),
            s = te(i);
          if (!r) return !1;
          const a = r && te(ne),
            l =
              r &&
              ("function" === typeof ie
                ? ((c = new ie()), (t) => c.encode(t))
                : async (t) => new Uint8Array(await new n(t).arrayBuffer()));
          var c;
          const u =
              o &&
              a &&
              re(() => {
                let t = !1;
                const e = new n(gt.origin, {
                  body: new ne(),
                  method: "POST",
                  get duplex() {
                    return (t = !0), "half";
                  },
                }).headers.has("Content-Type");
                return t && !e;
              }),
            h = s && a && re(() => U.isReadableStream(new i("").body)),
            d = { stream: h && ((t) => t.body) };
          r &&
            ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(
              (t) => {
                !d[t] &&
                  (d[t] = (e, n) => {
                    let i = e && e[t];
                    if (i) return i.call(e);
                    throw new $(
                      "Response type '".concat(t, "' is not supported"),
                      $.ERR_NOT_SUPPORT,
                      n
                    );
                  });
              }
            );
          const f = async (t, e) => {
            const i = U.toFiniteNumber(t.getContentLength());
            return null == i
              ? (async (t) => {
                  if (null == t) return 0;
                  if (U.isBlob(t)) return t.size;
                  if (U.isSpecCompliantForm(t)) {
                    const e = new n(gt.origin, { method: "POST", body: t });
                    return (await e.arrayBuffer()).byteLength;
                  }
                  return U.isArrayBufferView(t) || U.isArrayBuffer(t)
                    ? t.byteLength
                    : (U.isURLSearchParams(t) && (t += ""),
                      U.isString(t) ? (await l(t)).byteLength : void 0);
                })(e)
              : i;
          };
          return async (t) => {
            let {
                url: r,
                method: s,
                data: a,
                signal: l,
                cancelToken: c,
                timeout: p,
                onDownloadProgress: g,
                onUploadProgress: m,
                responseType: v,
                headers: y,
                withCredentials: b = "same-origin",
                fetchOptions: x,
              } = Bt(t),
              w = e || fetch;
            v = v ? (v + "").toLowerCase() : "text";
            let _ = Ht([l, c && c.toAbortSignal()], p),
              M = null;
            const S =
              _ &&
              _.unsubscribe &&
              (() => {
                _.unsubscribe();
              });
            let A;
            try {
              if (
                m &&
                u &&
                "get" !== s &&
                "head" !== s &&
                0 !== (A = await f(y, a))
              ) {
                let t,
                  e = new n(r, { method: "POST", body: a, duplex: "half" });
                if (
                  (U.isFormData(a) &&
                    (t = e.headers.get("content-type")) &&
                    y.setContentType(t),
                  e.body)
                ) {
                  const [t, n] = Lt(A, Rt(Ft(m)));
                  a = Qt(e.body, 65536, t, n);
                }
              }
              U.isString(b) || (b = b ? "include" : "omit");
              const e = o && "credentials" in n.prototype,
                l = (0, lt.A)(
                  (0, lt.A)({}, x),
                  {},
                  {
                    signal: _,
                    method: s.toUpperCase(),
                    headers: y.normalize().toJSON(),
                    body: a,
                    duplex: "half",
                    credentials: e ? b : void 0,
                  }
                );
              M = o && new n(r, l);
              let c = await (o ? w(M, x) : w(r, l));
              const p = h && ("stream" === v || "response" === v);
              if (h && (g || (p && S))) {
                const t = {};
                ["status", "statusText", "headers"].forEach((e) => {
                  t[e] = c[e];
                });
                const e = U.toFiniteNumber(c.headers.get("content-length")),
                  [n, r] = (g && Lt(e, Rt(Ft(g), !0))) || [];
                c = new i(
                  Qt(c.body, 65536, n, () => {
                    r && r(), S && S();
                  }),
                  t
                );
              }
              v = v || "text";
              let k = await d[U.findKey(d, v) || "text"](c, t);
              return (
                !p && S && S(),
                await new Promise((e, n) => {
                  Tt(e, n, {
                    data: k,
                    headers: At.from(c.headers),
                    status: c.status,
                    statusText: c.statusText,
                    config: t,
                    request: M,
                  });
                })
              );
            } catch (k) {
              if (
                (S && S(),
                k &&
                  "TypeError" === k.name &&
                  /Load failed|fetch/i.test(k.message))
              )
                throw Object.assign(
                  new $("Network Error", $.ERR_NETWORK, t, M),
                  { cause: k.cause || k }
                );
              throw $.from(k, k && k.code, t, M);
            }
          };
        },
        se = new Map(),
        ae = (t) => {
          let e = (t && t.env) || {};
          const { fetch: n, Request: i, Response: r } = e,
            o = [i, r, n];
          let s,
            a,
            l = o.length,
            c = se;
          for (; l--; )
            (s = o[l]),
              (a = c.get(s)),
              void 0 === a && c.set(s, (a = l ? new Map() : oe(e))),
              (c = a);
          return a;
        },
        le = (ae(), { http: null, xhr: Wt, fetch: { get: ae } });
      U.forEach(le, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (n) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      const ce = (t) => "- ".concat(t),
        ue = (t) => U.isFunction(t) || null === t || !1 === t;
      const he = {
        getAdapter: function (t, e) {
          t = U.isArray(t) ? t : [t];
          const { length: n } = t;
          let i, r;
          const o = {};
          for (let s = 0; s < n; s++) {
            let n;
            if (
              ((i = t[s]),
              (r = i),
              !ue(i) && ((r = le[(n = String(i)).toLowerCase()]), void 0 === r))
            )
              throw new $("Unknown adapter '".concat(n, "'"));
            if (r && (U.isFunction(r) || (r = r.get(e)))) break;
            o[n || "#" + s] = r;
          }
          if (!r) {
            const t = Object.entries(o).map((t) => {
              let [e, n] = t;
              return (
                "adapter ".concat(e, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let e = n
              ? t.length > 1
                ? "since :\n" + t.map(ce).join("\n")
                : " " + ce(t[0])
              : "as no adapter specified";
            throw new $(
              "There is no suitable adapter to dispatch the request " + e,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        },
        adapters: le,
      };
      function de(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new Et(null, t);
      }
      function fe(t) {
        de(t),
          (t.headers = At.from(t.headers)),
          (t.data = kt.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1);
        return he
          .getAdapter(
            t.adapter || yt.adapter,
            t
          )(t)
          .then(
            function (e) {
              return (
                de(t),
                (e.data = kt.call(t, t.transformResponse, e)),
                (e.headers = At.from(e.headers)),
                e
              );
            },
            function (e) {
              return (
                Pt(e) ||
                  (de(t),
                  e &&
                    e.response &&
                    ((e.response.data = kt.call(
                      t,
                      t.transformResponse,
                      e.response
                    )),
                    (e.response.headers = At.from(e.response.headers)))),
                Promise.reject(e)
              );
            }
          );
      }
      const pe = "1.13.2",
        ge = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          ge[t] = function (n) {
            return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        }
      );
      const me = {};
      (ge.transitional = function (t, e, n) {
        function i(t, e) {
          return (
            "[Axios v" +
            pe +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (n ? ". " + n : "")
          );
        }
        return (n, r, o) => {
          if (!1 === t)
            throw new $(
              i(r, " has been removed" + (e ? " in " + e : "")),
              $.ERR_DEPRECATED
            );
          return (
            e &&
              !me[r] &&
              ((me[r] = !0),
              console.warn(
                i(
                  r,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future"
                )
              )),
            !t || t(n, r, o)
          );
        };
      }),
        (ge.spelling = function (t) {
          return (e, n) => (
            console.warn(
              "".concat(n, " is likely a misspelling of ").concat(t)
            ),
            !0
          );
        });
      const ve = {
          assertOptions: function (t, e, n) {
            if ("object" !== typeof t)
              throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
            const i = Object.keys(t);
            let r = i.length;
            for (; r-- > 0; ) {
              const o = i[r],
                s = e[o];
              if (s) {
                const e = t[o],
                  n = void 0 === e || s(e, o, t);
                if (!0 !== n)
                  throw new $(
                    "option " + o + " must be " + n,
                    $.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== n)
                throw new $("Unknown option " + o, $.ERR_BAD_OPTION);
            }
          },
          validators: ge,
        },
        ye = ve.validators;
      class be {
        constructor(t) {
          (this.defaults = t || {}),
            (this.interceptors = { request: new st(), response: new st() });
        }
        async request(t, e) {
          try {
            return await this._request(t, e);
          } catch (n) {
            if (n instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = new Error());
              const e = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? e &&
                    !String(n.stack).endsWith(e.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + e)
                  : (n.stack = e);
              } catch (i) {}
            }
            throw n;
          }
        }
        _request(t, e) {
          "string" === typeof t ? ((e = e || {}).url = t) : (e = t || {}),
            (e = Nt(this.defaults, e));
          const { transitional: n, paramsSerializer: i, headers: r } = e;
          void 0 !== n &&
            ve.assertOptions(
              n,
              {
                silentJSONParsing: ye.transitional(ye.boolean),
                forcedJSONParsing: ye.transitional(ye.boolean),
                clarifyTimeoutError: ye.transitional(ye.boolean),
              },
              !1
            ),
            null != i &&
              (U.isFunction(i)
                ? (e.paramsSerializer = { serialize: i })
                : ve.assertOptions(
                    i,
                    { encode: ye.function, serialize: ye.function },
                    !0
                  )),
            void 0 !== e.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (e.allowAbsoluteUrls = !0)),
            ve.assertOptions(
              e,
              {
                baseUrl: ye.spelling("baseURL"),
                withXsrfToken: ye.spelling("withXSRFToken"),
              },
              !0
            ),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = r && U.merge(r.common, r[e.method]);
          r &&
            U.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete r[t];
              }
            ),
            (e.headers = At.concat(o, r));
          const s = [];
          let a = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" === typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((a = a && t.synchronous), s.unshift(t.fulfilled, t.rejected));
          });
          const l = [];
          let c;
          this.interceptors.response.forEach(function (t) {
            l.push(t.fulfilled, t.rejected);
          });
          let u,
            h = 0;
          if (!a) {
            const t = [fe.bind(this), void 0];
            for (
              t.unshift(...s),
                t.push(...l),
                u = t.length,
                c = Promise.resolve(e);
              h < u;

            )
              c = c.then(t[h++], t[h++]);
            return c;
          }
          u = s.length;
          let d = e;
          for (; h < u; ) {
            const t = s[h++],
              e = s[h++];
            try {
              d = t(d);
            } catch (f) {
              e.call(this, f);
              break;
            }
          }
          try {
            c = fe.call(this, d);
          } catch (f) {
            return Promise.reject(f);
          }
          for (h = 0, u = l.length; h < u; ) c = c.then(l[h++], l[h++]);
          return c;
        }
        getUri(t) {
          return ot(
            jt((t = Nt(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls),
            t.params,
            t.paramsSerializer
          );
        }
      }
      U.forEach(["delete", "get", "head", "options"], function (t) {
        be.prototype[t] = function (e, n) {
          return this.request(
            Nt(n || {}, { method: t, url: e, data: (n || {}).data })
          );
        };
      }),
        U.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (n, i, r) {
              return this.request(
                Nt(r || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: i,
                })
              );
            };
          }
          (be.prototype[t] = e()), (be.prototype[t + "Form"] = e(!0));
        });
      const xe = be;
      class we {
        constructor(t) {
          if ("function" !== typeof t)
            throw new TypeError("executor must be a function.");
          let e;
          this.promise = new Promise(function (t) {
            e = t;
          });
          const n = this;
          this.promise.then((t) => {
            if (!n._listeners) return;
            let e = n._listeners.length;
            for (; e-- > 0; ) n._listeners[e](t);
            n._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              const i = new Promise((t) => {
                n.subscribe(t), (e = t);
              }).then(t);
              return (
                (i.cancel = function () {
                  n.unsubscribe(e);
                }),
                i
              );
            }),
            t(function (t, i, r) {
              n.reason || ((n.reason = new Et(t, i, r)), e(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          this.reason
            ? t(this.reason)
            : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          const e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        toAbortSignal() {
          const t = new AbortController(),
            e = (e) => {
              t.abort(e);
            };
          return (
            this.subscribe(e),
            (t.signal.unsubscribe = () => this.unsubscribe(e)),
            t.signal
          );
        }
        static source() {
          let t;
          return {
            token: new we(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }
      const _e = we;
      const Me = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526,
      };
      Object.entries(Me).forEach((t) => {
        let [e, n] = t;
        Me[n] = e;
      });
      const Se = Me;
      const Ae = (function t(e) {
        const n = new xe(e),
          i = r(xe.prototype.request, n);
        return (
          U.extend(i, xe.prototype, n, { allOwnKeys: !0 }),
          U.extend(i, n, null, { allOwnKeys: !0 }),
          (i.create = function (n) {
            return t(Nt(e, n));
          }),
          i
        );
      })(yt);
      (Ae.Axios = xe),
        (Ae.CanceledError = Et),
        (Ae.CancelToken = _e),
        (Ae.isCancel = Pt),
        (Ae.VERSION = pe),
        (Ae.toFormData = Q),
        (Ae.AxiosError = $),
        (Ae.Cancel = Ae.CanceledError),
        (Ae.all = function (t) {
          return Promise.all(t);
        }),
        (Ae.spread = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        }),
        (Ae.isAxiosError = function (t) {
          return U.isObject(t) && !0 === t.isAxiosError;
        }),
        (Ae.mergeConfig = Nt),
        (Ae.AxiosHeaders = At),
        (Ae.formToJSON = (t) => mt(U.isHTMLForm(t) ? new FormData(t) : t)),
        (Ae.getAdapter = he.getAdapter),
        (Ae.HttpStatusCode = Se),
        (Ae.default = Ae);
      const ke = Ae;
    },
    6343: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => s, V: () => o });
      var i = new Set();
      function r(t, e, n) {
        t[n] || (t[n] = []), t[n].push(e);
      }
      function o(t) {
        return (
          i.add(t),
          function () {
            return i.delete(t);
          }
        );
      }
      function s() {
        if (i.size) {
          var t = 0,
            e = [[]],
            n = [],
            o = function (n) {
              return r(e, n, t);
            },
            s = function (e) {
              r(n, e, t), t++;
            };
          i.forEach(function (e) {
            e(o, s), (t = 0);
          }),
            i.clear();
          for (var l = n.length, c = 0; c <= l; c++)
            e[c] && e[c].forEach(a), n[c] && n[c].forEach(a);
        }
      }
      var a = function (t) {
        return t();
      };
    },
    6388: (t, e, n) => {
      "use strict";
      n.d(e, { eO: () => f, Ay: () => b, qX: () => p, KK: () => y });
      var i = (1 / 60) * 1e3,
        r =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        o =
          "undefined" !== typeof window
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                return setTimeout(function () {
                  return t(r());
                }, i);
              };
      var s = !0,
        a = !1,
        l = !1,
        c = { delta: 0, timestamp: 0 },
        u = ["read", "update", "preRender", "render", "postRender"],
        h = u.reduce(function (t, e) {
          return (
            (t[e] = (function (t) {
              var e = [],
                n = [],
                i = 0,
                r = !1,
                o = new WeakSet(),
                s = {
                  schedule: function (t, s, a) {
                    void 0 === s && (s = !1), void 0 === a && (a = !1);
                    var l = a && r,
                      c = l ? e : n;
                    return (
                      s && o.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), l && r && (i = e.length)),
                      t
                    );
                  },
                  cancel: function (t) {
                    var e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), o.delete(t);
                  },
                  process: function (a) {
                    var l;
                    if (
                      ((r = !0),
                      (e = (l = [n, e])[0]),
                      ((n = l[1]).length = 0),
                      (i = e.length))
                    )
                      for (var c = 0; c < i; c++) {
                        var u = e[c];
                        u(a), o.has(u) && (s.schedule(u), t());
                      }
                    r = !1;
                  },
                };
              return s;
            })(function () {
              return (a = !0);
            })),
            t
          );
        }, {}),
        d = u.reduce(function (t, e) {
          var n = h[e];
          return (
            (t[e] = function (t, e, i) {
              return (
                void 0 === e && (e = !1),
                void 0 === i && (i = !1),
                a || v(),
                n.schedule(t, e, i)
              );
            }),
            t
          );
        }, {}),
        f = u.reduce(function (t, e) {
          return (t[e] = h[e].cancel), t;
        }, {}),
        p = u.reduce(function (t, e) {
          return (
            (t[e] = function () {
              return h[e].process(c);
            }),
            t
          );
        }, {}),
        g = function (t) {
          return h[t].process(c);
        },
        m = function (t) {
          (a = !1),
            (c.delta = s ? i : Math.max(Math.min(t - c.timestamp, 40), 1)),
            (c.timestamp = t),
            (l = !0),
            u.forEach(g),
            (l = !1),
            a && ((s = !1), o(m));
        },
        v = function () {
          (a = !0), (s = !0), l || o(m);
        },
        y = function () {
          return c;
        };
      const b = d;
    },
    6648: (t, e, n) => {
      "use strict";
      n.d(e, { GP: () => Q });
      const i = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function r(t) {
        return function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      const o = {
          date: r({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: r({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: r({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        s = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function a(t) {
        return (e, n) => {
          let i;
          if (
            "formatting" ===
              (null !== n && void 0 !== n && n.context
                ? String(n.context)
                : "standalone") &&
            t.formattingValues
          ) {
            const e = t.defaultFormattingWidth || t.defaultWidth,
              r = null !== n && void 0 !== n && n.width ? String(n.width) : e;
            i = t.formattingValues[r] || t.formattingValues[e];
          } else {
            const e = t.defaultWidth,
              r =
                null !== n && void 0 !== n && n.width
                  ? String(n.width)
                  : t.defaultWidth;
            i = t.values[r] || t.values[e];
          }
          return i[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      function l(t) {
        return function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = n.width,
            r =
              (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(r);
          if (!o) return null;
          const s = o[0],
            a =
              (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth],
            l = Array.isArray(a)
              ? (function (t, e) {
                  for (let n = 0; n < t.length; n++) if (e(t[n])) return n;
                  return;
                })(a, (t) => t.test(s))
              : (function (t, e) {
                  for (const n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
                      return n;
                  return;
                })(a, (t) => t.test(s));
          let c;
          (c = t.valueCallback ? t.valueCallback(l) : l),
            (c = n.valueCallback ? n.valueCallback(c) : c);
          return { value: c, rest: e.slice(s.length) };
        };
      }
      var c;
      const u = {
        code: "en-US",
        formatDistance: (t, e, n) => {
          let r;
          const o = i[t];
          return (
            (r =
              "string" === typeof o
                ? o
                : 1 === e
                ? o.one
                : o.other.replace("{{count}}", e.toString())),
            null !== n && void 0 !== n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: o,
        formatRelative: (t, e, n, i) => s[t],
        localize: {
          ordinalNumber: (t, e) => {
            const n = Number(t),
              i = n % 100;
            if (i > 20 || i < 10)
              switch (i % 10) {
                case 1:
                  return n + "st";
                case 2:
                  return n + "nd";
                case 3:
                  return n + "rd";
              }
            return n + "th";
          },
          era: a({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: a({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: (t) => t - 1,
          }),
          month: a({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: a({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: a({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber:
            ((c = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: (t) => parseInt(t, 10),
            }),
            function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const n = t.match(c.matchPattern);
              if (!n) return null;
              const i = n[0],
                r = t.match(c.parsePattern);
              if (!r) return null;
              let o = c.valueCallback ? c.valueCallback(r[0]) : r[0];
              return (
                (o = e.valueCallback ? e.valueCallback(o) : o),
                { value: o, rest: t.slice(i.length) }
              );
            }),
          era: l({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: l({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: (t) => t + 1,
          }),
          month: l({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: l({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: l({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      let h = {};
      function d() {
        return h;
      }
      var f = n(8342),
        p = n(2316);
      function g(t, e) {
        const n = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in);
        return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
      }
      function m(t, e) {
        const n = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in);
        return (0, f.m)(n, g(n)) + 1;
      }
      var v = n(4524),
        y = n(9379);
      function b(t, e) {
        var n, i, r, o, s, a;
        const l = d(),
          c =
            null !==
              (n =
                null !==
                  (i =
                    null !==
                      (r =
                        null !==
                          (o =
                            null === e || void 0 === e
                              ? void 0
                              : e.weekStartsOn) && void 0 !== o
                          ? o
                          : null === e ||
                            void 0 === e ||
                            null === (s = e.locale) ||
                            void 0 === s ||
                            null === (s = s.options) ||
                            void 0 === s
                          ? void 0
                          : s.weekStartsOn) && void 0 !== r
                      ? r
                      : l.weekStartsOn) && void 0 !== i
                  ? i
                  : null === (a = l.locale) ||
                    void 0 === a ||
                    null === (a = a.options) ||
                    void 0 === a
                  ? void 0
                  : a.weekStartsOn) && void 0 !== n
              ? n
              : 0,
          u = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in),
          h = u.getDay(),
          f = (h < c ? 7 : 0) + h - c;
        return u.setDate(u.getDate() - f), u.setHours(0, 0, 0, 0), u;
      }
      function x(t, e) {
        return b(t, (0, y.A)((0, y.A)({}, e), {}, { weekStartsOn: 1 }));
      }
      var w = n(2440);
      function _(t, e) {
        const n = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in),
          i = n.getFullYear(),
          r = (0, w.w)(n, 0);
        r.setFullYear(i + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const o = x(r),
          s = (0, w.w)(n, 0);
        s.setFullYear(i, 0, 4), s.setHours(0, 0, 0, 0);
        const a = x(s);
        return n.getTime() >= o.getTime()
          ? i + 1
          : n.getTime() >= a.getTime()
          ? i
          : i - 1;
      }
      function M(t, e) {
        const n = _(t, e),
          i = (0, w.w)((null === e || void 0 === e ? void 0 : e.in) || t, 0);
        return i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0), x(i);
      }
      function S(t, e) {
        const n = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in),
          i = +x(n) - +M(n);
        return Math.round(i / v.my) + 1;
      }
      function A(t, e) {
        var n, i, r, o, s, a;
        const l = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in),
          c = l.getFullYear(),
          u = d(),
          h =
            null !==
              (n =
                null !==
                  (i =
                    null !==
                      (r =
                        null !==
                          (o =
                            null === e || void 0 === e
                              ? void 0
                              : e.firstWeekContainsDate) && void 0 !== o
                          ? o
                          : null === e ||
                            void 0 === e ||
                            null === (s = e.locale) ||
                            void 0 === s ||
                            null === (s = s.options) ||
                            void 0 === s
                          ? void 0
                          : s.firstWeekContainsDate) && void 0 !== r
                      ? r
                      : u.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (a = u.locale) ||
                    void 0 === a ||
                    null === (a = a.options) ||
                    void 0 === a
                  ? void 0
                  : a.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1,
          f = (0, w.w)((null === e || void 0 === e ? void 0 : e.in) || t, 0);
        f.setFullYear(c + 1, 0, h), f.setHours(0, 0, 0, 0);
        const g = b(f, e),
          m = (0, w.w)((null === e || void 0 === e ? void 0 : e.in) || t, 0);
        m.setFullYear(c, 0, h), m.setHours(0, 0, 0, 0);
        const v = b(m, e);
        return +l >= +g ? c + 1 : +l >= +v ? c : c - 1;
      }
      function k(t, e) {
        var n, i, r, o, s, a;
        const l = d(),
          c =
            null !==
              (n =
                null !==
                  (i =
                    null !==
                      (r =
                        null !==
                          (o =
                            null === e || void 0 === e
                              ? void 0
                              : e.firstWeekContainsDate) && void 0 !== o
                          ? o
                          : null === e ||
                            void 0 === e ||
                            null === (s = e.locale) ||
                            void 0 === s ||
                            null === (s = s.options) ||
                            void 0 === s
                          ? void 0
                          : s.firstWeekContainsDate) && void 0 !== r
                      ? r
                      : l.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (a = l.locale) ||
                    void 0 === a ||
                    null === (a = a.options) ||
                    void 0 === a
                  ? void 0
                  : a.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1,
          u = A(t, e),
          h = (0, w.w)((null === e || void 0 === e ? void 0 : e.in) || t, 0);
        h.setFullYear(u, 0, c), h.setHours(0, 0, 0, 0);
        return b(h, e);
      }
      function P(t, e) {
        const n = (0, p.a)(t, null === e || void 0 === e ? void 0 : e.in),
          i = +b(n, e) - +k(n, e);
        return Math.round(i / v.my) + 1;
      }
      function C(t, e) {
        return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
      }
      const E = {
          y(t, e) {
            const n = t.getFullYear(),
              i = n > 0 ? n : 1 - n;
            return C("yy" === e ? i % 100 : i, e.length);
          },
          M(t, e) {
            const n = t.getMonth();
            return "M" === e ? String(n + 1) : C(n + 1, 2);
          },
          d: (t, e) => C(t.getDate(), e.length),
          a(t, e) {
            const n = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: (t, e) => C(t.getHours() % 12 || 12, e.length),
          H: (t, e) => C(t.getHours(), e.length),
          m: (t, e) => C(t.getMinutes(), e.length),
          s: (t, e) => C(t.getSeconds(), e.length),
          S(t, e) {
            const n = e.length,
              i = t.getMilliseconds();
            return C(Math.trunc(i * Math.pow(10, n - 3)), e.length);
          },
        },
        T = "midnight",
        O = "noon",
        D = "morning",
        R = "afternoon",
        L = "evening",
        F = "night",
        V = {
          G: function (t, e, n) {
            const i = t.getFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(i, { width: "abbreviated" });
              case "GGGGG":
                return n.era(i, { width: "narrow" });
              default:
                return n.era(i, { width: "wide" });
            }
          },
          y: function (t, e, n) {
            if ("yo" === e) {
              const e = t.getFullYear(),
                i = e > 0 ? e : 1 - e;
              return n.ordinalNumber(i, { unit: "year" });
            }
            return E.y(t, e);
          },
          Y: function (t, e, n, i) {
            const r = A(t, i),
              o = r > 0 ? r : 1 - r;
            if ("YY" === e) {
              return C(o % 100, 2);
            }
            return "Yo" === e
              ? n.ordinalNumber(o, { unit: "year" })
              : C(o, e.length);
          },
          R: function (t, e) {
            return C(_(t), e.length);
          },
          u: function (t, e) {
            return C(t.getFullYear(), e.length);
          },
          Q: function (t, e, n) {
            const i = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(i);
              case "QQ":
                return C(i, 2);
              case "Qo":
                return n.ordinalNumber(i, { unit: "quarter" });
              case "QQQ":
                return n.quarter(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(i, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(i, { width: "wide", context: "formatting" });
            }
          },
          q: function (t, e, n) {
            const i = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(i);
              case "qq":
                return C(i, 2);
              case "qo":
                return n.ordinalNumber(i, { unit: "quarter" });
              case "qqq":
                return n.quarter(i, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(i, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(i, { width: "wide", context: "standalone" });
            }
          },
          M: function (t, e, n) {
            const i = t.getMonth();
            switch (e) {
              case "M":
              case "MM":
                return E.M(t, e);
              case "Mo":
                return n.ordinalNumber(i + 1, { unit: "month" });
              case "MMM":
                return n.month(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(i, { width: "narrow", context: "formatting" });
              default:
                return n.month(i, { width: "wide", context: "formatting" });
            }
          },
          L: function (t, e, n) {
            const i = t.getMonth();
            switch (e) {
              case "L":
                return String(i + 1);
              case "LL":
                return C(i + 1, 2);
              case "Lo":
                return n.ordinalNumber(i + 1, { unit: "month" });
              case "LLL":
                return n.month(i, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(i, { width: "narrow", context: "standalone" });
              default:
                return n.month(i, { width: "wide", context: "standalone" });
            }
          },
          w: function (t, e, n, i) {
            const r = P(t, i);
            return "wo" === e
              ? n.ordinalNumber(r, { unit: "week" })
              : C(r, e.length);
          },
          I: function (t, e, n) {
            const i = S(t);
            return "Io" === e
              ? n.ordinalNumber(i, { unit: "week" })
              : C(i, e.length);
          },
          d: function (t, e, n) {
            return "do" === e
              ? n.ordinalNumber(t.getDate(), { unit: "date" })
              : E.d(t, e);
          },
          D: function (t, e, n) {
            const i = m(t);
            return "Do" === e
              ? n.ordinalNumber(i, { unit: "dayOfYear" })
              : C(i, e.length);
          },
          E: function (t, e, n) {
            const i = t.getDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(i, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(i, { width: "short", context: "formatting" });
              default:
                return n.day(i, { width: "wide", context: "formatting" });
            }
          },
          e: function (t, e, n, i) {
            const r = t.getDay(),
              o = (r - i.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(o);
              case "ee":
                return C(o, 2);
              case "eo":
                return n.ordinalNumber(o, { unit: "day" });
              case "eee":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          c: function (t, e, n, i) {
            const r = t.getDay(),
              o = (r - i.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(o);
              case "cc":
                return C(o, e.length);
              case "co":
                return n.ordinalNumber(o, { unit: "day" });
              case "ccc":
                return n.day(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(r, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(r, { width: "short", context: "standalone" });
              default:
                return n.day(r, { width: "wide", context: "standalone" });
            }
          },
          i: function (t, e, n) {
            const i = t.getDay(),
              r = 0 === i ? 7 : i;
            switch (e) {
              case "i":
                return String(r);
              case "ii":
                return C(r, e.length);
              case "io":
                return n.ordinalNumber(r, { unit: "day" });
              case "iii":
                return n.day(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(i, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(i, { width: "short", context: "formatting" });
              default:
                return n.day(i, { width: "wide", context: "formatting" });
            }
          },
          a: function (t, e, n) {
            const i = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.dayPeriod(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(i, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(i, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(i, { width: "wide", context: "formatting" });
            }
          },
          b: function (t, e, n) {
            const i = t.getHours();
            let r;
            switch (
              ((r = 12 === i ? O : 0 === i ? T : i / 12 >= 1 ? "pm" : "am"), e)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          B: function (t, e, n) {
            const i = t.getHours();
            let r;
            switch (((r = i >= 17 ? L : i >= 12 ? R : i >= 4 ? D : F), e)) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          h: function (t, e, n) {
            if ("ho" === e) {
              let e = t.getHours() % 12;
              return 0 === e && (e = 12), n.ordinalNumber(e, { unit: "hour" });
            }
            return E.h(t, e);
          },
          H: function (t, e, n) {
            return "Ho" === e
              ? n.ordinalNumber(t.getHours(), { unit: "hour" })
              : E.H(t, e);
          },
          K: function (t, e, n) {
            const i = t.getHours() % 12;
            return "Ko" === e
              ? n.ordinalNumber(i, { unit: "hour" })
              : C(i, e.length);
          },
          k: function (t, e, n) {
            let i = t.getHours();
            return (
              0 === i && (i = 24),
              "ko" === e ? n.ordinalNumber(i, { unit: "hour" }) : C(i, e.length)
            );
          },
          m: function (t, e, n) {
            return "mo" === e
              ? n.ordinalNumber(t.getMinutes(), { unit: "minute" })
              : E.m(t, e);
          },
          s: function (t, e, n) {
            return "so" === e
              ? n.ordinalNumber(t.getSeconds(), { unit: "second" })
              : E.s(t, e);
          },
          S: function (t, e) {
            return E.S(t, e);
          },
          X: function (t, e, n) {
            const i = t.getTimezoneOffset();
            if (0 === i) return "Z";
            switch (e) {
              case "X":
                return j(i);
              case "XXXX":
              case "XX":
                return z(i);
              default:
                return z(i, ":");
            }
          },
          x: function (t, e, n) {
            const i = t.getTimezoneOffset();
            switch (e) {
              case "x":
                return j(i);
              case "xxxx":
              case "xx":
                return z(i);
              default:
                return z(i, ":");
            }
          },
          O: function (t, e, n) {
            const i = t.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + I(i, ":");
              default:
                return "GMT" + z(i, ":");
            }
          },
          z: function (t, e, n) {
            const i = t.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + I(i, ":");
              default:
                return "GMT" + z(i, ":");
            }
          },
          t: function (t, e, n) {
            return C(Math.trunc(+t / 1e3), e.length);
          },
          T: function (t, e, n) {
            return C(+t, e.length);
          },
        };
      function I(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const n = t > 0 ? "-" : "+",
          i = Math.abs(t),
          r = Math.trunc(i / 60),
          o = i % 60;
        return 0 === o ? n + String(r) : n + String(r) + e + C(o, 2);
      }
      function j(t, e) {
        if (t % 60 === 0) {
          return (t > 0 ? "-" : "+") + C(Math.abs(t) / 60, 2);
        }
        return z(t, e);
      }
      function z(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const n = t > 0 ? "-" : "+",
          i = Math.abs(t);
        return n + C(Math.trunc(i / 60), 2) + e + C(i % 60, 2);
      }
      const N = (t, e) => {
          switch (t) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        B = (t, e) => {
          switch (t) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        },
        W = {
          p: B,
          P: (t, e) => {
            const n = t.match(/(P+)(p+)?/) || [],
              i = n[1],
              r = n[2];
            if (!r) return N(t, e);
            let o;
            switch (i) {
              case "P":
                o = e.dateTime({ width: "short" });
                break;
              case "PP":
                o = e.dateTime({ width: "medium" });
                break;
              case "PPP":
                o = e.dateTime({ width: "long" });
                break;
              default:
                o = e.dateTime({ width: "full" });
            }
            return o.replace("{{date}}", N(i, e)).replace("{{time}}", B(r, e));
          },
        },
        H = /^D+$/,
        U = /^Y+$/,
        Y = ["D", "DD", "YY", "YYYY"];
      function q(t) {
        return (
          t instanceof Date ||
          ("object" === typeof t &&
            "[object Date]" === Object.prototype.toString.call(t))
        );
      }
      function X(t) {
        return !((!q(t) && "number" !== typeof t) || isNaN(+(0, p.a)(t)));
      }
      const $ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        K = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        G = /^'([^]*?)'?$/,
        Z = /''/g,
        J = /[a-zA-Z]/;
      function Q(t, e, n) {
        var i, r, o, s, a, l, c, h, f, g, m, v, y, b;
        const x = d(),
          w =
            null !==
              (i =
                null !== (r = null === n || void 0 === n ? void 0 : n.locale) &&
                void 0 !== r
                  ? r
                  : x.locale) && void 0 !== i
              ? i
              : u,
          _ =
            null !==
              (o =
                null !==
                  (s =
                    null !==
                      (a =
                        null !==
                          (l =
                            null === n || void 0 === n
                              ? void 0
                              : n.firstWeekContainsDate) && void 0 !== l
                          ? l
                          : null === n ||
                            void 0 === n ||
                            null === (c = n.locale) ||
                            void 0 === c ||
                            null === (c = c.options) ||
                            void 0 === c
                          ? void 0
                          : c.firstWeekContainsDate) && void 0 !== a
                      ? a
                      : x.firstWeekContainsDate) && void 0 !== s
                  ? s
                  : null === (h = x.locale) ||
                    void 0 === h ||
                    null === (h = h.options) ||
                    void 0 === h
                  ? void 0
                  : h.firstWeekContainsDate) && void 0 !== o
              ? o
              : 1,
          M =
            null !==
              (f =
                null !==
                  (g =
                    null !==
                      (m =
                        null !==
                          (v =
                            null === n || void 0 === n
                              ? void 0
                              : n.weekStartsOn) && void 0 !== v
                          ? v
                          : null === n ||
                            void 0 === n ||
                            null === (y = n.locale) ||
                            void 0 === y ||
                            null === (y = y.options) ||
                            void 0 === y
                          ? void 0
                          : y.weekStartsOn) && void 0 !== m
                      ? m
                      : x.weekStartsOn) && void 0 !== g
                  ? g
                  : null === (b = x.locale) ||
                    void 0 === b ||
                    null === (b = b.options) ||
                    void 0 === b
                  ? void 0
                  : b.weekStartsOn) && void 0 !== f
              ? f
              : 0,
          S = (0, p.a)(t, null === n || void 0 === n ? void 0 : n.in);
        if (!X(S)) throw new RangeError("Invalid time value");
        let A = e
          .match(K)
          .map((t) => {
            const e = t[0];
            if ("p" === e || "P" === e) {
              return (0, W[e])(t, w.formatLong);
            }
            return t;
          })
          .join("")
          .match($)
          .map((t) => {
            if ("''" === t) return { isToken: !1, value: "'" };
            const e = t[0];
            if ("'" === e) return { isToken: !1, value: tt(t) };
            if (V[e]) return { isToken: !0, value: t };
            if (e.match(J))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  e +
                  "`"
              );
            return { isToken: !1, value: t };
          });
        w.localize.preprocessor && (A = w.localize.preprocessor(S, A));
        const k = { firstWeekContainsDate: _, weekStartsOn: M, locale: w };
        return A.map((i) => {
          if (!i.isToken) return i.value;
          const r = i.value;
          (((null !== n && void 0 !== n && n.useAdditionalWeekYearTokens) ||
            !(function (t) {
              return U.test(t);
            })(r)) &&
            ((null !== n && void 0 !== n && n.useAdditionalDayOfYearTokens) ||
              !(function (t) {
                return H.test(t);
              })(r))) ||
            (function (t, e, n) {
              const i = (function (t, e, n) {
                const i = "Y" === t[0] ? "years" : "days of the month";
                return "Use `"
                  .concat(t.toLowerCase(), "` instead of `")
                  .concat(t, "` (in `")
                  .concat(e, "`) for formatting ")
                  .concat(i, " to the input `")
                  .concat(
                    n,
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                  );
              })(t, e, n);
              if ((console.warn(i), Y.includes(t))) throw new RangeError(i);
            })(r, e, String(t));
          return (0, V[r[0]])(S, r, w.localize, k);
        }).join("");
      }
      function tt(t) {
        const e = t.match(G);
        return e ? e[1].replace(Z, "'") : t;
      }
    },
    7149: (t, e, n) => {
      "use strict";
      n.d(e, { bwo: () => r, imn: () => o });
      var i = n(6688);
      function r(t) {
        return (0, i.k5)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d:
                  "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 01-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0119 8c0-1.1.9-2 2-2s2 .9 2 2z",
              },
            },
          ],
        })(t);
      }
      function o(t) {
        return (0, i.k5)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d:
                  "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
              },
            },
          ],
        })(t);
      }
    },
    7304: (t, e, n) => {
      "use strict";
      n.d(e, {
        Bs: () => Hr,
        A6: () => ni,
        E8: () => ao,
        PP: () => Go,
        t1: () => Ir,
        ju: () => ri,
        dN: () => ko,
        s$: () => To,
        ZT: () => oi,
        No: () => Jr,
        kc: () => ts,
        FN: () => to,
        h9: () => li,
        pr: () => ms,
        hE: () => Do,
        m_: () => Xo,
      });
      var i = n(9379),
        r = n(4705);
      function o(t) {
        return (t + 0.5) | 0;
      }
      const s = (t, e, n) => Math.max(Math.min(t, n), e);
      function a(t) {
        return s(o(2.55 * t), 0, 255);
      }
      function l(t) {
        return s(o(255 * t), 0, 255);
      }
      function c(t) {
        return s(o(t / 2.55) / 100, 0, 1);
      }
      function u(t) {
        return s(o(100 * t), 0, 100);
      }
      const h = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        d = [..."0123456789ABCDEF"],
        f = (t) => d[15 & t],
        p = (t) => d[(240 & t) >> 4] + d[15 & t],
        g = (t) => (240 & t) >> 4 === (15 & t);
      function m(t) {
        var e = ((t) => g(t.r) && g(t.g) && g(t.b) && g(t.a))(t) ? f : p;
        return t
          ? "#" +
              e(t.r) +
              e(t.g) +
              e(t.b) +
              ((t, e) => (t < 255 ? e(t) : ""))(t.a, e)
          : void 0;
      }
      const v = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function y(t, e, n) {
        const i = e * Math.min(n, 1 - n),
          r = function (e) {
            let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e + t / 30) % 12;
            return n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
          };
        return [r(0), r(8), r(4)];
      }
      function b(t, e, n) {
        const i = function (i) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (i + t / 60) % 6;
          return n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
        };
        return [i(5), i(3), i(1)];
      }
      function x(t, e, n) {
        const i = y(t, 1, 0.5);
        let r;
        for (
          e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0;
          r < 3;
          r++
        )
          (i[r] *= 1 - e - n), (i[r] += e);
        return i;
      }
      function w(t) {
        const e = t.r / 255,
          n = t.g / 255,
          i = t.b / 255,
          r = Math.max(e, n, i),
          o = Math.min(e, n, i),
          s = (r + o) / 2;
        let a, l, c;
        return (
          r !== o &&
            ((c = r - o),
            (l = s > 0.5 ? c / (2 - r - o) : c / (r + o)),
            (a = (function (t, e, n, i, r) {
              return t === r
                ? (e - n) / i + (e < n ? 6 : 0)
                : e === r
                ? (n - t) / i + 2
                : (t - e) / i + 4;
            })(e, n, i, c, r)),
            (a = 60 * a + 0.5)),
          [0 | a, l || 0, s]
        );
      }
      function _(t, e, n, i) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(l);
      }
      function M(t, e, n) {
        return _(y, t, e, n);
      }
      function S(t) {
        return ((t % 360) + 360) % 360;
      }
      function A(t) {
        const e = v.exec(t);
        let n,
          i = 255;
        if (!e) return;
        e[5] !== n && (i = e[6] ? a(+e[5]) : l(+e[5]));
        const r = S(+e[2]),
          o = +e[3] / 100,
          s = +e[4] / 100;
        return (
          (n =
            "hwb" === e[1]
              ? (function (t, e, n) {
                  return _(x, t, e, n);
                })(r, o, s)
              : "hsv" === e[1]
              ? (function (t, e, n) {
                  return _(b, t, e, n);
                })(r, o, s)
              : M(r, o, s)),
          { r: n[0], g: n[1], b: n[2], a: i }
        );
      }
      const k = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        P = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let C;
      function E(t) {
        C ||
          ((C = (function () {
            const t = {},
              e = Object.keys(P),
              n = Object.keys(k);
            let i, r, o, s, a;
            for (i = 0; i < e.length; i++) {
              for (s = a = e[i], r = 0; r < n.length; r++)
                (o = n[r]), (a = a.replace(o, k[o]));
              (o = parseInt(P[s], 16)),
                (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
            }
            return t;
          })()),
          (C.transparent = [0, 0, 0, 0]));
        const e = C[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      const T = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      const O = (t) =>
          t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
        D = (t) =>
          t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      function R(t, e, n) {
        if (t) {
          let i = w(t);
          (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
            (i = M(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
        }
      }
      function L(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function F(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = l(t[3])))
            : ((e = L(t, { r: 0, g: 0, b: 0, a: 1 })).a = l(e.a)),
          e
        );
      }
      function V(t) {
        return "r" === t.charAt(0)
          ? (function (t) {
              const e = T.exec(t);
              let n,
                i,
                r,
                o = 255;
              if (e) {
                if (e[7] !== n) {
                  const t = +e[7];
                  o = e[8] ? a(t) : s(255 * t, 0, 255);
                }
                return (
                  (n = +e[1]),
                  (i = +e[3]),
                  (r = +e[5]),
                  (n = 255 & (e[2] ? a(n) : s(n, 0, 255))),
                  (i = 255 & (e[4] ? a(i) : s(i, 0, 255))),
                  (r = 255 & (e[6] ? a(r) : s(r, 0, 255))),
                  { r: n, g: i, b: r, a: o }
                );
              }
            })(t)
          : A(t);
      }
      class I {
        constructor(t) {
          if (t instanceof I) return t;
          const e = typeof t;
          let n;
          "object" === e
            ? (n = F(t))
            : "string" === e &&
              (n =
                (function (t) {
                  var e,
                    n = t.length;
                  return (
                    "#" === t[0] &&
                      (4 === n || 5 === n
                        ? (e = {
                            r: 255 & (17 * h[t[1]]),
                            g: 255 & (17 * h[t[2]]),
                            b: 255 & (17 * h[t[3]]),
                            a: 5 === n ? 17 * h[t[4]] : 255,
                          })
                        : (7 !== n && 9 !== n) ||
                          (e = {
                            r: (h[t[1]] << 4) | h[t[2]],
                            g: (h[t[3]] << 4) | h[t[4]],
                            b: (h[t[5]] << 4) | h[t[6]],
                            a: 9 === n ? (h[t[7]] << 4) | h[t[8]] : 255,
                          })),
                    e
                  );
                })(t) ||
                E(t) ||
                V(t)),
            (this._rgb = n),
            (this._valid = !!n);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = L(this._rgb);
          return t && (t.a = c(t.a)), t;
        }
        set rgb(t) {
          this._rgb = F(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? "rgba("
                      .concat(t.r, ", ")
                      .concat(t.g, ", ")
                      .concat(t.b, ", ")
                      .concat(c(t.a), ")")
                  : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")"))
            : void 0;
          var t;
        }
        hexString() {
          return this._valid ? m(this._rgb) : void 0;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = w(t),
                  n = e[0],
                  i = u(e[1]),
                  r = u(e[2]);
                return t.a < 255
                  ? "hsla("
                      .concat(n, ", ")
                      .concat(i, "%, ")
                      .concat(r, "%, ")
                      .concat(c(t.a), ")")
                  : "hsl(".concat(n, ", ").concat(i, "%, ").concat(r, "%)");
              })(this._rgb)
            : void 0;
        }
        mix(t, e) {
          if (t) {
            const n = this.rgb,
              i = t.rgb;
            let r;
            const o = e === r ? 0.5 : e,
              s = 2 * o - 1,
              a = n.a - i.a,
              l = ((s * a === -1 ? s : (s + a) / (1 + s * a)) + 1) / 2;
            (r = 1 - l),
              (n.r = 255 & (l * n.r + r * i.r + 0.5)),
              (n.g = 255 & (l * n.g + r * i.g + 0.5)),
              (n.b = 255 & (l * n.b + r * i.b + 0.5)),
              (n.a = o * n.a + (1 - o) * i.a),
              (this.rgb = n);
          }
          return this;
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, n) {
                const i = D(c(t.r)),
                  r = D(c(t.g)),
                  o = D(c(t.b));
                return {
                  r: l(O(i + n * (D(c(e.r)) - i))),
                  g: l(O(r + n * (D(c(e.g)) - r))),
                  b: l(O(o + n * (D(c(e.b)) - o))),
                  a: t.a + n * (e.a - t.a),
                };
              })(this._rgb, t._rgb, e)),
            this
          );
        }
        clone() {
          return new I(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = l(t)), this;
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = o(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return R(this._rgb, 2, t), this;
        }
        darken(t) {
          return R(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return R(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return R(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return (
            (function (t, e) {
              var n = w(t);
              (n[0] = S(n[0] + e)),
                (n = M(n)),
                (t.r = n[0]),
                (t.g = n[1]),
                (t.b = n[2]);
            })(this._rgb, t),
            this
          );
        }
      }
      function j() {}
      const z = (() => {
        let t = 0;
        return () => t++;
      })();
      function N(t) {
        return null === t || void 0 === t;
      }
      function B(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
      }
      function W(t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      function H(t) {
        return ("number" === typeof t || t instanceof Number) && isFinite(+t);
      }
      function U(t, e) {
        return H(t) ? t : e;
      }
      function Y(t, e) {
        return "undefined" === typeof t ? e : t;
      }
      const q = (t, e) =>
        "string" === typeof t && t.endsWith("%")
          ? (parseFloat(t) / 100) * e
          : +t;
      function X(t, e, n) {
        if (t && "function" === typeof t.call) return t.apply(n, e);
      }
      function $(t, e, n, i) {
        let r, o, s;
        if (B(t))
          if (((o = t.length), i))
            for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
          else for (r = 0; r < o; r++) e.call(n, t[r], r);
        else if (W(t))
          for (s = Object.keys(t), o = s.length, r = 0; r < o; r++)
            e.call(n, t[s[r]], s[r]);
      }
      function K(t, e) {
        let n, i, r, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, i = t.length; n < i; ++n)
          if (
            ((r = t[n]),
            (o = e[n]),
            r.datasetIndex !== o.datasetIndex || r.index !== o.index)
          )
            return !1;
        return !0;
      }
      function G(t) {
        if (B(t)) return t.map(G);
        if (W(t)) {
          const e = Object.create(null),
            n = Object.keys(t),
            i = n.length;
          let r = 0;
          for (; r < i; ++r) e[n[r]] = G(t[n[r]]);
          return e;
        }
        return t;
      }
      function Z(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      function J(t, e, n, i) {
        if (!Z(t)) return;
        const r = e[t],
          o = n[t];
        W(r) && W(o) ? Q(r, o, i) : (e[t] = G(o));
      }
      function Q(t, e, n) {
        const i = B(e) ? e : [e],
          r = i.length;
        if (!W(t)) return t;
        const o = (n = n || {}).merger || J;
        let s;
        for (let a = 0; a < r; ++a) {
          if (((s = i[a]), !W(s))) continue;
          const e = Object.keys(s);
          for (let i = 0, r = e.length; i < r; ++i) o(e[i], t, s, n);
        }
        return t;
      }
      function tt(t, e) {
        return Q(t, e, { merger: et });
      }
      function et(t, e, n) {
        if (!Z(t)) return;
        const i = e[t],
          r = n[t];
        W(i) && W(r)
          ? tt(i, r)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = G(r));
      }
      const nt = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
      function it(t, e) {
        const n =
          nt[e] ||
          (nt[e] = (function (t) {
            const e = (function (t) {
              const e = t.split("."),
                n = [];
              let i = "";
              for (const r of e)
                (i += r),
                  i.endsWith("\\")
                    ? (i = i.slice(0, -1) + ".")
                    : (n.push(i), (i = ""));
              return n;
            })(t);
            return (t) => {
              for (const n of e) {
                if ("" === n) break;
                t = t && t[n];
              }
              return t;
            };
          })(e));
        return n(t);
      }
      function rt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const ot = (t) => "undefined" !== typeof t,
        st = (t) => "function" === typeof t,
        at = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const n of t) if (!e.has(n)) return !1;
          return !0;
        };
      const lt = Math.PI,
        ct = 2 * lt,
        ut = ct + lt,
        ht = Number.POSITIVE_INFINITY,
        dt = lt / 180,
        ft = lt / 2,
        pt = lt / 4,
        gt = (2 * lt) / 3,
        mt = Math.log10,
        vt = Math.sign;
      function yt(t, e, n) {
        return Math.abs(t - e) < n;
      }
      function bt(t) {
        const e = Math.round(t);
        t = yt(t, e, t / 1e3) ? e : t;
        const n = Math.pow(10, Math.floor(mt(t))),
          i = t / n;
        return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
      }
      function xt(t) {
        return (
          !(function (t) {
            return (
              "symbol" === typeof t ||
              ("object" === typeof t &&
                null !== t &&
                !(Symbol.toPrimitive in t || "toString" in t || "valueOf" in t))
            );
          })(t) &&
          !isNaN(parseFloat(t)) &&
          isFinite(t)
        );
      }
      function wt(t, e, n) {
        let i, r, o;
        for (i = 0, r = t.length; i < r; i++)
          (o = t[i][n]),
            isNaN(o) ||
              ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
      }
      function _t(t) {
        return t * (lt / 180);
      }
      function Mt(t) {
        return t * (180 / lt);
      }
      function St(t) {
        if (!H(t)) return;
        let e = 1,
          n = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
        return n;
      }
      function At(t, e) {
        const n = e.x - t.x,
          i = e.y - t.y,
          r = Math.sqrt(n * n + i * i);
        let o = Math.atan2(i, n);
        return o < -0.5 * lt && (o += ct), { angle: o, distance: r };
      }
      function kt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function Pt(t, e) {
        return ((t - e + ut) % ct) - lt;
      }
      function Ct(t) {
        return ((t % ct) + ct) % ct;
      }
      function Et(t, e, n, i) {
        const r = Ct(t),
          o = Ct(e),
          s = Ct(n),
          a = Ct(o - r),
          l = Ct(s - r),
          c = Ct(r - o),
          u = Ct(r - s);
        return r === o || r === s || (i && o === s) || (a > l && c < u);
      }
      function Tt(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function Ot(t, e, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
        return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
      }
      function Dt(t, e, n) {
        n = n || ((n) => t[n] < e);
        let i,
          r = t.length - 1,
          o = 0;
        for (; r - o > 1; ) (i = (o + r) >> 1), n(i) ? (o = i) : (r = i);
        return { lo: o, hi: r };
      }
      const Rt = (t, e, n, i) =>
          Dt(
            t,
            n,
            i
              ? (i) => {
                  const r = t[i][e];
                  return r < n || (r === n && t[i + 1][e] === n);
                }
              : (i) => t[i][e] < n
          ),
        Lt = (t, e, n) => Dt(t, n, (i) => t[i][e] >= n);
      const Ft = ["push", "pop", "shift", "splice", "unshift"];
      function Vt(t, e) {
        const n = t._chartjs;
        if (!n) return;
        const i = n.listeners,
          r = i.indexOf(e);
        -1 !== r && i.splice(r, 1),
          i.length > 0 ||
            (Ft.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function It(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e);
      }
      const jt =
        "undefined" === typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function zt(t, e) {
        let n = [],
          i = !1;
        return function () {
          for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
            o[s] = arguments[s];
          (n = o),
            i ||
              ((i = !0),
              jt.call(window, () => {
                (i = !1), t.apply(e, n);
              }));
        };
      }
      const Nt = (t) =>
          "start" === t ? "left" : "end" === t ? "right" : "center",
        Bt = (t, e, n) => ("start" === t ? e : "end" === t ? n : (e + n) / 2);
      function Wt(t, e, n) {
        const i = e.length;
        let r = 0,
          o = i;
        if (t._sorted) {
          const { iScale: s, vScale: a, _parsed: l } = t,
            c =
              t.dataset && t.dataset.options
                ? t.dataset.options.spanGaps
                : null,
            u = s.axis,
            {
              min: h,
              max: d,
              minDefined: f,
              maxDefined: p,
            } = s.getUserBounds();
          if (f) {
            if (
              ((r = Math.min(
                Rt(l, u, h).lo,
                n ? i : Rt(e, u, s.getPixelForValue(h)).lo
              )),
              c)
            ) {
              const t = l
                .slice(0, r + 1)
                .reverse()
                .findIndex((t) => !N(t[a.axis]));
              r -= Math.max(0, t);
            }
            r = Tt(r, 0, i - 1);
          }
          if (p) {
            let t = Math.max(
              Rt(l, s.axis, d, !0).hi + 1,
              n ? 0 : Rt(e, u, s.getPixelForValue(d), !0).hi + 1
            );
            if (c) {
              const e = l.slice(t - 1).findIndex((t) => !N(t[a.axis]));
              t += Math.max(0, e);
            }
            o = Tt(t, r, i) - r;
          } else o = i - r;
        }
        return { start: r, count: o };
      }
      function Ht(t) {
        const { xScale: e, yScale: n, _scaleRanges: i } = t,
          r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
        if (!i) return (t._scaleRanges = r), !0;
        const o =
          i.xmin !== e.min ||
          i.xmax !== e.max ||
          i.ymin !== n.min ||
          i.ymax !== n.max;
        return Object.assign(i, r), o;
      }
      const Ut = (t) => 0 === t || 1 === t,
        Yt = (t, e, n) =>
          -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ct) / n),
        qt = (t, e, n) =>
          Math.pow(2, -10 * t) * Math.sin(((t - e) * ct) / n) + 1,
        Xt = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * ft),
          easeOutSine: (t) => Math.sin(t * ft),
          easeInOutSine: (t) => -0.5 * (Math.cos(lt * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            Ut(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (Ut(t) ? t : Yt(t, 0.075, 0.3)),
          easeOutElastic: (t) => (Ut(t) ? t : qt(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return Ut(t)
              ? t
              : t < 0.5
              ? 0.5 * Yt(2 * t, e, 0.45)
              : 0.5 + 0.5 * qt(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - Xt.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              n = 2.75;
            return t < 1 / n
              ? e * t * t
              : t < 2 / n
              ? e * (t -= 1.5 / n) * t + 0.75
              : t < 2.5 / n
              ? e * (t -= 2.25 / n) * t + 0.9375
              : e * (t -= 2.625 / n) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5
              ? 0.5 * Xt.easeInBounce(2 * t)
              : 0.5 * Xt.easeOutBounce(2 * t - 1) + 0.5,
        };
      function $t(t) {
        if (t && "object" === typeof t) {
          const e = t.toString();
          return (
            "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
          );
        }
        return !1;
      }
      function Kt(t) {
        return $t(t) ? t : new I(t);
      }
      function Gt(t) {
        return $t(t) ? t : new I(t).saturate(0.5).darken(0.1).hexString();
      }
      const Zt = ["x", "y", "borderWidth", "radius", "tension"],
        Jt = ["color", "borderColor", "backgroundColor"];
      const Qt = new Map();
      function te(t, e, n) {
        return (function (t, e) {
          e = e || {};
          const n = t + JSON.stringify(e);
          let i = Qt.get(n);
          return i || ((i = new Intl.NumberFormat(t, e)), Qt.set(n, i)), i;
        })(e, n).format(t);
      }
      const ee = {
        values: (t) => (B(t) ? t : "" + t),
        numeric(t, e, n) {
          if (0 === t) return "0";
          const i = this.chart.options.locale;
          let r,
            o = t;
          if (n.length > 1) {
            const e = Math.max(
              Math.abs(n[0].value),
              Math.abs(n[n.length - 1].value)
            );
            (e < 1e-4 || e > 1e15) && (r = "scientific"),
              (o = (function (t, e) {
                let n =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                Math.abs(n) >= 1 &&
                  t !== Math.floor(t) &&
                  (n = t - Math.floor(t));
                return n;
              })(t, n));
          }
          const s = mt(Math.abs(o)),
            a = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            l = {
              notation: r,
              minimumFractionDigits: a,
              maximumFractionDigits: a,
            };
          return Object.assign(l, this.options.ticks.format), te(t, i, l);
        },
        logarithmic(t, e, n) {
          if (0 === t) return "0";
          const i = n[e].significand || t / Math.pow(10, Math.floor(mt(t)));
          return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
            ? ee.numeric.call(this, t, e, n)
            : "";
        },
      };
      var ne = { formatters: ee };
      const ie = Object.create(null),
        re = Object.create(null);
      function oe(t, e) {
        if (!e) return t;
        const n = e.split(".");
        for (let i = 0, r = n.length; i < r; ++i) {
          const e = n[i];
          t = t[e] || (t[e] = Object.create(null));
        }
        return t;
      }
      function se(t, e, n) {
        return "string" === typeof e ? Q(oe(t, e), n) : Q(oe(t, ""), e);
      }
      class ae {
        constructor(t, e) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) =>
              t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => Gt(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => Gt(e.borderColor)),
            (this.hoverColor = (t, e) => Gt(e.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e);
        }
        set(t, e) {
          return se(this, t, e);
        }
        get(t) {
          return oe(this, t);
        }
        describe(t, e) {
          return se(re, t, e);
        }
        override(t, e) {
          return se(ie, t, e);
        }
        route(t, e, n, i) {
          const r = oe(this, t),
            o = oe(this, n),
            s = "_" + e;
          Object.defineProperties(r, {
            [s]: { value: r[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[s],
                  e = o[i];
                return W(t) ? Object.assign({}, e, t) : Y(t, e);
              },
              set(t) {
                this[s] = t;
              },
            },
          });
        }
        apply(t) {
          t.forEach((t) => t(this));
        }
      }
      var le = new ae(
        {
          _scriptable: (t) => !t.startsWith("on"),
          _indexable: (t) => "events" !== t,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            t.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) =>
                  "onProgress" !== t && "onComplete" !== t && "fn" !== t,
              }),
              t.set("animations", {
                colors: { type: "color", properties: Jt },
                numbers: { type: "number", properties: Zt },
              }),
              t.describe("animations", { _fallback: "animation" }),
              t.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (t) => 0 | t,
                    },
                  },
                },
              });
          },
          function (t) {
            t.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (t) {
            t.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: ne.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              t.route("scale.ticks", "color", "", "color"),
              t.route("scale.grid", "color", "", "borderColor"),
              t.route("scale.border", "color", "", "borderColor"),
              t.route("scale.title", "color", "", "color"),
              t.describe("scale", {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith("before") &&
                  !t.startsWith("after") &&
                  "callback" !== t &&
                  "parser" !== t,
                _indexable: (t) =>
                  "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
              }),
              t.describe("scales", { _fallback: "scale" }),
              t.describe("scale.ticks", {
                _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
                _indexable: (t) => "backdropPadding" !== t,
              });
          },
        ]
      );
      function ce(t, e, n, i, r) {
        let o = e[r];
        return (
          o || ((o = e[r] = t.measureText(r).width), n.push(r)),
          o > i && (i = o),
          i
        );
      }
      function ue(t, e, n, i) {
        let r = ((i = i || {}).data = i.data || {}),
          o = (i.garbageCollect = i.garbageCollect || []);
        i.font !== e &&
          ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = e)),
          t.save(),
          (t.font = e);
        let s = 0;
        const a = n.length;
        let l, c, u, h, d;
        for (l = 0; l < a; l++)
          if (((h = n[l]), void 0 === h || null === h || B(h))) {
            if (B(h))
              for (c = 0, u = h.length; c < u; c++)
                (d = h[c]),
                  void 0 === d || null === d || B(d) || (s = ce(t, r, o, s, d));
          } else s = ce(t, r, o, s, h);
        t.restore();
        const f = o.length / 2;
        if (f > n.length) {
          for (l = 0; l < f; l++) delete r[o[l]];
          o.splice(0, f);
        }
        return s;
      }
      function he(t, e, n) {
        const i = t.currentDevicePixelRatio,
          r = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((e - r) * i) / i + r;
      }
      function de(t, e) {
        (e || t) &&
          ((e = e || t.getContext("2d")).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore());
      }
      function fe(t, e, n, i) {
        pe(t, e, n, i, null);
      }
      function pe(t, e, n, i, r) {
        let o, s, a, l, c, u, h, d;
        const f = e.pointStyle,
          p = e.rotation,
          g = e.radius;
        let m = (p || 0) * dt;
        if (
          f &&
          "object" === typeof f &&
          ((o = f.toString()),
          "[object HTMLImageElement]" === o ||
            "[object HTMLCanvasElement]" === o)
        )
          return (
            t.save(),
            t.translate(n, i),
            t.rotate(m),
            t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
            void t.restore()
          );
        if (!(isNaN(g) || g <= 0)) {
          switch ((t.beginPath(), f)) {
            default:
              r ? t.ellipse(n, i, r / 2, g, 0, 0, ct) : t.arc(n, i, g, 0, ct),
                t.closePath();
              break;
            case "triangle":
              (u = r ? r / 2 : g),
                t.moveTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                (m += gt),
                t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                (m += gt),
                t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                t.closePath();
              break;
            case "rectRounded":
              (c = 0.516 * g),
                (l = g - c),
                (s = Math.cos(m + pt) * l),
                (h = Math.cos(m + pt) * (r ? r / 2 - c : l)),
                (a = Math.sin(m + pt) * l),
                (d = Math.sin(m + pt) * (r ? r / 2 - c : l)),
                t.arc(n - h, i - a, c, m - lt, m - ft),
                t.arc(n + d, i - s, c, m - ft, m),
                t.arc(n + h, i + a, c, m, m + ft),
                t.arc(n - d, i + s, c, m + ft, m + lt),
                t.closePath();
              break;
            case "rect":
              if (!p) {
                (l = Math.SQRT1_2 * g),
                  (u = r ? r / 2 : l),
                  t.rect(n - u, i - l, 2 * u, 2 * l);
                break;
              }
              m += pt;
            case "rectRot":
              (h = Math.cos(m) * (r ? r / 2 : g)),
                (s = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (d = Math.sin(m) * (r ? r / 2 : g)),
                t.moveTo(n - h, i - a),
                t.lineTo(n + d, i - s),
                t.lineTo(n + h, i + a),
                t.lineTo(n - d, i + s),
                t.closePath();
              break;
            case "crossRot":
              m += pt;
            case "cross":
              (h = Math.cos(m) * (r ? r / 2 : g)),
                (s = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (d = Math.sin(m) * (r ? r / 2 : g)),
                t.moveTo(n - h, i - a),
                t.lineTo(n + h, i + a),
                t.moveTo(n + d, i - s),
                t.lineTo(n - d, i + s);
              break;
            case "star":
              (h = Math.cos(m) * (r ? r / 2 : g)),
                (s = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (d = Math.sin(m) * (r ? r / 2 : g)),
                t.moveTo(n - h, i - a),
                t.lineTo(n + h, i + a),
                t.moveTo(n + d, i - s),
                t.lineTo(n - d, i + s),
                (m += pt),
                (h = Math.cos(m) * (r ? r / 2 : g)),
                (s = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (d = Math.sin(m) * (r ? r / 2 : g)),
                t.moveTo(n - h, i - a),
                t.lineTo(n + h, i + a),
                t.moveTo(n + d, i - s),
                t.lineTo(n - d, i + s);
              break;
            case "line":
              (s = r ? r / 2 : Math.cos(m) * g),
                (a = Math.sin(m) * g),
                t.moveTo(n - s, i - a),
                t.lineTo(n + s, i + a);
              break;
            case "dash":
              t.moveTo(n, i),
                t.lineTo(
                  n + Math.cos(m) * (r ? r / 2 : g),
                  i + Math.sin(m) * g
                );
              break;
            case !1:
              t.closePath();
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function ge(t, e, n) {
        return (
          (n = n || 0.5),
          !e ||
            (t &&
              t.x > e.left - n &&
              t.x < e.right + n &&
              t.y > e.top - n &&
              t.y < e.bottom + n)
        );
      }
      function me(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function ve(t) {
        t.restore();
      }
      function ye(t, e, n, i, r) {
        if (!e) return t.lineTo(n.x, n.y);
        if ("middle" === r) {
          const i = (e.x + n.x) / 2;
          t.lineTo(i, e.y), t.lineTo(i, n.y);
        } else
          ("after" === r) !== !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y);
      }
      function be(t, e, n, i) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(
          i ? e.cp1x : e.cp2x,
          i ? e.cp1y : e.cp2y,
          i ? n.cp2x : n.cp1x,
          i ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function xe(t, e, n, i, r) {
        if (r.strikethrough || r.underline) {
          const o = t.measureText(i),
            s = e - o.actualBoundingBoxLeft,
            a = e + o.actualBoundingBoxRight,
            l = n - o.actualBoundingBoxAscent,
            c = n + o.actualBoundingBoxDescent,
            u = r.strikethrough ? (l + c) / 2 : c;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = r.decorationWidth || 2),
            t.moveTo(s, u),
            t.lineTo(a, u),
            t.stroke();
        }
      }
      function we(t, e) {
        const n = t.fillStyle;
        (t.fillStyle = e.color),
          t.fillRect(e.left, e.top, e.width, e.height),
          (t.fillStyle = n);
      }
      function _e(t, e, n, i, r) {
        let o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
        const s = B(e) ? e : [e],
          a = o.strokeWidth > 0 && "" !== o.strokeColor;
        let l, c;
        for (
          t.save(),
            t.font = r.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                N(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, o),
            l = 0;
          l < s.length;
          ++l
        )
          (c = s[l]),
            o.backdrop && we(t, o.backdrop),
            a &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              N(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(c, n, i, o.maxWidth)),
            t.fillText(c, n, i, o.maxWidth),
            xe(t, n, i, c, o),
            (i += Number(r.lineHeight));
        t.restore();
      }
      function Me(t, e) {
        const { x: n, y: i, w: r, h: o, radius: s } = e;
        t.arc(n + s.topLeft, i + s.topLeft, s.topLeft, 1.5 * lt, lt, !0),
          t.lineTo(n, i + o - s.bottomLeft),
          t.arc(
            n + s.bottomLeft,
            i + o - s.bottomLeft,
            s.bottomLeft,
            lt,
            ft,
            !0
          ),
          t.lineTo(n + r - s.bottomRight, i + o),
          t.arc(
            n + r - s.bottomRight,
            i + o - s.bottomRight,
            s.bottomRight,
            ft,
            0,
            !0
          ),
          t.lineTo(n + r, i + s.topRight),
          t.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -ft, !0),
          t.lineTo(n + s.topLeft, i);
      }
      const Se = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Ae = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function ke(t, e) {
        const n = ("" + t).match(Se);
        if (!n || "normal" === n[1]) return 1.2 * e;
        switch (((t = +n[2]), n[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      }
      const Pe = (t) => +t || 0;
      function Ce(t, e) {
        const n = {},
          i = W(e),
          r = i ? Object.keys(e) : e,
          o = W(t) ? (i ? (n) => Y(t[n], t[e[n]]) : (e) => t[e]) : () => t;
        for (const s of r) n[s] = Pe(o(s));
        return n;
      }
      function Ee(t) {
        return Ce(t, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Te(t) {
        return Ce(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function Oe(t) {
        const e = Ee(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function De(t, e) {
        (t = t || {}), (e = e || le.font);
        let n = Y(t.size, e.size);
        "string" === typeof n && (n = parseInt(n, 10));
        let i = Y(t.style, e.style);
        i &&
          !("" + i).match(Ae) &&
          (console.warn('Invalid font style specified: "' + i + '"'),
          (i = void 0));
        const r = {
          family: Y(t.family, e.family),
          lineHeight: ke(Y(t.lineHeight, e.lineHeight), n),
          size: n,
          style: i,
          weight: Y(t.weight, e.weight),
          string: "",
        };
        return (
          (r.string = (function (t) {
            return !t || N(t.size) || N(t.family)
              ? null
              : (t.style ? t.style + " " : "") +
                  (t.weight ? t.weight + " " : "") +
                  t.size +
                  "px " +
                  t.family;
          })(r)),
          r
        );
      }
      function Re(t, e, n, i) {
        let r,
          o,
          s,
          a = !0;
        for (r = 0, o = t.length; r < o; ++r)
          if (
            ((s = t[r]),
            void 0 !== s &&
              (void 0 !== e &&
                "function" === typeof s &&
                ((s = s(e)), (a = !1)),
              void 0 !== n && B(s) && ((s = s[n % s.length]), (a = !1)),
              void 0 !== s))
          )
            return i && !a && (i.cacheable = !1), s;
      }
      function Le(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function Fe(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [""],
          n = arguments.length > 3 ? arguments[3] : void 0,
          i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : () => t[0];
        const r = (arguments.length > 2 ? arguments[2] : void 0) || t;
        "undefined" === typeof n && (n = qe("_fallback", t));
        const o = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: t,
          _rootScopes: r,
          _fallback: n,
          _getTarget: i,
          override: (i) => Fe([i, ...t], e, r, n),
        };
        return new Proxy(o, {
          deleteProperty: (e, n) => (
            delete e[n], delete e._keys, delete t[0][n], !0
          ),
          get: (n, i) =>
            Ne(n, i, () =>
              (function (t, e, n, i) {
                let r;
                for (const o of e)
                  if (((r = qe(je(o, t), n)), "undefined" !== typeof r))
                    return ze(t, r) ? Ue(n, i, t, r) : r;
              })(i, e, t, n)
            ),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => Xe(t).includes(e),
          ownKeys: (t) => Xe(t),
          set(t, e, n) {
            const r = t._storage || (t._storage = i());
            return (t[e] = r[e] = n), delete t._keys, !0;
          },
        });
      }
      function Ve(t, e, n, i) {
        const r = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: Ie(t, i),
          setContext: (e) => Ve(t, e, n, i),
          override: (r) => Ve(t.override(r), e, n, i),
        };
        return new Proxy(r, {
          deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
          get: (t, e, n) =>
            Ne(t, e, () =>
              (function (t, e, n) {
                const {
                  _proxy: i,
                  _context: r,
                  _subProxy: o,
                  _descriptors: s,
                } = t;
                let a = i[e];
                st(a) &&
                  s.isScriptable(e) &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: r,
                      _context: o,
                      _subProxy: s,
                      _stack: a,
                    } = n;
                    if (a.has(t))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(a).join("->") +
                          "->" +
                          t
                      );
                    a.add(t);
                    let l = e(o, s || i);
                    a.delete(t), ze(t, l) && (l = Ue(r._scopes, r, t, l));
                    return l;
                  })(e, a, t, n));
                B(a) &&
                  a.length &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: r,
                      _context: o,
                      _subProxy: s,
                      _descriptors: a,
                    } = n;
                    if ("undefined" !== typeof o.index && i(t))
                      return e[o.index % e.length];
                    if (W(e[0])) {
                      const n = e,
                        i = r._scopes.filter((t) => t !== n);
                      e = [];
                      for (const l of n) {
                        const n = Ue(i, r, t, l);
                        e.push(Ve(n, o, s && s[t], a));
                      }
                    }
                    return e;
                  })(e, a, t, s.isIndexable));
                ze(e, a) && (a = Ve(a, r, o && o[e], s));
                return a;
              })(t, e, n)
            ),
          getOwnPropertyDescriptor: (e, n) =>
            e._descriptors.allKeys
              ? Reflect.has(t, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, n),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, n) => Reflect.has(t, n),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, n, i) => ((t[n] = i), delete e[n], !0),
        });
      }
      function Ie(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { scriptable: !0, indexable: !0 };
        const {
          _scriptable: n = e.scriptable,
          _indexable: i = e.indexable,
          _allKeys: r = e.allKeys,
        } = t;
        return {
          allKeys: r,
          scriptable: n,
          indexable: i,
          isScriptable: st(n) ? n : () => n,
          isIndexable: st(i) ? i : () => i,
        };
      }
      const je = (t, e) => (t ? t + rt(e) : e),
        ze = (t, e) =>
          W(e) &&
          "adapters" !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function Ne(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e)
          return t[e];
        const i = n();
        return (t[e] = i), i;
      }
      function Be(t, e, n) {
        return st(t) ? t(e, n) : t;
      }
      const We = (t, e) =>
        !0 === t ? e : "string" === typeof t ? it(e, t) : void 0;
      function He(t, e, n, i, r) {
        for (const o of e) {
          const e = We(n, o);
          if (e) {
            t.add(e);
            const o = Be(e._fallback, n, r);
            if ("undefined" !== typeof o && o !== n && o !== i) return o;
          } else if (!1 === e && "undefined" !== typeof i && n !== i)
            return null;
        }
        return !1;
      }
      function Ue(t, e, n, i) {
        const r = e._rootScopes,
          o = Be(e._fallback, n, i),
          s = [...t, ...r],
          a = new Set();
        a.add(i);
        let l = Ye(a, s, n, o || n, i);
        return (
          null !== l &&
          ("undefined" === typeof o ||
            o === n ||
            ((l = Ye(a, s, o, l, i)), null !== l)) &&
          Fe(Array.from(a), [""], r, o, () =>
            (function (t, e, n) {
              const i = t._getTarget();
              e in i || (i[e] = {});
              const r = i[e];
              if (B(r) && W(n)) return n;
              return r || {};
            })(e, n, i)
          )
        );
      }
      function Ye(t, e, n, i, r) {
        for (; n; ) n = He(t, e, n, i, r);
        return n;
      }
      function qe(t, e) {
        for (const n of e) {
          if (!n) continue;
          const e = n[t];
          if ("undefined" !== typeof e) return e;
        }
      }
      function Xe(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys = (function (t) {
              const e = new Set();
              for (const n of t)
                for (const t of Object.keys(n).filter(
                  (t) => !t.startsWith("_")
                ))
                  e.add(t);
              return Array.from(e);
            })(t._scopes)),
          e
        );
      }
      function $e(t, e, n, i) {
        const { iScale: r } = t,
          { key: o = "r" } = this._parsing,
          s = new Array(i);
        let a, l, c, u;
        for (a = 0, l = i; a < l; ++a)
          (c = a + n), (u = e[c]), (s[a] = { r: r.parse(it(u, o), c) });
        return s;
      }
      const Ke = Number.EPSILON || 1e-14,
        Ge = (t, e) => e < t.length && !t[e].skip && t[e],
        Ze = (t) => ("x" === t ? "y" : "x");
      function Je(t, e, n, i) {
        const r = t.skip ? e : t,
          o = e,
          s = n.skip ? e : n,
          a = kt(o, r),
          l = kt(s, o);
        let c = a / (a + l),
          u = l / (a + l);
        (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
        const h = i * c,
          d = i * u;
        return {
          previous: { x: o.x - h * (s.x - r.x), y: o.y - h * (s.y - r.y) },
          next: { x: o.x + d * (s.x - r.x), y: o.y + d * (s.y - r.y) },
        };
      }
      function Qe(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
        const n = Ze(e),
          i = t.length,
          r = Array(i).fill(0),
          o = Array(i);
        let s,
          a,
          l,
          c = Ge(t, 0);
        for (s = 0; s < i; ++s)
          if (((a = l), (l = c), (c = Ge(t, s + 1)), l)) {
            if (c) {
              const t = c[e] - l[e];
              r[s] = 0 !== t ? (c[n] - l[n]) / t : 0;
            }
            o[s] = a
              ? c
                ? vt(r[s - 1]) !== vt(r[s])
                  ? 0
                  : (r[s - 1] + r[s]) / 2
                : r[s - 1]
              : r[s];
          }
        !(function (t, e, n) {
          const i = t.length;
          let r,
            o,
            s,
            a,
            l,
            c = Ge(t, 0);
          for (let u = 0; u < i - 1; ++u)
            (l = c),
              (c = Ge(t, u + 1)),
              l &&
                c &&
                (yt(e[u], 0, Ke)
                  ? (n[u] = n[u + 1] = 0)
                  : ((r = n[u] / e[u]),
                    (o = n[u + 1] / e[u]),
                    (a = Math.pow(r, 2) + Math.pow(o, 2)),
                    a <= 9 ||
                      ((s = 3 / Math.sqrt(a)),
                      (n[u] = r * s * e[u]),
                      (n[u + 1] = o * s * e[u]))));
        })(t, r, o),
          (function (t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "x";
            const i = Ze(n),
              r = t.length;
            let o,
              s,
              a,
              l = Ge(t, 0);
            for (let c = 0; c < r; ++c) {
              if (((s = a), (a = l), (l = Ge(t, c + 1)), !a)) continue;
              const r = a[n],
                u = a[i];
              s &&
                ((o = (r - s[n]) / 3),
                (a["cp1".concat(n)] = r - o),
                (a["cp1".concat(i)] = u - o * e[c])),
                l &&
                  ((o = (l[n] - r) / 3),
                  (a["cp2".concat(n)] = r + o),
                  (a["cp2".concat(i)] = u + o * e[c]));
            }
          })(t, o, e);
      }
      function tn(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      function en(t, e, n, i, r) {
        let o, s, a, l;
        if (
          (e.spanGaps && (t = t.filter((t) => !t.skip)),
          "monotone" === e.cubicInterpolationMode)
        )
          Qe(t, r);
        else {
          let n = i ? t[t.length - 1] : t[0];
          for (o = 0, s = t.length; o < s; ++o)
            (a = t[o]),
              (l = Je(
                n,
                a,
                t[Math.min(o + 1, s - (i ? 0 : 1)) % s],
                e.tension
              )),
              (a.cp1x = l.previous.x),
              (a.cp1y = l.previous.y),
              (a.cp2x = l.next.x),
              (a.cp2y = l.next.y),
              (n = a);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let n,
              i,
              r,
              o,
              s,
              a = ge(t[0], e);
            for (n = 0, i = t.length; n < i; ++n)
              (s = o),
                (o = a),
                (a = n < i - 1 && ge(t[n + 1], e)),
                o &&
                  ((r = t[n]),
                  s &&
                    ((r.cp1x = tn(r.cp1x, e.left, e.right)),
                    (r.cp1y = tn(r.cp1y, e.top, e.bottom))),
                  a &&
                    ((r.cp2x = tn(r.cp2x, e.left, e.right)),
                    (r.cp2y = tn(r.cp2y, e.top, e.bottom))));
          })(t, n);
      }
      function nn() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function rn(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
      }
      function on(t, e, n) {
        let i;
        return (
          "string" === typeof t
            ? ((i = parseInt(t, 10)),
              -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n]))
            : (i = t),
          i
        );
      }
      const sn = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
      const an = ["top", "right", "bottom", "left"];
      function ln(t, e, n) {
        const i = {};
        n = n ? "-" + n : "";
        for (let r = 0; r < 4; r++) {
          const o = an[r];
          i[o] = parseFloat(t[e + "-" + o + n]) || 0;
        }
        return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
      }
      function cn(t, e) {
        if ("native" in t) return t;
        const { canvas: n, currentDevicePixelRatio: i } = e,
          r = sn(n),
          o = "border-box" === r.boxSizing,
          s = ln(r, "padding"),
          a = ln(r, "border", "width"),
          { x: l, y: c, box: u } = (function (t, e) {
            const n = t.touches,
              i = n && n.length ? n[0] : t,
              { offsetX: r, offsetY: o } = i;
            let s,
              a,
              l = !1;
            if (
              ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
                r,
                o,
                t.target
              )
            )
              (s = r), (a = o);
            else {
              const t = e.getBoundingClientRect();
              (s = i.clientX - t.left), (a = i.clientY - t.top), (l = !0);
            }
            return { x: s, y: a, box: l };
          })(t, n),
          h = s.left + (u && a.left),
          d = s.top + (u && a.top);
        let { width: f, height: p } = e;
        return (
          o && ((f -= s.width + a.width), (p -= s.height + a.height)),
          {
            x: Math.round((((l - h) / f) * n.width) / i),
            y: Math.round((((c - d) / p) * n.height) / i),
          }
        );
      }
      const un = (t) => Math.round(10 * t) / 10;
      function hn(t, e, n, i) {
        const r = sn(t),
          o = ln(r, "margin"),
          s = on(r.maxWidth, t, "clientWidth") || ht,
          a = on(r.maxHeight, t, "clientHeight") || ht,
          l = (function (t, e, n) {
            let i, r;
            if (void 0 === e || void 0 === n) {
              const o = t && rn(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  s = sn(o),
                  a = ln(s, "border", "width"),
                  l = ln(s, "padding");
                (e = t.width - l.width - a.width),
                  (n = t.height - l.height - a.height),
                  (i = on(s.maxWidth, o, "clientWidth")),
                  (r = on(s.maxHeight, o, "clientHeight"));
              } else (e = t.clientWidth), (n = t.clientHeight);
            }
            return {
              width: e,
              height: n,
              maxWidth: i || ht,
              maxHeight: r || ht,
            };
          })(t, e, n);
        let { width: c, height: u } = l;
        if ("content-box" === r.boxSizing) {
          const t = ln(r, "border", "width"),
            e = ln(r, "padding");
          (c -= e.width + t.width), (u -= e.height + t.height);
        }
        (c = Math.max(0, c - o.width)),
          (u = Math.max(0, i ? c / i : u - o.height)),
          (c = un(Math.min(c, s, l.maxWidth))),
          (u = un(Math.min(u, a, l.maxHeight))),
          c && !u && (u = un(c / 2));
        return (
          (void 0 !== e || void 0 !== n) &&
            i &&
            l.height &&
            u > l.height &&
            ((u = l.height), (c = un(Math.floor(u * i)))),
          { width: c, height: u }
        );
      }
      function dn(t, e, n) {
        const i = e || 1,
          r = un(t.height * i),
          o = un(t.width * i);
        (t.height = un(t.height)), (t.width = un(t.width));
        const s = t.canvas;
        return (
          s.style &&
            (n || (!s.style.height && !s.style.width)) &&
            ((s.style.height = "".concat(t.height, "px")),
            (s.style.width = "".concat(t.width, "px"))),
          (t.currentDevicePixelRatio !== i ||
            s.height !== r ||
            s.width !== o) &&
            ((t.currentDevicePixelRatio = i),
            (s.height = r),
            (s.width = o),
            t.ctx.setTransform(i, 0, 0, i, 0, 0),
            !0)
        );
      }
      const fn = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          nn() &&
            (window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e));
        } catch (e) {}
        return t;
      })();
      function pn(t, e) {
        const n = (function (t, e) {
            return sn(t).getPropertyValue(e);
          })(t, e),
          i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? +i[1] : void 0;
      }
      function gn(t, e, n, i) {
        return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
      }
      function mn(t, e, n, i) {
        return {
          x: t.x + n * (e.x - t.x),
          y:
            "middle" === i
              ? n < 0.5
                ? t.y
                : e.y
              : "after" === i
              ? n < 1
                ? t.y
                : e.y
              : n > 0
              ? e.y
              : t.y,
        };
      }
      function vn(t, e, n, i) {
        const r = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          s = gn(t, r, n),
          a = gn(r, o, n),
          l = gn(o, e, n),
          c = gn(s, a, n),
          u = gn(a, l, n);
        return gn(c, u, n);
      }
      function yn(t, e, n) {
        return t
          ? (function (t, e) {
              return {
                x: (n) => t + t + e - n,
                setWidth(t) {
                  e = t;
                },
                textAlign: (t) =>
                  "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              };
            })(e, n)
          : {
              x: (t) => t,
              setWidth(t) {},
              textAlign: (t) => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            };
      }
      function bn(t, e) {
        let n, i;
        ("ltr" !== e && "rtl" !== e) ||
          ((n = t.canvas.style),
          (i = [
            n.getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", e, "important"),
          (t.prevTextDirection = i));
      }
      function xn(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      }
      function wn(t) {
        return "angle" === t
          ? { between: Et, compare: Pt, normalize: Ct }
          : { between: Ot, compare: (t, e) => t - e, normalize: (t) => t };
      }
      function _n(t) {
        let { start: e, end: n, count: i, loop: r, style: o } = t;
        return {
          start: e % i,
          end: n % i,
          loop: r && (n - e + 1) % i === 0,
          style: o,
        };
      }
      function Mn(t, e, n) {
        if (!n) return [t];
        const { property: i, start: r, end: o } = n,
          s = e.length,
          { compare: a, between: l, normalize: c } = wn(i),
          { start: u, end: h, loop: d, style: f } = (function (t, e, n) {
            const { property: i, start: r, end: o } = n,
              { between: s, normalize: a } = wn(i),
              l = e.length;
            let c,
              u,
              { start: h, end: d, loop: f } = t;
            if (f) {
              for (
                h += l, d += l, c = 0, u = l;
                c < u && s(a(e[h % l][i]), r, o);
                ++c
              )
                h--, d--;
              (h %= l), (d %= l);
            }
            return (
              d < h && (d += l), { start: h, end: d, loop: f, style: t.style }
            );
          })(t, e, n),
          p = [];
        let g,
          m,
          v,
          y = !1,
          b = null;
        const x = () => y || (l(r, v, g) && 0 !== a(r, v)),
          w = () => !y || 0 === a(o, g) || l(o, v, g);
        for (let _ = u, M = u; _ <= h; ++_)
          (m = e[_ % s]),
            m.skip ||
              ((g = c(m[i])),
              g !== v &&
                ((y = l(g, r, o)),
                null === b && x() && (b = 0 === a(g, r) ? _ : M),
                null !== b &&
                  w() &&
                  (p.push(
                    _n({ start: b, end: _, loop: d, count: s, style: f })
                  ),
                  (b = null)),
                (M = _),
                (v = g)));
        return (
          null !== b &&
            p.push(_n({ start: b, end: h, loop: d, count: s, style: f })),
          p
        );
      }
      function Sn(t, e) {
        const n = [],
          i = t.segments;
        for (let r = 0; r < i.length; r++) {
          const o = Mn(i[r], t.points, e);
          o.length && n.push(...o);
        }
        return n;
      }
      function An(t, e, n, i) {
        return i && i.setContext && n
          ? (function (t, e, n, i) {
              const r = t._chart.getContext(),
                o = kn(t.options),
                {
                  _datasetIndex: s,
                  options: { spanGaps: a },
                } = t,
                l = n.length,
                c = [];
              let u = o,
                h = e[0].start,
                d = h;
              function f(t, e, i, r) {
                const o = a ? -1 : 1;
                if (t !== e) {
                  for (t += l; n[t % l].skip; ) t -= o;
                  for (; n[e % l].skip; ) e += o;
                  t % l !== e % l &&
                    (c.push({ start: t % l, end: e % l, loop: i, style: r }),
                    (u = r),
                    (h = e % l));
                }
              }
              for (const p of e) {
                h = a ? h : p.start;
                let t,
                  e = n[h % l];
                for (d = h + 1; d <= p.end; d++) {
                  const o = n[d % l];
                  (t = kn(
                    i.setContext(
                      Le(r, {
                        type: "segment",
                        p0: e,
                        p1: o,
                        p0DataIndex: (d - 1) % l,
                        p1DataIndex: d % l,
                        datasetIndex: s,
                      })
                    )
                  )),
                    Pn(t, u) && f(h, d - 1, p.loop, u),
                    (e = o),
                    (u = t);
                }
                h < d - 1 && f(h, d - 1, p.loop, u);
              }
              return c;
            })(t, e, n, i)
          : e;
      }
      function kn(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function Pn(t, e) {
        if (!e) return !1;
        const n = [],
          i = function (t, e) {
            return $t(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e;
          };
        return JSON.stringify(t, i) !== JSON.stringify(e, i);
      }
      function Cn(t, e, n) {
        return t.options.clip ? t[n] : e[n];
      }
      function En(t, e) {
        const n = e._clip;
        if (n.disabled) return !1;
        const i = (function (t, e) {
          const { xScale: n, yScale: i } = t;
          return n && i
            ? {
                left: Cn(n, e, "left"),
                right: Cn(n, e, "right"),
                top: Cn(i, e, "top"),
                bottom: Cn(i, e, "bottom"),
              }
            : e;
        })(e, t.chartArea);
        return {
          left: !1 === n.left ? 0 : i.left - (!0 === n.left ? 0 : n.left),
          right:
            !1 === n.right ? t.width : i.right + (!0 === n.right ? 0 : n.right),
          top: !1 === n.top ? 0 : i.top - (!0 === n.top ? 0 : n.top),
          bottom:
            !1 === n.bottom
              ? t.height
              : i.bottom + (!0 === n.bottom ? 0 : n.bottom),
        };
      }
      class Tn {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, n, i) {
          const r = e.listeners[i],
            o = e.duration;
          r.forEach((i) =>
            i({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(n - e.start, o),
            })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = jt.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now(),
            e = 0;
          this._charts.forEach((n, i) => {
            if (!n.running || !n.items.length) return;
            const r = n.items;
            let o,
              s = r.length - 1,
              a = !1;
            for (; s >= 0; --s)
              (o = r[s]),
                o._active
                  ? (o._total > n.duration && (n.duration = o._total),
                    o.tick(t),
                    (a = !0))
                  : ((r[s] = r[r.length - 1]), r.pop());
            a && (i.draw(), this._notify(i, n, t, "progress")),
              r.length ||
                ((n.running = !1),
                this._notify(i, n, t, "complete"),
                (n.initial = !1)),
              (e += r.length);
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let n = e.get(t);
          return (
            n ||
              ((n = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, n)),
            n
          );
        }
        listen(t, e, n) {
          this._getAnims(t).listeners[e].push(n);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce(
              (t, e) => Math.max(t, e._duration),
              0
            )),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const n = e.items;
          let i = n.length - 1;
          for (; i >= 0; --i) n[i].cancel();
          (e.items = []), this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
          return this._charts.delete(t);
        }
      }
      var On = new Tn();
      const Dn = "transparent",
        Rn = {
          boolean: (t, e, n) => (n > 0.5 ? e : t),
          color(t, e, n) {
            const i = Kt(t || Dn),
              r = i.valid && Kt(e || Dn);
            return r && r.valid ? r.mix(i, n).hexString() : e;
          },
          number: (t, e, n) => t + (e - t) * n,
        };
      class Ln {
        constructor(t, e, n, i) {
          const r = e[n];
          i = Re([t.to, i, r, t.from]);
          const o = Re([t.from, r, i]);
          (this._active = !0),
            (this._fn = t.fn || Rn[t.type || typeof o]),
            (this._easing = Xt[t.easing] || Xt.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = n),
            (this._from = o),
            (this._to = i),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, n) {
          if (this._active) {
            this._notify(!1);
            const i = this._target[this._prop],
              r = n - this._start,
              o = this._duration - r;
            (this._start = n),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += r),
              (this._loop = !!t.loop),
              (this._to = Re([t.to, e, i, t.from])),
              (this._from = Re([t.from, i, e]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            n = this._duration,
            i = this._prop,
            r = this._from,
            o = this._loop,
            s = this._to;
          let a;
          if (((this._active = r !== s && (o || e < n)), !this._active))
            return (this._target[i] = s), void this._notify(!0);
          e < 0
            ? (this._target[i] = r)
            : ((a = (e / n) % 2),
              (a = o && a > 1 ? 2 - a : a),
              (a = this._easing(Math.min(1, Math.max(0, a)))),
              (this._target[i] = this._fn(r, s, a)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, n) => {
            t.push({ res: e, rej: n });
          });
        }
        _notify(t) {
          const e = t ? "res" : "rej",
            n = this._promises || [];
          for (let i = 0; i < n.length; i++) n[i][e]();
        }
      }
      class Fn {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!W(t)) return;
          const e = Object.keys(le.animation),
            n = this._properties;
          Object.getOwnPropertyNames(t).forEach((i) => {
            const r = t[i];
            if (!W(r)) return;
            const o = {};
            for (const t of e) o[t] = r[t];
            ((B(r.properties) && r.properties) || [i]).forEach((t) => {
              (t !== i && n.has(t)) || n.set(t, o);
            });
          });
        }
        _animateOptions(t, e) {
          const n = e.options,
            i = (function (t, e) {
              if (!e) return;
              let n = t.options;
              if (!n) return void (t.options = e);
              n.$shared &&
                (t.options = n = Object.assign({}, n, {
                  $shared: !1,
                  $animations: {},
                }));
              return n;
            })(t, n);
          if (!i) return [];
          const r = this._createAnimations(i, n);
          return (
            n.$shared &&
              (function (t, e) {
                const n = [],
                  i = Object.keys(e);
                for (let r = 0; r < i.length; r++) {
                  const e = t[i[r]];
                  e && e.active() && n.push(e.wait());
                }
                return Promise.all(n);
              })(t.options.$animations, n).then(
                () => {
                  t.options = n;
                },
                () => {}
              ),
            r
          );
        }
        _createAnimations(t, e) {
          const n = this._properties,
            i = [],
            r = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            s = Date.now();
          let a;
          for (a = o.length - 1; a >= 0; --a) {
            const l = o[a];
            if ("$" === l.charAt(0)) continue;
            if ("options" === l) {
              i.push(...this._animateOptions(t, e));
              continue;
            }
            const c = e[l];
            let u = r[l];
            const h = n.get(l);
            if (u) {
              if (h && u.active()) {
                u.update(h, c, s);
                continue;
              }
              u.cancel();
            }
            h && h.duration
              ? ((r[l] = u = new Ln(h, t, l, c)), i.push(u))
              : (t[l] = c);
          }
          return i;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const n = this._createAnimations(t, e);
          return n.length ? (On.add(this._chart, n), !0) : void 0;
        }
      }
      function Vn(t, e) {
        const n = (t && t.options) || {},
          i = n.reverse,
          r = void 0 === n.min ? e : 0,
          o = void 0 === n.max ? e : 0;
        return { start: i ? o : r, end: i ? r : o };
      }
      function In(t, e) {
        const n = [],
          i = t._getSortedDatasetMetas(e);
        let r, o;
        for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index);
        return n;
      }
      function jn(t, e, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const r = t.keys,
          o = "single" === i.mode;
        let s, a, l, c;
        if (null === e) return;
        let u = !1;
        for (s = 0, a = r.length; s < a; ++s) {
          if (((l = +r[s]), l === n)) {
            if (((u = !0), i.all)) continue;
            break;
          }
          (c = t.values[l]),
            H(c) && (o || 0 === e || vt(e) === vt(c)) && (e += c);
        }
        return u || i.all ? e : 0;
      }
      function zn(t, e) {
        const n = t && t.options.stacked;
        return n || (void 0 === n && void 0 !== e.stack);
      }
      function Nn(t, e, n) {
        const i = t[e] || (t[e] = {});
        return i[n] || (i[n] = {});
      }
      function Bn(t, e, n, i) {
        for (const r of e.getMatchingVisibleMetas(i).reverse()) {
          const e = t[r.index];
          if ((n && e > 0) || (!n && e < 0)) return r.index;
        }
        return null;
      }
      function Wn(t, e) {
        const { chart: n, _cachedMeta: i } = t,
          r = n._stacks || (n._stacks = {}),
          { iScale: o, vScale: s, index: a } = i,
          l = o.axis,
          c = s.axis,
          u = (function (t, e, n) {
            return ""
              .concat(t.id, ".")
              .concat(e.id, ".")
              .concat(n.stack || n.type);
          })(o, s, i),
          h = e.length;
        let d;
        for (let f = 0; f < h; ++f) {
          const t = e[f],
            { [l]: n, [c]: o } = t;
          (d = (t._stacks || (t._stacks = {}))[c] = Nn(r, u, n)),
            (d[a] = o),
            (d._top = Bn(d, s, !0, i.type)),
            (d._bottom = Bn(d, s, !1, i.type));
          (d._visualValues || (d._visualValues = {}))[a] = o;
        }
      }
      function Hn(t, e) {
        const n = t.scales;
        return Object.keys(n)
          .filter((t) => n[t].axis === e)
          .shift();
      }
      function Un(t, e) {
        const n = t.controller.index,
          i = t.vScale && t.vScale.axis;
        if (i) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
            delete e[i][n],
              void 0 !== e[i]._visualValues &&
                void 0 !== e[i]._visualValues[n] &&
                delete e[i]._visualValues[n];
          }
        }
      }
      const Yn = (t) => "reset" === t || "none" === t,
        qn = (t, e) => (e ? t : Object.assign({}, t));
      class Xn {
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
        }
        initialize() {
          const t = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (t._stacked = zn(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled("filler") &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
              );
        }
        updateIndex(t) {
          this.index !== t && Un(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            n = this.getDataset(),
            i = (t, e, n, i) => ("x" === t ? e : "r" === t ? i : n),
            r = (e.xAxisID = Y(n.xAxisID, Hn(t, "x"))),
            o = (e.yAxisID = Y(n.yAxisID, Hn(t, "y"))),
            s = (e.rAxisID = Y(n.rAxisID, Hn(t, "r"))),
            a = e.indexAxis,
            l = (e.iAxisID = i(a, r, o, s)),
            c = (e.vAxisID = i(a, o, r, s));
          (e.xScale = this.getScaleForId(r)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(s)),
            (e.iScale = this.getScaleForId(l)),
            (e.vScale = this.getScaleForId(c));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && Vt(this._data, this), t._stacked && Un(t);
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            n = this._data;
          if (W(e)) {
            const t = this._cachedMeta;
            this._data = (function (t, e) {
              const { iScale: n, vScale: i } = e,
                r = "x" === n.axis ? "x" : "y",
                o = "x" === i.axis ? "x" : "y",
                s = Object.keys(t),
                a = new Array(s.length);
              let l, c, u;
              for (l = 0, c = s.length; l < c; ++l)
                (u = s[l]), (a[l] = { [r]: u, [o]: t[u] });
              return a;
            })(e, t);
          } else if (n !== e) {
            if (n) {
              Vt(n, this);
              const t = this._cachedMeta;
              Un(t), (t._parsed = []);
            }
            e &&
              Object.isExtensible(e) &&
              ((r = this),
              (i = e)._chartjs
                ? i._chartjs.listeners.push(r)
                : (Object.defineProperty(i, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [r] },
                  }),
                  Ft.forEach((t) => {
                    const e = "_onData" + rt(t),
                      n = i[t];
                    Object.defineProperty(i, t, {
                      configurable: !0,
                      enumerable: !1,
                      value() {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        const s = n.apply(this, r);
                        return (
                          i._chartjs.listeners.forEach((t) => {
                            "function" === typeof t[e] && t[e](...r);
                          }),
                          s
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e);
          }
          var i, r;
        }
        addElements() {
          const t = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType &&
              (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            n = this.getDataset();
          let i = !1;
          this._dataCheck();
          const r = e._stacked;
          (e._stacked = zn(e.vScale, e)),
            e.stack !== n.stack && ((i = !0), Un(e), (e.stack = n.stack)),
            this._resyncElements(t),
            (i || r !== e._stacked) &&
              (Wn(this, e._parsed), (e._stacked = zn(e.vScale, e)));
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            n = t.getOptionScopes(this.getDataset(), e, !0);
          (this.options = t.createResolver(n, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(t, e) {
          const { _cachedMeta: n, _data: i } = this,
            { iScale: r, _stacked: o } = n,
            s = r.axis;
          let a,
            l,
            c,
            u = (0 === t && e === i.length) || n._sorted,
            h = t > 0 && n._parsed[t - 1];
          if (!1 === this._parsing) (n._parsed = i), (n._sorted = !0), (c = i);
          else {
            c = B(i[t])
              ? this.parseArrayData(n, i, t, e)
              : W(i[t])
              ? this.parseObjectData(n, i, t, e)
              : this.parsePrimitiveData(n, i, t, e);
            const r = () => null === l[s] || (h && l[s] < h[s]);
            for (a = 0; a < e; ++a)
              (n._parsed[a + t] = l = c[a]), u && (r() && (u = !1), (h = l));
            n._sorted = u;
          }
          o && Wn(this, c);
        }
        parsePrimitiveData(t, e, n, i) {
          const { iScale: r, vScale: o } = t,
            s = r.axis,
            a = o.axis,
            l = r.getLabels(),
            c = r === o,
            u = new Array(i);
          let h, d, f;
          for (h = 0, d = i; h < d; ++h)
            (f = h + n),
              (u[h] = { [s]: c || r.parse(l[f], f), [a]: o.parse(e[f], f) });
          return u;
        }
        parseArrayData(t, e, n, i) {
          const { xScale: r, yScale: o } = t,
            s = new Array(i);
          let a, l, c, u;
          for (a = 0, l = i; a < l; ++a)
            (c = a + n),
              (u = e[c]),
              (s[a] = { x: r.parse(u[0], c), y: o.parse(u[1], c) });
          return s;
        }
        parseObjectData(t, e, n, i) {
          const { xScale: r, yScale: o } = t,
            { xAxisKey: s = "x", yAxisKey: a = "y" } = this._parsing,
            l = new Array(i);
          let c, u, h, d;
          for (c = 0, u = i; c < u; ++c)
            (h = c + n),
              (d = e[h]),
              (l[c] = { x: r.parse(it(d, s), h), y: o.parse(it(d, a), h) });
          return l;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, n) {
          const i = this.chart,
            r = this._cachedMeta,
            o = e[t.axis];
          return jn(
            { keys: In(i, !0), values: e._stacks[t.axis]._visualValues },
            o,
            r.index,
            { mode: n }
          );
        }
        updateRangeFromParsed(t, e, n, i) {
          const r = n[e.axis];
          let o = null === r ? NaN : r;
          const s = i && n._stacks[e.axis];
          i && s && ((i.values = s), (o = jn(i, r, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
          const n = this._cachedMeta,
            i = n._parsed,
            r = n._sorted && t === n.iScale,
            o = i.length,
            s = this._getOtherScale(t),
            a = ((t, e, n) =>
              t &&
              !e.hidden &&
              e._stacked && { keys: In(n, !0), values: null })(
              e,
              n,
              this.chart
            ),
            l = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: c, max: u } = (function (t) {
              const {
                min: e,
                max: n,
                minDefined: i,
                maxDefined: r,
              } = t.getUserBounds();
              return {
                min: i ? e : Number.NEGATIVE_INFINITY,
                max: r ? n : Number.POSITIVE_INFINITY,
              };
            })(s);
          let h, d;
          function f() {
            d = i[h];
            const e = d[s.axis];
            return !H(d[t.axis]) || c > e || u < e;
          }
          for (
            h = 0;
            h < o && (f() || (this.updateRangeFromParsed(l, t, d, a), !r));
            ++h
          );
          if (r)
            for (h = o - 1; h >= 0; --h)
              if (!f()) {
                this.updateRangeFromParsed(l, t, d, a);
                break;
              }
          return l;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            n = [];
          let i, r, o;
          for (i = 0, r = e.length; i < r; ++i)
            (o = e[i][t.axis]), H(o) && n.push(o);
          return n;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = e.iScale,
            i = e.vScale,
            r = this.getParsed(t);
          return {
            label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
            value: i ? "" + i.getLabelForValue(r[i.axis]) : "",
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          this.update(t || "default"),
            (e._clip = (function (t) {
              let e, n, i, r;
              return (
                W(t)
                  ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
                  : (e = n = i = r = t),
                { top: e, right: n, bottom: i, left: r, disabled: !1 === t }
              );
            })(
              Y(
                this.options.clip,
                (function (t, e, n) {
                  if (!1 === n) return !1;
                  const i = Vn(t, n),
                    r = Vn(e, n);
                  return {
                    top: r.end,
                    right: i.end,
                    bottom: r.start,
                    left: i.start,
                  };
                })(e.xScale, e.yScale, this.getMaxOverflow())
              )
            ));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            n = this._cachedMeta,
            i = n.data || [],
            r = e.chartArea,
            o = [],
            s = this._drawStart || 0,
            a = this._drawCount || i.length - s,
            l = this.options.drawActiveElementsOnTop;
          let c;
          for (n.dataset && n.dataset.draw(t, r, s, a), c = s; c < s + a; ++c) {
            const e = i[c];
            e.hidden || (e.active && l ? o.push(e) : e.draw(t, r));
          }
          for (c = 0; c < o.length; ++c) o[c].draw(t, r);
        }
        getStyle(t, e) {
          const n = e ? "active" : "default";
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(n)
            : this.resolveDataElementOptions(t || 0, n);
        }
        getContext(t, e, n) {
          const i = this.getDataset();
          let r;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            (r =
              e.$context ||
              (e.$context = (function (t, e, n) {
                return Le(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: n,
                  index: e,
                  mode: "default",
                  type: "data",
                });
              })(this.getContext(), t, e))),
              (r.parsed = this.getParsed(t)),
              (r.raw = i.data[t]),
              (r.index = r.dataIndex = t);
          } else
            (r =
              this.$context ||
              (this.$context = (function (t, e) {
                return Le(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: "default",
                  type: "dataset",
                });
              })(this.chart.getContext(), this.index))),
              (r.dataset = i),
              (r.index = r.datasetIndex = this.index);
          return (r.active = !!e), (r.mode = n), r;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "default",
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = "active" === e,
            r = this._cachedDataOpts,
            o = t + "-" + e,
            s = r[o],
            a = this.enableOptionSharing && ot(n);
          if (s) return qn(s, a);
          const l = this.chart.config,
            c = l.datasetElementScopeKeys(this._type, t),
            u = i ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
            h = l.getOptionScopes(this.getDataset(), c),
            d = Object.keys(le.elements[t]),
            f = l.resolveNamedOptions(h, d, () => this.getContext(n, i, e), u);
          return (
            f.$shared && ((f.$shared = a), (r[o] = Object.freeze(qn(f, a)))), f
          );
        }
        _resolveAnimations(t, e, n) {
          const i = this.chart,
            r = this._cachedDataOpts,
            o = "animation-".concat(e),
            s = r[o];
          if (s) return s;
          let a;
          if (!1 !== i.options.animation) {
            const i = this.chart.config,
              r = i.datasetAnimationScopeKeys(this._type, e),
              o = i.getOptionScopes(this.getDataset(), r);
            a = i.createResolver(o, this.getContext(t, n, e));
          }
          const l = new Fn(i, a && a.animations);
          return a && a._cacheable && (r[o] = Object.freeze(l)), l;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, t))
            );
        }
        includeOptions(t, e) {
          return !e || Yn(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
          const n = this.resolveDataElementOptions(t, e),
            i = this._sharedOptions,
            r = this.getSharedOptions(n),
            o = this.includeOptions(e, r) || r !== i;
          return (
            this.updateSharedOptions(r, e, n),
            { sharedOptions: r, includeOptions: o }
          );
        }
        updateElement(t, e, n, i) {
          Yn(i)
            ? Object.assign(t, n)
            : this._resolveAnimations(e, i).update(t, n);
        }
        updateSharedOptions(t, e, n) {
          t && !Yn(e) && this._resolveAnimations(void 0, e).update(t, n);
        }
        _setStyle(t, e, n, i) {
          t.active = i;
          const r = this.getStyle(e, i);
          this._resolveAnimations(e, n, i).update(t, {
            options: (!i && this.getSharedOptions(r)) || r,
          });
        }
        removeHoverStyle(t, e, n) {
          this._setStyle(t, n, "active", !1);
        }
        setHoverStyle(t, e, n) {
          this._setStyle(t, n, "active", !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
          const e = this._data,
            n = this._cachedMeta.data;
          for (const [s, a, l] of this._syncList) this[s](a, l);
          this._syncList = [];
          const i = n.length,
            r = e.length,
            o = Math.min(r, i);
          o && this.parse(0, o),
            r > i
              ? this._insertElements(i, r - i, t)
              : r < i && this._removeElements(r, i - r);
        }
        _insertElements(t, e) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i = this._cachedMeta,
            r = i.data,
            o = t + e;
          let s;
          const a = (t) => {
            for (t.length += e, s = t.length - 1; s >= o; s--) t[s] = t[s - e];
          };
          for (a(r), s = t; s < o; ++s) r[s] = new this.dataElementType();
          this._parsing && a(i._parsed),
            this.parse(t, e),
            n && this.updateElements(r, t, e, "reset");
        }
        updateElements(t, e, n, i) {}
        _removeElements(t, e) {
          const n = this._cachedMeta;
          if (this._parsing) {
            const i = n._parsed.splice(t, e);
            n._stacked && Un(n, i);
          }
          n.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, n, i] = t;
            this[e](n, i);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(["_removeElements", t, e]);
          const n = arguments.length - 2;
          n && this._sync(["_insertElements", t, n]);
        }
        _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      }
      function $n(t) {
        const e = t.iScale,
          n = (function (t, e) {
            if (!t._cache.$bar) {
              const n = t.getMatchingVisibleMetas(e);
              let i = [];
              for (let e = 0, r = n.length; e < r; e++)
                i = i.concat(n[e].controller.getAllParsedValues(t));
              t._cache.$bar = It(i.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let i,
          r,
          o,
          s,
          a = e._length;
        const l = () => {
          32767 !== o &&
            -32768 !== o &&
            (ot(s) && (a = Math.min(a, Math.abs(o - s) || a)), (s = o));
        };
        for (i = 0, r = n.length; i < r; ++i)
          (o = e.getPixelForValue(n[i])), l();
        for (s = void 0, i = 0, r = e.ticks.length; i < r; ++i)
          (o = e.getPixelForTick(i)), l();
        return a;
      }
      function Kn(t, e, n, i) {
        return (
          B(t)
            ? (function (t, e, n, i) {
                const r = n.parse(t[0], i),
                  o = n.parse(t[1], i),
                  s = Math.min(r, o),
                  a = Math.max(r, o);
                let l = s,
                  c = a;
                Math.abs(s) > Math.abs(a) && ((l = a), (c = s)),
                  (e[n.axis] = c),
                  (e._custom = {
                    barStart: l,
                    barEnd: c,
                    start: r,
                    end: o,
                    min: s,
                    max: a,
                  });
              })(t, e, n, i)
            : (e[n.axis] = n.parse(t, i)),
          e
        );
      }
      function Gn(t, e, n, i) {
        const r = t.iScale,
          o = t.vScale,
          s = r.getLabels(),
          a = r === o,
          l = [];
        let c, u, h, d;
        for (c = n, u = n + i; c < u; ++c)
          (d = e[c]),
            (h = {}),
            (h[r.axis] = a || r.parse(s[c], c)),
            l.push(Kn(d, h, o, c));
        return l;
      }
      function Zn(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function Jn(t, e, n, i) {
        let r = e.borderSkipped;
        const o = {};
        if (!r) return void (t.borderSkipped = o);
        if (!0 === r)
          return void (t.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0,
          });
        const { start: s, end: a, reverse: l, top: c, bottom: u } = (function (
          t
        ) {
          let e, n, i, r, o;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (n = "left"), (i = "right"))
              : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
            e ? ((r = "end"), (o = "start")) : ((r = "start"), (o = "end")),
            { start: n, end: i, reverse: e, top: r, bottom: o }
          );
        })(t);
        "middle" === r &&
          n &&
          ((t.enableBorderRadius = !0),
          (n._top || 0) === i
            ? (r = c)
            : (n._bottom || 0) === i
            ? (r = u)
            : ((o[Qn(u, s, a, l)] = !0), (r = c))),
          (o[Qn(r, s, a, l)] = !0),
          (t.borderSkipped = o);
      }
      function Qn(t, e, n, i) {
        var r, o, s;
        return (
          i
            ? ((s = n),
              (t = ti((t = (r = t) === (o = e) ? s : r === s ? o : r), n, e)))
            : (t = ti(t, e, n)),
          t
        );
      }
      function ti(t, e, n) {
        return "start" === t ? e : "end" === t ? n : t;
      }
      function ei(t, e, n) {
        let { inflateAmount: i } = e;
        t.inflateAmount = "auto" === i ? (1 === n ? 0.33 : 0) : i;
      }
      (0, r.A)(Xn, "defaults", {}),
        (0, r.A)(Xn, "datasetElementType", null),
        (0, r.A)(Xn, "dataElementType", null);
      class ni extends Xn {
        parsePrimitiveData(t, e, n, i) {
          return Gn(t, e, n, i);
        }
        parseArrayData(t, e, n, i) {
          return Gn(t, e, n, i);
        }
        parseObjectData(t, e, n, i) {
          const { iScale: r, vScale: o } = t,
            { xAxisKey: s = "x", yAxisKey: a = "y" } = this._parsing,
            l = "x" === r.axis ? s : a,
            c = "x" === o.axis ? s : a,
            u = [];
          let h, d, f, p;
          for (h = n, d = n + i; h < d; ++h)
            (p = e[h]),
              (f = {}),
              (f[r.axis] = r.parse(it(p, l), h)),
              u.push(Kn(it(p, c), f, o, h));
          return u;
        }
        updateRangeFromParsed(t, e, n, i) {
          super.updateRangeFromParsed(t, e, n, i);
          const r = n._custom;
          r &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, r.min)),
            (t.max = Math.max(t.max, r.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: n, vScale: i } = e,
            r = this.getParsed(t),
            o = r._custom,
            s = Zn(o)
              ? "[" + o.start + ", " + o.end + "]"
              : "" + i.getLabelForValue(r[i.axis]);
          return { label: "" + n.getLabelForValue(r[n.axis]), value: s };
        }
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
          this._cachedMeta.stack = this.getDataset().stack;
        }
        update(t) {
          const e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            {
              index: o,
              _cachedMeta: { vScale: s },
            } = this,
            a = s.getBasePixel(),
            l = s.isHorizontal(),
            c = this._getRuler(),
            { sharedOptions: u, includeOptions: h } = this._getSharedOptions(
              e,
              i
            );
          for (let d = e; d < e + n; d++) {
            const e = this.getParsed(d),
              n =
                r || N(e[s.axis])
                  ? { base: a, head: a }
                  : this._calculateBarValuePixels(d),
              f = this._calculateBarIndexPixels(d, c),
              p = (e._stacks || {})[s.axis],
              g = {
                horizontal: l,
                base: n.base,
                enableBorderRadius:
                  !p || Zn(e._custom) || o === p._top || o === p._bottom,
                x: l ? n.head : f.center,
                y: l ? f.center : n.head,
                height: l ? f.size : Math.abs(n.size),
                width: l ? Math.abs(n.size) : f.size,
              };
            h &&
              (g.options =
                u ||
                this.resolveDataElementOptions(d, t[d].active ? "active" : i));
            const m = g.options || t[d].options;
            Jn(g, m, p, o),
              ei(g, m, c.ratio),
              this.updateElement(t[d], d, g, i);
          }
        }
        _getStacks(t, e) {
          const { iScale: n } = this._cachedMeta,
            i = n
              .getMatchingVisibleMetas(this._type)
              .filter((t) => t.controller.options.grouped),
            r = n.options.stacked,
            o = [],
            s = this._cachedMeta.controller.getParsed(e),
            a = s && s[n.axis],
            l = (t) => {
              const e = t._parsed.find((t) => t[n.axis] === a),
                i = e && e[t.vScale.axis];
              if (N(i) || isNaN(i)) return !0;
            };
          for (const c of i)
            if (
              (void 0 === e || !l(c)) &&
              ((!1 === r ||
                -1 === o.indexOf(c.stack) ||
                (void 0 === r && void 0 === c.stack)) &&
                o.push(c.stack),
              c.index === t)
            )
              break;
          return o.length || o.push(void 0), o;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getAxisCount() {
          return this._getAxis().length;
        }
        getFirstScaleIdForIndexAxis() {
          const t = this.chart.scales,
            e = this.chart.options.indexAxis;
          return Object.keys(t)
            .filter((n) => t[n].axis === e)
            .shift();
        }
        _getAxis() {
          const t = {},
            e = this.getFirstScaleIdForIndexAxis();
          for (const n of this.chart.data.datasets)
            t[
              Y("x" === this.chart.options.indexAxis ? n.xAxisID : n.yAxisID, e)
            ] = !0;
          return Object.keys(t);
        }
        _getStackIndex(t, e, n) {
          const i = this._getStacks(t, n),
            r = void 0 !== e ? i.indexOf(e) : -1;
          return -1 === r ? i.length - 1 : r;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            n = e.iScale,
            i = [];
          let r, o;
          for (r = 0, o = e.data.length; r < o; ++r)
            i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
          const s = t.barThickness;
          return {
            min: s || $n(e),
            pixels: i,
            start: n._startPixel,
            end: n._endPixel,
            stackCount: this._getStackCount(),
            scale: n,
            grouped: t.grouped,
            ratio: s ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: n, index: i },
              options: { base: r, minBarLength: o },
            } = this,
            s = r || 0,
            a = this.getParsed(t),
            l = a._custom,
            c = Zn(l);
          let u,
            h,
            d = a[e.axis],
            f = 0,
            p = n ? this.applyStack(e, a, n) : d;
          p !== d && ((f = p - d), (p = d)),
            c &&
              ((d = l.barStart),
              (p = l.barEnd - l.barStart),
              0 !== d && vt(d) !== vt(l.barEnd) && (f = 0),
              (f += d));
          const g = N(r) || c ? f : r;
          let m = e.getPixelForValue(g);
          if (
            ((u = this.chart.getDataVisibility(t)
              ? e.getPixelForValue(f + p)
              : m),
            (h = u - m),
            Math.abs(h) < o)
          ) {
            (h =
              (function (t, e, n) {
                return 0 !== t
                  ? vt(t)
                  : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
              })(h, e, s) * o),
              d === s && (m -= h / 2);
            const t = e.getPixelForDecimal(0),
              r = e.getPixelForDecimal(1),
              l = Math.min(t, r),
              f = Math.max(t, r);
            (m = Math.max(Math.min(m, f), l)),
              (u = m + h),
              n &&
                !c &&
                (a._stacks[e.axis]._visualValues[i] =
                  e.getValueForPixel(u) - e.getValueForPixel(m));
          }
          if (m === e.getPixelForValue(s)) {
            const t = (vt(h) * e.getLineWidthForValue(s)) / 2;
            (m += t), (h -= t);
          }
          return { size: h, base: m, head: u, center: u + h / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const n = e.scale,
            i = this.options,
            r = i.skipNull,
            o = Y(i.maxBarThickness, 1 / 0);
          let s, a;
          const l = this._getAxisCount();
          if (e.grouped) {
            const n = r ? this._getStackCount(t) : e.stackCount,
              c =
                "flex" === i.barThickness
                  ? (function (t, e, n, i) {
                      const r = e.pixels,
                        o = r[t];
                      let s = t > 0 ? r[t - 1] : null,
                        a = t < r.length - 1 ? r[t + 1] : null;
                      const l = n.categoryPercentage;
                      null === s &&
                        (s = o - (null === a ? e.end - e.start : a - o)),
                        null === a && (a = o + o - s);
                      const c = o - ((o - Math.min(s, a)) / 2) * l;
                      return {
                        chunk: ((Math.abs(a - s) / 2) * l) / i,
                        ratio: n.barPercentage,
                        start: c,
                      };
                    })(t, e, i, n * l)
                  : (function (t, e, n, i) {
                      const r = n.barThickness;
                      let o, s;
                      return (
                        N(r)
                          ? ((o = e.min * n.categoryPercentage),
                            (s = n.barPercentage))
                          : ((o = r * i), (s = 1)),
                        { chunk: o / i, ratio: s, start: e.pixels[t] - o / 2 }
                      );
                    })(t, e, i, n * l),
              u =
                "x" === this.chart.options.indexAxis
                  ? this.getDataset().xAxisID
                  : this.getDataset().yAxisID,
              h = this._getAxis().indexOf(
                Y(u, this.getFirstScaleIdForIndexAxis())
              ),
              d =
                this._getStackIndex(
                  this.index,
                  this._cachedMeta.stack,
                  r ? t : void 0
                ) + h;
            (s = c.start + c.chunk * d + c.chunk / 2),
              (a = Math.min(o, c.chunk * c.ratio));
          } else
            (s = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
              (a = Math.min(o, e.min * e.ratio));
          return { base: s - a / 2, head: s + a / 2, center: s, size: a };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            n = t.data,
            i = n.length;
          let r = 0;
          for (; r < i; ++r)
            null === this.getParsed(r)[e.axis] ||
              n[r].hidden ||
              n[r].draw(this._ctx);
        }
      }
      (0, r.A)(ni, "id", "bar"),
        (0, r.A)(ni, "defaults", {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        }),
        (0, r.A)(ni, "overrides", {
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        });
      class ii extends Xn {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(t, e, n, i) {
          const r = super.parsePrimitiveData(t, e, n, i);
          for (let o = 0; o < r.length; o++)
            r[o]._custom = this.resolveDataElementOptions(o + n).radius;
          return r;
        }
        parseArrayData(t, e, n, i) {
          const r = super.parseArrayData(t, e, n, i);
          for (let o = 0; o < r.length; o++) {
            const t = e[n + o];
            r[o]._custom = Y(
              t[2],
              this.resolveDataElementOptions(o + n).radius
            );
          }
          return r;
        }
        parseObjectData(t, e, n, i) {
          const r = super.parseObjectData(t, e, n, i);
          for (let o = 0; o < r.length; o++) {
            const t = e[n + o];
            r[o]._custom = Y(
              t && t.r && +t.r,
              this.resolveDataElementOptions(o + n).radius
            );
          }
          return r;
        }
        getMaxOverflow() {
          const t = this._cachedMeta.data;
          let e = 0;
          for (let n = t.length - 1; n >= 0; --n)
            e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
          return e > 0 && e;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart.data.labels || [],
            { xScale: i, yScale: r } = e,
            o = this.getParsed(t),
            s = i.getLabelForValue(o.x),
            a = r.getLabelForValue(o.y),
            l = o._custom;
          return {
            label: n[t] || "",
            value: "(" + s + ", " + a + (l ? ", " + l : "") + ")",
          };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            { iScale: o, vScale: s } = this._cachedMeta,
            { sharedOptions: a, includeOptions: l } = this._getSharedOptions(
              e,
              i
            ),
            c = o.axis,
            u = s.axis;
          for (let h = e; h < e + n; h++) {
            const e = t[h],
              n = !r && this.getParsed(h),
              d = {},
              f = (d[c] = r
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(n[c])),
              p = (d[u] = r ? s.getBasePixel() : s.getPixelForValue(n[u]));
            (d.skip = isNaN(f) || isNaN(p)),
              l &&
                ((d.options =
                  a ||
                  this.resolveDataElementOptions(h, e.active ? "active" : i)),
                r && (d.options.radius = 0)),
              this.updateElement(e, h, d, i);
          }
        }
        resolveDataElementOptions(t, e) {
          const n = this.getParsed(t);
          let i = super.resolveDataElementOptions(t, e);
          i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
          const r = i.radius;
          return (
            "active" !== e && (i.radius = 0),
            (i.radius += Y(n && n._custom, r)),
            i
          );
        }
      }
      (0, r.A)(ii, "id", "bubble"),
        (0, r.A)(ii, "defaults", {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        }),
        (0, r.A)(ii, "overrides", {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        });
      class ri extends Xn {
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
        }
        linkScales() {}
        parse(t, e) {
          const n = this.getDataset().data,
            i = this._cachedMeta;
          if (!1 === this._parsing) i._parsed = n;
          else {
            let r,
              o,
              s = (t) => +n[t];
            if (W(n[t])) {
              const { key: t = "value" } = this._parsing;
              s = (e) => +it(n[e], t);
            }
            for (r = t, o = t + e; r < o; ++r) i._parsed[r] = s(r);
          }
        }
        _getRotation() {
          return _t(this.options.rotation - 90);
        }
        _getCircumference() {
          return _t(this.options.circumference);
        }
        _getRotationExtents() {
          let t = ct,
            e = -ct;
          for (let n = 0; n < this.chart.data.datasets.length; ++n)
            if (
              this.chart.isDatasetVisible(n) &&
              this.chart.getDatasetMeta(n).type === this._type
            ) {
              const i = this.chart.getDatasetMeta(n).controller,
                r = i._getRotation(),
                o = i._getCircumference();
              (t = Math.min(t, r)), (e = Math.max(e, r + o));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this.chart,
            { chartArea: n } = e,
            i = this._cachedMeta,
            r = i.data,
            o =
              this.getMaxBorderWidth() +
              this.getMaxOffset(r) +
              this.options.spacing,
            s = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
            a = Math.min(
              ((l = this.options.cutout),
              (c = s),
              "string" === typeof l && l.endsWith("%")
                ? parseFloat(l) / 100
                : +l / c),
              1
            );
          var l, c;
          const u = this._getRingWeight(this.index),
            { circumference: h, rotation: d } = this._getRotationExtents(),
            { ratioX: f, ratioY: p, offsetX: g, offsetY: m } = (function (
              t,
              e,
              n
            ) {
              let i = 1,
                r = 1,
                o = 0,
                s = 0;
              if (e < ct) {
                const a = t,
                  l = a + e,
                  c = Math.cos(a),
                  u = Math.sin(a),
                  h = Math.cos(l),
                  d = Math.sin(l),
                  f = (t, e, i) =>
                    Et(t, a, l, !0) ? 1 : Math.max(e, e * n, i, i * n),
                  p = (t, e, i) =>
                    Et(t, a, l, !0) ? -1 : Math.min(e, e * n, i, i * n),
                  g = f(0, c, h),
                  m = f(ft, u, d),
                  v = p(lt, c, h),
                  y = p(lt + ft, u, d);
                (i = (g - v) / 2),
                  (r = (m - y) / 2),
                  (o = -(g + v) / 2),
                  (s = -(m + y) / 2);
              }
              return { ratioX: i, ratioY: r, offsetX: o, offsetY: s };
            })(d, h, a),
            v = (n.width - o) / f,
            y = (n.height - o) / p,
            b = Math.max(Math.min(v, y) / 2, 0),
            x = q(this.options.radius, b),
            w = (x - Math.max(x * a, 0)) / this._getVisibleDatasetWeightTotal();
          (this.offsetX = g * x),
            (this.offsetY = m * x),
            (i.total = this.calculateTotal()),
            (this.outerRadius = x - w * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - w * u, 0)),
            this.updateElements(r, 0, r.length, t);
        }
        _circumference(t, e) {
          const n = this.options,
            i = this._cachedMeta,
            r = this._getCircumference();
          return (e && n.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === i._parsed[t] ||
            i.data[t].hidden
            ? 0
            : this.calculateCircumference((i._parsed[t] * r) / ct);
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            o = this.chart,
            s = o.chartArea,
            a = o.options.animation,
            l = (s.left + s.right) / 2,
            c = (s.top + s.bottom) / 2,
            u = r && a.animateScale,
            h = u ? 0 : this.innerRadius,
            d = u ? 0 : this.outerRadius,
            { sharedOptions: f, includeOptions: p } = this._getSharedOptions(
              e,
              i
            );
          let g,
            m = this._getRotation();
          for (g = 0; g < e; ++g) m += this._circumference(g, r);
          for (g = e; g < e + n; ++g) {
            const e = this._circumference(g, r),
              n = t[g],
              o = {
                x: l + this.offsetX,
                y: c + this.offsetY,
                startAngle: m,
                endAngle: m + e,
                circumference: e,
                outerRadius: d,
                innerRadius: h,
              };
            p &&
              (o.options =
                f ||
                this.resolveDataElementOptions(g, n.active ? "active" : i)),
              (m += e),
              this.updateElement(n, g, o, i);
          }
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let n,
            i = 0;
          for (n = 0; n < e.length; n++) {
            const r = t._parsed[n];
            null === r ||
              isNaN(r) ||
              !this.chart.getDataVisibility(n) ||
              e[n].hidden ||
              (i += Math.abs(r));
          }
          return i;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? ct * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart,
            i = n.data.labels || [],
            r = te(e._parsed[t], n.options.locale);
          return { label: i[t] || "", value: r };
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const n = this.chart;
          let i, r, o, s, a;
          if (!t)
            for (i = 0, r = n.data.datasets.length; i < r; ++i)
              if (n.isDatasetVisible(i)) {
                (o = n.getDatasetMeta(i)), (t = o.data), (s = o.controller);
                break;
              }
          if (!t) return 0;
          for (i = 0, r = t.length; i < r; ++i)
            (a = s.resolveDataElementOptions(i)),
              "inner" !== a.borderAlign &&
                (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
          return e;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let n = 0, i = t.length; n < i; ++n) {
            const t = this.resolveDataElementOptions(n);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(Y(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return (
            this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          );
        }
      }
      (0, r.A)(ri, "id", "doughnut"),
        (0, r.A)(ri, "defaults", {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          spacing: 0,
          indexAxis: "r",
        }),
        (0, r.A)(ri, "descriptors", {
          _scriptable: (t) => "spacing" !== t,
          _indexable: (t) =>
            "spacing" !== t &&
            !t.startsWith("borderDash") &&
            !t.startsWith("hoverBorderDash"),
        }),
        (0, r.A)(ri, "overrides", {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data,
                    {
                      labels: {
                        pointStyle: n,
                        textAlign: i,
                        color: r,
                        useBorderRadius: o,
                        borderRadius: s,
                      },
                    } = t.legend.options;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map((e, a) => {
                        const l = t.getDatasetMeta(0).controller.getStyle(a);
                        return {
                          text: e,
                          fillStyle: l.backgroundColor,
                          fontColor: r,
                          hidden: !t.getDataVisibility(a),
                          lineDash: l.borderDash,
                          lineDashOffset: l.borderDashOffset,
                          lineJoin: l.borderJoinStyle,
                          lineWidth: l.borderWidth,
                          strokeStyle: l.borderColor,
                          textAlign: i,
                          pointStyle: n,
                          borderRadius: o && (s || l.borderRadius),
                          index: a,
                        };
                      })
                    : [];
                },
              },
              onClick(t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
          },
        });
      class oi extends Xn {
        initialize() {
          (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: n, data: i = [], _dataset: r } = e,
            o = this.chart._animationsDisabled;
          let { start: s, count: a } = Wt(e, i, o);
          (this._drawStart = s),
            (this._drawCount = a),
            Ht(e) && ((s = 0), (a = i.length)),
            (n._chart = this.chart),
            (n._datasetIndex = this.index),
            (n._decimated = !!r._decimated),
            (n.points = i);
          const l = this.resolveDatasetElementOptions(t);
          this.options.showLine || (l.borderWidth = 0),
            (l.segment = this.options.segment),
            this.updateElement(n, void 0, { animated: !o, options: l }, t),
            this.updateElements(i, s, a, t);
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            {
              iScale: o,
              vScale: s,
              _stacked: a,
              _dataset: l,
            } = this._cachedMeta,
            { sharedOptions: c, includeOptions: u } = this._getSharedOptions(
              e,
              i
            ),
            h = o.axis,
            d = s.axis,
            { spanGaps: f, segment: p } = this.options,
            g = xt(f) ? f : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || r || "none" === i,
            v = e + n,
            y = t.length;
          let b = e > 0 && this.getParsed(e - 1);
          for (let x = 0; x < y; ++x) {
            const n = t[x],
              f = m ? n : {};
            if (x < e || x >= v) {
              f.skip = !0;
              continue;
            }
            const y = this.getParsed(x),
              w = N(y[d]),
              _ = (f[h] = o.getPixelForValue(y[h], x)),
              M = (f[d] =
                r || w
                  ? s.getBasePixel()
                  : s.getPixelForValue(a ? this.applyStack(s, y, a) : y[d], x));
            (f.skip = isNaN(_) || isNaN(M) || w),
              (f.stop = x > 0 && Math.abs(y[h] - b[h]) > g),
              p && ((f.parsed = y), (f.raw = l.data[x])),
              u &&
                (f.options =
                  c ||
                  this.resolveDataElementOptions(x, n.active ? "active" : i)),
              m || this.updateElement(n, x, f, i),
              (b = y);
          }
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            n = (e.options && e.options.borderWidth) || 0,
            i = t.data || [];
          if (!i.length) return n;
          const r = i[0].size(this.resolveDataElementOptions(0)),
            o = i[i.length - 1].size(
              this.resolveDataElementOptions(i.length - 1)
            );
          return Math.max(n, r, o) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      }
      (0, r.A)(oi, "id", "line"),
        (0, r.A)(oi, "defaults", {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        }),
        (0, r.A)(oi, "overrides", {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        });
      class si extends Xn {
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart,
            i = n.data.labels || [],
            r = te(e._parsed[t].r, n.options.locale);
          return { label: i[t] || "", value: r };
        }
        parseObjectData(t, e, n, i) {
          return $e.bind(this)(t, e, n, i);
        }
        update(t) {
          const e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        getMinMax() {
          const t = this._cachedMeta,
            e = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            };
          return (
            t.data.forEach((t, n) => {
              const i = this.getParsed(n).r;
              !isNaN(i) &&
                this.chart.getDataVisibility(n) &&
                (i < e.min && (e.min = i), i > e.max && (e.max = i));
            }),
            e
          );
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            n = t.options,
            i = Math.min(e.right - e.left, e.bottom - e.top),
            r = Math.max(i / 2, 0),
            o =
              (r -
                Math.max(
                  n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1,
                  0
                )) /
              t.getVisibleDatasetCount();
          (this.outerRadius = r - o * this.index),
            (this.innerRadius = this.outerRadius - o);
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            o = this.chart,
            s = o.options.animation,
            a = this._cachedMeta.rScale,
            l = a.xCenter,
            c = a.yCenter,
            u = a.getIndexAngle(0) - 0.5 * lt;
          let h,
            d = u;
          const f = 360 / this.countVisibleElements();
          for (h = 0; h < e; ++h) d += this._computeAngle(h, i, f);
          for (h = e; h < e + n; h++) {
            const e = t[h];
            let n = d,
              p = d + this._computeAngle(h, i, f),
              g = o.getDataVisibility(h)
                ? a.getDistanceFromCenterForValue(this.getParsed(h).r)
                : 0;
            (d = p),
              r && (s.animateScale && (g = 0), s.animateRotate && (n = p = u));
            const m = {
              x: l,
              y: c,
              innerRadius: 0,
              outerRadius: g,
              startAngle: n,
              endAngle: p,
              options: this.resolveDataElementOptions(
                h,
                e.active ? "active" : i
              ),
            };
            this.updateElement(e, h, m, i);
          }
        }
        countVisibleElements() {
          const t = this._cachedMeta;
          let e = 0;
          return (
            t.data.forEach((t, n) => {
              !isNaN(this.getParsed(n).r) &&
                this.chart.getDataVisibility(n) &&
                e++;
            }),
            e
          );
        }
        _computeAngle(t, e, n) {
          return this.chart.getDataVisibility(t)
            ? _t(this.resolveDataElementOptions(t, e).angle || n)
            : 0;
        }
      }
      (0, r.A)(si, "id", "polarArea"),
        (0, r.A)(si, "defaults", {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        }),
        (0, r.A)(si, "overrides", {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: n, color: i },
                    } = t.legend.options;
                    return e.labels.map((e, r) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(r);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: i,
                        lineWidth: o.borderWidth,
                        pointStyle: n,
                        hidden: !t.getDataVisibility(r),
                        index: r,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      class ai extends ri {}
      (0, r.A)(ai, "id", "pie"),
        (0, r.A)(ai, "defaults", {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        });
      class li extends Xn {
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            n = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(n[e.axis]),
          };
        }
        parseObjectData(t, e, n, i) {
          return $e.bind(this)(t, e, n, i);
        }
        update(t) {
          const e = this._cachedMeta,
            n = e.dataset,
            i = e.data || [],
            r = e.iScale.getLabels();
          if (((n.points = i), "resize" !== t)) {
            const e = this.resolveDatasetElementOptions(t);
            this.options.showLine || (e.borderWidth = 0);
            const o = {
              _loop: !0,
              _fullLoop: r.length === i.length,
              options: e,
            };
            this.updateElement(n, void 0, o, t);
          }
          this.updateElements(i, 0, i.length, t);
        }
        updateElements(t, e, n, i) {
          const r = this._cachedMeta.rScale,
            o = "reset" === i;
          for (let s = e; s < e + n; s++) {
            const e = t[s],
              n = this.resolveDataElementOptions(s, e.active ? "active" : i),
              a = r.getPointPositionForValue(s, this.getParsed(s).r),
              l = o ? r.xCenter : a.x,
              c = o ? r.yCenter : a.y,
              u = {
                x: l,
                y: c,
                angle: a.angle,
                skip: isNaN(l) || isNaN(c),
                options: n,
              };
            this.updateElement(e, s, u, i);
          }
        }
      }
      (0, r.A)(li, "id", "radar"),
        (0, r.A)(li, "defaults", {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        }),
        (0, r.A)(li, "overrides", {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        });
      class ci extends Xn {
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart.data.labels || [],
            { xScale: i, yScale: r } = e,
            o = this.getParsed(t),
            s = i.getLabelForValue(o.x),
            a = r.getLabelForValue(o.y);
          return { label: n[t] || "", value: "(" + s + ", " + a + ")" };
        }
        update(t) {
          const e = this._cachedMeta,
            { data: n = [] } = e,
            i = this.chart._animationsDisabled;
          let { start: r, count: o } = Wt(e, n, i);
          if (
            ((this._drawStart = r),
            (this._drawCount = o),
            Ht(e) && ((r = 0), (o = n.length)),
            this.options.showLine)
          ) {
            this.datasetElementType || this.addElements();
            const { dataset: r, _dataset: o } = e;
            (r._chart = this.chart),
              (r._datasetIndex = this.index),
              (r._decimated = !!o._decimated),
              (r.points = n);
            const s = this.resolveDatasetElementOptions(t);
            (s.segment = this.options.segment),
              this.updateElement(r, void 0, { animated: !i, options: s }, t);
          } else
            this.datasetElementType &&
              (delete e.dataset, (this.datasetElementType = !1));
          this.updateElements(n, r, o, t);
        }
        addElements() {
          const { showLine: t } = this.options;
          !this.datasetElementType &&
            t &&
            (this.datasetElementType = this.chart.registry.getElement("line")),
            super.addElements();
        }
        updateElements(t, e, n, i) {
          const r = "reset" === i,
            {
              iScale: o,
              vScale: s,
              _stacked: a,
              _dataset: l,
            } = this._cachedMeta,
            c = this.resolveDataElementOptions(e, i),
            u = this.getSharedOptions(c),
            h = this.includeOptions(i, u),
            d = o.axis,
            f = s.axis,
            { spanGaps: p, segment: g } = this.options,
            m = xt(p) ? p : Number.POSITIVE_INFINITY,
            v = this.chart._animationsDisabled || r || "none" === i;
          let y = e > 0 && this.getParsed(e - 1);
          for (let b = e; b < e + n; ++b) {
            const e = t[b],
              n = this.getParsed(b),
              c = v ? e : {},
              p = N(n[f]),
              x = (c[d] = o.getPixelForValue(n[d], b)),
              w = (c[f] =
                r || p
                  ? s.getBasePixel()
                  : s.getPixelForValue(a ? this.applyStack(s, n, a) : n[f], b));
            (c.skip = isNaN(x) || isNaN(w) || p),
              (c.stop = b > 0 && Math.abs(n[d] - y[d]) > m),
              g && ((c.parsed = n), (c.raw = l.data[b])),
              h &&
                (c.options =
                  u ||
                  this.resolveDataElementOptions(b, e.active ? "active" : i)),
              v || this.updateElement(e, b, c, i),
              (y = n);
          }
          this.updateSharedOptions(u, i, c);
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.data || [];
          if (!this.options.showLine) {
            let t = 0;
            for (let n = e.length - 1; n >= 0; --n)
              t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2);
            return t > 0 && t;
          }
          const n = t.dataset,
            i = (n.options && n.options.borderWidth) || 0;
          if (!e.length) return i;
          const r = e[0].size(this.resolveDataElementOptions(0)),
            o = e[e.length - 1].size(
              this.resolveDataElementOptions(e.length - 1)
            );
          return Math.max(i, r, o) / 2;
        }
      }
      (0, r.A)(ci, "id", "scatter"),
        (0, r.A)(ci, "defaults", {
          datasetElementType: !1,
          dataElementType: "point",
          showLine: !1,
          fill: !1,
        }),
        (0, r.A)(ci, "overrides", {
          interaction: { mode: "point" },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        });
      function ui() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      class hi {
        static override(t) {
          Object.assign(hi.prototype, t);
        }
        constructor(t) {
          (0, r.A)(this, "options", void 0), (this.options = t || {});
        }
        init() {}
        formats() {
          return ui();
        }
        parse() {
          return ui();
        }
        format() {
          return ui();
        }
        add() {
          return ui();
        }
        diff() {
          return ui();
        }
        startOf() {
          return ui();
        }
        endOf() {
          return ui();
        }
      }
      var di = hi;
      function fi(t, e, n, i) {
        const { controller: r, data: o, _sorted: s } = t,
          a = r._cachedMeta.iScale,
          l =
            t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
        if (a && e === a.axis && "r" !== e && s && o.length) {
          const s = a._reversePixels ? Lt : Rt;
          if (!i) {
            const i = s(o, e, n);
            if (l) {
              const { vScale: e } = r._cachedMeta,
                { _parsed: n } = t,
                o = n
                  .slice(0, i.lo + 1)
                  .reverse()
                  .findIndex((t) => !N(t[e.axis]));
              i.lo -= Math.max(0, o);
              const s = n.slice(i.hi).findIndex((t) => !N(t[e.axis]));
              i.hi += Math.max(0, s);
            }
            return i;
          }
          if (r._sharedOptions) {
            const t = o[0],
              i = "function" === typeof t.getRange && t.getRange(e);
            if (i) {
              const t = s(o, e, n - i),
                r = s(o, e, n + i);
              return { lo: t.lo, hi: r.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function pi(t, e, n, i, r) {
        const o = t.getSortedVisibleDatasetMetas(),
          s = n[e];
        for (let a = 0, l = o.length; a < l; ++a) {
          const { index: t, data: n } = o[a],
            { lo: l, hi: c } = fi(o[a], e, s, r);
          for (let e = l; e <= c; ++e) {
            const r = n[e];
            r.skip || i(r, t, e);
          }
        }
      }
      function gi(t, e, n, i, r) {
        const o = [];
        if (!r && !t.isPointInArea(e)) return o;
        return (
          pi(
            t,
            n,
            e,
            function (n, s, a) {
              (r || ge(n, t.chartArea, 0)) &&
                n.inRange(e.x, e.y, i) &&
                o.push({ element: n, datasetIndex: s, index: a });
            },
            !0
          ),
          o
        );
      }
      function mi(t, e, n, i, r, o) {
        let s = [];
        const a = (function (t) {
          const e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
          return function (t, i) {
            const r = e ? Math.abs(t.x - i.x) : 0,
              o = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
          };
        })(n);
        let l = Number.POSITIVE_INFINITY;
        return (
          pi(t, n, e, function (n, c, u) {
            const h = n.inRange(e.x, e.y, r);
            if (i && !h) return;
            const d = n.getCenterPoint(r);
            if (!(!!o || t.isPointInArea(d)) && !h) return;
            const f = a(e, d);
            f < l
              ? ((s = [{ element: n, datasetIndex: c, index: u }]), (l = f))
              : f === l && s.push({ element: n, datasetIndex: c, index: u });
          }),
          s
        );
      }
      function vi(t, e, n, i, r, o) {
        return o || t.isPointInArea(e)
          ? "r" !== n || i
            ? mi(t, e, n, i, r, o)
            : (function (t, e, n, i) {
                let r = [];
                return (
                  pi(t, n, e, function (t, n, o) {
                    const { startAngle: s, endAngle: a } = t.getProps(
                        ["startAngle", "endAngle"],
                        i
                      ),
                      { angle: l } = At(t, { x: e.x, y: e.y });
                    Et(l, s, a) &&
                      r.push({ element: t, datasetIndex: n, index: o });
                  }),
                  r
                );
              })(t, e, n, r)
          : [];
      }
      function yi(t, e, n, i, r) {
        const o = [],
          s = "x" === n ? "inXRange" : "inYRange";
        let a = !1;
        return (
          pi(t, n, e, (t, i, l) => {
            t[s] &&
              t[s](e[n], r) &&
              (o.push({ element: t, datasetIndex: i, index: l }),
              (a = a || t.inRange(e.x, e.y, r)));
          }),
          i && !a ? [] : o
        );
      }
      var bi = {
        evaluateInteractionItems: pi,
        modes: {
          index(t, e, n, i) {
            const r = cn(e, t),
              o = n.axis || "x",
              s = n.includeInvisible || !1,
              a = n.intersect ? gi(t, r, o, i, s) : vi(t, r, o, !1, i, s),
              l = [];
            return a.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = a[0].index,
                    n = t.data[e];
                  n &&
                    !n.skip &&
                    l.push({ element: n, datasetIndex: t.index, index: e });
                }),
                l)
              : [];
          },
          dataset(t, e, n, i) {
            const r = cn(e, t),
              o = n.axis || "xy",
              s = n.includeInvisible || !1;
            let a = n.intersect ? gi(t, r, o, i, s) : vi(t, r, o, !1, i, s);
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                n = t.getDatasetMeta(e).data;
              a = [];
              for (let t = 0; t < n.length; ++t)
                a.push({ element: n[t], datasetIndex: e, index: t });
            }
            return a;
          },
          point: (t, e, n, i) =>
            gi(t, cn(e, t), n.axis || "xy", i, n.includeInvisible || !1),
          nearest(t, e, n, i) {
            const r = cn(e, t),
              o = n.axis || "xy",
              s = n.includeInvisible || !1;
            return vi(t, r, o, n.intersect, i, s);
          },
          x: (t, e, n, i) => yi(t, cn(e, t), "x", n.intersect, i),
          y: (t, e, n, i) => yi(t, cn(e, t), "y", n.intersect, i),
        },
      };
      const xi = ["left", "top", "right", "bottom"];
      function wi(t, e) {
        return t.filter((t) => t.pos === e);
      }
      function _i(t, e) {
        return t.filter((t) => -1 === xi.indexOf(t.pos) && t.box.axis === e);
      }
      function Mi(t, e) {
        return t.sort((t, n) => {
          const i = e ? n : t,
            r = e ? t : n;
          return i.weight === r.weight
            ? i.index - r.index
            : i.weight - r.weight;
        });
      }
      function Si(t, e) {
        const n = (function (t) {
            const e = {};
            for (const n of t) {
              const { stack: t, pos: i, stackWeight: r } = n;
              if (!t || !xi.includes(i)) continue;
              const o =
                e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
              o.count++, (o.weight += r);
            }
            return e;
          })(t),
          { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
        let o, s, a;
        for (o = 0, s = t.length; o < s; ++o) {
          a = t[o];
          const { fullSize: s } = a.box,
            l = n[a.stack],
            c = l && a.stackWeight / l.weight;
          a.horizontal
            ? ((a.width = c ? c * i : s && e.availableWidth), (a.height = r))
            : ((a.width = i), (a.height = c ? c * r : s && e.availableHeight));
        }
        return n;
      }
      function Ai(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
      }
      function ki(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function Pi(t, e, n, i) {
        const { pos: r, box: o } = n,
          s = t.maxPadding;
        if (!W(r)) {
          n.size && (t[r] -= n.size);
          const e = i[n.stack] || { size: 0, count: 1 };
          (e.size = Math.max(e.size, n.horizontal ? o.height : o.width)),
            (n.size = e.size / e.count),
            (t[r] += n.size);
        }
        o.getPadding && ki(s, o.getPadding());
        const a = Math.max(0, e.outerWidth - Ai(s, t, "left", "right")),
          l = Math.max(0, e.outerHeight - Ai(s, t, "top", "bottom")),
          c = a !== t.w,
          u = l !== t.h;
        return (
          (t.w = a),
          (t.h = l),
          n.horizontal ? { same: c, other: u } : { same: u, other: c }
        );
      }
      function Ci(t, e) {
        const n = e.maxPadding;
        function i(t) {
          const i = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach((t) => {
              i[t] = Math.max(e[t], n[t]);
            }),
            i
          );
        }
        return i(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function Ei(t, e, n, i) {
        const r = [];
        let o, s, a, l, c, u;
        for (o = 0, s = t.length, c = 0; o < s; ++o) {
          (a = t[o]),
            (l = a.box),
            l.update(a.width || e.w, a.height || e.h, Ci(a.horizontal, e));
          const { same: s, other: h } = Pi(e, n, a, i);
          (c |= s && r.length), (u = u || h), l.fullSize || r.push(a);
        }
        return (c && Ei(r, e, n, i)) || u;
      }
      function Ti(t, e, n, i, r) {
        (t.top = n),
          (t.left = e),
          (t.right = e + i),
          (t.bottom = n + r),
          (t.width = i),
          (t.height = r);
      }
      function Oi(t, e, n, i) {
        const r = n.padding;
        let { x: o, y: s } = e;
        for (const a of t) {
          const t = a.box,
            l = i[a.stack] || { count: 1, placed: 0, weight: 1 },
            c = a.stackWeight / l.weight || 1;
          if (a.horizontal) {
            const i = e.w * c,
              o = l.size || t.height;
            ot(l.start) && (s = l.start),
              t.fullSize
                ? Ti(t, r.left, s, n.outerWidth - r.right - r.left, o)
                : Ti(t, e.left + l.placed, s, i, o),
              (l.start = s),
              (l.placed += i),
              (s = t.bottom);
          } else {
            const i = e.h * c,
              s = l.size || t.width;
            ot(l.start) && (o = l.start),
              t.fullSize
                ? Ti(t, o, r.top, s, n.outerHeight - r.bottom - r.top)
                : Ti(t, o, e.top + l.placed, s, i),
              (l.start = o),
              (l.placed += i),
              (o = t.right);
          }
        }
        (e.x = o), (e.y = s);
      }
      var Di = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const n = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== n && t.boxes.splice(n, 1);
        },
        configure(t, e, n) {
          (e.fullSize = n.fullSize),
            (e.position = n.position),
            (e.weight = n.weight);
        },
        update(t, e, n, i) {
          if (!t) return;
          const r = Oe(t.options.layout.padding),
            o = Math.max(e - r.width, 0),
            s = Math.max(n - r.height, 0),
            a = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let n, i, r, o, s, a;
                  for (n = 0, i = (t || []).length; n < i; ++n)
                    (r = t[n]),
                      ({
                        position: o,
                        options: { stack: s, stackWeight: a = 1 },
                      } = r),
                      e.push({
                        index: n,
                        box: r,
                        pos: o,
                        horizontal: r.isHorizontal(),
                        weight: r.weight,
                        stack: s && o + s,
                        stackWeight: a,
                      });
                  return e;
                })(t),
                n = Mi(
                  e.filter((t) => t.box.fullSize),
                  !0
                ),
                i = Mi(wi(e, "left"), !0),
                r = Mi(wi(e, "right")),
                o = Mi(wi(e, "top"), !0),
                s = Mi(wi(e, "bottom")),
                a = _i(e, "x"),
                l = _i(e, "y");
              return {
                fullSize: n,
                leftAndTop: i.concat(o),
                rightAndBottom: r.concat(l).concat(s).concat(a),
                chartArea: wi(e, "chartArea"),
                vertical: i.concat(r).concat(l),
                horizontal: o.concat(s).concat(a),
              };
            })(t.boxes),
            l = a.vertical,
            c = a.horizontal;
          $(t.boxes, (t) => {
            "function" === typeof t.beforeLayout && t.beforeLayout();
          });
          const u =
              l.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0
              ) || 1,
            h = Object.freeze({
              outerWidth: e,
              outerHeight: n,
              padding: r,
              availableWidth: o,
              availableHeight: s,
              vBoxMaxWidth: o / 2 / u,
              hBoxMaxHeight: s / 2,
            }),
            d = Object.assign({}, r);
          ki(d, Oe(i));
          const f = Object.assign(
              { maxPadding: d, w: o, h: s, x: r.left, y: r.top },
              r
            ),
            p = Si(l.concat(c), h);
          Ei(a.fullSize, f, h, p),
            Ei(l, f, h, p),
            Ei(c, f, h, p) && Ei(l, f, h, p),
            (function (t) {
              const e = t.maxPadding;
              function n(n) {
                const i = Math.max(e[n] - t[n], 0);
                return (t[n] += i), i;
              }
              (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
            })(f),
            Oi(a.leftAndTop, f, h, p),
            (f.x += f.w),
            (f.y += f.h),
            Oi(a.rightAndBottom, f, h, p),
            (t.chartArea = {
              left: f.left,
              top: f.top,
              right: f.left + f.w,
              bottom: f.top + f.h,
              height: f.h,
              width: f.w,
            }),
            $(a.chartArea, (e) => {
              const n = e.box;
              Object.assign(n, t.chartArea),
                n.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class Ri {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, n) {}
        removeEventListener(t, e, n) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, n, i) {
          return (
            (e = Math.max(0, e || t.width)),
            (n = n || t.height),
            { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class Li extends Ri {
        acquireContext(t) {
          return (t && t.getContext && t.getContext("2d")) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const Fi = "$chartjs",
        Vi = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Ii = (t) => null === t || "" === t;
      const ji = !!fn && { passive: !0 };
      function zi(t, e, n) {
        t && t.canvas && t.canvas.removeEventListener(e, n, ji);
      }
      function Ni(t, e) {
        for (const n of t) if (n === e || n.contains(e)) return !0;
      }
      function Bi(t, e, n) {
        const i = t.canvas,
          r = new MutationObserver((t) => {
            let e = !1;
            for (const n of t)
              (e = e || Ni(n.addedNodes, i)), (e = e && !Ni(n.removedNodes, i));
            e && n();
          });
        return r.observe(document, { childList: !0, subtree: !0 }), r;
      }
      function Wi(t, e, n) {
        const i = t.canvas,
          r = new MutationObserver((t) => {
            let e = !1;
            for (const n of t)
              (e = e || Ni(n.removedNodes, i)), (e = e && !Ni(n.addedNodes, i));
            e && n();
          });
        return r.observe(document, { childList: !0, subtree: !0 }), r;
      }
      const Hi = new Map();
      let Ui = 0;
      function Yi() {
        const t = window.devicePixelRatio;
        t !== Ui &&
          ((Ui = t),
          Hi.forEach((e, n) => {
            n.currentDevicePixelRatio !== t && e();
          }));
      }
      function qi(t, e, n) {
        const i = t.canvas,
          r = i && rn(i);
        if (!r) return;
        const o = zt((t, e) => {
            const i = r.clientWidth;
            n(t, e), i < r.clientWidth && n();
          }, window),
          s = new ResizeObserver((t) => {
            const e = t[0],
              n = e.contentRect.width,
              i = e.contentRect.height;
            (0 === n && 0 === i) || o(n, i);
          });
        return (
          s.observe(r),
          (function (t, e) {
            Hi.size || window.addEventListener("resize", Yi), Hi.set(t, e);
          })(t, o),
          s
        );
      }
      function Xi(t, e, n) {
        n && n.disconnect(),
          "resize" === e &&
            (function (t) {
              Hi.delete(t), Hi.size || window.removeEventListener("resize", Yi);
            })(t);
      }
      function $i(t, e, n) {
        const i = t.canvas,
          r = zt((e) => {
            null !== t.ctx &&
              n(
                (function (t, e) {
                  const n = Vi[t.type] || t.type,
                    { x: i, y: r } = cn(t, e);
                  return {
                    type: n,
                    chart: e,
                    native: t,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== r ? r : null,
                  };
                })(e, t)
              );
          }, t);
        return (
          (function (t, e, n) {
            t && t.addEventListener(e, n, ji);
          })(i, e, r),
          r
        );
      }
      class Ki extends Ri {
        acquireContext(t, e) {
          const n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t
            ? ((function (t, e) {
                const n = t.style,
                  i = t.getAttribute("height"),
                  r = t.getAttribute("width");
                if (
                  ((t[Fi] = {
                    initial: {
                      height: i,
                      width: r,
                      style: {
                        display: n.display,
                        height: n.height,
                        width: n.width,
                      },
                    },
                  }),
                  (n.display = n.display || "block"),
                  (n.boxSizing = n.boxSizing || "border-box"),
                  Ii(r))
                ) {
                  const e = pn(t, "width");
                  void 0 !== e && (t.width = e);
                }
                if (Ii(i))
                  if ("" === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = pn(t, "height");
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              n)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[Fi]) return !1;
          const n = e[Fi].initial;
          ["height", "width"].forEach((t) => {
            const i = n[t];
            N(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
          });
          const i = n.style || {};
          return (
            Object.keys(i).forEach((t) => {
              e.style[t] = i[t];
            }),
            (e.width = e.width),
            delete e[Fi],
            !0
          );
        }
        addEventListener(t, e, n) {
          this.removeEventListener(t, e);
          const i = t.$proxies || (t.$proxies = {}),
            r = { attach: Bi, detach: Wi, resize: qi }[e] || $i;
          i[e] = r(t, e, n);
        }
        removeEventListener(t, e) {
          const n = t.$proxies || (t.$proxies = {}),
            i = n[e];
          if (!i) return;
          (({ attach: Xi, detach: Xi, resize: Xi }[e] || zi)(t, e, i),
            (n[e] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, n, i) {
          return hn(t, e, n, i);
        }
        isAttached(t) {
          const e = t && rn(t);
          return !(!e || !e.isConnected);
        }
      }
      class Gi {
        constructor() {
          (0, r.A)(this, "x", void 0),
            (0, r.A)(this, "y", void 0),
            (0, r.A)(this, "active", !1),
            (0, r.A)(this, "options", void 0),
            (0, r.A)(this, "$animations", void 0);
        }
        tooltipPosition(t) {
          const { x: e, y: n } = this.getProps(["x", "y"], t);
          return { x: e, y: n };
        }
        hasValue() {
          return xt(this.x) && xt(this.y);
        }
        getProps(t, e) {
          const n = this.$animations;
          if (!e || !n) return this;
          const i = {};
          return (
            t.forEach((t) => {
              i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
            }),
            i
          );
        }
      }
      function Zi(t, e) {
        const n = t.options.ticks,
          i = (function (t) {
            const e = t.options.offset,
              n = t._tickSize(),
              i = t._length / n + (e ? 0 : 1),
              r = t._maxLength / n;
            return Math.floor(Math.min(i, r));
          })(t),
          r = Math.min(n.maxTicksLimit || i, i),
          o = n.major.enabled
            ? (function (t) {
                const e = [];
                let n, i;
                for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
                return e;
              })(e)
            : [],
          s = o.length,
          a = o[0],
          l = o[s - 1],
          c = [];
        if (s > r)
          return (
            (function (t, e, n, i) {
              let r,
                o = 0,
                s = n[0];
              for (i = Math.ceil(i), r = 0; r < t.length; r++)
                r === s && (e.push(t[r]), o++, (s = n[o * i]));
            })(e, c, o, s / r),
            c
          );
        const u = (function (t, e, n) {
          const i = (function (t) {
              const e = t.length;
              let n, i;
              if (e < 2) return !1;
              for (i = t[0], n = 1; n < e; ++n)
                if (t[n] - t[n - 1] !== i) return !1;
              return i;
            })(t),
            r = e.length / n;
          if (!i) return Math.max(r, 1);
          const o = (function (t) {
            const e = [],
              n = Math.sqrt(t);
            let i;
            for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
            return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
          })(i);
          for (let s = 0, a = o.length - 1; s < a; s++) {
            const t = o[s];
            if (t > r) return t;
          }
          return Math.max(r, 1);
        })(o, e, r);
        if (s > 0) {
          let t, n;
          const i = s > 1 ? Math.round((l - a) / (s - 1)) : null;
          for (Ji(e, c, u, N(i) ? 0 : a - i, a), t = 0, n = s - 1; t < n; t++)
            Ji(e, c, u, o[t], o[t + 1]);
          return Ji(e, c, u, l, N(i) ? e.length : l + i), c;
        }
        return Ji(e, c, u), c;
      }
      function Ji(t, e, n, i, r) {
        const o = Y(i, 0),
          s = Math.min(Y(r, t.length), t.length);
        let a,
          l,
          c,
          u = 0;
        for (
          n = Math.ceil(n),
            r && ((a = r - i), (n = a / Math.floor(a / n))),
            c = o;
          c < 0;

        )
          u++, (c = Math.round(o + u * n));
        for (l = Math.max(o, 0); l < s; l++)
          l === c && (e.push(t[l]), u++, (c = Math.round(o + u * n)));
      }
      (0, r.A)(Gi, "defaults", {}), (0, r.A)(Gi, "defaultRoutes", void 0);
      const Qi = (t, e, n) =>
          "top" === e || "left" === e ? t[e] + n : t[e] - n,
        tr = (t, e) => Math.min(e || t, t);
      function er(t, e) {
        const n = [],
          i = t.length / e,
          r = t.length;
        let o = 0;
        for (; o < r; o += i) n.push(t[Math.floor(o)]);
        return n;
      }
      function nr(t, e, n) {
        const i = t.ticks.length,
          r = Math.min(e, i - 1),
          o = t._startPixel,
          s = t._endPixel,
          a = 1e-6;
        let l,
          c = t.getPixelForTick(r);
        if (
          !(
            n &&
            ((l =
              1 === i
                ? Math.max(c - o, s - c)
                : 0 === e
                ? (t.getPixelForTick(1) - c) / 2
                : (c - t.getPixelForTick(r - 1)) / 2),
            (c += r < e ? l : -l),
            c < o - a || c > s + a)
          )
        )
          return c;
      }
      function ir(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function rr(t, e) {
        if (!t.display) return 0;
        const n = De(t.font, e),
          i = Oe(t.padding);
        return (B(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
      }
      function or(t, e, n) {
        let i = Nt(t);
        return (
          ((n && "right" !== e) || (!n && "right" === e)) &&
            (i = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(
              i
            )),
          i
        );
      }
      class sr extends Gi {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: n,
            _suggestedMax: i,
          } = this;
          return (
            (t = U(t, Number.POSITIVE_INFINITY)),
            (e = U(e, Number.NEGATIVE_INFINITY)),
            (n = U(n, Number.POSITIVE_INFINITY)),
            (i = U(i, Number.NEGATIVE_INFINITY)),
            { min: U(t, n), max: U(e, i), minDefined: H(t), maxDefined: H(e) }
          );
        }
        getMinMax(t) {
          let e,
            {
              min: n,
              max: i,
              minDefined: r,
              maxDefined: o,
            } = this.getUserBounds();
          if (r && o) return { min: n, max: i };
          const s = this.getMatchingVisibleMetas();
          for (let a = 0, l = s.length; a < l; ++a)
            (e = s[a].controller.getMinMax(this, t)),
              r || (n = Math.min(n, e.min)),
              o || (i = Math.max(i, e.max));
          return (
            (n = o && n > i ? i : n),
            (i = r && n > i ? n : i),
            { min: U(n, U(i, n)), max: U(i, U(n, i)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        getLabelItems() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.chart.chartArea;
          return (
            this._labelItems || (this._labelItems = this._computeLabelItems(t))
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          X(this.options.beforeUpdate, [this]);
        }
        update(t, e, n) {
          const { beginAtZero: i, grace: r, ticks: o } = this.options,
            s = o.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = n = Object.assign(
              { left: 0, right: 0, top: 0, bottom: 0 },
              n
            )),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + n.left + n.right
              : this.height + n.top + n.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, n) {
                const { min: i, max: r } = t,
                  o = q(e, (r - i) / 2),
                  s = (t, e) => (n && 0 === t ? 0 : t + e);
                return { min: s(i, -Math.abs(o)), max: s(r, o) };
              })(this, r, i)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const a = s < this.ticks.length;
          this._convertTicksToLabels(a ? er(this.ticks, s) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || "auto" === o.source) &&
              ((this.ticks = Zi(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            n = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (n = !n)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = n),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          X(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          X(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          X(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()),
            X(this.options[t], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          X(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let n, i, r;
          for (n = 0, i = t.length; n < i; n++)
            (r = t[n]), (r.label = X(e.callback, [r.value, n, t], this));
        }
        afterTickToLabelConversion() {
          X(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          X(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            n = tr(this.ticks.length, t.ticks.maxTicksLimit),
            i = e.minRotation || 0,
            r = e.maxRotation;
          let o,
            s,
            a,
            l = i;
          if (
            !this._isVisible() ||
            !e.display ||
            i >= r ||
            n <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = i);
          const c = this._getLabelSizes(),
            u = c.widest.width,
            h = c.highest.height,
            d = Tt(this.chart.width - u, 0, this.maxWidth);
          (o = t.offset ? this.maxWidth / n : d / (n - 1)),
            u + 6 > o &&
              ((o = d / (n - (t.offset ? 0.5 : 1))),
              (s =
                this.maxHeight -
                ir(t.grid) -
                e.padding -
                rr(t.title, this.chart.options.font)),
              (a = Math.sqrt(u * u + h * h)),
              (l = Mt(
                Math.min(
                  Math.asin(Tt((c.highest.height + 6) / o, -1, 1)),
                  Math.asin(Tt(s / a, -1, 1)) - Math.asin(Tt(h / a, -1, 1))
                )
              )),
              (l = Math.max(i, Math.min(r, l)))),
            (this.labelRotation = l);
        }
        afterCalculateLabelRotation() {
          X(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          X(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: n, title: i, grid: r },
            } = this,
            o = this._isVisible(),
            s = this.isHorizontal();
          if (o) {
            const o = rr(i, e.options.font);
            if (
              (s
                ? ((t.width = this.maxWidth), (t.height = ir(r) + o))
                : ((t.height = this.maxHeight), (t.width = ir(r) + o)),
              n.display && this.ticks.length)
            ) {
              const {
                  first: e,
                  last: i,
                  widest: r,
                  highest: o,
                } = this._getLabelSizes(),
                a = 2 * n.padding,
                l = _t(this.labelRotation),
                c = Math.cos(l),
                u = Math.sin(l);
              if (s) {
                const e = n.mirror ? 0 : u * r.width + c * o.height;
                t.height = Math.min(this.maxHeight, t.height + e + a);
              } else {
                const e = n.mirror ? 0 : c * r.width + u * o.height;
                t.width = Math.min(this.maxWidth, t.width + e + a);
              }
              this._calculatePadding(e, i, u, c);
            }
          }
          this._handleMargins(),
            s
              ? ((this.width = this._length =
                  e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, n, i) {
          const {
              ticks: { align: r, padding: o },
              position: s,
            } = this.options,
            a = 0 !== this.labelRotation,
            l = "top" !== s && "x" === this.axis;
          if (this.isHorizontal()) {
            const s = this.getPixelForTick(0) - this.left,
              c = this.right - this.getPixelForTick(this.ticks.length - 1);
            let u = 0,
              h = 0;
            a
              ? l
                ? ((u = i * t.width), (h = n * e.height))
                : ((u = n * t.height), (h = i * e.width))
              : "start" === r
              ? (h = e.width)
              : "end" === r
              ? (u = t.width)
              : "inner" !== r && ((u = t.width / 2), (h = e.width / 2)),
              (this.paddingLeft = Math.max(
                ((u - s + o) * this.width) / (this.width - s),
                0
              )),
              (this.paddingRight = Math.max(
                ((h - c + o) * this.width) / (this.width - c),
                0
              ));
          } else {
            let n = e.height / 2,
              i = t.height / 2;
            "start" === r
              ? ((n = 0), (i = t.height))
              : "end" === r && ((n = e.height), (i = 0)),
              (this.paddingTop = n + o),
              (this.paddingBottom = i + o);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          X(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return "top" === e || "bottom" === e || "x" === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, n;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(t),
              e = 0,
              n = t.length;
            e < n;
            e++
          )
            N(t[e].label) && (t.splice(e, 1), n--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let n = this.ticks;
            e < n.length && (n = er(n, e)),
              (this._labelSizes = t = this._computeLabelSizes(
                n,
                n.length,
                this.options.ticks.maxTicksLimit
              ));
          }
          return t;
        }
        _computeLabelSizes(t, e, n) {
          const { ctx: i, _longestTextCache: r } = this,
            o = [],
            s = [],
            a = Math.floor(e / tr(e, n));
          let l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m,
            v,
            y,
            b = 0,
            x = 0;
          for (l = 0; l < e; l += a) {
            if (
              ((h = t[l].label),
              (d = this._resolveTickFontOptions(l)),
              (i.font = f = d.string),
              (p = r[f] = r[f] || { data: {}, gc: [] }),
              (g = d.lineHeight),
              (m = v = 0),
              N(h) || B(h))
            ) {
              if (B(h))
                for (c = 0, u = h.length; c < u; ++c)
                  (y = h[c]),
                    N(y) || B(y) || ((m = ce(i, p.data, p.gc, m, y)), (v += g));
            } else (m = ce(i, p.data, p.gc, m, h)), (v = g);
            o.push(m), s.push(v), (b = Math.max(m, b)), (x = Math.max(v, x));
          }
          !(function (t, e) {
            $(t, (t) => {
              const n = t.gc,
                i = n.length / 2;
              let r;
              if (i > e) {
                for (r = 0; r < i; ++r) delete t.data[n[r]];
                n.splice(0, i);
              }
            });
          })(r, e);
          const w = o.indexOf(b),
            _ = s.indexOf(x),
            M = (t) => ({ width: o[t] || 0, height: s[t] || 0 });
          return {
            first: M(0),
            last: M(e - 1),
            widest: M(w),
            highest: M(_),
            widths: o,
            heights: s,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return Tt(
            this._alignToPixels ? he(this.chart, e, 0) : e,
            -32768,
            32767
          );
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const n = e[t];
            return (
              n.$context ||
              (n.$context = (function (t, e, n) {
                return Le(t, { tick: n, index: e, type: "tick" });
              })(this.getContext(), t, n))
            );
          }
          return (
            this.$context ||
            (this.$context = Le(this.chart.getContext(), {
              scale: this,
              type: "scale",
            }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = _t(this.labelRotation),
            n = Math.abs(Math.cos(e)),
            i = Math.abs(Math.sin(e)),
            r = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            s = r ? r.widest.width + o : 0,
            a = r ? r.highest.height + o : 0;
          return this.isHorizontal()
            ? a * n > s * i
              ? s / n
              : a / i
            : a * i < s * n
            ? a / n
            : s / i;
        }
        _isVisible() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            n = this.chart,
            i = this.options,
            { grid: r, position: o, border: s } = i,
            a = r.offset,
            l = this.isHorizontal(),
            c = this.ticks.length + (a ? 1 : 0),
            u = ir(r),
            h = [],
            d = s.setContext(this.getContext()),
            f = d.display ? d.width : 0,
            p = f / 2,
            g = function (t) {
              return he(n, t, f);
            };
          let m, v, y, b, x, w, _, M, S, A, k, P;
          if ("top" === o)
            (m = g(this.bottom)),
              (w = this.bottom - u),
              (M = m - p),
              (A = g(t.top) + p),
              (P = t.bottom);
          else if ("bottom" === o)
            (m = g(this.top)),
              (A = t.top),
              (P = g(t.bottom) - p),
              (w = m + p),
              (M = this.top + u);
          else if ("left" === o)
            (m = g(this.right)),
              (x = this.right - u),
              (_ = m - p),
              (S = g(t.left) + p),
              (k = t.right);
          else if ("right" === o)
            (m = g(this.left)),
              (S = t.left),
              (k = g(t.right) - p),
              (x = m + p),
              (_ = this.left + u);
          else if ("x" === e) {
            if ("center" === o) m = g((t.top + t.bottom) / 2 + 0.5);
            else if (W(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            (A = t.top), (P = t.bottom), (w = m + p), (M = w + u);
          } else if ("y" === e) {
            if ("center" === o) m = g((t.left + t.right) / 2);
            else if (W(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            (x = m - p), (_ = x - u), (S = t.left), (k = t.right);
          }
          const C = Y(i.ticks.maxTicksLimit, c),
            E = Math.max(1, Math.ceil(c / C));
          for (v = 0; v < c; v += E) {
            const t = this.getContext(v),
              e = r.setContext(t),
              i = s.setContext(t),
              o = e.lineWidth,
              c = e.color,
              u = i.dash || [],
              d = i.dashOffset,
              f = e.tickWidth,
              p = e.tickColor,
              g = e.tickBorderDash || [],
              m = e.tickBorderDashOffset;
            (y = nr(this, v, a)),
              void 0 !== y &&
                ((b = he(n, y, o)),
                l ? (x = _ = S = k = b) : (w = M = A = P = b),
                h.push({
                  tx1: x,
                  ty1: w,
                  tx2: _,
                  ty2: M,
                  x1: S,
                  y1: A,
                  x2: k,
                  y2: P,
                  width: o,
                  color: c,
                  borderDash: u,
                  borderDashOffset: d,
                  tickWidth: f,
                  tickColor: p,
                  tickBorderDash: g,
                  tickBorderDashOffset: m,
                }));
          }
          return (this._ticksLength = c), (this._borderValue = m), h;
        }
        _computeLabelItems(t) {
          const e = this.axis,
            n = this.options,
            { position: i, ticks: r } = n,
            o = this.isHorizontal(),
            s = this.ticks,
            { align: a, crossAlign: l, padding: c, mirror: u } = r,
            h = ir(n.grid),
            d = h + c,
            f = u ? -c : d,
            p = -_t(this.labelRotation),
            g = [];
          let m,
            v,
            y,
            b,
            x,
            w,
            _,
            M,
            S,
            A,
            k,
            P,
            C = "middle";
          if ("top" === i)
            (w = this.bottom - f), (_ = this._getXAxisLabelAlignment());
          else if ("bottom" === i)
            (w = this.top + f), (_ = this._getXAxisLabelAlignment());
          else if ("left" === i) {
            const t = this._getYAxisLabelAlignment(h);
            (_ = t.textAlign), (x = t.x);
          } else if ("right" === i) {
            const t = this._getYAxisLabelAlignment(h);
            (_ = t.textAlign), (x = t.x);
          } else if ("x" === e) {
            if ("center" === i) w = (t.top + t.bottom) / 2 + d;
            else if (W(i)) {
              const t = Object.keys(i)[0],
                e = i[t];
              w = this.chart.scales[t].getPixelForValue(e) + d;
            }
            _ = this._getXAxisLabelAlignment();
          } else if ("y" === e) {
            if ("center" === i) x = (t.left + t.right) / 2 - d;
            else if (W(i)) {
              const t = Object.keys(i)[0],
                e = i[t];
              x = this.chart.scales[t].getPixelForValue(e);
            }
            _ = this._getYAxisLabelAlignment(h).textAlign;
          }
          "y" === e &&
            ("start" === a ? (C = "top") : "end" === a && (C = "bottom"));
          const E = this._getLabelSizes();
          for (m = 0, v = s.length; m < v; ++m) {
            (y = s[m]), (b = y.label);
            const t = r.setContext(this.getContext(m));
            (M = this.getPixelForTick(m) + r.labelOffset),
              (S = this._resolveTickFontOptions(m)),
              (A = S.lineHeight),
              (k = B(b) ? b.length : 1);
            const e = k / 2,
              n = t.color,
              a = t.textStrokeColor,
              c = t.textStrokeWidth;
            let h,
              d = _;
            if (
              (o
                ? ((x = M),
                  "inner" === _ &&
                    (d =
                      m === v - 1
                        ? this.options.reverse
                          ? "left"
                          : "right"
                        : 0 === m
                        ? this.options.reverse
                          ? "right"
                          : "left"
                        : "center"),
                  (P =
                    "top" === i
                      ? "near" === l || 0 !== p
                        ? -k * A + A / 2
                        : "center" === l
                        ? -E.highest.height / 2 - e * A + A
                        : -E.highest.height + A / 2
                      : "near" === l || 0 !== p
                      ? A / 2
                      : "center" === l
                      ? E.highest.height / 2 - e * A
                      : E.highest.height - k * A),
                  u && (P *= -1),
                  0 === p ||
                    t.showLabelBackdrop ||
                    (x += (A / 2) * Math.sin(p)))
                : ((w = M), (P = ((1 - k) * A) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = Oe(t.backdropPadding),
                n = E.heights[m],
                i = E.widths[m];
              let r = P - e.top,
                o = 0 - e.left;
              switch (C) {
                case "middle":
                  r -= n / 2;
                  break;
                case "bottom":
                  r -= n;
              }
              switch (_) {
                case "center":
                  o -= i / 2;
                  break;
                case "right":
                  o -= i;
                  break;
                case "inner":
                  m === v - 1 ? (o -= i) : m > 0 && (o -= i / 2);
              }
              h = {
                left: o,
                top: r,
                width: i + e.width,
                height: n + e.height,
                color: t.backdropColor,
              };
            }
            g.push({
              label: b,
              font: S,
              textOffset: P,
              options: {
                rotation: p,
                color: n,
                strokeColor: a,
                strokeWidth: c,
                textAlign: d,
                textBaseline: C,
                translation: [x, w],
                backdrop: h,
              },
            });
          }
          return g;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-_t(this.labelRotation)) return "top" === t ? "left" : "right";
          let n = "center";
          return (
            "start" === e.align
              ? (n = "left")
              : "end" === e.align
              ? (n = "right")
              : "inner" === e.align && (n = "inner"),
            n
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: n, mirror: i, padding: r },
            } = this.options,
            o = t + r,
            s = this._getLabelSizes().widest.width;
          let a, l;
          return (
            "left" === e
              ? i
                ? ((l = this.right + r),
                  "near" === n
                    ? (a = "left")
                    : "center" === n
                    ? ((a = "center"), (l += s / 2))
                    : ((a = "right"), (l += s)))
                : ((l = this.right - o),
                  "near" === n
                    ? (a = "right")
                    : "center" === n
                    ? ((a = "center"), (l -= s / 2))
                    : ((a = "left"), (l = this.left)))
              : "right" === e
              ? i
                ? ((l = this.left + r),
                  "near" === n
                    ? (a = "right")
                    : "center" === n
                    ? ((a = "center"), (l -= s / 2))
                    : ((a = "left"), (l -= s)))
                : ((l = this.left + o),
                  "near" === n
                    ? (a = "left")
                    : "center" === n
                    ? ((a = "center"), (l += s / 2))
                    : ((a = "right"), (l = this.right)))
              : (a = "right"),
            { textAlign: a, x: l }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return "left" === e || "right" === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : "top" === e || "bottom" === e
            ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: n,
            top: i,
            width: r,
            height: o,
          } = this;
          e &&
            (t.save(), (t.fillStyle = e), t.fillRect(n, i, r, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const n = this.ticks.findIndex((e) => e.value === t);
          if (n >= 0) {
            return e.setContext(this.getContext(n)).lineWidth;
          }
          return 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            n = this.ctx,
            i =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(t));
          let r, o;
          const s = (t, e, i) => {
            i.width &&
              i.color &&
              (n.save(),
              (n.lineWidth = i.width),
              (n.strokeStyle = i.color),
              n.setLineDash(i.borderDash || []),
              (n.lineDashOffset = i.borderDashOffset),
              n.beginPath(),
              n.moveTo(t.x, t.y),
              n.lineTo(e.x, e.y),
              n.stroke(),
              n.restore());
          };
          if (e.display)
            for (r = 0, o = i.length; r < o; ++r) {
              const t = i[r];
              e.drawOnChartArea &&
                s({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  s(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { border: n, grid: i },
            } = this,
            r = n.setContext(this.getContext()),
            o = n.display ? r.width : 0;
          if (!o) return;
          const s = i.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
          let l, c, u, h;
          this.isHorizontal()
            ? ((l = he(t, this.left, o) - o / 2),
              (c = he(t, this.right, s) + s / 2),
              (u = h = a))
            : ((u = he(t, this.top, o) - o / 2),
              (h = he(t, this.bottom, s) + s / 2),
              (l = c = a)),
            e.save(),
            (e.lineWidth = r.width),
            (e.strokeStyle = r.color),
            e.beginPath(),
            e.moveTo(l, u),
            e.lineTo(c, h),
            e.stroke(),
            e.restore();
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            n = this._computeLabelArea();
          n && me(e, n);
          const i = this.getLabelItems(t);
          for (const r of i) {
            const t = r.options,
              n = r.font;
            _e(e, r.label, 0, r.textOffset, n, t);
          }
          n && ve(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: n, reverse: i },
          } = this;
          if (!n.display) return;
          const r = De(n.font),
            o = Oe(n.padding),
            s = n.align;
          let a = r.lineHeight / 2;
          "bottom" === e || "center" === e || W(e)
            ? ((a += o.bottom),
              B(n.text) && (a += r.lineHeight * (n.text.length - 1)))
            : (a += o.top);
          const { titleX: l, titleY: c, maxWidth: u, rotation: h } = (function (
            t,
            e,
            n,
            i
          ) {
            const { top: r, left: o, bottom: s, right: a, chart: l } = t,
              { chartArea: c, scales: u } = l;
            let h,
              d,
              f,
              p = 0;
            const g = s - r,
              m = a - o;
            if (t.isHorizontal()) {
              if (((d = Bt(i, o, a)), W(n))) {
                const t = Object.keys(n)[0],
                  i = n[t];
                f = u[t].getPixelForValue(i) + g - e;
              } else
                f =
                  "center" === n ? (c.bottom + c.top) / 2 + g - e : Qi(t, n, e);
              h = a - o;
            } else {
              if (W(n)) {
                const t = Object.keys(n)[0],
                  i = n[t];
                d = u[t].getPixelForValue(i) - m + e;
              } else
                d =
                  "center" === n ? (c.left + c.right) / 2 - m + e : Qi(t, n, e);
              (f = Bt(i, s, r)), (p = "left" === n ? -ft : ft);
            }
            return { titleX: d, titleY: f, maxWidth: h, rotation: p };
          })(this, a, e, s);
          _e(t, n.text, 0, 0, r, {
            color: n.color,
            maxWidth: u,
            rotation: h,
            textAlign: or(s, e, i),
            textBaseline: "middle",
            translation: [l, c],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            n = Y(t.grid && t.grid.z, -1),
            i = Y(t.border && t.border.z, 0);
          return this._isVisible() && this.draw === sr.prototype.draw
            ? [
                {
                  z: n,
                  draw: (t) => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle();
                  },
                },
                {
                  z: i,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: (t) => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: (t) => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            n = this.axis + "AxisID",
            i = [];
          let r, o;
          for (r = 0, o = e.length; r < o; ++r) {
            const o = e[r];
            o[n] !== this.id || (t && o.type !== t) || i.push(o);
          }
          return i;
        }
        _resolveTickFontOptions(t) {
          return De(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class ar {
        constructor(t, e, n) {
          (this.type = t),
            (this.scope = e),
            (this.override = n),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            t.prototype
          );
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let n;
          (function (t) {
            return "id" in t && "defaults" in t;
          })(e) && (n = this.register(e));
          const i = this.items,
            r = t.id,
            o = this.scope + "." + r;
          if (!r) throw new Error("class does not have id: " + t);
          return (
            r in i ||
              ((i[r] = t),
              (function (t, e, n) {
                const i = Q(Object.create(null), [
                  n ? le.get(n) : {},
                  le.get(e),
                  t.defaults,
                ]);
                le.set(e, i),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach((n) => {
                        const i = n.split("."),
                          r = i.pop(),
                          o = [t].concat(i).join("."),
                          s = e[n].split("."),
                          a = s.pop(),
                          l = s.join(".");
                        le.route(o, r, l, a);
                      });
                    })(e, t.defaultRoutes);
                t.descriptors && le.describe(e, t.descriptors);
              })(t, o, n),
              this.override && le.override(t.id, t.overrides)),
            o
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            n = t.id,
            i = this.scope;
          n in e && delete e[n],
            i && n in le[i] && (delete le[i][n], this.override && delete ie[n]);
        }
      }
      class lr {
        constructor() {
          (this.controllers = new ar(Xn, "datasets", !0)),
            (this.elements = new ar(Gi, "elements")),
            (this.plugins = new ar(Object, "plugins")),
            (this.scales = new ar(sr, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("register", e);
        }
        remove() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("unregister", e);
        }
        addControllers() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("register", e, this.controllers);
        }
        addElements() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("register", e, this.elements);
        }
        addPlugins() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("register", e, this.plugins);
        }
        addScales() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("register", e, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
          return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
          return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
          return this._get(t, this.scales, "scale");
        }
        removeControllers() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("unregister", e, this.controllers);
        }
        removeElements() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("unregister", e, this.elements);
        }
        removePlugins() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("unregister", e, this.plugins);
        }
        removeScales() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          this._each("unregister", e, this.scales);
        }
        _each(t, e, n) {
          [...e].forEach((e) => {
            const i = n || this._getRegistryForType(e);
            n || i.isForType(e) || (i === this.plugins && e.id)
              ? this._exec(t, i, e)
              : $(e, (e) => {
                  const i = n || this._getRegistryForType(e);
                  this._exec(t, i, e);
                });
          });
        }
        _exec(t, e, n) {
          const i = rt(t);
          X(n["before" + i], [], n), e[t](n), X(n["after" + i], [], n);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const n = this._typedRegistries[e];
            if (n.isForType(t)) return n;
          }
          return this.plugins;
        }
        _get(t, e, n) {
          const i = e.get(t);
          if (void 0 === i)
            throw new Error('"' + t + '" is not a registered ' + n + ".");
          return i;
        }
      }
      var cr = new lr();
      class ur {
        constructor() {
          this._init = void 0;
        }
        notify(t, e, n, i) {
          if (
            ("beforeInit" === e &&
              ((this._init = this._createDescriptors(t, !0)),
              this._notify(this._init, t, "install")),
            void 0 === this._init)
          )
            return;
          const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
            o = this._notify(r, t, e, n);
          return (
            "afterDestroy" === e &&
              (this._notify(r, t, "stop"),
              this._notify(this._init, t, "uninstall"),
              (this._init = void 0)),
            o
          );
        }
        _notify(t, e, n, i) {
          i = i || {};
          for (const r of t) {
            const t = r.plugin;
            if (!1 === X(t[n], [e, i, r.options], t) && i.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          N(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const n = t && t.config,
            i = Y(n.options && n.options.plugins, {}),
            r = (function (t) {
              const e = {},
                n = [],
                i = Object.keys(cr.plugins.items);
              for (let o = 0; o < i.length; o++) n.push(cr.getPlugin(i[o]));
              const r = t.plugins || [];
              for (let o = 0; o < r.length; o++) {
                const t = r[o];
                -1 === n.indexOf(t) && (n.push(t), (e[t.id] = !0));
              }
              return { plugins: n, localIds: e };
            })(n);
          return !1 !== i || e
            ? (function (t, e, n, i) {
                let { plugins: r, localIds: o } = e;
                const s = [],
                  a = t.getContext();
                for (const l of r) {
                  const e = l.id,
                    r = hr(n[e], i);
                  null !== r &&
                    s.push({
                      plugin: l,
                      options: dr(t.config, { plugin: l, local: o[e] }, r, a),
                    });
                }
                return s;
              })(t, r, i, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            n = this._cache,
            i = (t, e) =>
              t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
          this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start");
        }
      }
      function hr(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function dr(t, e, n, i) {
        let { plugin: r, local: o } = e;
        const s = t.pluginScopeKeys(r),
          a = t.getOptionScopes(n, s);
        return (
          o && r.defaults && a.push(r.defaults),
          t.createResolver(a, i, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function fr(t, e) {
        const n = le.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          n.indexAxis ||
          "x"
        );
      }
      function pr(t) {
        if ("x" === t || "y" === t || "r" === t) return t;
      }
      function gr(t) {
        return "top" === t || "bottom" === t
          ? "x"
          : "left" === t || "right" === t
          ? "y"
          : void 0;
      }
      function mr(t) {
        if (pr(t)) return t;
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        for (const r of n) {
          const e =
            r.axis ||
            gr(r.position) ||
            (t.length > 1 && pr(t[0].toLowerCase()));
          if (e) return e;
        }
        throw new Error(
          "Cannot determine type of '".concat(
            t,
            "' axis. Please provide 'axis' or 'position' option."
          )
        );
      }
      function vr(t, e, n) {
        if (n[e + "AxisID"] === t) return { axis: e };
      }
      function yr(t, e) {
        const n = ie[t.type] || { scales: {} },
          i = e.scales || {},
          r = fr(t.type, e),
          o = Object.create(null);
        return (
          Object.keys(i).forEach((e) => {
            const s = i[e];
            if (!W(s))
              return console.error(
                "Invalid scale configuration for scale: ".concat(e)
              );
            if (s._proxy)
              return console.warn(
                "Ignoring resolver passed as options for scale: ".concat(e)
              );
            const a = mr(
                e,
                s,
                (function (t, e) {
                  if (e.data && e.data.datasets) {
                    const n = e.data.datasets.filter(
                      (e) => e.xAxisID === t || e.yAxisID === t
                    );
                    if (n.length) return vr(t, "x", n[0]) || vr(t, "y", n[0]);
                  }
                  return {};
                })(e, t),
                le.scales[s.type]
              ),
              l = (function (t, e) {
                return t === e ? "_index_" : "_value_";
              })(a, r),
              c = n.scales || {};
            o[e] = tt(Object.create(null), [{ axis: a }, s, c[a], c[l]]);
          }),
          t.data.datasets.forEach((n) => {
            const r = n.type || t.type,
              s = n.indexAxis || fr(r, e),
              a = (ie[r] || {}).scales || {};
            Object.keys(a).forEach((t) => {
              const e = (function (t, e) {
                  let n = t;
                  return (
                    "_index_" === t
                      ? (n = e)
                      : "_value_" === t && (n = "x" === e ? "y" : "x"),
                    n
                  );
                })(t, s),
                r = n[e + "AxisID"] || e;
              (o[r] = o[r] || Object.create(null)),
                tt(o[r], [{ axis: e }, i[r], a[t]]);
            });
          }),
          Object.keys(o).forEach((t) => {
            const e = o[t];
            tt(e, [le.scales[e.type], le.scale]);
          }),
          o
        );
      }
      function br(t) {
        const e = t.options || (t.options = {});
        (e.plugins = Y(e.plugins, {})), (e.scales = yr(t, e));
      }
      function xr(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      const wr = new Map(),
        _r = new Set();
      function Mr(t, e) {
        let n = wr.get(t);
        return n || ((n = e()), wr.set(t, n), _r.add(n)), n;
      }
      const Sr = (t, e, n) => {
        const i = it(e, n);
        void 0 !== i && t.add(i);
      };
      class Ar {
        constructor(t) {
          (this._config = (function (t) {
            return ((t = t || {}).data = xr(t.data)), br(t), t;
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = xr(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), br(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return Mr(t, () => [["datasets.".concat(t), ""]]);
        }
        datasetAnimationScopeKeys(t, e) {
          return Mr("".concat(t, ".transition.").concat(e), () => [
            [
              "datasets.".concat(t, ".transitions.").concat(e),
              "transitions.".concat(e),
            ],
            ["datasets.".concat(t), ""],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return Mr("".concat(t, "-").concat(e), () => [
            [
              "datasets.".concat(t, ".elements.").concat(e),
              "datasets.".concat(t),
              "elements.".concat(e),
              "",
            ],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id,
            n = this.type;
          return Mr("".concat(n, "-plugin-").concat(e), () => [
            ["plugins.".concat(e), ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const n = this._scopeCache;
          let i = n.get(t);
          return (i && !e) || ((i = new Map()), n.set(t, i)), i;
        }
        getOptionScopes(t, e, n) {
          const { options: i, type: r } = this,
            o = this._cachedScopes(t, n),
            s = o.get(e);
          if (s) return s;
          const a = new Set();
          e.forEach((e) => {
            t && (a.add(t), e.forEach((e) => Sr(a, t, e))),
              e.forEach((t) => Sr(a, i, t)),
              e.forEach((t) => Sr(a, ie[r] || {}, t)),
              e.forEach((t) => Sr(a, le, t)),
              e.forEach((t) => Sr(a, re, t));
          });
          const l = Array.from(a);
          return (
            0 === l.length && l.push(Object.create(null)),
            _r.has(e) && o.set(e, l),
            l
          );
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, ie[e] || {}, le.datasets[e] || {}, { type: e }, le, re];
        }
        resolveNamedOptions(t, e, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : [""];
          const r = { $shared: !0 },
            { resolver: o, subPrefixes: s } = kr(this._resolverCache, t, i);
          let a = o;
          if (
            (function (t, e) {
              const { isScriptable: n, isIndexable: i } = Ie(t);
              for (const r of e) {
                const e = n(r),
                  o = i(r),
                  s = (o || e) && t[r];
                if ((e && (st(s) || Pr(s))) || (o && B(s))) return !0;
              }
              return !1;
            })(o, e)
          ) {
            r.$shared = !1;
            a = Ve(o, (n = st(n) ? n() : n), this.createResolver(t, n, s));
          }
          for (const l of e) r[l] = a[l];
          return r;
        }
        createResolver(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [""],
            i = arguments.length > 3 ? arguments[3] : void 0;
          const { resolver: r } = kr(this._resolverCache, t, n);
          return W(e) ? Ve(r, e, void 0, i) : r;
        }
      }
      function kr(t, e, n) {
        let i = t.get(e);
        i || ((i = new Map()), t.set(e, i));
        const r = n.join();
        let o = i.get(r);
        if (!o) {
          (o = {
            resolver: Fe(e, n),
            subPrefixes: n.filter((t) => !t.toLowerCase().includes("hover")),
          }),
            i.set(r, o);
        }
        return o;
      }
      const Pr = (t) =>
        W(t) && Object.getOwnPropertyNames(t).some((e) => st(t[e]));
      const Cr = ["top", "bottom", "left", "right", "chartArea"];
      function Er(t, e) {
        return (
          "top" === t || "bottom" === t || (-1 === Cr.indexOf(t) && "x" === e)
        );
      }
      function Tr(t, e) {
        return function (n, i) {
          return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
        };
      }
      function Or(t) {
        const e = t.chart,
          n = e.options.animation;
        e.notifyPlugins("afterRender"), X(n && n.onComplete, [t], e);
      }
      function Dr(t) {
        const e = t.chart,
          n = e.options.animation;
        X(n && n.onProgress, [t], e);
      }
      function Rr(t) {
        return (
          nn() && "string" === typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const Lr = {},
        Fr = (t) => {
          const e = Rr(t);
          return Object.values(Lr)
            .filter((t) => t.canvas === e)
            .pop();
        };
      function Vr(t, e, n) {
        const i = Object.keys(t);
        for (const r of i) {
          const i = +r;
          if (i >= e) {
            const o = t[r];
            delete t[r], (n > 0 || i > e) && (t[i + n] = o);
          }
        }
      }
      class Ir {
        static register() {
          cr.add(...arguments), jr();
        }
        static unregister() {
          cr.remove(...arguments), jr();
        }
        constructor(t, e) {
          const n = (this.config = new Ar(e)),
            i = Rr(t),
            r = Fr(i);
          if (r)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                r.id +
                "' must be destroyed before the canvas with ID '" +
                r.canvas.id +
                "' can be reused."
            );
          const o = n.createResolver(n.chartOptionScopes(), this.getContext());
          (this.platform = new (n.platform ||
            (function (t) {
              return !nn() ||
                ("undefined" !== typeof OffscreenCanvas &&
                  t instanceof OffscreenCanvas)
                ? Li
                : Ki;
            })(i))()),
            this.platform.updateConfig(n);
          const s = this.platform.acquireContext(i, o.aspectRatio),
            a = s && s.canvas,
            l = a && a.height,
            c = a && a.width;
          (this.id = z()),
            (this.ctx = s),
            (this.canvas = a),
            (this.width = c),
            (this.height = l),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new ur()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let n;
              return function () {
                for (
                  var i = arguments.length, r = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  e
                    ? (clearTimeout(n), (n = setTimeout(t, e, r)))
                    : t.apply(this, r),
                  e
                );
              };
            })((t) => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (Lr[this.id] = this),
            s && a
              ? (On.listen(this, "complete", Or),
                On.listen(this, "progress", Dr),
                this._initialize(),
                this.attached && this.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: n,
            height: i,
            _aspectRatio: r,
          } = this;
          return N(t) ? (e && r ? r : i ? n / i : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        get registry() {
          return cr;
        }
        _initialize() {
          return (
            this.notifyPlugins("beforeInit"),
            this.options.responsive
              ? this.resize()
              : dn(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins("afterInit"),
            this
          );
        }
        clear() {
          return de(this.canvas, this.ctx), this;
        }
        stop() {
          return On.stop(this), this;
        }
        resize(t, e) {
          On.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const n = this.options,
            i = this.canvas,
            r = n.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(i, t, e, r),
            s = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? "resize" : "attach";
          (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            dn(this, s, !0) &&
              (this.notifyPlugins("resize", { size: o }),
              X(n.onResize, [this, o], this),
              this.attached && this._doResize(a) && this.render());
        }
        ensureScalesHaveIDs() {
          $(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            n = this.scales,
            i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
          let r = [];
          e &&
            (r = r.concat(
              Object.keys(e).map((t) => {
                const n = e[t],
                  i = mr(t, n),
                  r = "r" === i,
                  o = "x" === i;
                return {
                  options: n,
                  dposition: r ? "chartArea" : o ? "bottom" : "left",
                  dtype: r ? "radialLinear" : o ? "category" : "linear",
                };
              })
            )),
            $(r, (e) => {
              const r = e.options,
                o = r.id,
                s = mr(o, r),
                a = Y(r.type, e.dtype);
              (void 0 !== r.position &&
                Er(r.position, s) === Er(e.dposition)) ||
                (r.position = e.dposition),
                (i[o] = !0);
              let l = null;
              if (o in n && n[o].type === a) l = n[o];
              else {
                (l = new (cr.getScale(a))({
                  id: o,
                  type: a,
                  ctx: this.ctx,
                  chart: this,
                })),
                  (n[l.id] = l);
              }
              l.init(r, t);
            }),
            $(i, (t, e) => {
              t || delete n[e];
            }),
            $(n, (t) => {
              Di.configure(this, t, t.options), Di.addBox(this, t);
            });
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            n = t.length;
          if ((t.sort((t, e) => t.index - e.index), n > e)) {
            for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
            t.splice(e, n - e);
          }
          this._sortedMetasets = t.slice(0).sort(Tr("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          t.length > e.length && delete this._stacks,
            t.forEach((t, n) => {
              0 === e.filter((e) => e === t._dataset).length &&
                this._destroyDatasetMeta(n);
            });
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let n, i;
          for (
            this._removeUnreferencedMetasets(), n = 0, i = e.length;
            n < i;
            n++
          ) {
            const i = e[n];
            let r = this.getDatasetMeta(n);
            const o = i.type || this.config.type;
            if (
              (r.type &&
                r.type !== o &&
                (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
              (r.type = o),
              (r.indexAxis = i.indexAxis || fr(o, this.options)),
              (r.order = i.order || 0),
              (r.index = n),
              (r.label = "" + i.label),
              (r.visible = this.isDatasetVisible(n)),
              r.controller)
            )
              r.controller.updateIndex(n), r.controller.linkScales();
            else {
              const e = cr.getController(o),
                { datasetElementType: i, dataElementType: s } = le.datasets[o];
              Object.assign(e, {
                dataElementType: cr.getElement(s),
                datasetElementType: i && cr.getElement(i),
              }),
                (r.controller = new e(this, n)),
                t.push(r.controller);
            }
          }
          return this._updateMetasets(), t;
        }
        _resetElements() {
          $(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
          const e = this.config;
          e.update();
          const n = (this._options = e.createResolver(
              e.chartOptionScopes(),
              this.getContext()
            )),
            i = (this._animationsDisabled = !n.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 ===
              this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
          )
            return;
          const r = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let o = 0;
          for (let l = 0, c = this.data.datasets.length; l < c; l++) {
            const { controller: t } = this.getDatasetMeta(l),
              e = !i && -1 === r.indexOf(t);
            t.buildOrUpdateElements(e), (o = Math.max(+t.getMaxOverflow(), o));
          }
          (o = this._minPadding = n.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            i ||
              $(r, (t) => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins("afterUpdate", { mode: t }),
            this._layers.sort(Tr("z", "_idx"));
          const { _active: s, _lastEvent: a } = this;
          a
            ? this._eventHandler(a, !0)
            : s.length && this._updateHoverStyles(s, s, !0),
            this.render();
        }
        _updateScales() {
          $(this.scales, (t) => {
            Di.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            n = new Set(t.events);
          (at(e, n) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: n, start: i, count: r } of e) {
            Vr(t, i, "_removeElements" === n ? -r : r);
          }
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            n = (e) =>
              new Set(
                t
                  .filter((t) => t[0] === e)
                  .map((t, e) => e + "," + t.splice(1).join(","))
              ),
            i = n(0);
          for (let r = 1; r < e; r++) if (!at(i, n(r))) return;
          return Array.from(i)
            .map((t) => t.split(","))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
            return;
          Di.update(this, this.width, this.height, t);
          const e = this.chartArea,
            n = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            $(
              this.boxes,
              (t) => {
                (n && "chartArea" === t.position) ||
                  (t.configure && t.configure(),
                  this._layers.push(...t._layers()));
              },
              this
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
          if (
            !1 !==
            this.notifyPlugins("beforeDatasetsUpdate", {
              mode: t,
              cancelable: !0,
            })
          ) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, n = this.data.datasets.length; e < n; ++e)
              this._updateDataset(e, st(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins("afterDatasetsUpdate", { mode: t });
          }
        }
        _updateDataset(t, e) {
          const n = this.getDatasetMeta(t),
            i = { meta: n, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", i) &&
            (n.controller._update(e),
            (i.cancelable = !1),
            this.notifyPlugins("afterDatasetUpdate", i));
        }
        render() {
          !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
            (On.has(this)
              ? this.attached && !On.running(this) && On.start(this)
              : (this.draw(), Or({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            (this._resizeBeforeDraw = null), this._resize(t, e);
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            n = [];
          let i, r;
          for (i = 0, r = e.length; i < r; ++i) {
            const r = e[i];
            (t && !r.visible) || n.push(r);
          }
          return n;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (
            !1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
          )
            return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
          const e = this.ctx,
            n = { meta: t, index: t.index, cancelable: !0 },
            i = En(this, t);
          !1 !== this.notifyPlugins("beforeDatasetDraw", n) &&
            (i && me(e, i),
            t.controller.draw(),
            i && ve(e),
            (n.cancelable = !1),
            this.notifyPlugins("afterDatasetDraw", n));
        }
        isPointInArea(t) {
          return ge(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, n, i) {
          const r = bi.modes[e];
          return "function" === typeof r ? r(this, t, n, i) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            n = this._metasets;
          let i = n.filter((t) => t && t._dataset === e).pop();
          return (
            i ||
              ((i = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              n.push(i)),
            i
          );
        }
        getContext() {
          return (
            this.$context ||
            (this.$context = Le(null, { chart: this, type: "chart" }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const n = this.getDatasetMeta(t);
          return "boolean" === typeof n.hidden ? !n.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, n) {
          const i = n ? "show" : "hide",
            r = this.getDatasetMeta(t),
            o = r.controller._resolveAnimations(void 0, i);
          ot(e)
            ? ((r.data[e].hidden = !n), this.update())
            : (this.setDatasetVisibility(t, n),
              o.update(r, { visible: n }),
              this.update((e) => (e.datasetIndex === t ? i : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          e && e.controller && e.controller._destroy(),
            delete this._metasets[t];
        }
        _stop() {
          let t, e;
          for (
            this.stop(), On.remove(this), t = 0, e = this.data.datasets.length;
            t < e;
            ++t
          )
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const { canvas: t, ctx: e } = this;
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              de(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            delete Lr[this.id],
            this.notifyPlugins("afterDestroy");
        }
        toBase64Image() {
          return this.canvas.toDataURL(...arguments);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            n = (n, i) => {
              e.addEventListener(this, n, i), (t[n] = i);
            },
            i = (t, e, n) => {
              (t.offsetX = e), (t.offsetY = n), this._eventHandler(t);
            };
          $(this.options.events, (t) => n(t, i));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            n = (n, i) => {
              e.addEventListener(this, n, i), (t[n] = i);
            },
            i = (n, i) => {
              t[n] && (e.removeEventListener(this, n, i), delete t[n]);
            },
            r = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let o;
          const s = () => {
            i("attach", s),
              (this.attached = !0),
              this.resize(),
              n("resize", r),
              n("detach", o);
          };
          (o = () => {
            (this.attached = !1),
              i("resize", r),
              this._stop(),
              this._resize(0, 0),
              n("attach", s);
          }),
            e.isAttached(this.canvas) ? s() : o();
        }
        unbindEvents() {
          $(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            $(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, n) {
          const i = n ? "set" : "remove";
          let r, o, s, a;
          for (
            "dataset" === e &&
              ((r = this.getDatasetMeta(t[0].datasetIndex)),
              r.controller["_" + i + "DatasetHoverStyle"]()),
              s = 0,
              a = t.length;
            s < a;
            ++s
          ) {
            o = t[s];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            n = t.map((t) => {
              let { datasetIndex: e, index: n } = t;
              const i = this.getDatasetMeta(e);
              if (!i) throw new Error("No dataset found at index " + e);
              return { datasetIndex: e, element: i.data[n], index: n };
            });
          !K(n, e) &&
            ((this._active = n),
            (this._lastEvent = null),
            this._updateHoverStyles(n, e));
        }
        notifyPlugins(t, e, n) {
          return this._plugins.notify(this, t, e, n);
        }
        isPluginEnabled(t) {
          return (
            1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
          );
        }
        _updateHoverStyles(t, e, n) {
          const i = this.options.hover,
            r = (t, e) =>
              t.filter(
                (t) =>
                  !e.some(
                    (e) =>
                      t.datasetIndex === e.datasetIndex && t.index === e.index
                  )
              ),
            o = r(e, t),
            s = n ? t : r(t, e);
          o.length && this.updateHoverStyle(o, i.mode, !1),
            s.length && i.mode && this.updateHoverStyle(s, i.mode, !0);
        }
        _eventHandler(t, e) {
          const n = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: this.isPointInArea(t),
            },
            i = (e) =>
              (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", n, i)) return;
          const r = this._handleEvent(t, e, n.inChartArea);
          return (
            (n.cancelable = !1),
            this.notifyPlugins("afterEvent", n, i),
            (r || n.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, n) {
          const { _active: i = [], options: r } = this,
            o = e,
            s = this._getActiveElements(t, i, n, o),
            a = (function (t) {
              return (
                "mouseup" === t.type ||
                "click" === t.type ||
                "contextmenu" === t.type
              );
            })(t),
            l = (function (t, e, n, i) {
              return n && "mouseout" !== t.type ? (i ? e : t) : null;
            })(t, this._lastEvent, n, a);
          n &&
            ((this._lastEvent = null),
            X(r.onHover, [t, s, this], this),
            a && X(r.onClick, [t, s, this], this));
          const c = !K(s, i);
          return (
            (c || e) && ((this._active = s), this._updateHoverStyles(s, i, e)),
            (this._lastEvent = l),
            c
          );
        }
        _getActiveElements(t, e, n, i) {
          if ("mouseout" === t.type) return [];
          if (!n) return e;
          const r = this.options.hover;
          return this.getElementsAtEventForMode(t, r.mode, r, i);
        }
      }
      function jr() {
        return $(Ir.instances, (t) => t._plugins.invalidate());
      }
      function zr(t, e, n, i) {
        const r = Ce(t.options.borderRadius, [
          "outerStart",
          "outerEnd",
          "innerStart",
          "innerEnd",
        ]);
        const o = (n - e) / 2,
          s = Math.min(o, (i * e) / 2),
          a = (t) => {
            const e = ((n - Math.min(o, t)) * i) / 2;
            return Tt(t, 0, Math.min(o, e));
          };
        return {
          outerStart: a(r.outerStart),
          outerEnd: a(r.outerEnd),
          innerStart: Tt(r.innerStart, 0, s),
          innerEnd: Tt(r.innerEnd, 0, s),
        };
      }
      function Nr(t, e, n, i) {
        return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
      }
      function Br(t, e, n, i, r, o) {
        const { x: s, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = e,
          h = Math.max(e.outerRadius + i + n - c, 0),
          d = u > 0 ? u + i + n + c : 0;
        let f = 0;
        const p = r - l;
        if (i) {
          const t = ((u > 0 ? u - i : 0) + (h > 0 ? h - i : 0)) / 2;
          f = (p - (0 !== t ? (p * t) / (t + i) : p)) / 2;
        }
        const g = (p - Math.max(0.001, p * h - n / lt) / h) / 2,
          m = l + g + f,
          v = r - g - f,
          { outerStart: y, outerEnd: b, innerStart: x, innerEnd: w } = zr(
            e,
            d,
            h,
            v - m
          ),
          _ = h - y,
          M = h - b,
          S = m + y / _,
          A = v - b / M,
          k = d + x,
          P = d + w,
          C = m + x / k,
          E = v - w / P;
        if ((t.beginPath(), o)) {
          const e = (S + A) / 2;
          if ((t.arc(s, a, h, S, e), t.arc(s, a, h, e, A), b > 0)) {
            const e = Nr(M, A, s, a);
            t.arc(e.x, e.y, b, A, v + ft);
          }
          const n = Nr(P, v, s, a);
          if ((t.lineTo(n.x, n.y), w > 0)) {
            const e = Nr(P, E, s, a);
            t.arc(e.x, e.y, w, v + ft, E + Math.PI);
          }
          const i = (v - w / d + (m + x / d)) / 2;
          if (
            (t.arc(s, a, d, v - w / d, i, !0),
            t.arc(s, a, d, i, m + x / d, !0),
            x > 0)
          ) {
            const e = Nr(k, C, s, a);
            t.arc(e.x, e.y, x, C + Math.PI, m - ft);
          }
          const r = Nr(_, m, s, a);
          if ((t.lineTo(r.x, r.y), y > 0)) {
            const e = Nr(_, S, s, a);
            t.arc(e.x, e.y, y, m - ft, S);
          }
        } else {
          t.moveTo(s, a);
          const e = Math.cos(S) * h + s,
            n = Math.sin(S) * h + a;
          t.lineTo(e, n);
          const i = Math.cos(A) * h + s,
            r = Math.sin(A) * h + a;
          t.lineTo(i, r);
        }
        t.closePath();
      }
      function Wr(t, e, n, i, r) {
        const {
            fullCircles: o,
            startAngle: s,
            circumference: a,
            options: l,
          } = e,
          {
            borderWidth: c,
            borderJoinStyle: u,
            borderDash: h,
            borderDashOffset: d,
            borderRadius: f,
          } = l,
          p = "inner" === l.borderAlign;
        if (!c) return;
        t.setLineDash(h || []),
          (t.lineDashOffset = d),
          p
            ? ((t.lineWidth = 2 * c), (t.lineJoin = u || "round"))
            : ((t.lineWidth = c), (t.lineJoin = u || "bevel"));
        let g = e.endAngle;
        if (o) {
          Br(t, e, n, i, g, r);
          for (let e = 0; e < o; ++e) t.stroke();
          isNaN(a) || (g = s + (a % ct || ct));
        }
        p &&
          (function (t, e, n) {
            const {
              startAngle: i,
              pixelMargin: r,
              x: o,
              y: s,
              outerRadius: a,
              innerRadius: l,
            } = e;
            let c = r / a;
            t.beginPath(),
              t.arc(o, s, a, i - c, n + c),
              l > r
                ? ((c = r / l), t.arc(o, s, l, n + c, i - c, !0))
                : t.arc(o, s, r, n + ft, i - ft),
              t.closePath(),
              t.clip();
          })(t, e, g),
          l.selfJoin &&
            g - s >= lt &&
            0 === f &&
            "miter" !== u &&
            (function (t, e, n) {
              const {
                  startAngle: i,
                  x: r,
                  y: o,
                  outerRadius: s,
                  innerRadius: a,
                  options: l,
                } = e,
                { borderWidth: c, borderJoinStyle: u } = l,
                h = Math.min(c / s, Ct(i - n));
              if (
                (t.beginPath(),
                t.arc(r, o, s - c / 2, i + h / 2, n - h / 2),
                a > 0)
              ) {
                const e = Math.min(c / a, Ct(i - n));
                t.arc(r, o, a + c / 2, n - e / 2, i + e / 2, !0);
              } else {
                const e = Math.min(c / 2, s * Ct(i - n));
                if ("round" === u) t.arc(r, o, e, n - lt / 2, i + lt / 2, !0);
                else if ("bevel" === u) {
                  const s = 2 * e * e,
                    a = -s * Math.cos(n + lt / 2) + r,
                    l = -s * Math.sin(n + lt / 2) + o,
                    c = s * Math.cos(i + lt / 2) + r,
                    u = s * Math.sin(i + lt / 2) + o;
                  t.lineTo(a, l), t.lineTo(c, u);
                }
              }
              t.closePath(),
                t.moveTo(0, 0),
                t.rect(0, 0, t.canvas.width, t.canvas.height),
                t.clip("evenodd");
            })(t, e, g),
          o || (Br(t, e, n, i, g, r), t.stroke());
      }
      (0, r.A)(Ir, "defaults", le),
        (0, r.A)(Ir, "instances", Lr),
        (0, r.A)(Ir, "overrides", ie),
        (0, r.A)(Ir, "registry", cr),
        (0, r.A)(Ir, "version", "4.5.1"),
        (0, r.A)(Ir, "getChart", Fr);
      class Hr extends Gi {
        constructor(t) {
          super(),
            (0, r.A)(this, "circumference", void 0),
            (0, r.A)(this, "endAngle", void 0),
            (0, r.A)(this, "fullCircles", void 0),
            (0, r.A)(this, "innerRadius", void 0),
            (0, r.A)(this, "outerRadius", void 0),
            (0, r.A)(this, "pixelMargin", void 0),
            (0, r.A)(this, "startAngle", void 0),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, n) {
          const i = this.getProps(["x", "y"], n),
            { angle: r, distance: o } = At(i, { x: t, y: e }),
            {
              startAngle: s,
              endAngle: a,
              innerRadius: l,
              outerRadius: c,
              circumference: u,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              n
            ),
            h = (this.options.spacing + this.options.borderWidth) / 2,
            d = Y(u, a - s),
            f = Et(r, s, a) && s !== a,
            p = d >= ct || f,
            g = Ot(o, l + h, c + h);
          return p && g;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: n,
              startAngle: i,
              endAngle: r,
              innerRadius: o,
              outerRadius: s,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
              t
            ),
            { offset: a, spacing: l } = this.options,
            c = (i + r) / 2,
            u = (o + s + l + a) / 2;
          return { x: e + Math.cos(c) * u, y: n + Math.sin(c) * u };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const { options: e, circumference: n } = this,
            i = (e.offset || 0) / 4,
            r = (e.spacing || 0) / 2,
            o = e.circular;
          if (
            ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = n > ct ? Math.floor(n / ct) : 0),
            0 === n || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          t.save();
          const s = (this.startAngle + this.endAngle) / 2;
          t.translate(Math.cos(s) * i, Math.sin(s) * i);
          const a = i * (1 - Math.sin(Math.min(lt, n || 0)));
          (t.fillStyle = e.backgroundColor),
            (t.strokeStyle = e.borderColor),
            (function (t, e, n, i, r) {
              const { fullCircles: o, startAngle: s, circumference: a } = e;
              let l = e.endAngle;
              if (o) {
                Br(t, e, n, i, l, r);
                for (let e = 0; e < o; ++e) t.fill();
                isNaN(a) || (l = s + (a % ct || ct));
              }
              Br(t, e, n, i, l, r), t.fill();
            })(t, this, a, r, o),
            Wr(t, this, a, r, o),
            t.restore();
        }
      }
      function Ur(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
        (t.lineCap = Y(n.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(Y(n.borderDash, e.borderDash)),
          (t.lineDashOffset = Y(n.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = Y(n.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = Y(n.borderWidth, e.borderWidth)),
          (t.strokeStyle = Y(n.borderColor, e.borderColor));
      }
      function Yr(t, e, n) {
        t.lineTo(n.x, n.y);
      }
      function qr(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const i = t.length,
          { start: r = 0, end: o = i - 1 } = n,
          { start: s, end: a } = e,
          l = Math.max(r, s),
          c = Math.min(o, a),
          u = (r < s && o < s) || (r > a && o > a);
        return {
          count: i,
          start: l,
          loop: e.loop,
          ilen: c < l && !u ? i + c - l : c - l,
        };
      }
      function Xr(t, e, n, i) {
        const { points: r, options: o } = e,
          { count: s, start: a, loop: l, ilen: c } = qr(r, n, i),
          u = (function (t) {
            return t.stepped
              ? ye
              : t.tension || "monotone" === t.cubicInterpolationMode
              ? be
              : Yr;
          })(o);
        let h,
          d,
          f,
          { move: p = !0, reverse: g } = i || {};
        for (h = 0; h <= c; ++h)
          (d = r[(a + (g ? c - h : h)) % s]),
            d.skip ||
              (p ? (t.moveTo(d.x, d.y), (p = !1)) : u(t, f, d, g, o.stepped),
              (f = d));
        return (
          l && ((d = r[(a + (g ? c : 0)) % s]), u(t, f, d, g, o.stepped)), !!l
        );
      }
      function $r(t, e, n, i) {
        const r = e.points,
          { count: o, start: s, ilen: a } = qr(r, n, i),
          { move: l = !0, reverse: c } = i || {};
        let u,
          h,
          d,
          f,
          p,
          g,
          m = 0,
          v = 0;
        const y = (t) => (s + (c ? a - t : t)) % o,
          b = () => {
            f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
          };
        for (l && ((h = r[y(0)]), t.moveTo(h.x, h.y)), u = 0; u <= a; ++u) {
          if (((h = r[y(u)]), h.skip)) continue;
          const e = h.x,
            n = h.y,
            i = 0 | e;
          i === d
            ? (n < f ? (f = n) : n > p && (p = n), (m = (v * m + e) / ++v))
            : (b(), t.lineTo(e, n), (d = i), (v = 0), (f = p = n)),
            (g = n);
        }
        b();
      }
      function Kr(t) {
        const e = t.options,
          n = e.borderDash && e.borderDash.length;
        return !t._decimated &&
          !t._loop &&
          !e.tension &&
          "monotone" !== e.cubicInterpolationMode &&
          !e.stepped &&
          !n
          ? $r
          : Xr;
      }
      (0, r.A)(Hr, "id", "arc"),
        (0, r.A)(Hr, "defaults", {
          borderAlign: "center",
          borderColor: "#fff",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
          selfJoin: !1,
        }),
        (0, r.A)(Hr, "defaultRoutes", { backgroundColor: "backgroundColor" }),
        (0, r.A)(Hr, "descriptors", {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t,
        });
      const Gr = "function" === typeof Path2D;
      function Zr(t, e, n, i) {
        Gr && !e.options.segment
          ? (function (t, e, n, i) {
              let r = e._path;
              r ||
                ((r = e._path = new Path2D()),
                e.path(r, n, i) && r.closePath()),
                Ur(t, e.options),
                t.stroke(r);
            })(t, e, n, i)
          : (function (t, e, n, i) {
              const { segments: r, options: o } = e,
                s = Kr(e);
              for (const a of r)
                Ur(t, o, a.style),
                  t.beginPath(),
                  s(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
                  t.stroke();
            })(t, e, n, i);
      }
      class Jr extends Gi {
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const n = this.options;
          if (
            (n.tension || "monotone" === n.cubicInterpolationMode) &&
            !n.stepped &&
            !this._pointsUpdated
          ) {
            const i = n.spanGaps ? this._loop : this._fullLoop;
            en(this._points, n, t, i, e), (this._pointsUpdated = !0);
          }
        }
        set points(t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const n = t.points,
                i = t.options.spanGaps,
                r = n.length;
              if (!r) return [];
              const o = !!t._loop,
                { start: s, end: a } = (function (t, e, n, i) {
                  let r = 0,
                    o = e - 1;
                  if (n && !i) for (; r < e && !t[r].skip; ) r++;
                  for (; r < e && t[r].skip; ) r++;
                  for (r %= e, n && (o += r); o > r && t[o % e].skip; ) o--;
                  return (o %= e), { start: r, end: o };
                })(n, r, o, i);
              return An(
                t,
                !0 === i
                  ? [{ start: s, end: a, loop: o }]
                  : (function (t, e, n, i) {
                      const r = t.length,
                        o = [];
                      let s,
                        a = e,
                        l = t[e];
                      for (s = e + 1; s <= n; ++s) {
                        const n = t[s % r];
                        n.skip || n.stop
                          ? l.skip ||
                            ((i = !1),
                            o.push({ start: e % r, end: (s - 1) % r, loop: i }),
                            (e = a = n.stop ? s : null))
                          : ((a = s), l.skip && (e = s)),
                          (l = n);
                      }
                      return (
                        null !== a &&
                          o.push({ start: e % r, end: a % r, loop: i }),
                        o
                      );
                    })(
                      n,
                      s,
                      a < s ? a + r : a,
                      !!t._fullLoop && 0 === s && a === r - 1
                    ),
                n,
                e
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            n = t.length;
          return n && e[t[n - 1].end];
        }
        interpolate(t, e) {
          const n = this.options,
            i = t[e],
            r = this.points,
            o = Sn(this, { property: e, start: i, end: i });
          if (!o.length) return;
          const s = [],
            a = (function (t) {
              return t.stepped
                ? mn
                : t.tension || "monotone" === t.cubicInterpolationMode
                ? vn
                : gn;
            })(n);
          let l, c;
          for (l = 0, c = o.length; l < c; ++l) {
            const { start: c, end: u } = o[l],
              h = r[c],
              d = r[u];
            if (h === d) {
              s.push(h);
              continue;
            }
            const f = a(h, d, Math.abs((i - h[e]) / (d[e] - h[e])), n.stepped);
            (f[e] = t[e]), s.push(f);
          }
          return 1 === s.length ? s[0] : s;
        }
        pathSegment(t, e, n) {
          return Kr(this)(t, this, e, n);
        }
        path(t, e, n) {
          const i = this.segments,
            r = Kr(this);
          let o = this._loop;
          (e = e || 0), (n = n || this.points.length - e);
          for (const s of i) o &= r(t, this, s, { start: e, end: e + n - 1 });
          return !!o;
        }
        draw(t, e, n, i) {
          const r = this.options || {};
          (this.points || []).length &&
            r.borderWidth &&
            (t.save(), Zr(t, this, n, i), t.restore()),
            this.animated &&
              ((this._pointsUpdated = !1), (this._path = void 0));
        }
      }
      function Qr(t, e, n, i) {
        const r = t.options,
          { [n]: o } = t.getProps([n], i);
        return Math.abs(e - o) < r.radius + r.hitRadius;
      }
      (0, r.A)(Jr, "id", "line"),
        (0, r.A)(Jr, "defaults", {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (0, r.A)(Jr, "defaultRoutes", {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }),
        (0, r.A)(Jr, "descriptors", {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t && "fill" !== t,
        });
      class to extends Gi {
        constructor(t) {
          super(),
            (0, r.A)(this, "parsed", void 0),
            (0, r.A)(this, "skip", void 0),
            (0, r.A)(this, "stop", void 0),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, n) {
          const i = this.options,
            { x: r, y: o } = this.getProps(["x", "y"], n);
          return (
            Math.pow(t - r, 2) + Math.pow(e - o, 2) <
            Math.pow(i.hitRadius + i.radius, 2)
          );
        }
        inXRange(t, e) {
          return Qr(this, t, "x", e);
        }
        inYRange(t, e) {
          return Qr(this, t, "y", e);
        }
        getCenterPoint(t) {
          const { x: e, y: n } = this.getProps(["x", "y"], t);
          return { x: e, y: n };
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          e = Math.max(e, (e && t.hoverRadius) || 0);
          return 2 * (e + ((e && t.borderWidth) || 0));
        }
        draw(t, e) {
          const n = this.options;
          this.skip ||
            n.radius < 0.1 ||
            !ge(this, e, this.size(n) / 2) ||
            ((t.strokeStyle = n.borderColor),
            (t.lineWidth = n.borderWidth),
            (t.fillStyle = n.backgroundColor),
            fe(t, n, this.x, this.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }
      function eo(t, e) {
        const { x: n, y: i, base: r, width: o, height: s } = t.getProps(
          ["x", "y", "base", "width", "height"],
          e
        );
        let a, l, c, u, h;
        return (
          t.horizontal
            ? ((h = s / 2),
              (a = Math.min(n, r)),
              (l = Math.max(n, r)),
              (c = i - h),
              (u = i + h))
            : ((h = o / 2),
              (a = n - h),
              (l = n + h),
              (c = Math.min(i, r)),
              (u = Math.max(i, r))),
          { left: a, top: c, right: l, bottom: u }
        );
      }
      function no(t, e, n, i) {
        return t ? 0 : Tt(e, n, i);
      }
      function io(t) {
        const e = eo(t),
          n = e.right - e.left,
          i = e.bottom - e.top,
          r = (function (t, e, n) {
            const i = t.options.borderWidth,
              r = t.borderSkipped,
              o = Ee(i);
            return {
              t: no(r.top, o.top, 0, n),
              r: no(r.right, o.right, 0, e),
              b: no(r.bottom, o.bottom, 0, n),
              l: no(r.left, o.left, 0, e),
            };
          })(t, n / 2, i / 2),
          o = (function (t, e, n) {
            const { enableBorderRadius: i } = t.getProps([
                "enableBorderRadius",
              ]),
              r = t.options.borderRadius,
              o = Te(r),
              s = Math.min(e, n),
              a = t.borderSkipped,
              l = i || W(r);
            return {
              topLeft: no(!l || a.top || a.left, o.topLeft, 0, s),
              topRight: no(!l || a.top || a.right, o.topRight, 0, s),
              bottomLeft: no(!l || a.bottom || a.left, o.bottomLeft, 0, s),
              bottomRight: no(!l || a.bottom || a.right, o.bottomRight, 0, s),
            };
          })(t, n / 2, i / 2);
        return {
          outer: { x: e.left, y: e.top, w: n, h: i, radius: o },
          inner: {
            x: e.left + r.l,
            y: e.top + r.t,
            w: n - r.l - r.r,
            h: i - r.t - r.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
              topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r)),
            },
          },
        };
      }
      function ro(t, e, n, i) {
        const r = null === e,
          o = null === n,
          s = t && !(r && o) && eo(t, i);
        return (
          s && (r || Ot(e, s.left, s.right)) && (o || Ot(n, s.top, s.bottom))
        );
      }
      function oo(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function so(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const i = t.x !== n.x ? -e : 0,
          r = t.y !== n.y ? -e : 0,
          o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
          s = (t.y + t.h !== n.y + n.h ? e : 0) - r;
        return {
          x: t.x + i,
          y: t.y + r,
          w: t.w + o,
          h: t.h + s,
          radius: t.radius,
        };
      }
      (0, r.A)(to, "id", "point"),
        (0, r.A)(to, "defaults", {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        }),
        (0, r.A)(to, "defaultRoutes", {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      class ao extends Gi {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: n, backgroundColor: i },
            } = this,
            { inner: r, outer: o } = io(this),
            s =
              (a = o.radius).topLeft ||
              a.topRight ||
              a.bottomLeft ||
              a.bottomRight
                ? Me
                : oo;
          var a;
          t.save(),
            (o.w === r.w && o.h === r.h) ||
              (t.beginPath(),
              s(t, so(o, e, r)),
              t.clip(),
              s(t, so(r, -e, o)),
              (t.fillStyle = n),
              t.fill("evenodd")),
            t.beginPath(),
            s(t, so(r, e)),
            (t.fillStyle = i),
            t.fill(),
            t.restore();
        }
        inRange(t, e, n) {
          return ro(this, t, e, n);
        }
        inXRange(t, e) {
          return ro(this, t, null, e);
        }
        inYRange(t, e) {
          return ro(this, null, t, e);
        }
        getCenterPoint(t) {
          const { x: e, y: n, base: i, horizontal: r } = this.getProps(
            ["x", "y", "base", "horizontal"],
            t
          );
          return { x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2 };
        }
        getRange(t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        }
      }
      (0, r.A)(ao, "id", "bar"),
        (0, r.A)(ao, "defaults", {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        }),
        (0, r.A)(ao, "defaultRoutes", {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      function lo(t, e, n, i) {
        if (i) return;
        let r = e[t],
          o = n[t];
        return (
          "angle" === t && ((r = Ct(r)), (o = Ct(o))),
          { property: t, start: r, end: o }
        );
      }
      function co(t, e, n) {
        for (; e > t; e--) {
          const t = n[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break;
        }
        return e;
      }
      function uo(t, e, n, i) {
        return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
      }
      function ho(t, e) {
        let n = [],
          i = !1;
        return (
          B(t)
            ? ((i = !0), (n = t))
            : (n = (function (t, e) {
                const { x: n = null, y: i = null } = t || {},
                  r = e.points,
                  o = [];
                return (
                  e.segments.forEach((t) => {
                    let { start: e, end: s } = t;
                    s = co(e, s, r);
                    const a = r[e],
                      l = r[s];
                    null !== i
                      ? (o.push({ x: a.x, y: i }), o.push({ x: l.x, y: i }))
                      : null !== n &&
                        (o.push({ x: n, y: a.y }), o.push({ x: n, y: l.y }));
                  }),
                  o
                );
              })(t, e)),
          n.length
            ? new Jr({
                points: n,
                options: { tension: 0 },
                _loop: i,
                _fullLoop: i,
              })
            : null
        );
      }
      function fo(t) {
        return t && !1 !== t.fill;
      }
      function po(t, e, n) {
        let i = t[e].fill;
        const r = [e];
        let o;
        if (!n) return i;
        for (; !1 !== i && -1 === r.indexOf(i); ) {
          if (!H(i)) return i;
          if (((o = t[i]), !o)) return !1;
          if (o.visible) return i;
          r.push(i), (i = o.fill);
        }
        return !1;
      }
      function go(t, e, n) {
        const i = (function (t) {
          const e = t.options,
            n = e.fill;
          let i = Y(n && n.target, n);
          void 0 === i && (i = !!e.backgroundColor);
          if (!1 === i || null === i) return !1;
          if (!0 === i) return "origin";
          return i;
        })(t);
        if (W(i)) return !isNaN(i.value) && i;
        let r = parseFloat(i);
        return H(r) && Math.floor(r) === r
          ? (function (t, e, n, i) {
              ("-" !== t && "+" !== t) || (n = e + n);
              if (n === e || n < 0 || n >= i) return !1;
              return n;
            })(i[0], e, r, n)
          : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
      }
      function mo(t, e, n) {
        const i = [];
        for (let r = 0; r < n.length; r++) {
          const o = n[r],
            { first: s, last: a, point: l } = vo(o, e, "x");
          if (!(!l || (s && a)))
            if (s) i.unshift(l);
            else if ((t.push(l), !a)) break;
        }
        t.push(...i);
      }
      function vo(t, e, n) {
        const i = t.interpolate(e, n);
        if (!i) return {};
        const r = i[n],
          o = t.segments,
          s = t.points;
        let a = !1,
          l = !1;
        for (let c = 0; c < o.length; c++) {
          const t = o[c],
            e = s[t.start][n],
            i = s[t.end][n];
          if (Ot(r, e, i)) {
            (a = r === e), (l = r === i);
            break;
          }
        }
        return { first: a, last: l, point: i };
      }
      class yo {
        constructor(t) {
          (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
        }
        pathSegment(t, e, n) {
          const { x: i, y: r, radius: o } = this;
          return (
            (e = e || { start: 0, end: ct }),
            t.arc(i, r, o, e.end, e.start, !0),
            !n.bounds
          );
        }
        interpolate(t) {
          const { x: e, y: n, radius: i } = this,
            r = t.angle;
          return { x: e + Math.cos(r) * i, y: n + Math.sin(r) * i, angle: r };
        }
      }
      function bo(t) {
        const { chart: e, fill: n, line: i } = t;
        if (H(n))
          return (function (t, e) {
            const n = t.getDatasetMeta(e),
              i = n && t.isDatasetVisible(e);
            return i ? n.dataset : null;
          })(e, n);
        if ("stack" === n)
          return (function (t) {
            const { scale: e, index: n, line: i } = t,
              r = [],
              o = i.segments,
              s = i.points,
              a = (function (t, e) {
                const n = [],
                  i = t.getMatchingVisibleMetas("line");
                for (let r = 0; r < i.length; r++) {
                  const t = i[r];
                  if (t.index === e) break;
                  t.hidden || n.unshift(t.dataset);
                }
                return n;
              })(e, n);
            a.push(ho({ x: null, y: e.bottom }, i));
            for (let l = 0; l < o.length; l++) {
              const t = o[l];
              for (let e = t.start; e <= t.end; e++) mo(r, s[e], a);
            }
            return new Jr({ points: r, options: {} });
          })(t);
        if ("shape" === n) return !0;
        const r = (function (t) {
          const e = t.scale || {};
          if (e.getPointPositionForValue)
            return (function (t) {
              const { scale: e, fill: n } = t,
                i = e.options,
                r = e.getLabels().length,
                o = i.reverse ? e.max : e.min,
                s = (function (t, e, n) {
                  let i;
                  return (
                    (i =
                      "start" === t
                        ? n
                        : "end" === t
                        ? e.options.reverse
                          ? e.min
                          : e.max
                        : W(t)
                        ? t.value
                        : e.getBaseValue()),
                    i
                  );
                })(n, e, o),
                a = [];
              if (i.grid.circular) {
                const t = e.getPointPositionForValue(0, o);
                return new yo({
                  x: t.x,
                  y: t.y,
                  radius: e.getDistanceFromCenterForValue(s),
                });
              }
              for (let l = 0; l < r; ++l)
                a.push(e.getPointPositionForValue(l, s));
              return a;
            })(t);
          return (function (t) {
            const { scale: e = {}, fill: n } = t,
              i = (function (t, e) {
                let n = null;
                return (
                  "start" === t
                    ? (n = e.bottom)
                    : "end" === t
                    ? (n = e.top)
                    : W(t)
                    ? (n = e.getPixelForValue(t.value))
                    : e.getBasePixel && (n = e.getBasePixel()),
                  n
                );
              })(n, e);
            if (H(i)) {
              const t = e.isHorizontal();
              return { x: t ? i : null, y: t ? null : i };
            }
            return null;
          })(t);
        })(t);
        return r instanceof yo ? r : ho(r, i);
      }
      function xo(t, e, n) {
        const i = bo(e),
          { chart: r, index: o, line: s, scale: a, axis: l } = e,
          c = s.options,
          u = c.fill,
          h = c.backgroundColor,
          { above: d = h, below: f = h } = u || {},
          p = r.getDatasetMeta(o),
          g = En(r, p);
        i &&
          s.points.length &&
          (me(t, n),
          (function (t, e) {
            const {
                line: n,
                target: i,
                above: r,
                below: o,
                area: s,
                scale: a,
                clip: l,
              } = e,
              c = n._loop ? "angle" : e.axis;
            t.save();
            let u = o;
            o !== r &&
              ("x" === c
                ? (wo(t, i, s.top),
                  Mo(t, {
                    line: n,
                    target: i,
                    color: r,
                    scale: a,
                    property: c,
                    clip: l,
                  }),
                  t.restore(),
                  t.save(),
                  wo(t, i, s.bottom))
                : "y" === c &&
                  (_o(t, i, s.left),
                  Mo(t, {
                    line: n,
                    target: i,
                    color: o,
                    scale: a,
                    property: c,
                    clip: l,
                  }),
                  t.restore(),
                  t.save(),
                  _o(t, i, s.right),
                  (u = r)));
            Mo(t, {
              line: n,
              target: i,
              color: u,
              scale: a,
              property: c,
              clip: l,
            }),
              t.restore();
          })(t, {
            line: s,
            target: i,
            above: d,
            below: f,
            area: n,
            scale: a,
            axis: l,
            clip: g,
          }),
          ve(t));
      }
      function wo(t, e, n) {
        const { segments: i, points: r } = e;
        let o = !0,
          s = !1;
        t.beginPath();
        for (const a of i) {
          const { start: i, end: l } = a,
            c = r[i],
            u = r[co(i, l, r)];
          o
            ? (t.moveTo(c.x, c.y), (o = !1))
            : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
            (s = !!e.pathSegment(t, a, { move: s })),
            s ? t.closePath() : t.lineTo(u.x, n);
        }
        t.lineTo(e.first().x, n), t.closePath(), t.clip();
      }
      function _o(t, e, n) {
        const { segments: i, points: r } = e;
        let o = !0,
          s = !1;
        t.beginPath();
        for (const a of i) {
          const { start: i, end: l } = a,
            c = r[i],
            u = r[co(i, l, r)];
          o
            ? (t.moveTo(c.x, c.y), (o = !1))
            : (t.lineTo(n, c.y), t.lineTo(c.x, c.y)),
            (s = !!e.pathSegment(t, a, { move: s })),
            s ? t.closePath() : t.lineTo(n, u.y);
        }
        t.lineTo(n, e.first().y), t.closePath(), t.clip();
      }
      function Mo(t, e) {
        const {
            line: n,
            target: i,
            property: r,
            color: o,
            scale: s,
            clip: a,
          } = e,
          l = (function (t, e, n) {
            const i = t.segments,
              r = t.points,
              o = e.points,
              s = [];
            for (const a of i) {
              let { start: t, end: i } = a;
              i = co(t, i, r);
              const l = lo(n, r[t], r[i], a.loop);
              if (!e.segments) {
                s.push({ source: a, target: l, start: r[t], end: r[i] });
                continue;
              }
              const c = Sn(e, l);
              for (const e of c) {
                const t = lo(n, o[e.start], o[e.end], e.loop),
                  i = Mn(a, r, t);
                for (const r of i)
                  s.push({
                    source: r,
                    target: e,
                    start: { [n]: uo(l, t, "start", Math.max) },
                    end: { [n]: uo(l, t, "end", Math.min) },
                  });
              }
            }
            return s;
          })(n, i, r);
        for (const { source: c, target: u, start: h, end: d } of l) {
          const { style: { backgroundColor: e = o } = {} } = c,
            l = !0 !== i;
          t.save(),
            (t.fillStyle = e),
            So(t, s, a, l && lo(r, h, d)),
            t.beginPath();
          const f = !!n.pathSegment(t, c);
          let p;
          if (l) {
            f ? t.closePath() : Ao(t, i, d, r);
            const e = !!i.pathSegment(t, u, { move: f, reverse: !0 });
            (p = f && e), p || Ao(t, i, h, r);
          }
          t.closePath(), t.fill(p ? "evenodd" : "nonzero"), t.restore();
        }
      }
      function So(t, e, n, i) {
        const r = e.chart.chartArea,
          { property: o, start: s, end: a } = i || {};
        if ("x" === o || "y" === o) {
          let e, i, l, c;
          "x" === o
            ? ((e = s), (i = r.top), (l = a), (c = r.bottom))
            : ((e = r.left), (i = s), (l = r.right), (c = a)),
            t.beginPath(),
            n &&
              ((e = Math.max(e, n.left)),
              (l = Math.min(l, n.right)),
              (i = Math.max(i, n.top)),
              (c = Math.min(c, n.bottom))),
            t.rect(e, i, l - e, c - i),
            t.clip();
        }
      }
      function Ao(t, e, n, i) {
        const r = e.interpolate(n, i);
        r && t.lineTo(r.x, r.y);
      }
      var ko = {
        id: "filler",
        afterDatasetsUpdate(t, e, n) {
          const i = (t.data.datasets || []).length,
            r = [];
          let o, s, a, l;
          for (s = 0; s < i; ++s)
            (o = t.getDatasetMeta(s)),
              (a = o.dataset),
              (l = null),
              a &&
                a.options &&
                a instanceof Jr &&
                (l = {
                  visible: t.isDatasetVisible(s),
                  index: s,
                  fill: go(a, s, i),
                  chart: t,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: a,
                }),
              (o.$filler = l),
              r.push(l);
          for (s = 0; s < i; ++s)
            (l = r[s]), l && !1 !== l.fill && (l.fill = po(r, s, n.propagate));
        },
        beforeDraw(t, e, n) {
          const i = "beforeDraw" === n.drawTime,
            r = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let s = r.length - 1; s >= 0; --s) {
            const e = r[s].$filler;
            e &&
              (e.line.updateControlPoints(o, e.axis),
              i && e.fill && xo(t.ctx, e, o));
          }
        },
        beforeDatasetsDraw(t, e, n) {
          if ("beforeDatasetsDraw" !== n.drawTime) return;
          const i = t.getSortedVisibleDatasetMetas();
          for (let r = i.length - 1; r >= 0; --r) {
            const e = i[r].$filler;
            fo(e) && xo(t.ctx, e, t.chartArea);
          }
        },
        beforeDatasetDraw(t, e, n) {
          const i = e.meta.$filler;
          fo(i) &&
            "beforeDatasetDraw" === n.drawTime &&
            xo(t.ctx, i, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      };
      const Po = (t, e) => {
        let { boxHeight: n = e, boxWidth: i = e } = t;
        return (
          t.usePointStyle &&
            ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
          { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
        );
      };
      class Co extends Gi {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e, n) {
          (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = n),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = X(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e);
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const n = t.labels,
            i = De(n.font),
            r = i.size,
            o = this._computeTitleHeight(),
            { boxWidth: s, itemHeight: a } = Po(n, r);
          let l, c;
          (e.font = i.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (c = this._fitRows(o, r, s, a) + 10))
              : ((c = this.maxHeight), (l = this._fitCols(o, i, s, a) + 10)),
            (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, n, i) {
          const {
              ctx: r,
              maxWidth: o,
              options: {
                labels: { padding: s },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            c = i + s;
          let u = t;
          (r.textAlign = "left"), (r.textBaseline = "middle");
          let h = -1,
            d = -c;
          return (
            this.legendItems.forEach((t, f) => {
              const p = n + e / 2 + r.measureText(t.text).width;
              (0 === f || l[l.length - 1] + p + 2 * s > o) &&
                ((u += c), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += c), h++),
                (a[f] = { left: 0, top: d, row: h, width: p, height: i }),
                (l[l.length - 1] += p + s);
            }),
            u
          );
        }
        _fitCols(t, e, n, i) {
          const {
              ctx: r,
              maxHeight: o,
              options: {
                labels: { padding: s },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            c = o - t;
          let u = s,
            h = 0,
            d = 0,
            f = 0,
            p = 0;
          return (
            this.legendItems.forEach((t, o) => {
              const { itemWidth: g, itemHeight: m } = (function (
                t,
                e,
                n,
                i,
                r
              ) {
                const o = (function (t, e, n, i) {
                    let r = t.text;
                    r &&
                      "string" !== typeof r &&
                      (r = r.reduce((t, e) => (t.length > e.length ? t : e)));
                    return e + n.size / 2 + i.measureText(r).width;
                  })(i, t, e, n),
                  s = (function (t, e, n) {
                    let i = t;
                    "string" !== typeof e.text && (i = Eo(e, n));
                    return i;
                  })(r, i, e.lineHeight);
                return { itemWidth: o, itemHeight: s };
              })(n, e, r, t, i);
              o > 0 &&
                d + m + 2 * s > c &&
                ((u += h + s),
                l.push({ width: h, height: d }),
                (f += h + s),
                p++,
                (h = d = 0)),
                (a[o] = { left: f, top: d, col: p, width: g, height: m }),
                (h = Math.max(h, g)),
                (d += m + s);
            }),
            (u += h),
            l.push({ width: h, height: d }),
            u
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: n,
                labels: { padding: i },
                rtl: r,
              },
            } = this,
            o = yn(r, this.left, this.width);
          if (this.isHorizontal()) {
            let r = 0,
              s = Bt(n, this.left + i, this.right - this.lineWidths[r]);
            for (const a of e)
              r !== a.row &&
                ((r = a.row),
                (s = Bt(n, this.left + i, this.right - this.lineWidths[r]))),
                (a.top += this.top + t + i),
                (a.left = o.leftForLtr(o.x(s), a.width)),
                (s += a.width + i);
          } else {
            let r = 0,
              s = Bt(
                n,
                this.top + t + i,
                this.bottom - this.columnSizes[r].height
              );
            for (const a of e)
              a.col !== r &&
                ((r = a.col),
                (s = Bt(
                  n,
                  this.top + t + i,
                  this.bottom - this.columnSizes[r].height
                ))),
                (a.top = s),
                (a.left += this.left + i),
                (a.left = o.leftForLtr(o.x(a.left), a.width)),
                (s += a.height + i);
          }
        }
        isHorizontal() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            me(t, this), this._draw(), ve(t);
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
            { align: r, labels: o } = t,
            s = le.color,
            a = yn(t.rtl, this.left, this.width),
            l = De(o.font),
            { padding: c } = o,
            u = l.size,
            h = u / 2;
          let d;
          this.drawTitle(),
            (i.textAlign = a.textAlign("left")),
            (i.textBaseline = "middle"),
            (i.lineWidth = 0.5),
            (i.font = l.string);
          const { boxWidth: f, boxHeight: p, itemHeight: g } = Po(o, u),
            m = this.isHorizontal(),
            v = this._computeTitleHeight();
          (d = m
            ? {
                x: Bt(r, this.left + c, this.right - n[0]),
                y: this.top + c + v,
                line: 0,
              }
            : {
                x: this.left + c,
                y: Bt(r, this.top + v + c, this.bottom - e[0].height),
                line: 0,
              }),
            bn(this.ctx, t.textDirection);
          const y = g + c;
          this.legendItems.forEach((b, x) => {
            (i.strokeStyle = b.fontColor), (i.fillStyle = b.fontColor);
            const w = i.measureText(b.text).width,
              _ = a.textAlign(b.textAlign || (b.textAlign = o.textAlign)),
              M = f + h + w;
            let S = d.x,
              A = d.y;
            a.setWidth(this.width),
              m
                ? x > 0 &&
                  S + M + c > this.right &&
                  ((A = d.y += y),
                  d.line++,
                  (S = d.x = Bt(r, this.left + c, this.right - n[d.line])))
                : x > 0 &&
                  A + y > this.bottom &&
                  ((S = d.x = S + e[d.line].width + c),
                  d.line++,
                  (A = d.y = Bt(
                    r,
                    this.top + v + c,
                    this.bottom - e[d.line].height
                  )));
            if (
              ((function (t, e, n) {
                if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
                i.save();
                const r = Y(n.lineWidth, 1);
                if (
                  ((i.fillStyle = Y(n.fillStyle, s)),
                  (i.lineCap = Y(n.lineCap, "butt")),
                  (i.lineDashOffset = Y(n.lineDashOffset, 0)),
                  (i.lineJoin = Y(n.lineJoin, "miter")),
                  (i.lineWidth = r),
                  (i.strokeStyle = Y(n.strokeStyle, s)),
                  i.setLineDash(Y(n.lineDash, [])),
                  o.usePointStyle)
                ) {
                  const s = {
                      radius: (p * Math.SQRT2) / 2,
                      pointStyle: n.pointStyle,
                      rotation: n.rotation,
                      borderWidth: r,
                    },
                    l = a.xPlus(t, f / 2);
                  pe(i, s, l, e + h, o.pointStyleWidth && f);
                } else {
                  const o = e + Math.max((u - p) / 2, 0),
                    s = a.leftForLtr(t, f),
                    l = Te(n.borderRadius);
                  i.beginPath(),
                    Object.values(l).some((t) => 0 !== t)
                      ? Me(i, { x: s, y: o, w: f, h: p, radius: l })
                      : i.rect(s, o, f, p),
                    i.fill(),
                    0 !== r && i.stroke();
                }
                i.restore();
              })(a.x(S), A, b),
              (S = ((t, e, n, i) =>
                t === (i ? "left" : "right")
                  ? n
                  : "center" === t
                  ? (e + n) / 2
                  : e)(_, S + f + h, m ? S + M : this.right, t.rtl)),
              (function (t, e, n) {
                _e(i, n.text, t, e + g / 2, l, {
                  strikethrough: n.hidden,
                  textAlign: a.textAlign(n.textAlign),
                });
              })(a.x(S), A, b),
              m)
            )
              d.x += M + c;
            else if ("string" !== typeof b.text) {
              const t = l.lineHeight;
              d.y += Eo(b, t) + c;
            } else d.y += y;
          }),
            xn(this.ctx, t.textDirection);
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            n = De(e.font),
            i = Oe(e.padding);
          if (!e.display) return;
          const r = yn(t.rtl, this.left, this.width),
            o = this.ctx,
            s = e.position,
            a = n.size / 2,
            l = i.top + a;
          let c,
            u = this.left,
            h = this.width;
          if (this.isHorizontal())
            (h = Math.max(...this.lineWidths)),
              (c = this.top + l),
              (u = Bt(t.align, u, this.right - h));
          else {
            const e = this.columnSizes.reduce(
              (t, e) => Math.max(t, e.height),
              0
            );
            c =
              l +
              Bt(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight()
              );
          }
          const d = Bt(s, u, u + h);
          (o.textAlign = r.textAlign(Nt(s))),
            (o.textBaseline = "middle"),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = n.string),
            _e(o, e.text, d, c, n);
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = De(t.font),
            n = Oe(t.padding);
          return t.display ? e.lineHeight + n.height : 0;
        }
        _getLegendItemAt(t, e) {
          let n, i, r;
          if (Ot(t, this.left, this.right) && Ot(e, this.top, this.bottom))
            for (r = this.legendHitBoxes, n = 0; n < r.length; ++n)
              if (
                ((i = r[n]),
                Ot(t, i.left, i.left + i.width) &&
                  Ot(e, i.top, i.top + i.height))
              )
                return this.legendItems[n];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              if (
                ("mousemove" === t || "mouseout" === t) &&
                (e.onHover || e.onLeave)
              )
                return !0;
              if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
              return !1;
            })(t.type, e)
          )
            return;
          const n = this._getLegendItemAt(t.x, t.y);
          if ("mousemove" === t.type || "mouseout" === t.type) {
            const o = this._hoveredItem,
              s =
                ((r = n),
                null !== (i = o) &&
                  null !== r &&
                  i.datasetIndex === r.datasetIndex &&
                  i.index === r.index);
            o && !s && X(e.onLeave, [t, o, this], this),
              (this._hoveredItem = n),
              n && !s && X(e.onHover, [t, n, this], this);
          } else n && X(e.onClick, [t, n, this], this);
          var i, r;
        }
      }
      function Eo(t, e) {
        return e * (t.text ? t.text.length : 0);
      }
      var To = {
        id: "legend",
        _element: Co,
        start(t, e, n) {
          const i = (t.legend = new Co({ ctx: t.ctx, options: n, chart: t }));
          Di.configure(t, i, n), Di.addBox(t, i);
        },
        stop(t) {
          Di.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate(t, e, n) {
          const i = t.legend;
          Di.configure(t, i, n), (i.options = n);
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, n) {
            const i = e.datasetIndex,
              r = n.chart;
            r.isDatasetVisible(i)
              ? (r.hide(i), (e.hidden = !0))
              : (r.show(i), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: n,
                    pointStyle: i,
                    textAlign: r,
                    color: o,
                    useBorderRadius: s,
                    borderRadius: a,
                  },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map((t) => {
                const l = t.controller.getStyle(n ? 0 : void 0),
                  c = Oe(l.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (c.width + c.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: i || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: r || l.textAlign,
                  borderRadius: s && (a || l.borderRadius),
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: {
            color: (t) => t.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (t) => !t.startsWith("on"),
          labels: {
            _scriptable: (t) =>
              !["generateLabels", "filter", "sort"].includes(t),
          },
        },
      };
      class Oo extends Gi {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e) {
          const n = this.options;
          if (((this.left = 0), (this.top = 0), !n.display))
            return void (this.width = this.height = this.right = this.bottom = 0);
          (this.width = this.right = t), (this.height = this.bottom = e);
          const i = B(n.text) ? n.text.length : 1;
          this._padding = Oe(n.padding);
          const r = i * De(n.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = r) : (this.width = r);
        }
        isHorizontal() {
          const t = this.options.position;
          return "top" === t || "bottom" === t;
        }
        _drawArgs(t) {
          const { top: e, left: n, bottom: i, right: r, options: o } = this,
            s = o.align;
          let a,
            l,
            c,
            u = 0;
          return (
            this.isHorizontal()
              ? ((l = Bt(s, n, r)), (c = e + t), (a = r - n))
              : ("left" === o.position
                  ? ((l = n + t), (c = Bt(s, i, e)), (u = -0.5 * lt))
                  : ((l = r - t), (c = Bt(s, e, i)), (u = 0.5 * lt)),
                (a = i - e)),
            { titleX: l, titleY: c, maxWidth: a, rotation: u }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const n = De(e.font),
            i = n.lineHeight / 2 + this._padding.top,
            { titleX: r, titleY: o, maxWidth: s, rotation: a } = this._drawArgs(
              i
            );
          _e(t, e.text, 0, 0, n, {
            color: e.color,
            maxWidth: s,
            rotation: a,
            textAlign: Nt(e.align),
            textBaseline: "middle",
            translation: [r, o],
          });
        }
      }
      var Do = {
        id: "title",
        _element: Oo,
        start(t, e, n) {
          !(function (t, e) {
            const n = new Oo({ ctx: t.ctx, options: e, chart: t });
            Di.configure(t, n, e), Di.addBox(t, n), (t.titleBlock = n);
          })(t, n);
        },
        stop(t) {
          const e = t.titleBlock;
          Di.removeBox(t, e), delete t.titleBlock;
        },
        beforeUpdate(t, e, n) {
          const i = t.titleBlock;
          Di.configure(t, i, n), (i.options = n);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      new WeakMap();
      const Ro = {
        average(t) {
          if (!t.length) return !1;
          let e,
            n,
            i = new Set(),
            r = 0,
            o = 0;
          for (e = 0, n = t.length; e < n; ++e) {
            const n = t[e].element;
            if (n && n.hasValue()) {
              const t = n.tooltipPosition();
              i.add(t.x), (r += t.y), ++o;
            }
          }
          if (0 === o || 0 === i.size) return !1;
          return { x: [...i].reduce((t, e) => t + e) / i.size, y: r / o };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let n,
            i,
            r,
            o = e.x,
            s = e.y,
            a = Number.POSITIVE_INFINITY;
          for (n = 0, i = t.length; n < i; ++n) {
            const i = t[n].element;
            if (i && i.hasValue()) {
              const t = kt(e, i.getCenterPoint());
              t < a && ((a = t), (r = i));
            }
          }
          if (r) {
            const t = r.tooltipPosition();
            (o = t.x), (s = t.y);
          }
          return { x: o, y: s };
        },
      };
      function Lo(t, e) {
        return e && (B(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function Fo(t) {
        return ("string" === typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function Vo(t, e) {
        const { element: n, datasetIndex: i, index: r } = e,
          o = t.getDatasetMeta(i).controller,
          { label: s, value: a } = o.getLabelAndValue(r);
        return {
          chart: t,
          label: s,
          parsed: o.getParsed(r),
          raw: t.data.datasets[i].data[r],
          formattedValue: a,
          dataset: o.getDataset(),
          dataIndex: r,
          datasetIndex: i,
          element: n,
        };
      }
      function Io(t, e) {
        const n = t.chart.ctx,
          { body: i, footer: r, title: o } = t,
          { boxWidth: s, boxHeight: a } = e,
          l = De(e.bodyFont),
          c = De(e.titleFont),
          u = De(e.footerFont),
          h = o.length,
          d = r.length,
          f = i.length,
          p = Oe(e.padding);
        let g = p.height,
          m = 0,
          v = i.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0
          );
        if (
          ((v += t.beforeBody.length + t.afterBody.length),
          h &&
            (g +=
              h * c.lineHeight +
              (h - 1) * e.titleSpacing +
              e.titleMarginBottom),
          v)
        ) {
          g +=
            f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
            (v - f) * l.lineHeight +
            (v - 1) * e.bodySpacing;
        }
        d &&
          (g +=
            e.footerMarginTop + d * u.lineHeight + (d - 1) * e.footerSpacing);
        let y = 0;
        const b = function (t) {
          m = Math.max(m, n.measureText(t).width + y);
        };
        return (
          n.save(),
          (n.font = c.string),
          $(t.title, b),
          (n.font = l.string),
          $(t.beforeBody.concat(t.afterBody), b),
          (y = e.displayColors ? s + 2 + e.boxPadding : 0),
          $(i, (t) => {
            $(t.before, b), $(t.lines, b), $(t.after, b);
          }),
          (y = 0),
          (n.font = u.string),
          $(t.footer, b),
          n.restore(),
          (m += p.width),
          { width: m, height: g }
        );
      }
      function jo(t, e, n, i) {
        const { x: r, width: o } = n,
          {
            width: s,
            chartArea: { left: a, right: l },
          } = t;
        let c = "center";
        return (
          "center" === i
            ? (c = r <= (a + l) / 2 ? "left" : "right")
            : r <= o / 2
            ? (c = "left")
            : r >= s - o / 2 && (c = "right"),
          (function (t, e, n, i) {
            const { x: r, width: o } = i,
              s = n.caretSize + n.caretPadding;
            return (
              ("left" === t && r + o + s > e.width) ||
              ("right" === t && r - o - s < 0) ||
              void 0
            );
          })(c, t, e, n) && (c = "center"),
          c
        );
      }
      function zo(t, e, n) {
        const i =
          n.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: n, height: i } = e;
            return n < i / 2
              ? "top"
              : n > t.height - i / 2
              ? "bottom"
              : "center";
          })(t, n);
        return { xAlign: n.xAlign || e.xAlign || jo(t, e, n, i), yAlign: i };
      }
      function No(t, e, n, i) {
        const { caretSize: r, caretPadding: o, cornerRadius: s } = t,
          { xAlign: a, yAlign: l } = n,
          c = r + o,
          { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = Te(s);
        let p = (function (t, e) {
          let { x: n, width: i } = t;
          return "right" === e ? (n -= i) : "center" === e && (n -= i / 2), n;
        })(e, a);
        const g = (function (t, e, n) {
          let { y: i, height: r } = t;
          return (
            "top" === e ? (i += n) : (i -= "bottom" === e ? r + n : r / 2), i
          );
        })(e, l, c);
        return (
          "center" === l
            ? "left" === a
              ? (p += c)
              : "right" === a && (p -= c)
            : "left" === a
            ? (p -= Math.max(u, d) + r)
            : "right" === a && (p += Math.max(h, f) + r),
          { x: Tt(p, 0, i.width - e.width), y: Tt(g, 0, i.height - e.height) }
        );
      }
      function Bo(t, e, n) {
        const i = Oe(n.padding);
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - i.right
          : t.x + i.left;
      }
      function Wo(t) {
        return Lo([], Fo(t));
      }
      function Ho(t, e) {
        const n =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t;
      }
      const Uo = {
        beforeTitle: j,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              n = e.chart.data.labels,
              i = n ? n.length : 0;
            if (this && this.options && "dataset" === this.options.mode)
              return e.dataset.label || "";
            if (e.label) return e.label;
            if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
          }
          return "";
        },
        afterTitle: j,
        beforeBody: j,
        beforeLabel: j,
        label(t) {
          if (this && this.options && "dataset" === this.options.mode)
            return t.label + ": " + t.formattedValue || t.formattedValue;
          let e = t.dataset.label || "";
          e && (e += ": ");
          const n = t.formattedValue;
          return N(n) || (e += n), e;
        },
        labelColor(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: j,
        afterBody: j,
        beforeFooter: j,
        footer: j,
        afterFooter: j,
      };
      function Yo(t, e, n, i) {
        const r = t[e].call(n, i);
        return "undefined" === typeof r ? Uo[e].call(n, i) : r;
      }
      class qo extends Gi {
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            n = this.options.setContext(this.getContext()),
            i = n.enabled && e.options.animation && n.animations,
            r = new Fn(this.chart, i);
          return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              ((t = this.chart.getContext()),
              (e = this),
              (n = this._tooltipItems),
              Le(t, { tooltip: e, tooltipItems: n, type: "tooltip" })))
          );
          var t, e, n;
        }
        getTitle(t, e) {
          const { callbacks: n } = e,
            i = Yo(n, "beforeTitle", this, t),
            r = Yo(n, "title", this, t),
            o = Yo(n, "afterTitle", this, t);
          let s = [];
          return (s = Lo(s, Fo(i))), (s = Lo(s, Fo(r))), (s = Lo(s, Fo(o))), s;
        }
        getBeforeBody(t, e) {
          return Wo(Yo(e.callbacks, "beforeBody", this, t));
        }
        getBody(t, e) {
          const { callbacks: n } = e,
            i = [];
          return (
            $(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                r = Ho(n, t);
              Lo(e.before, Fo(Yo(r, "beforeLabel", this, t))),
                Lo(e.lines, Yo(r, "label", this, t)),
                Lo(e.after, Fo(Yo(r, "afterLabel", this, t))),
                i.push(e);
            }),
            i
          );
        }
        getAfterBody(t, e) {
          return Wo(Yo(e.callbacks, "afterBody", this, t));
        }
        getFooter(t, e) {
          const { callbacks: n } = e,
            i = Yo(n, "beforeFooter", this, t),
            r = Yo(n, "footer", this, t),
            o = Yo(n, "afterFooter", this, t);
          let s = [];
          return (s = Lo(s, Fo(i))), (s = Lo(s, Fo(r))), (s = Lo(s, Fo(o))), s;
        }
        _createItems(t) {
          const e = this._active,
            n = this.chart.data,
            i = [],
            r = [],
            o = [];
          let s,
            a,
            l = [];
          for (s = 0, a = e.length; s < a; ++s) l.push(Vo(this.chart, e[s]));
          return (
            t.filter && (l = l.filter((e, i, r) => t.filter(e, i, r, n))),
            t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
            $(l, (e) => {
              const n = Ho(t.callbacks, e);
              i.push(Yo(n, "labelColor", this, e)),
                r.push(Yo(n, "labelPointStyle", this, e)),
                o.push(Yo(n, "labelTextColor", this, e));
            }),
            (this.labelColors = i),
            (this.labelPointStyles = r),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
          );
        }
        update(t, e) {
          const n = this.options.setContext(this.getContext()),
            i = this._active;
          let r,
            o = [];
          if (i.length) {
            const t = Ro[n.position].call(this, i, this._eventPosition);
            (o = this._createItems(n)),
              (this.title = this.getTitle(o, n)),
              (this.beforeBody = this.getBeforeBody(o, n)),
              (this.body = this.getBody(o, n)),
              (this.afterBody = this.getAfterBody(o, n)),
              (this.footer = this.getFooter(o, n));
            const e = (this._size = Io(this, n)),
              s = Object.assign({}, t, e),
              a = zo(this.chart, n, s),
              l = No(n, s, a, this.chart);
            (this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (r = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== this.opacity && (r = { opacity: 0 });
          (this._tooltipItems = o),
            (this.$context = void 0),
            r && this._resolveAnimations().update(this, r),
            t &&
              n.external &&
              n.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e,
              });
        }
        drawCaret(t, e, n, i) {
          const r = this.getCaretPosition(t, n, i);
          e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
        }
        getCaretPosition(t, e, n) {
          const { xAlign: i, yAlign: r } = this,
            { caretSize: o, cornerRadius: s } = n,
            { topLeft: a, topRight: l, bottomLeft: c, bottomRight: u } = Te(s),
            { x: h, y: d } = t,
            { width: f, height: p } = e;
          let g, m, v, y, b, x;
          return (
            "center" === r
              ? ((b = d + p / 2),
                "left" === i
                  ? ((g = h), (m = g - o), (y = b + o), (x = b - o))
                  : ((g = h + f), (m = g + o), (y = b - o), (x = b + o)),
                (v = g))
              : ((m =
                  "left" === i
                    ? h + Math.max(a, c) + o
                    : "right" === i
                    ? h + f - Math.max(l, u) - o
                    : this.caretX),
                "top" === r
                  ? ((y = d), (b = y - o), (g = m - o), (v = m + o))
                  : ((y = d + p), (b = y + o), (g = m + o), (v = m - o)),
                (x = y)),
            { x1: g, x2: m, x3: v, y1: y, y2: b, y3: x }
          );
        }
        drawTitle(t, e, n) {
          const i = this.title,
            r = i.length;
          let o, s, a;
          if (r) {
            const l = yn(n.rtl, this.x, this.width);
            for (
              t.x = Bo(this, n.titleAlign, n),
                e.textAlign = l.textAlign(n.titleAlign),
                e.textBaseline = "middle",
                o = De(n.titleFont),
                s = n.titleSpacing,
                e.fillStyle = n.titleColor,
                e.font = o.string,
                a = 0;
              a < r;
              ++a
            )
              e.fillText(i[a], l.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + s),
                a + 1 === r && (t.y += n.titleMarginBottom - s);
          }
        }
        _drawColorBox(t, e, n, i, r) {
          const o = this.labelColors[n],
            s = this.labelPointStyles[n],
            { boxHeight: a, boxWidth: l } = r,
            c = De(r.bodyFont),
            u = Bo(this, "left", r),
            h = i.x(u),
            d = a < c.lineHeight ? (c.lineHeight - a) / 2 : 0,
            f = e.y + d;
          if (r.usePointStyle) {
            const e = {
                radius: Math.min(l, a) / 2,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                borderWidth: 1,
              },
              n = i.leftForLtr(h, l) + l / 2,
              c = f + a / 2;
            (t.strokeStyle = r.multiKeyBackground),
              (t.fillStyle = r.multiKeyBackground),
              fe(t, e, n, c),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              fe(t, e, n, c);
          } else {
            (t.lineWidth = W(o.borderWidth)
              ? Math.max(...Object.values(o.borderWidth))
              : o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0);
            const e = i.leftForLtr(h, l),
              n = i.leftForLtr(i.xPlus(h, 1), l - 2),
              s = Te(o.borderRadius);
            Object.values(s).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = r.multiKeyBackground),
                Me(t, { x: e, y: f, w: l, h: a, radius: s }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                Me(t, { x: n, y: f + 1, w: l - 2, h: a - 2, radius: s }),
                t.fill())
              : ((t.fillStyle = r.multiKeyBackground),
                t.fillRect(e, f, l, a),
                t.strokeRect(e, f, l, a),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(n, f + 1, l - 2, a - 2));
          }
          t.fillStyle = this.labelTextColors[n];
        }
        drawBody(t, e, n) {
          const { body: i } = this,
            {
              bodySpacing: r,
              bodyAlign: o,
              displayColors: s,
              boxHeight: a,
              boxWidth: l,
              boxPadding: c,
            } = n,
            u = De(n.bodyFont);
          let h = u.lineHeight,
            d = 0;
          const f = yn(n.rtl, this.x, this.width),
            p = function (n) {
              e.fillText(n, f.x(t.x + d), t.y + h / 2), (t.y += h + r);
            },
            g = f.textAlign(o);
          let m, v, y, b, x, w, _;
          for (
            e.textAlign = o,
              e.textBaseline = "middle",
              e.font = u.string,
              t.x = Bo(this, g, n),
              e.fillStyle = n.bodyColor,
              $(this.beforeBody, p),
              d =
                s && "right" !== g
                  ? "center" === o
                    ? l / 2 + c
                    : l + 2 + c
                  : 0,
              b = 0,
              w = i.length;
            b < w;
            ++b
          ) {
            for (
              m = i[b],
                v = this.labelTextColors[b],
                e.fillStyle = v,
                $(m.before, p),
                y = m.lines,
                s &&
                  y.length &&
                  (this._drawColorBox(e, t, b, f, n),
                  (h = Math.max(u.lineHeight, a))),
                x = 0,
                _ = y.length;
              x < _;
              ++x
            )
              p(y[x]), (h = u.lineHeight);
            $(m.after, p);
          }
          (d = 0), (h = u.lineHeight), $(this.afterBody, p), (t.y -= r);
        }
        drawFooter(t, e, n) {
          const i = this.footer,
            r = i.length;
          let o, s;
          if (r) {
            const a = yn(n.rtl, this.x, this.width);
            for (
              t.x = Bo(this, n.footerAlign, n),
                t.y += n.footerMarginTop,
                e.textAlign = a.textAlign(n.footerAlign),
                e.textBaseline = "middle",
                o = De(n.footerFont),
                e.fillStyle = n.footerColor,
                e.font = o.string,
                s = 0;
              s < r;
              ++s
            )
              e.fillText(i[s], a.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + n.footerSpacing);
          }
        }
        drawBackground(t, e, n, i) {
          const { xAlign: r, yAlign: o } = this,
            { x: s, y: a } = t,
            { width: l, height: c } = n,
            { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = Te(
              i.cornerRadius
            );
          (e.fillStyle = i.backgroundColor),
            (e.strokeStyle = i.borderColor),
            (e.lineWidth = i.borderWidth),
            e.beginPath(),
            e.moveTo(s + u, a),
            "top" === o && this.drawCaret(t, e, n, i),
            e.lineTo(s + l - h, a),
            e.quadraticCurveTo(s + l, a, s + l, a + h),
            "center" === o && "right" === r && this.drawCaret(t, e, n, i),
            e.lineTo(s + l, a + c - f),
            e.quadraticCurveTo(s + l, a + c, s + l - f, a + c),
            "bottom" === o && this.drawCaret(t, e, n, i),
            e.lineTo(s + d, a + c),
            e.quadraticCurveTo(s, a + c, s, a + c - d),
            "center" === o && "left" === r && this.drawCaret(t, e, n, i),
            e.lineTo(s, a + u),
            e.quadraticCurveTo(s, a, s + u, a),
            e.closePath(),
            e.fill(),
            i.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            n = this.$animations,
            i = n && n.x,
            r = n && n.y;
          if (i || r) {
            const n = Ro[t.position].call(
              this,
              this._active,
              this._eventPosition
            );
            if (!n) return;
            const o = (this._size = Io(this, t)),
              s = Object.assign({}, n, this._size),
              a = zo(e, t, s),
              l = No(t, s, a, e);
            (i._to === l.x && r._to === l.y) ||
              ((this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = n.x),
              (this.caretY = n.y),
              this._resolveAnimations().update(this, l));
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let n = this.opacity;
          if (!n) return;
          this._updateAnimationTarget(e);
          const i = { width: this.width, height: this.height },
            r = { x: this.x, y: this.y };
          n = Math.abs(n) < 0.001 ? 0 : n;
          const o = Oe(e.padding),
            s =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            s &&
            (t.save(),
            (t.globalAlpha = n),
            this.drawBackground(r, t, i, e),
            bn(t, e.textDirection),
            (r.y += o.top),
            this.drawTitle(r, t, e),
            this.drawBody(r, t, e),
            this.drawFooter(r, t, e),
            xn(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const n = this._active,
            i = t.map((t) => {
              let { datasetIndex: e, index: n } = t;
              const i = this.chart.getDatasetMeta(e);
              if (!i) throw new Error("Cannot find a dataset at index " + e);
              return { datasetIndex: e, element: i.data[n], index: n };
            }),
            r = !K(n, i),
            o = this._positionChanged(i, e);
          (r || o) &&
            ((this._active = i),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const i = this.options,
            r = this._active || [],
            o = this._getActiveElements(t, r, e, n),
            s = this._positionChanged(o, t),
            a = e || !K(o, r) || s;
          return (
            a &&
              ((this._active = o),
              (i.enabled || i.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }),
                this.update(!0, e))),
            a
          );
        }
        _getActiveElements(t, e, n, i) {
          const r = this.options;
          if ("mouseout" === t.type) return [];
          if (!i)
            return e.filter(
              (t) =>
                this.chart.data.datasets[t.datasetIndex] &&
                void 0 !==
                  this.chart
                    .getDatasetMeta(t.datasetIndex)
                    .controller.getParsed(t.index)
            );
          const o = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
          return r.reverse && o.reverse(), o;
        }
        _positionChanged(t, e) {
          const { caretX: n, caretY: i, options: r } = this,
            o = Ro[r.position].call(this, t, e);
          return !1 !== o && (n !== o.x || i !== o.y);
        }
      }
      (0, r.A)(qo, "positioners", Ro);
      var Xo = {
        id: "tooltip",
        _element: qo,
        positioners: Ro,
        afterInit(t, e, n) {
          n && (t.tooltip = new qo({ chart: t, options: n }));
        },
        beforeUpdate(t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        reset(t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        afterDraw(t) {
          const e = t.tooltip;
          if (e && e._willRender()) {
            const n = { tooltip: e };
            if (
              !1 ===
              t.notifyPlugins(
                "beforeTooltipDraw",
                (0, i.A)((0, i.A)({}, n), {}, { cancelable: !0 })
              )
            )
              return;
            e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
          }
        },
        afterEvent(t, e) {
          if (t.tooltip) {
            const n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (t, e) => e.bodyFont.size,
          boxWidth: (t, e) => e.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: Uo,
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: (t) =>
            "filter" !== t && "itemSort" !== t && "external" !== t,
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      };
      function $o(t, e, n, i) {
        const r = t.indexOf(e);
        if (-1 === r)
          return ((t, e, n, i) => (
            "string" === typeof e
              ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
              : isNaN(e) && (n = null),
            n
          ))(t, e, n, i);
        return r !== t.lastIndexOf(e) ? n : r;
      }
      function Ko(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
      class Go extends sr {
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          const e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (const { index: n, label: i } of e)
              t[n] === i && t.splice(n, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (N(t)) return null;
          const n = this.getLabels();
          return ((t, e) => (null === t ? null : Tt(Math.round(t), 0, e)))(
            (e =
              isFinite(e) && n[e] === t
                ? e
                : $o(n, t, Y(e, t), this._addedLabels)),
            n.length - 1
          );
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: n, max: i } = this.getMinMax(!0);
          "ticks" === this.options.bounds &&
            (t || (n = 0), e || (i = this.getLabels().length - 1)),
            (this.min = n),
            (this.max = i);
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            n = this.options.offset,
            i = [];
          let r = this.getLabels();
          (r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1)),
            (this._valueRange = Math.max(r.length - (n ? 0 : 1), 1)),
            (this._startValue = this.min - (n ? 0.5 : 0));
          for (let o = t; o <= e; o++) i.push({ value: o });
          return i;
        }
        getLabelForValue(t) {
          return Ko.call(this, t);
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return (
            "number" !== typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                )
          );
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function Zo(t, e) {
        const n = [],
          {
            bounds: i,
            step: r,
            min: o,
            max: s,
            precision: a,
            count: l,
            maxTicks: c,
            maxDigits: u,
            includeBounds: h,
          } = t,
          d = r || 1,
          f = c - 1,
          { min: p, max: g } = e,
          m = !N(o),
          v = !N(s),
          y = !N(l),
          b = (g - p) / (u + 1);
        let x,
          w,
          _,
          M,
          S = bt((g - p) / f / d) * d;
        if (S < 1e-14 && !m && !v) return [{ value: p }, { value: g }];
        (M = Math.ceil(g / S) - Math.floor(p / S)),
          M > f && (S = bt((M * S) / f / d) * d),
          N(a) || ((x = Math.pow(10, a)), (S = Math.ceil(S * x) / x)),
          "ticks" === i
            ? ((w = Math.floor(p / S) * S), (_ = Math.ceil(g / S) * S))
            : ((w = p), (_ = g)),
          m &&
          v &&
          r &&
          (function (t, e) {
            const n = Math.round(t);
            return n - e <= t && n + e >= t;
          })((s - o) / r, S / 1e3)
            ? ((M = Math.round(Math.min((s - o) / S, c))),
              (S = (s - o) / M),
              (w = o),
              (_ = s))
            : y
            ? ((w = m ? o : w), (_ = v ? s : _), (M = l - 1), (S = (_ - w) / M))
            : ((M = (_ - w) / S),
              (M = yt(M, Math.round(M), S / 1e3)
                ? Math.round(M)
                : Math.ceil(M)));
        const A = Math.max(St(S), St(w));
        (x = Math.pow(10, N(a) ? A : a)),
          (w = Math.round(w * x) / x),
          (_ = Math.round(_ * x) / x);
        let k = 0;
        for (
          m &&
          (h && w !== o
            ? (n.push({ value: o }),
              w < o && k++,
              yt(Math.round((w + k * S) * x) / x, o, Jo(o, b, t)) && k++)
            : w < o && k++);
          k < M;
          ++k
        ) {
          const t = Math.round((w + k * S) * x) / x;
          if (v && t > s) break;
          n.push({ value: t });
        }
        return (
          v && h && _ !== s
            ? n.length && yt(n[n.length - 1].value, s, Jo(s, b, t))
              ? (n[n.length - 1].value = s)
              : n.push({ value: s })
            : (v && _ !== s) || n.push({ value: _ }),
          n
        );
      }
      function Jo(t, e, n) {
        let { horizontal: i, minRotation: r } = n;
        const o = _t(r),
          s = (i ? Math.sin(o) : Math.cos(o)) || 0.001,
          a = 0.75 * e * ("" + t).length;
        return Math.min(e / s, a);
      }
      (0, r.A)(Go, "id", "category"),
        (0, r.A)(Go, "defaults", { ticks: { callback: Ko } });
      class Qo extends sr {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return N(t) ||
            (("number" === typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: n } = this.getUserBounds();
          let { min: i, max: r } = this;
          const o = (t) => (i = e ? i : t),
            s = (t) => (r = n ? r : t);
          if (t) {
            const t = vt(i),
              e = vt(r);
            t < 0 && e < 0 ? s(0) : t > 0 && e > 0 && o(0);
          }
          if (i === r) {
            let e = 0 === r ? 1 : Math.abs(0.05 * r);
            s(r + e), t || o(i - e);
          }
          (this.min = i), (this.max = r);
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: n, stepSize: i } = t;
          return (
            i
              ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                e > 1e3 &&
                  (console.warn(
                    "scales."
                      .concat(this.id, ".ticks.stepSize: ")
                      .concat(i, " would result generating up to ")
                      .concat(e, " ticks. Limiting to 1000.")
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (n = n || 11)),
            n && (e = Math.min(n, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let n = this.getTickLimit();
          n = Math.max(2, n);
          const i = Zo(
            {
              maxTicks: n,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this
          );
          return (
            "ticks" === t.bounds && wt(i, this, "value"),
            t.reverse
              ? (i.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            i
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            n = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const i = (n - e) / Math.max(t.length - 1, 1) / 2;
            (e -= i), (n += i);
          }
          (this._startValue = e),
            (this._endValue = n),
            (this._valueRange = n - e);
        }
        getLabelForValue(t) {
          return te(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class ts extends Qo {
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = H(t) ? t : 0),
            (this.max = H(e) ? e : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            n = _t(this.options.ticks.minRotation),
            i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
            r = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, r.lineHeight / i));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(t) {
          return (
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
      }
      (0, r.A)(ts, "id", "linear"),
        (0, r.A)(ts, "defaults", {
          ticks: { callback: ne.formatters.numeric },
        });
      const es = (t) => Math.floor(mt(t)),
        ns = (t, e) => Math.pow(10, es(t) + e);
      function is(t) {
        return 1 === t / Math.pow(10, es(t));
      }
      function rs(t, e, n) {
        const i = Math.pow(10, n),
          r = Math.floor(t / i);
        return Math.ceil(e / i) - r;
      }
      function os(t, e) {
        let { min: n, max: i } = e;
        n = U(t.min, n);
        const r = [],
          o = es(n);
        let s = (function (t, e) {
            let n = es(e - t);
            for (; rs(t, e, n) > 10; ) n++;
            for (; rs(t, e, n) < 10; ) n--;
            return Math.min(n, es(t));
          })(n, i),
          a = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
        const l = Math.pow(10, s),
          c = o > s ? Math.pow(10, o) : 0,
          u = Math.round((n - c) * a) / a,
          h = Math.floor((n - c) / l / 10) * l * 10;
        let d = Math.floor((u - h) / Math.pow(10, s)),
          f = U(t.min, Math.round((c + h + d * Math.pow(10, s)) * a) / a);
        for (; f < i; )
          r.push({ value: f, major: is(f), significand: d }),
            d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
            d >= 20 && (s++, (d = 2), (a = s >= 0 ? 1 : a)),
            (f = Math.round((c + h + d * Math.pow(10, s)) * a) / a);
        const p = U(t.max, f);
        return r.push({ value: p, major: is(p), significand: d }), r;
      }
      class ss extends sr {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const n = Qo.prototype.parse.apply(this, [t, e]);
          if (0 !== n) return H(n) && n > 0 ? n : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = H(t) ? Math.max(0, t) : null),
            (this.max = H(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !H(this._userMin) &&
              (this.min =
                t === ns(this.min, 0) ? ns(this.min, -1) : ns(this.min, 0)),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let n = this.min,
            i = this.max;
          const r = (e) => (n = t ? n : e),
            o = (t) => (i = e ? i : t);
          n === i && (n <= 0 ? (r(1), o(10)) : (r(ns(n, -1)), o(ns(i, 1)))),
            n <= 0 && r(ns(i, -1)),
            i <= 0 && o(ns(n, 1)),
            (this.min = n),
            (this.max = i);
        }
        buildTicks() {
          const t = this.options,
            e = os({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === t.bounds && wt(e, this, "value"),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t
            ? "0"
            : te(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          super.configure(),
            (this._startValue = mt(t)),
            (this._valueRange = mt(this.max) - mt(t));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (mt(t) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      function as(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = Oe(e.backdropPadding);
          return Y(e.font && e.font.size, le.font.size) + t.height;
        }
        return 0;
      }
      function ls(t, e, n) {
        return (
          (n = B(n) ? n : [n]),
          { w: ue(t, e.string, n), h: n.length * e.lineHeight }
        );
      }
      function cs(t, e, n, i, r) {
        return t === i || t === r
          ? { start: e - n / 2, end: e + n / 2 }
          : t < i || t > r
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function us(t) {
        const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
          },
          n = Object.assign({}, e),
          i = [],
          r = [],
          o = t._pointLabels.length,
          s = t.options.pointLabels,
          a = s.centerPointLabels ? lt / o : 0;
        for (let l = 0; l < o; l++) {
          const o = s.setContext(t.getPointLabelContext(l));
          r[l] = o.padding;
          const c = t.getPointPosition(l, t.drawingArea + r[l], a),
            u = De(o.font),
            h = ls(t.ctx, u, t._pointLabels[l]);
          i[l] = h;
          const d = Ct(t.getIndexAngle(l) + a),
            f = Math.round(Mt(d));
          hs(n, e, d, cs(f, c.x, h.w, 0, 180), cs(f, c.y, h.h, 90, 270));
        }
        t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
          (t._pointLabelItems = (function (t, e, n) {
            const i = [],
              r = t._pointLabels.length,
              o = t.options,
              { centerPointLabels: s, display: a } = o.pointLabels,
              l = { extra: as(o) / 2, additionalAngle: s ? lt / r : 0 };
            let c;
            for (let u = 0; u < r; u++) {
              (l.padding = n[u]), (l.size = e[u]);
              const r = ds(t, u, l);
              i.push(r),
                "auto" === a && ((r.visible = fs(r, c)), r.visible && (c = r));
            }
            return i;
          })(t, i, r));
      }
      function hs(t, e, n, i, r) {
        const o = Math.abs(Math.sin(n)),
          s = Math.abs(Math.cos(n));
        let a = 0,
          l = 0;
        i.start < e.l
          ? ((a = (e.l - i.start) / o), (t.l = Math.min(t.l, e.l - a)))
          : i.end > e.r &&
            ((a = (i.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
          r.start < e.t
            ? ((l = (e.t - r.start) / s), (t.t = Math.min(t.t, e.t - l)))
            : r.end > e.b &&
              ((l = (r.end - e.b) / s), (t.b = Math.max(t.b, e.b + l)));
      }
      function ds(t, e, n) {
        const i = t.drawingArea,
          { extra: r, additionalAngle: o, padding: s, size: a } = n,
          l = t.getPointPosition(e, i + r + s, o),
          c = Math.round(Mt(Ct(l.angle + ft))),
          u = (function (t, e, n) {
            90 === n || 270 === n
              ? (t -= e / 2)
              : (n > 270 || n < 90) && (t -= e);
            return t;
          })(l.y, a.h, c),
          h = (function (t) {
            if (0 === t || 180 === t) return "center";
            if (t < 180) return "left";
            return "right";
          })(c),
          d = (function (t, e, n) {
            "right" === n ? (t -= e) : "center" === n && (t -= e / 2);
            return t;
          })(l.x, a.w, h);
        return {
          visible: !0,
          x: l.x,
          y: u,
          textAlign: h,
          left: d,
          top: u,
          right: d + a.w,
          bottom: u + a.h,
        };
      }
      function fs(t, e) {
        if (!e) return !0;
        const { left: n, top: i, right: r, bottom: o } = t;
        return !(
          ge({ x: n, y: i }, e) ||
          ge({ x: n, y: o }, e) ||
          ge({ x: r, y: i }, e) ||
          ge({ x: r, y: o }, e)
        );
      }
      function ps(t, e, n) {
        const { left: i, top: r, right: o, bottom: s } = n,
          { backdropColor: a } = e;
        if (!N(a)) {
          const n = Te(e.borderRadius),
            l = Oe(e.backdropPadding);
          t.fillStyle = a;
          const c = i - l.left,
            u = r - l.top,
            h = o - i + l.width,
            d = s - r + l.height;
          Object.values(n).some((t) => 0 !== t)
            ? (t.beginPath(),
              Me(t, { x: c, y: u, w: h, h: d, radius: n }),
              t.fill())
            : t.fillRect(c, u, h, d);
        }
      }
      function gs(t, e, n, i) {
        const { ctx: r } = t;
        if (n) r.arc(t.xCenter, t.yCenter, e, 0, ct);
        else {
          let n = t.getPointPosition(0, e);
          r.moveTo(n.x, n.y);
          for (let o = 1; o < i; o++)
            (n = t.getPointPosition(o, e)), r.lineTo(n.x, n.y);
        }
      }
      (0, r.A)(ss, "id", "logarithmic"),
        (0, r.A)(ss, "defaults", {
          ticks: {
            callback: ne.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      class ms extends Qo {
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = (this._padding = Oe(as(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            n = (this.height = this.maxHeight - t.height);
          (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, n) / 2));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          (this.min = H(t) && !isNaN(t) ? t : 0),
            (this.max = H(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / as(this.options));
        }
        generateTickLabels(t) {
          Qo.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const n = X(this.options.pointLabels.callback, [t, e], this);
                return n || 0 === n ? n : "";
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display
            ? us(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, n, i) {
          (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((n - i) / 2)),
            (this.drawingArea -= Math.min(
              this.drawingArea / 2,
              Math.max(t, e, n, i)
            ));
        }
        getIndexAngle(t) {
          return Ct(
            t * (ct / (this._pointLabels.length || 1)) +
              _t(this.options.startAngle || 0)
          );
        }
        getDistanceFromCenterForValue(t) {
          if (N(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (N(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const n = e[t];
            return (function (t, e, n) {
              return Le(t, { label: n, index: e, type: "pointLabel" });
            })(this.getContext(), t, n);
          }
        }
        getPointPosition(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const i = this.getIndexAngle(t) - ft + n;
          return {
            x: Math.cos(i) * e + this.xCenter,
            y: Math.sin(i) * e + this.yCenter,
            angle: i,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e)
          );
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: n,
            right: i,
            bottom: r,
          } = this._pointLabelItems[t];
          return { left: e, top: n, right: i, bottom: r };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const n = this.ctx;
            n.save(),
              n.beginPath(),
              gs(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length
              ),
              n.closePath(),
              (n.fillStyle = t),
              n.fill(),
              n.restore();
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: n, grid: i, border: r } = e,
            o = this._pointLabels.length;
          let s, a, l;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: n,
                  options: { pointLabels: i },
                } = t;
                for (let r = e - 1; r >= 0; r--) {
                  const e = t._pointLabelItems[r];
                  if (!e.visible) continue;
                  const o = i.setContext(t.getPointLabelContext(r));
                  ps(n, o, e);
                  const s = De(o.font),
                    { x: a, y: l, textAlign: c } = e;
                  _e(n, t._pointLabels[r], a, l + s.lineHeight / 2, s, {
                    color: o.color,
                    textAlign: c,
                    textBaseline: "middle",
                  });
                }
              })(this, o),
            i.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e || (0 === e && this.min < 0)) {
                  a = this.getDistanceFromCenterForValue(t.value);
                  const n = this.getContext(e),
                    s = i.setContext(n),
                    l = r.setContext(n);
                  !(function (t, e, n, i, r) {
                    const o = t.ctx,
                      s = e.circular,
                      { color: a, lineWidth: l } = e;
                    (!s && !i) ||
                      !a ||
                      !l ||
                      n < 0 ||
                      (o.save(),
                      (o.strokeStyle = a),
                      (o.lineWidth = l),
                      o.setLineDash(r.dash || []),
                      (o.lineDashOffset = r.dashOffset),
                      o.beginPath(),
                      gs(t, n, s, i),
                      o.closePath(),
                      o.stroke(),
                      o.restore());
                  })(this, s, a, o, l);
                }
              }),
            n.display)
          ) {
            for (t.save(), s = o - 1; s >= 0; s--) {
              const i = n.setContext(this.getPointLabelContext(s)),
                { color: r, lineWidth: o } = i;
              o &&
                r &&
                ((t.lineWidth = o),
                (t.strokeStyle = r),
                t.setLineDash(i.borderDash),
                (t.lineDashOffset = i.borderDashOffset),
                (a = this.getDistanceFromCenterForValue(
                  e.reverse ? this.min : this.max
                )),
                (l = this.getPointPosition(s, a)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(l.x, l.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            n = e.ticks;
          if (!n.display) return;
          const i = this.getIndexAngle(0);
          let r, o;
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(i),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            this.ticks.forEach((i, s) => {
              if (0 === s && this.min >= 0 && !e.reverse) return;
              const a = n.setContext(this.getContext(s)),
                l = De(a.font);
              if (
                ((r = this.getDistanceFromCenterForValue(this.ticks[s].value)),
                a.showLabelBackdrop)
              ) {
                (t.font = l.string),
                  (o = t.measureText(i.label).width),
                  (t.fillStyle = a.backdropColor);
                const e = Oe(a.backdropPadding);
                t.fillRect(
                  -o / 2 - e.left,
                  -r - l.size / 2 - e.top,
                  o + e.width,
                  l.size + e.height
                );
              }
              _e(t, i.label, 0, -r, l, {
                color: a.color,
                strokeColor: a.textStrokeColor,
                strokeWidth: a.textStrokeWidth,
              });
            }),
            t.restore();
        }
        drawTitle() {}
      }
      (0, r.A)(ms, "id", "radialLinear"),
        (0, r.A)(ms, "defaults", {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: ne.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (t) => t,
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (0, r.A)(ms, "defaultRoutes", {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (0, r.A)(ms, "descriptors", { angleLines: { _fallback: "grid" } });
      const vs = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        ys = Object.keys(vs);
      function bs(t, e) {
        return t - e;
      }
      function xs(t, e) {
        if (N(e)) return null;
        const n = t._adapter,
          { parser: i, round: r, isoWeekday: o } = t._parseOpts;
        let s = e;
        return (
          "function" === typeof i && (s = i(s)),
          H(s) || (s = "string" === typeof i ? n.parse(s, i) : n.parse(s)),
          null === s
            ? null
            : (r &&
                (s =
                  "week" !== r || (!xt(o) && !0 !== o)
                    ? n.startOf(s, r)
                    : n.startOf(s, "isoWeek", o)),
              +s)
        );
      }
      function ws(t, e, n, i) {
        const r = ys.length;
        for (let o = ys.indexOf(t); o < r - 1; ++o) {
          const t = vs[ys[o]],
            r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return ys[o];
        }
        return ys[r - 1];
      }
      function _s(t, e, n) {
        if (n) {
          if (n.length) {
            const { lo: i, hi: r } = Dt(n, e);
            t[n[i] >= e ? n[i] : n[r]] = !0;
          }
        } else t[e] = !0;
      }
      function Ms(t, e, n) {
        const i = [],
          r = {},
          o = e.length;
        let s, a;
        for (s = 0; s < o; ++s)
          (a = e[s]), (r[a] = s), i.push({ value: a, major: !1 });
        return 0 !== o && n
          ? (function (t, e, n, i) {
              const r = t._adapter,
                o = +r.startOf(e[0].value, i),
                s = e[e.length - 1].value;
              let a, l;
              for (a = o; a <= s; a = +r.add(a, 1, i))
                (l = n[a]), l >= 0 && (e[l].major = !0);
              return e;
            })(t, i, r, n)
          : i;
      }
      class Ss extends sr {
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = "day"),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
        }
        init(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = t.time || (t.time = {}),
            i = (this._adapter = new di(t.adapters.date));
          i.init(e),
            tt(n.displayFormats, i.formats()),
            (this._parseOpts = {
              parser: n.parser,
              round: n.round,
              isoWeekday: n.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
        }
        parse(t, e) {
          return void 0 === t ? null : xs(this, t);
        }
        beforeLayout() {
          super.beforeLayout(),
            (this._cache = { data: [], labels: [], all: [] });
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            n = t.time.unit || "day";
          let {
            min: i,
            max: r,
            minDefined: o,
            maxDefined: s,
          } = this.getUserBounds();
          function a(t) {
            o || isNaN(t.min) || (i = Math.min(i, t.min)),
              s || isNaN(t.max) || (r = Math.max(r, t.max));
          }
          (o && s) ||
            (a(this._getLabelBounds()),
            ("ticks" === t.bounds && "labels" === t.ticks.source) ||
              a(this.getMinMax(!1))),
            (i = H(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
            (r = H(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1),
            (this.min = Math.min(i, r - 1)),
            (this.max = Math.max(i + 1, r));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            n = Number.NEGATIVE_INFINITY;
          return (
            t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n }
          );
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            n = t.ticks,
            i =
              "labels" === n.source
                ? this.getLabelTimestamps()
                : this._generate();
          "ticks" === t.bounds &&
            i.length &&
            ((this.min = this._userMin || i[0]),
            (this.max = this._userMax || i[i.length - 1]));
          const r = this.min,
            o = (function (t, e, n) {
              let i = 0,
                r = t.length;
              for (; i < r && t[i] < e; ) i++;
              for (; r > i && t[r - 1] > n; ) r--;
              return i > 0 || r < t.length ? t.slice(i, r) : t;
            })(i, r, this.max);
          return (
            (this._unit =
              e.unit ||
              (n.autoSkip
                ? ws(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
                : (function (t, e, n, i, r) {
                    for (let o = ys.length - 1; o >= ys.indexOf(n); o--) {
                      const n = ys[o];
                      if (vs[n].common && t._adapter.diff(r, i, n) >= e - 1)
                        return n;
                    }
                    return ys[n ? ys.indexOf(n) : 0];
                  })(this, o.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              n.major.enabled && "year" !== this._unit
                ? (function (t) {
                    for (let e = ys.indexOf(t) + 1, n = ys.length; e < n; ++e)
                      if (vs[ys[e]].common) return ys[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(i),
            t.reverse && o.reverse(),
            Ms(this, o, this._majorUnit)
          );
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((t) => +t.value));
        }
        initOffsets() {
          let t,
            e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            i = 0,
            r = 0;
          this.options.offset &&
            n.length &&
            ((t = this.getDecimalForValue(n[0])),
            (i =
              1 === n.length ? 1 - t : (this.getDecimalForValue(n[1]) - t) / 2),
            (e = this.getDecimalForValue(n[n.length - 1])),
            (r =
              1 === n.length
                ? e
                : (e - this.getDecimalForValue(n[n.length - 2])) / 2));
          const o = n.length < 3 ? 0.5 : 0.25;
          (i = Tt(i, 0, o)),
            (r = Tt(r, 0, o)),
            (this._offsets = { start: i, end: r, factor: 1 / (i + 1 + r) });
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            n = this.max,
            i = this.options,
            r = i.time,
            o = r.unit || ws(r.minUnit, e, n, this._getLabelCapacity(e)),
            s = Y(i.ticks.stepSize, 1),
            a = "week" === o && r.isoWeekday,
            l = xt(a) || !0 === a,
            c = {};
          let u,
            h,
            d = e;
          if (
            (l && (d = +t.startOf(d, "isoWeek", a)),
            (d = +t.startOf(d, l ? "day" : o)),
            t.diff(n, e, o) > 1e5 * s)
          )
            throw new Error(
              e +
                " and " +
                n +
                " are too far apart with stepSize of " +
                s +
                " " +
                o
            );
          const f = "data" === i.ticks.source && this.getDataTimestamps();
          for (u = d, h = 0; u < n; u = +t.add(u, s, o), h++) _s(c, u, f);
          return (
            (u !== n && "ticks" !== i.bounds && 1 !== h) || _s(c, u, f),
            Object.keys(c)
              .sort(bs)
              .map((t) => +t)
          );
        }
        getLabelForValue(t) {
          const e = this._adapter,
            n = this.options.time;
          return n.tooltipFormat
            ? e.format(t, n.tooltipFormat)
            : e.format(t, n.displayFormats.datetime);
        }
        format(t, e) {
          const n = this.options.time.displayFormats,
            i = this._unit,
            r = e || n[i];
          return this._adapter.format(t, r);
        }
        _tickFormatFunction(t, e, n, i) {
          const r = this.options,
            o = r.ticks.callback;
          if (o) return X(o, [t, e, n], this);
          const s = r.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            c = a && s[a],
            u = l && s[l],
            h = n[e],
            d = l && u && h && h.major;
          return this._adapter.format(t, i || (d ? u : c));
        }
        generateTickLabels(t) {
          let e, n, i;
          for (e = 0, n = t.length; e < n; ++e)
            (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
          const e = this._offsets,
            n = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + n) * e.factor);
        }
        getValueForPixel(t) {
          const e = this._offsets,
            n = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + n * (this.max - this.min);
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            n = this.ctx.measureText(t).width,
            i = _t(this.isHorizontal() ? e.maxRotation : e.minRotation),
            r = Math.cos(i),
            o = Math.sin(i),
            s = this._resolveTickFontOptions(0).size;
          return { w: n * r + s * o, h: n * o + s * r };
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            n = e.displayFormats,
            i = n[e.unit] || n.millisecond,
            r = this._tickFormatFunction(
              t,
              0,
              Ms(this, [t], this._majorUnit),
              i
            ),
            o = this._getLabelSize(r),
            s =
              Math.floor(
                this.isHorizontal() ? this.width / o.w : this.height / o.h
              ) - 1;
          return s > 0 ? s : 1;
        }
        getDataTimestamps() {
          let t,
            e,
            n = this._cache.data || [];
          if (n.length) return n;
          const i = this.getMatchingVisibleMetas();
          if (this._normalized && i.length)
            return (this._cache.data = i[0].controller.getAllParsedValues(
              this
            ));
          for (t = 0, e = i.length; t < e; ++t)
            n = n.concat(i[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(n));
        }
        getLabelTimestamps() {
          const t = this._cache.labels || [];
          let e, n;
          if (t.length) return t;
          const i = this.getLabels();
          for (e = 0, n = i.length; e < n; ++e) t.push(xs(this, i[e]));
          return (this._cache.labels = this._normalized
            ? t
            : this.normalize(t));
        }
        normalize(t) {
          return It(t.sort(bs));
        }
      }
      function As(t, e, n) {
        let i,
          r,
          o,
          s,
          a = 0,
          l = t.length - 1;
        n
          ? (e >= t[a].pos &&
              e <= t[l].pos &&
              ({ lo: a, hi: l } = Rt(t, "pos", e)),
            ({ pos: i, time: o } = t[a]),
            ({ pos: r, time: s } = t[l]))
          : (e >= t[a].time &&
              e <= t[l].time &&
              ({ lo: a, hi: l } = Rt(t, "time", e)),
            ({ time: i, pos: o } = t[a]),
            ({ time: r, pos: s } = t[l]));
        const c = r - i;
        return c ? o + ((s - o) * (e - i)) / c : o;
      }
      (0, r.A)(Ss, "id", "time"),
        (0, r.A)(Ss, "defaults", {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
        });
      class ks extends Ss {
        constructor(t) {
          super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
          (this._minPos = As(e, this.min)),
            (this._tableRange = As(e, this.max) - this._minPos),
            super.initOffsets(t);
        }
        buildLookupTable(t) {
          const { min: e, max: n } = this,
            i = [],
            r = [];
          let o, s, a, l, c;
          for (o = 0, s = t.length; o < s; ++o)
            (l = t[o]), l >= e && l <= n && i.push(l);
          if (i.length < 2)
            return [
              { time: e, pos: 0 },
              { time: n, pos: 1 },
            ];
          for (o = 0, s = i.length; o < s; ++o)
            (c = i[o + 1]),
              (a = i[o - 1]),
              (l = i[o]),
              Math.round((c + a) / 2) !== l &&
                r.push({ time: l, pos: o / (s - 1) });
          return r;
        }
        _generate() {
          const t = this.min,
            e = this.max;
          let n = super.getDataTimestamps();
          return (
            (n.includes(t) && n.length) || n.splice(0, 0, t),
            (n.includes(e) && 1 !== n.length) || n.push(e),
            n.sort((t, e) => t - e)
          );
        }
        _getTimestampsForTable() {
          let t = this._cache.all || [];
          if (t.length) return t;
          const e = this.getDataTimestamps(),
            n = this.getLabelTimestamps();
          return (
            (t =
              e.length && n.length
                ? this.normalize(e.concat(n))
                : e.length
                ? e
                : n),
            (t = this._cache.all = t),
            t
          );
        }
        getDecimalForValue(t) {
          return (As(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
          const e = this._offsets,
            n = this.getDecimalForPixel(t) / e.factor - e.end;
          return As(this._table, n * this._tableRange + this._minPos, !0);
        }
      }
      (0, r.A)(ks, "id", "timeseries"), (0, r.A)(ks, "defaults", Ss.defaults);
    },
    7805: (t, e, n) => {
      "use strict";
      n.d(e, { DdQ: () => o, hMc: () => r });
      var i = n(6688);
      function r(t) {
        return (0, i.k5)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d:
                  "M12 6c-2.967 0-5.431 2.167-5.909 5H2v2h4.092c.479 2.832 2.942 4.998 5.909 4.998s5.43-2.166 5.909-4.998H22v-2h-4.09c-.478-2.833-2.942-5-5.91-5zm0 9.998c-2.205 0-3.999-1.794-3.999-3.999S9.795 8 12 8c2.206 0 4 1.794 4 3.999s-1.794 3.999-4 3.999z",
              },
            },
          ],
        })(t);
      }
      function o(t) {
        return (0, i.k5)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d:
                  "M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z",
              },
            },
          ],
        })(t);
      }
    },
    7870: function (t, e) {
      !(function (t) {
        "use strict";
        var e = function () {
            return (
              (e =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }),
              e.apply(this, arguments)
            );
          },
          n = (function () {
            function t(t, n, i) {
              var r = this;
              (this.endVal = n),
                (this.options = i),
                (this.version = "2.9.0"),
                (this.defaults = {
                  startVal: 0,
                  decimalPlaces: 0,
                  duration: 2,
                  useEasing: !0,
                  useGrouping: !0,
                  useIndianSeparators: !1,
                  smartEasingThreshold: 999,
                  smartEasingAmount: 333,
                  separator: ",",
                  decimal: ".",
                  prefix: "",
                  suffix: "",
                  enableScrollSpy: !1,
                  scrollSpyDelay: 200,
                  scrollSpyOnce: !1,
                }),
                (this.finalEndVal = null),
                (this.useEasing = !0),
                (this.countDown = !1),
                (this.error = ""),
                (this.startVal = 0),
                (this.paused = !0),
                (this.once = !1),
                (this.count = function (t) {
                  r.startTime || (r.startTime = t);
                  var e = t - r.startTime;
                  (r.remaining = r.duration - e),
                    r.useEasing
                      ? r.countDown
                        ? (r.frameVal =
                            r.startVal -
                            r.easingFn(e, 0, r.startVal - r.endVal, r.duration))
                        : (r.frameVal = r.easingFn(
                            e,
                            r.startVal,
                            r.endVal - r.startVal,
                            r.duration
                          ))
                      : (r.frameVal =
                          r.startVal +
                          (r.endVal - r.startVal) * (e / r.duration));
                  var n = r.countDown
                    ? r.frameVal < r.endVal
                    : r.frameVal > r.endVal;
                  (r.frameVal = n ? r.endVal : r.frameVal),
                    (r.frameVal = Number(
                      r.frameVal.toFixed(r.options.decimalPlaces)
                    )),
                    r.printValue(r.frameVal),
                    e < r.duration
                      ? (r.rAF = requestAnimationFrame(r.count))
                      : null !== r.finalEndVal
                      ? r.update(r.finalEndVal)
                      : r.options.onCompleteCallback &&
                        r.options.onCompleteCallback();
                }),
                (this.formatNumber = function (t) {
                  var e,
                    n,
                    i,
                    o,
                    s = t < 0 ? "-" : "";
                  e = Math.abs(t).toFixed(r.options.decimalPlaces);
                  var a = (e += "").split(".");
                  if (
                    ((n = a[0]),
                    (i = a.length > 1 ? r.options.decimal + a[1] : ""),
                    r.options.useGrouping)
                  ) {
                    o = "";
                    for (var l = 3, c = 0, u = 0, h = n.length; u < h; ++u)
                      r.options.useIndianSeparators &&
                        4 === u &&
                        ((l = 2), (c = 1)),
                        0 !== u && c % l == 0 && (o = r.options.separator + o),
                        c++,
                        (o = n[h - u - 1] + o);
                    n = o;
                  }
                  return (
                    r.options.numerals &&
                      r.options.numerals.length &&
                      ((n = n.replace(/[0-9]/g, function (t) {
                        return r.options.numerals[+t];
                      })),
                      (i = i.replace(/[0-9]/g, function (t) {
                        return r.options.numerals[+t];
                      }))),
                    s + r.options.prefix + n + i + r.options.suffix
                  );
                }),
                (this.easeOutExpo = function (t, e, n, i) {
                  return (
                    (n * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + e
                  );
                }),
                (this.options = e(e({}, this.defaults), i)),
                (this.formattingFn = this.options.formattingFn
                  ? this.options.formattingFn
                  : this.formatNumber),
                (this.easingFn = this.options.easingFn
                  ? this.options.easingFn
                  : this.easeOutExpo),
                (this.el =
                  "string" == typeof t ? document.getElementById(t) : t),
                (n = null == n ? this.parse(this.el.innerHTML) : n),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                (this.endVal = this.validateValue(n)),
                (this.options.decimalPlaces = Math.max(
                  this.options.decimalPlaces
                )),
                this.resetDuration(),
                (this.options.separator = String(this.options.separator)),
                (this.useEasing = this.options.useEasing),
                "" === this.options.separator &&
                  (this.options.useGrouping = !1),
                this.el
                  ? this.printValue(this.startVal)
                  : (this.error = "[CountUp] target is null or undefined"),
                "undefined" != typeof window &&
                  this.options.enableScrollSpy &&
                  (this.error
                    ? console.error(this.error, t)
                    : ((window.onScrollFns = window.onScrollFns || []),
                      window.onScrollFns.push(function () {
                        return r.handleScroll(r);
                      }),
                      (window.onscroll = function () {
                        window.onScrollFns.forEach(function (t) {
                          return t();
                        });
                      }),
                      this.handleScroll(this)));
            }
            return (
              (t.prototype.handleScroll = function (t) {
                if (t && window && !t.once) {
                  var e = window.innerHeight + window.scrollY,
                    n = t.el.getBoundingClientRect(),
                    i = n.top + window.pageYOffset,
                    r = n.top + n.height + window.pageYOffset;
                  r < e && r > window.scrollY && t.paused
                    ? ((t.paused = !1),
                      setTimeout(function () {
                        return t.start();
                      }, t.options.scrollSpyDelay),
                      t.options.scrollSpyOnce && (t.once = !0))
                    : (window.scrollY > r || i > e) && !t.paused && t.reset();
                }
              }),
              (t.prototype.determineDirectionAndSmartEasing = function () {
                var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > t;
                var e = t - this.startVal;
                if (
                  Math.abs(e) > this.options.smartEasingThreshold &&
                  this.options.useEasing
                ) {
                  this.finalEndVal = t;
                  var n = this.countDown ? 1 : -1;
                  (this.endVal = t + n * this.options.smartEasingAmount),
                    (this.duration = this.duration / 2);
                } else (this.endVal = t), (this.finalEndVal = null);
                null !== this.finalEndVal
                  ? (this.useEasing = !1)
                  : (this.useEasing = this.options.useEasing);
              }),
              (t.prototype.start = function (t) {
                this.error ||
                  (this.options.onStartCallback &&
                    this.options.onStartCallback(),
                  t && (this.options.onCompleteCallback = t),
                  this.duration > 0
                    ? (this.determineDirectionAndSmartEasing(),
                      (this.paused = !1),
                      (this.rAF = requestAnimationFrame(this.count)))
                    : this.printValue(this.endVal));
              }),
              (t.prototype.pauseResume = function () {
                this.paused
                  ? ((this.startTime = null),
                    (this.duration = this.remaining),
                    (this.startVal = this.frameVal),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : cancelAnimationFrame(this.rAF),
                  (this.paused = !this.paused);
              }),
              (t.prototype.reset = function () {
                cancelAnimationFrame(this.rAF),
                  (this.paused = !0),
                  this.resetDuration(),
                  (this.startVal = this.validateValue(this.options.startVal)),
                  (this.frameVal = this.startVal),
                  this.printValue(this.startVal);
              }),
              (t.prototype.update = function (t) {
                cancelAnimationFrame(this.rAF),
                  (this.startTime = null),
                  (this.endVal = this.validateValue(t)),
                  this.endVal !== this.frameVal &&
                    ((this.startVal = this.frameVal),
                    null == this.finalEndVal && this.resetDuration(),
                    (this.finalEndVal = null),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)));
              }),
              (t.prototype.printValue = function (t) {
                var e;
                if (this.el) {
                  var n = this.formattingFn(t);
                  (
                    null === (e = this.options.plugin) || void 0 === e
                      ? void 0
                      : e.render
                  )
                    ? this.options.plugin.render(this.el, n)
                    : "INPUT" === this.el.tagName
                    ? (this.el.value = n)
                    : "text" === this.el.tagName || "tspan" === this.el.tagName
                    ? (this.el.textContent = n)
                    : (this.el.innerHTML = n);
                }
              }),
              (t.prototype.ensureNumber = function (t) {
                return "number" == typeof t && !isNaN(t);
              }),
              (t.prototype.validateValue = function (t) {
                var e = Number(t);
                return this.ensureNumber(e)
                  ? e
                  : ((this.error = "[CountUp] invalid start or end value: ".concat(
                      t
                    )),
                    null);
              }),
              (t.prototype.resetDuration = function () {
                (this.startTime = null),
                  (this.duration = 1e3 * Number(this.options.duration)),
                  (this.remaining = this.duration);
              }),
              (t.prototype.parse = function (t) {
                var e = function (t) {
                    return t.replace(/([.,'\xa0 ])/g, "\\$1");
                  },
                  n = e(this.options.separator),
                  i = e(this.options.decimal),
                  r = t
                    .replace(new RegExp(n, "g"), "")
                    .replace(new RegExp(i, "g"), ".");
                return parseFloat(r);
              }),
              t
            );
          })();
        t.CountUp = n;
      })(e);
    },
    8011: (t, e, n) => {
      "use strict";
      var i, r;
      n.d(e, { C: () => i, b: () => r }),
        (function (t) {
          (t[(t.Entering = 0)] = "Entering"),
            (t[(t.Present = 1)] = "Present"),
            (t[(t.Exiting = 2)] = "Exiting");
        })(i || (i = {})),
        (function (t) {
          (t[(t.Hide = 0)] = "Hide"), (t[(t.Show = 1)] = "Show");
        })(r || (r = {}));
    },
    8210: (t, e, n) => {
      "use strict";
      n.d(e, { e: () => s });
      var i = n(2440),
        r = n(2316);
      function o(t, e, n) {
        const o = (0, r.a)(t, null === n || void 0 === n ? void 0 : n.in);
        return isNaN(e)
          ? (0, i.w)((null === n || void 0 === n ? void 0 : n.in) || t, NaN)
          : e
          ? (o.setDate(o.getDate() + e), o)
          : o;
      }
      function s(t, e, n) {
        return o(t, -e, n);
      }
    },
    8342: (t, e, n) => {
      "use strict";
      n.d(e, { m: () => l });
      var i = n(2316);
      function r(t) {
        const e = (0, i.a)(t),
          n = new Date(
            Date.UTC(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds()
            )
          );
        return n.setUTCFullYear(e.getFullYear()), +t - +n;
      }
      var o = n(1844),
        s = n(4524);
      function a(t, e) {
        const n = (0, i.a)(t, null === e || void 0 === e ? void 0 : e.in);
        return n.setHours(0, 0, 0, 0), n;
      }
      function l(t, e, n) {
        const [i, l] = (0, o.x)(
            null === n || void 0 === n ? void 0 : n.in,
            t,
            e
          ),
          c = a(i),
          u = a(l),
          h = +c - r(c),
          d = +u - r(u);
        return Math.round((h - d) / s.w4);
      }
    },
    8916: (t, e, n) => {
      "use strict";
      n.d(e, { u: () => i });
      var i = function (t, e) {
        return t.depth - e.depth;
      };
    },
    9495: (t, e, n) => {
      "use strict";
      function i(t) {
        var e,
          n,
          i,
          o = 2;
        for (
          "undefined" != typeof Symbol &&
          ((n = Symbol.asyncIterator), (i = Symbol.iterator));
          o--;

        ) {
          if (n && null != (e = t[n])) return e.call(t);
          if (i && null != (e = t[i])) return new r(e.call(t));
          (n = "@@asyncIterator"), (i = "@@iterator");
        }
        throw new TypeError("Object is not async iterable");
      }
      function r(t) {
        function e(t) {
          if (Object(t) !== t)
            return Promise.reject(new TypeError(t + " is not an object."));
          var e = t.done;
          return Promise.resolve(t.value).then(function (t) {
            return { value: t, done: e };
          });
        }
        return (
          (r = function (t) {
            (this.s = t), (this.n = t.next);
          }),
          (r.prototype = {
            s: null,
            n: null,
            next: function () {
              return e(this.n.apply(this.s, arguments));
            },
            return: function (t) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.resolve({ value: t, done: !0 })
                : e(n.apply(this.s, arguments));
            },
            throw: function (t) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.reject(t)
                : e(n.apply(this.s, arguments));
            },
          }),
          new r(t)
        );
      }
      n.d(e, { A: () => i });
    },
  },
]);
//# sourceMappingURL=756.09a1ba88.chunk.js.map
