"use strict";
(self.webpackChunkLaxman_portfolio =
  self.webpackChunkLaxman_portfolio || []).push([
  [710],
  {
    162: (t, e, r) => {
      r.d(e, { XM6: () => l });
      var n = r(6688);
      function l(t) {
        return (0, n.k5)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24", fill: "none" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
                fill: "currentColor",
              },
            },
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",
                fill: "currentColor",
              },
            },
          ],
        })(t);
      }
    },
    3751: (t, e, r) => {
      r.d(e, { Zt5: () => l });
      var n = r(6688);
      function l(t) {
        return (0, n.k5)({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                d:
                  "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
              },
            },
          ],
        })(t);
      }
    },
    6688: (t, e, r) => {
      r.d(e, { k5: () => u });
      var n = r(5043),
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = n.createContext && n.createContext(l),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var l in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
                return t;
              }),
            a.apply(this, arguments)
          );
        },
        i = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (n = Object.getOwnPropertySymbols(t); l < n.length; l++)
              e.indexOf(n[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[l]) &&
                (r[n[l]] = t[n[l]]);
          }
          return r;
        };
      function c(t) {
        return (
          t &&
          t.map(function (t, e) {
            return n.createElement(t.tag, a({ key: e }, t.attr), c(t.child));
          })
        );
      }
      function u(t) {
        return function (e) {
          return n.createElement(s, a({ attr: a({}, t.attr) }, e), c(t.child));
        };
      }
      function s(t) {
        var e = function (e) {
          var r,
            l = t.attr,
            o = t.size,
            c = t.title,
            u = i(t, ["attr", "size", "title"]),
            s = o || e.size || "1em";
          return (
            e.className && (r = e.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                l,
                u,
                {
                  className: r,
                  style: a(a({ color: t.color || e.color }, e.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && n.createElement("title", null, c),
              t.children
            )
          );
        };
        return void 0 !== o
          ? n.createElement(o.Consumer, null, function (t) {
              return e(t);
            })
          : e(l);
      }
    },
  },
]);
//# sourceMappingURL=710.87cda09d.chunk.js.map
