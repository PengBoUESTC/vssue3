import { createI18n as ye, useI18n as H } from "vue-i18n";
import { h as F, defineComponent as R, ref as L, inject as M, computed as g, openBlock as r, createElementBlock as u, normalizeClass as V, createElementVNode as a, renderSlot as we, toDisplayString as p, withDirectives as w, withKeys as ue, withModifiers as me, vModelText as de, unref as n, createCommentVNode as I, Fragment as E, renderList as D, createVNode as _, vShow as b, createTextVNode as B, nextTick as Pe, vModelSelect as Q, withCtx as U, createBlock as P, onBeforeMount as pe, onBeforeUnmount as ge, reactive as j, watch as K, normalizeStyle as Ie, resolveDynamicComponent as be, provide as Te, onMounted as Ae } from "vue";
import { formatDateTime as X, getCleanURL as Re } from "@vssue/utils";
/*!
 * vssue3 - A vue-powered issue-based comment plugin, based on 'vssue'
 *
 * @version v0.0.0
 * @link undefined
 * @license MIT
 * @copyright 2018-2024 meteorlxy
 */
var he = /* @__PURE__ */ ((i) => (i.en_US = "en-US", i.fr_FR = "fr-FR", i.he_IL = "he-IL", i.ja_JP = "ja-JP", i.ko_KR = "ko-KR", i.pt_BR = "pt-BR", i.zh_CN = "zh-CN", i.zh_TW = "zh-TW", i))(he || {});
const qe = "Login with {platform}", xe = "Logout", Le = "Current User", ze = "Loading", Ue = "Submit", Me = "Submitting", Se = "Submit Comment", Fe = "Cancel", Ve = "Edit", Ne = "Edit Mode", He = "Reply", Ge = "Heart", Ee = "Like", De = "Unlike", Be = "Comments per page", Ke = "Click to change the sort direction", je = "Page", Je = "Previous Page", We = "Next Page", Oe = "Comments | {count} Comment | {count} Comments", Qe = "Login with {platform} account to leave a comment", Xe = "Leave a comment. Styling with Markdown is supported. Ctrl + Enter to submit.", Ye = "Login to leave a comment. Styling with Markdown is supported. ", Ze = "Failed to load comments", et = "Initializing...", tt = "Click to create issue", st = "Loading comments...", nt = "Login to view comments", ot = "No comments yet. Leave the first comment !", it = "Already given '{reaction}' reaction", at = "Confirm to delete this comment ?", rt = "Failed to delete comment", Y = {
  login: qe,
  logout: xe,
  currentUser: Le,
  loading: ze,
  submit: Ue,
  submitting: Me,
  submitComment: Se,
  cancel: Fe,
  edit: Ve,
  editMode: Ne,
  delete: "Delete",
  reply: He,
  heart: Ge,
  like: Ee,
  unlike: De,
  perPage: Be,
  sort: Ke,
  page: je,
  prev: Je,
  next: We,
  comments: Oe,
  loginToComment: Qe,
  placeholder: Xe,
  noLoginPlaceHolder: Ye,
  failed: Ze,
  initializing: et,
  issueNotCreated: tt,
  loadingComments: st,
  loginRequired: nt,
  noComments: ot,
  reactionGiven: it,
  deleteConfirm: at,
  deleteFailed: rt
}, lt = "使用 {platform} 登录", ct = "退出登录", ut = "当前用户", mt = "加载中", dt = "提交", pt = "发表中", gt = "发表评论", ht = "取消", vt = "编辑", $t = "编辑模式", ft = "回复", Ct = "喜欢", kt = "赞", _t = "踩", yt = "每页评论数", wt = "点击改变排序方式", Pt = "页数", It = "上一页", bt = "下一页", Tt = "评论 | {count} 条评论 | {count} 条评论", At = "使用 {platform} 帐号登录后发表评论", Rt = "留下你的评论丨支持 Markdown 语法丨Ctrl + Enter 发表评论", qt = "登录后才能发表评论丨支持 Markdown 语法", xt = "评论加载失败", Lt = "正在初始化...", zt = "点击创建 Issue", Ut = "正在加载评论...", Mt = "登录后查看评论", St = "还没有评论，来发表第一条评论吧！", Ft = "已经添加过 '{reaction}' 了", Vt = "确认要删除该评论吗？", Nt = "评论删除失败", Z = {
  login: lt,
  logout: ct,
  currentUser: ut,
  loading: mt,
  submit: dt,
  submitting: pt,
  submitComment: gt,
  cancel: ht,
  edit: vt,
  editMode: $t,
  delete: "删除",
  reply: ft,
  heart: Ct,
  like: kt,
  unlike: _t,
  perPage: yt,
  sort: wt,
  page: Pt,
  prev: It,
  next: bt,
  comments: Tt,
  loginToComment: At,
  placeholder: Rt,
  noLoginPlaceHolder: qt,
  failed: xt,
  initializing: Lt,
  issueNotCreated: zt,
  loadingComments: Ut,
  loginRequired: Mt,
  noComments: St,
  reactionGiven: Ft,
  deleteConfirm: Vt,
  deleteFailed: Nt
}, Ht = "使用 {platform} 登入", Gt = "登出", Et = "當前用戶", Dt = "載入中", Bt = "提交", Kt = "發表中", jt = "發表評論", Jt = "取消", Wt = "編輯", Ot = "編輯模式", Qt = "回覆", Xt = "喜歡", Yt = "贊", Zt = "踩", es = "每頁評論數", ts = "點擊改變排序方式", ss = "頁數", ns = "上一頁", os = "下一頁", is = "評論 | {count} 條評論 | {count} 條評論", as = "使用 {platform} 帳號登入後發表評論", rs = "留下你的評論丨支持 Markdown 語法丨Ctrl + Enter 發表評論", ls = "登入後才能發表評論丨支持 Markdown 語法", cs = "評論加載失敗", us = "正在初始化...", ms = "點擊創建 Issue", ds = "正在加載評論...", ps = "登入後查看評論", gs = "還沒有評論，來發表第一條評論吧！", hs = "已經點擊過 '{reaction}' 了", vs = "確認要刪除該評論嗎？", $s = "評論刪除失敗", fs = {
  login: Ht,
  logout: Gt,
  currentUser: Et,
  loading: Dt,
  submit: Bt,
  submitting: Kt,
  submitComment: jt,
  cancel: Jt,
  edit: Wt,
  editMode: Ot,
  delete: "刪除",
  reply: Qt,
  heart: Xt,
  like: Yt,
  unlike: Zt,
  perPage: es,
  sort: ts,
  page: ss,
  prev: ns,
  next: os,
  comments: is,
  loginToComment: as,
  placeholder: rs,
  noLoginPlaceHolder: ls,
  failed: cs,
  initializing: us,
  issueNotCreated: ms,
  loadingComments: ds,
  loginRequired: ps,
  noComments: gs,
  reactionGiven: hs,
  deleteConfirm: vs,
  deleteFailed: $s
}, Cs = "Entrar com {platform}", ks = "Sair", _s = "Usuário Atual", ys = "Carregando", ws = "Enviar", Ps = "Enviando", Is = "Enviar Comentário", bs = "Cancelar", Ts = "Editar", As = "Modo de Edição", Rs = "Responder", qs = "Heart", xs = "Like", Ls = "Unlike", zs = "Comentários por página", Us = "Clique para alterar a ordenação", Ms = "Página", Ss = "Página Anterior", Fs = "Próxima Página", Vs = "Comentários | {count} Comentário | {count} Comentários", Ns = "Entre com uma conta {platform} para deixar um comentário", Hs = "Deixe um comentário. Estilos com Markdown suportados. Ctrl + Enter para enviar.", Gs = "Entre para deixar um comentário. Estilos com Markdown suportados. ", Es = "Falha ao carregar comentários", Ds = "Inicializando...", Bs = "Click to create issue", Ks = "Carregando comentários...", js = "Entrar para visualizar comentários", Js = "Nenhum comentário. Deixe o primeiro comentário!", Ws = "Já reagiu com '{reaction}'", Os = "Apagar este comentário?", Qs = "Falha ao apagar comentário", ee = {
  login: Cs,
  logout: ks,
  currentUser: _s,
  loading: ys,
  submit: ws,
  submitting: Ps,
  submitComment: Is,
  cancel: bs,
  edit: Ts,
  editMode: As,
  delete: "Apagar",
  reply: Rs,
  heart: qs,
  like: xs,
  unlike: Ls,
  perPage: zs,
  sort: Us,
  page: Ms,
  prev: Ss,
  next: Fs,
  comments: Vs,
  loginToComment: Ns,
  placeholder: Hs,
  noLoginPlaceHolder: Gs,
  failed: Es,
  initializing: Ds,
  issueNotCreated: Bs,
  loadingComments: Ks,
  loginRequired: js,
  noComments: Js,
  reactionGiven: Ws,
  deleteConfirm: Os,
  deleteFailed: Qs
}, Xs = "{platform} でログイン", Ys = "ログアウト", Zs = "現在のユーザー", en = "読み込み中", tn = "送信", sn = "送信中", nn = "コメントを送信", on = "キャンセル", an = "編集", rn = "編集モード", ln = "返信", cn = "ハート", un = "高評価", mn = "低評価", dn = "コメント/ページ", pn = "並び順を変更するにはクリックしてください", gn = "ページ", hn = "前のページ", vn = "次のページ", $n = "コメント | {count} コメント | {count} コメント", fn = "コメントを残すには {platform} アカウントでログインしてください。", Cn = "コメントを残してください。Markdown 記法をサポートしています。 Ctrl + Enter で送信できます。", kn = "コメントを残すにはログインしてください。マークダウン記法をサポートしています。", _n = "コメントの読み込みに失敗しました", yn = "初期化中...", wn = "Click to create issue", Pn = "コメントの読み込み中...", In = "コメントを見るにはログインしてください", bn = "まだコメントがありません。最初のコメントを残しましょう！", Tn = "既に '{reaction}' のリアクションをしています", An = "本当にコメントを削除してもいいですか？", Rn = "コメントの削除に失敗しました", te = {
  login: Xs,
  logout: Ys,
  currentUser: Zs,
  loading: en,
  submit: tn,
  submitting: sn,
  submitComment: nn,
  cancel: on,
  edit: an,
  editMode: rn,
  delete: "削除",
  reply: ln,
  heart: cn,
  like: un,
  unlike: mn,
  perPage: dn,
  sort: pn,
  page: gn,
  prev: hn,
  next: vn,
  comments: $n,
  loginToComment: fn,
  placeholder: Cn,
  noLoginPlaceHolder: kn,
  failed: _n,
  initializing: yn,
  issueNotCreated: wn,
  loadingComments: Pn,
  loginRequired: In,
  noComments: bn,
  reactionGiven: Tn,
  deleteConfirm: An,
  deleteFailed: Rn
}, qn = "התחברו עם {platform}", xn = "התנתקו", Ln = "משתמש/ת נוכחי/ת", zn = "טוען", Un = "שליחה", Mn = "שולח", Sn = "שליחת תגובה", Fn = "ביטל", Vn = "עריכה", Nn = "מצב עריכה", Hn = "תשובה", Gn = "לב", En = "לייק", Dn = "אנלייק", Bn = "תגובות לדף", Kn = "לחצו כדי לשנות את כיוון המיון", jn = "דף", Jn = "הדף הקודם", Wn = "הדף הבא", On = "תגובות | {count} תגובה | {count} תגובות", Qn = "התחברו עם חשבון {platform} כדי להשאיר תגובה", Xn = "השאירו תגובה. יש תמיכה בעיצוב בעזרת Markdown. Ctrl + Enter כדי לשלוח.", Yn = "התחברו כדי להשאיר תגובה. יש תמיכה בעיצוב בעזרת Markdown. ", Zn = "כשלון בטעינת התגובות", eo = "מאתחל...", to = "לחצו ליצירת issue", so = "טוען תגובות...", no = "התחברו כדי לצפות בתגובות", oo = "עדיין אין תגובות. השאירו תגובה ראשונה !", io = "כבר ניתן חיווי '{reaction}'", ao = "בטוחים במחיקת התגובה ?", ro = "כשלון במחיקת התגובה", se = {
  login: qn,
  logout: xn,
  currentUser: Ln,
  loading: zn,
  submit: Un,
  submitting: Mn,
  submitComment: Sn,
  cancel: Fn,
  edit: Vn,
  editMode: Nn,
  delete: "מחיקה",
  reply: Hn,
  heart: Gn,
  like: En,
  unlike: Dn,
  perPage: Bn,
  sort: Kn,
  page: jn,
  prev: Jn,
  next: Wn,
  comments: On,
  loginToComment: Qn,
  placeholder: Xn,
  noLoginPlaceHolder: Yn,
  failed: Zn,
  initializing: eo,
  issueNotCreated: to,
  loadingComments: so,
  loginRequired: no,
  noComments: oo,
  reactionGiven: io,
  deleteConfirm: ao,
  deleteFailed: ro
}, lo = "{platform} 로그인", co = "로그아웃", uo = "현재 유저", mo = "로딩중", po = "등록", go = "등록중", ho = "댓글 등록", vo = "취소", $o = "편집", fo = "편집 모드", Co = "회신", ko = "하트", _o = "좋아요", yo = "싫어요", wo = "댓글 / 페이지", Po = "클릭하여 정렬 방식 변경", Io = "페이지", bo = "이전 페이지", To = "다음 페이지", Ao = "댓글 | {count}개의 댓글 | {count}개의 댓글", Ro = "댓글을 남기려면 {platform} 로그인이 필요합니다.", qo = "댓글을 입력해주세요. 마크다운 문법을 지원합니다. Ctrl + Enter 단축키로 등록됩니다.", xo = "로그인 후 댓글을 남겨주세요. 마크다운 문법을 지원합니다.", Lo = "댓글 불러오기에 실패하였습니다", zo = "초기화중...", Uo = "클릭하여 새 이슈를 생성합니다", Mo = "댓글을 불러오는 중입니다...", So = "댓글을 보려면 로그인이 필요합니다", Fo = "댓글이 하나도 없습니다. 첫 댓글을 남겨보세요!", Vo = "이미 '{reaction}' 반응을 남겼습니다", No = "정말 댓글을 삭제하시겠습니까?", Ho = "댓글 삭제에 실패하였습니다", ne = {
  login: lo,
  logout: co,
  currentUser: uo,
  loading: mo,
  submit: po,
  submitting: go,
  submitComment: ho,
  cancel: vo,
  edit: $o,
  editMode: fo,
  delete: "삭제",
  reply: Co,
  heart: ko,
  like: _o,
  unlike: yo,
  perPage: wo,
  sort: Po,
  page: Io,
  prev: bo,
  next: To,
  comments: Ao,
  loginToComment: Ro,
  placeholder: qo,
  noLoginPlaceHolder: xo,
  failed: Lo,
  initializing: zo,
  issueNotCreated: Uo,
  loadingComments: Mo,
  loginRequired: So,
  noComments: Fo,
  reactionGiven: Vo,
  deleteConfirm: No,
  deleteFailed: Ho
}, Go = "Se connecter avec {platform}", Eo = "Se déconnecter", Do = "Utilisateur actuel", Bo = "Chargement", Ko = "Poster", jo = "En cours d'envoi", Jo = "Ajouter un commentaire", Wo = "Annuler", Oo = "Éditer", Qo = "Mode édition", Xo = "Répondre", Yo = "Adorer", Zo = "Approuver", ei = "Désapprouver", ti = "Commentaires par pages", si = "Cliquez pour changer l'ordre de tri", ni = "Page", oi = "Page précédente", ii = "Page suivante", ai = "Commentaires | {count} Commentaires | {count} Commentaires", ri = "Se connecter avec votre compte {platform} pour laisser un commentaire", li = "Laisser un commentaire. Le Markdown est supporté. Ctrl + Enter pour poster.", ci = "Connectez-vous pour laisser un commentaire. Le Markdown est supporté. ", ui = "Impossible de charger les commentaires", mi = "Initialisation...", di = "Cliquez pour créer un commentaire", pi = "Chargment des commentaires...", gi = "Se connecter pour voir les commentaires", hi = "Il n'y a pas de commentaire pour le moment. Laissez le premier commentaire !", vi = "Réaction '{reaction}' déjà donnée", $i = "Voulez-vous vraiment supprimer ce commentaire?", fi = "Impossible de créer le commentaire", oe = {
  login: Go,
  logout: Eo,
  currentUser: Do,
  loading: Bo,
  submit: Ko,
  submitting: jo,
  submitComment: Jo,
  cancel: Wo,
  edit: Oo,
  editMode: Qo,
  delete: "Supprimer",
  reply: Xo,
  heart: Yo,
  like: Zo,
  unlike: ei,
  perPage: ti,
  sort: si,
  page: ni,
  prev: oi,
  next: ii,
  comments: ai,
  loginToComment: ri,
  placeholder: li,
  noLoginPlaceHolder: ci,
  failed: ui,
  initializing: mi,
  issueNotCreated: di,
  loadingComments: pi,
  loginRequired: gi,
  noComments: hi,
  reactionGiven: vi,
  deleteConfirm: $i,
  deleteFailed: fi
}, J = ye({
  locale: "en",
  legacy: !1,
  fallbackLocale: "en",
  messages: {
    en: Y,
    "en-US": Y,
    zh: Z,
    "zh-CN": Z,
    "zh-TW": fs,
    pt: ee,
    "pt-BR": ee,
    ja: te,
    "ja-JP": te,
    he: se,
    "he-IL": se,
    ko: ne,
    "ko-KR": ne,
    fr: oe,
    "fr-FR": oe
  }
}), Ci = () => he.en_US, ie = (i) => (J.global.locale.value = i, i), N = (i, e) => {
  const { group: t = !1, tag: s = "div" } = i, { slots: o } = e;
  return F(
    t ? "TransitionGroup" : "Transition",
    {
      props: {
        tag: s,
        name: "fade",
        mode: "out-in",
        appear: !0
      }
    },
    o
  );
};
function ki(i) {
  return { all: i = i || /* @__PURE__ */ new Map(), on: function(e, t) {
    var s = i.get(e);
    s ? s.push(t) : i.set(e, [t]);
  }, off: function(e, t) {
    var s = i.get(e);
    s && (t ? s.splice(s.indexOf(t) >>> 0, 1) : i.set(e, []));
  }, emit: function(e, t) {
    var s = i.get(e);
    s && s.slice().map(function(o) {
      o(t);
    }), (s = i.get("*")) && s.slice().map(function(o) {
      o(e, t);
    });
  } };
}
const W = ki(), A = (i, e) => {
  W.emit(i, e);
}, ve = (i, e) => {
  W.on(i, e);
}, $e = (i, e) => {
  W.off(i, e);
}, z = (i) => {
  const { name: e, title: t } = i;
  return F(
    "svg",
    {
      class: ["vssue-icon", `vssue-icon-${e}`],
      attrs: {
        "aria-hidden": "true"
      }
    },
    [
      F("title", t),
      F("use", {
        attrs: {
          "xlink:href": `#vssue-icon-${e}`
        }
      })
    ]
  );
}, _i = { class: "vssue-comment-avatar" }, yi = ["href", "title"], wi = ["src", "alt"], Pi = { class: "vssue-comment-body" }, Ii = { class: "vssue-comment-header" }, bi = { class: "vssue-comment-author" }, Ti = ["href", "title"], Ai = { class: "vssue-comment-created-at" }, Ri = { class: "vssue-comment-main" }, qi = ["rows"], xi = ["innerHTML"], Li = { class: "vssue-comment-footer" }, zi = {
  key: 0,
  class: "vssue-comment-hint"
}, Ui = {
  key: 1,
  class: "vssue-comment-reactions"
}, Mi = ["title", "onClick"], Si = { class: "vssue-comment-reaction-number" }, Fi = { class: "vssue-comment-operations" }, Vi = ["title"], Ni = ["title"], Hi = /* @__PURE__ */ R({
  __name: "VssueComment",
  props: {
    comment: {}
  },
  setup(i) {
    const { t: e } = H(), t = L(), s = i, o = M("vssue"), l = L(!1), m = L(s.comment.contentRaw), C = L([]), c = L(!1), d = L(!1), y = g(() => o.user ? o.user.username : null), f = g(() => s.comment.content), T = g(() => s.comment.author), G = g(() => X(s.comment.createdAt));
    g(() => X(s.comment.updatedAt));
    const q = g(() => !!(o.API && o.API.platform.meta.reactable && s.comment.reactions && !l.value)), k = g(() => ["heart", "like", "unlike"]), S = g(() => m.value.split(`
`).length - 1), x = g(() => S.value < 3 ? 5 : S.value + 2), fe = async ({
      reaction: v
    }) => {
      try {
        if (C.value.includes(v))
          return;
        C.value.push(v), await o.postCommentReaction({
          commentId: s.comment.id,
          reaction: v
        }) || A(
          "error",
          new Error(
            e("reactionGiven", {
              reaction: e(v)
            })
          )
        );
        const $ = await o.getCommentReactions({
          commentId: s.comment.id
        });
        $ && (s.comment.reactions = $);
      } finally {
        C.value.splice(
          C.value.findIndex((h) => h === v),
          1
        );
      }
    }, Ce = () => {
      l.value = !0, Pe(() => {
        var v;
        (v = t.value) == null || v.focus();
      });
    }, ke = () => {
      l.value = !1, m.value = s.comment.contentRaw;
    }, O = async () => {
      try {
        if (o.isPending)
          return;
        if (m.value !== s.comment.contentRaw) {
          c.value = !0, o.isUpdatingComment = !0;
          const v = await o.putComment({
            commentId: s.comment.id,
            content: m.value
          });
          v && o.comments.data.splice(
            o.comments.data.findIndex(
              (h) => h.id === s.comment.id
            ),
            1,
            v
          );
        }
        l.value = !1;
      } finally {
        c.value = !1, o.isUpdatingComment = !1;
      }
    }, _e = async () => {
      try {
        if (o.isPending || !window.confirm(e("deleteConfirm")))
          return;
        d.value = !0, o.isUpdatingComment = !0, await o.deleteComment({
          commentId: s.comment.id
        }) ? (o.comments.count -= 1, o.comments.data.length > 1 && o.comments.data.splice(
          o.comments.data.findIndex(
            (h) => h.id === s.comment.id
          ),
          1
        ), o.query.page > 1 && o.query.page > Math.ceil(o.comments.count / o.query.perPage) ? o.query.page -= 1 : await o.getComments()) : A(
          "error",
          new Error(e("deleteFailed"))
        );
      } finally {
        d.value = !1, o.isUpdatingComment = !1;
      }
    };
    return (v, h) => (r(), u("div", {
      class: V(["vssue-comment", {
        "vssue-comment-edit-mode": l.value,
        "vssue-comment-disabled": d.value || c.value
      }])
    }, [
      a("div", _i, [
        a("a", {
          href: T.value.homepage,
          title: T.value.username,
          target: "_blank",
          rel: "noopener noreferrer"
        }, [
          a("img", {
            src: T.value.avatar,
            alt: T.value.username
          }, null, 8, wi)
        ], 8, yi)
      ]),
      a("div", Pi, [
        we(v.$slots, "body", {}, () => [
          a("div", Ii, [
            a("span", bi, [
              a("a", {
                href: T.value.homepage,
                title: T.value.username,
                target: "_blank",
                rel: "noopener noreferrer"
              }, p(T.value.username), 9, Ti)
            ]),
            a("span", Ai, p(G.value), 1)
          ]),
          a("div", Ri, [
            l.value ? w((r(), u("textarea", {
              key: 0,
              ref_key: "input",
              ref: t,
              "onUpdate:modelValue": h[0] || (h[0] = ($) => m.value = $),
              class: "vssue-edit-comment-input",
              rows: x.value,
              onKeyup: h[1] || (h[1] = ue(me(($) => O(), ["ctrl"]), ["enter"]))
            }, null, 40, qi)), [
              [de, m.value]
            ]) : (r(), u("article", {
              key: 1,
              class: "markdown-body",
              innerHTML: f.value
            }, null, 8, xi))
          ]),
          a("div", Li, [
            l.value ? (r(), u("span", zi, p(n(e)("editMode")), 1)) : I("", !0),
            q.value ? (r(), u("span", Ui, [
              (r(!0), u(E, null, D(k.value, ($) => (r(), u("span", {
                key: $,
                class: "vssue-comment-reaction",
                title: n(e)(
                  C.value.includes($) ? "loading" : $
                ),
                onClick: (Ra) => fe({ reaction: $ })
              }, [
                _(n(z), {
                  name: C.value.includes($) ? "loading" : $,
                  title: n(e)(
                    C.value.includes($) ? "loading" : $
                  )
                }, null, 8, ["name", "title"]),
                a("span", Si, p((v.comment.reactions || {})[$]), 1)
              ], 8, Mi))), 128))
            ])) : I("", !0),
            a("span", Fi, [
              v.comment.author.username === y.value && l.value ? (r(), u("span", {
                key: 0,
                class: V(["vssue-comment-operation", { "vssue-comment-operation-muted": c.value }]),
                title: n(e)(c.value ? "loading" : "submit"),
                onClick: h[2] || (h[2] = ($) => O())
              }, [
                w(_(n(z), {
                  name: "loading",
                  title: n(e)("loading")
                }, null, 8, ["title"]), [
                  [b, c.value]
                ]),
                B(" " + p(n(e)("submit")), 1)
              ], 10, Vi)) : I("", !0),
              v.comment.author.username === y.value && l.value ? (r(), u("span", {
                key: 1,
                class: "vssue-comment-operation vssue-comment-operation-muted",
                title: n(e)("cancel"),
                onClick: h[3] || (h[3] = ($) => ke())
              }, p(n(e)("cancel")), 9, Ni)) : I("", !0),
              v.comment.author.username === y.value ? w((r(), u("span", {
                key: 2,
                class: "vssue-comment-operation",
                onClick: h[4] || (h[4] = ($) => Ce())
              }, [
                _(n(z), {
                  name: "edit",
                  title: n(e)("edit")
                }, null, 8, ["title"])
              ], 512)), [
                [b, !l.value]
              ]) : I("", !0),
              v.comment.author.username === y.value || n(o).isAdmin ? w((r(), u("span", {
                key: 3,
                class: "vssue-comment-operation",
                onClick: h[5] || (h[5] = ($) => _e())
              }, [
                _(n(z), {
                  name: d.value ? "loading" : "delete",
                  title: n(e)(d.value ? "loading" : "delete")
                }, null, 8, ["name", "title"])
              ], 512)), [
                [b, !l.value]
              ]) : I("", !0),
              w(a("span", {
                class: "vssue-comment-operation",
                onClick: h[6] || (h[6] = ($) => n(A)("reply-comment", v.comment))
              }, [
                _(n(z), {
                  name: "reply",
                  title: n(e)("reply")
                }, null, 8, ["title"])
              ], 512), [
                [b, !l.value]
              ])
            ])
          ])
        ])
      ])
    ], 2));
  }
}), Gi = { class: "vssue-pagination" }, Ei = { class: "vssue-pagination-per-page" }, Di = ["disabled"], Bi = ["value"], Ki = ["title"], ji = { class: "vssue-pagination-page" }, Ji = ["title"], Wi = ["disabled"], Oi = ["value"], Qi = ["textContent"], Xi = ["textContent"], Yi = ["title"], ae = /* @__PURE__ */ R({
  __name: "VssuePagination",
  setup(i) {
    const { t: e } = H(), t = M("vssue"), s = g(() => t.isPending), o = g(() => {
      const c = Math.ceil(
        t.comments.count / t.comments.perPage
      );
      return c > 1 ? c : 1;
    }), l = g(() => {
      const c = [5, 10, 20, 50];
      return !c.includes(t.options.perPage) && t.options.perPage < 100 && c.push(t.options.perPage), c.sort((d, y) => d - y);
    }), m = g({
      get: () => t.query.page > o.value ? o.value : t.query.page,
      set: (c) => {
        c > 0 && c <= o.value && (t.query.page = c);
      }
    }), C = g({
      get: () => t.query.perPage,
      set: (c) => {
        l.value.includes(c) && (t.query.perPage = c);
      }
    });
    return (c, d) => {
      var y;
      return r(), u("div", Gi, [
        a("div", Ei, [
          a("label", null, [
            w(a("select", {
              "onUpdate:modelValue": d[0] || (d[0] = (f) => C.value = f),
              class: "vssue-pagination-select",
              disabled: s.value
            }, [
              (r(!0), u(E, null, D(l.value, (f) => (r(), u("option", {
                key: f,
                value: f
              }, p(f), 9, Bi))), 128))
            ], 8, Di), [
              [Q, C.value]
            ]),
            a("span", null, p(n(e)("perPage")), 1)
          ]),
          (y = n(t).API) != null && y.platform.meta.sortable ? (r(), u("span", {
            key: 0,
            class: V({
              "vssue-pagination-link": !0,
              disabled: s.value
            }),
            title: n(e)("sort"),
            onClick: d[1] || (d[1] = (f) => n(t).query.sort = n(t).query.sort === "asc" ? "desc" : "asc")
          }, p(n(t).query.sort === "asc" ? "↑" : "↓"), 11, Ki)) : I("", !0)
        ]),
        a("div", ji, [
          a("span", {
            class: V({
              "vssue-pagination-link": !0,
              disabled: m.value === 1 || s.value
            }),
            title: n(e)("prev"),
            onClick: d[2] || (d[2] = (f) => m.value -= 1),
            textContent: "<"
          }, null, 10, Ji),
          a("label", null, [
            a("span", null, p(n(e)("page")), 1),
            w(a("select", {
              "onUpdate:modelValue": d[3] || (d[3] = (f) => m.value = f),
              class: "vssue-pagination-select",
              disabled: s.value
            }, [
              (r(!0), u(E, null, D(o.value, (f) => (r(), u("option", {
                key: f,
                value: f
              }, p(f), 9, Oi))), 128))
            ], 8, Wi), [
              [b, o.value > 1],
              [Q, m.value]
            ]),
            w(a("span", {
              textContent: p(m.value)
            }, null, 8, Qi), [
              [b, o.value < 2]
            ]),
            a("span", {
              textContent: p(` / ${o.value} `)
            }, null, 8, Xi)
          ]),
          a("span", {
            class: V({
              "vssue-pagination-link": !0,
              disabled: m.value === o.value || s.value
            }),
            title: n(e)("next"),
            onClick: d[4] || (d[4] = (f) => m.value += 1),
            textContent: ">"
          }, null, 10, Yi)
        ])
      ]);
    };
  }
}), Zi = { class: "vssue-comments" }, ea = /* @__PURE__ */ R({
  __name: "VssueComments",
  setup(i) {
    const e = M("vssue");
    return (t, s) => {
      var o;
      return r(), u("div", Zi, [
        _(ae),
        _(n(N), { group: "" }, {
          default: U(() => {
            var l;
            return [
              (r(!0), u(E, null, D((l = n(e).comments) == null ? void 0 : l.data, (m) => (r(), P(Hi, {
                key: m.id,
                comment: m
              }, null, 8, ["comment"]))), 128))
            ];
          }),
          _: 1
        }),
        w(_(ae, null, null, 512), [
          [b, (((o = n(e).comments) == null ? void 0 : o.data.length) || 0) > 5]
        ])
      ]);
    };
  }
}), re = (i, e) => {
  const { type: t = "default" } = i, { slots: s } = e;
  return F(
    "button",
    {
      class: ["vssue-button", `vssue-button-${t}`]
    },
    s
  );
}, ta = { class: "vssue-new-comment" }, sa = { class: "vssue-comment-avatar" }, na = ["href", "title"], oa = ["src", "alt"], ia = { class: "vssue-new-comment-body" }, aa = ["rows", "disabled", "placeholder"], ra = { class: "vssue-new-comment-footer" }, la = {
  key: 0,
  class: "vssue-current-user"
}, ca = {
  key: 1,
  class: "vssue-current-user"
}, ua = { class: "vssue-new-comment-operations" }, ma = /* @__PURE__ */ R({
  __name: "VssueNewComment",
  setup(i) {
    const { t: e } = H(), t = M("vssue"), s = L(), o = L(""), l = g(() => t.user), m = g(() => t.API && t.API.platform.name), C = g(() => t.isCreatingComment), c = g(() => C.value || l.value === null || t.issue === null), d = g(() => o.value === "" || t.isPending || t.issue === null), y = g(() => o.value.split(`
`).length - 1), f = g(() => y.value < 3 ? 5 : y.value + 2), T = () => {
      var q;
      (q = s.value) == null || q.focus();
    };
    pe(() => {
      ve("reply-comment", (q) => {
        const k = q.contentRaw.replace(/\n/g, `
> `), S = `@${q.author.username}

> ${k}

`;
        o.value = o.value.concat(S), T();
      });
    }), ge(() => {
      $e("reply-comment");
    });
    const G = async () => {
      d.value || (await t.postComment({ content: o.value }), o.value = "", await t.getComments());
    };
    return (q, k) => {
      var S;
      return r(), u("div", ta, [
        a("div", sa, [
          l.value ? (r(), u("a", {
            key: 0,
            href: l.value.homepage,
            title: l.value.username,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [
            a("img", {
              src: l.value.avatar,
              alt: l.value.username
            }, null, 8, oa)
          ], 8, na)) : (r(), P(n(z), {
            key: 1,
            name: ((S = m.value) == null ? void 0 : S.toLowerCase()) || "",
            title: n(e)("loginToComment", { platform: m.value }),
            onClick: k[0] || (k[0] = (x) => n(t).login())
          }, null, 8, ["name", "title"]))
        ]),
        a("div", ia, [
          w(a("textarea", {
            ref_key: "input",
            ref: s,
            "onUpdate:modelValue": k[1] || (k[1] = (x) => o.value = x),
            class: "vssue-new-comment-input",
            rows: f.value,
            disabled: c.value,
            placeholder: n(e)(l.value ? "placeholder" : "noLoginPlaceHolder"),
            spellcheck: !1,
            "aria-label": "leave a comment",
            onKeyup: k[2] || (k[2] = ue(me((x) => G(), ["ctrl"]), ["enter"]))
          }, null, 40, aa), [
            [de, o.value]
          ])
        ]),
        a("div", ra, [
          l.value ? (r(), u("span", la, [
            a("span", null, p(n(e)("currentUser")) + " - " + p(l.value.username) + " - ", 1),
            a("a", {
              class: "vssue-logout",
              onClick: k[3] || (k[3] = (x) => n(t).logout())
            }, p(n(e)("logout")), 1)
          ])) : (r(), u("span", ca, p(n(e)("loginToComment", { platform: m.value })), 1)),
          a("div", ua, [
            l.value ? (r(), P(n(re), {
              key: 0,
              class: "vssue-button-submit-comment",
              type: "primary",
              disabled: d.value,
              onClick: k[4] || (k[4] = (x) => G())
            }, {
              default: U(() => [
                w(_(n(z), { name: "loading" }, null, 512), [
                  [b, C.value]
                ]),
                B(" " + p(n(e)(C.value ? "submitting" : "submitComment")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : (r(), P(n(re), {
              key: 1,
              class: "vssue-button-login",
              type: "primary",
              title: n(e)("loginToComment", { platform: m.value }),
              onClick: k[5] || (k[5] = (x) => n(t).login())
            }, {
              default: U(() => [
                B(p(n(e)("login", { platform: m.value })), 1)
              ]),
              _: 1
            }, 8, ["title"]))
          ])
        ])
      ]);
    };
  }
}), da = { class: "vssue-notice" }, pa = ["textContent"], ga = /* @__PURE__ */ R({
  __name: "VssueNotice",
  setup(i) {
    const e = M("vssue"), t = j({
      show: !1,
      percent: 0,
      timer: null,
      speed: 200
    }), s = j({
      show: !1,
      message: null,
      timer: null
    }), o = () => {
      t.show = !0, t.percent = 0, t.timer = window.setInterval(() => {
        t.percent += 5, t.percent > 94 && t.timer !== null && window.clearInterval(t.timer);
      }, t.speed);
    }, l = () => {
      t.percent = 100, t.timer !== null && window.clearTimeout(t.timer), t.timer = null, window.setTimeout(() => {
        t.show = !1;
      }, t.speed);
    };
    K(() => e.isLoadingComments, (c) => {
      e.comments && (c ? o() : l());
    });
    const m = () => {
      s.show = !1, s.timer !== null && window.clearTimeout(s.timer), s.timer = null;
    }, C = (c) => {
      s.show = !0, s.message = c, s.timer !== null && window.clearTimeout(s.timer), s.timer = window.setTimeout(() => {
        m();
      }, 3e3);
    };
    return pe(() => {
      ve("error", (c) => C(c.message));
    }), ge(() => {
      $e("error"), t.timer !== null && window.clearTimeout(t.timer), s.timer !== null && window.clearTimeout(s.timer);
    }), (c, d) => (r(), u("div", da, [
      w(a("div", {
        class: "vssue-progress",
        style: Ie({
          width: `${t.percent}%`,
          transition: `all ${t.speed}ms linear`
        })
      }, null, 4), [
        [b, t.show]
      ]),
      _(n(N), null, {
        default: U(() => [
          w(a("div", {
            class: "vssue-alert",
            onClick: d[0] || (d[0] = (y) => m()),
            textContent: p(s.message)
          }, null, 8, pa), [
            [b, s.show]
          ])
        ]),
        _: 1
      })
    ]));
  }
}), ha = { class: "vssue-status-info" }, le = /* @__PURE__ */ R({
  __name: "VssueStatus",
  setup(i) {
    const { t: e } = H(), t = M("vssue"), s = g(() => t.isFailed ? "failed" : t.isInitializing ? "initializing" : t.isIssueNotCreated && !t.isCreatingIssue ? t.isAdmin || !t.isLogined ? "issueNotCreated" : "failed" : t.isLoginRequired ? "loginRequired" : !t.comments || t.isCreatingIssue ? "loadingComments" : t.comments.data.length === 0 ? "noComments" : null), o = () => {
      s.value === "issueNotCreated" ? t.postIssue() : s.value === "loginRequired" && t.login();
    };
    return (l, m) => (r(), P(n(N), null, {
      default: U(() => [
        s.value ? (r(), u("div", {
          key: s.value,
          class: "vssue-status"
        }, [
          ["failed", "loadingComments", "initializing"].includes(s.value) ? (r(), P(n(z), {
            key: 0,
            name: s.value === "failed" ? "error" : "loading"
          }, null, 8, ["name"])) : I("", !0),
          a("p", ha, [
            (r(), P(be(
              ["issueNotCreated", "loginRequired"].includes(s.value) ? "a" : "span"
            ), { onClick: o }, {
              default: U(() => [
                B(p(n(e)(s.value)), 1)
              ]),
              _: 1
            }))
          ])
        ])) : I("", !0)
      ]),
      _: 1
    }));
  }
}), va = {
  key: 0,
  class: "vssue-body"
}, $a = /* @__PURE__ */ R({
  __name: "VssueBody",
  setup(i) {
    const e = M("vssue");
    return (t, s) => (r(), P(n(N), null, {
      default: U(() => [
        n(e).isInitializing ? (r(), P(le, { key: 1 })) : (r(), u("div", va, [
          n(e).API ? (r(), P(ma, { key: 0 })) : I("", !0),
          _(ga),
          _(n(N), null, {
            default: U(() => [
              n(e).comments && n(e).comments.data.length > 0 ? (r(), P(ea, { key: 0 })) : (r(), P(le, { key: 1 }))
            ]),
            _: 1
          })
        ]))
      ]),
      _: 1
    }));
  }
}), fa = { class: "vssue-header" }, Ca = ["href"], ka = { class: "vssue-header-powered-by" }, _a = /* @__PURE__ */ a("span", null, "Powered by", -1), ya = { key: 0 }, wa = ["href", "title"], Pa = /* @__PURE__ */ a("span", null, "&", -1), Ia = ["title"], ba = /* @__PURE__ */ R({
  __name: "VssueHeader",
  setup(i) {
    const { t: e } = H(), t = M("vssue");
    return (s, o) => (r(), u("div", fa, [
      a("a", {
        class: "vssue-header-comments-count",
        href: n(t).issue ? n(t).issue.link : void 0,
        target: "_blank",
        rel: "noopener noreferrer"
      }, [
        a("span", null, p(n(t).comments ? n(e)("comments", n(t).comments.count, {
          count: n(t).comments.count
        }) : n(e)("comments", 0)), 1)
      ], 8, Ca),
      a("span", ka, [
        _a,
        n(t).API ? (r(), u("span", ya, [
          a("a", {
            href: n(t).API.platform.link,
            title: `${n(t).API.platform.name} API ${n(t).API.platform.version}`,
            target: "_blank",
            rel: "noopener noreferrer"
          }, p(n(t).API.platform.name), 9, wa),
          Pa
        ])) : I("", !0),
        a("a", {
          href: "https://github.com/meteorlxy/vssue",
          title: `Vssue v${n(t).version}`,
          target: "_blank",
          rel: "noopener noreferrer"
        }, " Vssue ", 8, Ia)
      ])
    ]));
  }
});
class Ta {
  constructor() {
    this.title = (e) => `${e.prefix}${document.title}`, this.issueId = null, this.options = null, this.API = null, this.accessToken = null, this.user = null, this.issue = null, this.comments = null, this.query = {
      page: 1,
      perPage: 10,
      sort: "desc"
    }, this.isInitializing = !0, this.isIssueNotCreated = !1, this.isLoginRequired = !1, this.isFailed = !1, this.isCreatingIssue = !1, this.isLoadingComments = !1, this.isCreatingComment = !1, this.isUpdatingComment = !1, K(() => this.query.perPage, () => {
      this.query.page = 1, this.getComments();
    }), K([() => this.query.page, () => this.query.sort], this.getComments);
  }
  get issueTitle() {
    return this.options === null ? "" : typeof this.title == "function" ? this.title(this.options) : `${this.options.prefix}${this.title}`;
  }
  get isPending() {
    return this.isLoadingComments || this.isCreatingComment || this.isUpdatingComment;
  }
  get isLogined() {
    return this.accessToken !== null && this.user !== null;
  }
  get isAdmin() {
    return this.options !== null && this.accessToken !== null && this.user !== null && (this.user.username === this.options.owner || this.options.admins.includes(this.user.username));
  }
  /**
   * the key of access token for local storage
   */
  get accessTokenKey() {
    return this.API ? `Vssue.${this.API.platform.name.toLowerCase()}.access_token` : "";
  }
  /**
   * Set options of Vssue
   */
  setOptions(e) {
    this.options = Object.assign(
      {
        labels: ["Vssue"],
        state: "Vssue",
        prefix: "[Vssue]",
        admins: [],
        perPage: 10,
        proxy: (s) => `https://cors-anywhere.azm.workers.dev/${s}`,
        issueContent: ({ url: s }) => s,
        autoCreateIssue: !1
      },
      e
    );
    const t = ["api", "owner", "repo", "clientId"];
    for (const s of t)
      this.options[s] || console.warn(`[Vssue] the option '${s}' is required`);
    if (this.options.locale)
      ie(this.options.locale);
    else {
      const s = Object.keys(J.global.messages), o = window.navigator.languages;
      ie(o.filter((l) => s.includes(l)).shift() || Ci());
    }
  }
  /**
   * Initialization
   */
  async init() {
    try {
      await this.initStore(), await this.initComments();
    } catch (e) {
      e.response && [401, 403].includes(e.response.status) ? this.isLoginRequired = !0 : this.isFailed = !0, console.error(e);
    }
  }
  /**
   * Init VssueStore
   */
  async initStore() {
    try {
      if (!this.options)
        throw new Error("Options are required to initialize Vssue");
      this.API = null, this.accessToken = null, this.user = null, this.issue = null, this.comments = null, this.query = {
        page: 1,
        perPage: this.options.perPage,
        sort: "desc"
      }, this.isInitializing = !0, this.isIssueNotCreated = !1, this.isLoginRequired = !1, this.isFailed = !1, this.isCreatingIssue = !1, this.isLoadingComments = !1, this.isCreatingComment = !1, this.isUpdatingComment = !1;
      const e = this.options.api;
      this.API = new e({
        baseURL: this.options.baseURL,
        labels: this.options.labels,
        state: this.options.state,
        owner: this.options.owner,
        repo: this.options.repo,
        clientId: this.options.clientId,
        clientSecret: this.options.clientSecret,
        proxy: this.options.proxy
      }), await this.handleAuth();
    } finally {
      this.isInitializing = !1;
    }
  }
  /**
   * Init comments
   */
  async initComments() {
    if (!(!this.API || !this.options))
      if (this.issueId) {
        const [e, t] = await Promise.all([
          this.API.getIssue({
            accessToken: this.accessToken,
            issueId: this.issueId
          }),
          this.API.getComments({
            accessToken: this.accessToken,
            issueId: this.issueId,
            query: this.query
          })
        ]);
        this.issue = e, this.comments = t;
      } else
        this.issue = await this.API.getIssue({
          accessToken: this.accessToken,
          issueTitle: this.issueTitle
        }), this.issue === null ? (this.isIssueNotCreated = !0, this.options.autoCreateIssue && await this.postIssue()) : await this.getComments();
  }
  /**
   * Post a new issue
   */
  async postIssue() {
    if (!(!this.API || !this.options || this.issue || this.issueId) && (this.isLogined || this.login(), !!this.isAdmin))
      try {
        this.isCreatingIssue = !0;
        const e = await this.API.postIssue({
          title: this.issueTitle,
          content: await this.options.issueContent({
            options: this.options,
            url: Re(window.location.href)
          }),
          accessToken: this.accessToken
        });
        this.issue = e, this.isIssueNotCreated = !1, await this.getComments();
      } catch {
        this.isFailed = !0;
      } finally {
        this.isCreatingIssue = !1;
      }
  }
  /**
   * Get comments of this vssue according to the issue id
   */
  async getComments() {
    try {
      if (!this.API || !this.issue || this.isLoadingComments)
        return;
      this.isLoadingComments = !0;
      const e = await this.API.getComments({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        query: this.query
      });
      return this.comments = e, this.query.page !== e.page && (this.query.page = e.page), this.query.perPage !== e.perPage && (this.query.perPage = e.perPage), e;
    } catch (e) {
      if (e.response && [401, 403].includes(e.response.status) && !this.isLogined)
        this.isLoginRequired = !0;
      else
        throw A("error", e), e;
    } finally {
      this.isLoadingComments = !1;
    }
  }
  /**
   * Post a new comment
   */
  async postComment({
    content: e
  }) {
    try {
      return !this.API || !this.issue || this.isCreatingComment ? void 0 : (this.isCreatingComment = !0, await this.API.postComment({
        accessToken: this.accessToken,
        content: e,
        issueId: this.issue.id
      }));
    } catch (t) {
      throw A("error", t), t;
    } finally {
      this.isCreatingComment = !1;
    }
  }
  /**
   * Edit a comment
   */
  async putComment({
    commentId: e,
    content: t
  }) {
    try {
      return !this.API || !this.issue ? void 0 : await this.API.putComment({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId: e,
        content: t
      });
    } catch (s) {
      throw A("error", s), s;
    }
  }
  /**
   * Delete a new comment
   */
  async deleteComment({
    commentId: e
  }) {
    try {
      return !this.API || !this.issue ? void 0 : await this.API.deleteComment({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId: e
      });
    } catch (t) {
      throw A("error", t), t;
    }
  }
  /**
   * Get reactions of a comment
   */
  async getCommentReactions({
    commentId: e
  }) {
    try {
      return !this.API || !this.issue ? void 0 : await this.API.getCommentReactions({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId: e
      });
    } catch (t) {
      throw A("error", t), t;
    }
  }
  /**
   * Create a new reaction to a certain comment
   */
  async postCommentReaction({
    commentId: e,
    reaction: t
  }) {
    try {
      return !this.API || !this.issue ? !1 : await this.API.postCommentReaction({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId: e,
        reaction: t
      });
    } catch (s) {
      throw A("error", s), s;
    }
  }
  /**
   * Redirect to the platform's authorization page
   */
  login() {
    this.API && this.API.redirectAuth();
  }
  /**
   * Clean the access token stored in local storage
   */
  logout() {
    this.setAccessToken(null), this.user = null;
  }
  /**
   * Handle authorization and set access_token
   */
  async handleAuth() {
    if (!this.API)
      return;
    const e = await this.API.handleAuth();
    e ? (this.setAccessToken(e), this.user = await this.API.getUser({ accessToken: e })) : this.getAccessToken() ? this.user = await this.API.getUser({ accessToken: this.accessToken }) : (this.setAccessToken(null), this.user = null);
  }
  /**
   * Get access token from local storage
   */
  getAccessToken() {
    return this.accessToken = window.localStorage.getItem(this.accessTokenKey), this.accessToken;
  }
  /**
   * Save access token to local storage
   */
  setAccessToken(e) {
    e === null ? window.localStorage.removeItem(this.accessTokenKey) : window.localStorage.setItem(this.accessTokenKey, e), this.accessToken = e;
  }
}
const Aa = { class: "vssue" }, ce = /* @__PURE__ */ R({
  __name: "Vssue",
  props: {
    title: { type: [String, Function, null] },
    issueId: {},
    options: {}
  },
  setup(i) {
    const e = i, t = j(new Ta());
    return Te("vssue", t), K(() => e.options, (s) => {
      t.setOptions(s);
    }), Ae(() => {
      e.title !== null && (t.title = e.title), e.issueId !== null && (t.issueId = e.issueId), t.setOptions(e.options), t.init();
    }), (s, o) => (r(), u("div", Aa, [
      _(ba),
      _($a)
    ]));
  }
}), za = {
  get version() {
    return "0.0.0";
  },
  installed: !1,
  install(i, e) {
    if (this.installed)
      return !1;
    this.installed = !0, i.use(J), i.component("Vssue", ce);
  },
  VssueComponent: ce
};
export {
  ce as VssueComponent,
  za as default
};
