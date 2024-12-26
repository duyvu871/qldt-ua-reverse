"use strict";
(self.webpackChunkweb_main = self.webpackChunkweb_main || []).push([
    [3111],
    {
        93111: (Mt, M, l) => {
            l.r(M),
                l.d(M, {
                    DkMonhocModule: () => pt,
                });
            var g = l(88692),
                d = l(20092),
                V = l(50144),
                y = l(90830),
                b = l(87030),
                k = l(4660),
                S = l(68536),
                D = l(47111),
                E = l(35732),
                h = l(83365),
                f = l(24393),
                H = l(41817),
                x = l(78463),
                O = l(86409),
                e = l(27464),
                T = l(75728),
                L = l(48292),
                K = l(8396),
                N = l(23971),
                F = l(9998),
                U = l(4292);

            function A(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "ng-option", 14),
                            e.ɵɵtext(1),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = r.$implicit;
                    e.ɵɵproperty("value", t.gia_tri),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.mieu_ta, " ");
                }
            }

            function P(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span"),
                            e.ɵɵtext(1),
                            e.ɵɵelementEnd(),
                            e.ɵɵelement(2, "br"),
                            e.ɵɵelementStart(3, "small", 17),
                            e.ɵɵtext(4),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = r.item,
                        i = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(t.ten),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate2("", i.msg.MA1, ": ", t.ma, "");
                }
            }
            const I = function (o) {
                return {
                    "d-none": o,
                };
            };

            function G(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "ng-select", 15),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.selected = n));
                        })("change", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.change());
                        }),
                        e.ɵɵtemplate(2, P, 5, 3, "ng-template", 16),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵpropertyInterpolate1("placeholder", "--", t.msg.CHON, "--"),
                        e.ɵɵproperty("items", t.cbdata)("ngModel", t.selected)(
                            "clearable",
                            !1
                        )("virtualScroll", !0)("searchFn", t.customSearchFn)(
                            "trackByFn",
                            t.trackByFn
                        )("ngClass", e.ɵɵpureFunction1(8, I, t.HideCombo));
                }
            }

            function B(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span"),
                            e.ɵɵtext(1),
                            e.ɵɵelementEnd(),
                            e.ɵɵelement(2, "br"),
                            e.ɵɵelementStart(3, "small", 17),
                            e.ɵɵtext(4),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = r.item,
                        i = e.ɵɵnextContext(4);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(t.ten),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate2("", i.msg.MA1, ": ", t.ma, "");
                }
            }

            function Q(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "ng-select", 15),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(3);
                            return e.ɵɵresetView((a.selected = n));
                        })("change", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(n.change());
                        }),
                        e.ɵɵtemplate(2, B, 5, 3, "ng-template", 16),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵpropertyInterpolate1("placeholder", "--", t.msg.CHON, "--"),
                        e.ɵɵproperty("items", t.cbdata)("ngModel", t.selected)(
                            "clearable",
                            !1
                        )("virtualScroll", !0)("searchFn", t.customSearchFn)(
                            "trackByFn",
                            t.trackByFn
                        )("ngClass", e.ɵɵpureFunction1(8, I, t.HideCombo));
                }
            }

            function q(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span"),
                            e.ɵɵtext(1),
                            e.ɵɵelementEnd(),
                            e.ɵɵelement(2, "br"),
                            e.ɵɵelementStart(3, "small", 17),
                            e.ɵɵtext(4),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = r.item,
                        i = e.ɵɵnextContext(4);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(t.ten_eg),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate2("", i.msg.MA1, ": ", t.ma, "");
                }
            }

            function j(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "ng-select", 18),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(3);
                            return e.ɵɵresetView((a.selected = n));
                        })("change", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(n.change());
                        }),
                        e.ɵɵtemplate(2, q, 5, 3, "ng-template", 16),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵpropertyInterpolate1("placeholder", "--", t.msg.CHON, "--"),
                        e.ɵɵproperty("items", t.cbdata)("ngModel", t.selected)(
                            "clearable",
                            !1
                        )("virtualScroll", !0)("searchFn", t.customSearchFn)(
                            "trackByFn",
                            t.trackByFn
                        )("ngClass", e.ɵɵpureFunction1(8, I, t.HideCombo));
                }
            }

            function Y(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵtemplate(1, Q, 3, 10, "ng-container", 9),
                            e.ɵɵtemplate(2, j, 3, 10, "ng-container", 9),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.langUsingVi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", !t.langUsingVi);
                }
            }

            function R(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵtemplate(1, G, 3, 10, "ng-container", 9),
                            e.ɵɵtemplate(2, Y, 3, 2, "ng-container", 9),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", 10 !== t.selectedLoc),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", 10 === t.selectedLoc);
                }
            }

            function J(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "div", 19), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.messError);
                }
            }

            function z(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "div", 20), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.messInfo);
                }
            }

            function X(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span", 46), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.TitleGhiChu);
                }
            }
            const _ = function (o, r) {
                return {
                    "icon-down": o,
                    "icon-up": r,
                };
            };

            function W(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 47),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!0, "ma_mon_bd"));
                        }),
                        e.ɵɵtext(1, "MHB\u0110 "),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "ma_mon_bd" === t.orderby),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(3, _, t.reverseOrderby, !t.reverseOrderby)
                        );
                }
            }

            function Z(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 48),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!0, "ma_lop_hien_thi"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "ma_lop_hien_thi" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.LOP, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby, !t.reverseOrderby)
                        );
                }
            }

            function ee(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 49),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!0, "lich_thi"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "lich_thi" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.LICH_THI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby, !t.reverseOrderby)
                        );
                }
            }

            function te(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 50),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!0, "he_dao_tao"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "he_dao_tao" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.HE_DAO_TAO, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby, !t.reverseOrderby)
                        );
                }
            }

            function ne(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 51),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!0, "gc_to_hop"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "gc_to_hop" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.GHI_CHU, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby, !t.reverseOrderby)
                        );
                }
            }

            function oe(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "td", 41)(1, "input", 42),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.sMHBD = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵproperty("ngModel", t.sMHBD);
                }
            }

            function ie(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "td", 41)(2, "input", 52),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.sLop = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(2), e.ɵɵproperty("ngModel", t.sLop);
                }
            }

            function ae(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "td", 41)(1, "input", 43),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.sLichThi = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵproperty("ngModel", t.sLichThi);
                }
            }

            function re(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "td", 41)(1, "input", 53),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.sHDT = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵproperty("ngModel", t.sHDT);
                }
            }

            function ce(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "td", 41)(1, "input", 45),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext(2);
                            return e.ɵɵresetView((a.sGhiChu = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵproperty("ngModel", t.sGhiChu);
                }
            }

            function se(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "tr")(1, "td", 54),
                            e.ɵɵtext(2),
                            e.ɵɵelementEnd()()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1(" ", t.msg.KHONG_TIM_THAY_DU_LIEU, "");
                }
            }

            function _e(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 66), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.ma_mon_bd);
                }
            }

            function le(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 62), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.lop);
                }
            }

            function de(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "a", 73),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext().$implicit,
                                a = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(a.click_sl_conlai(n));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext().$implicit,
                        i = e.ɵɵnextContext(3);
                    e.ɵɵpropertyInterpolate("title", i.msg.DKMNV),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.sl_cl, " ");
                }
            }

            function he(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span"), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.sl_cl);
                }
            }

            function me(o, r) {
                if (
                    (1 & o && (e.ɵɵelement(0, "td", 74), e.ɵɵpipe(1, "safeHtml")), 2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵproperty(
                        "innerHTML",
                        e.ɵɵpipeBind1(1, 1, t.lich_thi),
                        e.ɵɵsanitizeHtml
                    );
                }
            }

            function pe(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 75), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.he_dao_tao);
                }
            }

            function ge(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 75), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.gc_to_hop);
                }
            }
            const ue = function (o, r) {
                    return {
                        "text-muted": o,
                        "text-primary bgr": r,
                    };
                },
                xe = function () {
                    return {
                        standalone: !0,
                    };
                };

            function fe(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "tr", 27)(1, "td", 56),
                        e.ɵɵlistener("mouseover", function () {
                            const a = e.ɵɵrestoreView(t).$implicit,
                                c = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(c.hoverTooltip(a, null));
                        }),
                        e.ɵɵelementStart(2, "form", 57)(3, "div", 58)(4, "input", 59),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            const c = e.ɵɵrestoreView(t).$implicit;
                            return e.ɵɵresetView((c.is_dk = n));
                        })("change", function (n) {
                            const c = e.ɵɵrestoreView(t).$implicit,
                                m = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(m.SelectToHoc(c, n));
                        }),
                        e.ɵɵelementEnd(),
                        e.ɵɵelement(5, "label", 60),
                        e.ɵɵelementEnd()()(),
                        e.ɵɵtemplate(6, _e, 2, 1, "td", 61),
                        e.ɵɵelementStart(7, "td", 62),
                        e.ɵɵtext(8),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(9, "td", 63),
                        e.ɵɵtext(10),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(11, "td", 62),
                        e.ɵɵtext(12),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(13, "td", 62),
                        e.ɵɵtext(14),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(15, "td", 64),
                        e.ɵɵtext(16),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(17, le, 2, 1, "td", 65),
                        e.ɵɵelementStart(18, "td", 66),
                        e.ɵɵtext(19),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(20, "td", 67),
                        e.ɵɵtemplate(21, de, 2, 2, "a", 68),
                        e.ɵɵtemplate(22, he, 2, 1, "span", 9),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(23, "td", 69),
                        e.ɵɵelement(24, "small", 70),
                        e.ɵɵpipe(25, "safeHtml"),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(26, me, 2, 3, "td", 71),
                        e.ɵɵtemplate(27, pe, 2, 1, "td", 72),
                        e.ɵɵtemplate(28, ge, 2, 1, "td", 72),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = r.$implicit,
                        i = r.index,
                        n = e.ɵɵnextContext(3);
                    e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(26, ue, !t.enable, t.is_dk)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngClass", t.enable ? "clickable" : ""),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("formGroup", n.myForm)("tooltip", n.popupTooltip),
                        e.ɵɵadvance(2),
                        e.ɵɵpropertyInterpolate("id", i),
                        e.ɵɵproperty("disabled", !t.enable)("value", t.id_to_hoc)(
                            "ngModel",
                            t.is_dk
                        )("ngModelOptions", e.ɵɵpureFunction0(29, xe)),
                        e.ɵɵadvance(1),
                        e.ɵɵpropertyInterpolate("for", i),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", n.hienthi_cot_mon_hoc_bd),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.ma_mon),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(n.langUsingVi ? t.ten_mon : t.ten_mon_eg),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.nhom_to),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.so_tc),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", n.IsCotMaLop),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.sl_cp),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", 0 === t.sl_cl),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", 0 !== t.sl_cl),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty(
                            "innerHTML",
                            e.ɵɵpipeBind1(25, 24, t.tkb),
                            e.ɵɵsanitizeHtml
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", n.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", n.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", n.IsCotLichThi);
                }
            }

            function Ce(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵtemplate(1, fe, 29, 30, "tr", 55),
                            e.ɵɵpipe(2, "orderBy"),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngForOf",
                            e.ɵɵpipeBind4(
                                2,
                                2,
                                t.dataToHoc_Filter,
                                t.orderby,
                                t.reverseOrderby,
                                !1
                            )
                        )("ngForTrackBy", t.trackByFn);
                }
            }
            const ve = function (o) {
                return {
                    "height: 65vh": o,
                };
            };

            function ke(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "h6", 21),
                        e.ɵɵtext(2),
                        e.ɵɵtemplate(3, X, 2, 1, "span", 22),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(4, "div", 23)(5, "table", 24)(6, "thead")(
                            7,
                            "tr",
                            25
                        )(8, "th", 26),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "is_da_dang_ky"));
                        }),
                        e.ɵɵelement(9, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(10, W, 3, 6, "th", 28),
                        e.ɵɵelementStart(11, "th", 29),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "ma_mon"));
                        }),
                        e.ɵɵtext(12),
                        e.ɵɵelement(13, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(14, "th", 30),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "ten_mon"));
                        }),
                        e.ɵɵtext(15),
                        e.ɵɵelement(16, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(17, "th", 31),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "nhom_to"));
                        }),
                        e.ɵɵtext(18),
                        e.ɵɵelement(19, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(20, "th", 32),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "to"));
                        }),
                        e.ɵɵtext(21),
                        e.ɵɵelement(22, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(23, "th", 32),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "so_tin_chi"));
                        }),
                        e.ɵɵtext(24),
                        e.ɵɵelement(25, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(26, Z, 3, 7, "th", 33),
                        e.ɵɵelementStart(27, "th", 32),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "sl_cho_phep"));
                        }),
                        e.ɵɵtext(28),
                        e.ɵɵelement(29, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(30, "th", 32),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "sl_con_lai"));
                        }),
                        e.ɵɵtext(31),
                        e.ɵɵelement(32, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(33, "th", 34),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!0, "thoi_khoa_bieu"));
                        }),
                        e.ɵɵtext(34),
                        e.ɵɵelement(35, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(36, ee, 3, 7, "th", 35),
                        e.ɵɵtemplate(37, te, 3, 7, "th", 36),
                        e.ɵɵtemplate(38, ne, 3, 7, "th", 37),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(39, "tr")(40, "td", 38),
                        e.ɵɵelement(41, "i", 39),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(42, oe, 2, 1, "td", 40),
                        e.ɵɵelementStart(43, "td", 41)(44, "input", 42),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sMaMon = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(45, "td", 41)(46, "input", 43),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sTenMon = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(47, "td", 41)(48, "input", 42),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sNhomTo = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(49, "td", 41)(50, "input", 42),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sTo = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(51, "td", 41)(52, "input", 42),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sSoTC = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵtemplate(53, ie, 3, 1, "ng-container", 9),
                        e.ɵɵelementStart(54, "td", 41)(55, "input", 44),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sSL = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(56, "td", 41)(57, "input", 44),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sCL = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(58, "td", 41)(59, "input", 45),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext();
                            return e.ɵɵresetView((a.sTKB = n));
                        })("input", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.Search());
                        }),
                        e.ɵɵelementEnd()(),
                        e.ɵɵtemplate(60, ae, 2, 1, "td", 40),
                        e.ɵɵtemplate(61, re, 2, 1, "td", 40),
                        e.ɵɵtemplate(62, ce, 2, 1, "td", 40),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(63, "tbody"),
                        e.ɵɵtemplate(64, se, 3, 1, "tr", 9),
                        e.ɵɵtemplate(65, Ce, 3, 7, "ng-container", 9),
                        e.ɵɵelementEnd()()(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1("", t.msg.DS_MON_HOC_MO_CHO_DK, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.TitleGhiChu),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngStyle",
                            e.ɵɵpureFunction1(58, ve, t.dataToHoc_Filter.length > 0)
                        ),
                        e.ɵɵadvance(4),
                        e.ɵɵclassProp("active", "is_da_dang_ky" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(60, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.hienthi_cot_mon_hoc_bd),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "ma_mon" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.MA_MON_HOC, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(63, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "ten_mon" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.TENMH, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(66, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "nhom_to" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.NHOM, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(69, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "to" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.TO, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(72, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "so_tin_chi" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.SO_TIN_CHI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(75, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotMaLop),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "sl_cho_phep" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.SO_LUONG, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(78, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "sl_con_lai" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.CON_LAI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(81, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "thoi_khoa_bieu" === t.orderby),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.TKB, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(84, _, t.reverseOrderby, !t.reverseOrderby)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty("ngIf", t.hienthi_cot_mon_hoc_bd),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sMaMon),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sTenMon),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sNhomTo),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sTo),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sSoTC),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotMaLop),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sSL),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sCL),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngModel", t.sTKB),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotLichThi),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", t.dataToHoc_Filter.length <= 0),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.dataToHoc_Filter.length > 0);
                }
            }

            function ye(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span", 90),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "lowercase"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate2(
                            "",
                            t.summondadk,
                            " ",
                            e.ɵɵpipeBind1(2, 2, t.msg.MON),
                            ","
                        );
                }
            }

            function Te(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span", 90),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "lowercase"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate2(
                            "",
                            t.sumtinchi,
                            " ",
                            e.ɵɵpipeBind1(2, 2, t.msg.TIN_CHI),
                            ""
                        );
                }
            }

            function Ie(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "span", 90), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.messLuuY);
                }
            }

            function Me(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 81),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "so_tin_chi_hp"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "so_tin_chi_hp" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.STCHP, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function be(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 91),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "so_tien_mon_hoc"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "so_tien_mon_hoc" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.HOC_PHI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function Se(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 91),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "so_tien_mien_giam"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "so_tien_mien_giam" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.MIEN_GIAM, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function De(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 91),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "so_tien_phai_dong"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "so_tien_phai_dong" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.PHAI_DONG, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function we(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 91),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "hoc_phi_tam_tinh"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "hoc_phi_tam_tinh" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.HOC_PHI_TAM_TINH, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function Ve(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 51),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "nganh_hoc"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "nganh_hoc" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.NGANH_HOC, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function Ee(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "th", 92),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.setOrder(!1, "dia_diem_thi"));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelement(2, "span", 27),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵclassProp("active", "dia_diem_thi" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.DIA_DIEM_THI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(4, _, t.reverseOrderby2, !t.reverseOrderby2)
                        );
                }
            }

            function He(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "th", 93), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.TACH_PHIEU_NOP_TIEN, "");
                }
            }

            function Oe(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "tr")(1, "td", 54),
                            e.ɵɵtext(2),
                            e.ɵɵelementEnd()()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1(" ", t.msg.KHONG_TIM_THAY_DU_LIEU, "");
                }
            }

            function Le(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 78), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.to_hoc.so_tc_hp);
                }
            }

            function Ke(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 78),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "number"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(e.ɵɵpipeBind2(2, 1, t.to_hoc.don_gia, "1.0-0"));
                }
            }

            function Ne(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 78),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "number"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(
                            e.ɵɵpipeBind2(2, 1, t.to_hoc.mien_giam, "1.0-0")
                        );
                }
            }

            function Fe(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 78),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "number"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate(
                            e.ɵɵpipeBind2(2, 1, t.to_hoc.phai_dong, "1.0-0")
                        );
                }
            }

            function Ue(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 109),
                            e.ɵɵtext(1),
                            e.ɵɵpipe(2, "number"),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(
                            "",
                            e.ɵɵpipeBind2(2, 1, t.hoc_phi_tam_tinh, "1.0-0"),
                            " "
                        );
                }
            }

            function Ae(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 104), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.nganh_hoc);
                }
            }

            function Pe(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵelementStart(1, "span", 111),
                            e.ɵɵtext(2),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2).$implicit;
                    e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.ten_dia_diem_thi);
                }
            }
            const Ge = function () {
                return [];
            };

            function Be(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "a", 112),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3).$implicit,
                                a = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(a.Load_Dia_Diem_Thi(n));
                        }),
                        e.ɵɵtext(2),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(3).$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("routerLink", e.ɵɵpureFunction0(2, Ge)),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.ten_dia_diem_thi, "");
                }
            }

            function Qe(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "button", 96),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3).$implicit,
                                a = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(a.Load_Dia_Diem_Thi(n));
                        }),
                        e.ɵɵelement(2, "i", 113),
                        e.ɵɵtext(3),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(6);
                    e.ɵɵadvance(3), e.ɵɵtextInterpolate(t.msg.DIA_DIEM_THI);
                }
            }

            function $e(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵtemplate(1, Be, 3, 3, "ng-container", 9),
                            e.ɵɵtemplate(2, Qe, 4, 1, "ng-container", 9),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2).$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.ten_dia_diem_thi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", !t.ten_dia_diem_thi);
                }
            }

            function qe(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "td", 110),
                            e.ɵɵtemplate(1, Pe, 3, 1, "ng-container", 9),
                            e.ɵɵtemplate(2, $e, 3, 2, "ng-container", 9),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext().$implicit;
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", !t.enable_xoa),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.enable_xoa);
                }
            }

            function je(o, r) {
                1 & o && e.ɵɵtext(0), 2 & o && e.ɵɵtextInterpolate(r.item);
            }

            function Ye(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "td", 104)(1, "ng-select", 114),
                        e.ɵɵlistener("ngModelChange", function (n) {
                            e.ɵɵrestoreView(t);
                            const a = e.ɵɵnextContext().$implicit;
                            return e.ɵɵresetView((a.so_phieu_nop_tien = n));
                        }),
                        e.ɵɵtemplate(2, je, 1, 1, "ng-template", 16),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext().$implicit,
                        i = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("items", i.ItemLoaiPhieu)("trackByFn", i.trackByFn)(
                            "selectOnTab",
                            !0
                        )("searchable", !1)("clearable", !1)("virtualScroll", !0)(
                            "ngModel",
                            t.so_phieu_nop_tien
                        )("disabled", !i.IsTrongTGDangKy);
                }
            }
            const Re = function (o) {
                return {
                    "text-muted": o,
                };
            };

            function Je(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "tr", 27)(1, "td", 99),
                        e.ɵɵlistener("click", function () {
                            const a = e.ɵɵrestoreView(t).$implicit,
                                c = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(c.XoaMonHoc(a));
                        })("mouseover", function () {
                            const a = e.ɵɵrestoreView(t).$implicit,
                                c = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(c.hoverTooltip(null, a));
                        }),
                        e.ɵɵelement(2, "i", 100),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(3, "td", 101),
                        e.ɵɵtext(4),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(5, "td", 63),
                        e.ɵɵtext(6),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(7, "td", 78),
                        e.ɵɵtext(8),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(9, "td", 78),
                        e.ɵɵtext(10),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(11, Le, 2, 1, "td", 102),
                        e.ɵɵtemplate(12, Ke, 3, 4, "td", 102),
                        e.ɵɵtemplate(13, Ne, 3, 4, "td", 102),
                        e.ɵɵtemplate(14, Fe, 3, 4, "td", 102),
                        e.ɵɵtemplate(15, Ue, 3, 4, "td", 103),
                        e.ɵɵelementStart(16, "td", 78),
                        e.ɵɵtext(17),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(18, "td", 78),
                        e.ɵɵtext(19),
                        e.ɵɵpipe(20, "date"),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(21, "td", 104),
                        e.ɵɵtext(22),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(23, Ae, 2, 1, "td", 105),
                        e.ɵɵtemplate(24, qe, 3, 2, "td", 106),
                        e.ɵɵelementStart(25, "td", 107),
                        e.ɵɵlistener("click", function () {
                            const a = e.ɵɵrestoreView(t).$implicit,
                                c = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(c.ShowModelChiTiet(a.to_hoc));
                        }),
                        e.ɵɵelement(26, "i", 108),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(27, Ye, 3, 8, "td", 105),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = r.$implicit,
                        i = e.ɵɵnextContext(3);
                    e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(23, Re, !t.enable_xoa)),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            t.enable_xoa ?
                            "text-danger text-center align-middle clickable" :
                            "text-secondary text-center align-middle"
                        ),
                        e.ɵɵattribute("disabled", !t.enable_xoa),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("tooltip", i.popupTooltip1),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.ma_mon),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1(
                            "",
                            i.langUsingVi ? t.to_hoc.ten_mon : t.to_hoc.ten_mon_eg,
                            " "
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.nhom_to),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.so_tc),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === i.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === i.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === i.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === i.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", i.IsCotHocPhi),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.lop),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            e.ɵɵpipeBind2(20, 20, t.ngay_dang_ky, "dd/MM/yyyy HH:mm:ss")
                        ),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate(t.trang_thai_mon),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", i.IsShowNganhHoc),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", i.IsShowDiaDiemThi),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            t.to_hoc.tkb ?
                            "clickable text-primary align-middle text-center" :
                            "text-muted align-middle text-center"
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", i.IsCotTachPhieu);
                }
            }

            function ze(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "button", 115),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(n.LuuTachPhieu());
                        }),
                        e.ɵɵelement(1, "i", 116),
                        e.ɵɵtext(2),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(3);
                    e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.msg.LUU_TACH_PHIEU);
                }
            }

            function Xe(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵtemplate(1, Je, 28, 25, "tr", 55),
                        e.ɵɵpipe(2, "orderBy"),
                        e.ɵɵelementStart(3, "tr", 94)(4, "td", 95)(5, "button", 96),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.XuatPhieuDangKy());
                        }),
                        e.ɵɵelement(6, "i", 97),
                        e.ɵɵtext(7),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(8, ze, 3, 1, "button", 98),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngForOf",
                            e.ɵɵpipeBind4(
                                2,
                                4,
                                t.dataKetQua,
                                t.orderby2,
                                t.reverseOrderby2,
                                !1
                            )
                        )("ngForTrackBy", t.trackByFn),
                        e.ɵɵadvance(6),
                        e.ɵɵtextInterpolate(t.msg.XUAT_PHIEU_DANG_KY),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotTachPhieu && t.IsTrongTGDangKy);
                }
            }
            const We = function (o) {
                return {
                    "height: 60vh": o,
                };
            };

            function Ze(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementContainerStart(0),
                        e.ɵɵelementStart(1, "h6", 76),
                        e.ɵɵtext(2),
                        e.ɵɵtemplate(3, ye, 3, 4, "span", 77),
                        e.ɵɵtemplate(4, Te, 3, 4, "span", 77),
                        e.ɵɵtemplate(5, Ie, 2, 1, "span", 77),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(6, "div", 23)(7, "table", 24)(8, "thead", 78)(
                            9,
                            "tr",
                            79
                        )(10, "th", 80),
                        e.ɵɵtext(11),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(12, "th", 29),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "ma_mon"));
                        }),
                        e.ɵɵtext(13),
                        e.ɵɵelement(14, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(15, "th", 30),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "ten_mon"));
                        }),
                        e.ɵɵtext(16),
                        e.ɵɵelement(17, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(18, "th", 51),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "nhom_to"));
                        }),
                        e.ɵɵtext(19),
                        e.ɵɵelement(20, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(21, "th", 81),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "so_tin_chi"));
                        }),
                        e.ɵɵtext(22),
                        e.ɵɵelement(23, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(24, Me, 3, 7, "th", 82),
                        e.ɵɵtemplate(25, be, 3, 7, "th", 83),
                        e.ɵɵtemplate(26, Se, 3, 7, "th", 83),
                        e.ɵɵtemplate(27, De, 3, 7, "th", 83),
                        e.ɵɵtemplate(28, we, 3, 7, "th", 83),
                        e.ɵɵelementStart(29, "th", 84),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "ma_lop_hien_thi"));
                        }),
                        e.ɵɵtext(30),
                        e.ɵɵelement(31, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(32, "th", 85),
                        e.ɵɵtext(33),
                        e.ɵɵelementEnd(),
                        e.ɵɵelementStart(34, "th", 86),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext();
                            return e.ɵɵresetView(n.setOrder(!1, "trang_thai_mon"));
                        }),
                        e.ɵɵtext(35),
                        e.ɵɵelement(36, "span", 27),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(37, Ve, 3, 7, "th", 37),
                        e.ɵɵtemplate(38, Ee, 3, 7, "th", 87),
                        e.ɵɵelementStart(39, "th", 88),
                        e.ɵɵtext(40),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(41, He, 2, 1, "th", 89),
                        e.ɵɵelementEnd()(),
                        e.ɵɵelementStart(42, "tbody"),
                        e.ɵɵtemplate(43, Oe, 3, 1, "tr", 9),
                        e.ɵɵtemplate(44, Xe, 9, 9, "ng-container", 9),
                        e.ɵɵelementEnd()()(),
                        e.ɵɵelementContainerEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1("", t.msg.DS_MH_DA_DK, ": "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.summondadk > 0),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.sumtinchi > 0),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.messLuuY),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngStyle",
                            e.ɵɵpureFunction1(42, We, t.dataKetQua.length > 0)
                        ),
                        e.ɵɵadvance(5),
                        e.ɵɵtextInterpolate(t.msg.XOA),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "ma_mon" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.MA_MON_HOC, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(44, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "ten_mon" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.TENMH, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(47, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "nhom_to" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.NHOM_TO, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(50, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "so_tin_chi" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.SO_TIN_CHI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(53, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === t.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === t.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === t.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", "KTTC" === t.IsMaTruong),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotHocPhi),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "ma_lop_hien_thi" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.LOP, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(56, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.NGAY_DANG_KY),
                        e.ɵɵadvance(1),
                        e.ɵɵclassProp("active", "trang_thai_mon" === t.orderby2),
                        e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1("", t.msg.TRANG_THAI, " "),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction2(59, _, t.reverseOrderby2, !t.reverseOrderby2)
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsShowNganhHoc),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsShowDiaDiemThi),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.TKB),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.IsCotTachPhieu),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", t.dataKetQua.length <= 0),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.dataKetQua.length > 0);
                }
            }

            function et(o, r) {
                1 & o && e.ɵɵtext(0),
                    2 & o && e.ɵɵtextInterpolate1(" ", r.item.name, " ");
            }

            function tt(o, r) {
                if (
                    (1 & o && (e.ɵɵelementStart(0, "div"), e.ɵɵtext(1), e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate1(" ", t.msg.VUI_LONG_NHAP_NOI_DUNG, " ");
                }
            }

            function nt(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "div", 131),
                            e.ɵɵtemplate(1, tt, 2, 1, "div", 9),
                            e.ɵɵelementEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1), e.ɵɵproperty("ngIf", t.f.ghi_chu.errors.required);
                }
            }

            function ot(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "button", 136),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(3);
                            return e.ɵɵresetView(n.NextLogonSV(n.OneMASV));
                        }),
                        e.ɵɵtext(1),
                        e.ɵɵelementEnd();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(3);
                    e.ɵɵadvance(1),
                        e.ɵɵtextInterpolate2(" ", t.msg.DANG_NHAP, " ", t.OneMASV, " ");
                }
            }

            function it(o, r) {
                if (1 & o) {
                    const t = e.ɵɵgetCurrentView();
                    e.ɵɵelementStart(0, "div", 132)(1, "div", 133)(2, "button", 134),
                        e.ɵɵlistener("click", function () {
                            e.ɵɵrestoreView(t);
                            const n = e.ɵɵnextContext(2);
                            return e.ɵɵresetView(n.DuyetDangKy());
                        }),
                        e.ɵɵtext(3),
                        e.ɵɵelementEnd(),
                        e.ɵɵtemplate(4, ot, 2, 2, "button", 135),
                        e.ɵɵelementEnd()();
                }
                if (2 & o) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate(t.msg.DUYET),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.OneMASV);
                }
            }
            const at = function (o) {
                return {
                    "is-invalid": o,
                };
            };

            function rt(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "div", 0),
                            e.ɵɵelement(1, "ngx-spinner", 117),
                            e.ɵɵelementStart(2, "div", 118),
                            e.ɵɵelement(3, "i", 3),
                            e.ɵɵtext(4),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(5, "div", 119)(6, "form", 120)(7, "div", 121)(
                                8,
                                "label",
                                122
                            ),
                            e.ɵɵtext(9),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(10, "div", 123)(11, "ng-select", 124),
                            e.ɵɵtemplate(12, et, 1, 1, "ng-template", 16),
                            e.ɵɵelementEnd()()(),
                            e.ɵɵelementStart(13, "div", 125)(14, "label", 126),
                            e.ɵɵtext(15),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(16, "div", 127)(17, "textarea", 128),
                            e.ɵɵtext(18, "          "),
                            e.ɵɵelementEnd(),
                            e.ɵɵtemplate(19, nt, 2, 1, "div", 129),
                            e.ɵɵelementEnd()()(),
                            e.ɵɵtemplate(20, it, 5, 2, "div", 130),
                            e.ɵɵelementEnd()()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("fullScreen", !1),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate1("", t.Title, " "),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("formGroup", t.FormDuyetDangKy),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate(t.msg.TRANG_THAI),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("items", t.dataTrangThai)("virtualScroll", !0)(
                            "trackByFn",
                            t.trackByFn
                        )("selectOnTab", !1)("searchable", !1)("clearable", !1),
                        e.ɵɵadvance(4),
                        e.ɵɵtextInterpolate(t.msg.LOI_NHAN_SV),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty(
                            "ngClass",
                            e.ɵɵpureFunction1(14, at, t.submitted && t.f.ghi_chu.errors)
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", t.submitted && t.f.ghi_chu.errors),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", !t.HideDuyetKetQua);
                }
            }

            function ct(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵelementStart(1, "div", 121)(2, "div", 152),
                            e.ɵɵtext(3),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(4, "div", 153),
                            e.ɵɵtext(5),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(6, "div", 152),
                            e.ɵɵtext(7),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(8, "div", 123),
                            e.ɵɵtext(9),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementStart(10, "div", 121)(11, "div", 152),
                            e.ɵɵtext(12),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(13, "div", 123),
                            e.ɵɵtext(14),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(15, "div", 152),
                            e.ɵɵtext(16),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(17, "div", 123),
                            e.ɵɵtext(18),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementStart(19, "div", 121)(20, "div", 152),
                            e.ɵɵtext(21),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(22, "div", 123),
                            e.ɵɵtext(23),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(24, "div", 152),
                            e.ɵɵtext(25),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(26, "div", 123),
                            e.ɵɵtext(27),
                            e.ɵɵpipe(28, "date"),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate1("", t.msg.HO_TEN, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ? null : t.currentUserInfo.ten_day_du
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1("", t.msg.MA_SV, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ? null : t.currentUserInfo.ma_sv
                        ),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate1("", t.msg.KHOA, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ? null : t.currentUserInfo.khoa
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1("", t.msg.LOP, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ? null : t.currentUserInfo.lop
                        ),
                        e.ɵɵadvance(3),
                        e.ɵɵtextInterpolate1("", t.msg.NGANH, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ? null : t.currentUserInfo.nganh
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1("", t.msg.NGAY_IN, ":"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            e.ɵɵpipeBind2(28, 12, t.DatePrint, "dd/MM/yyyy HH:mm:ss")
                        );
                }
            }

            function st(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "tr")(1, "td", 54),
                            e.ɵɵtext(2),
                            e.ɵɵelementEnd()()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate1(" ", t.msg.KHONG_TIM_THAY_DU_LIEU, "");
                }
            }

            function _t(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "tr")(1, "td", 104),
                            e.ɵɵtext(2),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(3, "td", 155),
                            e.ɵɵtext(4),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(5, "td", 63),
                            e.ɵɵtext(6),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(7, "td", 145),
                            e.ɵɵtext(8),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(9, "td", 78),
                            e.ɵɵtext(10),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(11, "td", 145),
                            e.ɵɵtext(12),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(13, "td", 78),
                            e.ɵɵtext(14),
                            e.ɵɵpipe(15, "date"),
                            e.ɵɵelementEnd()()),
                        2 & o)
                ) {
                    const t = r.$implicit,
                        i = r.index,
                        n = e.ɵɵnextContext(3);
                    e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(i + 1),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.ma_mon),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            n.langUsingVi ? t.to_hoc.ten_mon : t.to_hoc.ten_mon_eg
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.nhom_to),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.so_tc),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.to_hoc.lop),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(
                            e.ɵɵpipeBind2(15, 7, t.ngay_dang_ky, "dd/MM/yyyy HH:mm:ss")
                        );
                }
            }

            function lt(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementContainerStart(0),
                            e.ɵɵtemplate(1, _t, 16, 10, "tr", 154),
                            e.ɵɵelementContainerEnd()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext(2);
                    e.ɵɵadvance(1),
                        e.ɵɵproperty("ngForOf", t.dataKetQua)("ngForTrackBy", t.trackByFn);
                }
            }

            function dt(o, r) {
                if (
                    (1 & o &&
                        (e.ɵɵelementStart(0, "div", 137)(1, "div", 138)(2, "div", 121)(
                                3,
                                "div",
                                139
                            )(4, "div"),
                            e.ɵɵtext(5),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(6, "div"),
                            e.ɵɵtext(7),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(8, "div"),
                            e.ɵɵtext(
                                9,
                                "\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e"
                            ),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementStart(10, "div", 139),
                            e.ɵɵelement(11, "qrcode", 140),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementStart(12, "div", 141),
                            e.ɵɵtext(13),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(14, "div", 142),
                            e.ɵɵtext(15),
                            e.ɵɵelementEnd(),
                            e.ɵɵtemplate(16, ct, 29, 15, "ng-container", 9),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(17, "div", 143)(18, "table", 144)(
                                19,
                                "thead",
                                145
                            )(20, "tr", 79)(21, "th", 80),
                            e.ɵɵtext(22),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(23, "th", 146),
                            e.ɵɵtext(24),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(25, "th", 147),
                            e.ɵɵtext(26),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(27, "th", 148),
                            e.ɵɵtext(28),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(29, "th", 149),
                            e.ɵɵtext(30),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(31, "th", 150),
                            e.ɵɵtext(32),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(33, "th", 151),
                            e.ɵɵtext(34),
                            e.ɵɵelementEnd()()(),
                            e.ɵɵelementStart(35, "tbody"),
                            e.ɵɵtemplate(36, st, 3, 1, "tr", 9),
                            e.ɵɵtemplate(37, lt, 2, 2, "ng-container", 9),
                            e.ɵɵelementEnd()()()()),
                        2 & o)
                ) {
                    const t = e.ɵɵnextContext();
                    e.ɵɵadvance(5),
                        e.ɵɵtextInterpolate(
                            null == t.currentUserInfo ?
                            null :
                            t.currentUserInfo.ten_truong.toUpperCase()
                        ),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.PHONG_DAO_TAO),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty("margin", 1)("allowEmptyString", !0)(
                            "qrdata",
                            t.myAngularxQrCode
                        )("width", 300)("errorCorrectionLevel", "M")("elementType", "svg"),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.KET_QUA_DANG_KY_HOC_PHAN),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.Titlehocky2),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.currentUserInfo),
                        e.ɵɵadvance(6),
                        e.ɵɵtextInterpolate(t.msg.SO_THU_TU),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.MA_MON_HOC),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.TENMH),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.NHOM_TO),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.SO_TIN_CHI),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.LOP),
                        e.ɵɵadvance(2),
                        e.ɵɵtextInterpolate(t.msg.NGAY_DANG_KY),
                        e.ɵɵadvance(2),
                        e.ɵɵproperty("ngIf", t.dataKetQua.length <= 0),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty("ngIf", t.dataKetQua.length > 0);
                }
            }
            const ht = [{
                path: "",
                pathMatch: "full",
                component: (() => {
                    class o {
                        constructor(
                            t,
                            i,
                            n,
                            a,
                            c,
                            m,
                            s,
                            p,
                            u,
                            gt,
                            ut,
                            xt,
                            ft,
                            Ct,
                            vt,
                            kt
                        ) {
                            (this.http = t),
                            (this.spinner = i),
                            (this.modalService = n),
                            (this.fb = a),
                            (this.changeDetector = c),
                            (this.toastr = m),
                            (this.router = s),
                            (this.printerService = p),
                            (this.formBuilder = u),
                            (this.dataServices = gt),
                            (this.msg = ut),
                            (this.authenticationService = xt),
                            (this.serverLink = ft),
                            (this.bsModalRef = Ct),
                            (this.modalService_dm = vt),
                            (this.langservice = kt),
                            (this.submitted = !1),
                            (this.Title = ""),
                            (this.messError = ""),
                            (this.messLuuY = ""),
                            (this.isPrintArea = !1),
                            (this.dataToHocHover = {}),
                            (this.dataToHoc_empty = {
                                id_to_hoc: "0",
                                id_mon: "0",
                            }),
                            (this.dataKetQuaHover = {}),
                            (this.popupTooltip1 = ""),
                            (this.orderby = "ma_mon"),
                            (this.orderby2 = "ma_mon"),
                            (this.reverseOrderby = !1),
                            (this.reverseOrderby2 = !1),
                            (this.IsCVHT = !1),
                            (this.IsCotHocPhi = !1),
                            (this.IsCotMaLop = !1),
                            (this.IsCotTachPhieu = !1),
                            (this.IsCotLichThi = !1),
                            (this.IsTrongTGDangKy = !1),
                            (this.IsTrongTGDuyet = !1),
                            (this.myAngularxQrCode = ""),
                            (this.sMHBD = ""),
                            (this.sMaMon = ""),
                            (this.sTenMon = ""),
                            (this.sNhomTo = ""),
                            (this.sTo = ""),
                            (this.sSoTC = ""),
                            (this.sLop = ""),
                            (this.sSL = ""),
                            (this.sCL = ""),
                            (this.sTKB = ""),
                            (this.sLichThi = ""),
                            (this.sHDT = ""),
                            (this.sGhiChu = ""),
                            (this.HideDuyetKetQua = !0),
                            (this.langUsingVi = !0),
                            (this.addinduyetkqdk = !1),
                            (this.dataTrangThai = [{
                                    id: 0,
                                    name: "Kh\xf4ng \u0111\u1ed3ng \xfd",
                                },
                                {
                                    id: 1,
                                    name: "\u0110\u1ed3ng \xfd",
                                },
                            ]),
                            (this.NHHK = ""),
                            (this.OneMASV = ""),
                            (this.hienthi_cot_mon_hoc_bd = !1),
                            (this.messInfo = ""),
                            (this.SV_Nganh = 1),
                            (this.IsShowDiaDiemThi = !1),
                            (this.is_song_ngu = !1),
                            (this.IsMaTruong = ""),
                            ($.connection.dKMHHub.client.updateNhom = (Tt, It, w) => {
                                const C = this.dataToHoc_Goc.find(
                                    (v) => v.id_to_hoc === It
                                );
                                if (C && Tt !== this.currentUser ? .id) {
                                    const v = C.sl_cl + w;
                                    v >= 0 &&
                                        v <= C.sl_cp &&
                                        ((C.sl_cl = v),
                                            (C.sl_dk -= w),
                                            this.changeDetector.detectChanges());
                                }
                            }),
                            (this.FormDuyetDangKy = this.formBuilder.group({
                                duyet_kqdk: [null],
                                ghi_chu: [""],
                            })),
                            (this.myForm = this.fb.group({
                                id_to_hoc: this.fb.array([]),
                            }));
                        }
                        get f() {
                            return this.FormDuyetDangKy.controls;
                        }
                        loadKetQuaduyetSV(t) {
                            this.http
                                .post(h.L1.Loc_KetQuaDuyetSV, {
                                    ma_sv: t,
                                })
                                .subscribe(
                                    (i) => {
                                        i &&
                                            200 === i.code &&
                                            i.data &&
                                            i.data.ket_qua &&
                                            this.FormDuyetDangKy.patchValue({
                                                duyet_kqdk: i.data.ket_qua.trang_thai,
                                                ghi_chu: i.data.ket_qua.loi_nhan,
                                            });
                                    },
                                    (i) => {}
                                );
                        }
                        sendStatus(t, i) {
                            const n = t.sl_cl + i;
                            n >= 0 && n <= t.sl_cp && ((t.sl_dk -= i), (t.sl_cl = n));
                        }
                        ngOnInit() {
                            this.spinner.show("spinner-dkmh"),
                                this.langservice.LanguageUsing.subscribe((t) => {
                                    this.langUsingVi = "vi" === t;
                                }),
                                sessionStorage.getItem("matruong") &&
                                (this.IsMaTruong = sessionStorage.getItem("matruong")),
                                this.dataServices.loadMenuChucNang(!0).subscribe((t) => {
                                    t &&
                                        t.length > 0 &&
                                        this.dataServices
                                        .kiemTraTruocKhiVaoMennu_Ser(t)
                                        .subscribe((i) => {
                                            !i && i.length <= 0 && this.load_page();
                                        });
                                });
                        }
                        load_page() {
                            this.spinner.show("spinner-dkmh"),
                                this.FormDuyetDangKy.reset(),
                                (this.messError = ""),
                                (this.messInfo = ""),
                                (this.messLuuY = ""),
                                (this.Titlehocky = ""),
                                (this.Titlehocky2 = ""),
                                (this.summondadk = 0),
                                (this.sumtinchi = 0),
                                (this.HideCombo = !0),
                                (this.dataToHoc_Goc = null),
                                (this.dataToHoc_Filter = []),
                                (this.dataKetQua = []),
                                (this.currentUserInfo = JSON.parse(
                                    sessionStorage.getItem("CURRENT_USER_INFO")
                                )),
                                (this.currentUser = JSON.parse(
                                    sessionStorage.getItem("CURRENT_USER")
                                )),
                                this.currentUser &&
                                (this.loadKetQuaduyetSV(this.currentUser.userName),
                                    this.loadDsDieuKienLoc()),
                                sessionStorage.getItem("nganh") &&
                                (this.SV_Nganh = +sessionStorage.getItem("nganh")),
                                "1" === sessionStorage.getItem("type") ?
                                ((this.IsCVHT = !0),
                                    (this.messInfo =
                                        this.msg.CVHT_DANG_DANG_NHAP_VAO_TAI_KHOAN_SINH_VIEN),
                                    (this.Title =
                                        "DUY\u1ec6T K\u1ebeT QU\u1ea2 \u0110\u0102NG K\xdd SINH VI\xcaN"),
                                    (this.HideDuyetKetQua = !1),
                                    localStorage.hasOwnProperty("NHHK") &&
                                    (this.NHHK = localStorage.getItem("NHHK")),
                                    this.currentUser &&
                                    (localStorage.hasOwnProperty("DSSV") ?
                                        ((this.ListDSSV = JSON.parse(
                                                localStorage.getItem("DSSV")
                                            )),
                                            (this.OneMASV =
                                                this.ListDSSV && this.ListDSSV.length > 0 ?
                                                this.currentUser.userName ===
                                                this.ListDSSV[this.ListDSSV.length - 1].ma_sv ?
                                                "" :
                                                this.ListDSSV[0] ? .ma_sv :
                                                "")) :
                                        (this.OneMASV = ""))) :
                                ((this.Title =
                                        "K\u1ebeT QU\u1ea2 DUY\u1ec6T C\u1ee6A C\u1ed0 V\u1ea4N H\u1eccC T\u1eacP"),
                                    (this.HideDuyetKetQua = !0),
                                    "in" === sessionStorage.getItem("state") ?
                                    ((this.IsCVHT = !0),
                                        (this.messInfo =
                                            this.msg.CVHT_DANG_DANG_NHAP_VAO_TAI_KHOAN_SINH_VIEN)) :
                                    ((this.IsCVHT = !1), (this.messInfo = ""))),
                                this.spinner.hide("spinner-dkmh");
                        }
                        getOneNextMaSV(t) {
                            this.ListDSSV &&
                                this.ListDSSV.length > 0 &&
                                (this.OneMASV = this.ListDSSV.filter((i) => i.stt === t + 1)
                                    .map((i) => i.ma_sv)
                                    .toString());
                        }
                        NextLogonSV(t) {
                            this.spinner.show("spinner-cvht"),
                                "1" === sessionStorage.getItem("type") &&
                                this.http.post(h.L1.Logout, "").subscribe(
                                    (i) => {
                                        i &&
                                            (sessionStorage.setItem(
                                                    "CURRENT_USER",
                                                    sessionStorage.getItem("CURRENT_USER_GV")
                                                ),
                                                this.authenticationService
                                                .GVloginSV(this.OneMASV, +this.NHHK, +this.SVNganh)
                                                .subscribe(
                                                    (n) => {
                                                        if (n && n.access_token) {
                                                            window.scroll(0, 0),
                                                                sessionStorage.setItem(
                                                                    "CURRENT_USER",
                                                                    JSON.stringify(
                                                                        this.authenticationService
                                                                        .currentUserValue
                                                                    )
                                                                ),
                                                                this.serverLink.setLogin(!0),
                                                                this.dataServices
                                                                .loadUserInfo()
                                                                .subscribe((c) => {
                                                                    sessionStorage.setItem(
                                                                            "CURRENT_USER_INFO",
                                                                            JSON.stringify(c)
                                                                        ),
                                                                        (this.currentUserInfo = JSON.parse(
                                                                            sessionStorage.getItem(
                                                                                "CURRENT_USER_INFO"
                                                                            )
                                                                        ));
                                                                }),
                                                                this.authenticationService.currentUserSubject.next(
                                                                    this.authenticationService
                                                                    .currentUserValue
                                                                ),
                                                                this.load_page();
                                                            const a = this.ListDSSV.filter(
                                                                    (c) =>
                                                                    c ? .ma_sv ? .toLowerCase() ===
                                                                    t ? .toLowerCase()
                                                                )
                                                                .map((c) => c.stt)
                                                                .toString();
                                                            this.getOneNextMaSV(+a),
                                                                this.spinner.hide("spinner-cvht");
                                                        } else
                                                            this.spinner.hide("spinner-cvht"),
                                                            this.modalService.show(x.O, {
                                                                initialState: {
                                                                    icon: "w",
                                                                    button: "OK",
                                                                    message: this.msg.KHONG_THE_DN_SV,
                                                                },
                                                                backdrop: "static",
                                                                keyboard: !1,
                                                                ignoreBackdropClick: !0,
                                                                animated: !1,
                                                                class: "modal-dialog-centered",
                                                            });
                                                    },
                                                    (n) => {
                                                        this.spinner.hide("spinner-cvht"),
                                                            this.modalService.show(x.O, {
                                                                initialState: {
                                                                    icon: "w",
                                                                    button: "OK",
                                                                    message: this.msg.KHONG_THE_DN_SV,
                                                                },
                                                                backdrop: "static",
                                                                keyboard: !1,
                                                                ignoreBackdropClick: !0,
                                                                animated: !1,
                                                                class: "modal-dialog-centered",
                                                            });
                                                    }
                                                ));
                                    },
                                    (i) => {
                                        this.spinner.hide("spinner-cvht");
                                    }
                                );
                        }
                        loadDsDieuKienLoc() {
                            this.spinner.show("spinner-dkmh"),
                                this.http.post(h.L1.Loc_DS_dieu_kien_loc, "").subscribe(
                                    (t) => {
                                        if (t && t.length > 0) {
                                            this.cbDieuKienLoc = t;
                                            var i = Number(
                                                this.cbDieuKienLoc
                                                .filter((n) => !0 === n.is_mac_dinh)
                                                .map((n) => n.gia_tri)
                                                .join("") || -1
                                            ); -
                                            1 !== i ?
                                                ((this.selectedLoc = i),
                                                    this.load_MonHocDangKy(this.selectedLoc)) :
                                                this.load_MonHoc_Da_DangKy();
                                        } else this.spinner.hide("spinner-dkmh");
                                    },
                                    (t) => {
                                        this.spinner.hide("spinner-dkmh");
                                    }
                                );
                        }
                        load_MonHocDangKy(t) {
                            (this.messError = ""),
                            (this.orderby = "ma_mon"),
                            this.dataToHoc_Goc ?
                                this.FilterByDKLoc(t) :
                                (this.spinner.show("spinner-dkmh"),
                                    this.http
                                    .post(h.L1.Loc_mon_hoc_dang_ky, {
                                        is_CVHT: this.IsCVHT,
                                        additional: {
                                            paging: {
                                                limit: 99999,
                                                page: 1,
                                            },
                                            ordering: [{
                                                name: "",
                                                order_type: "",
                                            }, ],
                                        },
                                    })
                                    .subscribe(
                                        (n) => {
                                            if (n && 200 === n.code)
                                                if (n.data) {
                                                    if (
                                                        ((this.hienthi_cot_mon_hoc_bd =
                                                                n.data ? .hien_thi_cot_mon_hoc_bd),
                                                            (this.addinduyetkqdk =
                                                                n.data ? .addin_duyet_kqdk),
                                                            n.data.ds_nhom_to.length > 0)
                                                    ) {
                                                        if (
                                                            ((this.Titlehocky =
                                                                    n.data.hoc_ky_dang_ky ? .toUpperCase()),
                                                                (this.Titlehocky2 = n.data.hoc_ky_dang_ky),
                                                                (this.TitleGhiChu =
                                                                    n.data.ghi_chu_dkmh ? ? ""),
                                                                (this.dataToHoc_Goc = n.data.ds_nhom_to),
                                                                (this.IsCotHocPhi =
                                                                    n.data.hien_cot_hoc_phi),
                                                                (this.IsCotMaLop = n.data.hien_cot_ma_lop),
                                                                (this.IsCotTachPhieu =
                                                                    n.data.hien_cot_tach_phieu_nop_tien),
                                                                (this.IsCotLichThi =
                                                                    n.data.hien_thi_cot_lich_thi),
                                                                "1" === sessionStorage.getItem("type") ?
                                                                ((this.IsTrongTGDangKy = !0),
                                                                    n.data.trong_thoi_gian_duyet_kqdk ?
                                                                    (this.FormDuyetDangKy.controls.duyet_kqdk.enable(),
                                                                        this.FormDuyetDangKy.controls.ghi_chu.enable(),
                                                                        (this.HideDuyetKetQua = !1)) :
                                                                    (this.FormDuyetDangKy.controls.duyet_kqdk.disable(),
                                                                        this.FormDuyetDangKy.controls.ghi_chu.disable(),
                                                                        (this.HideDuyetKetQua = !0))) :
                                                                ((this.IsTrongTGDangKy =
                                                                        n.data.trong_thoi_gian_dang_ky),
                                                                    this.FormDuyetDangKy.controls.duyet_kqdk.disable(),
                                                                    this.FormDuyetDangKy.controls.ghi_chu.disable(),
                                                                    (this.HideDuyetKetQua = !0)),
                                                                n.data.ds_khoa &&
                                                                (this.cbKhoa = n.data.ds_khoa.sort(
                                                                    (a, c) => (a.ten > c.ten ? -1 : 1)
                                                                )),
                                                                n.data.ds_lop &&
                                                                (this.cbLop = n.data.ds_lop.sort((a, c) =>
                                                                    a.ten > c.ten ? -1 : 1
                                                                )),
                                                                this.dataToHoc_Goc[0] ? .ten_mon &&
                                                                "" !== this.dataToHoc_Goc[0] ? .ten_mon)
                                                        ) {
                                                            const a = this.dataToHoc_Goc.filter(
                                                                (c, m, s) =>
                                                                s.findIndex(
                                                                    (p) =>
                                                                    p ? .ma_mon ? .toLowerCase() ===
                                                                    c ? .ma_mon ? .toLowerCase()
                                                                ) === m
                                                            );
                                                            this.cbMon = a
                                                                .filter((c) => c.ma_mon)
                                                                .map((c) => ({
                                                                    ma: c.ma_mon,
                                                                    ten: c.ten_mon,
                                                                }))
                                                                .sort((c, m) => (c.ten > m.ten ? -1 : 1));
                                                        } else if (
                                                            n.data.ds_mon_hoc &&
                                                            n.data.ds_mon_hoc.length > 0 &&
                                                            ((this.cbMon = n.data.ds_mon_hoc.sort(
                                                                    (a, c) => (a.ten > c.ten ? -1 : 1)
                                                                )),
                                                                this.cbMon &&
                                                                ((this.allSubjects = this.cbMon.reduce(
                                                                        (a, c) => ((a[c.ma] = c.ten), a), {}
                                                                    )),
                                                                    this.allSubjects))
                                                        ) {
                                                            const a = this.dataToHoc_Goc.map(
                                                                (c) => (
                                                                    (this.rs = {
                                                                        ...c,
                                                                    }),
                                                                    (this.rs.ten_mon =
                                                                        this.allSubjects[this.rs.ma_mon]),
                                                                    this.rs
                                                                )
                                                            );
                                                            this.dataToHoc_Goc = a.sort((c, m) =>
                                                                c.ma_mon > m.ma_mon ? -1 : 1
                                                            );
                                                        }
                                                        this.load_MonHoc_Da_DangKy(),
                                                            this.IsCotTachPhieu &&
                                                            this.LoadLoaiPhieuNoiTien(),
                                                            this.changeLoc(),
                                                            this.spinner.hide("spinner-dkmh");
                                                    } else
                                                        this.spinner.hide("spinner-dkmh"),
                                                        (this.messError =
                                                            n.data.dien_giai_enable_chung ||
                                                            this.msg.KHONG_TIM_THAY_DU_LIEU);
                                                    this.spinner.hide("spinner-dkmh");
                                                } else
                                                    (this.messError =
                                                        n.message ? ? this.msg.KHONG_TIM_THAY_DU_LIEU),
                                                    this.spinner.hide("spinner-dkmh");
                                            else
                                                this.spinner.hide("spinner-dkmh"),
                                                (this.dataToHoc_Goc = null),
                                                (this.messError =
                                                    n.message ? ? this.msg.KHONG_TIM_THAY_DU_LIEU);
                                        },
                                        (n) => {
                                            this.spinner.hide("spinner-dkmh"),
                                                (this.dataToHoc_Goc = null),
                                                (this.messError =
                                                    this.msg.KHONG_TIM_THAY_DU_LIEU);
                                        }
                                    ));
                        }
                        FilterByDKLoc(t) {
                            if ((this.spinner.show("spinner-dkmh"), 0 === t)) {
                                if (this.currentUserInfo) {
                                    const i = this.dataToHoc_Goc.filter((n) =>
                                        (n.ds_lop || []).some(
                                            (a) =>
                                            a ? .toLowerCase() ===
                                            this.currentUserInfo ? .lop ? .toLowerCase()
                                        )
                                    );
                                    this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                        (n, a) => (n.ma_mon > a.ma_mon ? -1 : 1)
                                    );
                                }
                            } else if (1 === t) {
                                const i = this.dataToHoc_Goc.filter((n) => n.is_rot);
                                this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                    (n, a) => (n.ma_mon > a.ma_mon ? -1 : 1)
                                );
                            } else if (2 === t) {
                                const i = this.dataToHoc_Goc.filter((n) => n.is_ctdt);
                                this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                    (n, a) => (n.ma_mon > a.ma_mon ? -1 : 1)
                                );
                            } else if (3 === t) {
                                if (this.selected) {
                                    const i = this.dataToHoc_Goc.filter((n) =>
                                        (n.ds_khoa || []).some(
                                            (a) => a ? .toLowerCase() === this.selected ? .toLowerCase()
                                        )
                                    );
                                    this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                        (n, a) => (n.nhom_to > a.nhom_to ? -1 : 1)
                                    );
                                }
                            } else if (4 === t) {
                                if (this.selected) {
                                    const i = this.dataToHoc_Goc.filter((n) =>
                                        (n.ds_lop || []).some(
                                            (a) => a ? .toLowerCase() === this.selected ? .toLowerCase()
                                        )
                                    );
                                    this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                        (n, a) => (n.nhom_to > a.nhom_to ? -1 : 1)
                                    );
                                }
                            } else if (6 === t) {
                                const i = this.dataToHoc_Goc.filter((n) => n.is_chctdt);
                                this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                    (n, a) => (n.ma_mon > a.ma_mon ? -1 : 1)
                                );
                            } else if (10 === t && this.selected) {
                                const i = this.dataToHoc_Goc.filter(
                                    (n) => n.ma_mon === this.selected
                                );
                                this.dataToHoc_Filter = this.dataToHoc_NotSearch = i.sort(
                                    (n, a) => (n.nhom_to > a.nhom_to ? -1 : 1)
                                );
                            }
                            this.spinner.hide("spinner-dkmh");
                        }
                        load_MonHoc_Da_DangKy(t = !1) {
                            this.spinner.show("spinner-dkmh"),
                                (this.orderby2 = "ma_mon"),
                                (this.summondadk = 0),
                                (this.sumtinchi = 0),
                                this.http
                                .post(h.L1.Loc_mon_hoc_da_dang_ky, {
                                    is_CVHT: this.IsCVHT,
                                    is_Clear: t,
                                })
                                .subscribe(
                                    (n) => {
                                        if (n && 200 === n.code)
                                            if (
                                                ((this.mintinchi = n.data.so_tin_chi_min),
                                                    (this.IsShowNganhHoc = n.data.is_show_nganh_hoc),
                                                    (this.IsShowDiaDiemThi =
                                                        n.data.is_show_dia_diem_thi),
                                                    (this.DatePrint = new Date(n.data.ngay_in)),
                                                    n.data && n.data.ds_kqdkmh.length > 0)
                                            ) {
                                                if (
                                                    ((this.dataKetQua = n.data.ds_kqdkmh),
                                                        this.allSubjects &&
                                                        this.dataKetQua.forEach((a) => {
                                                            a.to_hoc.ten_mon =
                                                                this.allSubjects[a.to_hoc.ma_mon];
                                                        }),
                                                        t)
                                                ) {
                                                    this.isPrintArea = !0;
                                                    const a = this.dataKetQua
                                                        .map(
                                                            (c) => c.id_kqdk + "," + c.to_hoc.id_to_hoc
                                                        )
                                                        .join(";");
                                                    (this.myAngularxQrCode =
                                                        this.DatePrint.getTime() + ";" + a),
                                                    this.spinner.hide("spinner-dkmh"),
                                                        (this.timeoutId = setTimeout(() => {
                                                            this.printerService.printDiv("printArea"),
                                                                (this.isPrintArea = !1);
                                                        }, 1e3));
                                                }
                                                (this.dataKetQua = this.dataKetQua.filter(
                                                    (a) =>
                                                    a.ngay_dang_ky &&
                                                    (!!a.to_hoc.id_to_hoc ||
                                                        "" !== a.to_hoc.id_to_hoc)
                                                )),
                                                (this.dataKetQua = this.dataKetQua.sort((a, c) =>
                                                    a.ngay_dang_ky > c.ngay_dang_ky ? 1 : -1
                                                )),
                                                this.SumMonTinChi(),
                                                    this.spinner.hide("spinner-dkmh");
                                            } else this.spinner.hide("spinner-dkmh");
                                        else this.spinner.hide("spinner-dkmh");
                                    },
                                    (n) => {
                                        this.spinner.hide("spinner-dkmh");
                                    }
                                );
                        }
                        SelectToHoc(t, i) {
                            if (!t.enable)
                                return (
                                    (i.target.checked = !1),
                                    void this.spinner.hide("spinner-dkmh")
                                );
                            this.messError = "";
                            const n = {
                                filter: {
                                    id_to_hoc: t.id_to_hoc,
                                    is_checked: i.target.checked,
                                    sv_nganh: this.SV_Nganh,
                                },
                            };
                            this.spinner.show("spinner-dkmh"),
                                this.http.post(h.L1.Xuly_DKMH_SinhVien, n).subscribe(
                                    (a) => {
                                        if (a && 200 === a.code)
                                            if (a.data)
                                                if (
                                                    ((this.IsShowNganhHoc = a.data.is_show_nganh_hoc),
                                                        (this.dataDKMH = a.data),
                                                        this.dataDKMH && !this.dataDKMH.is_thanh_cong)
                                                )
                                                    i.target.checked ?
                                                    ((i.target.checked = !1),
                                                        this.UpdateData(t, !1)) :
                                                    ((i.target.checked = !0),
                                                        this.UpdateData(t, !0)),
                                                    this.spinner.hide("spinner-dkmh"),
                                                    this.modalService.show(x.O, {
                                                        initialState: {
                                                            icon: "w",
                                                            message: a.data.thong_bao_loi,
                                                            button: "OK",
                                                        },
                                                        backdrop: "static",
                                                        keyboard: !1,
                                                        ignoreBackdropClick: !0,
                                                        animated: !1,
                                                        class: "modal-dialog-centered",
                                                    });
                                                else {
                                                    const c = this.myForm.controls.id_to_hoc,
                                                        m = c.controls.findIndex(
                                                            (s) => s.value === t.id_to_hoc
                                                        );
                                                    if (
                                                        ((t.is_dk = i.target.checked), i.target.checked)
                                                    ) {
                                                        if (
                                                            (this.dataDKMH.is_thanh_cong &&
                                                                this.dataDKMH.thong_bao_loi &&
                                                                this.modalService.show(x.O, {
                                                                    initialState: {
                                                                        icon: "i",
                                                                        message: this.dataDKMH.thong_bao_loi,
                                                                        button: "OK",
                                                                    },
                                                                    backdrop: "static",
                                                                    keyboard: !1,
                                                                    ignoreBackdropClick: !0,
                                                                    animated: !1,
                                                                    class: "modal-dialog-centered",
                                                                }),
                                                                c.push(new d.NI(t.id_to_hoc)),
                                                                (this.dataKetQua = this.dataKetQua.filter(
                                                                    this.IsCotLichThi ?
                                                                    (s) =>
                                                                    s.to_hoc.id_to_hoc !==
                                                                    this.dataDKMH.ket_qua_dang_ky.to_hoc
                                                                    .id_to_hoc :
                                                                    (s) =>
                                                                    s.to_hoc.id_mon !==
                                                                    this.dataDKMH.ket_qua_dang_ky.to_hoc
                                                                    .id_mon
                                                                )),
                                                                this.dataKetQua.push(
                                                                    this.dataDKMH.ket_qua_dang_ky
                                                                ),
                                                                this.allSubjects &&
                                                                this.dataKetQua.forEach((s) => {
                                                                    s.to_hoc.ten_mon =
                                                                        this.allSubjects[s.to_hoc.ma_mon];
                                                                }),
                                                                (this.dataKetQua = this.dataKetQua.sort(
                                                                    (s, p) =>
                                                                    s.ngay_dang_ky > p.ngay_dang_ky ? 1 : -1
                                                                )),
                                                                this.SumMonTinChi(),
                                                                this.sendStatus(t, -1),
                                                                this.UpdateData(t, !0),
                                                                !this.IsCotLichThi)
                                                        ) {
                                                            const s = this.dataToHoc_Filter.filter(
                                                                    (u) =>
                                                                    u.is_dk &&
                                                                    u.id_mon === t.id_mon &&
                                                                    u.id_to_hoc !== t.id_to_hoc
                                                                ),
                                                                p = this.dataToHoc_Goc.filter(
                                                                    (u) =>
                                                                    u.is_dk &&
                                                                    u.id_mon === t.id_mon &&
                                                                    u.id_to_hoc !== t.id_to_hoc
                                                                );
                                                            s &&
                                                                s.length > 0 &&
                                                                ((s[0].is_dk = !1), this.sendStatus(s[0], 1)),
                                                                p && p.length > 0 && (p[0].is_dk = !1);
                                                        }
                                                        this.spinner.hide("spinner-dkmh"),
                                                            a.data.thong_bao_tien_quyet &&
                                                            this.modalService.show(x.O, {
                                                                initialState: {
                                                                    icon: "w",
                                                                    message: a.data.thong_bao_tien_quyet,
                                                                    button: "OK",
                                                                },
                                                                backdrop: "static",
                                                                keyboard: !1,
                                                                ignoreBackdropClick: !0,
                                                                animated: !1,
                                                                class: "modal-dialog-centered",
                                                            });
                                                    } else
                                                        !i.target.checked &&
                                                        this.dataDKMH.is_thanh_cong &&
                                                        this.dataDKMH.thong_bao_loi &&
                                                        this.modalService.show(x.O, {
                                                            initialState: {
                                                                icon: "i",
                                                                message: this.dataDKMH.thong_bao_loi,
                                                                button: "OK",
                                                            },
                                                            backdrop: "static",
                                                            keyboard: !1,
                                                            ignoreBackdropClick: !0,
                                                            animated: !1,
                                                            class: "modal-dialog-centered",
                                                        }),
                                                        c.removeAt(m),
                                                        (this.dataKetQua = this.dataKetQua.filter(
                                                            (s) =>
                                                            !a.data.id_to_hoc_xoa.includes(
                                                                s.to_hoc.id_to_hoc
                                                            )
                                                        )),
                                                        (this.dataKetQua = this.dataKetQua.sort(
                                                            (s, p) =>
                                                            s.ngay_dang_ky > p.ngay_dang_ky ? 1 : -1
                                                        )),
                                                        this.SumMonTinChi(),
                                                        this.dataToHoc_Goc.forEach((s) => {
                                                            a.data.id_to_hoc_xoa.includes(s.id_to_hoc) &&
                                                                s &&
                                                                (this.UpdateData(s, !1),
                                                                    (s.is_dk = !1),
                                                                    this.sendStatus(s, 1));
                                                        }),
                                                        this.spinner.hide("spinner-dkmh");
                                                    this.spinner.hide("spinner-dkmh");
                                                }
                                        else
                                            i.target.checked ?
                                            ((i.target.checked = !1), this.UpdateData(t, !1)) :
                                            ((i.target.checked = !0), this.UpdateData(t, !0)),
                                            this.spinner.hide("spinner-dkmh");
                                        else
                                            i.target.checked ?
                                            ((i.target.checked = !1), this.UpdateData(t, !1)) :
                                            ((i.target.checked = !0), this.UpdateData(t, !0)),
                                            this.spinner.hide("spinner-dkmh");
                                    },
                                    (a) => {
                                        i.target.checked ?
                                            ((i.target.checked = !1), this.UpdateData(t, !1)) :
                                            ((i.target.checked = !0), this.UpdateData(t, !0)),
                                            this.spinner.hide("spinner-dkmh");
                                    }
                                );
                        }
                        UpdateData(t, i) {
                            this.dataToHoc_Goc
                                .filter(
                                    (n) =>
                                    n.id_mon === t.id_mon &&
                                    n.id_to_hoc === t.id_to_hoc &&
                                    n.ma_mon === t.ma_mon &&
                                    n.nhom_to === t.nhom_to
                                )
                                .map((n) => (n.is_dk = i)),
                                i &&
                                "DHMO" === this.IsMaTruong &&
                                this.load_MonHoc_Da_DangKy();
                        }
                        XoaMonHoc(t) {
                            t.enable_xoa ?
                                (this.spinner.show("spinner-dkmh"),
                                    this.http
                                    .post(h.L1.Xuly_DKMH_SinhVien, {
                                        filter: {
                                            id_to_hoc: t.to_hoc.id_to_hoc,
                                            is_checked: !1,
                                            sv_nganh: this.SV_Nganh,
                                        },
                                    })
                                    .subscribe(
                                        (n) => {
                                            n && 200 === n.code && n.data ?
                                                ((this.IsShowNganhHoc = n.data.is_show_nganh_hoc),
                                                    (this.dataDKMH = n.data),
                                                    this.dataDKMH.is_thanh_cong ?
                                                    ((this.dataKetQua = this.dataKetQua.filter(
                                                            (a) =>
                                                            !n.data.id_to_hoc_xoa.includes(
                                                                a.to_hoc.id_to_hoc
                                                            )
                                                        )),
                                                        this.SumMonTinChi(),
                                                        this.dataToHoc_Goc.forEach((a) => {
                                                            n.data.id_to_hoc_xoa.includes(
                                                                    a.id_to_hoc
                                                                ) &&
                                                                a &&
                                                                (this.UpdateData(a, !1),
                                                                    (a.is_dk = !1),
                                                                    this.sendStatus(a, 1));
                                                        }),
                                                        this.spinner.hide("spinner-dkmh")) :
                                                    (this.spinner.hide("spinner-dkmh"),
                                                        this.modalService.show(x.O, {
                                                            initialState: {
                                                                icon: "w",
                                                                message: this.dataDKMH ? .thong_bao_loi,
                                                                button: "OK",
                                                            },
                                                            backdrop: "static",
                                                            keyboard: !1,
                                                            ignoreBackdropClick: !0,
                                                            animated: !1,
                                                            class: "modal-dialog-centered",
                                                        })),
                                                    this.spinner.hide("spinner-dkmh")) :
                                                this.spinner.hide("spinner-dkmh");
                                        },
                                        (n) => {
                                            this.spinner.hide("spinner-dkmh");
                                        }
                                    )) :
                                this.spinner.hide("spinner-dkmh");
                        }
                        SumMonTinChi() {
                            this.dataKetQua && this.dataKetQua ? .length > 0 ?
                                ((this.summondadk = this.dataKetQua ? .length),
                                    (this.sumtinchi = this.dataKetQua ?
                                        .filter((t) => t.to_hoc)
                                        .map((t) => Number(t.to_hoc.so_tc))
                                        .reduce((t, i) => Number(t) + Number(i), 0)),
                                    this.mintinchi > this.sumtinchi &&
                                    (this.messLuuY = `${this.msg.LUU_Y_SO_TIN_CHI_TOI_THIEU_TRONG_HOC_KY} (${this.mintinchi})`)) :
                                ((this.summondadk = this.sumtinchi = 0),
                                    (this.messLuuY = ""));
                        }
                        hoverTooltip(t, i) {
                            t
                                ?
                                t && !t.enable && t ? .gc_enable.length > 0 ?
                                ((this.dataToHocHover = t),
                                    (this.popupTooltip = `${this.dataToHocHover.gc_enable}`)) :
                                ((this.popupTooltip = ""), (t = null)) :
                                i && !i.enable_xoa && i ? .dien_giai_enable_xoa.length > 0 ?
                                ((this.dataKetQuaHover = i),
                                    (this.popupTooltip1 = `${this.dataKetQuaHover.dien_giai_enable_xoa}`)) :
                                ((this.popupTooltip1 = ""), (i = null));
                        }
                        LoadLoaiPhieuNoiTien() {
                            this.spinner.show("spinner-dkmh"),
                                this.http.post(h.L1.LoaiPhieu_NopTien, "").subscribe(
                                    (t) => {
                                        t
                                            ?
                                            ((this.ItemLoaiPhieu = t),
                                                this.spinner.hide("spinner-dkmh")) :
                                            this.spinner.hide("spinner-dkmh");
                                    },
                                    (t) => {
                                        this.spinner.hide("spinner-dkmh");
                                    }
                                );
                        }
                        LuuTachPhieu() {
                            this.IsCotTachPhieu &&
                                this.IsTrongTGDangKy &&
                                (this.spinner.show("spinner-dkmh"),
                                    this.http
                                    .post(h.L1.LuuTachPhieu_NopTien, {
                                        filter: this.dataKetQua,
                                    })
                                    .subscribe(
                                        (i) => {
                                            i
                                                ?
                                                (this.spinner.hide("spinner-dkmh"),
                                                    this.toastr.success(this.msg.XU_LY_THANH_CONG)) :
                                                (this.spinner.hide("spinner-dkmh"),
                                                    this.toastr.error(
                                                        this.msg.THONG_BAO_DL_KHONG_LUU_KIEM_TRA_LAI
                                                    ));
                                        },
                                        (i) => {
                                            this.spinner.hide("spinner-dkmh"),
                                                this.toastr.error(
                                                    this.msg.THONG_BAO_DL_KHONG_LUU_KIEM_TRA_LAI
                                                );
                                        }
                                    ));
                        }
                        XuatPhieuDangKy() {
                            this.load_MonHoc_Da_DangKy(!0);
                        }
                        Load_Dia_Diem_Thi(t) {
                            (this.bsModalRef = this.modalService_dm.show(O.M, {
                                initialState: {
                                    KetQua: t,
                                },
                                backdrop: "static",
                                keyboard: !1,
                                ignoreBackdropClick: !0,
                                class: "modal-lg",
                                animated: !1,
                            })),
                            this.bsModalRef.content.dataDiaDiemOut.subscribe((n) => {
                                200 === n.res && n.data && this.load_MonHoc_Da_DangKy();
                            });
                        }
                        changeLoc() {
                            (this.HideCombo = !0),
                            (this.selected = null),
                            10 === this.selectedLoc &&
                                ((this.HideCombo = !1), (this.cbdata = this.cbMon)),
                                3 === this.selectedLoc &&
                                ((this.HideCombo = !1), (this.cbdata = this.cbKhoa)),
                                4 === this.selectedLoc &&
                                ((this.HideCombo = !1), (this.cbdata = this.cbLop)),
                                this.load_MonHocDangKy(this.selectedLoc);
                        }
                        change() {
                            this.load_MonHocDangKy(this.selectedLoc);
                        }
                        click_sl_conlai(t = {}) {
                            this.router.navigate(["dknguyenvong/", t.ma_mon, t.id_to_hoc]);
                        }
                        ShowModelChiTiet(t = {}) {
                            t && t.tkb && t.tkb.length > 0 ?
                                this.modalService.show(H.D, {
                                    initialState: {
                                        ToHoc: t,
                                    },
                                    backdrop: "static",
                                    keyboard: !1,
                                    ignoreBackdropClick: !0,
                                    animated: !1,
                                    class: "modal-xl modal-dialog-centered",
                                }) :
                                this.toastr.warning(
                                    "M\xf4n h\u1ecdc kh\xf4ng c\xf3 th\u1eddi kh\xf3a bi\u1ec3u"
                                );
                        }
                        customSearchFn(t, i) {
                            return (
                                (t = t ? .toLowerCase()),
                                "vi" !== sessionStorage.getItem("lang") && i ? .ten_eg ?
                                i ? .ma ? .toLowerCase().indexOf(t) > -1 ||
                                i ? .ten_eg ? .toLowerCase().indexOf(t) > -1 ||
                                i ? .ten_eg ? .toLowerCase() === t :
                                i ? .ma ? .toLowerCase().indexOf(t) > -1 ||
                                i ? .ten ? .toLowerCase().indexOf(t) > -1 ||
                                i ? .ten ? .toLowerCase() === t
                            );
                        }
                        setOrder(t, i) {
                            t
                                ?
                                (this.orderby === i &&
                                    (this.reverseOrderby = !this.reverseOrderby),
                                    (this.orderby = i)) :
                                (this.orderby2 === i &&
                                    (this.reverseOrderby2 = !this.reverseOrderby2),
                                    (this.orderby2 = i));
                        }
                        Search() {
                            if (
                                this.sMHBD ? .length > 0 ||
                                this.sMaMon ? .length > 0 ||
                                this.sTenMon ? .length > 0 ||
                                this.sNhomTo ? .length > 0 ||
                                this.sTo ? .length > 0 ||
                                this.sSoTC ? .length > 0 ||
                                this.sLop ? .length > 0 ||
                                this.sSL ? .length >= 0 ||
                                this.sCL ? .length >= 0 ||
                                this.sTKB ? .length >= 0 ||
                                this.sLichThi ? .length >= 0 ||
                                this.sHDT ? .length >= 0
                            ) {
                                const t = this.dataToHoc_NotSearch.filter(
                                    (i) =>
                                    i.id_to_hoc &&
                                    (!(this.sMHBD ? .length > 0) ||
                                        i ? .ma_mon_bd ?
                                        .toLowerCase()
                                        .includes(this.sMHBD ? .toLowerCase())) &&
                                    (!(this.sMaMon ? .length > 0) ||
                                        i ? .ma_mon ?
                                        .toLowerCase()
                                        .includes(this.sMaMon ? .toLowerCase())) &&
                                    (!(this.sTenMon ? .length > 0) ||
                                        i ? .ten_mon ?
                                        .toLowerCase()
                                        .includes(this.sTenMon ? .toLowerCase())) &&
                                    (!(this.sNhomTo ? .length > 0) ||
                                        i ? .nhom_to ?
                                        .toLowerCase()
                                        .includes(this.sNhomTo ? .toLowerCase())) &&
                                    (!(this.sTo ? .length > 0) ||
                                        i ? .to ?
                                        .toLowerCase()
                                        .includes(this.sTo ? .toLowerCase())) &&
                                    (!(this.sSoTC ? .length > 0) ||
                                        i ? .so_tc ?
                                        .toLowerCase()
                                        .includes(this.sSoTC ? .toLowerCase())) &&
                                    (!(this.sLop ? .length > 0) ||
                                        i ? .lop ?
                                        .toLowerCase()
                                        .includes(this.sLop ? .toLowerCase())) &&
                                    (!(this.sSL ? .length > 0) || i ? .sl_cp === +this.sSL) &&
                                    (!(this.sCL ? .length > 0) || i ? .sl_cl === +this.sCL) &&
                                    (!(this.sTKB ? .length > 0) ||
                                        i ? .tkb ?
                                        .toLowerCase()
                                        .includes(this.sTKB ? .toLowerCase())) &&
                                    (!(this.sLichThi ? .length > 0) ||
                                        i.lich_thi ?
                                        .toLowerCase()
                                        .includes(this.sLichThi ? .toLowerCase())) &&
                                    (!(this.sHDT ? .length > 0) ||
                                        i ? .tkb ?
                                        .toLowerCase()
                                        .includes(this.sHDT ? .toLowerCase())) &&
                                    (!(this.sGhiChu ? .length > 0) ||
                                        i ? .gc_to_hoc ?
                                        .toLowerCase()
                                        .includes(this.sGhiChu ? .toLowerCase()))
                                );
                                this.dataToHoc_Filter = t;
                            } else this.dataToHoc_Filter = this.dataToHoc_NotSearch;
                        }
                        DuyetDangKy() {
                            if (this.ValidateFromInput()) {
                                if ("1" === sessionStorage.getItem("type")) {
                                    this.currentUserGV = JSON.parse(
                                        sessionStorage.getItem("CURRENT_USER_GV")
                                    );
                                    const t = {
                                        duyet_kqdk: this.FormDuyetDangKy.get("duyet_kqdk").value,
                                        ds_sinh_vien: [{
                                            id_sv: this.currentUser.id,
                                            ghi_chu: this.FormDuyetDangKy.get("ghi_chu").value,
                                            ma_cvht_duyet: this.currentUserGV ?
                                                this.currentUserGV.userName :
                                                "",
                                        }, ],
                                    };
                                    this.spinner.show("spinner-dkduyet"),
                                        this.http.post(h.L1.GV_DuyetTatCa_DKSV, t).subscribe(
                                            (i) => {
                                                i && 200 === i.code ?
                                                    (this.spinner.hide("spinner-dkduyet"),
                                                        this.toastr.success(i.message)) :
                                                    this.spinner.hide("spinner-dkduyet");
                                            },
                                            (i) => {
                                                this.spinner.hide("spinner-dkduyet");
                                            }
                                        );
                                }
                            } else this.toastr.error(this.msg.THONG_BAO_NHAP_DAY_DU_TT);
                        }
                        ValidateFromInput() {
                            return (
                                (this.submitted = !0),
                                !this.FormDuyetDangKy.invalid &&
                                (0 !== this.FormDuyetDangKy.get("duyet_kqdk").value ||
                                    this.FormDuyetDangKy.get("ghi_chu").value ?
                                    (this.FormDuyetDangKy.controls.ghi_chu.setValidators(
                                            null
                                        ),
                                        this.FormDuyetDangKy.controls.ghi_chu.updateValueAndValidity(),
                                        !0) :
                                    (this.FormDuyetDangKy.controls.ghi_chu.setValidators(
                                            d.kI.required
                                        ),
                                        this.FormDuyetDangKy.controls.ghi_chu.updateValueAndValidity(),
                                        !1))
                            );
                        }
                        ngOnDestroy() {
                            clearTimeout(this.timeoutId);
                        }
                        trackByFn(t) {
                            return t;
                        }
                    }
                    return (
                        (o.ɵfac = function (t) {
                            return new(t || o)(
                                e.ɵɵdirectiveInject(h.Nq),
                                e.ɵɵdirectiveInject(y.t2),
                                e.ɵɵdirectiveInject(T.tT),
                                e.ɵɵdirectiveInject(d.qu),
                                e.ɵɵdirectiveInject(e.ChangeDetectorRef),
                                e.ɵɵdirectiveInject(L._W),
                                e.ɵɵdirectiveInject(f.F0),
                                e.ɵɵdirectiveInject(K.Al),
                                e.ɵɵdirectiveInject(d.qu),
                                e.ɵɵdirectiveInject(N.Or),
                                e.ɵɵdirectiveInject(h.q2),
                                e.ɵɵdirectiveInject(h.e8),
                                e.ɵɵdirectiveInject(h.JR),
                                e.ɵɵdirectiveInject(T.UZ),
                                e.ɵɵdirectiveInject(T.tT),
                                e.ɵɵdirectiveInject(F.H)
                            );
                        }),
                        (o.ɵcmp = e.ɵɵdefineComponent({
                            type: o,
                            selectors: [
                                ["app-dk-monhoc"]
                            ],
                            decls: 18,
                            vars: 16,
                            consts: [
                                [1, "card", "shadow-lg", "mb-2"],
                                [
                                    "name",
                                    "spinner-dkmh",
                                    "type",
                                    "ball-clip-rotate-multiple",
                                    "size",
                                    "medium",
                                    3,
                                    "fullScreen",
                                ],
                                [
                                    1,
                                    "card-header",
                                    "text-white",
                                    "text-uppercase",
                                    "bg-primary",
                                ],
                                [1, "fas", "fa-atom", "pr-2"],
                                [1, "card-body", "p-0"],
                                [
                                    1,
                                    "row",
                                    "d-flex",
                                    "justify-content-center",
                                    "text-nowrap",
                                    "pt-1",
                                ],
                                [
                                    1,
                                    "d-inline-block",
                                    "col-lg-6",
                                    "col-md-11",
                                    "col-sm-12",
                                    "mb-1",
                                ],
                                [
                                    3,
                                    "ngModel",
                                    "searchable",
                                    "clearable",
                                    "trackByFn",
                                    "virtualScroll",
                                    "ngModelChange",
                                    "change",
                                ],
                                [3, "value", 4, "ngFor", "ngForOf"],
                                [4, "ngIf"],
                                [
                                    "class",
                                    "alert alert-danger mb-1",
                                    "role",
                                    "alert",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    "class",
                                    "alert alert-success mb-1",
                                    "role",
                                    "alert",
                                    4,
                                    "ngIf",
                                ],
                                ["class", "card shadow-lg mb-2", 4, "ngIf"],
                                ["id", "printArea", 4, "ngIf"],
                                [3, "value"],
                                [
                                    "bindLabel",
                                    "ten",
                                    "bindValue",
                                    "ma",
                                    3,
                                    "items",
                                    "ngModel",
                                    "clearable",
                                    "virtualScroll",
                                    "searchFn",
                                    "trackByFn",
                                    "placeholder",
                                    "ngClass",
                                    "ngModelChange",
                                    "change",
                                ],
                                ["ng-option-tmp", ""],
                                [2, "font-weight", "600"],
                                [
                                    "bindLabel",
                                    "ten_eg",
                                    "bindValue",
                                    "ma",
                                    3,
                                    "items",
                                    "ngModel",
                                    "clearable",
                                    "virtualScroll",
                                    "searchFn",
                                    "trackByFn",
                                    "placeholder",
                                    "ngClass",
                                    "ngModelChange",
                                    "change",
                                ],
                                ["role", "alert", 1, "alert", "alert-danger", "mb-1"],
                                ["role", "alert", 1, "alert", "alert-success", "mb-1"],
                                [1, "mb-0", "pl-2", "py-2", "mt-3", "table-active"],
                                ["class", "text-danger", 4, "ngIf"],
                                [1, "table-responsive", 3, "ngStyle"],
                                [
                                    1,
                                    "table",
                                    "table-sm",
                                    "table-hover",
                                    "table-bordered",
                                    "mb-0",
                                ],
                                [1, "bg-primary", "text-center", "text-nowrap"],
                                [
                                    1,
                                    "align-middle",
                                    "clickable",
                                    2,
                                    "width",
                                    "3%",
                                    3,
                                    "click",
                                ],
                                [3, "ngClass"],
                                [
                                    "style",
                                    "width: 5%;",
                                    "class",
                                    "align-middle clickable",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    "clickable",
                                    2,
                                    "width",
                                    "5%",
                                    3,
                                    "click",
                                ],
                                [1, "align-middle", "clickable", "custenmon", 3, "click"],
                                [1, "align-middle", 2, "width", "5%", 3, "click"],
                                [1, "align-middle", 2, "width", "4%", 3, "click"],
                                [
                                    "style",
                                    "width: 6%;",
                                    "class",
                                    "align-middle text-nowrap cuslop",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [1, "align-middle", 2, "width", "20%", 3, "click"],
                                [
                                    "style",
                                    "width: 16%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    "style",
                                    "width: 10%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    "style",
                                    "width: 5%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [1, "m-0", "p-0", "text-center", "align-middle"],
                                [1, "fas", "fa-search", "text-primary"],
                                ["class", "m-0 p-0", 4, "ngIf"],
                                [1, "m-0", "p-0"],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "25",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "200",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "9",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "500",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [1, "text-danger"],
                                [
                                    1,
                                    "align-middle",
                                    "clickable",
                                    2,
                                    "width",
                                    "5%",
                                    3,
                                    "click",
                                ],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    "cuslop",
                                    2,
                                    "width",
                                    "6%",
                                    3,
                                    "click",
                                ],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "16%",
                                    3,
                                    "click",
                                ],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "10%",
                                    3,
                                    "click",
                                ],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "5%",
                                    3,
                                    "click",
                                ],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "50",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [
                                    "type",
                                    "text",
                                    "autocomplete",
                                    "off",
                                    "maxlength",
                                    "100",
                                    "placeholder",
                                    "...",
                                    1,
                                    "form-control",
                                    "form-control-sm",
                                    "small",
                                    "text-secondary",
                                    3,
                                    "ngModel",
                                    "ngModelChange",
                                    "input",
                                ],
                                [
                                    "colspan",
                                    "100",
                                    1,
                                    "table-secondary",
                                    "font-italic",
                                    "text-muted",
                                    "text-center",
                                    "align-middle",
                                ],
                                [3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                                [1, "text-center", "align-middle", 3, "ngClass", "mouseover"],
                                [
                                    "placement",
                                    "top",
                                    1,
                                    "clickable",
                                    3,
                                    "formGroup",
                                    "tooltip",
                                ],
                                [
                                    1,
                                    "custom-control",
                                    "custom-checkbox",
                                    "text-center",
                                    "align-middle",
                                    "ml-1",
                                    "clickable",
                                ],
                                [
                                    "type",
                                    "checkbox",
                                    1,
                                    "custom-control-input",
                                    "clickable",
                                    3,
                                    "id",
                                    "disabled",
                                    "value",
                                    "ngModel",
                                    "ngModelOptions",
                                    "ngModelChange",
                                    "change",
                                ],
                                [
                                    1,
                                    "custom-control-label",
                                    "m-0",
                                    "p-0",
                                    "clickable",
                                    3,
                                    "for",
                                ],
                                ["class", "text-center align-middle", 4, "ngIf"],
                                [1, "text-center", "align-middle", "text-nowrap"],
                                [1, "align-middle", "text-left"],
                                [1, "text-center", "align-middle", 2, "font-weight", "600"],
                                ["class", "text-center align-middle text-nowrap", 4, "ngIf"],
                                [1, "text-center", "align-middle"],
                                [1, "text-center", "align-middle", "text-danger"],
                                [
                                    "routerLinkActive",
                                    "router-link-active",
                                    "class",
                                    "link-dark text-decoration-none clickable",
                                    3,
                                    "title",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [1, "align-middle", "text-nowrap", "text-left"],
                                [3, "innerHTML"],
                                [
                                    "class",
                                    "align-middle text-left",
                                    3,
                                    "innerHTML",
                                    4,
                                    "ngIf",
                                ],
                                ["class", "text-left align-middle", 4, "ngIf"],
                                [
                                    "routerLinkActive",
                                    "router-link-active",
                                    1,
                                    "link-dark",
                                    "text-decoration-none",
                                    "clickable",
                                    3,
                                    "title",
                                    "click",
                                ],
                                [1, "align-middle", "text-left", 3, "innerHTML"],
                                [1, "text-left", "align-middle"],
                                [1, "mb-0", "pl-2", "py-2", "mt-4", "table-active"],
                                ["class", "text-danger ml-1", 4, "ngIf"],
                                [1, "align-middle", "text-center"],
                                [
                                    1,
                                    "bg-primary",
                                    "text-white",
                                    "text-center",
                                    "align-middle",
                                ],
                                [1, "align-middle", 2, "width", "3%"],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "4%",
                                    3,
                                    "click",
                                ],
                                [
                                    "style",
                                    "width: 4%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    "style",
                                    "width: 6%;",
                                    "class",
                                    "align-middle",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [1, "align-middle", "cuslop", 2, "width", "6%", 3, "click"],
                                [1, "align-middle", "cusngay", 2, "width", "10%"],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "7%",
                                    3,
                                    "click",
                                ],
                                [
                                    "style",
                                    "width: 15%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    3,
                                    "active",
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [1, "align-middle", "text-nowrap", 2, "width", "6%"],
                                [
                                    "style",
                                    "width: 10%;",
                                    "class",
                                    "align-middle text-nowrap",
                                    4,
                                    "ngIf",
                                ],
                                [1, "text-danger", "ml-1"],
                                [1, "align-middle", 2, "width", "6%", 3, "click"],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    2,
                                    "width",
                                    "15%",
                                    3,
                                    "click",
                                ],
                                [1, "align-middle", "text-nowrap", 2, "width", "10%"],
                                [1, "table-secondary"],
                                ["colspan", "100", 1, "text-right", "align-middle", "py-2"],
                                [1, "btn", "btn-outline-primary", "text-nowrap", 3, "click"],
                                [1, "fas", "fa-file-export", "mr-1"],
                                [
                                    "class",
                                    "btn btn-outline-primary text-nowrap ml-1",
                                    3,
                                    "click",
                                    4,
                                    "ngIf",
                                ],
                                [3, "ngClass", "click", "mouseover"],
                                [
                                    "placement",
                                    "top",
                                    1,
                                    "fas",
                                    "fa-times",
                                    "fa-lg",
                                    3,
                                    "tooltip",
                                ],
                                [1, "align-middle", "text-nowrap", "text-center"],
                                ["class", "align-middle text-center", 4, "ngIf"],
                                ["class", "align-middle text-right", 4, "ngIf"],
                                [1, "align-middle"],
                                ["class", "align-middle", 4, "ngIf"],
                                ["class", "align-middle text-center clickable", 4, "ngIf"],
                                [3, "ngClass", "click"],
                                [1, "fas", "fa-list-ul", "fa-lg"],
                                [1, "align-middle", "text-right"],
                                [1, "align-middle", "text-center", "clickable"],
                                [1, "text-left"],
                                [1, "text-left", 3, "routerLink", "click"],
                                [1, "fa-solid", "fa-location-dot", "mr-1"],
                                [
                                    "appendTo",
                                    "body",
                                    "bindLabel",
                                    "ten_trang_thai",
                                    "bindValue",
                                    "ItemLoaiPhieu",
                                    3,
                                    "items",
                                    "trackByFn",
                                    "selectOnTab",
                                    "searchable",
                                    "clearable",
                                    "virtualScroll",
                                    "ngModel",
                                    "disabled",
                                    "ngModelChange",
                                ],
                                [
                                    1,
                                    "btn",
                                    "btn-outline-primary",
                                    "text-nowrap",
                                    "ml-1",
                                    3,
                                    "click",
                                ],
                                [1, "far", "fa-save", "mr-1"],
                                [
                                    "name",
                                    "spinner-dkduyet",
                                    "type",
                                    "ball-clip-rotate-multiple",
                                    "size",
                                    "medium",
                                    3,
                                    "fullScreen",
                                ],
                                [1, "card-header", "text-white", "bg-primary"],
                                [1, "card-body", "p-2"],
                                [3, "formGroup"],
                                [1, "row", "text-nowrap"],
                                ["for", "tt", 1, "col-sm-3", "col-form-label"],
                                [1, "col-sm-5"],
                                [
                                    "formControlName",
                                    "duyet_kqdk",
                                    "bindLabel",
                                    "name",
                                    "bindValue",
                                    "id",
                                    3,
                                    "items",
                                    "virtualScroll",
                                    "trackByFn",
                                    "selectOnTab",
                                    "searchable",
                                    "clearable",
                                ],
                                [1, "row", "py-1", "text-nowrap"],
                                ["for", "cd", 1, "col-sm-3", "col-form-label"],
                                [1, "col-sm-9"],
                                [
                                    "id",
                                    "nd",
                                    "rows",
                                    "4",
                                    "maxlength",
                                    "2000",
                                    "formControlName",
                                    "ghi_chu",
                                    "autocomplete",
                                    "off",
                                    1,
                                    "form-control",
                                    3,
                                    "ngClass",
                                ],
                                ["class", "invalid-feedback", 4, "ngIf"],
                                ["class", "row py-1 text-center", 4, "ngIf"],
                                [1, "invalid-feedback"],
                                [1, "row", "py-1", "text-center"],
                                [1, "col-sm-12"],
                                [1, "btn", "btn-outline-primary", "mr-2", 3, "click"],
                                ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"],
                                [1, "btn", "btn-outline-primary", 3, "click"],
                                ["id", "printArea"],
                                [1, "d-none", "d-print-block", "mb-2"],
                                [1, "col-sm-6", "text-center"],
                                [
                                    3,
                                    "margin",
                                    "allowEmptyString",
                                    "qrdata",
                                    "width",
                                    "errorCorrectionLevel",
                                    "elementType",
                                ],
                                [
                                    1,
                                    "text-center",
                                    "font-weight-bold",
                                    "mt-3",
                                    2,
                                    "margin",
                                    "1px",
                                ],
                                [1, "text-center", "mt-1", 2, "margin", "1px"],
                                [1, "table-responsive"],
                                [1, "table", "table-sm", "table-hover", "table-bordered"],
                                [1, "align-middle", "text-center", "text-nowrap"],
                                [
                                    1,
                                    "align-middle",
                                    "text-nowrap",
                                    "clickable",
                                    2,
                                    "width",
                                    "100px",
                                ],
                                [1, "align-middle", "clickable"],
                                [1, "align-middle", 2, "width", "7%"],
                                [1, "align-middle", 2, "width", "4%"],
                                [1, "align-middle", "cuslop", 2, "min-width", "7%"],
                                [1, "align-middle", "cusngay", 2, "width", "15%"],
                                [1, "col-sm-1"],
                                [1, "col-sm-5", "font-weight-bold"],
                                [4, "ngFor", "ngForOf", "ngForTrackBy"],
                                [1, "align-middle", "text-nowrap"],
                            ],
                            template: function (t, i) {
                                1 & t &&
                                    (e.ɵɵelementStart(0, "div", 0),
                                        e.ɵɵelement(1, "ngx-spinner", 1),
                                        e.ɵɵelementStart(2, "div", 2),
                                        e.ɵɵelement(3, "i", 3),
                                        e.ɵɵtext(4),
                                        e.ɵɵelementEnd(),
                                        e.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(
                                            8,
                                            "ng-select",
                                            7
                                        ),
                                        e.ɵɵlistener("ngModelChange", function (a) {
                                            return (i.selectedLoc = a);
                                        })("change", function () {
                                            return i.changeLoc();
                                        }),
                                        e.ɵɵtemplate(9, A, 2, 2, "ng-option", 8),
                                        e.ɵɵelementEnd()(),
                                        e.ɵɵelementStart(10, "div", 6),
                                        e.ɵɵtemplate(11, R, 3, 2, "ng-container", 9),
                                        e.ɵɵelementEnd()(),
                                        e.ɵɵtemplate(12, J, 2, 1, "div", 10),
                                        e.ɵɵtemplate(13, z, 2, 1, "div", 11),
                                        e.ɵɵtemplate(14, ke, 66, 87, "ng-container", 9),
                                        e.ɵɵtemplate(15, Ze, 45, 62, "ng-container", 9),
                                        e.ɵɵelementEnd()(),
                                        e.ɵɵtemplate(16, rt, 21, 16, "div", 12),
                                        e.ɵɵtemplate(17, dt, 38, 20, "div", 13)),
                                    2 & t &&
                                    (e.ɵɵadvance(1),
                                        e.ɵɵproperty("fullScreen", !1),
                                        e.ɵɵadvance(3),
                                        e.ɵɵtextInterpolate2(
                                            "",
                                            i.msg.DKMH,
                                            " ",
                                            i.Titlehocky,
                                            " "
                                        ),
                                        e.ɵɵadvance(4),
                                        e.ɵɵproperty("ngModel", i.selectedLoc)("searchable", !1)(
                                            "clearable",
                                            !1
                                        )("trackByFn", i.trackByFn)("virtualScroll", !0),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngForOf", i.cbDieuKienLoc),
                                        e.ɵɵadvance(2),
                                        e.ɵɵproperty("ngIf", !i.HideCombo),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.messError),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.messInfo),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.dataToHoc_Filter),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.dataKetQua),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.addinduyetkqdk),
                                        e.ɵɵadvance(1),
                                        e.ɵɵproperty("ngIf", i.isPrintArea));
                            },
                            dependencies: [
                                d._Y,
                                d.Fj,
                                d.Wl,
                                d.JJ,
                                d.JL,
                                d.nD,
                                d.On,
                                g.NgClass,
                                g.NgForOf,
                                g.NgIf,
                                g.NgStyle,
                                d.sg,
                                d.u,
                                y.Ro,
                                b.V,
                                k.w9,
                                k.jq,
                                k.ir,
                                D.i9,
                                f.yS,
                                f.Od,
                                U.z,
                                g.LowerCasePipe,
                                g.DecimalPipe,
                                g.DatePipe,
                                S.T,
                            ],
                            styles: [
                                "thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0px;background:inherit;z-index:100}  .tooltip-inner{text-align:left;opacity:.8}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{visibility:hidden;display:none}thead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{visibility:visible;display:-webkit-inline-flex;display:inline-flex}@media (max-width: 768px){  bs-tooltip-container{display:none!important;visibility:hidden}th.custenmon[_ngcontent-%COMP%]{min-width:200px}th.cuslop[_ngcontent-%COMP%]{min-width:80px}th.cusngay[_ngcontent-%COMP%]{min-width:170px}}  hr{margin-top:1.5px;margin-bottom:1.5px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px}.bgr[_ngcontent-%COMP%]{background-color:#e8e8e8}",
                            ],
                        })),
                        o
                    );
                })(),
            }, ];
            let mt = (() => {
                    class o {}
                    return (
                        (o.ɵfac = function (t) {
                            return new(t || o)();
                        }),
                        (o.ɵmod = e.ɵɵdefineNgModule({
                            type: o,
                        })),
                        (o.ɵinj = e.ɵɵdefineInjector({
                            imports: [f.Bz.forChild(ht), d.u5, f.Bz],
                        })),
                        o
                    );
                })(),
                pt = (() => {
                    class o {}
                    return (
                        (o.ɵfac = function (t) {
                            return new(t || o)();
                        }),
                        (o.ɵmod = e.ɵɵdefineNgModule({
                            type: o,
                        })),
                        (o.ɵinj = e.ɵɵdefineInjector({
                            providers: [{
                                    provide: E.TP,
                                    useClass: h.zu,
                                    multi: !0,
                                },
                                {
                                    provide: g.LocationStrategy,
                                    useClass: g.HashLocationStrategy,
                                },
                            ],
                            imports: [
                                V.m,
                                d.u5,
                                g.CommonModule,
                                d.UX,
                                y.ef,
                                b.N,
                                k.A0,
                                S.l,
                                D.z8.forRoot(),
                                mt,
                            ],
                        })),
                        o
                    );
                })();
        },
    },
]);