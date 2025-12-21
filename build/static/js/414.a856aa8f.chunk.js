"use strict";
(self.webpackChunkLaxman_portfolio =
  self.webpackChunkLaxman_portfolio || []).push([
  [414],
  {
    414: (s, a, e) => {
      e.r(a), e.d(a, { default: () => o });
      var l = e(5043),
        t = e(1688),
        c = e(579);
      function i(s) {
        return (0, c.jsx)("div", {
          className: "logo_wrapper",
          children: (0, c.jsxs)("div", {
            className: "loading",
            children: [
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
              (0, c.jsx)("div", { className: "ball" }),
            ],
          }),
        });
      }
      const o = function (s) {
        const [a, e] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            const s = setTimeout(() => e(!0), 3500);
            return () => clearTimeout(s);
          }, []),
          a
            ? (0, c.jsx)(t.rd, { to: "/home" })
            : (0, c.jsx)(i, { theme: s.theme })
        );
      };
    },
  },
]);
//# sourceMappingURL=414.a856aa8f.chunk.js.map
